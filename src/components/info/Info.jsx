import '../../scss/components/_Info.scss';
import AccordionItem from './AccordionItem';

const Info = () => {



   return (
      <div className="info">
         <div className="info__title">
            <span>%</span>
            <h1>Інформацiя та бонуси</h1>
         </div>
         <div className="accordion">
            <AccordionItem>
               <p className="accordion__text">Забери суші у Кропивницькому з самовивозом з нашої точки і отримай знижку 10%.
                  Точка самовивозу знаходиться за адересою вул. Полтавська 28
               </p>
               <p className="accordion__text">Вигідна пропозиція для тих, хто живе або працює поруч з нами! Тож швидше біжи забирати знижку)</p>
               <p className="accordion__text accordion__text--alert">P.S Знижка не підсумовується з іншими акційними пропозиціями</p>
            </AccordionItem>
            
         </div>
      </div>
   );
}

export default Info;