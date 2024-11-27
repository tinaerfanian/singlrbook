import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props; // دریافت کتاب از props
    return (
      <Card
        onClick={this.toggleSelected}
        style={{
          border: this.state.selected ? '3px solid red' : '1px solid #ddd',
          cursor: 'pointer',
        }}
        className="mb-3"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
