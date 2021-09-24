import Me from '../atoms/Me'
import SocialIcons from '../molecules/SocialIcons'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="mt-5 h-screen grid items-center">
      <div className="gird h-full">
        <Nav />
        <div className="flex flex-col justify-center h-full">
          <Me />
          <h1 className="text-center text-white mt-5 text-xl md:text-2xl lg:text-3xl xl">
            Rogelio Samuel Moreno Corrales
          </h1>
          <p className="text-center text-subtitle mt-1 text-sm lg:text-base">
            Front-end developer at @EDteam | MERN stack
          </p>
          <SocialIcons />
        </div>
      </div>
    </header>
  )
}

export default Header
