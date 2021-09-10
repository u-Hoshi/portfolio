import Image from "next/image"
import valuelogo1 from "../../../public/images/value1.png"
import valuelogo2 from "../../../public/images/value2.png"
import valuelogo3 from "../../../public/images/value3.png"
import SectionTitle from "../datadisplay/SectionTitle"

const values = [
  {
    title: "粘り強さ",
    logo: valuelogo1,
    content:
      "決めたことは愚直に続けられます。中学校の部活では自分のミスで負けた事が悔しく、それからの２年間毎朝５時半に起き誰よりも早く学校に行き練習をし、最終的にはJリーグや海外のチームが参加する大会に市の代表として選ばれました。",
  },
  {
    title: "コミュニケーション力",
    logo: valuelogo2,
    content:
      "私自身が大切にし強みとすることがどんな人であっても相手の気持ちを考えて行動できる点です。この力によって中学校では裏部長、高校では部長を任されました。仕事ではユーザの意見をもとに新機能の立案を行いました。",
  },
  {
    title: "環境を手に入れる力",
    logo: valuelogo3,
    content:
      "他2つの力を活かして、自ら環境を変える・手に入れることが出来ます。仕事では営業部から開発部への異動、高校では毎年１０人以上いた退部者を０人に、などを達成しました。",
  },
]

const Value = () => {
  return (
    <section id='VALUES'>
      <div className=' relative z-10 text-center'>
        <SectionTitle title='私の強み' subtitle='VALUES' />
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
