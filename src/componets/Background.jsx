import React from 'react'

function Background() {
  return (
    <>
      <div className='absolute min-h-screen z-[0] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[4rem] tablet:text-[6rem] leading-none tracking-tighter font-semibold text-zinc-900 flex flex-col gap-10 justify-center items-center'>
            <div className='flex flex-col items-center justify-center flex-1 pt-[4rem]'>
                  <h1>Potion</h1>
                  <p className='text-[0.85rem] tablet:text-[1.2rem] tracking-normal font-medium text-center p-[1rem] text-zinc-900 opacity-80'>
                    • Name a title to your task 
                          <br></br> <br></br>
                    • Select the Type of card <span className='border-2 border-dotted border-zinc-900 text-zinc-900 font-bold px-[0.5rem] py-[0.25rem] rounded-md text-[0.85rem]'>Todo / Note / Link</span> 
                          <br></br> <br></br>
                    • Add <span className='border-2 border-dotted border-zinc-900 text-zinc-900 font-bold px-[0.5rem] py-[0.25rem] rounded-md text-[0.85rem]'>tagline or deadline</span>  whatever you want 
                          <br></br> <br></br>
                    • Now just simply click on <span className='border-2 border-zinc-900 text-zinc-900 font-bold px-[0.5rem] py-[0.25rem] rounded-md text-[0.85rem]'>Add</span> 
                          <br></br> <br></br>
                  </p>
            </div>
                {/* Flex container for the bottom content */}
            <div className='mt-auto'>
                  <a
                    target='_blank'
                    href='https://bento.me/sahilkmr'
                    className='text-base tracking-normal'
                  >
                    created by @sahilkmr
                  </a>
            </div>

        </div>
    </>
  )
}

export default Background