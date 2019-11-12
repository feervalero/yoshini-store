import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Lab from "../pages/Lab";
import LabImage from "./LabImage";
export default class LabImages extends React.Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`http://localhost:8080/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () =>{
    const { count, start } = this.state;
    this.setState({start:this.state.start+count})
    axios
      .get(`http://localhost:8080/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: this.state.images.concat(res.data) }));
  }

  render() {
    console.log(this.state);
    return (
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        {this.state.images.map(image => (
          <LabImage key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    );
  }
}
