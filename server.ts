import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Phorm Karona Portfolio API' });
  });

  // AI Marketing Strategy & Growth Audit API endpoint
  app.post('/api/marketing-audit', async (req, res) => {
    try {
      const { brandName, industry, targetAudience, marketGoal } = req.body;

      if (!brandName || !industry) {
        return res.status(400).json({ error: 'Brand name and industry are required.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback structured analysis
        return res.json({
          brandName,
          targetAudience: targetAudience || 'Tech-savvy Cambodian urban consumers & retail shoppers',
          growthTactics: [
            'Omnichannel Go-To-Market Launch in AEON Mall Phnom Penh with influencer unboxing pods',
            'Full-funnel Meta & TikTok video ad creative targeting high-affinity tech early adopters',
            'Retail consignment expansion across Game Land & Space Bunny partner networks',
            'KOL review campaign with top tech influencers across TikTok & YouTube'
          ],
          suggestedChannels: ['Meta Ads (FB/IG)', 'TikTok Shop & Video Ads', 'Retail Mall Pop-ups', 'Google Search & SEM'],
          keyPerformanceIndicators: ['Customer Acquisition Cost (CAC)', 'Showroom & Mall Traffic Footfall', 'Return on Ad Spend (ROAS)', 'Consignment Sales Velocity'],
          phormInsight: `For ${brandName} to dominate in ${industry}, we must pair rapid online demand generation with tangible retail experiences. A structured 10-step launch framework will convert initial market interest into sustainable market share.`
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const prompt = `You are Phorm Karona, an executive Digital Marketing Manager and Brand Strategist based in Cambodia who manages 9 technology brands (including Amazfit, Dreame, Imilab, Deerma) and a 14-member marketing team.
Provide an executive Go-To-Market and Digital Marketing Growth Audit for a brand with these details:
- Brand Name: ${brandName}
- Industry: ${industry}
- Target Audience: ${targetAudience || 'Tech-conscious consumers in Southeast Asia / Cambodia'}
- Primary Market Goal: ${marketGoal || 'Rapid brand launch, retail expansion, and sales conversion'}

Return JSON containing:
1. "brandName": string
2. "targetAudience": string (concise target persona description)
3. "growthTactics": array of 4 actionable, executive marketing tactics tailored for this brand (influencers, retail pop-ups, performance ads, content).
4. "suggestedChannels": array of 4 primary digital/offline channels to prioritize.
5. "keyPerformanceIndicators": array of 4 critical metrics to track.
6. "phormInsight": 2-sentence executive summary commentary in Phorm Karona's confident, strategic tone.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              brandName: { type: Type.STRING },
              targetAudience: { type: Type.STRING },
              growthTactics: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              suggestedChannels: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              keyPerformanceIndicators: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              phormInsight: { type: Type.STRING }
            },
            required: [
              'brandName',
              'targetAudience',
              'growthTactics',
              'suggestedChannels',
              'keyPerformanceIndicators',
              'phormInsight'
            ]
          }
        }
      });

      const resultText = response.text;
      if (!resultText) {
        throw new Error('No content generated');
      }

      const auditData = JSON.parse(resultText);
      return res.json(auditData);
    } catch (err: any) {
      console.error('Error generating marketing audit:', err);
      res.status(500).json({ error: err.message || 'Failed to generate marketing audit.' });
    }
  });

  // Vite middleware for dev or static server for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
