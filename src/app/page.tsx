"use client";

import { useState, useRef } from "react";
import { BookOpen, Copy, Download, Loader2, BookType, Users, Presentation, AlignLeft, Crown, Sparkles, Lock } from "lucide-react";
import ReactMarkdown from "react-markdown";
// Dynamically import html2pdf to avoid SSR issues
import dynamic from 'next/dynamic';

export default function Home() {
  const [theme, setTheme] = useState("");
  const [audience, setAudience] = useState("Geral");
  const [style, setStyle] = useState("Expositiva");
  const [version, setVersion] = useState("NVI");
  
  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState("");
  const [isProMode, setIsProMode] = useState(false); // In production, this comes from your database
  
  const whatsappUrl = "https://wa.me/554497475235?text=Ol%C3%A1%21%20Gostaria%20de%20assinar%20o%20plano%20PRO%20do%20Serm%C3%A3o%20Pro%20%28PregAI%29%20para%20liberar%20Slides%2C%20Ilustra%C3%A7%C3%B5es%20e%20PDFs.";

  const resultRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme.trim()) return;

    setIsLoading(true);
    setResultText("");

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const simulatedMarkdown = `
# Esboço: ${theme}

**Público-alvo:** ${audience}  
**Estilo:** ${style}  
**Versão Bíblica:** ${version}

---

## 1. Introdução
* **Quebra-gelo:** "Quantos aqui já sentiram que estavam lutando uma batalha onde as chances de vitória pareciam matematicamente impossíveis? Aquela sensação de que o vento é forte demais para o seu barco, ou que os recursos não dão conta do tamanho do problema?"
* **Contexto Bíblico:** "Quando olhamos para as Escrituras, e especialmente o tema de ${theme}, não vemos heróis inquebráveis ou super-homens. Vemos pessoas exatamente com as nossas dores. No original bíblico, muitas vezes a palavra usada para provação não significa 'destruição', mas 'o fogo que revela o ouro'. É exatamente nesse ponto de pressão que Deus decide mudar a história."
* **Proposição Principal:** O grande princípio para esta noite é este: O tamanho da sua crise não define o seu destino; o que garante a sua vitória é a magnitude do Deus que já está no barco com você.

## 2. Desenvolvimento

### Ponto 1: A Promessa que Rompe a Lógica Humana
*(Referência chave em evidência - ${version})*
* "Observem atentamente o que o texto sagrado nos mostra. O Senhor nem sempre promete que a tempestade vai acabar no primeiro clamor, Ele promete que, com Ele, o seu barco jamais irá afundar. A lógica humana manda você focar nas ondas, mas a voz do alto manda você olhar para Cristo. Se você está enfrentando lutas pesadas no seu lar ou profissão, sua âncora não pode ser o saldo bancário, tem que ser a fidelidade eterna de Deus!"

### Ponto 2: O Desafio de Soltar o Controle
* "Irmãos, o maior obstáculo para o seu milagre muitas vezes não é o inimigo lá fora, mas a sua tentativa de controlar tudo aqui dentro. Nós oramos pedindo socorro, mas queremos ditar para Deus *como*, *onde* e *quando* Ele deve assinar o milagre. A Palavra nos confronta hoje: enquanto você tentar segurar as rédeas da sua vida com as próprias mãos, não haverá espaço para o impossível pulsar de verdade em você."

### Ponto 3: A Resolução Cristocêntrica
* "No clímax desta narrativa (e de todas as Escrituras), o livramento acontece não pela força do braço, mas pela entrega do coração. Aponte seus olhos para Jesus agora: na Cruz, o que o mundo leu como 'fracasso total', Deus coroou como a Redenção da Humanidade! Aquilo que estava morto no seu Ministério, na sua Família ou nas suas emoções, diante do túmulo vazio de Cristo, é apenas adubo para uma nova vida germinar."

## 3. Conclusão
* **Resumo de Aplicação:** "Recapitulando: você não foi chamado para entender todos os ventos, foi chamado para confiar naquele que caminha sobre eles e, principalmente, soltar as rédeas do seu próprio coração aos pés da cruz."
* **Apelo Pastoral Dinâmico:** "Se você entrou neste lugar hoje esmagado pelo peso da incerteza, eu quero desafiar você a levantar sua mão agora mesmo, num ato profético de rendição. Nós vamos parar de viver baseados no que vemos e começar agir com base Naquele que nos prometeu!"
* **Oração Final:** "Deus Todo-Poderoso, nós quebramos agora o jugo da paralisia e o medo do fracasso na vida desta igreja. Derrama o fogo do Teu Espírito sobre esta Palavra e que o efeito dela seja permanente. No Nome imbatível de Jesus, Amém."

---
*Gerado por PregAI ✨ (A sabedoria da Palavra, potencializada)*
`;

    setResultText(simulatedMarkdown);
    setIsLoading(false);
  };

  const handleCopy = () => {
    if (resultText) {
      navigator.clipboard.writeText(resultText);
      alert("Esboço copiado para a área de transferência!");
    }
  };

  const handleGenerateIllustration = () => {
    if (!isProMode) {
      if (confirm("👑 Recurso Exclusivo!\n\nPara gerar Ilustrações Práticas você precisa assinar o plano PRO.\nDeseja falar comigo no WhatsApp para liberar seu acesso?")) {
        window.open(whatsappUrl, '_blank');
      }
      return;
    }
    const illustration = `\n\n---\n### ✨ Ilustração Prática (Exclusivo PRO)\n> **O Ponto Cego e a Confiança:** "Imagine que você está no banco do carona de um carro em alta velocidade, numa neblina tão densa que não enxerga um palmo à frente. Se o motorista for um estranho, você entra em pânico e tenta tomar o volante. Mas se o motorista for o seu pai, você inclina a cabeça no banco e dorme, porque a sua paz não vem do que você vê lá fora, vem de saber *quem* está no controle. Em nossa jornada de fé, Deus não nos chama para dissipar a névoa, mas para confiarmos em quem está conduzindo a nossa história."`;
    setResultText(prev => prev + illustration);
  };

  const handleGenerateSlides = () => {
    if (!isProMode) {
      if (confirm("👑 Recurso Exclusivo!\n\nTransforme instantaneamente seu esboço em uma estrutura de Slides profissionais no plano PRO.\nDeseja assinar agora pelo WhatsApp?")) {
        window.open(whatsappUrl, '_blank');
      }
      return;
    }
    const slides = `\n\n---\n### 📊 Estrutura para Telão / Slides (Exclusivo PRO)\n\n**Slide 1 (Capa)**\n* **Título Principal:** O Tamanho do Seu Deus\n* **Subtítulo:** Lições sobre Fé e Rendição\n\n**Slide 2 (Introdução)**\n* "A provação não é o fogo que destrói, é o fogo que purifica."\n\n**Slide 3 (Ponto Principal 1)**\n* Ele não prometeu a ausência da tempestade.\n* Ele garantiu a inquebrabilidade do seu barco!\n\n**Slide 4 (Ponto Principal 2)**\n* O maior obstáculo para o milagre é a nossa necessidade de controle.\n\n**Slide 5 (Conclusão)**\n* Coloque o volante da sua vida de volta nas mãos Daquele que formou as estradas da eternidade.`;
    setResultText(prev => prev + slides);
  };

  const handleDownloadPDF = async () => {
    if (!isProMode) {
      if (confirm("👑 Recurso Premium Bloqueado!\n\nA geração de PDFs formatados é exclusiva do plano PRO.\nVamos liberar seu acesso pelo WhatsApp agora?")) {
        window.open(whatsappUrl, '_blank');
      }
      return;
    }

    if (typeof window !== "undefined") {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = resultRef.current;
      if (!element) return;

      const opt = {
        margin: 10,
        filename: 'preg-ai-esboco.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().from(element).set(opt).save();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-blue selection:text-white pb-10">
      {/* Header */}
      <header className="bg-brand-blue text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookType className="w-8 h-8 text-slate-200" />
            <h1 className="text-2xl font-bold tracking-tight">Sermão Pro</h1>
          </div>
          
          {/* Upsell Toggle Simulation */}
          <button 
            type="button"
            onClick={() => window.open(whatsappUrl, '_blank')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${isProMode ? 'bg-amber-100 text-amber-700 border-amber-300 shadow-sm' : 'bg-slate-800 text-slate-300 border-slate-600 hover:text-white hover:border-slate-400'}`}
          >
            <Crown className={`w-3.5 h-3.5 ${isProMode ? 'text-amber-500' : 'text-amber-400'}`} />
            Seja PRO
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form / Sidebar Config */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-900">
                <AlignLeft className="w-5 h-5 text-brand-blue" />
                Configurar Esboço
              </h2>
              
              <form onSubmit={handleGenerate} className="space-y-5">
                {/* Input: Tema */}
                <div className="space-y-1.5">
                  <label htmlFor="theme" className="block text-sm font-medium text-slate-700">Tema ou Versículo Chave</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      id="theme"
                      type="text"
                      required
                      placeholder="Ex: João 3:16 ou Amor ao próximo"
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-slate-50 sm:text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Select: Público-alvo */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">Público-alvo</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-4 w-4 text-slate-400" />
                    </div>
                    <select
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 sm:text-sm text-slate-900 appearance-none"
                    >
                      <option value="Geral">Geral</option>
                      <option value="Jovens">Jovens</option>
                      <option value="Casais">Casais</option>
                      <option value="Crianças">Crianças</option>
                      <option value="Liderança">Liderança</option>
                    </select>
                  </div>
                </div>

                {/* Select: Estilo da Pregação */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">Estilo da Pregação</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Presentation className="h-4 w-4 text-slate-400" />
                    </div>
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 sm:text-sm text-slate-900 appearance-none"
                    >
                      <option value="Expositiva">Expositiva</option>
                      <option value="Temática">Temática</option>
                      <option value="Evangelística">Evangelística</option>
                    </select>
                  </div>
                </div>

                {/* Select: Versão da Bíblia */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">Versão da Bíblia</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookType className="h-4 w-4 text-slate-400" />
                    </div>
                    <select
                      value={version}
                      onChange={(e) => setVersion(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 sm:text-sm text-slate-900 appearance-none"
                    >
                      <option value="NVI">Nova Versão Internacional (NVI)</option>
                      <option value="Almeida">Almeida Revista e Corrigida (ARC/ARA)</option>
                      <option value="ARC">Nova Tradução na Linguagem de Hoje (NTLH)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isLoading ? (
                    <span key="loading" className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Gerando...
                    </span>
                  ) : (
                    <span key="idle">Gerar Esboço</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Result Area */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {resultText ? (
              <div key="result-view" className="h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Result Card */}
                <div className="bg-white flex-1 p-8 rounded-t-2xl border border-slate-200/60 shadow-sm border-b-0" ref={resultRef}>
                  <div className="prose prose-slate prose-headings:font-sans font-serif prose-headings:text-brand-blue prose-h1:text-3xl prose-h2:text-xl max-w-none text-slate-800 leading-relaxed">
                    <ReactMarkdown>{resultText}</ReactMarkdown>
                  </div>
                </div>

                {/* Actions Toolbar */}
                <div className="bg-slate-100 p-4 rounded-b-2xl border border-slate-200/60 shadow-sm flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between">
                  
                  {/* PRO Tooling */}
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleGenerateIllustration}
                      className={`flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all focus:ring-2 ${isProMode ? 'bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 focus:ring-amber-500' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Extra: Ilustração
                      {!isProMode && <Lock className="w-3 h-3 ml-0.5 text-slate-300" />}
                    </button>
                    
                    <button
                      onClick={handleGenerateSlides}
                      className={`flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all focus:ring-2 ${isProMode ? 'bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 focus:ring-amber-500' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'}`}
                    >
                      <Presentation className="w-3.5 h-3.5" />
                      Extra: Slides
                      {!isProMode && <Lock className="w-3 h-3 ml-0.5 text-slate-300" />}
                    </button>
                  </div>

                  {/* Standard Actions */}
                  <div className="flex w-full sm:w-auto mt-2 sm:mt-0 flex-wrap gap-2 justify-end">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-slate-200"
                    >
                      <Copy className="w-4 h-4" />
                      Copiar
                    </button>
                    <button
                      onClick={handleDownloadPDF}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border border-transparent rounded-lg transition-all shadow-sm focus:ring-2 ${isProMode ? 'bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-400' : 'bg-slate-200 text-slate-500 hover:bg-slate-300'}`}
                    >
                      {isProMode ? <Download className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      Baixar PDF Premium
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div key="empty-view" className="h-full border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-12 text-center text-slate-400 bg-slate-50/50 min-h-[400px]">
                <BookOpen className="w-16 h-16 mb-4 text-slate-300" />
                <h3 className="text-lg font-medium text-slate-500 mb-1">Nenhum esboço gerado</h3>
                <p className="text-sm">Preencha os campos ao lado e clique em "Gerar Esboço" para começar.</p>
              </div>
            )}
          </div>
          
        </div>
      </main>
    </div>
  );
}
