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
        className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>

        
        {data.type == "checkbox" ? (<input type="checkbox" />) : null}
        <button onClick={onDelete}><IoClose/></button>
        <h1>{data?.title}</h1>
        <p className='text-sm leading-tight mt-5 font-thin'>{data?.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            
        <div className={`tag w-full py-4 ${data?.tagColor === "blue" ? "bg-blue-600" : `${data?.tagColor === "green" ? "bg-green-600" : "bg-red-600"}` } flex items-center justify-center`}>
            {data.type == "link" ? (<a href={data.link}>{data?.tagTitle}</a>) : 
                (<h3 className='text-sm'>{data?.tagTitle}</h3>)}
            
        </div>
       
        </div>
    </motion.div>
  )
}

export default Card