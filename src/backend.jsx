import OpenAI from "openai";
import {rules} from "./rules.jsx";

const openai = new OpenAI({"apiKey": import.meta.env.VITE_KEY, 
                           dangerouslyAllowBrowser: true});

export async function makeQuery(query) {

  const completion = await openai.chat.completions.create({
    messages: [{ 
                role: "system", 
                content: "You are a translator. Provided with rules for translation, translate the given sentence." 
               },
               { 
                role: "user",   
                content: rules
               },
               { 
                role: "user",   
                content: "Translate: " + query 
               }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}