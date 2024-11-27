import React, { useState } from 'react';
import SingleBook from './singlebook';
import { Row, Col, Form } from 'react-bootstrap';

const BookList = ({ books }) => {
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for a book..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Form.Group>
      <Row>
        {filteredBooks.map(book => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookList;
