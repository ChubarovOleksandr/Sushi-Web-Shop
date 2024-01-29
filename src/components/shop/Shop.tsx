import React, { useEffect } from 'react';
import { ShopSlider } from './ShopSlider';
import arrowIcon from '../../assets/img/arrow-icon.png'
import ShopFilters from './ShopFilters';
import { useDispatch } from 'react-redux';
import { getItems } from '../../store/slices/itemSlice';
import './Shop.scss';


const Shop = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getItems());
   }, [dispatch])

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