import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {

  render() {

    return (
      <Card >
        <Card.Header>Featured Feature</Card.Header>
        <Card.Body>
          <Card.Title>Rock and Stone to the Bone</Card.Title>
          <Card.Text>
            Deep dives and drive-ins and dives
          </Card.Text>
          <Button variant='primary'>Go to FlavorTown</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default connect()(Header)