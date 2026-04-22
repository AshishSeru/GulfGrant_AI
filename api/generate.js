export default async function handler(req, res) {
  // only POST allowed
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { system, user } = req.body;

  if (!system || !user) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Service not configured. Please contact the administrator.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 1400,
        temperature: 0.72,
        messages: [
          { role: 'system', content: system },
          { role: 'user',   content: user   },
        ],
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || `OpenAI error ${response.status}`);
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;
    const usage = data.usage || {};

    if (!text) throw new Error('No content returned from model');

    return res.status(200).json({
      text,
      tokens: usage.total_tokens || 0,
      prompt_tokens: usage.prompt_tokens || 0,
      completion_tokens: usage.completion_tokens || 0,
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
