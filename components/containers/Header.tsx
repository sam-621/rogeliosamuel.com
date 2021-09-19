import Me from '../atoms/Me'
import SocialIcons from '../molecules/SocialIcons'

const Header = () => {
  return (
    <header className="mt-5">
      <Me />
      <h1 className="text-center text-white mt-5 text-xl">Rogelio Samuel Moreno Corrales</h1>
      <p className="text-center text-subtitle mt-1">Front-end developer at @EDteam | MERN stack</p>
      <SocialIcons />
    </header>
  )
}

export default Header
