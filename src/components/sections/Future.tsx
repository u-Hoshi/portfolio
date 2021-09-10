import Image from "next/image"
import logo from "../../../public/images/future.png"
import styles from "../../../styles/future.module.scss"
import SectionTitle from "../datadisplay/SectionTitle"

const Future = () => {
  return (
    <section id='FUTURE'>
      {/* sp */}
      <div className='md:hidden relative -top-64 z-0 -mb-64 text-center'>
        <div className={styles.futuresp}>
          <div className='pt-72 align-top'>
            <SectionTitle title='5年後にやりたいこと' subtitle='FUTURE' />
            <p className='px-3 pt-3 pb-8'>
              私は5年後技術に加え、顧客の目線、ビジネスの観点からもプロダクトについて考え、プロダクト作りの現場の中心となるエンジニアになりたいです。
              <br />
              そして無機的なものとして捉えられがちなITで有機的だと言われる人間の心を理解するプロダクトを作り,
              相手の気持ちを考えて行動できる人を増やし、誰もが何かに夢中になれる世界を作りたいです。
            </p>
            <Image className='relative -top-8' width={960} height={501} src={logo} alt='logo' />
          </div>
        </div>
      </div>
      {/* pc */}
      <div className=' hidden md:block relative -top-64 z-0 -mb-64 text-center'>
        <div className={styles.futurepc}>
          <div className='hidden sm:flex justify-center sm:px-16 lg:px-32 xl:px-0 pt-72 mx-auto max-w-screen-xl'>
            <div className=' w-1/2'>
              <SectionTitle title='5年後にやりたいこと' subtitle='FUTURE' />
              <p className='px-3 pt-3 pb-8'>
                私は5年後技術に加え、顧客の目線、ビジネスの観点からもプロダクトについて考え、プロダクト作りの現場の中心となるエンジニアになりたいです。
                <br />
                そして無機的なものとして捉えられがちなITで有機的だと言われる人間の心を理解するプロダクトを作り,
                相手の気持ちを考えて行動できる人を増やし、誰もが何かに夢中になれる世界を作りたいです。
              </p>
            </div>
            <Image
              className='
            '
              width={480}
              height={251}
              src={logo}
              alt='logo'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Future
