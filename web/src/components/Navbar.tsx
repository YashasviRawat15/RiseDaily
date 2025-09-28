import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/targets">Targets</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/quote">Quote</Link>
      <Link to="/gitaverse">Gita Verse</Link>
      <Link to="/books">Book List</Link>
      <Link to="/movies">Watchlist</Link>
      <Link to="/expenses">Track Expenses</Link>
    </nav>
  );
};

export default Navbar;
