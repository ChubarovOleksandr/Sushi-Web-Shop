import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeSortBy } from '../../store/slices/filterSlice';


export const SortBy = () => {

   const [activeIndex, setActiveIndex] = useState(-1);
   const [isOpen, setIsOpen] = useState(false);
   const sortRef = useRef();
   const dispatch = useDispatch();

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

   const setSortBy = (value) => {
      setActiveIndex(value);
      dispatch(changeSortBy(sortByItems[value]));
   }

   return (
      <div className="shop__sortBy" ref={sortRef} onClick={()=> setIsOpen(!isOpen)}>
         <div className="shop__sortBy--active">{activeIndex === -1 ? 'Категорією' : sortByItems[activeIndex]}</div>
         {isOpen &&
            <ul className="shop__sortBy-list">
               {sortByItems.map((value, index) => <li onClick={() => setSortBy(index)} className='shop__sortBy-item' key={index}>{value}</li>)}
            </ul>
         }
      </div>
   );
}