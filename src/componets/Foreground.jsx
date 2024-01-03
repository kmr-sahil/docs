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

        <div className='w-[40%] mx-auto z-[30] fixed top-0 left-1/2 -translate-x-[50%]  flex justify-evenly gap-[1rem] p-[1rem] flex-wrap'>
            
            <input className='w-[80%] rounded-md p-[0.5rem] outline-slate-600 outline-offset-4' placeholder='add files or todo'></input>
            <button onClick={onSubmit} className='w-[10%] rounded-md bg-white'>Add</button>
            <label for="type">Choose a type:</label>
            <select id="type" name="type">
                    <option value="Checkbox">Checkbox</option>
                    <option value="Note">Note</option>
                    <option value="Link">Link</option>
            </select>
            <textarea name="message" rows="2">The cat was playing in the garden.</textarea>
            <input placeholder='tagTitle' />
            <select id="cars" name="cars">
                    <option value="Checkbox">Checkbox</option>
                    <option value="Note">Note</option>
                    <option value="Link">Link</option>
            </select>
            
        </div>

        <div ref={ref} className='z-[20] w-full h-full flex gap-10 flex-wrap p-5 mt-[4rem]'>
            {cardDetails.map((item, index) => (
                <Card data={item} refrence={ref}/>
            ))}
        </div>
    </>
   
  )
}

export default Foreground