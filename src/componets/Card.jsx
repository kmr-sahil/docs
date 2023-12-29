import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

function Card({data}) {
    
  return (
    <div className='relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-thin'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className=' flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center '>
                    {data.close ? <IoClose/> : <LuDownload size=".7em" color='#fff'/>}
                    
                </span>
                
            </div>

            <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                <h3 className='text-sm'>Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card