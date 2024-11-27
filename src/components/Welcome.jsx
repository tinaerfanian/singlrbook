import React from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = () => (
  <div className="text-center my-4">
    <Alert variant="info">
      <h2>Welcome to My Bookstore!</h2>
      <p>Your one-stop shop for amazing books across all genres.</p>
    </Alert>
  </div>
);

export default Welcome;
