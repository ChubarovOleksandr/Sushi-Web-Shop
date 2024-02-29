import '../../scss/components/_Basket.scss';
import cart from '../../assets/img/cart.png';
import trash from '../../assets/img/trash.png';
import emptyBin from '../../assets/img/empty-bin.png';
import { useSelector } from 'react-redux';
import ItemList from '../item/ItemList';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';

const Basket = () => {

   const cartItems = useSelector(state => state.cart.items);
   const [totalPrice, setTotalPrice] = useState(0);
   const dispatch = useDispatch();

   useEffect(() => {
      let newTotalPrice = 0;
      cartItems.forEach(item => {
         const price = item.discount !== 0 ? item.discount : item.price;
         newTotalPrice += price;
      });
      setTotalPrice(newTotalPrice)
   }, [cartItems])

   const changeTotalPrice = (isIncrease, value) => {
      setTotalPrice((prevTotalPrice) => {
         const newTotalPrice = isIncrease ? prevTotalPrice + value : Math.max(prevTotalPrice - value, 0);
         return newTotalPrice;
      });
   };

   const removeAllItems = () => {
      cartItems.forEach(item => dispatch(removeFromCart(item)));
   }

   return (
      <div className="basket">
         <div className="basket__wrapper">
            {cartItems.length ?
               <div className="basket__content">
                  <div className="basket__header">
                     <div className="basket__header-left">
                        <img src={cart} alt="cart" />
                        <span>Ваш кошик</span>
                     </div>
                     <div className="basket__header-right">
                        <button className="basket__header-button" onClick={()=> removeAllItems()}>
                           <img src={trash} alt="trash" />
                           Очистити кошик
                        </button>
                     </div>
                  </div>
                  <div className="basket__body">
                     {cartItems.map(itemData => <ItemList key={itemData.id} item={itemData} changeTotalPrice={changeTotalPrice} />)}
                  </div>
                  <div className="basket__footer">
                     <div className="basket__total-price">
                        <span className="basket__total-price-value">{totalPrice}</span>
                     </div>
                     <div className="basket__confirm">
                        <button className="basket__confirm-button">Замовити</button>
                     </div>
                  </div>
               </div>
               :
               <div className="basket__empty">
                  <div className="basket__title"><span>На жаль</span>, зараз тут порожненько 😕</div>
                  <p>Найімовірніше ви ще не додали жодного товару. Щоб щось замовити, перейдіть в <NavLink to={'/shop'}>меню</NavLink></p>
                  <img src={emptyBin} alt="emptyBin" />
               </div>
            }
         </div>
      </div>
   );
}

export default Basket;