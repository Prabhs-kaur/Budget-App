
import { useState } from 'react';
import Expenseitem from './Expenseitem.js';
import Card from '../UI/Card.js';
import ExpenseFilter from './ExpenseFilter.js';
import './Expenses.css';


function Expenses(props){

  const [filteredYear, setFilteredYear]= useState('');

  const yearChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
<div>
        <Card className='expenses'>

      <ExpenseFilter 
      selected={filteredYear}
      onYearChange={yearChangeHandler}/>
      
      {filteredExpenses.map((expense) => (
      <Expenseitem 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
      ))};
     
    </Card>
    </div>
    );
}

export default Expenses;