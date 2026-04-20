import Link from 'next/link';
import { ArrowLeft, BookType, Crown, Info, Download } from 'lucide-react';

export default function BibliotecaPage() {
  const whatsappUrl = "https://wa.me/554497475235?text=Ol%C3%A1%21%20Gostaria%20de%20assinar%20o%20plano%20PRO%20do%20Serm%C3%A3o%20Pro%20%28PregAI%29.";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-blue selection:text-white pb-10">
      {/* Header */}
      <header className="bg-brand-blue text-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="mr-1 sm:mr-2 hover:bg-slate-800/50 p-2 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <BookType className="hidden sm:block w-8 h-8 text-slate-200" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Sermão Pro <span className="hidden sm:inline font-light opacity-80 text-base sm:text-lg">| Biblioteca</span></h1>
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

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200/60 mb-6 flex flex-col h-[80vh]">
          <div className="flex items-center justify-between gap-4 p-4 mb-4 bg-blue-50 text-blue-900 rounded-xl border border-blue-100 flex-shrink-0">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-950 mb-1">Acervo Original Completo</h3>
                <p className="text-sm">
                  Deus o abençoe! Abaixo está o documento nativo do <strong>"Arsenal de Pregações para Pregadores"</strong>.
                  Sinta-se livre para ler toda a sabedoria contida nas 500 páginas e se inspirar.
                </p>
              </div>
            </div>
            <a 
              href="/livro.pdf" 
              download 
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              Baixar PDF
            </a>
          </div>
          
          {/* Iframe embutindo o Livro PDF Nativo */}
          <div className="relative w-full flex-grow border border-slate-200 rounded-lg overflow-hidden shadow-inner bg-slate-100">
            <iframe 
              src="/livro.pdf"
              title="Arsenal de Pregações PDF"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
