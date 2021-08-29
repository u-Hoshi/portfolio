import { VFC } from "react"

type TitleType = {
  title: string
  subtitle: string
}

const SectionTitle: VFC<TitleType> = (props) => {
  const { title, subtitle } = props
  return (
    <div className='pt-8 tracking-wider'>
      <h3 className='text-xl font-bold text-gray-700'>{title}</h3>
      <p className='text-text-green'>{subtitle}</p>
    </div>
  )
}
export default SectionTitle
