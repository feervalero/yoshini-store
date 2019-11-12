import React from "react";
import SecondaryBanner from "../components/SecondaryBanner";
import scriptLoader from 'react-async-script-loader';
import LabImages from "../components/LabImages";


class Lab extends React.Component {
  render() {
    return (
      <>
        <SecondaryBanner title="Infinite scroll component   " />
        <div id="root">
          <div className="hero is-fullheight is-bold is-info">
            <div className="hero-body">
              <div className="container">
                <div className="images">
                    <LabImages />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default scriptLoader("../components/Lab.css")(Lab);