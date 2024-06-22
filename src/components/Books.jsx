import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (book) => {
    setBooks(books.map(b => (b.id === book.id ? book : b)));
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  const navigateToBookForm = () => {
    navigate('/books/new');
  };

  return (
    <div className="books-page">
      <h2>Books</h2>
      <Button onClick={navigateToBookForm}>Add Book</Button>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <Button onClick={() => navigate(`/books/edit/${book.id}`, { state: { book } })}>Edit</Button>
                  <Button onClick={() => handleDeleteBook(book.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Books;
