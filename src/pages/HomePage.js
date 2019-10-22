import React from 'react';
import Banner from '../components/Banner';
import Characteristics from '../components/Characteristics';
import DealsFeatured from '../components/DealsFeatured';
import PopularCategories from '../components/PopularCategories';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Banner/>
                <Characteristics />
                <DealsFeatured />
                <PopularCategories />
            </>
         );
    }
}
 
export default HomePage;
