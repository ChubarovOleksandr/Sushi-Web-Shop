import React, { useEffect } from 'react';

import './Shop.scss';
import { ShopSlider } from './ShopSlider';
import arrowIcon from '../../assets/img/arrow-icon.png'
import ShopFilters from './ShopFilters';
import { ShopAPI } from '../../api/ShopAPI';


const Shop = () => {
   
   useEffect(() => {
      ShopAPI();
   }, [])

   return (
      <div className='shop'>
         <div className="shop__body">
            <ShopSlider />
            <button className='shop__cta'> {/* cta - call to action */}
               <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <ShopFilters />
         </div>
      </div>
   );
}

export default Shop;