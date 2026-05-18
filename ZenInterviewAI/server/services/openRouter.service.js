
import axios from "axios"

export const askAi = async (messages) =>{
    try {
         console.log('step1')
        if(!messages || !Array.isArray(messages) || messages.length === 0){
            throw new Error("Messages array is empty: ")
        }
        const response= await axios.post('https://openrouter.ai/api/v1/chat/completions',{
            model:"openai/gpt-4o-mini",
            messages: messages
        },{
    headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
  },} );
     console.log('step2')
  const rawcontent = response?.data?.choices?.[0]?.message?.content;
     console.log("step3")
  const content = Array.isArray(rawcontent)?rawcontent.map(c=>c.text || "").join(""):rawcontent
      console.log("step4")
    if(!content || !content.trim()){
        throw new Error("AI returned nothing.")
    }
      return String(content).trim()
        
    } catch (error) {
        console.error("OpenRouter Error:error.response?.data || error.message ")
        throw new Error("OpenRouter API Error")
    }
}