import { useState, useEffect } from 'react';
import heartEmpty from '../../assets/img/heart-empty.png';
import heartFill from '../../assets/img/heart-fill.png';
import { saveInFavorite, removeFromFavorite } from '../../redux/slices/favoriteSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import checkmark from '../../assets/img/checkmark.png';

const Item = ({ item, isSaved }) => {

   const itemName = useRef();
   const imageRef = useRef();
   const addBtnImage = useRef();
   const addBtnText = useRef();
   const componentsRef = useRef();
   const [saved, setSaved] = useState(isSaved != true ? false : true);
   const [isHover, setIsHover] = useState(false);
   const [imageHeight, setImageHeight] = useState(0);
   const [inCart, setInCart] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      setImageHeight(imageRef.current.clientHeight);
   }, [])

   useEffect(() => {
      if (isHover) {
         setImageHeight(imageRef.current.clientHeight);
         itemName.current.classList.add('hiding');
         componentsRef.current.classList.remove('hide');
      } else if (itemName.current != undefined) {
         itemName.current.classList.remove('hiding');
         componentsRef.current.classList.add('hide');
      }
   }, [isHover]);

   const addToFavorite = () => {
      if (saved) {
         dispatch(removeFromFavorite(item))
      } else {
         dispatch(saveInFavorite(item));
      }
      setSaved(!saved);
   }

   /* const changeInCartStatus = () => {
      if(!inCart){
         addBtnText.current.classList.add('hide');
      } else {
         addBtnImage.current.classList.add('hide');
      }
      setTimeout(() => {
         // inCart ? addBtnText.current.classList.remove('hide') : addBtnImage.current.classList.remove('hide');
         setInCart(!inCart);
      }, 700);
   } */

   return (
      <div className="item__block" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
         <div className="item__header">
            <button className="item__save" onClick={addToFavorite}>
               {saved ?
                  <img src={heartFill} alt="save" className="save-image" />
                  :
                  <img src={heartEmpty} alt="save" className="save-image" />
               }
            </button>
            <div className="item__image">
               <img ref={imageRef} src={item.imageUrl} alt="food-image" />
            </div>
            <div className="item__name" ref={itemName}>{item.name}</div>
            <div className="item__components hide" ref={componentsRef} style={{ height: `${imageHeight + 1}px` }}><p>{item.components}</p></div>
         </div>
         <div className="item__main">
            <div className="item__price">
               {item.discount != 0 && (
                  <div className="item__price--old">{item.price} ₴</div>
               )}
               <div className="item__price-block">
                  <div className="item__price--new">{item.discount ? item.discount : item.price} ₴</div>
                  <div className="item__weight">{item.weight} г</div>
               </div>
            </div>
            <div className="item__footer">
               <button /* onClick={changeInCartStatus} */ className="item__add-button">
                  {/* {inCart ?
                     <span ref={addBtnImage} className='item__add-button-image'><img src={checkmark} alt="checkmark" /></span>
                     :
                     <span ref={addBtnText} className='item__add-button-text'>В корзину</span>
                  } */}
                  <span ref={addBtnText} className='item__add-button-text'>В корзину</span>
               </button>
            </div>
         </div>

      </div>
   );
}

export default Item;