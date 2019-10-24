import React from "react";
import Banner from "../components/Banner";
import Characteristics from "../components/Characteristics";
import DealsFeatured from "../components/DealsFeatured";
import PopularCategories from "../components/PopularCategories";
import Slider from "../components/Slider";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import Trends from "../components/Trends";
import AdvertComponent from "../components/AdvertComponent";
import Reviews from "../components/Reviews";
import Viewed from "../components/Viewed";
import Brands from "../components/Brands";
import Newsletter from "../components/Newsletter";
//require('./dependencies/mainStyles.css');

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner />
        <Characteristics />
        <DealsFeatured />
        <PopularCategories />
        <Slider />
        <NewArrivals />
        <BestSellers />
        <AdvertComponent />
        <Trends />
        <Reviews />
        <Viewed />
        <Brands />
        <Newsletter />
      </>
    );
  }
}

export default HomePage;
