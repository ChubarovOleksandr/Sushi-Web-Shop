import { NavLink } from 'react-router-dom';
import './Intro.scss';

const Header = () => {
   return (
      <header className="header">
         <nav className="header__body">
            <div className="left">
               <img src="/img/logo.png" alt="logo" className="header__logo" />
               <NavLink to='basket' className="card__basket">
                  <span className="card__counter"></span>
                  <img src="/img/basket.png" alt="basket" />
                  Кошик
               </NavLink>
            </div>
            <div className="right">
               <NavLink to='/'>Головна</NavLink>
               <NavLink to='/shop'>Меню</NavLink>
               <NavLink to='/reviews'>Відгуки</NavLink>
               <NavLink to='/help'>Допомога</NavLink>
            </div>
         </nav>
      </header>
   );
}

export default Header;