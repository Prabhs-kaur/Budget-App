
import React from "react";
import { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";
import NewExpenses from "./Component/NewExpenses/NewExpenses";

const DUMMY_EXPENSES=[{
  id: 'e1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14),

},
{
id: 'e2',
  title: 'New TV',
  amount: 799.49,
  date: new Date(2021, 2, 12),

},
{
id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
id: 'e4',
  title: 'New Desk (Woden)',
  amount: 450,
  date: new Date(2021, 5, 12)
},];


// const addExpenseHandler =expense=>{
// console.log(App.js);
// console.log(expense);
// };

const App = () => {
  
  const [expenses, setExpense]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    setExpense((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };



  return (
    <div>
      <NewExpenses onAddExpenseData={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
  }

export default App;
