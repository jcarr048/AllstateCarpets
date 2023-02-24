import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <nav className="md:pb-5 flex justify-between bg-[#e3cba3] bg-gradient-to-r from-[#cc7c64] border-b-2 border-[#80241b]">
        <Link href="/">
          <Image
            src="/aclogo.png "
            height={120}
            width={120}
            alt="logo"
            className="md:pl-8 pt-2 md:h-160 md:w-160"
          />
        </Link>
        <div className="md:flex md:flex-col my-auto hidden ">
          <h1 className="font-bold text-l text-[#80241b] md:text-4xl xl:text-5xl text-scale pt-4">
            Allstate Carpets
          </h1>
          <h1 className="font-medium italic text-[#80241b]">
            &apos;Let Us Floor You!&apos;
          </h1>
        </div>
        <ul className="flex items-center">
          <li>
            <Link
              href="/"
              className="text-[#ac1010] text-l font-bold rounded p-2 hover:bg-[#a4614c]"
            >
              {' '}
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[#ac1010] font-bold rounded p-2 hover:bg-[#a4614c] text-scale"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[#ac1010] font-bold rounded p-2 hover:bg-[#a4614c] text-scale"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
