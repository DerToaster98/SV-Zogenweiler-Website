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
                        <nav className="navbox-horizontal navbox-right">                            
                            <NavLink className="navbar-item" activeClassname="navbar-item active" to="/">
                                Startseite
                            </NavLink>                                
                            {/**TODO: Das hier ist eine Liste... */}
                            <NavLink className="navbar-item dropdown-holder" activeClassname="navbar-item active" to="/verein">                                    
                                Verein
                                <nav className ="navbox-vertical dropdown-content color-green-background">
                                    <NavLink className="navbar-item" activeClassname="navbar-item active" to ="/verein/vorstandschaft">
                                        Vorstandschaft
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active" to ="/verein/termine">
                                        Termine
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active" to ="/verein/schuetzenhaus">
                                        Schützenhaus
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active" to ="/verein/aktivitaeten">
                                        Aktivitäten
                                    </NavLink>
                                </nav>
                            </NavLink>
                            <NavLink className="navbar-item" activeClassname="navbar-item active" to="/ergebnisse">
                                Ergebnisse
                            </NavLink>
                            <NavLink className="navbar-item" activeClassname="navbar-item active" to="/kontakt">
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