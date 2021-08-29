import Image from "next/image"
import samplelogo from "../../../public/images/value1.png"
import SectionTitle from "../datadisplay/SectionTitle"

const Value = () => {
  return (
    <>
      <div className=' relative z-10 text-center'>
        <SectionTitle title='価値観' subtitle='VALUES' />
        <div className='lg:flex lg:justify-center lg:mx-32 sm:bg-white'>
          <div className=' px-4 lg:px-10 lg:pt-7 pb-4 lg:pb-7 my-7 mx-5 sm:mx-auto lg:mx-0 sm:w-96'>
            <Image src={samplelogo} width={200} height={200} alt='logo' />
            <p className='py-3 text-xl font-bold text-text-black'>価値観</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>

          <div className='hidden lg:block my-7 mx-1 w-0.5 h-96 bg-line-green'></div>

          <div className=' px-4 lg:px-10 lg:pt-7 pb-4 lg:pb-7 my-7 mx-5 sm:mx-auto lg:mx-0 sm:w-96'>
            <Image src={samplelogo} width={200} height={200} alt='logo' />
            <p className='py-3 text-xl font-bold text-text-black'>価値観</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>

          <div className='hidden lg:block my-7 mx-1 w-0.5 h-96 bg-line-green'></div>
          <div className=' px-4 lg:px-10 lg:pt-7 pb-4 lg:pb-7 my-7 mx-5 sm:mx-auto lg:mx-0 sm:w-96 bg-white'>
            <Image src={samplelogo} width={200} height={200} alt='logo' />
            <p className='py-3 text-xl font-bold text-text-black'>価値観</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Value
