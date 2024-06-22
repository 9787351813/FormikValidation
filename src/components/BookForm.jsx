import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useBooks } from '../components/BookContext';

const BookForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addBook, updateBook } = useBooks();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.book) {
      const { book } = location.state;
      setTitle(book.title);
      setAuthor(book.author);
      setIsbn(book.isbn);
      setPublicationDate(book.publicationDate);
    }
  }, [location.state]);

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!author) newErrors.author = 'Author is required';
    if (!isbn) newErrors.isbn = 'ISBN is required';
    if (!publicationDate) newErrors.publicationDate = 'Publication Date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newBook = { title, author, isbn, publicationDate, id: id || Date.now() };
    if (id) {
      updateBook(newBook);
    } else {
      addBook(newBook);
    }
    navigate('/books');
  };

  return (
    <div className="book-form">
      <h2>{id ? 'Edit Book' : 'Add Book'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            isInvalid={!!errors.author}
          />
          <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formIsbn">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            isInvalid={!!errors.isbn}
          />
          <Form.Control.Feedback type="invalid">{errors.isbn}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPublicationDate">
          <Form.Label>Publication Date</Form.Label>
          <Form.Control
            type="date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            isInvalid={!!errors.publicationDate}
          />
          <Form.Control.Feedback type="invalid">{errors.publicationDate}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">{id ? 'Update Book' : 'Add Book'}</Button>
      </Form>
    </div>
  );
};

export default BookForm;
