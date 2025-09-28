import React from 'react';

interface WeeklyTargetProps {
  value: number;
}

const WeeklyTarget: React.FC<WeeklyTargetProps> = ({ value }) => (
  <div className="card">
    <h2>Weekly Target</h2>
    <progress value={value} max={100}>{value}%</progress>
  </div>
);

export default WeeklyTarget;
