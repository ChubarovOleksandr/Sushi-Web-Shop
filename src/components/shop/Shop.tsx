import Header from '../header/Header';
import { ShopSlider } from './ShopPromSlider';


const Shop = () => {
   return (
      <div className='shop'>
         <Header />
         <div className="shop__body">
            <ShopSlider />
         </div>
      </div>
   );
}

export default Shop;