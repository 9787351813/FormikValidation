// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BookProvider } from './components/BookContext';
import { AuthorProvider } from './components/AuthorContext';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BookProvider>
      <AuthorProvider>
        <App />
      </AuthorProvider>
    </BookProvider>
  </React.StrictMode>
);
