import Image from "next/image"
import samplelogo from "../../../public/images/about-1.png"
import styles from "../../../styles/about.module.scss"
import SectionTitle from "../datadisplay/SectionTitle"

const About = () => {
  return (
    <div className='mx-auto text-center break-words'>
      <div className='hidden lg:block'>
        <div className={styles.aboutpc}>
          <SectionTitle title='私について' subtitle='ABOUT' />
          <div className='flex sm:justify-between lg:justify-between sm:px-8 md:px-12 xl:px-56 mx-auto max-w-screen-xl'>
            <div className='pt-7 w-3/12 lg:w-72'>
              <Image src={samplelogo} width={200} height={200} alt='logo' />
              <p className='text-xl font-bold text-text-green'>趣味</p>
              <p className='tracking-wider leading-7 text-left text-text-black'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <div className='pt-7 w-3/12 lg:w-72'>
              <Image src={samplelogo} width={200} height={200} alt='logo' />
              <p className='text-xl font-bold text-text-green'>趣味</p>
              <p className='tracking-wider leading-7 text-left text-text-black'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <div className='pt-7 w-3/12 lg:w-72'>
              <Image src={samplelogo} width={200} height={200} alt='logo' />
              <p className='text-xl font-bold text-text-green'>趣味</p>
              <p className='tracking-wider leading-7 text-left text-text-black'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sp版 */}
      <div className='lg:hidden break-words'>
        <SectionTitle title='私について' subtitle='ABOUT' />
        <div>
          <div className='px-10 pt-7 mx-auto max-w-md'>
            <Image src={samplelogo} width={200} height={200} alt='logo' />
            <p className='text-xl font-bold text-text-green'>趣味</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <div className='px-10 pt-7 mx-auto max-w-md'>
          <Image src={samplelogo} width={200} height={200} alt='logo' />
          <p className='text-xl font-bold text-text-green'>趣味</p>
          <p className='tracking-wider leading-7 text-left text-text-black'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className='px-10 pt-7 mx-auto max-w-md'>
          <Image src={samplelogo} width={200} height={200} alt='logo' />
          <p className='text-xl font-bold text-text-green'>趣味</p>
          <p className='tracking-wider leading-7 text-left text-text-black'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
