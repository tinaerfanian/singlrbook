import React from 'react';
import BookList from './components/BookList';
import books from './data/fantasy.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container my-5">
    <h1 className="text-center mb-4">EpiBooks</h1>
    <BookList books={books} />
  </div>
);

export default App;
