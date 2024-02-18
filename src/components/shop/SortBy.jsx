import React, { useState, useEffect, useRef } from 'react';


export const SortBy = () => {

   const [activeIndex, setActiveIndex] = useState(-1);
   const [isOpen, setIsOpen] = useState(false);
   const sortRef = useRef();

   const sortByItems = ['За замовчуванням', 'Спочатку дешевше', 'Спочатку дорожче', 'Спочатку легшe', 'Спочатку важчe', 'За акцією'];

   useEffect(() => {
      let toggleIsOpened = event => {
         if (!event.composedPath().includes(sortRef.current)) {
            setIsOpen(false);
         }
      }

      document.addEventListener('click', toggleIsOpened);

      return () => {
         document.removeEventListener('click', toggleIsOpened);
      }
   }, [isOpen])

   return (
      <div className="shop__sortBy" ref={sortRef} onClick={()=> setIsOpen(!isOpen)}>
         <div className="shop__sortBy--active">{activeIndex === -1 ? 'Категорією' : sortByItems[activeIndex]}</div>
         {isOpen &&
            <ul className="shop__sortBy-list">
               {sortByItems.map((value, index) => <li onClick={() => setActiveIndex(index)} className='shop__sortBy-item' key={index}>{value}</li>)}
            </ul>
         }
      </div>
   );
}