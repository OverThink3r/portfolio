import { SkillInterface } from "../interfaces/skillInteface";
import {FaAws, FaGitAlt, FaNodeJs, FaReact, FaVuejs, FaDatabase, FaCubes} from 'react-icons/fa';
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
    ],
    Icon: FaNodeJs ,
    borderColor: 'border-green-400',
    backgroundTagColor: "bg-green-400",
    iconColor: 'text-green-400'
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
    iconColor: 'text-sky-400',
    textTagColor: 'text-white'
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
    borderColor: 'border-green-500',
    backgroundTagColor: "bg-green-500",
    iconColor: 'text-green-400'
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
    backgroundTagColor: "bg-lime-300",
    iconColor: 'text-lime-400'
  },
  {
    title: 'Git',
    tags: [
      'Git',
      'Github',
      'Gitlab',
      'Gitflow',
    ],
    Icon: FaGitAlt,
    borderColor: 'border-red-500',
    backgroundTagColor: "bg-red-500",
    textTagColor: "text-white",
    iconColor: 'text-red-400'
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
    textTagColor: "text-white",
    iconColor: 'text-orange-400'
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
    textTagColor: "text-white",
    iconColor: 'text-indigo-400'
  },
  {
    title: 'Others',
    tags: [
      'JWT',
      'Docker',
      'SCRUM',
      'JQuery',
      'Linux',
      'SASS'
    ],
    Icon : FaCubes,
    borderColor: 'border-purple-500',
    backgroundTagColor: "bg-purple-500",
    textTagColor: "text-white",
    iconColor: 'text-purple-400'
  }
]
