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
    // URL Raw de tu GitHub Gist
    const LICENSE_URL = 'https://gist.githubusercontent.com/BGM707/a43fdfbefe0d8cf0892be4d37584232b/raw/b33e7dba8212b34ff4ff810eb7b55b20638aa91b/licencia-gyc.json';

    fetch(LICENSE_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'active') {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      })
      .catch((error) => {
        console.error("Error verificando licencia:", error);
        // En caso de error de conexión, permitimos la carga para no afectar al cliente
        setIsAuthorized(true); 
      });
  }, []);

  // === EFECTO DE SCROLL AL CAMBIAR SECCIÓN ===
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, [currentSection]);

  // Si aún está verificando la licencia, no mostramos nada (evita parpadeos)
  if (isAuthorized === null) return null;

  // === PANTALLA DE BLOQUEO POR INCUMPLIMIENTO DE PAGO/CONTRATO ===
  if (isAuthorized === false) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-10 text-center">
        <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-red-600 max-w-lg">
          <h1 className="text-4xl font-black text-red-600 mb-4">SERVICIO SUSPENDIDO</h1>
          <p className="text-xl text-gray-700 mb-6">
            El periodo de licencia o arriendo de este sitio web ha expirado o se encuentra inactivo.
          </p>
          <p className="text-gray-500 italic">
            Para regularizar su situación y restablecer el servicio, por favor contacte al proveedor de desarrollo web.
          </p>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio': return <Hero setCurrentSection={setCurrentSection} />;
      case 'servicios': return <Services setCurrentSection={setCurrentSection} />;
      case 'nosotros': return <About setCurrentSection={setCurrentSection} />;
      case 'noticias': return <News setCurrentSection={setCurrentSection} />;
      case 'postulaciones': return <Careers setCurrentSection={setCurrentSection} />;
      case 'denuncias': return <Whistleblower setCurrentSection={setCurrentSection} />;
      case 'politicas': return <Policies setCurrentSection={setCurrentSection} />;
      case 'contacto': return <Contact setCurrentSection={setCurrentSection} />;
      default: return <Hero setCurrentSection={setCurrentSection} />;
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
