import Link from "next/link"
import { HeaderTitle } from "../navigations/HeaderTiTle"

const navs = [
  { id: "blog", title: "BLOG" },
  { id: "products", title: "PRODUCTS" },
  { id: "profile", title: "PROFILE" },
]

type navType = {
  id: string
  title: string
}

const BlogHeader = () => {
  return (
    <>
      <div className='mb-12 lg:ml-[-40px] text-white bg-back-black'>
        <div className='sm:flex justify-between sm:py-6 px-4 sm:px-8 mx-auto max-w-screen-xl'>
          <HeaderTitle />
          <div className='sm:flex justify-center items-center lg:pl-[40px]'>
            <div className='flex py-6 sm:py-0 pt-4 text-center sm:text-right text-text-green'>
              {navs.map((nav: navType) => (
                <nav key={nav.id} className='flex-1 sm:pl-6 font-bold'>
                  <Link href={`/${nav.id}`}>
                    <a>{nav.title}</a>
                  </Link>
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogHeader
