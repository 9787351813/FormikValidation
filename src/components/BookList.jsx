import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useBooks } from '../components/BookContext';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const { books } = useBooks();
  const navigate = useNavigate();

  const navigateToBookForm = () => {
    navigate('/books/new');
  };

  return (
    <div>
      <h2>Book List</h2>
      <Button onClick={navigateToBookForm} style={{ marginBottom: '10px' }}>
        Add Book
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Publication Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
