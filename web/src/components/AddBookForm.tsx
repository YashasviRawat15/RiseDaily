import React, { useState } from "react";

interface Props {
  addBook: (book: { title: string; author: string; genre: string }) => void;
}

const AddBookForm: React.FC<Props> = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author || !genre) return;
    addBook({ title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-1"
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="border p-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
        Add
      </button>
    </form>
  );
};

export default AddBookForm;
