import OpenAI from 'openai';

// New
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const completion = await openai.completions.create({
          model: "davinci:ft-personal-2023-08-25-09-01-18",
          prompt: event.body,
          presence_penalty: 0,
          frequency_penalty: 0.3,
          max_tokens: 100,
          temperature: 0, 
          stop: ['\n', '->']

    })
   
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: completion.choices[0].text }),
      
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
