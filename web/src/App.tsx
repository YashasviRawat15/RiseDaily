import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import GitaVerse from "./components/GitaVerse";
import BookList from "./components/BookList";
import MovieList from "./components/MovieList";
import Expenses from "./components/Expenses";
import MonthlyTarget from "./components/MonthlyTarget";
import WeeklyTarget from "./components/WeeklyTarget";

import "./App.css";

const App: React.FC = () => {
  const username = "Yashasvi";

  // Sample data
  const todos = ["Finish React project", "Read 20 pages of a book", "Exercise"];
  const quote = "The only way to do great work is to love what you do.";
  const movies = ["Inception", "Interstellar", "The Matrix"];
  const monthlyExpenses = 45000;
  const monthlyTarget = 70;
  const weeklyTarget = 50;

  return (
    <Router>

      <Navbar />

      <div style={{ fontFamily: "Poppins, sans-serif", background: "#F2F2F2", minHeight: "100vh" }}>
        <h1 style={{ color: "#4A90E2", padding: "20px" }}>Hello, {username}!</h1>

        

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/todos" element={<TodoList todos={todos} />} />
            <Route path="/quote" element={<Quote quote={quote} />} />
            <Route path="/gitaverse" element={<GitaVerse />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/movies" element={<MovieList movies={movies} />} />
            <Route path="/expenses" element={<Expenses amount={monthlyExpenses} />} />
            <Route
              path="/targets"
              element={
                <div>
                  <MonthlyTarget value={monthlyTarget} />
                  <WeeklyTarget value={weeklyTarget} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
