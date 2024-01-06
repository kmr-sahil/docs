import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, refrence, onDelete}) {


    
  return (
    <motion.div drag 
        dragConstraints={refrence} 
        whileDrag={{scale: 1.1}} 
        dragElastic={0.2} 
        dragTransition={{bounceStiffness: 100, bounceDamping:30}}
        className='relative flex-shrink-0 w-60 h-min rounded-[45px] bg-zinc-900/90 text-white overflow-hidden'>

      <div className='px-8 pt-8 pb-10 flex flex-col gap-4'>
          <button className='self-end' onClick={onDelete}><IoClose/></button>
          <div className='flex gap-2'>
                {data.type == "checkbox" ? (<input type="checkbox" />) : null}
                <h1>{data?.title}</h1>
          </div>

          <p className='text-sm leading-tight mt-5 font-thin'>{data?.desc}</p>
      </div>
        

        <div className='footer bottom-0 w-full left-0'>
            
              <div className={`tag w-full py-4 ${data?.type === "link" ? "bg-blue-600" : `${data?.type === "checkbox" ? "bg-red-600" : "bg-green-600"}` } flex items-center justify-center`}>
                  {data.type == "link" ? (<a href={data.link}>{data?.tagTitle}</a>) : 
                      (<h3 className='text-sm'>{data?.tagTitle}</h3>)}

              </div>
       
        </div>
    </motion.div>
  )
}

export default Card