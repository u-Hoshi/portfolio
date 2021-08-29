import Image from "next/image"
import samplelogo from "../../../public/images/skill.png"
import styles from "../../../styles/skill.module.scss"
import Progressbar from "../datadisplay/Prpgressbar"
import SectionTitle from "../datadisplay/SectionTitle"

const Skill = () => {
  return (
    <div className='relative lg:-top-32'>
      {/* pc */}
      <div className='px-5 sm:px-0 text-center'>
        <div className='hidden lg:flex'>
          <div className={styles.skillpc}>
            <div className='flex justify-evenly py-28 px-20'>
              <Image className='max-h-32' src={samplelogo} width={560} height={300} alt='logo' />
              <div className='pl-10 text-left'>
                <SectionTitle title='スキル' subtitle='SKILL' />
                <p className='max-w-lg tracking-wider leading-7 text-left text-text-black'>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div className='px-4 pt-5 pb-10 mt-8 w-11/12 max-w-xl text-left bg-white'>
                  <Progressbar content='サンプル' progress='70%' />
                  <Progressbar content='サンプル' progress='70%' />
                  <Progressbar content='サンプル' progress='70%' />
                  <Progressbar content='サンプル' progress='70%' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sp */}
      <div className='text-center'>
        <div className='lg:hidden'>
          <div className={styles.skillsp}>
            <SectionTitle title='スキル' subtitle='SKILLS' />
            <Image src={samplelogo} width={400} height={310} alt='logo' />
            <p className='px-8 pt-8 tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className='px-4 pt-5 pb-10 mx-5 mt-8 text-left bg-white'>
              <Progressbar content='サンプル' progress='70%' />

              <Progressbar content='サンプル' progress='70%' />
              <Progressbar content='サンプル' progress='70%' />
              <Progressbar content='サンプル' progress='70%' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
