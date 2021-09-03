import Image from "next/image"
import aboutlogo1 from "../../../public/images/about-1.png"
import aboutlogo2 from "../../../public/images/about-2.png"
import aboutlogo3 from "../../../public/images/about-3.png"
import styles from "../../../styles/about.module.scss"
import SectionTitle from "../datadisplay/SectionTitle"

const abouts = [
  {
    title: "趣味1",
    content: "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    logo: aboutlogo1,
  },
  {
    title: "趣味2",
    content:
      " テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    logo: aboutlogo2,
  },
  {
    title: "趣味3",
    content: " 焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉焼肉",
    logo: aboutlogo3,
  },
]

const About = () => {
  return (
    <section id='ABOUT' className='mx-auto text-center break-words'>
      <div className='hidden lg:block'>
        <div className={styles.aboutpc}>
          <SectionTitle title='私について' subtitle='ABOUT' />
          <div className='flex sm:justify-between lg:justify-between sm:px-8 md:px-24 xl:px-48 mx-auto max-w-screen-xl'>
            {abouts.map((about: any) => (
              <div key={about.title} className='px-2 pt-7 w-3/12 lg:w-72'>
                <Image src={about.logo} width={200} height={200} alt='logo' />
                <p className='text-xl font-bold text-text-green'>{about.title}</p>
                <p className='tracking-wider leading-7 text-left text-text-black'>
                  {about.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* sp版 */}
      <div className='lg:hidden break-words'>
        <SectionTitle title='私について' subtitle='ABOUT' />

        {abouts.map((about: any) => (
          <div key={about.title} className='px-10 pt-7 mx-auto max-w-md'>
            <Image src={about.logo} width={200} height={200} alt='logo' />
            <p className='text-xl font-bold text-text-green'>{about.title}</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>{about.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default About
