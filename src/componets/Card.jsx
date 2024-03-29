import { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, refrence, onDelete}) {

  const [done, setDone] = useState(false);

  useEffect(() => {
    // Retrieve the 'done' state from localStorage during component initialization
    const storedDone = localStorage.getItem(`done_${data.title}`);
    if (storedDone) {
      setDone(JSON.parse(storedDone));
    }
  }, [data.title]);

  const handleDoneChange = () => {
    // Toggle 'done' state and store in localStorage
    setDone(!done);
    localStorage.setItem(`done_${data.title}`, JSON.stringify(!done));
  };

  const linkValue = data.link.startsWith('https://') ? data.link : `https://${data.link}`;

    
  return (
    <motion.div drag 
        dragConstraints={refrence} 
        whileDrag={{scale: 1.1}} 
        dragElastic={0.2} 
        dragTransition={{bounceStiffness: 100, bounceDamping:30}}
        className={`relative w-60 h-min ${done == true ? "brightness-50" : ""} rounded-[30px] bg-zinc-900/80 backdrop-blur-md text-white overflow-hidden border-[2px] border-[#ffffff0c]`}>

      <div className='px-5 pt-5 pb-8 flex flex-col gap-2'>
          <button className='self-end text-[#ffffffb8]' onClick={onDelete}><IoClose/></button>
          <div className='flex gap-2'>
                {data.type == "checkbox" ? (<input className='w-[16px] bg-slate-500 opacity-[50%]' 
                                                   type="checkbox" 
                                                   
                                                   checked={done}
                                                   onClick={handleDoneChange}
                                                   />) : null}
                <h1 className={`text-[1rem] tablet:text-[1.15rem] tablet-lg:text-[1.25rem] ${done == true ? "line-through" : ""} font-bold text-[#ffffffd2] tracking-wide`}>{data?.title}</h1>
          </div>

          <p className='text-[0.75rem] tablet:text-[0.8rem] tablet-lg:text-[0.85rem] leading-none tracking-wide font-light text-[#ffffffd2]'>{data?.desc}</p>
      </div>
        

        {(data?.tagTitle || data?.link) && (<div className='footer w-full'>
            
              <div className={`tag w-full px-8 py-4 bg-opacity-[90%] ${data?.type === "link" ? "bg-blue-600" : `${data?.type === "checkbox" ? "bg-red-600" : "bg-green-600"} `} flex items-center justify-center`}>
                  {data.type == "link" ? (<a target='_blank' href={linkValue} className='flex gap-1 items-center justify-start'>
                                              <IoLinkOutline />{data?.tagTitle}
                                          </a>) : 
                      (<h3 className='text-sm'>{data?.tagTitle}</h3>)}

              </div>
       
        </div>)}
    </motion.div>
  )
}

export default Card