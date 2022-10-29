import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Card1 extends React.Component {
  render() {
    return (
      <div >
        <Card style={{width: '35rem'}}>
          <Card.Img variant='top' src='https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000' />
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}} >Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go to the Swamp</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default connect()(Card1)