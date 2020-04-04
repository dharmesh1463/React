 import React from 'react'
 import { Navbar, Nav, NavItem } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
 import './CustomNavbar.css';
 import 'tachyons';

     const CustomNavbar=()=>{
     return (
         <div>
                    <nav class="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
                <div class="dtc dn-ns w-third"></div>
                
                <a class="dtc v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns" href="#" title="Home">
                  <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name"/>
                </a>
                
                
                <div id="menu" class="static-ns absolute mt5 mt0-ns left-100 db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr">
                  <a class="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns"  title="Home"><Link to="/">Home</Link></a>
                  <a class="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns"  title="About"><Link to="About">About</Link></a>
                  <a class="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr0-ns"  title="Contact"><Link to="News">News</Link></a>
                </div>
                
                <a href="#" id="menu-btn" class="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim dark-gray">
                  Menu
                </a>
              </nav>

 </div>
     );
   }
 export default CustomNavbar;



