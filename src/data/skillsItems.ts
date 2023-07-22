import { SkillInterface } from "../interfaces/skillInteface";
import {FaAws, FaGitAlt, FaNodeJs, FaReact, FaVuejs, FaDatabase} from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si'
export const skillsItems:SkillInterface[] = [
  {
    title: 'Node',
    tags: [
      'Javascript',
      'Typescript',
      'Express JS',
      'Nest JS',
      'Mongoose',
      'Prisma',
      'JWT',
    ],
    Icon: FaNodeJs ,
    borderColor: 'border-green-500',
    backgroundTagColor: "bg-green-500",
  },
  {
    title: 'React',
    tags: [
      'Hooks',
      'Redux',
      'Formik',
      'Tailwind',
      'Typescript',
      'Jest'
    ],
    Icon: FaReact,
    borderColor: 'border-sky-400',
    backgroundTagColor: "bg-sky-400",
  },
  {
    title: 'Spring Boot',
    tags: [
      'Java',
      'JPA',
      'JWT',
      'JUNIT',
    ],
    Icon: SiSpringboot,
    borderColor: 'border-emerald-500',
    backgroundTagColor: "bg-emerald-500"
  },
  {
    title: 'Vue',
    tags: [
      'Composition API',
      'Vuex',
      'PrimeFlex',
      'PrimeVue'
    ],
    Icon: FaVuejs,
    borderColor: 'border-lime-300',
    backgroundTagColor: "bg-lime-300"
  },
  {
    title: 'Git',
    tags: [
      'Github',
      'Gitlab',
      'Gitflow',
    ],
    Icon: FaGitAlt,
    borderColor: 'border-red-500',
    backgroundTagColor: "bg-red-500",
    textTagColor: "text-white"
  },
  {
    title: 'Amazon Web Services',
    tags: [
      'Lambda',
      'SES',
      'S3',
      'Cognito',
      'API Gateway',
      'CodeCommit',
    ],
    Icon : FaAws,
    borderColor: 'border-orange-500',
    backgroundTagColor: "bg-orange-500",
    textTagColor: "text-white"
  },
  {
    title: 'Database',
    tags: [
      'MySQL',
      'MariaDB',
      'MongoDB',
      'ElasticSearch',
      'Postgres',
    ],
    Icon : FaDatabase,
    borderColor: 'border-indigo-500',
    backgroundTagColor: "bg-indigo-500",
    textTagColor: "text-white"
  }
]
