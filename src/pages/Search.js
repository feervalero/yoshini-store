import React from 'react';
import SecondaryBanner from '../components/SecondaryBanner';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <SecondaryBanner title={`this are de Results for ${this.props.match.params.itemToFind}`} />);
    }
}
 
export default Search;