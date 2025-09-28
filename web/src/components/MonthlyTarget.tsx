import React from 'react';

interface MonthlyTargetProps {
  value: number;
}

const MonthlyTarget: React.FC<MonthlyTargetProps> = ({ value }) => (
  <div className="card">
    <h2>Monthly Target</h2>
    <progress value={value} max={100}>{value}%</progress>
  </div>
);

export default MonthlyTarget;
