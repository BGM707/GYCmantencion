import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import News from './components/News';
import Careers from './components/Careers';
import Whistleblower from './components/Whistleblower';
import Policies from './components/Policies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

export type Section = 
  | 'inicio' 
  | 'servicios' 
  | 'nosotros' 
  | 'noticias'
  | 'postulaciones'
  | 'denuncias' 
  | 'politicas' 
  | 'contacto';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('inicio');
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  // === SISTEMA DE CONTROL DE LICENCIA (KILL SWITCH) ===
  useEffect(() => {
    // URL Raw del Gist
    const LICENSE_URL = 'https://gist.githubusercontent.com/BGM707/a43fdfbefe0d8cf0892be4d37584232b/raw/licencia-gyc.json';

    fetch(LICENSE_URL, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const now = new Date();
        const validUntil = data?.validUntil ? new Date(data.validUntil) : null;

        // Verificación completa
        const isActive =
          data?.status === 'active' &&
          data?.check === 'D4d0666' &&                     // ← CLAVE DE SEGURIDAD
          validUntil instanceof Date &&
          !isNaN(validUntil.getTime()) &&
          validUntil >= now;

        setIsAuthorized(isActive);
      })
      .catch((error) => {
        console.error('Error verificando licencia:', error);
        // En caso de fallo de red / servidor → permitimos acceso (mejor UX para el cliente)
        setIsAuthorized(true);
      });
  }, []);

  // === SCROLL AL CAMBIAR SECCIÓN ===
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [currentSection]);

  // Mientras se verifica la licencia → no renderizamos nada (evita FOUC)
  if (isAuthorized === null) {
    return null;
  }

  // === PANTALLA DE BLOQUEO ===
  if (isAuthorized === false) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-6 sm:p-10 text-center">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-red-600 max-w-md sm:max-w-lg w-full">
          <h1 className="text-3xl sm:text-4xl font-black text-red-600 mb-5">
            SERVICIO SUSPENDIDO
          </h1>

          <p className="text-lg sm:text-xl text-gray-800 mb-6 font-medium">
            El periodo de licencia o arriendo de este sitio web ha expirado.
          </p>

          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Para regularizar su situación y restablecer el servicio, por favor contacte a{' '}
            <strong>Benjamin Gonzalez</strong> para renovación 
            (pago mensual o anual pendiente).
          </p>

          <p className="text-sm text-gray-500 italic">
            Gracias por su comprensión.
          </p>
        </div>
      </div>
    );
  }

  // Renderizado normal del sitio
  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return <Hero setCurrentSection={setCurrentSection} />;
      case 'servicios':
        return <Services setCurrentSection={setCurrentSection} />;
      case 'nosotros':
        return <About setCurrentSection={setCurrentSection} />;
      case 'noticias':
        return <News setCurrentSection={setCurrentSection} />;
      case 'postulaciones':
        return <Careers setCurrentSection={setCurrentSection} />;
      case 'denuncias':
        return <Whistleblower setCurrentSection={setCurrentSection} />;
      case 'politicas':
        return <Policies setCurrentSection={setCurrentSection} />;
      case 'contacto':
        return <Contact setCurrentSection={setCurrentSection} />;
      default:
        return <Hero setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <main className="flex-grow">
        <div
          key={currentSection}
          className="animate-in fade-in slide-in-from-right-10 duration-500"
        >
          {renderSection()}
        </div>
      </main>

      <Footer setCurrentSection={setCurrentSection} />
      <FloatingContactButton setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default App;