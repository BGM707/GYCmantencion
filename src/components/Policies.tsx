import { 
  FileText, Shield, Users, Award, CheckCircle, Lock, Leaf, 
  UserCheck, ExternalLink, Heart, Scale, Lightbulb, Users2, 
  HandMetal, Ban, AlertOctagon, Landmark, Wallet, Globe, Scale as Balance
} from 'lucide-react';
import { Section } from '../App';

interface PoliciesProps {
  setCurrentSection: (section: Section) => void;
}

export default function Policies({ setCurrentSection }: PoliciesProps) {

  const values = [
    { icon: Shield, title: 'Seguridad', desc: 'Compromiso con la vida; prácticas que minimizan riesgos para trabajadores y clientes.' },
    { icon: Award, title: 'Calidad', desc: 'Servicio basado en la precisión, agilidad y excelencia operativa.' },
    { icon: Scale, title: 'Integridad', desc: 'Cumplimiento ético de todos los tratos pactados con clientes y colaboradores.' },
    { icon: Lightbulb, title: 'Innovación', desc: 'Capacitación constante y adopción de nuevas tecnologías industriales.' },
    { icon: Leaf, title: 'Sostenibilidad', desc: 'Acciones concretas para minimizar nuestro impacto en el medio ambiente.' },
    { icon: Users2, title: 'Trabajo en Equipo', desc: 'Fomentamos la colaboración y el apoyo mutuo como base del éxito.' },
  ];

  const certifications = [
    {
      title: 'ISO 9001',
      subtitle: 'Sistema de Gestión de Calidad',
      description: 'Garantiza la mejora continua de nuestros procesos y la satisfacción del cliente.',
      color: 'from-blue-600/90 to-blue-800/90',
      bgImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://drive.google.com/file/d/14ruNPLIy4IKL-QwX3PF8lj6fxm4MM5AL/view?usp=sharing'
    },
    {
      title: 'ISO 14001',
      subtitle: 'Sistema de Gestión Ambiental',
      description: 'Refuerza nuestro compromiso con la protección del entorno y el uso responsable de recursos.',
      color: 'from-green-600/90 to-green-800/90',
      bgImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://drive.google.com/file/d/16SO2W6kMG4TAVlN_INl-FGicLpKDfk0S/view?usp=drive_link'
    },
    {
      title: 'ISO 45001',
      subtitle: 'Seguridad y Salud en el Trabajo',
      description: 'Estándares internacionales para proteger la salud de nuestros colaboradores.',
      color: 'from-orange-600/90 to-orange-800/90',
      bgImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://drive.google.com/file/d/1lKsSq41qN0mQuR1XTmShmR6yJEznKSpR/view?usp=drive_link'
    },
  ];

  const corePolicies = [
    {
      title: 'Acoso y Violencia',
      icon: Users,
      color: 'bg-red-600',
      link: 'https://drive.google.com/file/d/1M_GS2dSfN16tIv6R70Jy7lNAe88PvGut/view?usp=drive_link',
      content: 'Tolerancia cero al acoso sexual, laboral y violencia. Promovemos un ambiente basado en el respeto mutuo y la dignidad.'
    },
    {
      title: 'Equidad de Género',
      icon: Scale,
      color: 'bg-purple-600',
      link: 'https://drive.google.com/file/d/1oH_CTv2-PXwOrAmsegHvSnrmwHxTzSMB/view?usp=drive_link',
      content: 'Garantizamos un ambiente libre de discriminación por género, apariencia o cualquier condición social y personal.'
    },
    {
      title: 'Interrupción de Trabajo',
      icon: AlertOctagon,
      color: 'bg-amber-600',
      link: 'https://drive.google.com/file/d/1r7mH0KV4TxvrQBYYBfYe7ULpkwJAUAfk/view?usp=sharing',
      content: 'Todo colaborador tiene el derecho y obligación de detener actividades inseguras que pongan en riesgo su vida o la de otros.'
    },
    {
      title: 'Alcohol y Drogas',
      icon: Ban,
      color: 'bg-gray-800',
      link: 'https://drive.google.com/file/d/1cRDTyV_9evsSyx_RVF7ZcJUeqQHqjv-Y/view?usp=drive_link',
      content: 'Política de Tolerancia Cero. Prohibido el ingreso o permanencia bajo efectos de sustancias; realizamos pruebas preventivas.'
    },
    {
      title: 'Conflicto de Interés',
      icon: Balance,
      color: 'bg-indigo-700',
      link: 'https://drive.google.com/file/d/1hFdZ_5LNIIXF9fA10uLf4OjFTZh8zah1/view?usp=drive_link',
      content: 'Aseguramos que las decisiones de negocios se tomen con objetividad, evitando que intereses personales interfieran.'
    },
    {
      title: 'Prevención de Delitos',
      icon: Shield,
      color: 'bg-slate-900',
      link: 'https://drive.google.com/file/d/1MLtKuPpSt9A8lMiMoJuyUu5iecP4iP5Y/view?usp=drive_link',
      content: 'Manual de cumplimiento bajo la normativa vigente para prevenir delitos económicos, lavado de activos y cohecho.'
    }
  ];

  return (
    <section id="politicas" className="py-20 bg-gray-50 min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Cultura Organizacional</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nuestro compromiso con la ética y transparencia respaldado por documentación oficial.</p>
          <div className="h-2 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- Sección de Valores --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <v.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{v.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* --- Certificaciones ISO --- */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="group relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${cert.bgImage}")` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="relative h-full flex flex-col p-8 justify-between text-white">
                  <div className={`self-start px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${cert.color}`}>Acreditación QFS</div>
                  <div>
                    <h4 className="text-4xl font-black mb-2">{cert.title}</h4>
                    <p className="text-gray-200 mb-6 text-sm">{cert.description}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
                      Descargar PDF <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Políticas Críticas Renovadas --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {corePolicies.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border-b-4 border-blue-600 flex flex-col hover:transform hover:-translate-y-1 transition-all">
              <div className={`${p.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-gray-900">{p.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{p.content}</p>
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 hover:bg-blue-600 hover:text-white text-blue-600 rounded-xl font-bold transition-all border border-blue-100"
              >
                Ver Documento <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* --- Sección Sostenibilidad, Derechos Humanos y Respeto --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-emerald-600" />
                <h3 className="text-3xl font-black text-gray-900 uppercase">Respeto y Derechos Humanos</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h5 className="font-bold text-emerald-700 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Comunidades</h5>
                <p className="text-gray-600 text-sm leading-relaxed">Fomentamos relaciones basadas en respeto mutuo y diálogo abierto con nuestro entorno social.</p>
                <a href="https://drive.google.com/file/d/1CeHO0nnj6yjgc8roEjPkkPD-nYESdpkl/view?usp=drive_link" target="_blank" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">
                  Ver Política de Respeto <ExternalLink className="w-3 h-3"/>
                </a>
              </div>
              <div className="space-y-4">
                <h5 className="font-bold text-blue-700 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> DD.HH.</h5>
                <p className="text-gray-600 text-sm leading-relaxed">Garantizamos dignidad humana, igualdad de oportunidades y libertad de asociación.</p>
                <a href="https://drive.google.com/file/d/1He9Z4vi6guBRB-ESBbgQXsHthsM6m1gq/view?usp=drive_link" target="_blank" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">
                  Ver Política de DDHH <ExternalLink className="w-3 h-3"/>
                </a>
              </div>
            </div>
          </div>

          {/* --- Política Sueldo Digno --- */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-800 rounded-[2.5rem] p-10 shadow-lg text-white flex flex-col">
            <Wallet className="w-12 h-12 mb-6 opacity-50" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Sueldo Digno</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 flex-grow">
              Remuneración que garantiza el bienestar, superando el mínimo legal para promover el desarrollo profesional.
            </p>
            <a 
              href="https://drive.google.com/file/d/1OxV_TXCQ00lDHU_X78DLXdBqkAYwahsg/view?usp=drive_link" 
              target="_blank"
              className="w-full py-3 bg-white text-blue-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Documento Oficial <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Botón Volver */}
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentSection('inicio')}
            className="group px-12 py-5 bg-gray-900 text-white rounded-2xl hover:bg-blue-600 transition-all shadow-2xl font-black uppercase tracking-widest flex items-center gap-4 transform hover:-translate-y-1"
          >
            Volver al Inicio
            <CheckCircle className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}