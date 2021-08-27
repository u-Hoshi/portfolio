import { client } from "../../../libs/client"

type Article = {
  body: string
  createdAt: string
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

type Contents = {
  contents: Article[]
}

const BlogId = ({
  blog,
}: {
  blog: { id: string; title: string; createdAt: string; body: string }
}) => {
  console.log(blog)
  return (
    <main>
      {/* <h1>{blog.title}</h1>
      <p>{blog.createdAt}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <p>詳細ページ</p>
    </main>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: "blog" })

  console.log(data)
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data: Contents = await client.get({ endpoint: "blog", contentId: id })

  console.log(data)

  return {
    props: {
      blog: data,
    },
  }
}

export default BlogId
