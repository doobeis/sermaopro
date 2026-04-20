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
      "A chave GEMINI_API_KEY não foi configurada no servidor (.env.local)."
    );
  }

  // Inicializa o cliente do Gemini
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  // Modelos recomendados: gemini-1.5-flash para rapidez e ampla disponibilidade
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
Você é um teólogo hiper qualificado, pastor sênior e mestre em homilética.
Sua missão é gerar um esboço de pregação estruturado, com profundidade exegética, bases originais (grego/hebraico quando enriquecedor) e aplicação primorosa.
A estética deve ser refinada, inspirando um ar "clássico e espiritual".

DIRETRIZES TÉCNICAS:
1. Comece com um grande Título chamativo e um subtítulo cativante (Use # e ##). Logo após, o bloco (>) centralizando o Texto Sagrado na versão indicada.
2. Entregue exatamente um Markdown perfeito pronto para ser renderizado.
3. Linguagem Homilética Diretiva (O 'Pulo do Gato'): Use a linguagem EM PRIMEIRA PESSOA ou dirigindo-se diretamente à congregação, entregando o conteúdo "mastigado" para o pregador apenas ler e pregar.
Em vez de dizer: "Explique que Jesus acalma o vento"
Escreva: "Irmãos, quantas vezes tentamos silenciar o vento com a nossa própria força? Quando Jesus se levanta no barco das nossas emoções, o mar não apenas obedece, ele reconhece o seu Criador."
4. Estrutura recomendada: 
   - Introdução "Gancho" (Prendendo a atenção).
   - 3 Pontos Principais com aplicações práticas formidáveis.
   - Conclusão conectando a um encerramento (Doxologia ou Apelo).
5. Versão da Bíblia exigida nesta geração: ${version}. Não desvie dessa versão ao citar!

DADOS INSERIDOS PELO PREGADOR PARA ESTE ESBOÇO:
- TEMA / VERSÍCULO REFERÊNCIA: ${theme}
- PÚBLICO MIRA: ${audience}
- ESTILO HOMILÉTICO: ${style}
`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    console.error("Erro interno do Gemini backend:", error);
    throw new Error("Ops... Nossas engrenagens divinas falharam ao comunicar com a nuvem do Google. Detalhe técnico: " + (error.message || "Falha desconhecida"));
  }
}
