import { 
  Shield, 
  Newspaper, 
  Home, 
  Settings, 
  Users, 
  Briefcase, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  HardHat,
  Scale,
  Award,
  Lightbulb,
  Leaf,
  Users2
} from 'lucide-react';
import { Section } from '../App';
import logo from '../image/logo-e1727654075501.png';

interface FooterProps {
  setCurrentSection: (section: Section) => void;
}

export default function Footer({ setCurrentSection }: FooterProps) {
  const clients = [
    { name: 'Colbún', color: 'from-orange-400 to-red-500' },
    { name: 'Enel', color: 'from-green-400 to-blue-500' },
    { name: 'Transelec', color: 'from-blue-400 to-indigo-600' },
    { name: 'Hidro Sur', color: 'from-cyan-400 to-blue-500' },
    { name: 'Energía BB', color: 'from-yellow-400 to-orange-500' },
    { name: 'Sistemas S.A', color: 'from-purple-400 to-pink-500' },
    { name: 'Gen Central', color: 'from-red-400 to-rose-600' },
    { name: 'Mant. Chile', color: 'from-gray-400 to-slate-600' },
  ];

  const norms = [
    { 
      title: "Seguridad", 
      desc: "Implementamos prácticas que minimicen los riesgos para nuestros trabajadores y clientes.", 
      icon: HardHat,
      color: "group-hover:text-orange-400"
    },
    { 
      title: "Calidad", 
      desc: "Entregamos un servicio de excelencia basado en la precisión y la agilidad operativa.", 
      icon: Award,
      color: "group-hover:text-blue-400"
    },
    { 
      title: "Integridad", 
      desc: "Cumplimos con honestidad cada trato pactado con nuestros clientes y trabajadores.", 
      icon: Scale,
      color: "group-hover:text-emerald-400"
    },
    { 
      title: "Innovación", 
      desc: "Capacitación constante y adquisición de nuevas tecnologías industriales.", 
      icon: Lightbulb,
      color: "group-hover:text-yellow-400"
    },
    { 
      title: "Sostenibilidad", 
      desc: "Contribuimos activamente a minimizar el impacto sobre el medio ambiente.", 
      icon: Leaf,
      color: "group-hover:text-green-400"
    },
    { 
      title: "Trabajo en Equipo", 
      desc: "Fomentamos la colaboración y el apoyo mutuo entre todos nuestros trabajadores.", 
      icon: Users2,
      color: "group-hover:text-purple-400"
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* --- CINTURÓN INFINITO DE CLIENTES --- */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gray-500 mb-10 font-semibold">
            Empresas que confían en GYC Mantención
          </p>
          
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-infinite-scroll">
              {[clients, clients].map((clientGroup, groupIndex) => (
                <div key={groupIndex} className="flex shrink-0 space-x-16 items-center">
                  {clientGroup.map((client, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                      <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-2xl transition-all duration-500 group-hover:scale-110">
                        <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center overflow-hidden border-2 border-gray-800">
                          <div className={`w-full h-full rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-black text-sm tracking-tighter`}>
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- VALORES CORPORATIVOS --- */}
        <div className="mb-20">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-blue-400 mb-10 font-semibold">
            Nuestros Valores Fundamentales
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {norms.map((norm, index) => {
              const Icon = norm.icon;
              return (
                <div key={index} className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-gray-700">
                    <Icon className={`w-6 h-6 text-gray-400 transition-colors duration-300 ${norm.color}`} />
                  </div>
                  <h4 className="text-white font-bold mb-2 text-lg group-hover:text-blue-300 transition-colors">{norm.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{norm.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Sobre la empresa */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Logo GYC Mantención" 
                className="h-14 w-auto object-contain drop-shadow-lg brightness-110" 
              />
              <div>
                <h3 className="text-2xl font-black leading-tight">
                  GYC Mantención
                </h3>
                <span className="text-blue-400 text-sm tracking-widest uppercase font-medium">SPA</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-base max-w-sm">
              Soluciones técnicas de calidad en mantenimiento industrial y montaje mecánico con certificación ISO 9001, 14001 y 45001.
            </p>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Servicios</h3>
            <ul className="space-y-4">
              {[
                "Mantenimiento Mecánico",
                "Servicios Eléctricos",
                "Obras Civiles",
                "Estructuras Metálicas"
              ].map((servicio) => (
                <li key={servicio}>
                  <button 
                    onClick={() => setCurrentSection('servicios')} 
                    className="flex items-center gap-3 hover:text-white transition-all duration-300 group text-gray-300 text-left w-full"
                  >
                    <Settings className="w-5 h-5 text-blue-500 group-hover:rotate-90 transition-transform duration-500" /> 
                    <span className="text-sm font-medium">{servicio}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación Enlazada a App.tsx */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Navegación</h3>
            <ul className="space-y-4">
              {[
                { section: 'inicio', label: 'Inicio', icon: Home },
                { section: 'noticias', label: 'Noticias', icon: Newspaper },
                { section: 'nosotros', label: 'Nosotros', icon: Users },
                { section: 'politicas', label: 'Políticas & ISO', icon: FileText },
                { section: 'contacto', label: 'Contacto', icon: MessageSquare },
                { section: 'postulaciones', label: 'Trabaja con nosotros', icon: Briefcase },
              ].map(({ section, label, icon: Icon }) => (
                <li key={section}>
                  <button 
                    onClick={() => setCurrentSection(section as Section)} 
                    className="flex items-center gap-3 hover:text-white transition-all duration-300 group text-gray-300 text-left w-full"
                  >
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" /> 
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Contacto</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  Santa Bárbara,<br />Biobío, Chile
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a href="tel:+56996919657" className="hover:text-white transition-colors">+56 9 9691 9657</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:contacto@gycmantencion.cl" className="hover:text-white transition-colors break-all">contacto@gycmantencion.cl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- CANAL DE DENUNCIAS --- */}
        <div className="mb-10 p-6 bg-gradient-to-r from-red-600 via-red-700 to-red-900 rounded-2xl shadow-lg border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6 group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white uppercase tracking-tight">Canal de Denuncias Éticas</h4>
              <p className="text-red-100 text-sm">Reporte de forma segura, anónima y confidencial.</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentSection('denuncias')}
            className="bg-white text-red-700 font-bold py-3 px-8 rounded-xl shadow-md hover:scale-105 transition-transform active:scale-95"
          >
            Denunciar aquí
          </button>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="text-center text-gray-600 text-xs uppercase tracking-wider pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} GYC Mantención SPA. Innovación y Seguridad Industrial.</p>
          <p className="mt-1 opacity-50">Desarrollado por BJ Servicios Informáticos SpA</p>
        </div>
      </div>
    </footer>
  );
}