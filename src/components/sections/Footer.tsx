import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { SiQiita } from "react-icons/si"
import icon from "../../../public/images/logo_white.png"

const Footer = () => {
  return (
    <section
      id='footer'
      className='relative py-11 -mb-5 text-xs text-center text-white align-middle bg-back-black'
    >
      <p className='hidden sm:block py-5'>
        CREATED BY <span className=' font-black'>u-Hoshi</span>
      </p>
      <div className='flex justify-center'>
        <a className='p-2 text-2xl' href='https://github.com/u-Hoshi'>
          <FaGithub />
        </a>
        <a className=' p-2 text-2xl' href='https://twitter.com/u_Hoshi7'>
          <FaTwitter />
        </a>
        <a className='p-2 text-2xl' href='https://qiita.com/ToaruEngineer'>
          <SiQiita />
        </a>
      </div>
      <p className='py-5'>© 2021 by u-Hoshi</p>
      <p>fwydのデザインを使用</p>
    </section>
  )
}

export default Footer
