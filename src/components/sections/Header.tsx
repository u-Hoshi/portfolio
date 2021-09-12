import Link from "next/link"
import { HeaderNav } from "../navigations/HeaderNav"
import { HeaderTitle } from "../navigations/HeaderTiTle"

const navs = ["ABOUT", "SKILLS", "VALUES", "FUTURE"]

const Header = () => {
  return (
    <section id='header'>
      <div className='lg:ml-[-40px]'>
        <div className='sm:flex justify-between'>
          <div className='flex justify-center items-center lg:pl-[40px]'>
            <h1 className=' flex justify-center items-center py-5 lg:pl-[40px] text-2xl font-extrabold text-text-green'>
              u-Hoshi
            </h1>
          </div>
          <div className='sm:flex justify-center items-center lg:pl-[40px]'>
            <div className='flex px-1 pb-2 sm:pb-0 sm:mr-3 text-center sm:text-right text-text-green'>
              {navs.map((nav: string) => (
                <HeaderNav nav={nav} key={nav} />
              ))}
              <nav className='flex-1 sm:pl-6'>
                <Link href='/blog'>
                  <a className='font-medium text-text-green hover:opacity-50 hover:cursor-pointer'>
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
