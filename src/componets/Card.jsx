import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, refrence, onDelete}) {

  const [done, setDone] = useState(false);
    
  return (
    <motion.div drag 
        dragConstraints={refrence} 
        whileDrag={{scale: 1.1}} 
        dragElastic={0.2} 
        dragTransition={{bounceStiffness: 100, bounceDamping:30}}
        className={`relative w-60 h-min ${done == true ? "brightness-50" : ""} rounded-[30px] bg-zinc-900/80 backdrop-blur-md text-white overflow-hidden`}>

      <div className='px-5 pt-5 pb-8 flex flex-col gap-2'>
          <button className='self-end' onClick={onDelete}><IoClose/></button>
          <div className='flex gap-2'>
                {data.type == "checkbox" ? (<input className='w-[16px] bg-slate-500' 
                                                   type="checkbox" 
                                                   onClick={() => setDone(!done)}
                                                   />) : null}
                <h1 className={`text-[1rem] tablet:text-[1.15rem] tablet-lg:text-[1.25rem] ${done == true ? "line-through" : ""} font-bold`}>{data?.title}</h1>
          </div>

          <p className='text-[0.75rem] tablet:text-[0.8rem] tablet-lg:text-[0.85rem] leading-tight font-thin'>{data?.desc}</p>
      </div>
        

        {(data?.tagTitle || data?.link) && (<div className='footer w-full'>
            
              <div className={`tag w-full px-8 py-4 ${data?.type === "link" ? "bg-blue-600" : `${data?.type === "checkbox" ? "bg-red-600" : "bg-green-600"}` } flex items-center justify-center`}>
                  {data.type == "link" ? (<a target='_blank' href={data.link} className='flex gap-1 items-center justify-start'>
                                              <IoLinkOutline />{data?.tagTitle}
                                          </a>) : 
                      (<h3 className='text-sm'>{data?.tagTitle}</h3>)}

              </div>
       
        </div>)}
    </motion.div>
  )
}

export default Card