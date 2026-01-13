import { MessageCircle, X, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../App';

interface FloatingContactButtonProps {
  setCurrentSection: (section: Section) => void;
}

export default function FloatingContactButton({ setCurrentSection }: FloatingContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Animaciones de alta tecnología en CSS puro */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ultra-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        .animate-premium-pulse {
          animation: ultra-pulse 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .animate-glass-shine {
          animation: shine 4s infinite self-start;
        }
      `}} />

      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir contacto rápido"
            className="
              relative overflow-hidden
              bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-full
              shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)]
              hover:scale-110 active:scale-95
              transition-all duration-500 ease-in-out
              animate-premium-pulse
              flex items-center justify-center
            "
          >
            {/* Efecto de destello de luz cruzando el botón */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-glass-shine" />
            
            <MessageCircle className="w-8 h-8 relative z-10" />
          </button>
        ) : (
          <div
            className="
              bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] w-80 overflow-hidden
              border border-gray-100 animate-in fade-in zoom-in-90 slide-in-from-bottom-8 duration-500
            "
          >
            {/* Header con gradiente animado */}
            <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 p-6 flex justify-between items-center bg-[length:200%_auto] animate-[pulse_4s_infinite]">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Asistencia Premium</h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(110,231,183,1)]"></span>
                    <p className="text-emerald-50 text-[10px] uppercase font-black tracking-widest">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Opciones con hover avanzado */}
            <div className="p-5 space-y-3">
              <a
                href="tel:+56996919657"
                className="flex items-center space-x-4 p-3.5 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100 shadow-sm hover:shadow-md"
              >
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Llamada</p>
                  <p className="font-bold text-gray-800">+56 9 9691 9657</p>
                </div>
              </a>

              <a
                href="mailto:contacto@gycmantencion.cl"
                className="flex items-center space-x-4 p-3.5 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100 shadow-sm hover:shadow-md"
              >
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <Mail className="w-5 h-5 group-hover:scale-125 transition-transform" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Email</p>
                  <p className="font-bold text-gray-800 text-xs truncate">contacto@gycmantencion.cl</p>
                </div>
              </a>

              <button
                onClick={() => {
                  setCurrentSection('contacto');
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-4 p-3.5 rounded-2xl hover:bg-blue-50 transition-all group border border-transparent hover:border-blue-100 shadow-sm hover:shadow-md"
              >
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Web</p>
                  <p className="font-bold text-gray-800">Formulario</p>
                </div>
              </button>
            </div>

            <div className="bg-gray-50/80 p-4 border-t border-gray-100 text-center">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                Excelencia en Mantención
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}