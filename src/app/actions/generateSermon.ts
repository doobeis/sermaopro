"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateSermon({
  theme,
  audience,
  style,
  version,
}: {
  theme: string;
  audience: string;
  style: string;
  version: string;
}) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error(
      "A chave GEMINI_API_KEY não foi configurada."
    );
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  // Utiliza o modelo flash mais recente compatível com chaves novas
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
Você é um teólogo erudito, pastor sênior e mestre incomparável em homilética. 
Sua missão é estruturar um esboço de pregação incrivelmente profundo, mas acessível.

DIRETRIZES:
1. Título e subtítulo chamativos.
2. Formato Markdown Perfeito.
3. Use a 1ª Pessoa do Plural ou Singular (dirija-se à congregação, fale como se estivesse no púlpito pregando AGORA).
4. Estrutura Clássica:
   - Introdução cativante que prenda a atenção imediatamente.
   - 3 Pontos Centrais trazendo novidade exegética ou cultural (Mostre algo que o povo geralmente não percebe no texto).
   - Conclusão com forte apelo.
5. Versão Bíblica Obrigatória paracitações: ${version}.

ENTRADAS DO PREGADOR:
- TEMA CENTRAL: ${theme}
- PÚBLICO: ${audience}
- ABORDAGEM: ${style}

Entrega APENAS o esboço limpo e pronto em markdown.
`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    console.error("Gemini Error:", error);
    throw new Error("Falha na comunicação com o Google AI: " + (error.message || "Tente novamente mais tarde."));
  }
}
