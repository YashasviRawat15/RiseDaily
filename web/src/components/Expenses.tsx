import React from 'react';

interface ExpensesProps {
  amount: number;
}

const Expenses: React.FC<ExpensesProps> = ({ amount }) => (
  <div className="card">
    <h2>Monthly Expenses</h2>
    <p>₹{amount}</p>
  </div>
);

export default Expenses;
