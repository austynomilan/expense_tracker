import React from 'react'
import Expense from './Expense';
import './ExpenseItem.css'


function ExpenseItem(props) {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <div className='expense_container'>
        <Expense
          title={props.items[0].title}
          price={props.items[0].amount}
          date={props.items[0].date}
        />
        <Expense
          title={props.items[1].title}
          price={props.items[1].amount}
          date={props.items[1].date}
        />
        <Expense
          title={props.items[2].title}
          price={props.items[2].amount}
          date={props.items[2].date}
        />
        <Expense
          title={props.items[3].title}
          price={props.items[3].amount}
          date={props.items[3].date}
        />
      </div>
    </div>
  );
}

export default ExpenseItem

