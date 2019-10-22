import React from 'react';

const TopBar = (props) => {
    return ( 
        <>
        {/*<!-- Top Bar -->*/}
        <div className="top_bar">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-row">
                        <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt="" /></div>+38 068 005 3570</div>
                        <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                        <div className="top_bar_content ml-auto">
                            <div className="top_bar_menu">
                                <ul className="standard_dropdown top_bar_dropdown">
                                    <li>
                                        <a href="/">English<i className="fas fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="/">Italian</a></li>
                                            <li><a href="/">Spanish</a></li>
                                            <li><a href="/">Japanese</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/">$ US dollar<i className="fas fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="/">EUR Euro</a></li>
                                            <li><a href="/">GBP British Pound</a></li>
                                            <li><a href="/">JPY Japanese Yen</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="top_bar_user">
                                <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                <div><a href="/">Register</a></div>
                                <div><a href="/">Sign in</a></div>
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