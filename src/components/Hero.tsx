import { Section } from '../App';

// IMPORTS DE ASSETS (CLAVE)
import heroImage from '../image/IMG_3329.jpeg';
import heroVideo from '../image/9856372-hd_1920_1080_30fps.mp4';
import logo from '../image/logo-e1727654075501.png';

interface HeroProps {
  setCurrentSection: (section: Section) => void;
}

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        {/* IMAGEN FALLBACK */}
        <img
          src={heroImage}
          alt="Mantenimiento Industrial"
          className="w-full h-full object-cover"
        />

        {/* VIDEO SOLO DESKTOP */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={heroImage}
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-in slide-in-from-top duration-700">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Soluciones Técnicas de Calidad
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Mantenimiento industrial y montaje mecánico especializado en el sector hidroeléctrico
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-top duration-700 delay-200">
              <button
                onClick={() => setCurrentSection('servicios')}
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Nuestros Servicios
              </button>

              <button
                onClick={() => setCurrentSection('contacto')}
                className="inline-flex items-center justify-center px-8 py-5 bg-transparent text-white font-semibold rounded-md border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
