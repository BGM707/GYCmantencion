# GYC Mantención - Sitio Web Profesional

Sitio web corporativo para GYC Mantención SPA, especializada en mantenimiento industrial, servicios eléctricos, obras civiles y estructuras metálicas.

## Características

- **Navegación por Secciones**: Cada sección se muestra de forma independiente con fácil navegación
- **Botón Flotante de Contacto**: Acceso rápido a medios de contacto desde cualquier parte del sitio
- **Canal de Denuncias Confidencial**: Sección dedicada a reportes éticos con protección de identidad
- **Postulaciones Laborales**: Integración con Google Forms para recopilar candidaturas
- **Políticas de la Empresa**: Información sobre políticas éticas y de privacidad
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Seguridad**: Protección contra XSS mediante uso de Google Forms

## Tecnologías

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Herramientas**: Vite, Lucide React Icons
- **Estilos**: Tailwind CSS con animaciones personalizadas

## Instalación

```bash
npm install
npm run dev
```

## Construcción

```bash
npm run build
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx              # Navegación principal
│   ├── Hero.tsx                # Sección inicial
│   ├── Stats.tsx               # Estadísticas
│   ├── Services.tsx            # Servicios ofrecidos
│   ├── About.tsx               # Sobre nosotros
│   ├── Careers.tsx             # Postulaciones laborales
│   ├── Whistleblower.tsx       # Canal de denuncias
│   ├── Policies.tsx            # Políticas empresariales
│   ├── Contact.tsx             # Formulario de contacto
│   ├── Footer.tsx              # Pie de página
│   └── FloatingContactButton.tsx # Botón de contacto flotante
├── App.tsx                     # Componente principal
├── main.tsx                    # Punto de entrada
└── index.css                   # Estilos globales

```

## Secciones Principales

### Inicio (Hero)
Presentación visual del negocio con propuesta de valor.

### Servicios
Detalles de los servicios principales ofrecidos por GYC Mantención.

### Nosotros (About)
Información sobre la empresa, experiencia y valores.

### Postulaciones
Acceso a formulario de postulación a través de Google Forms. El uso de formularios externos previene vulnerabilidades XSS.

### Canal de Denuncias
Sección segura y confidencial para reportar irregularidades:
- Email: denuncias@gycmantencion.cl
- Garantías de confidencialidad
- Protección de identidad

### Políticas
Información sobre las políticas éticas, de privacidad y conducta de la empresa.

### Contacto
Formulario de contacto directo y medios alternativos de comunicación.

## Seguridad

- **Prevención de XSS**: Los formularios se envían a través de Google Forms en lugar de procesarse directamente
- **Sin Almacenamiento de Datos Sensibles**: Los datos de postulación se recopilan en Google Forms
- **Protección de Identidad**: El canal de denuncias mantiene confidencialidad mediante email cifrado

## Contacto

- **Teléfono**: +56 9 9691 9657
- **Email General**: contacto@gycmantencion.cl
- **Email Denuncias**: denuncias@gycmantencion.cl
- **Ubicación**: Santa Barbara, Biobío, Chile

## Licencia

Todos los derechos reservados © 2024 GYC Mantención SPA

## Autor

BENJAMIN GONZALEZ MEDINA