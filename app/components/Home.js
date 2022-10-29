import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {

  render() {

    return (
      <div>
        <h1>Welcome to my Personal Project!!!</h1>
        <img src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000" ></img>
        <p>Lorem Ipsum</p>
        <img src="https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg"></img>
      </div>
    )
  }
}

export default connect()(Home)