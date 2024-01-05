import React, { useState, useEffect } from 'react'
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
        []
    );

    const [showHiddenDiv, setShowHiddenDiv] = useState(false);

    const onSubmit = () => {
        const updatedCardDetails = [...cardDetails, details];
    setCardDetails(updatedCardDetails);
    localStorage.setItem('cardDetails', JSON.stringify(updatedCardDetails));
    setDetails({
      type: '',
      title: '',
      desc: '',
      tagColor: '',
      tagTitle: '',
      link: '',
    });
    }

    const onDelete = (indexToDelete) => {
        console.log("here"+indexToDelete);
        const updatedCards = cardDetails.filter((_, index) => index !== indexToDelete);
        setCardDetails(updatedCards);
      };

      useEffect(() => {
        const storedCards = localStorage.getItem('cardDetails');
        if (storedCards) {
          setCardDetails(JSON.parse(storedCards));
        }
      }, []);
      
      const toggleHiddenDiv = () => {
        setShowHiddenDiv(!showHiddenDiv);
      };

      const hideHiddenDiv = () => {
        setShowHiddenDiv(false);
      };

  return (
    <>

        <div className='w-[40%] rounded-lg mx-auto z-[30] fixed top-0 left-1/2 -translate-x-[50%] bg-slate-300 bg-opacity-60 flex flex-shrink transition-all justify-evenly  p-[1rem] flex-wrap'>
            
            <input className='w-[80%] rounded-md p-[0.5rem] outline-slate-600 outline-offset-4' 
                    placeholder='add files or todo'
                    value={details.title}
                    onChange={(e) => setDetails({...details, title: e.target.value})}
                    onClick={toggleHiddenDiv}
                    onBlur={hideHiddenDiv}
                    />
            <button onClick={onSubmit} className='w-[10%] rounded-md bg-white'>Add</button>
            
            <div className={`flex flex-wrap gap-2 transition-all ease-in-out overflow-hidden ${
                            showHiddenDiv ? 'h-auto max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                                }`}
                            style={{ transitionProperty: 'max-height, opacity', transitionDuration: '1s' }}
            >
                    <label>
                        Pick a Type:
                        <select name="type" 
                                defaultValue="note"
                                value={details.type}
                                onChange={(e) => setDetails({...details, type: e.target.value})}>
                          <option value="note">Note</option>
                          <option value="checkbox">Checkbox</option>
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

                    <label>
                        Pick a Tag color:
                        <select name="color" 
                                defaultValue="green"
                                value={details.tagColor}
                                onChange={(e) => setDetails({...details, tagColor: e.target.value})}>
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                          <option value="blue">Blue</option>
                        </select>
                    </label>

                    <input placeholder='add your link'
                           value={details.link}
                           onChange={(e) => setDetails({...details, link: e.target.value})} 
                    />
            </div>
            
            
        </div>

        <div ref={ref} className='z-[20] w-full h-screen flex gap-10 flex-wrap p-5 mt-[4rem]'>
            {cardDetails.map((item, index) => (
                <Card key={index} data={item} refrence={ref} onDelete={() => onDelete(index)}/>
            ))}
        </div>
    </>
   
  )
}

export default Foreground