import {
  Newspaper,
  Trophy,
  HardHat,
  Calendar,
  Clock,
  Quote,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  MapPin,
  ArrowRight,
  X,
  Search,
  FileText,
  Download,
  ShieldAlert,
  FileCheck,
  Zap,
  Users,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Section } from '../App';

interface NewsProps {
  setCurrentSection: (section: Section) => void;
}

export default function News({ setCurrentSection }: NewsProps) {
  const [activeHito, setActiveHito] = useState(0);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const stats = [
    { label: 'Horas Hombre Sin Accidentes', value: '45.000+', icon: HardHat, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Proyectos Finalizados 2025', value: '150+', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Eficiencia Operativa', value: '+28%', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Cumplimiento Normativo', value: '100%', icon: ShieldAlert, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const resources = [
    { 
      title: 'Ley Karin (Ley 21.643)', 
      subtitle: 'Prevención acoso y violencia laboral',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1200096',
      type: 'VIGENTE', 
      icon: ShieldAlert 
    },
    { 
      title: 'Ley 40 Horas (Ley 21.561)', 
      subtitle: 'Reducción gradual (42h desde abr. 2026)',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1191554',
      type: 'EN TRANSICIÓN', 
      icon: Clock 
    },
    { 
      title: 'Ley Inclusión Laboral (Ley 21.015 y mods. 21.690)', 
      subtitle: 'Equidad y discapacidad',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1104105',
      type: 'VIGENTE', 
      icon: Users 
    },
    { 
      title: 'Ley 16.744 Accidentes del Trabajo', 
      subtitle: 'Seguridad y salud laboral',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=28650',
      type: 'OFICIAL', 
      icon: HardHat 
    },
    { 
      title: 'Código del Trabajo (Actualizado 2026)', 
      subtitle: 'Texto refundido con últimas reformas',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=207436',
      type: 'COMPENDIO', 
      icon: FileCheck 
    },
  ];

  const blogPosts = [
    {
      date: '08 Ene, 2026',
      category: 'Normativa',
      title: 'Preparándonos para las 42 horas: Guía práctica 2026',
      excerpt: 'Estrategias para adaptar horarios, bandas horarias y compensaciones sin afectar productividad...',
      author: 'RR.HH. & Operaciones',
      highlighted: true
    },
    {
      date: '15 Dic, 2025',
      category: 'Seguridad',
      title: 'Actualización protocolos Ley Karin en faenas',
      excerpt: 'Nuevos canales de denuncia y capacitaciones obligatorias para prevención de violencia laboral...',
      author: 'Depto. Prevención'
    },
    {
      date: '20 Nov, 2025',
      category: 'Técnico',
      title: 'Mantenimiento predictivo con IoT en turbinas',
      excerpt: 'Implementación de sensores para reducción de paradas no programadas en centrales hidroeléctricas...',
      author: 'Ingeniería'
    },
    {
      date: '05 Nov, 2025',
      category: 'Innovación',
      title: 'Soldadura certificada HDPE en proyectos 2025',
      excerpt: 'Técnicas avanzadas aplicadas en montajes industriales para mayor durabilidad y seguridad...',
      author: 'Operaciones'
    }
  ];

  const fieldWorkImages = [
    {
      url: 'https://www.metalockengineering.com/media/5ssckv4q/power-industry.jpg',
      title: 'Mantenimiento de Turbinas',
      location: 'Central Hidroeléctrica Angostura - Colbún',
      details: ['Reparaciones mecánicas precisas', 'Alineación de ejes', 'Control de vibraciones']
    },
    {
      url: 'https://www.enelgreenpower.com/content/dam/enel-egp/immagini/articoli/comunicati-stampa/Campos-Del-Sol-14.jpg',
      title: 'Proyecto Solar Campos del Sol',
      location: 'Región de Atacama - Enel Green Power',
      details: ['Instalación paneles bifaciales', 'Generación limpia', 'Almacenamiento energía']
    },
    {
      url: 'https://d2rinternational.com/wp-content/uploads/2024/03/13cover.jpg',
      title: 'Montaje Spool y Tuberías HDPE',
      location: 'Planta Industrial Biobío',
      details: ['Fabricación y soldadura certificada', 'Pruebas de presión', 'Montaje estructural']
    },
    {
      url: 'https://hcamineria.cl/wp-content/uploads/2024/05/uso-adecuado-de-epp.webp',
      title: 'Seguridad en Faena',
      location: 'Faena Industrial Norte Chile',
      details: ['Uso correcto de EPP', 'Protección respiratoria', 'Cumplimiento normativo']
    },
    {
      url: 'https://360enconcreto.com/wp-content/uploads/2022/06/seguridad-industrial-foto1-1024x768.jpeg',
      title: 'Inspección y Mantenimiento',
      location: 'Obra Hidroeléctrica Biobío',
      details: ['Fiscalización diaria', 'Protocolos de altura', 'Trabajo seguro en equipo']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHito((prev) => (prev + 1) % fieldWorkImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextHito = () => setActiveHito((prev) => (prev + 1) % fieldWorkImages.length);
  const prevHito = () => setActiveHito((prev) => (prev - 1 + fieldWorkImages.length) % fieldWorkImages.length);

  return (
    <section id="noticias" className="py-24 bg-slate-50 min-h-screen pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER Y STATS */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Actualidad & Recursos</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                Centro de <span className="text-blue-600">Noticias</span>
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl">Últimas actualizaciones normativas, artículos técnicos y hitos operativos. Actualizado enero 2026.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 hover:shadow-2xl transition-all duration-300">
                <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <stat.icon size={32} />
                </div>
                <p className="text-5xl font-black text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NOTICIA DESTACADA ACTUAL */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2.5rem] p-10 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle size={28} />
            <span className="font-black uppercase tracking-wider text-amber-300">Noticias Clave 2026</span>
          </div>
          <h3 className="text-3xl font-black mb-4">Salario Mínimo $539.000 y Jornada Laboral a 42 horas en abril</h3>
          <p className="text-blue-100 mb-6">Desde enero 2026 rige el nuevo ingreso mínimo mensual de $539.000. Además, el 26 de abril se reduce la jornada máxima a 42 horas semanales (Ley 21.561).</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.gob.cl/noticias/aumento-historico-sueldo-minimo-enero-2026/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:underline">
              Más sobre salario mínimo <ExternalLink size={20} />
            </a>
            <a href="https://www.mintrab.gob.cl/40horas/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:underline">
              Más sobre Ley 40 Horas <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUMNA PRINCIPAL */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* TESTIMONIO */}
            <div className="relative group overflow-hidden bg-slate-900 rounded-[2.5rem] shadow-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-32 h-32 rounded-2xl object-cover border-4 border-white/10" alt="Supervisor"/>
              <div>
                <Quote className="text-amber-500 w-10 h-10 mb-4 opacity-70" />
                <p className="text-xl text-white mb-6 italic">"La seguridad y el cumplimiento normativo son el fundamento de nuestra excelencia operativa."</p>
                <p className="text-2xl font-bold text-white">Julián Gallegos Alarcón
Gerente General GYC - 2026</p>
              </div>
            </div>

            {/* ARTÍCULOS */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-slate-900">Artículos Recientes</h3>
                <button onClick={() => setIsBlogOpen(true)} className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:underline">
                  VER ARCHIVO COMPLETO <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, i) => (
                  <article key={i} className={`bg-white p-8 rounded-3xl border ${post.highlighted ? 'border-blue-500 shadow-lg' : 'border-slate-200'} hover:border-blue-600 transition-all shadow-sm hover:shadow-xl`}>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-tighter ${post.highlighted ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
                      {post.category}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{post.title}</h4>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-bold border-t pt-4">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> 4 min lectura</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA LATERAL */}
          <div className="space-y-8">
            
            {/* MARCO LEGAL */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">Marco Legal Actual</h3>
              </div>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {resources.map((res, i) => (
                  <a 
                    key={i} 
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-600 transition-all cursor-pointer no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg text-slate-400 group-hover:text-blue-50 transition-colors shadow-sm">
                        <res.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors">{res.title}</p>
                        <p className="text-[10px] text-slate-400 group-hover:text-blue-100 uppercase font-black tracking-tighter">
                          {res.subtitle} • {res.type}
                        </p>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-[10px] text-slate-400 italic text-center leading-tight">
                * Fuente: Biblioteca del Congreso Nacional (BCN) - Actualizado enero 2026.
              </p>
            </div>

            {/* HITOS OPERATIVOS - CARRUSEL */}
            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl group">
              <div className="relative aspect-video">
                {fieldWorkImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image.url} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeHito === index ? 'opacity-100' : 'opacity-0'}`} 
                    alt={image.title}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-amber-400 text-sm font-black uppercase tracking-widest mb-2">{fieldWorkImages[activeHito].location}</p>
                  <p className="text-white text-2xl font-bold mb-4">{fieldWorkImages[activeHito].title}</p>
                  <ul className="text-blue-200 text-sm space-y-1">
                    {fieldWorkImages[activeHito].details.map((det, idx) => (
                      <li key={idx} className="flex items-center gap-2"><CheckCircle2 size={14} /> {det}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={prevHito}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button 
                  onClick={nextHito}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>
              
              <div className="p-4 flex justify-center gap-3 bg-slate-800">
                {fieldWorkImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveHito(i)} 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeHito === i ? 'bg-white w-10' : 'bg-slate-500 hover:bg-slate-300'}`}
                    aria-label={`Ir a foto ${i+1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL ARCHIVO */}
      {isBlogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <div className="p-10 border-b flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Archivo Técnico GYC</h3>
                <p className="text-slate-500 font-medium">Todos los comunicados, guías y actualizaciones normativas</p>
              </div>
              <button onClick={() => setIsBlogOpen(false)} className="bg-slate-200 p-4 rounded-full hover:bg-rose-500 hover:text-white transition-all">
                <X size={28} />
              </button>
            </div>
            <div className="overflow-y-auto p-10 space-y-8">
              {[...blogPosts, ...blogPosts].map((post, n) => (
                <div key={n} className="flex gap-8 items-start pb-8 border-b border-slate-100 last:border-0 hover:translate-x-4 transition-transform cursor-pointer group">
                  <div className="bg-blue-50 text-blue-600 p-6 rounded-3xl font-black text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors min-w-[80px] text-center">
                    {new Date(post.date.split(', ')[1].trim().split(' ').reverse().join('-')).getDate()}
                    <br />
                    {post.date.split(' ')[1]}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase">{post.category}</span>
                    <h4 className="text-2xl font-bold text-slate-900 mt-3 mb-3">{post.title}</h4>
                    <p className="text-slate-500 mb-4">{post.excerpt}</p>
                    <div className="flex gap-6 text-sm font-bold text-slate-400 uppercase">
                      <span className="flex items-center gap-2"><Calendar size={16}/> {post.date}</span>
                      <span className="text-blue-600 hover:underline">Leer completo →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}