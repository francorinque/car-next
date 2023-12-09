import Image from "next/image"

const Logo = () => {
  return (
    <>
      <Image
        src="/logo.svg"
        alt="Car Hub logo"
        width={118}
        height={18}
        className="object-contain"
      />
    </>
  )
}
export default Logo
