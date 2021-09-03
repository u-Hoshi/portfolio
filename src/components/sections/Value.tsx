import Image from "next/image"
import valuelogo1 from "../../../public/images/value1.png"
import valuelogo2 from "../../../public/images/value2.png"
import valuelogo3 from "../../../public/images/value3.png"
import SectionTitle from "../datadisplay/SectionTitle"

const values = [
  {
    title: "価値観",
    logo: valuelogo1,
    content: "foobarhoge",
  },
  {
    title: "価値観2",
    logo: valuelogo2,
    content: "テキストテキストテキストテキストテキストテキストテキス",
  },
  {
    title: "価値観3",
    logo: valuelogo3,
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
]

const Value = () => {
  return (
    <section id='VALUES'>
      <div className=' relative z-10 text-center'>
        <SectionTitle title='価値観' subtitle='VALUES' />
        <div className='lg:flex lg:justify-center lg:mx-32 sm:bg-white'>
          {values.map((value) => (
            <div
              key={value.title}
              className=' px-4 lg:px-10 lg:pt-7 pb-4 lg:pb-7 my-7 mx-5 sm:mx-auto lg:mx-0 sm:w-96'
            >
              <Image src={value.logo} width={200} height={200} alt='logo' />
              <p className='py-3 text-xl font-bold text-text-black'>{value.title}</p>
              <p className='tracking-wider leading-7 text-center text-text-black'>
                {value.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Value
