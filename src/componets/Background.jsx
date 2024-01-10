import React from 'react'

function Background() {
  return (
    <>
      <div className='absolute min-h-screen z-[0] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[4rem] tablet:text-[6rem] leading-none tracking-tighter font-semibold text-zinc-900 flex flex-col gap-10 justify-center items-center'>
            <div className='flex flex-col items-center justify-center flex-1'>
                  <h1>Potion</h1>
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