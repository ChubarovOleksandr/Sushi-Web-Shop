import React, { useState }  from 'react';


export const Categories = () => {

   const [activeIndex, setActiveIndex] = useState(0);

   const categories = ['Усi', 'Сети', 'Роли'];
   console.log(activeIndex);

   return (
      <div className="shop__categories">
         <ul className="shop__categoires-list">
            {categories.map((value, index) => <li onClick={()=>setActiveIndex(index)} className='shop__categories-item' key={index}>{value}</li>)}
         </ul>
      </div>
   );
}