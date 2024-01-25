import './Intro.scss';
import { NavLink } from 'react-router-dom';
import { IntroSlider } from './IntroSlider';
import Header from '../layout/Header';

export const Intro: React.FC = () => {

   return (
      <div className='home'>
         <Header />
         <main className='main'>
            <div className="background"></div>
            <div className="main__body">
               <span className="pretitle">Переконайся</span>
               <div className="main__title-line">
                  <span className="title">ДУУУУУУУУЖЕ СМАЧНО</span>
                  <NavLink to='/shop' className="main__button">скуштувати</NavLink>
               </div>
               <span className="posttitle">забираєш сам?<br />- забери знижку</span>
            </div>
         </main>
         <IntroSlider />
      </div>
   )
}