import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Initialize Gemini API client on the server side
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API endpoint for exploring Indian Knowledge System queries with Gemini
  app.post('/api/iks-inquire', async (req, res) => {
    try {
      const { query, topic } = req.body;
      if (!query || typeof query !== 'string' || !query.trim()) {
        return res.status(400).json({ error: 'Query is required' });
      }

      const systemInstruction = `You are an erudite scholar and expert researcher specializing in the Indian Knowledge System (IKS), classical Indian sciences (Ganita/mathematics, Khagola/astronomy, Ayurveda & Shalya Tantra/medicine, Panini's linguistics & NLP, Dhatuvidya/metallurgy, Vastu & Shilpa/architecture), Maratha history, civilizational heritage, and broader cross-disciplinary inquiries.

For whatever inquiry or question the user asks:
1. Provide an accurate, comprehensive, and intellectually rigorous answer.
2. Where relevant, cite authentic historical treatises (e.g. Sulba Sutras, Sushruta Samhita, Charaka Samhita, Aryabhatiya, Brahmasphutasiddhanta, Ashtadhyayi, Arthashastra, Rasaratnakara, Surya Siddhanta, Shivabharata, etc.).
3. Include relevant Sanskrit, Marathi, or classical terminology with precise transliteration and meaning.
4. Bridge classical insights with modern scientific, computational, architectural, or historical parallels.
5. Structure your response with clear sections, bullet points, and key takeaways for effortless reading.`;

      const prompt = topic && topic !== 'All Domains'
        ? `Focus domain: ${topic}.\nUser Inquiry: ${query.trim()}`
        : `User Inquiry: ${query.trim()}`;

      const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
      let resultText = '';
      let usedModel = '';

      for (const model of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
              systemInstruction,
            },
          });
          if (response.text) {
            resultText = response.text;
            usedModel = model;
            break;
          }
        } catch (modelErr: any) {
          console.warn(`Gemini model ${model} temporarily unavailable:`, modelErr.status || modelErr.message);
        }
      }

      if (!resultText) {
        throw new Error('Gemini service temporarily unavailable across all models. Please try again shortly.');
      }

      return res.json({
        answer: resultText,
        model: usedModel,
        searchGrounded: true,
      });
    } catch (error: any) {
      console.error('Gemini IKS inquiry error:', error);
      return res.status(500).json({
        error: error.message || 'Failed to process inquiry via Gemini',
      });
    }
  });

  // Vite integration
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use('/public', express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`IKS Heritage server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
