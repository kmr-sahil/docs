import React, { useState } from 'react'
import { useRef } from 'react';
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const [details, setDetails] = useState({
            type: "",
            title: "",
            desc: "",
            tagColor : "",
            tagTitle: "",
            link: "",
    })

    const [cardDetails, setCardDetails] = useState(
        [{
            type: "checkbox",
            title: "Head me",
            desc: "nhsgjsdgfhsjs",
            tagColor : "red",
            tagTitle: "hyij",
            link: "",
        },
        {
            type: "note",
            title: "Head me 2",
            desc: "nhsgjsdgfhsjs",
            tagColor : "green",
            tagTitle: "hyij",
            link: "",
        },
        {
            type: "link",
            title: "Head me",
            desc: "nhsgjsdgfhsjs",
            tagColor : "blue",
            tagTitle: "hyij",
            link: "https://tailwindcss.com/docs/browser-support#vendor-prefixes",
        },
        ]
    );

    const onSubmit = () => {
        console.log("haha" + details)
        setCardDetails([...cardDetails, details])
        console.log(cardDetails)
    }

  return (
    <>

        <div className='w-[40%] mx-auto z-[30] fixed top-0 left-1/2 -translate-x-[50%] bg-slate-300 flex justify-evenly gap-[1rem] p-[1rem] flex-wrap'>
            
            <input className='w-[80%] rounded-md p-[0.5rem] outline-slate-600 outline-offset-4' 
                    placeholder='add files or todo'
                    value={details.title}
                    onChange={(e) => setDetails({...details, title: e.target.value})}
                    />
            <button onClick={onSubmit} className='w-[10%] rounded-md bg-white'>Add</button>
            
            <label>
                Pick a Type:
                <select name="type" 
                        defaultValue="checkbox"
                        value={details.type}
                        onChange={(e) => setDetails({...details, type: e.target.value})}>
                  <option value="checkbox">Checkbox</option>
                  <option value="note">Note</option>
                  <option value="link">Link</option>
                </select>
            </label>
            <textarea name="message" 
                        rows="2" 
                        placeholder='your description...'
                        value={details.desc}
                        onChange={(e) => setDetails({...details, desc: e.target.value})} 
            />
                        

            <input placeholder='tagTitle'
                   value={details.tagTitle}
                   onChange={(e) => setDetails({...details, tagTitle: e.target.value})} 
            />

            <label htmlFor="color">Choose a tag Color: </label>
            <select id="color" 
                    name="color"
                    value={details.tagColor}
                    onChange={(e) => setDetails({...details, tagColor: e.target.value})}>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
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