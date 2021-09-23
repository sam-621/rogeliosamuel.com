import Me from '../atoms/Me'
import SocialIcons from '../molecules/SocialIcons'

const Header = () => {
  return (
    <header className="mt-5">
      <Me />
      <h1 className="text-center text-white mt-5 text-xl md:text-2xl lg:text-3xl xl">
        Rogelio Samuel Moreno Corrales
      </h1>
      <p className="text-center text-subtitle mt-1 text-sm lg:text-base">
        Front-end developer at @EDteam | MERN stack
      </p>
      <SocialIcons />
    </header>
  )
}

export default Header
