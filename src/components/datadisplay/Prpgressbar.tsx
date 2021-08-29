import { VFC } from "react"

type ProgressbarType = {
  content: string
  progress: string
}

const Progressbar: VFC<ProgressbarType> = (props) => {
  const { content, progress } = props
  return (
    <div className='relative pt-1'>
      <span className='inline-block py-1 px-2 text-xs font-semibold text-pink-600 uppercase'>
        {content}
      </span>
      <div className='flex'>
        <div className='flex overflow-hidden flex-1 mb-4 w-10/12 max-w-6xl h-3 text-xs bg-pink-200 rounded'>
          <div
            style={{ width: progress }}
            className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-pink-500 shadow-none'
          ></div>
        </div>
        <span className='inline-block pl-2 w-2/12 max-w-min h-3 text-xs font-semibold leading-3'>
          {progress}
        </span>
      </div>
    </div>
  )
}
export default Progressbar
