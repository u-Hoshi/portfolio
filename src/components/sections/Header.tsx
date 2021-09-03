import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/images/logo.png"
import { HeaderNav } from "../navigations/HeaderNav"

const navs = ["ABOUT", "SKILLS", "VALUES", "FUTURE"]

const Header = () => {
  return (
    <section id='header'>
      <div className='lg:ml-[-40px]'>
        <div className='sm:flex justify-between mx-auto max-w-screen-2xl'>
          <div className='flex justify-center items-center lg:pl-[40px]'>
            <Image src={logo} width={150} height={75} alt='logo' />
          </div>
          <div className='sm:flex justify-center items-center lg:pl-[40px]'>
            <div className='flex px-1 pb-2 sm:pb-0 sm:mr-3 text-center sm:text-right text-text-green'>
              {navs.map((nav: string) => (
                <HeaderNav nav={nav} key={nav} />
              ))}
              <nav className='flex-1 sm:pl-6'>
                <Link href='/blog'>
                  <a className='text-[#008c8d] font-medium hover:opacity-50 hover:cursor-pointer'>
                    BLOG
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
