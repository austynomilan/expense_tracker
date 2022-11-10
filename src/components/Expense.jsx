import React from 'react'
import './Expense.css'
import ExpenseDate from './ExpenseDate'

function Expense(props) {
   

  return (
     
      <div className='expenses_tab'>
        <section className='date_name'>
          <ExpenseDate date={props.date} />
          <h3>{props.title}</h3>
        </section>
        <section className='price'>
          <h3> ${props.price}</h3>
        </section>
      </div>

  );
}

export default Expense
