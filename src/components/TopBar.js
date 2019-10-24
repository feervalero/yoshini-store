import React from 'react';
import {Link} from 'react-router-dom';
const TopBar = (props) => {
    return ( 
        <>
        {/*<!-- Top Bar -->*/}
        <div className="top_bar">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-row">
                        <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt="" /></div>+38 068 005 3570</div>
                        <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><Link to="/">fastsales@gmail.com</Link></div>
                        <div className="top_bar_content ml-auto">
                            <div className="top_bar_menu">
                                <ul className="standard_dropdown top_bar_dropdown">
                                    <li>
                                        <Link to="/">English<i className="fas fa-chevron-down"></i></Link>
                                        <ul>
                                            <li><Link to="/">Italian</Link></li>
                                            <li><Link to="/">Spanish</Link></li>
                                            <li><Link to="/">Japanese</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">$ US dollar<i className="fas fa-chevron-down"></i></Link>
                                        <ul>
                                            <li><Link to="/">EUR Euro</Link></li>
                                            <li><Link to="/">GBP British Pound</Link></li>
                                            <li><Link to="/">JPY Japanese Yen</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="top_bar_user">
                                <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                <div><Link to="/">Register</Link></div>
                                <div><Link to="/">Sign in</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>		
        </div>
        </>
     );
}
 
export default TopBar;