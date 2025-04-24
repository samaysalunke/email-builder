import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export interface AIGenerationProps {
  prompt: string;
  type: 'copy' | 'image';
  context?: {
    brand?: string;
    industry?: string;
    tone?: string;
  };
}

export const generateContent = async ({ prompt, type, context }: AIGenerationProps) => {
  try {
    if (type === 'copy') {
      const systemPrompt = `You are an expert email marketing copywriter for ${context?.industry || 'ecommerce'} brands.
        Write in a ${context?.tone || 'professional'} tone.
        ${context?.brand ? `The brand name is ${context.brand}.` : ''}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 150
      });

      return completion.choices[0].message.content;
    }

    if (type === 'image') {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Create a professional, high-quality email marketing image: ${prompt}. 
                Style: Modern, clean, suitable for email marketing.
                Format: Landscape, optimized for email viewing.`,
        n: 1,
        size: "1024x1024",
        quality: "standard",
        response_format: "url"
      });

      return response.data[0].url;
    }
  } catch (error) {
    console.error('AI generation error:', error);
    throw new Error('Failed to generate content');
  }
};