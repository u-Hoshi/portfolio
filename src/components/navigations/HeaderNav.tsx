import Link from "next/link"
import { Link as Scroll } from "react-scroll"

type HeaderNavType = {
  nav: string
  key: string
}

export const HeaderNav = (props: HeaderNavType) => {
  const { nav, key } = props
  return (
    <nav key={nav} className='flex-1 sm:pl-6'>
      <Scroll
        to={nav}
        smooth={true}
        duration={500}
        className='text-[#008c8d] font-medium hover:opacity-50 hover:cursor-pointer'
      >
        {nav}
      </Scroll>
    </nav>
  )
}
