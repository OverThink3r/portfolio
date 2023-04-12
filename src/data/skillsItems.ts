import { SkillInterface } from "../interfaces/skillInteface";
import {  FaNodeJs, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si'
export const skillsItems:SkillInterface[] = [
  {
    title: 'Node',
    tags: [
      'Express JS',
      'Nest JS',
      'JWT',
    ],
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt asperiores deserunt iure iste accusantium',
    Icon: FaNodeJs 
  },
  {
    title: 'Spring Boot',
    tags: [
      'JPA',
    ],
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt asperiores deserunt iure iste accusantium',
    Icon: SiSpringboot
  },
  {
    title: 'React',
    tags: [
      'Hooks',
      'Redux',
      'Lazy Load',
      'Formik',
    ],
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt asperiores deserunt iure iste accusantium',
    Icon: FaReact
  }
]

/**
 * Spring -
 * Spring Boot es un proyecto de spring, solo que tiene un servidor de aplicaciones embebido
 * 
 * Bean
 * Objeto manejado por spring
 * La diferencia entre JPA y Hibernite es que JPA es una especificación y Hibernate es una implementación
 * 
 * Profile
 * Anotación que permite crear perfiles, define qué beans particulares se van a aplicar, por ejemplo dev, qa, prod
 * 
 * Patrones en spring boot
 * Creacional: singleton
 * Estructural: Proxy - @Transational
 * Comportamiento: Cache, Template
 * 
 * @Transactional
 * EN BD es una operación que permite ejecutar operaciones en Spring (métodos) de la forma todo o nada
 * 
 * Qué es la inyección de dependencias y cómo lo implementa Spring
 * Evita que un clase debe de instanciar objetos de otra
 * Al arrancar la aplicación con Spring se crean los objetos beans y luego se inyectan donde son necesarios usando por ejemplo q @Autowired
 * 
 * Formas de inyección de depencias en Spring
 * Inyección por atributo
 * Inyección por setter
 * Inyección por constructor
 * 
 * @Value("${}") SpEL, spring expression language
 * 
 * Puerto por defecto en spring boot, 8080
 * 
 * Spring Actuator
 * Libreria que proporciona herramientas de monitoreo y administración para una API REST
 * 
 * Patron de diseño singleton asegura que exista solo una instacia de un objeto en tiempo de ejecución, con un constructor privado y una instancia interna, minimiza la corrupción de datos
 * 
 * 
 */
