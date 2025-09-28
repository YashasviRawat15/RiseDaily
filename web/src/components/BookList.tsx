import React, { useState, useEffect } from "react";
import AddBookForm from "./AddBookForm";
import BookItem from "./BookItem";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  status: "to-read" | "read";
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Load books from localStorage on mount
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Save books to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Add a new book
  const addBook = (book: { title: string; author: string; genre: string }) => {
    const newBook: Book = {
      id: Date.now(),
      ...book,
      status: "to-read",
    };
    setBooks([...books, newBook]);
  };

  // Toggle book status (to-read <-> read)
  const toggleRead = (id: number) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "to-read" ? "read" : "to-read" }
          : book
      )
    );
  };

  // Filter + Search
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.genre.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "author" &&
        book.author.toLowerCase().includes(search.toLowerCase())) ||
      (filter === "genre" &&
        book.genre.toLowerCase().includes(search.toLowerCase()));

    return matchesSearch && matchesFilter;
  });

  const toRead = filteredBooks.filter((book) => book.status === "to-read");
  const read = filteredBooks.filter((book) => book.status === "read");

  return (
    <div className="p-4 card">
      <h2 className="text-xl font-bold mb-4">📚 Book List</h2>

      {/* Add Book Form */}
      <AddBookForm addBook={addBook} />

      {/* Search + Filter */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>

      {/* To Read List */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">📖 To Read</h3>
        {toRead.length > 0 ? (
          toRead.map((book) => (
            <BookItem key={book.id} book={book} toggleRead={toggleRead} />
          ))
        ) : (
          <p className="text-gray-500">No books in To Read list.</p>
        )}
      </div>

      {/* Read List */}
      <div>
        <h3 className="text-lg font-semibold mb-2">✅ Read</h3>
        {read.length > 0 ? (
          read.map((book) => (
            <BookItem key={book.id} book={book} toggleRead={toggleRead} />
          ))
        ) : (
          <p className="text-gray-500">No books in Read list.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
