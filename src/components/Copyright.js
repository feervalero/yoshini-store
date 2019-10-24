import React from 'react';
import {Link} from 'react-router-dom';
const Copyright = (props) => {
    return ( 
    <>
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                        <div className="copyright_content">
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="/">Colorlib</Link></div>
                        <div className="logos ml-sm-auto">
                            <ul className="logos_list">
                                <li><Link to="/"><img src="images/logos_1.png" alt="" /></Link></li>
                                <li><Link to="/"><img src="images/logos_2.png" alt="" /></Link></li>
                                <li><Link to="/"><img src="images/logos_3.png" alt="" /></Link></li>
                                <li><Link to="/"><img src="images/logos_4.png" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
 
export default Copyright;