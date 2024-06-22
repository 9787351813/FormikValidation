import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuthors } from '../components/AuthorContext';

const AuthorForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addAuthor, updateAuthor } = useAuthors();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.author) {
      const { author } = location.state;
      setName(author.name);
      setBio(author.bio);
      setBirthdate(author.birthdate);
    }
  }, [location.state]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!bio) newErrors.bio = 'Biography is required';
    if (!birthdate) newErrors.birthdate = 'Birthdate is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newAuthor = { name, bio, birthdate, id: id || Date.now() };
    if (id) {
      updateAuthor(newAuthor);
    } else {
      addAuthor(newAuthor);
    }
    navigate('/authors');
  };

  return (
    <div className="author-form">
      <h2>{id ? 'Edit Author' : 'Add Author'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBio">
          <Form.Label>Biography</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            isInvalid={!!errors.bio}
          />
          <Form.Control.Feedback type="invalid">{errors.bio}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBirthdate">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            isInvalid={!!errors.birthdate}
          />
          <Form.Control.Feedback type="invalid">{errors.birthdate}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">{id ? 'Update Author' : 'Add Author'}</Button>
      </Form>
    </div>
  );
};

export default AuthorForm;
