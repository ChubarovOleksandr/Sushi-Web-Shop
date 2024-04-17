import { useRef, useState } from "react";
import '../../scss/components/_Info.scss';

const AccordionItem = ({children}) => {

   const [isOpen, setIsOpen] = useState(false);
   const contentRef = useRef();
   const itemRef = useRef();

   const onClick = () => {
      setIsOpen(!isOpen);
      contentRef.current.classList.toggle('active');
      itemRef.current.classList.toggle('active');
      if(contentRef.current.style.maxHeight) {
         contentRef.current.style.maxHeight = null;
      } else {
         contentRef.current.style.maxHeight = 200 + 'px';
      }
   }

   return ( 
      <div className="accordion__item" ref={itemRef}>
         <button className="accordion__button" onClick={onClick}>Забери замовлення сам і отримай знижку у 10%!</button>
         <div className="accordion__content" ref={contentRef}>
            {isOpen && children}
         </div>
      </div>
    );
}
 
export default AccordionItem;