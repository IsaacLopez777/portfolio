import { Profile, Skill, Project } from '@/types';

export const profile: Profile = {
  name: 'Isaac Tenorio López',
  title: 'Desarrollador de Software | Especialista en Bases de Datos',
  location: 'Tres Ríos, Costa Rica',
  phone: '+506 8742 5031',
  email: 'Lopeztenorio58@gmail.com',
  linkedin: 'https://www.linkedin.com/in/isaac-tenorio-8a0411288',
  portfolio: 'https://github.com/IsaacLopez777/Portafolio'
};

export const education = {
  degree: 'Ingeniería en Sistemas de Computación',
  university: 'Universidad Fidélitas',
  progress: '95%',
  description: 'El programa de estudios incluye fundamentos de desarrollo de software, arquitectura de sistemas, gestión de bases de datos y metodologías de ingeniería de software.'
};

export const certifications = [
  { name: 'Cisco CCNA 1', description: 'Configuración de redes y protocolos de comunicación' },
  { name: 'Cisco CCNA 2', description: 'Routing y conmutación de redes' },
  { name: 'Cisco CCNA 3', description: 'Administración de infraestructura tecnológica' },
  { name: 'Azure Fundamentals', description: 'Conceptos básicos de servicios cloud de Azure' },
  { name: 'Power BI Data Analyst', description: 'Análisis y visualización de datos con Power BI' }
];

export const projects: Project[] = [
  {
    id: 'data-warehouse-santory',
    title: 'Data Warehouse Santory',
    description: 'Desarrollo completo de Data Warehouse en SQL Server con procesos ETL para extracción, transformación y carga de datos. Modelado dimensional y dashboards interactivos en Power BI para análisis estratégico.',
    technologies: ['SQL Server', 'ETL', 'Power BI'],
    featured: true,
    createdAt: new Date('2026-01-01')
  },
  {
    id: 'tienda-online',
    title: 'Tienda en Línea',
    desc: 'Plataforma de comercio electrónico con Spring Boot, Thymeleaf y MySQL. Carrito de compras, autenticación segura con Firebase y pagos con PayPal.',
    technologies: ['Spring Boot', 'Firebase', 'MySQL', 'PayPal'],
    featured: true,
    createdAt: new Date('2026-02-01')
  },
  {
    id: 'hotel-management',
    title: 'Gestión de Hoteles',
    description: 'Base de datos Oracle con procedimientos almacenados, vistas especializadas y consultas avanzadas para gestión de reservaciones y facturación.',
    technologies: ['Oracle', 'PL/SQL'],
    featured: false,
    createdAt: new Date('2026-03-01')
  },
  {
    id: 'sistema-comercial',
    title: 'Gestión Comercial',
    description: 'Sistema integral para gestión de clientes, ventas y productos con automatización de procesos mediante triggers y procedimientos almacenados.',
    technologies: ['Oracle', 'SQL'],
    featured: false,
    createdAt: new Date('2026-04-01')
  }
];

export const skills: Skill[] = [
  { category: 'Lenguajes', technologies: ['TypeScript', 'Java', 'C#', 'SQL'] },
  { category: 'Frameworks', technologies: ['React', 'Next.js', 'Spring Boot', '.NET'] },
  { category: 'Bases de Datos', technologies: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL'] },
  { category: 'Cloud', technologies: ['Azure', 'Firebase', 'Docker'] }
];

export const references = {
  name: 'Allan Vega Redondo',
  title: 'Ingeniero de Preventa',
  phone: '+506 6404 6149'
};