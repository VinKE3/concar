import { SoporteData, EmpresaData } from "./incio.types";
import {
  Youtube,
  BookOpenCheck,
  List,
  Search,
  UserRound,
  Briefcase,
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
    title: "Palabras claves",
    href: "/palabras-claves",
    icon: Search,
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
    href: "/mis-productos",
    icon: Briefcase,
    description: "Visualice información relacionada a sus productos.",
  },
];
