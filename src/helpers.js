import OpenAI from "openai";

const openai = new OpenAI({"apiKey": process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true});

export async function runGPT() {

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You write haikus about a topic given to you" },
               { role: "user",   content: "react js" }],
    model: "gpt-3.5-turbo",
  });

  document.getElementById("res").innerHTML = (completion.choices[0].message.content);
}