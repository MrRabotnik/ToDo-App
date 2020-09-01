import React from 'react';
import Logo from "../Images/logo.png";

let logo = <div className="logo-container"><img src={Logo} /></div>

let header_meanu_btns_urls = {
    "Home": "../../public/index.html",
    "About Us": "../pages/about_us.html",
    "Initianary": "../pages/initianary.html",
    "Contact Us": "../pages/contact_us.html",
};

let header_meanu_btns_names = Object.keys(header_meanu_btns_urls)

let header_menu_nav = [];

for (let i = 0; i < header_meanu_btns_names.length; i++){
    header_menu_nav.push(<nav><a href={header_meanu_btns_urls[header_meanu_btns_names[i]]}> <span></span>{header_meanu_btns_names[i]} </a></nav>)
};

function Header() {
    return (
        <header>
            {logo}
            {header_menu_nav}
        </header>
    );
}

export default Header;