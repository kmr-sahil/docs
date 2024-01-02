import React, { useState } from 'react'
import { useRef } from 'react';
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const [cardDetails, setCardDetails] = useState(
        [{
            desc: "nhsgjsdgfhsjs",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc: "nhsgjsdgfhsjs",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc: "nhsgjsdgfhsjs",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        }
        ]
    );

    const onSubmit = () => {
        setCardDetails([...cardDetails,{
            desc: "testing",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        }])
        console.log(cardDetails)
    }

  return (
    <>
        <div className='w-[40%] mx-auto z-[9] flex justify-evenly p-[1rem] flex-wrap'>
            <input className='w-[80%] rounded-md p-[0.5rem] outline-slate-600 outline-offset-4' placeholder='add files or todo'></input>
            <select id="cars" name="cars">
                    <option value="Checkbox">Volvo</option>
                    <option value="Note">Saab</option>
                    <option value="Link">Fiat</option>
            </select>
            <textarea name="message" rows="10">The cat was playing in the garden.</textarea>
            <input placeholder='tagTitle' />
            <button onClick={onSubmit} className='w-[10%] rounded-md bg-white'>Add</button>
        </div>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 mt-[4rem]'>
            {cardDetails.map((item, index) => (
                <Card data={item} refrence={ref}/>
            ))}
        </div>
    </>
   
  )
}

export default Foreground