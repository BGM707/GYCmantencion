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
  Award,
  Leaf,
} from 'lucide-react';
import { Section } from '../App';
import logo from '../image/logo-e1727654075501.png';

interface FooterProps {
  setCurrentSection: (section: Section) => void;
}

export default function Footer({ setCurrentSection }: FooterProps) {
  const certifications = [
    { 
      iso: "9001:2015", 
      title: "Calidad", 
      desc: "Gestión de excelencia en procesos.",
      icon: Award, 
      color: "text-blue-400" 
    },
    { 
      iso: "14001:2015", 
      title: "Medio Ambiente", 
      desc: "Compromiso con la sostenibilidad.",
      icon: Leaf, 
      color: "text-green-400" 
    },
    { 
      iso: "45001:2018", 
      title: "Seguridad", 
      desc: "Protección y salud en el trabajo.",
      icon: HardHat, 
      color: "text-orange-400" 
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* --- 3 CARDS DE CERTIFICACIÓN (Enlazan a Políticas) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <button 
                key={index} 
                onClick={() => setCurrentSection('politicas')}
                className="relative overflow-hidden group bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:bg-white/10 text-left w-full cursor-pointer"
              >
                {/* Fondo con el Logo de QFS ISO (Marca de agua) */}
                <img 
                  src="https://images.seeklogo.com/logo-png/45/1/qfs-iso-logo-png_seeklogo-459222.png" 
                  alt="" 
                  className="absolute -right-4 -bottom-4 h-32 w-auto opacity-10 grayscale group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 pointer-events-none" 
                />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mb-6 border border-white/10 ${cert.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Certificaciones</span>
                  <h4 className="text-2xl font-bold text-white mt-1 mb-2">{cert.iso}</h4>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">{cert.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Sobre la empresa */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Logo GYC" 
                className="h-14 w-auto object-contain brightness-110" 
              />
              <div>
                <h3 className="text-2xl font-black leading-tight">GYC Mantención</h3>
                <span className="text-blue-400 text-sm tracking-widest uppercase font-medium">SPA</span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-base max-w-sm">
              Soluciones técnicas de calidad en mantenimiento industrial y montaje mecánico con certificación internacional.
            </p>

            {/* TARJETA QFS (Enlaza a qfschile.cl) */}
            <a 
              href="https://qfschile.cl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl w-fit hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <img 
                src="https://images.seeklogo.com/logo-png/45/1/qfs-iso-logo-png_seeklogo-459222.png" 
                alt="QFS Chile" 
                className="h-10 w-auto object-contain brightness-90 group-hover:brightness-110 transition-all"
              />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter group-hover:text-white transition-colors">
                Expertos en Certificaciones de normas ISO <br/>Chile
              </span>
            </a>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Servicios</h3>
            <ul className="space-y-4">
              {["Mantenimiento Mecánico", "Servicios Eléctricos", "Obras Civiles", "Estructuras Metálicas"].map((servicio) => (
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

          {/* Navegación */}
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
                <span className="text-gray-300 leading-relaxed">Santa Bárbara,<br />Biobío, Chile</span>
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