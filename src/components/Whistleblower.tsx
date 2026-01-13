import { 
  Shield, 
  Lock, 
  Eye, 
  AlertCircle, 
  Mail, 
  Phone, 
  ArrowLeft, 
  Scale, 
  HandMetal, 
  Zap, 
  ShieldCheck,
  MessageSquareWarning,
  Gavel,
  Users,
  Database
} from 'lucide-react';
import { Section } from '../App';

interface WhistleblowerProps {
  setCurrentSection: (section: Section) => void;
}

export default function Whistleblower({ setCurrentSection }: WhistleblowerProps) {
  return (
    <section id="denuncias" className="py-20 bg-[#020617] relative overflow-hidden min-h-screen pt-32 pb-12 flex flex-col">
      {/* Luces de profundidad */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col">
        
        {/* Header con Badge de Cumplimiento */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            <ShieldCheck size={14} className="text-amber-500" /> Sistema de Cumplimiento Normativo 2025
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Canal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Integridad</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Un pilar fundamental para garantizar la transparencia y el respeto mutuo. 
            Este canal permite reportar de forma segura cualquier incumplimiento a nuestras políticas y la <span className="text-white">legislación chilena vigente.</span>
          </p>
        </div>

        {/* Grid de Marco Legal y Áreas de Denuncia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Ley Karin (21.643)",
              icon: Users,
              desc: "Prevención y sanción del acoso laboral, sexual y violencia en el trabajo.",
              color: "border-rose-500/30"
            },
            {
              title: "Ley 20.393",
              icon: Gavel,
              desc: "Responsabilidad penal por delitos como cohecho, lavado de activos y receptación.",
              color: "border-blue-500/30"
            },
            {
              title: "Ley de Inclusión (21.015)",
              icon: HandMetal,
              desc: "Protección contra actos de discriminación y fomento de igualdad de oportunidades.",
              color: "border-emerald-500/30"
            },
            {
              title: "Ley 19.628",
              icon: Database,
              desc: "Protección de la vida privada y seguridad de datos de carácter personal.",
              color: "border-amber-500/30"
            }
          ].map((cat, i) => (
            <div key={i} className={`bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border ${cat.color} hover:bg-slate-800/60 transition-all duration-300 group`}>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <cat.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Garantías de Seguridad */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Scale className="text-amber-500" /> Nuestras Garantías
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Lock, t: "Anonimato Garantizado", d: "Sistemas protegidos para reportes sin revelar identidad." },
                { icon: Shield, t: "Indemnidad Laboral", d: "Prohibición estricta de represalias contra denunciantes." },
                { icon: Eye, t: "Investigación Imparcial", d: "Protocolos internos auditados para objetividad total." },
                { icon: Zap, t: "Acción Inmediata", d: "Activación de protocolos en menos de 24 horas hábiles." }
              ].map((g, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <g.icon className="text-amber-500 shrink-0" size={20} />
                  <div>
                    <h4 className="text-white text-sm font-bold">{g.t}</h4>
                    <p className="text-slate-500 text-xs">{g.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card de Contacto */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-center">
              <MessageSquareWarning className="text-amber-500 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">¿Deseas reportar?</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Describe los hechos con la mayor precisión posible. Tu información será tratada con máxima reserva.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:denuncias@gycmantencion.cl" className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-xl text-sm">
                  <Mail size={18} />
                  denuncias@gycmantencion.cl
                </a>
                <a href="tel:+56996919657" className="flex items-center justify-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                  <Phone size={16} className="text-amber-500" />
                  <span>+56 9 9691 9657</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer legal */}
        <div className="mt-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">Compromiso Ético GYC</p>
            <p className="text-slate-400 text-xs italic">"Construyendo un futuro técnico basado en la honestidad y el respeto legal."</p>
          </div>
          <button
            onClick={() => setCurrentSection('inicio')}
            className="group flex items-center gap-2 px-8 py-3 bg-slate-900 text-slate-300 rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/5 shadow-2xl text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </button>
        </div>
      </div>
    </section>
  );
}