import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card2 from "./cards/Card2";




class Link2 extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    
    return (
      <Container>
        <div>
          <Card2 />
        </div>
      </Container>

    )
  }
}

export default connect()(Link2)