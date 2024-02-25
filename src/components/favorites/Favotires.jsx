import Item from '../shop/Item';
import '../../scss/components/_Favorites.scss';
import '../../scss/components/_Items.scss';
import heartFill from '../../assets/img/heart-fill.png';
import { useSelector } from 'react-redux';


const Favorites = () => {

   const items = useSelector(state => state.favorite.items);

   return (
      <div className="favorites">
         <div className="favorites__body">
            <div className="favorites__title">
               <div className="favorites__image-block">
                  <img src={heartFill} alt="heart" />
               </div>
               Перегляньте, що ви обирали
            </div>
            <div className="items">
               <div className="items__body">
                  {items.map(itemData => <Item key={itemData.id} item={itemData} isSaved={true}/>)}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Favorites;