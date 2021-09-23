import Image from 'next/image'
import { mediaFrom1440, mediaFrom768 } from '../../helpers/mediaQueries'
import { useMedia } from '../../hooks/useMedia'

const Me = () => {
  const isTablet = useMedia(mediaFrom768)
  const isDesktop = useMedia(mediaFrom1440)
  console.log(isTablet)

  if (isDesktop) {
    return (
      <div className="flex justify-center">
        <Image
          className="object-cover rounded-full"
          src="/images/Rogelio_Samuel_Moreno_Corrales.jpg"
          width="200"
          height="200"
          layout="fixed"
          alt="Rogelio Samuel Moreno Corrales"
        />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="flex justify-center">
        <Image
          className="object-cover rounded-full"
          src="/images/Rogelio_Samuel_Moreno_Corrales.jpg"
          width="150"
          height="150"
          layout="fixed"
          alt="Rogelio Samuel Moreno Corrales"
        />
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <Image
        className="object-cover rounded-full"
        src="/images/Rogelio_Samuel_Moreno_Corrales.jpg"
        width="250"
        height="250"
        layout="fixed"
        alt="Rogelio Samuel Moreno Corrales"
      />
    </div>
  )
}

export default Me
