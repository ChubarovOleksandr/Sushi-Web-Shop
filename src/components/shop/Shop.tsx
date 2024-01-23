import './Shop.scss';
import { ShopSlider } from './ShopSlider';
import arrowIcon from '../../assets/img/arrow-icon.png'

const Shop = () => {
   return (
      <div className='shop'>
         <div className="shop__body">
            <ShopSlider />
            <button className='shop__cta'> {/* cta - call to action */} 
               <img src={arrowIcon} alt="arrow-icon" />
            </button>
         </div>
      </div>
   );
}

export default Shop;