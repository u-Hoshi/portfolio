import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/images/logo.png"

const BlogHeader = () => {
  return (
    <>
      <div className='mb-12 lg:ml-[-40px] text-white bg-back-black'>
        <div className='sm:flex justify-between sm:py-6 px-4 sm:px-8 mx-auto max-w-screen-xl'>
          <h1 className=' flex justify-center items-center lg:pl-[40px] text-2xl font-extrabold'>
            u-Hoshi
          </h1>
          <div className='sm:flex justify-center items-center lg:pl-[40px]'>
            <ul className='flex py-6 sm:py-0 pt-4 text-center sm:text-right text-text-green'>
              <li className='flex-1 sm:pl-6'>
                <Link href='/blog'>
                  <a>blog</a>
                </Link>
              </li>
              <li className='flex-1 sm:pl-6'>
                <Link href='/products'>
                  <a>products</a>
                </Link>
              </li>
              <li className='flex-1 sm:pl-6'>
                <Link href='/profile'>
                  <a>profile</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogHeader
