import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, BookType, Crown, Info } from 'lucide-react';

export default async function BibliotecaPage() {
  // Read the raw arsenal statically on the server
  let arsenalContent = "";
  try {
    arsenalContent = fs.readFileSync(path.join(process.cwd(), 'public', 'arsenal.txt'), 'utf-8');
  } catch (e) {
    arsenalContent = "O arquivo do livro (arsenal.txt) não foi encontrado no servidor.";
  }

  const whatsappUrl = "https://wa.me/554497475235?text=Ol%C3%A1%21%20Gostaria%20de%20assinar%20o%20plano%20PRO%20do%20Serm%C3%A3o%20Pro%20%28PregAI%29.";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-blue selection:text-white pb-10">
      {/* Header */}
      <header className="bg-brand-blue text-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="mr-2 hover:bg-slate-800/50 p-2 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <BookType className="w-8 h-8 text-slate-200" />
            <h1 className="text-2xl font-bold tracking-tight">Sermão Pro <span className="font-light opacity-80 text-lg">| Biblioteca</span></h1>
          </div>
          
          <button 
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-600 hover:text-white hover:border-slate-400 transition-all shadow-sm"
          >
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Seja PRO
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60 mb-6">
          <div className="flex items-start gap-4 p-4 mb-8 bg-blue-50 text-blue-900 rounded-xl border border-blue-100">
            <Info className="w-6 h-6 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-950 mb-1">Acervo Original Completo</h3>
              <p className="text-sm">
                Abaixo está o acesso irrestrito ao conteúdo bruto do <strong>"Arsenal de Pregações para Pregadores"</strong> (Autor: Genésio Santos). 
                São centenas de temas para sua consulta gratuita offline. Utilize o atalho <code>Ctrl + F</code> no seu teclado para pesquisar palavras-chave específicas.
              </p>
            </div>
          </div>
          
          {/* Virtualized/Scrollable Container for huge text */}
          <div className="relative">
            <div className="h-[70vh] overflow-y-auto bg-slate-50 border border-slate-200 rounded-lg p-6 prose prose-slate prose-sm max-w-none shadow-inner">
              <pre className="whitespace-pre-wrap font-serif text-base leading-relaxed text-slate-700">
                {arsenalContent}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
