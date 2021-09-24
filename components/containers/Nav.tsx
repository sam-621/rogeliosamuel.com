import { mediaFrom768 } from '../../helpers/mediaQueries'
import { useMedia } from '../../hooks/useMedia'

const Nav = () => {
  const isMobile = useMedia(mediaFrom768)
  return (
    <nav className="flex justify-between mt-5 mx-5 md:mx-16 lg:mx-36">
      <div>
        <img src={`/icons/${isMobile ? 'logo.svg' : 'logo_60.svg'}`} alt="Rogelio Samuel logo" />
      </div>
      <div>
        <button className="bg-secondary text-white p-2 rounded-md">Download CV</button>
      </div>
    </nav>
  )
}

export default Nav
