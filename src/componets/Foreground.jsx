import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import Card from './Card'

function Foreground() {

    const ref = useRef(null);
    const hiddenDivRef = useRef(null);

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
        setShowHiddenDiv(false);
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
          const updatedCards = cardDetails.filter((_, index) => index !== indexToDelete);
          setCardDetails(updatedCards);
          localStorage.setItem('cardDetails', JSON.stringify(updatedCards));
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

      const hideHiddenDiv = (e) => {

        if (e.relatedTarget && hiddenDivRef.current && hiddenDivRef.current.contains(e.relatedTarget)) {
          return;
        }
        setShowHiddenDiv(false);

      };

  return (
    <>

        <div className='w-[80%] tablet:w-[70%] tablet-lg:w-[50%] laptop:w-[40%] rounded-lg text-[1rem] mx-auto z-[30] fixed top-6 left-1/2 -translate-x-[50%] backdrop-blur-sm bg-slate-300 bg-opacity-60 flex justify-between items-center gap-[0.5rem] transition-all p-[0.5rem] flex-wrap'>
            
            
            <input className='w-[80%] rounded-md p-[0.5rem] outline-slate-600 outline-2'
                    placeholder='add files or todo'
                    value={details.title}
                    onChange={(e) => setDetails({...details, title: e.target.value})}
                    onClick={toggleHiddenDiv}
                    onBlur={hideHiddenDiv}
                    />
            <button onClick={onSubmit} className='w-[15%] h-[40px] flex-grow rounded-md bg-white'>Add</button>
            
            <div className={`flex flex-wrap gap-[0.5rem] transition-all ease-in-out overflow-hidden ${
                            showHiddenDiv ? 'h-auto max-h-[500px] opacity-100' : 'max-h-[0] opacity-0 pointer-events-none'
                                }`}
                            style={{ transitionProperty: 'max-height, opacity', transitionDuration: '0.8s' }}
                            ref={hiddenDivRef}
            >
                   
                    <label className='bg-slate-500 p-[0.5rem] w-[100%] flex rounded-md'>
                        Pick the Card Type :  
                        <select 
                                className='flex-grow rounded-sm'
                                name="type" 
                                defaultValue="note"
                                value={details.type}
                                onChange={(e) => setDetails({...details, type: e.target.value})}>
                          <option value="note">Note</option>
                          <option value="checkbox">Checkbox</option>
                          <option value="link">Link</option>
                        </select>
                    </label>

                    <textarea   className='w-[100%] rounded-md p-[0.25rem]'
                                name="message" 
                                rows="2" 
                                placeholder='your description...'
                                value={details.desc}
                                onChange={(e) => setDetails({...details, desc: e.target.value})} 
                    />


                    <input className='w-[100%] rounded-md p-[0.25rem]'
                           placeholder='tagTitle'
                           value={details.tagTitle}
                           onChange={(e) => setDetails({...details, tagTitle: e.target.value})} 
                    />

                    <label className='bg-slate-500 p-[0.5rem] w-[100%] flex rounded-md'>
                        Pick Tag color for Card :
                        <select className='flex-grow rounded-sm'
                                name="color" 
                                defaultValue="green"
                                value={details.tagColor}
                                onChange={(e) => setDetails({...details, tagColor: e.target.value})}>
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                          <option value="blue">Blue</option>
                        </select>
                    </label>

                    <input className='w-[100%] rounded-md p-[0.25rem]'
                           placeholder='add your link'
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