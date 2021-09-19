import Image from 'next/image'

const Me = () => {
  return (
    <div className="flex justify-center">
      <Image
        className="object-cover rounded-full"
        src="/Rogelio_Samuel_Moreno_Corrales.jpg"
        width="150"
        height="150"
        layout="fixed"
        alt="Rogelio Samuel Moreno Corrales"
      />
    </div>
  )
}

export default Me
