import Link from "next/link"
import { Link as Scroll } from "react-scroll"

export const HeaderNav = (props: any) => {
  const { nav } = props
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
