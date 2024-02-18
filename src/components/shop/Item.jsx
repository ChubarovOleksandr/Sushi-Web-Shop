const Item = ({item}) => {

   return (
      <div className="item__block">
         <div className="item__header">
            {/* <div className="item__discount">Акцiя!</div> */}
            {/* <div className="item__save"><img src="" alt="save" className="save-image" /></div> */}
            <div className="item__image"><img src={item.imageUrl} alt="food-image" /></div>
            <div className="item__name">{item.name}</div>
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
               {/* <div className="item__change-value">
                  <div className="item__change-button">
                     <button className="item__plus">+</button>
                     <button className="item__minus">-</button>
                  </div>
                  <div className="item__count">1</div>
               </div> */}
               <button className="item__add-button">
                  <span>В корзину</span>
               </button>
            </div>
         </div>

      </div>
   );
}

export default Item;