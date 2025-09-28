import React from 'react';

interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => (
  <div className="card">
    <h2>Quote of the Day</h2>
    <p>{quote}</p>
  </div>
);

export default Quote;
