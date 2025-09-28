import React from "react";

interface Props {
  username: string;
}

const Home: React.FC<Props> = ({ username }) => {
  return (
    <div className="">
      <h2 className="">Welcome back, {username}! 👋</h2>
      <p className="">
        Track your progress, manage your books, watchlist, expenses, and more.
      </p>
    </div>
  );
};

export default Home;
