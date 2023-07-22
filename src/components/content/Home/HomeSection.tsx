import { Buttons } from "./Buttons"


export const HomeSection = () => {

  return (
    <section id="home" className="flex justify-evenly w-10/12 mx-auto text-black h-screen -mt-5">
      <div className="w-4/5 mx-4 flex flex-col justify-center">
        <div className="flex flex-row items-center">
          <h3 className="text-xl mr-1">Hello</h3>
          <hr className="w-3/4 border-slate-500"/>
        </div>
        <h2 className="w-full text-6xl my-5">My name is Vladimir Loza</h2>
        <h3 className="w-full text-3xl text-slate-400">I'am a Front End Developer.</h3>
        <div className="w-full my-4 flex items-center">
          <Buttons />
        </div>
      </div>

      <div className="w-1/5">
        {/* <img 
          src="profile-picture.jpg"
          alt="User image" 
          style={{
            width: '200px',
            height: 'auto',
            margin: '0 auto',
          }}
        /> */}
      </div>
    </section>
  )
}
