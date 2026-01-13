import { Menu, X, Home, Settings, Users, Newspaper, FileText, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../App';
import logo from '../image/logo-e1727654075501.png';

interface HeaderProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

export default function Header({ currentSection, setCurrentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Orden actualizado: Inicio, Nosotros, Servicios, Políticas, Contacto
  // Nota: He dejado 'Noticias' fuera o puedes reubicarlo si lo necesitas.
  const navigation = [
    { name: 'Inicio', id: 'inicio' as Section, icon: Home },
    { name: 'Quienes Somos', id: 'nosotros' as Section, icon: Users },
    { name: 'Servicios', id: 'servicios' as Section, icon: Settings },
    { name: 'Políticas', id: 'politicas' as Section, icon: FileText },
    { name: 'Contacto', id: 'contacto' as Section, icon: MessageSquare },
  ];

  const handleNavigation = (section: Section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md backdrop-blur-md bg-opacity-60 border-b border-gray-200">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-10">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('inicio')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="GYC Mantención"
                className="h-12 w-auto animate-pulse hover:animate-none transition-all duration-500"
              />
              <span className="hidden sm:block text-1xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                GYC Mantención SpA
              </span>
            </button>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              const isCTA = item.id === 'contacto';

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`group relative px-4 py-2.5 rounded-lg transition-all duration-300 font-medium flex items-center gap-3 overflow-hidden ${
                    isCTA
                      ? isActive
                        ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-white shadow-lg scale-105'
                        : 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md hover:shadow-xl hover:scale-105 hover:from-amber-700 hover:to-amber-600'
                      : isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive
                        ? 'text-white scale-110'
                        : isCTA
                        ? 'text-white'
                        : 'text-gray-600 group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-12'
                    }`}
                  />
                  <span className={isCTA ? 'font-semibold' : ''}>{item.name}</span>

                  {!isCTA && !isActive && (
                    <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden py-4">
              <div className="flex flex-col space-y-1 px-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.id;
                  const isCTA = item.id === 'contacto';

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`group w-full text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium flex items-center gap-5 ${
                        isCTA
                          ? isActive
                            ? 'bg-gradient-to-r from-amber-700 to-blue-600 text-white shadow-md'
                            : 'bg-gradient-to-r from-amber-600 to-blue-500 text-white shadow hover:shadow-lg'
                          : isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-800 hover:text-blue-600 hover:bg-white/60'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-all duration-300 ${
                          isActive
                            ? 'text-white scale-110'
                            : isCTA
                            ? 'text-white'
                            : 'text-gray-700 group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-12'
                        }`}
                      />
                      <span className={`text-lg ${isCTA ? 'font-semibold' : ''}`}>
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}