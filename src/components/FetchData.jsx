import { useState, useEffect } from "react"
import classes from '../modules/FetchData.module.scss'
import dice from '../assets/images/icon-dice.svg'
import lines from '../assets/images/pattern-divider-desktop.svg'


const Advice = () => {

   const [advice, setAdvice] = useState('Click button to get new advice')
   const [adviceNumber, setAdviceNuber] = useState('144')



   const FetchNewAdvice =  () => {
       fetch('https://api.adviceslip.com/advice')
       .then(response => response .json())
       .then(data => {
         setAdvice(data.slip.advice);
         setAdviceNuber(data.slip.id);
       })
        .catch(error => {
           console.error('Error fetchin data', error);
        });
   };

   useEffect(() =>{
       FetchNewAdvice;
   }, []);  




return (
    <div className={classes['Adivce-container']}>
         <h1>Advice #{adviceNumber}</h1>
         <p>"{advice}"</p>
         <img src={lines} alt="" />
               <button onClick={FetchNewAdvice}>
                  <img src={dice} alt="" />
               </button>
    </div>
)


};
export default Advice;