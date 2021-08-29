import Image from "next/image"
import samplelogo from "../../../public/images/value1.png"
import SectionTitle from "../datadisplay/SectionTitle"

const Value = () => {
  return (
    <>
      <div className='text-center'>
        <SectionTitle title='価値観' subtitle='VALUES' />
        <div className='sm:flex sm:justify-center'>
          <div className='px-10 pt-7 sm:pb-7 mx-auto sm:mx-0 sm:w-96 max-w-md'>
            <Image src={samplelogo} width={200} height={200} alt='logo' />
            <p className='py-3 text-xl font-bold text-text-black'>価値観</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className='hidden sm:block mx-1 w-0.5 bg-line-green'></div>
          <div className='px-10 pt-7 mx-auto sm:mx-0 sm:w-96 max-w-md'>
            <Image src={samplelogo} width={200} height={200} alt='logo' />
            <p className='py-3 text-xl font-bold text-text-black'>価値観</p>
            <p className='tracking-wider leading-7 text-left text-text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className='hidden sm:block mx-1 w-0.5 bg-line-green'></div>

          <div className='px-10 pt-7 mx-auto sm:mx-0 sm:w-96 max-w-md'>
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
