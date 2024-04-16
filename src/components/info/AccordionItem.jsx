import { useState } from "react";

const AccordionItem = ({children}) => {

   const [isOpen, setIsOpen] = useState(false);

   const onClick = () => {
      setIsOpen(!isOpen);
   }

   return ( 
      <div className="accordion__item">
         <button className="accordion__button" onClick={onClick}>Забери замовлення сам і отримай знижку у 10%!</button>
         <div className="accordion__content">
            {isOpen && children}
         </div>
      </div>
    );
}
 
export default AccordionItem;