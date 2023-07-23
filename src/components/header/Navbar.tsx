import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { menuItems } from "../../data/navitems";


export const Navbar = ({open, toggleNav}: {open: boolean, toggleNav: () => void}) => {
  return (
      <ul className={`z-[100] md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!open && 'top-[-490px]'}`}>
        {
          menuItems.map((link)=>(
            <li key={link} className='md:ml-8 md:my-0 my-7' onClick={() => toggleNav() }>
              <a 
                href={`#${link.toLocaleLowerCase()}`} 
                className='text-gray-500 hover:text-sky-500 hover:underline hover:ease-out'
              >
                {link}
              </a>
            </li>
          ))
        }

      <li className={`${open && "my-8"}`}>
        <a href="https://www.linkedin.com/in/vladimir-loza-ab569123b/" target="_blank">
          { open ? <span className="text-gray-500 hover:text-sky-500 hover:underline hover:ease-out">LinkedIn</span> : <FaLinkedin  className="mx-2 opacity-50 hover:text-sky-500 cursor-pointer"/> }
        </a>
      </li>
      <li className={`${open && "my-8"}`}>
        <a href="https://github.com/OverThink3r" target="_blank">
          { open ? <span className="text-gray-500 hover:text-sky-500 hover:underline hover:ease-out">GitHub</span> : <FaGithubSquare className="mx-2 opacity-50 hover:text-sky-500 cursor-pointer" /> }
        </a>
      </li>
      </ul>
  )
}
