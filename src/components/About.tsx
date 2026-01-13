import { useState } from 'react';
import { Target, Eye, CheckCircle, X } from 'lucide-react';
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
  scope: string[];
  image: string;
}

export default function About({ setCurrentSection }: AboutProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    {
      id: 1,
      title: 'Mantenimiento Central Hidroeléctrica Ralco',
      client: 'Enel Generación Chile',
      year: 2024,
      description: 'Mantención mayor de turbinas y sistemas auxiliares en la central hidroeléctrica más grande del Biobío.',
      scope: [
        'Inspección y reparación de turbina Francis',
        'Reemplazo de sellos y cojinetes',
        'Alineación láser de ejes',
        'Pruebas de eficiencia post-mantención',
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Montaje Estructuras Metálicas Angostura',
      client: 'Colbún S.A.',
      year: 2023,
      description: 'Montaje de estructuras metálicas para ampliación de sala de máquinas.',
      scope: [
        'Fabricación y montaje de 120 toneladas de acero',
        'Soldadura certificada AWS',
        'Pintura industrial anticorrosiva',
        'Control de calidad con ensayos no destructivos',
      ],
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Overhaul Turbina Central Pangue',
      client: 'Hidroeléctrica Pangue',
      year: 2025,
      description: 'Overhaul completo de turbina Kaplan incluyendo modernización de controles.',
      scope: [
        'Desmontaje completo de turbina',
        'Reparación de álabes y cámara espiral',
        'Actualización de sistema de gobernadores',
        'Comisionamiento y pruebas de rendimiento',
      ],
      image: 'https://www.pexels.com/es-es/foto/35627282/',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white min-h-screen pt-32 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-in slide-in-from-top duration-500">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
              alt="Equipo GYC Mantención"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre GYC Mantención
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada en 2021 en Santa Barbara, Región del Biobío, GYC Mantención SPA es
              una empresa chilena especializada en mantenimiento industrial y montaje
              mecánico.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nos destacamos por nuestra expertise en el sector hidroeléctrico, brindando
              soluciones técnicas eficaces y de calidad que generan confianza y compromiso
              con nuestros clientes.
            </p>
          </div>
        </div>

        {/* Misión / Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-in slide-in-from-top duration-700 delay-100">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser una Organización que brinda soluciones de montaje y mantenimiento mecánico industrial, para el sector privado; estableciendo estándares de excelencia, calidad y sostenibilidad, basándonos en la mejora continua, para así crear un vínculo de confianza con nuestros clientes y también fomentar un ambiente de trabajo seguro y saludable, ayudando siempre con la protección del medio ambiente.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser una empresa reconocida a nivel nacional por su excelencia, confiabilidad y distinguida en la Ejecución de Mantenimiento y Montaje Mecánico - Estructural del sector Hídrico, Maderero y Minero, por su Calidad, Compromiso, Seguridad, Salud en el Trabajo y Medio Ambiente, siempre en busca de la mejora continua y la gestión de sustentabilidad en los procesos de trabajo.
            </p>
          </div>
        </div>

        {/* Fortalezas */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16 animate-in slide-in-from-top duration-700 delay-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nuestras Fortalezas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nuestros Proyectos */}
        <div className="mb-16 animate-in slide-in-from-top duration-700 delay-300">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestros Proyectos Destacados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="
                  cursor-pointer 
                  bg-white 
                  rounded-xl 
                  shadow-lg 
                  overflow-hidden 
                  transition-transform 
                  active:scale-[0.98] 
                  duration-200
                "
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-1">{project.client}</p>
                  <p className="text-gray-500 text-sm">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo Destacado */}
        <div className="bg-white p-8 rounded-lg animate-in slide-in-from-top duration-700 delay-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Equipo Destacado
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-blue-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-gray-900">{member.name}</span>
                <span className="text-sm text-gray-600">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botón volver */}
      <div className="flex justify-center pt-8 pb-4">
        <button
          onClick={() => setCurrentSection('inicio')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Volver al Inicio
        </button>
      </div>

      {/* Modal de Proyecto */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              bg-white rounded-2xl shadow-2xl 
              w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-3xl lg:max-w-4xl
              max-h-[92vh] sm:max-h-[88vh] 
              overflow-y-auto
              animate-in fade-in zoom-in-95 duration-400
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[35vh] sm:h-[40vh] lg:h-80 object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-base sm:text-lg text-gray-700 mb-8">
                <span><strong>Cliente:</strong> {selectedProject.client}</span>
                <span><strong>Año:</strong> {selectedProject.year}</span>
              </div>

              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-5">
                Alcance del Proyecto
              </h4>

              <ul className="space-y-3.5">
                {selectedProject.scope.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}