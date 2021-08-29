import Image from "next/image"
import logo from "../../../public/images/future.png"
import styles from "../../../styles/future.module.scss"
import SectionTitle from "../datadisplay/SectionTitle"

const Future = () => {
  return (
    <>
      {/* sp */}
      <div className='md:hidden relative -top-64 z-0 text-center'>
        <div className={styles.futuresp}>
          <div className='pt-72'>
            <SectionTitle title='5年後にやりたいこと' subtitle='FUTURE' />
            <p className='px-3 pt-3 pb-8'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <Image className='w-full' width={480} height={251} src={logo} alt='logo' />
          </div>
        </div>
      </div>
      {/* pc */}
      <div className='hidden md:block relative -top-64 z-0 text-center'>
        <div className={styles.futurepc}>
          <div className='hidden sm:flex justify-center sm:px-16 lg:px-32 pt-72'>
            <div className=' w-1/2'>
              <SectionTitle title='5年後にやりたいこと' subtitle='FUTURE' />
              <p className='px-3 pt-3 pb-8'>
                テキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <Image className='' width={480} height={251} src={logo} alt='logo' />
          </div>
        </div>
      </div>
    </>
  )
}
export default Future
