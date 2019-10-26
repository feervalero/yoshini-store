import React from "react";
import SecondaryBanner from "../components/SecondaryBanner";

class MyAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SecondaryBanner title="My Account" />;
  }
}

export default MyAccountPage;
