import Link from "next/link"
import { Logo } from "."
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col  flex-wrap justify-between gap-5  sm:px-16 px-6 py-10 ">
        <div className="flex  items-start justify-start gap-6">
          <Logo />
          <p className="text-base text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        {/* links */}
        <div className="footer__links">
          {footerLinks.map((item) => {
            return (
              <div className="footer__link" key={item.title}>
                <h3 className="font-bold">{item.title}</h3>
                {item.links.map((link) => (
                  <Link href={link.url} key={link.title}>
                    {link.title}
                  </Link>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t  border-gray-100 sm:px-6 py-10">
        <p>Developed by Franco Rinque.</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer
