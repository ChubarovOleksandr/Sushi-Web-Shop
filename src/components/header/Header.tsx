import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
   
   return (
      <header className="header">
         <nav className="header__body">
            <div className="left">
               <img src="/img/logo.png" alt="logo" className="header__logo" />
               <NavLink to='basket' className="card__basket">
                  <span className="card__counter"></span>
                  <img src="/img/basket.png" className='card__basket-icon' alt="basket" />
                  Кошик
               </NavLink>
            </div>
            <div className="right">
               <NavLink to='/' className='main'>Головна</NavLink>
               <NavLink to='/shop'>Меню</NavLink>
               <NavLink to='/info'>Вибране</NavLink>
               <NavLink to='/about'>Інформація</NavLink>
            </div>
         </nav>
      </header>
   );
}

export default Header;