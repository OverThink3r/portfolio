import { Buttons } from "./Buttons"




export const HomeSection = () => {

  return (
    <section id="home" className="flex justify-evenly w-10/12 mx-auto text-white h-screen -mt-5">
      <div className="w-3/5 mx-4 flex flex-col justify-center">
        <div className="flex flex-row items-center">
          <h3 className="text-xl mr-1">Hello</h3>
          <hr className="w-10/12 mx-auto"/>
        </div>
        <h2 className="w-full text-5xl my-5">I'am Vladimir Loza Prado</h2>
        <h3 className="w-full text-3xl">Full Stack Developer</h3>
        <div className="w-4/12 my-4 flex justify-evenly">
          <Buttons />
        </div>
      </div>

      <div className="w-2/5">
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
