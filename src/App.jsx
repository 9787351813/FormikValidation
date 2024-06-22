// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BookProvider } from './components/BookContext';
import { AuthorProvider } from './components/AuthorContext';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Authors from './components/Authors';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="d-flex">
          <Sidebar />
          <div className="content p-3" style={{ width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/new" element={<BookForm />} />
              <Route path="/books/edit/:id" element={<BookForm />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/authors/new" element={<AuthorForm />} />
              <Route path="/authors/edit/:id" element={<AuthorForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
const books = [
  {
    title: 'Magazine Books',
    description: 'A collection of magazine books that covers a wide range of topics from fashion to science.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.N0FLmcqMl1_8Upx9Mz4KwQHaFa&pid=Api&P=0&h=180',
  },
  {
    title: 'Story Books',
    description: 'A variety of story books that capture the imagination and inspire readers of all ages.',
    image: 'https://tse3.explicit.bing.net/th?id=OIP.gQ1r1xEj7wLWWb0b8sQKQQHaEr&pid=Api&P=0&h=180',
  },
  {
    title: 'Bhagavad Gita',
    description: 'An ancient Indian text that is a part of the epic Mahabharata and spiritual guidance.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.yDnf-zZNGGeEdIkTAMC5sAHaLH&pid=Api&P=0&h=180',
  },
  {
    title: 'Mahabharatham',
    description: 'One of the two major Sanskrit epics of ancient India and legends of the Kuru dynasty.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.oc7xQ_7jpT_b0tsDThnX4gHaJl&pid=Api&P=0&h=180',
  },
  {
    title: 'Harry Potter',
    description: 'A series of fantasy novels written by J.K. Rowling, following the adventures of a young wizard, Harry Potter.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.2A8LEkayIL78Bv4StXFp8AHaF7&pid=Api&P=0&h=180',
  },
  {
    title: 'Cartoon Books',
    description: 'Books filled with colorful illustrations and stories that bring to life the adventures of beloved cartoon characters.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.iAjMv3ndDRq_QBZnefzbyQHaHa&pid=Api&P=0&h=180',
  },
  {
    title: 'Novel Books',
    description: 'A selection of novels spanning various genres including romance, thriller, and science fiction.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.Bq_c5X2QSBq3bXMlJXg6JQHaLM&pid=Api&P=0&h=180',
  },
  {
    title: 'Ponniyin Selvan',
    description: 'A Tamil historical novel written by Kalki Krishnamurthy, narrating the set in the Chola dynasty period.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.rakBS5-O5R9YS35XUbNv2AHaLq&pid=Api&P=0&h=180',
  },
];

const Home = () => {
  return (
    <div className="container">
      <h1 className="header">Welcome to the Library Management</h1>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-4 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default App;
