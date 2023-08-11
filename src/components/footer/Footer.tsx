import { FaGithub } from "react-icons/fa"
export const Footer = () => {
  return (
    <footer className="w-full h-20 flex justify-center text-black/60 mb-10">
      <a className="flex items-center justify-center hover:underline hover:text-sky-500" href="https://github.com/OverThink3r/portfolio.git" target="_blank">
        <span>Designed & Built by Vladimir Loza</span>
        <FaGithub className="ml-2" />
      </a>
    </footer>
  )
}
