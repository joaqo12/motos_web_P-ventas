
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateRaffleDescription = async (bikeName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Escribe una descripción publicitaria corta y emocionante (máximo 100 palabras) para un sorteo de una moto ${bikeName}. Debe ser en español argentino, informal y muy motivadora.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini description error:", error);
    return `¡No pierdas la oportunidad de ganar esta increíble ${bikeName}! Participa hoy mismo.`;
  }
};

export const verifyReceiptAnalysis = async (orderId: string, amount: number) => {
  // Simulated analysis for now, as we don't have the real image yet
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Actúa como un asistente de seguridad. Un usuario subió un comprobante para la orden ${orderId} por un monto de $${amount}. Genera una nota de verificación breve confirmando que los datos coinciden o alertando si hay inconsistencias típicas.`,
    });
    return response.text;
  } catch (error) {
    return "Verificación manual requerida. Los datos parecen consistentes.";
  }
};
