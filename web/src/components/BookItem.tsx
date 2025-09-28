import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  status: "to-read" | "read";
}

interface Props {
  book: Book;
  toggleRead: (id: number) => void;
}

const BookItem: React.FC<Props> = ({ book, toggleRead }) => {
  return (
    <div className="flex justify-between items-center border p-2 my-1 rounded">
      <span>
        <strong>{book.title}</strong> – {book.author} ({book.genre})
      </span>
      <button
        onClick={() => toggleRead(book.id)}
        className={`px-2 py-1 rounded text-white ${
          book.status === "to-read" ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {book.status === "to-read" ? "Mark as Read ✅" : "Move to To-Read 📚"}
      </button>
    </div>
  );
};

export default BookItem;
