import { Buttons } from "./Buttons"
import {Quote} from "./Quote";


export const HeroSection = () => {

  return (
    <section id="hero" className="flex justify-center w-11/12 mx-auto text-black h-screen mt-3 md:-mt-5">
      <div className="w-4/5 mx-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-3">Hello.</h2>
        <hr className="w-3/4 border-slate-500 mx-auto"/>
        <h2 className="w-full text-4xl md:text-6xl mt-5 mb-1 md:mt-8 md:mb-5 text-center">
          My name is <span className="font-extrabold text-transparent text-md lg:text-6xl bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600"> Vladimir Loza.</span>
        </h2>
        <h3 className="w-full text-2xl md:text-3xl text-slate-600 mb-2 md:my-2 text-center">I'am a Front End Developer. &#128513;</h3>
        <div className="w-full flex justify-center items-center mt-5 mb-10 gap-5">
          <Buttons />
        </div>
        <Quote />
      </div>
{/*
      <div className="w-1/5">
        <img
          src="profile-picture.jpg"
          alt="User image"
          style={{
            width: '200px',
            height: 'auto',
            margin: '0 auto',
          }}
        />
      </div>
*/}
    </section>
  )
}
