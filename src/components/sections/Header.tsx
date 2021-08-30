import Image from "next/image"
import logo from "../../../public/images/logo.png"

const Header = () => {
  return (
    <>
      <div className='lg:ml-[-40px]'>
        <div className='sm:flex justify-between'>
          <div className='flex justify-center items-center lg:pl-[40px]'>
            <Image src={logo} width={150} height={75} alt='logo' />
          </div>
          <div className='sm:flex justify-center items-center lg:pl-[40px]'>
            <ul className='flex px-3 pb-2 sm:pb-0 text-center sm:text-right text-text-green'>
              <li className='flex-1 sm:pl-6'>About</li>
              <li className='flex-1 sm:pl-6'>About</li>
              <li className='flex-1 sm:pl-6'>About</li>
              <li className='flex-1 sm:pl-6'>About</li>
              <li className='flex-1 sm:pl-6'>About</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
