import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <div className="w-[50px] h-[42px]">
      <Link href="/">
        <a href="">
          <Image
            layout="responsive"
            src="/img/favicon.svg"
            width={53}
            height={45}
            priority
            alt="Rogelio Samuel"
          />
        </a>
      </Link>
    </div>
  )
}
