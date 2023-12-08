
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';
import './Expenseitem.css';
import { useState } from 'react';


function Expenseitem(props){

   const [title, setTitle]= useState(props.title);

   const clickHandler =()=>{
    setTitle("updated!");
   }
    
    return (
    

    <Card className='expense-item'>
       
       <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
         </div>
         <button onClick={clickHandler}>clicked</button>
        </Card>
    
    );
}

export default Expenseitem;