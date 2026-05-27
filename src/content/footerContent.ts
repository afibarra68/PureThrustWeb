export const FOOTER_CONTACT = {
  whatsappDisplay: '310 399 3456',
  whatsappHref: 'https://wa.me/573103993456',
  email: 'clientes@thrustpure.com',
  domain: 'https://thrustpure.com',
  domainLabel: 'thrustpure.com',
} as const;

export const FOOTER_ECOSYSTEM_LEAD =
  'Thrust Pure agrupa productos y plataformas de operación. Cada una corre con reglas propias y se amplía cuando el negocio lo requiere.';

export const FOOTER_PLATFORMS = [
  {
    id: 'alparquear',
    name: 'AlParquear',
    role: 'Plataforma de parqueaderos',
    siteUrl: 'https://www.alparquear.com/',
    adminUrl: 'https://admin.alparquear.com/',
    adminHostname: 'admin.alparquear.com',
    productAnchor: '#product-parking',
    summary:
      'Plataforma administrativa para la operación diaria del parqueadero: modelo operativo simple, listo desde el primer día y ampliable a la medida.',
    highlights: [
      'Día uno: ingresos, salidas, caja, turnos, usuarios y módulos base sin proyecto complejo inicial',
      'Catálogo en pantalla principal: reglas claras y barra de funciones para operar cualquier parqueadero',
      'A la medida: reportes, integración bancaria, pantallas y flujos con alcance definido con usted',
    ],
    inProduction: [
      'Lectores de códigos QR',
      'Impresoras y plantillas de tiquetes',
      'Secuencias en tirillas de pago',
    ],
    roadmap: ['Facturación nativa en el sistema', 'Integración con Nequi'],
  },
] as const;

export const FOOTER_LEGAL = [
  { label: 'Términos y condiciones', href: 'https://www.alparquear.com/' },
  { label: 'Política de privacidad', href: 'https://www.alparquear.com/' },
  { label: 'Política de cookies', href: 'https://www.alparquear.com/' },
  { label: 'Tratamiento de datos', href: 'https://www.alparquear.com/' },
] as const;

export const FOOTER_SOCIAL = {
  thrustPure: { label: 'thrust.pure', href: 'https://www.instagram.com/thrust.pure/' },
} as const;
