import Link from "next/link"
import { Link as Scroll } from "react-scroll"

type HeaderNavType = {
  nav: string
  key: string
}

export const HeaderNav = (props: HeaderNavType) => {
  const { nav, key } = props
  return (
    <nav key={nav} className='flex-auto sm:pl-6'>
      <Scroll
        to={nav}
        smooth={true}
        duration={500}
        className='font-medium text-text-green hover:opacity-50 hover:cursor-pointer'
      >
        {nav}
      </Scroll>
    </nav>
  )
}
