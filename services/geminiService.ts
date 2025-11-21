import { GoogleGenAI } from "@google/genai";

// Initialize the client. The API_KEY is guaranteed to be in process.env per instructions.
// If it happens to be missing in a local dev environment, we handle gracefully in the call.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateTeacherAdvice = async (
  context: string,
  question: string
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Error: API Key missing. Please check your configuration.";

  try {
    const prompt = `
      You are an expert school psychologist and educational consultant. 
      You are helping a classroom teacher understand the WISC-V (Wechsler Intelligence Scale for Children) cognitive profile.
      
      Context of current slide/topic: ${context}
      
      Teacher's Question: ${question}
      
      Provide a practical, empathetic, and actionable response. 
      Focus on classroom strategies, accommodations, and understanding the student's behavior through the lens of cognitive processing.
      Keep the response concise (under 150 words) but high impact. Use bullet points if helpful.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while consulting the knowledge base. Please try again.";
  }
};

export const generateCaseStudy = async (indexName: string): Promise<string> => {
    const ai = getClient();
    if (!ai) return "Error: API Key missing.";

    try {
        const prompt = `
          Create a very short (3-4 sentences) fictional case study of a student named Alex who has a weakness in the ${indexName} on the WISC-V.
          Describe a specific classroom situation where this weakness manifests and one specific intervention the teacher uses.
        `;
    
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });
    
        return response.text || "Could not generate case study.";
      } catch (error) {
        console.error("Gemini API Error:", error);
        return "Error generating case study.";
      }
}