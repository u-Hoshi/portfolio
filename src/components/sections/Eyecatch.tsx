import { VFC } from "react"
import styles from "../../../styles/eyecatch.module.scss"
const Eyecatch = () => {
  return (
    <section className='bg-back-green'>
      <div className='flex flex-col sm:flex-row justify-between mx-auto max-w-screen-xl h-96 sm:h-96 lg:h-lg'>
        <div className='pt-5 sm:pl-10 lg:pl-20 sm:my-auto text-center sm:text-left text-white'>
          <h1 className='text-3xl lg:text-4xl 2xl:text-5xl'>u-Hoshi</h1>
          <h2 className='pt-4 text-2xl lg:text-3xl 2xl:text-4xl text-gray-200'>
            Web Developer&apos;s Blog
          </h2>
        </div>
        <div className='sm:hidden'>
          <div className={styles.eyecatchsp}></div>
        </div>
        <div className='hidden sm:block lg:hidden sm:w-1/2'>
          <div className={styles.eyecatchmiddle}></div>
        </div>
        <div className='hidden lg:block lg:w-3/5'>
          <div className={styles.eyecatchpc}></div>
        </div>
      </div>
    </section>
  )
}

export default Eyecatch
