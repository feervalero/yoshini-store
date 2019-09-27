import React from 'react';

function Sidebar(props){
    return ( 
    <>
    <div className="overlay"></div>
    <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul className="nav sidebar-nav">
                <li className="sidebar-brand">
                    <a href="/home">
                       Bootstrap 3
                    </a>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-home"></i> Home</a>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-folder"></i> Page one</a>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-file-o"></i> Second page</a>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-cog"></i> Third page</a>
                </li>
                <li className="dropdown">
                  <a href="/home" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-fw fa-plus"></i> Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">Dropdown heading</li>
                    <li><a href="/home">Action</a></li>
                    <li><a href="/home">Another action</a></li>
                    <li><a href="/home">Something else here</a></li>
                    <li><a href="/home">Separated link</a></li>
                    <li><a href="/home">One more separated link</a></li>
                  </ul>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-bank"></i> Page four</a>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-dropbox"></i> Page 5</a>
                </li>
                <li>
                    <a href="/home"><i className="fa fa-fw fa-twitter"></i> Last page</a>
                </li>
            </ul>
        </nav>
        </>
     );
}
 
export default Sidebar;