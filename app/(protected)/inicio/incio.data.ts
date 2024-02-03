import { SoporteData, EmpresaData, NovedadesData } from "./incio.types";
import {
  Youtube,
  BookOpenCheck,
  List,
  Search,
  UserRound,
  Briefcase,
  Download,
  Newspaper,
  Presentation,
  Send,
  Video,
  BellDot,
} from "lucide-react";
export const dataSoporte: SoporteData = [
  {
    id: 1,
    title: "Tutorial de instalación",
    href: "/tutoriales",
    icon: Youtube,
    description: "Acceda a toda la información del CONCAR® y sus módulos.",
  },
  {
    id: 2,
    title: "Manuales de instalación",
    href: "/manuales",
    icon: BookOpenCheck,
    description: "Acceda a toda la información del CONCAR® y sus módulos.",
  },
  {
    id: 3,
    title: "Temas",
    href: "/temas",
    icon: List,
    description:
      "Navegue por los distintos temas de interes de nuestra biblioteca digital.",
  },
  {
    id: 4,
    title: "Descargas",
    href: "/descargas",
    icon: Download,
    description:
      "Agilice la búsqueda de su documento, utilizando nuestro índice de palabras claves.",
  },
];

export const dataEmpresa: EmpresaData = [
  {
    id: 1,
    title: "Mis Usuarios",
    href: "/mis-usuarios",
    icon: UserRound,
    description: "Detalle de usuarios, roles y permisos de su empresa.",
  },
  {
    id: 2,
    title: "Mis Productos",
    href: "/inicio",
    icon: Briefcase,
    description:
      "Acceda a la descarga de las últimas versiones de los sistemas adquiridos.",
  },
];

export const dataNovedades: NovedadesData = [
  {
    id: 1,
    title: "Noticias: Nuevo Sistema RS MONITOR",
    icon: Newspaper,
    href: "/inicio",
    description:
      "Les anunciamos que hemos incorporado esta nueva herramienta en nuestro soporte remoto para mejorar y agilizar nuestra forma de atención. RS MONITOR nos permitirá visualizar información sobre algunas configuraciones de su compañía en los sistemas electrónicas en tiempo real, tales como: certificado digital, estado de envío o declaración de los comprobantes electrónicos [ver más].",
  },
  {
    id: 2,
    title: "Noticias",
    icon: Newspaper,
    href: "/inicio",
    description: "Manténganse al día con las últimas noticias de interés.",
  },
  {
    id: 3,
    title: "Novedades RS",
    icon: BellDot,
    href: "/inicio",
    description:
      "Todas las novedades y mejoras que Real Systems tiene para usted.",
  },
  {
    id: 4,
    title: "Cursos y Talleres",
    icon: Presentation,
    href: "/inicio",
    description: "Capacítese y siga creciendo con nuestros cursos y talleres.",
  },
  {
    id: 5,
    title: "Notificaciones",
    icon: Send,
    href: "/inicio",
    description: "Información relevante para usted y su empresa.",
  },
  {
    id: 6,
    title: "Material Exclusivo ",
    icon: Video,
    href: "/inicio",
    description:
      "Manténgase al día con nuestra recopilación de exposiciones de alto nivel de información intelectual.",
  },
];
