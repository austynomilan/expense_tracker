import React from 'react'
import './Expense.css'

function Expense() {
  return (
      <div className='expenses_tab'>
      <section className='date_name'>
        <h3>march 2</h3>
        <h3> Car Insurance</h3>
    </section>
      <section className='price'>
        <h3> $297.67</h3>
      </section>
    </div>
  );
}

export default Expense
