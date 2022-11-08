import React from 'react'
import './Expense.css'

function Expense() {
    const expenseDate = new Date();
    const expenseTitle = ' Car Insurance'
    const expenseAmount = ' 274.67'
  return (
      <div className='expenses_tab'>
      <section className='date_name'>
              <h3>{ expenseDate.toISOString() }</h3>
              <h3>{ expenseTitle }</h3>
    </section>
      <section className='price'>
              <h3> ${ expenseAmount }</h3>
      </section>
    </div>
  );
}

export default Expense
