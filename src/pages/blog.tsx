import Link from "next/link"
import { client } from "../../libs/client"
import Footer from "../components/sections/Footer"
import Header from "../components/sections/Header"

interface Article {
  id: string
  title: string
  createdAt: string
  body: string
}

interface Contents {
  contents: Article[]
}

export default function Home({
  blog,
}: {
  blog: { id: string; title: string; createdAt: Date; body: string }[]
}) {
  return (
    <div>
      <div className='mx-auto max-w-screen-xl'>
        <Header />
        <div className=' mx-6 md:mx-auto max-w-screen-md'>
          <ul>
            {blog.map((blog) => (
              <li className='mb-16' key={blog.id}>
                <p className='py-3 text-gray-400'>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <a className='block mb-6 text-2xl font-bold'>{blog.title}</a>
                </Link>
                <div
                  className='text-gray-600 line-clamp-3'
                  dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                  }}
                />
                <div className='text-right'>
                  <button className='py-0.5 px-2 bg-progress-thin-green hover:bg-progress-dark-green rounded-lg'>
                    <Link href={`/blog/${blog.id}`}>redemore</Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: "blog" })

  return {
    props: {
      blog: data.contents,
    },
  }
}
