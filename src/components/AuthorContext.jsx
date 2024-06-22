import React, { createContext, useContext, useState } from 'react';

const AuthorContext = createContext();

export const useAuthors = () => useContext(AuthorContext);

export const AuthorProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const updateAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => author.id === updatedAuthor.id ? updatedAuthor : author));
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor, updateAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};
