import React from 'react';
import TopBar from './TopBar';
import HeaderMain from './HeaderMain';
import MainNav from './MainNav';
import Menu from './Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className="header">

                <TopBar />

                <HeaderMain />

                <MainNav />
                
                <Menu />

            </header>
            
         );
    }
}
 
export default Header;