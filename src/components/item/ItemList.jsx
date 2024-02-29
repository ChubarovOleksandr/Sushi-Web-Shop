import '../../scss/components/_ItemList.scss';
import remove from '../../assets/img/close.png';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';

const ItemList = ({ item, changeTotalPrice }) => {

   const price = item.discount != 0 ? item.discount : item.price
   const minusBtnRef = useRef();
   const dispatch = useDispatch();
   const [totalPrice, setTotalPrice] = useState(price)
   let [counter, setCounter] = useState(1);
   

   const changePrice = (number) => {

      if (number > totalPrice) {
         setCounter(++counter);
         changeTotalPrice(true, price)
      } else if(counter != 1){
         setCounter(--counter);
         changeTotalPrice(false, price)
      }
      
      if (number == price || number < price) {
         minusBtnRef.current.classList.add('disabled');
         setTotalPrice(price);
      } else {
         minusBtnRef.current.classList.remove('disabled');
         setTotalPrice(number);
      }
   }

   return (
      <div className="item">
         <div className="item__topic">
            <img src={item.imageUrl} alt="itemImage" />
            <span className="item__title">{item.name}</span>
         </div>
         <div className="item__counter">
            <button ref={minusBtnRef} className="item__counter-button disabled minus" onClick={() => changePrice(totalPrice - price)}>-</button>
            <span className="item__counter-value">{counter}</span>
            <button className="item__counter-button plus" onClick={() => changePrice(totalPrice + price)}>+</button>
         </div>
         <div className="item__price">
            <span className="item__price-value">{totalPrice}</span>
         </div>
         <div className="item__remove">
            <button className="item__remove-button" onClick={() => dispatch(removeFromCart(item))}>
               <img src={remove} alt="delete" />
            </button>
         </div>
      </div>

   );
}

export default ItemList;