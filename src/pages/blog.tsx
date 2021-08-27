import Link from "next/link"
import { client } from "../../libs/client"

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
  blog: { id: string; title: string; createdAt: string; body: string }[]
}) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <p>{blog.title}</p>
            一覧
            <p>{blog.createdAt}</p>
          </li>
        ))}
      </ul>
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
