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
      <div className='flex sm:hidden justify-around'>
        <p>お問い合わせ</p>
        <p>助成金について</p>
      </div>
      <div className='flex sm:hidden justify-around pb-8'>
        <p>特定商取引法に基づく表記</p>
        <p>プライバシーポリシー</p>
      </div>
      <p className='hidden sm:block py-5'>
        CREATED BY <span className=' font-black'>u-Hoshi</span>
      </p>

      {/* <Image className='h-60' width={50} height={60} src={icon} alt='logo' /> */}
      <div className='flex justify-center pt-8'>
        <a className='p-2 text-2xl' href='https://github.com/u-Hoshi'>
          <FaGithub />
        </a>
        <a className=' p-2 text-2xl' href='https://twitter.com/CertainEngineer'>
          <FaTwitter />
        </a>
        <a className='p-2 text-2xl' href='https://qiita.com/ToaruEngineer'>
          <SiQiita />
        </a>
      </div>
      <p className='py-5'>© 2021 by u-Hoshi</p>
    </section>
  )
}

export default Footer
