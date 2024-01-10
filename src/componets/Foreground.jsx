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
            tagTitle: "",
            link: '',
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
          tagTitle: '',
          link: '',
        });
    }

    const onDelete = (indexToDelete) => {
          const updatedCards = cardDetails.filter((_, index) => index !== indexToDelete);
          setCardDetails(updatedCards);
          localStorage.setItem('cardDetails', JSON.stringify(updatedCards));

          // Get the title of the card being deleted
          const deletedCardTitle = "done_"+cardDetails[indexToDelete].title;

          // Remove the 'done' state associated with the deleted card from local storage
          console.log(deletedCardTitle)
          localStorage.removeItem(deletedCardTitle);
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

        <div className='w-[80%] tablet:w-[70%] tablet-lg:w-[50%] laptop:w-[40%] rounded-lg text-[1rem] mx-auto z-[30] fixed top-6 left-1/2 -translate-x-[50%] backdrop-blur-[40px] bg-black bg-opacity-[0.1] flex justify-between items-center gap-[0.5rem] tablet:gap-[1rem] transition-all p-[0.5rem] tablet:p-[1rem] flex-wrap text-white'>
            
            <input className='w-[80%] rounded-md p-[0.5rem] tablet:p-[0.75rem] bg-white bg-opacity-[0.2] placeholder:text-[#ffffff9c]'
                    placeholder='add Title'
                    value={details.title}
                    onChange={(e) => setDetails({...details, title: e.target.value})}
                    onClick={toggleHiddenDiv}
                    onBlur={hideHiddenDiv}
                    />
            <button onClick={onSubmit} className='w-[15%] p-[0.5rem] tablet:p-[0.75rem] flex-grow rounded-md bg-white bg-opacity-[0.2]'>Add</button>
            
            <div className={`flex flex-wrap gap-[0.5rem] tablet:gap-[1rem] transition-all ease-in-out overflow-hidden ${
                            showHiddenDiv ? 'h-auto max-h-[500px] opacity-100' : 'max-h-[0] opacity-0 pointer-events-none'
                                }`}
                            style={{ transitionProperty: 'max-height, opacity', transitionDuration: '0.8s' }}
                            ref={hiddenDivRef}
            >
                   
                    <label className='bg-white bg-opacity-[0.2] px-[0.5rem] h-[40px] tablet:h-[48px] w-[100%] flex items-center rounded-md gap-2 text-[#ffffff9c]'>
                        Pick a Card Type :  
                        <select 
                                className='min-w-[60px] flex-grow h-[64%] bg-white bg-opacity-[0.2] rounded-md px-[0.5rem] border-r-8 border-r-transparent'
                                name="type" 
                                defaultValue="note"
                                value={details.type}
                                onChange={(e) => setDetails({...details, type: e.target.value})}>
                          <option className="text-black" value="note">Note</option>
                          <option className="text-black" value="checkbox">Checkbox</option>
                          <option className="text-black" value="link">Link</option>
                        </select>
                    </label>

                    <textarea   className='w-[100%] rounded-md p-[0.25rem] tablet:p-[0.5rem] bg-white bg-opacity-[0.2] placeholder:text-[#ffffff9c]'
                                name="message" 
                                rows="2" 
                                placeholder='your description...'
                                value={details.desc}
                                onChange={(e) => setDetails({...details, desc: e.target.value})} 
                    />


                    <input className='w-[100%] rounded-md p-[0.25rem] tablet:p-[0.5rem] bg-white bg-opacity-[0.2] placeholder:text-[#ffffff9c]'
                           placeholder='add tag line or deadline or anything...'
                           value={details.tagTitle}
                           onChange={(e) => setDetails({...details, tagTitle: e.target.value})} 
                    />


                    <input className='w-[100%] rounded-md p-[0.25rem] tablet:p-[0.5rem] bg-white bg-opacity-[0.2] placeholder:text-[#ffffff9c]'
                           placeholder='add the link - https://..'
                           value={details.link}
                           onChange={(e) => setDetails({...details, link: e.target.value})} 
                    />
            </div>
            
            
        </div>

        <div ref={ref} className='z-[20] w-full h-screen flex gap-2 flex-wrap pt-20 p-5'>
            {cardDetails.map((item, index) => (
                <Card key={index} data={item} refrence={ref} onDelete={() => onDelete(index)}/>
            ))}
        </div>
    </>
   
  )
}

export default Foreground