import OpenAI from "openai";
import { rules } from './rules.js';

const openai = new OpenAI({"apiKey": process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true});

export async function queryGPT(q) {

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a translator. Provided with rules for translation, translate a given sentence to fit the style." },
               { role: "user",   content: rules() },
               { role: "user",   content: q }],
    model: "gpt-3.5-turbo",
  });

  document.getElementById("gptResponse").innerHTML = (completion.choices[0].message.content);
}