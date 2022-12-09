import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/img/favicon.svg" width={53} height={45} />
    </Link>
  )
}
