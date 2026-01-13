import { MapPin, Phone, Mail, Clock, Send, ChevronRight, MessageSquare } from 'lucide-react';
import { Section } from '../App';

interface ContactProps {
  setCurrentSection: (section: Section) => void;
}

export default function Contact({ setCurrentSection }: ContactProps) {
  // Configuración de WhatsApp
  const whatsappNumber = "56996919657";
  const whatsappMessage = encodeURIComponent("Hola, revisando tu web me pareció interesante tu trabajo y tengo una consulta técnica, me gustaría agendar una cita más formal para mi proyecto.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Baquedano 847, Santa Barbara, Biobío',
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Llámanos',
      content: '+56 9 9691 9657',
      link: 'tel:+56996919657',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Escríbenos',
      content: 'contacto@gycmantencion.cl',
      link: 'mailto:contacto@gycmantencion.cl',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun - Vie: 8:00 - 18:00',
      color: 'bg-amber-500'
    },
  ];

  const steps = [
    { title: 'Consulta', desc: 'Recibe una cotización técnica sin costo.' },
    { title: 'Planificación', desc: 'Definimos logística y seguridad.' },
    { title: 'Ejecución', desc: 'Trabajo bajo normas de alta calidad.' }
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen pt-32 flex flex-col relative overflow-hidden"
    >
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-900/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm italic">Canales Oficiales</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-6">
            Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Contacto</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Columna Izquierda: Info y Mapa */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50">
                    <div className="flex items-start gap-4">
                      <div className={`${info.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-blue-300 text-sm font-bold uppercase tracking-wider">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-white font-medium block mt-1 hover:text-blue-400 break-all">{info.content}</a>
                        ) : (
                          <p className="text-white font-medium mt-1">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mapa Estilizado */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl h-[350px] border border-white/10">
                <iframe
                  title="Mapa GYC Mantención"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.46415777478!2d-72.02324632412852!3d-37.59124457203348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669939a3f95e57b%3A0x6b77e8417c828df5!2sBaquedano%20847%2C%20Santa%20B%C3%A1rbara%2C%20Biob%C3%ADo!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl"
                  className="w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Proceso de Trabajo */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-blue-600/20 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <Send className="w-6 h-6 text-blue-400" />
                Flujo de Trabajo
              </h3>

              <div className="relative space-y-12 flex-grow">
                {/* Línea vertical conectora */}
                <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />

                {steps.map((step, i) => (
                  <div key={i} className="relative pl-16 group">
                    <div className="absolute left-0 w-12 h-12 bg-[#0f172a] border-2 border-blue-500 rounded-full flex items-center justify-center text-white font-black z-10 group-hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      {i + 1}
                    </div>
                    <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ BOTÓN DE WHATSAPP ACTUALIZADO */}
              <div className="pt-10">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-3 group"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Iniciar Proyecto
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-gray-500 text-[10px] mt-4 uppercase tracking-tighter">Respuesta inmediata vía WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón Volver */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setCurrentSection('inicio')}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="w-10 h-[1px] bg-gray-600 group-hover:w-16 group-hover:bg-blue-400 transition-all" />
            <span className="uppercase tracking-[0.2em] text-xs font-bold">Volver al Inicio</span>
          </button>
        </div>
      </div>
    </section>
  );
}