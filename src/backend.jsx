import OpenAI from "openai";

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
                content: "Rules: Every vowel is replaced with a different vowel" // PLACEHOLDER PROMPT
               },
               { 
                role: "user",   
                content: "Translate: " + query 
               }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}