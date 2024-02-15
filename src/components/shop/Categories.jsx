import React, { useEffect, useRef, useState } from 'react';


export const Categories = () => {

   const [activeIndex, setActiveIndex] = useState(-1);
   const [isOpen, setIsOpen] = useState(false);
   const categoriesRef = useRef();

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
   }, [isOpen])

   return (
      <div className="shop__categories" ref={categoriesRef} onClick={() => setIsOpen(!isOpen)}>
         <div className="shop__category--active">{activeIndex === -1 ? 'Типом' : categories[activeIndex]}</div>
         {isOpen &&
            <ul className="shop__categories-list">
               {categories.map((value, index) => <li onClick={() => setActiveIndex(index)} className='shop__categories-item' key={index}>{value}</li>)}
            </ul>
         }
      </div>
   );
}