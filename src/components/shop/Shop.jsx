import React, { useEffect } from 'react';
import './Shop.scss';
import Slider from './Slider';
import arrowIcon from '../../assets/img/arrow-icon.png'
import Filters from './Filters';
import { useDispatch } from 'react-redux';
import { getItems } from '../../store/slices/itemSlice';

const Shop = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(getItems());
   }, [dispatch])
      
   return (
      <div className='shop'>
         <div className="shop__body">
            <Slider />
            <button className='shop__cta'> {/* cta - call to action */}
               <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <Filters />
         </div>
      </div>
   );
}

export default Shop;