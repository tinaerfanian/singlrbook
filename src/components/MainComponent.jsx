import React from 'react';
import books from './../JSON/fantasy.json'; // یا هر فایل JSON دیگر
import { Card, Row, Col } from 'react-bootstrap';

const AllTheBooks = () => (
  <Row className="g-4">
    {books.map(book => (
      <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
        <Card className="h-100">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Price: ${book.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default AllTheBooks;
