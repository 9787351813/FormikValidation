import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useAuthors } from '../components/AuthorContext';
import { Link } from 'react-router-dom';

const Authors = () => {
  const { authors } = useAuthors();

  return (
    <div>
      <h2>Authors List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Biography</th>
            <th>Birthdate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.bio}</td>
              <td>{author.birthdate}</td>
              <td>
                <Link to={`/authors/edit/${author.id}`} state={{ author }}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/authors/new">
        <Button>Add Author</Button>
      </Link>
    </div>
  );
};

export default Authors;
