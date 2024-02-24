import React, { useEffect, useRef } from 'react';
import '../../scss/components/_Shop.scss';
import Slider from './Slider';
import arrowIcon from '../../assets/img/arrow-icon.png'
import Filters from './Filters';
import { useDispatch } from 'react-redux';
import { getItems } from '../../redux/slices/itemSlice';
import Item from './Item';
import { useSelector } from 'react-redux';
import ItemsLoader from '../preloader/Preloader';

const Shop = () => {
   const dispatch = useDispatch();
   const filtersRef = useRef();
   const items = useSelector(state => state.items.items);
   const isLoadingRef = useRef(true);

   useEffect(() => {
      dispatch(getItems());
   }, [dispatch])

   useEffect(() => {
      isLoadingRef.current = false;
   }, [])

   const ctaHandler = () => {
      filtersRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <div className='shop'>
         <div className="shop__body">
            <Slider />
            <button onClick={ctaHandler} className='shop__cta'>
               <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="filters" ref={filtersRef}>
               <Filters />
            </div>
            <div className="items">
               <div className="items__body">
                  {isLoadingRef.current ?
                     <ItemsLoader />
                     :
                     items.map(itemData => <Item key={itemData.id} item={itemData} />)
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default Shop;
