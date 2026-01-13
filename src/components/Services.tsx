import { Settings, Zap, Construction, Box, Wrench, HardHat, Cog, Flame, Shield, Droplet, Wind, Gauge, MessageCircle, ArrowRight } from 'lucide-react';
import { Section } from '../App';

interface ServicesProps {
  setCurrentSection: (section: Section) => void;
}

export default function Services({ setCurrentSection }: ServicesProps) {
  // Configuración de WhatsApp unificada
  const whatsappNumber = "56996919657";
  const whatsappMessage = encodeURIComponent("Hola, revisando tu web me pareció interesante tu trabajo y tengo una consulta técnica, me gustaría agendar una cita más formal para mi proyecto.");
  const wsLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const mainServices = [
    {
      icon: Settings,
      title: 'Mantenimiento y Montaje Mecánico Industrial',
      description: 'Instalación y reparación de equipos con expertise en el sector hidroeléctrico.',
      features: ['Turbinas hidráulicas', 'Sistemas de transmisión', 'Bombas industriales', 'Reductores'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Servicios Eléctricos e Instrumentación',
      description: 'Revisión de sistemas eléctricos y ajustes de instrumentación de control.',
      features: ['Tableros de control', 'Sistemas SCADA', 'Calibración', 'Automatización'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Construction,
      title: 'Construcción de Obras Civiles',
      description: 'Infraestructura, carreteras y edificaciones con altos estándares de calidad.',
      features: ['Estructuras hormigón', 'Movimiento tierras', 'Pavimentación', 'Obras hidráulicas'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-slate-600 to-gray-800',
    },
    {
      icon: Box,
      title: 'Diseño y Fabricación Metálica',
      description: 'Análisis estructural y fabricación de proyectos metálicos personalizados.',
      features: ['Estructuras plantas', 'Pasarelas/Escaleras', 'Soportes', 'Tanques/Estanques'],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  const additionalServices = [
    { icon: Wrench, title: 'Mantención Predictiva', desc: 'Vibraciones y termografía.', color: 'from-teal-500 to-emerald-600' },
    { icon: HardHat, title: 'Soldadura Especializada', desc: 'Inox, aluminio y aleaciones.', color: 'from-red-500 to-rose-600' },
    { icon: Cog, title: 'Balanceo Dinámico', desc: 'Rotores y ventiladores.', color: 'from-violet-500 to-fuchsia-600' },
    { icon: Flame, title: 'Calderería', desc: 'Recipientes a presión.', color: 'from-orange-500 to-amber-600' },
    { icon: Shield, title: 'Ensayos No Destructivos', desc: 'Ultrasonido y partículas.', color: 'from-blue-500 to-sky-600' },
    { icon: Droplet, title: 'Sistemas Hidráulicos', desc: 'Circuitos industriales.', color: 'from-cyan-500 to-blue-600' },
    { icon: Wind, title: 'Ventilación Industrial', desc: 'Extracción y diseño.', color: 'from-slate-500 to-gray-600' },
    { icon: Gauge, title: 'Alineación Láser', desc: 'Precisión en ejes.', color: 'from-green-500 to-teal-600' },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertos en Terreno</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2 mb-6 uppercase tracking-tighter">Nuestros Servicios</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {mainServices.map((s, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-60 mix-blend-multiply`}></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <s.icon className="w-10 h-10 mb-2" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black leading-tight uppercase tracking-tighter">{s.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Especializados */}
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 mb-24">
          <h3 className="text-2xl font-black text-center mb-12 uppercase tracking-widest text-gray-400">Servicios Especializados</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((s, i) => (
              <div key={i} className="text-center group">
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">{s.title}</h4>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA DIVIDIDO */}
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">¿Cómo prefieres contactarnos?</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light">
              Estamos disponibles para responder tus dudas técnicas o coordinar una visita a terreno.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Botón Izquierda: Sección Contacto */}
              <button 
                onClick={() => setCurrentSection('contacto')}
                className="flex items-center justify-center gap-4 px-8 py-6 bg-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 group"
              >
                <span>Ver Datos y Mapa</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Botón Derecha: WhatsApp */}
              <a 
                href={wsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 px-8 py-6 bg-[#25D366] text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-7 h-7 fill-current" />
                <span>Agendar WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Botón Volver */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setCurrentSection('inicio')}
            className="text-gray-400 hover:text-blue-600 font-bold uppercase tracking-widest text-sm transition-colors"
          >
            ← Volver al Inicio
          </button>
        </div>
      </div>
    </section>
  );
}