import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { menuItems } from "../../data/navitems";


export const Navbar = () => {
  return (
    <ul className="m-3 w-2/6 flex text-black justify-evenly " >
      {
        menuItems.map(item => (
          <li
            className="transition text-slate-400 hover:text-sky-500 cursor-pointer rounded p-1 hover:backdrop-blur-md hover:ease-out"
            key={item}
          >
          <a
            href={`#${item.toLowerCase()}`}
            key={item} 
          >
          {item}
          </a>
          </li>
        ))
      }
      <li>
        <a href="https://www.linkedin.com/in/vladimir-loza-ab569123b/" target="_blank">
          <FaLinkedin  className="mt-2 opacity-50 hover:text-sky-500 cursor-pointer"/>
        </a>
      </li>
      <li>
        <a href="https://github.com/OverThink3r" target="_blank">
          <FaGithubSquare className="mt-2 opacity-50 hover:text-sky-500 cursor-pointer" />
        </a>
      </li>
    </ul>
  )
}
