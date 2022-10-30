import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Card2 extends React.Component {
  render() {
    return (
      <div >
        <Card style={{width: '35rem'}}>
          <Card.Img variant='top' src='https://preview.redd.it/1pmsjnk8f1g01.jpg?auto=webp&s=9c9492686bcd47cf785b77d1c6feaf0b59bf7278' />
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}} >Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>ChimkinNuggy </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default connect()(Card2)