import Link from "next/link"
import Router from "next/router"

export const Pagination = ({ totalCount }: any) => {
  const PER_PAGE = 5

  const range = (start: any, end: any) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <nav aria-label='Page navigation' className='text-center'>
      <ul className='inline-flex'>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={`/blog/page/${number}`}>
              <a className='block w-10 h-10 leading-10 text-progress-dark-green hover:bg-progress-thin-green rounded-full transition-colors duration-150'>
                {number}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
