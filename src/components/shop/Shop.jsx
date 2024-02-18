import React, { useEffect, useRef } from 'react';
import './Shop.scss';
import Slider from './Slider';
import arrowIcon from '../../assets/img/arrow-icon.png'
import Filters from './Filters';
import { useDispatch } from 'react-redux';
import { getItems } from '../../store/slices/itemSlice';
import Item from './Item';
import { useSelector } from 'react-redux';

const Shop = () => {
   const dispatch = useDispatch();
   const filtersRef = useRef();
   const items = useSelector(state => state.items.items);

   useEffect(() => {
      dispatch(getItems());
   }, [dispatch])

   const ctaHandler = () => { /* cta - call to action */
      filtersRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <div className='shop'>
         <div className="shop__body">
            {/* <Slider />
            <button onClick={ctaHandler} className='shop__cta'> {/* cta - call to action */}
               <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="filters" ref={filtersRef}>
               <Filters />
            </div> */}
            <div className="items">
               <div className="items__body">
                  {items.map(itemData => <Item key={itemData.id} item={itemData} />)}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Shop;