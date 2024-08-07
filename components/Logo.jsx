import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/icon1.png"
        alt="LAG"
        height={50}
        width={50}
      />
    </Link>
  )
}

export default Logo