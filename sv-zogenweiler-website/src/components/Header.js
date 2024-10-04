import { Component } from "react";
import { NavLink } from 'react-router-dom';
import { BrowserView, MobileView} from 'react-device-detect';
import { Menu} from 'react-burger-menu';
import Logo from "./Logo";

import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <header className="pageHeader color-green-header">
                {/**Logo */}                
                <div className="logo">
                    <Logo></Logo>
                </div>
                <div>
                    <BrowserView>
                        <nav className="navbox-right">                            
                            <NavLink className="navbarItem" activeClassname="navbarItem active" to="/">
                                Startseite
                            </NavLink>                                
                            {/**TODO: Das hier ist eine Liste... */}
                            <NavLink className="navbarItem" activeClassname="navbarItem active" to="/verein">                                    
                                Verein
                            </NavLink>
                            <NavLink className="navbarItem" activeClassname="navbarItem active" to="/ergebnisse">
                                Ergebnisse
                            </NavLink>
                            <NavLink className="navbarItem" activeClassname="navbarItem active" to="/kontakt">
                                Kontakt
                            </NavLink>                            
                        </nav>
                    </BrowserView>
                    <MobileView>
                        <nav>                            
                            <NavLink className="navbarItem-mobile" activeClassname="navbarItem-mobile active" to="/">
                                <Menu className="nav-mobile">
                                    Startseite
                                </Menu>
                            </NavLink>                            
                        </nav>
                    </MobileView>
                </div>
            </header>
        );
    }
}