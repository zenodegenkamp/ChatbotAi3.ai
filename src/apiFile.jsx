import { useState } from "react"
// import { process } from '/env';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})



export default async function FetchChatBot(converstationStr) {
  try {
    const completion = await openai.completions.create({
      model: "davinci:ft-personal-2023-08-25-09-01-18",
      prompt: converstationStr,
      presence_penalty: 0,
      frequency_penalty: 0.3,
      max_tokens: 100,
      temperature: 0, 
      stop: ['\n', '->']
    })

    return completion.choices[0].text;
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    return "Error fetching response";
  }
}

