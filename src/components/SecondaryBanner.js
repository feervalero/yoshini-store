import React from "react";

const SecondaryBanner = props => {
  return (
    <>
      {/*<!-- Start Banner Area -->*/}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>{props.title}</h1>
              <nav className="d-flex align-items-center">
                <a href="/productDetail">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="/">
                  Shop<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="/productDetail">product-details</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Banner Area -->*/}
    </>
  );
};

export default SecondaryBanner;
