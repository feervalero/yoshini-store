import React from "react";

class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    //Handle authentication if the   extectec values are in URL
    if(/access_token|id_token/.test(this.props.location.hash)){
        this.props.auth.handleAuthentication();
    }else{
        throw new Error("Invalid callback URL");
    }
  }

  render() {
    return <h2>Loading...</h2>;
  }
}

export default Callback;
