import React from 'react';

var trigger = document.getElementsByClassName('hamburger'),
        overlay = document.getElementsByClassName('overlay'),
       isClosed = false;
  

function SidebarButton (props){
    
    return ( 
        <button onClick={hamburger_cross()} type="button" className="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
            <span className="hamb-top"></span>
            <span className="hamb-middle"></span>
            <span className="hamb-bottom"></span>
          </button>
     );
}

function hamburger_cross() {
    if(overlay.length>0){
        console.log(overlay);
        if (isClosed === true) {  

        overlay.style.display = 'none';
        trigger.classList.remove('is-open');
        trigger.classList.add('is-closed');
        isClosed = false;
        } else {   
        
        overlay.style.display = 'default';
        trigger.classList.remove('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
        }
}
}
 
export default SidebarButton;