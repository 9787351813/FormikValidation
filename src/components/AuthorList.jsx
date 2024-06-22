import React from 'react';
import { useAuthors } from './AuthorContext';
import { Link } from 'react-router-dom';

const AuthorList = () => {
  const { authors } = useAuthors();

  return (
    <div>
      <h1>Authors</h1>
      <Link to="/authors/new">Add New Author</Link>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name} - {author.bio}
            <Link to={`/authors/edit/${author.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
