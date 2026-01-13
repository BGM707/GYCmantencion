import { Briefcase, CheckCircle, ExternalLink } from 'lucide-react';
import { Section } from '../App';

interface CareersProps {
  setCurrentSection: (section: Section) => void;
}

export default function Careers({ setCurrentSection }: CareersProps) {
  const positions = [
    'Técnico Mecánico',
    'Electricista Industrial',
    'Ingeniero en Mantenimiento',
    'Soldador Certificado',
    'Operador de Maquinaria',
    'Supervisor de Obras',
  ];

  const benefits = [
    'Ambiente de trabajo seguro y profesional',
    'Oportunidades de desarrollo y capacitación',
    'Proyectos desafiantes en sector hidroeléctrico',
    'Equipo comprometido y colaborativo',
    'Compensación competitiva',
    'Estabilidad laboral',
  ];

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd_Zm7Vl_z9yk1m9Yq2Y9Qw8Gx7Zl6Qk7Rj8Pt3Vt4Uj5Pl/viewform?usp=sf_link';

  return (
    <section id="postulaciones" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen pt-32 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">
        <div className="text-center mb-12 animate-in slide-in-from-top duration-500 delay-100">
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Únete a Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buscamos profesionales comprometidos con la excelencia y la seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 animate-in slide-in-from-top duration-700 delay-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Por qué trabajar con nosotros?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Áreas de trabajo:</h4>
              <div className="flex flex-wrap gap-2">
                {positions.map((position, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {position}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Postulación Laboral
            </h3>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                Para postular a una posición en GYC Mantención, completa nuestro formulario de postulación seguro.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Formulario de Postulación</h4>
                <p className="text-gray-700 mb-4">
                  Accede al formulario oficial de postulación. Asegúrate de completar todos los campos con información veraz.
                </p>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Abrir Formulario
                </a>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Información Importante</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Revisa los requisitos antes de postular</li>
                  <li>• Adjunta tu currículum en PDF</li>
                  <li>• Completa todos los campos requeridos</li>
                  <li>• Nos contactaremos por los datos que proporciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={() => setCurrentSection('inicio')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Volver al Inicio
        </button>
      </div>
    </section>
  );
}
