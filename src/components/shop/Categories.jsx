import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCategoryId } from '../../redux/slices/filterSlice';


export const Categories = () => {

   const [activeIndex, setActiveIndex] = useState(-1);
   const [isOpen, setIsOpen] = useState(false);
   const categoriesRef = useRef();
   const dispatch = useDispatch();
   const categories = ['Усi', 'Сети', 'Роли'];

   useEffect(() => {
      let toggleIsOpened = event => {
         if (!event.composedPath().includes(categoriesRef.current)) {
            setIsOpen(false);
         }
      }

      document.addEventListener('click', toggleIsOpened);

      return () => {
         document.removeEventListener('click', toggleIsOpened);
      }
   }, [isOpen]);

   const setCategoryId = (id) => {
      setActiveIndex(id);
      dispatch(changeCategoryId({ id }));
   }

   return (
      <div className="shop__categories" ref={categoriesRef} onClick={() => setIsOpen(!isOpen)}>
         <div className="shop__category--active">{activeIndex === -1 ? 'Типом' : categories[activeIndex]}</div>
         {isOpen &&
            <ul className="shop__categories-list">
               {categories.map((value, index) => <li onClick={() => setCategoryId(index)} className='shop__categories-item' key={index}>{value}</li>)}
            </ul>
         }
      </div>
   );
}