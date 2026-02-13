import { useState } from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle, 
  X, 
  HardHat, 
  Award, 
  Scale, 
  Lightbulb, 
  Leaf, 
  Users2,
  Mail // Añadido para el botón de contacto
} from 'lucide-react';
import { Section } from '../App';

interface AboutProps {
  setCurrentSection: (section: Section) => void;
}

interface Project {
  id: number;
  title: string;
  client: string;
  year: number;
  description: string;
  image: string;
}

export default function About({ setCurrentSection }: AboutProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const values = [
    'Compromiso con la calidad y seguridad',
    'Equipo profesional y capacitado',
    'Precios competitivos en el mercado',
    'Mejora continua en nuestros procesos',
    'Expertise en sector hidroeléctrico',
    'Cotizaciones sin costo',
  ];

  const team = [
    { name: 'Alex Castillo', role: 'Gerente General', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'María González', role: 'Tesorera', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Carlos Muñoz', role: 'Ingeniero a Cargo', image: 'https://randomuser.me/api/portraits/men/55.jpg' },
    { name: 'Ana Rivas', role: 'Jefa de Operaciones', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
    { name: 'Pedro Soto', role: 'Supervisor Técnico', image: 'https://randomuser.me/api/portraits/men/71.jpg' },
  ];

  const projects: Project[] = [
    { id: 1, title: 'Mantenimiento Mayor Mecánico, Eléctrico e Instrumentación y Control', client: 'Central Hidroeléctrica Carena, Colbún', year: 2024, description: 'Servicio integral de mantenimiento mayor abarcando las áreas de mecánica, electricidad y sistemas de control para optimizar la operatividad de la central.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800' },
    { id: 2, title: 'Diseño, Cálculo, Fabricación y Montaje de Galpón Almacenaje Válvula Mariposa Ralco', client: 'Central Hidroeléctrica Pangue, Enel', year: 2025, description: 'Proyecto de ingeniería estructural completo para el resguardo de componentes críticos de la central.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800' },
    { id: 3, title: 'Reparación de fuga DGT', client: 'Central Hidroeléctrica Lomas Altas, Enel', year: 2024, description: 'Intervención técnica de precisión para la corrección de fugas en sistemas DGT, garantizando la estanqueidad y seguridad del proceso.', image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800' },
    { id: 4, title: 'Apoyo de Operación Puente Grúa en Mantenimiento Mayor Mecánico', client: 'Central Hidroeléctrica Canutillar, Colbún', year: 2025, description: 'Maniobras críticas de izaje y movimiento de componentes pesados durante la parada de planta para mantenimiento mayor.', image: 'https://images.pexels.com/photos/33995806/pexels-photo-33995806.jpeg' },
    { id: 5, title: 'Diseño, Fabricación y Montaje de portón acceso Caverna de Máquina', client: 'Central Hidroeléctrica Pangue, Enel', year: 2025, description: 'Fabricación de estructura metálica de alto tráfico para el acceso principal a la zona de máquinas.', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800' },
    { id: 6, title: 'Instalación de señaléticas viales', client: 'BU-Centro, Enel', year: 2022, description: 'Normalización y actualización de señalética vial industrial para la seguridad de tránsito en instalaciones.', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800' },
    { id: 7, title: 'Carga, traslado y descarga de componentes y equipos mecánicos', client: 'Central Hidroeléctrica Pehuenche, Enel', year: 2022, description: 'Logística especializada para el movimiento de repuestos y activos críticos de generación.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800' },
    { id: 8, title: 'Mantenimiento y normalización de compuertas', client: 'Presa Melado, Enel', year: 2023, description: 'Servicios de mantenimiento mecánico en sistemas de regulación de caudal y compuertas de seguridad.', image: 'https://images.pexels.com/photos/30707838/pexels-photo-30707838.jpeg' },
    { id: 9, title: 'Instalación de aislación térmica a termogeneradores', client: 'Central Térmica Teno', year: 2025, description: 'Mejora de eficiencia energética mediante la instalación de sistemas de aislación de alta temperatura.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800' },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white min-h-screen pt-32 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-in slide-in-from-top duration-500">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
              alt="Equipo GYC"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre GYC Mantención</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada en 2021 en Santa Barbara, Región del Biobío, GYC Mantención SPA es una empresa chilena especializada en mantenimiento industrial y montaje mecánico.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nos destacamos por nuestra expertise en el sector hidroeléctrico, brindando soluciones técnicas eficaces y de calidad que generan confianza y compromiso con nuestros clientes.
            </p>
          </div>
        </div>

        {/* Misión / Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-in slide-in-from-top duration-700 delay-100">
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser una Organización que brinda soluciones de montaje y mantenimiento mecánico industrial, para el sector privado; estableciendo estándares de excelencia, calidad y sostenibilidad, basándonos en la mejora continua, para así crear un vínculo de confianza con nuestros clientes y también fomentar un ambiente de trabajo seguro y saludable, ayudando siempre con la protección del medio ambiente.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser una empresa reconocida a nivel nacional por su excelencia, confiabilidad y distinguida en la Ejecución de Mantenimiento y Montaje Mecánico - Estructural del sector Hídrico, Maderero y Minero, por su Calidad, Compromiso, Seguridad, Salud en el Trabajo y Medio Ambiente, siempre en busca de la mejora continua y la gestión de sustentabilidad en los procesos de trabajo.
            </p>
          </div>
        </div>

        {/* --- VALORES CORPORATIVOS --- */}
        <div className="mb-20 animate-in slide-in-from-top duration-700 delay-200">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-blue-400 mb-10 font-semibold">
            Nuestros Valores Fundamentales
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {norms.map((norm, index) => {
              const Icon = norm.icon;
              return (
                <div key={index} className="group bg-gray-900/5 border border-gray-200 p-6 rounded-2xl hover:bg-gray-900/10 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-white shadow-sm">
                    <Icon className={`w-6 h-6 text-gray-500 transition-colors duration-300 ${norm.color}`} />
                  </div>
                  <h4 className="text-gray-900 font-bold mb-2 text-lg group-hover:text-blue-600 transition-colors">{norm.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{norm.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fortalezas */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16 animate-in slide-in-from-top duration-700 delay-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestras Fortalezas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos */}
        <div className="mb-16 animate-in slide-in-from-top duration-700 delay-400">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Nuestros Proyectos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">{project.title}</h4>
                  <p className="text-blue-600 text-sm font-bold mb-1 uppercase tracking-tight">{project.client}</p>
                  <p className="text-gray-400 text-sm font-semibold italic">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTONES DE ACCIÓN --- */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 pb-12">
        <button
          onClick={() => setCurrentSection('inicio')}
          className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
        >
          Volver al Inicio
        </button>

        <button
          onClick={() => setCurrentSection('contacto')}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Contáctanos
        </button>
      </div>

      {/* Modal Detalle */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md"><X className="w-6 h-6 text-gray-800" /></button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 md:h-80 object-cover" />
            </div>
            <div className="p-8">
              <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">{selectedProject.client}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">{selectedProject.title}</h3>
              <p className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md font-bold text-sm inline-block mb-6 italic">Año: {selectedProject.year}</p>
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>Descripción</h4>
              <p className="text-gray-700 leading-relaxed text-lg">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}