import { Component } from "react";
import { NavLink } from 'react-router-dom';
import { BrowserView, MobileView} from 'react-device-detect';
import { push as Menu} from 'react-burger-menu';
import Logo from "./Logo";

import "./header.css";

export default class Header extends Component {

    render() {
        return (
            <div className="pageHeader color-green-header">                
                {/**Logo */}                
                <div className="logo-holder">
                    <Logo></Logo>
                </div>
                <div>
                    <BrowserView>                        
                        <nav className="navbox-horizontal navbox-right">                            
                            <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to="/">
                                Startseite
                            </NavLink>
                            <NavLink className="navbar-item dropdown-holder" activeClassname="navbar-item active-normal" to="/verein">                                    
                                Verein
                                <nav className ="navbox-vertical dropdown-content color-green-background">
                                    <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to ="/verein/vorstandschaft">
                                        Vorstandschaft
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to ="/verein/termine">
                                        Termine
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to ="/verein/schiessdienste">
                                        Schießdienste
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to ="/verein/schuetzenhaus">
                                        Schützenhaus
                                    </NavLink>
                                    <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to ="/verein/aktivitaeten">
                                        Aktivitäten
                                    </NavLink>
                                    {/*<NavLink className="navbar-item" activeClassname="navbar-item active-normal" to ="/verein/satzung">
                                        Satzung
                                    </NavLink>*/}
                                </nav>                               
                            </NavLink>
                            <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to="/ergebnisse">
                                Ergebnisse
                            </NavLink>
                            <NavLink className="navbar-item" activeClassname="navbar-item active-normal" to="/kontakt">
                                Kontakt
                            </NavLink>                            
                        </nav>
                    </BrowserView>
                    <MobileView>
                        <div id="outer-container">
                            {/**TODO: Somehow the menu icon is still invisible... */}
                            <Menu id="slide" className="mobile-burger-menu" outerContainerId={'outer-container'} right='true'>
                                <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to="/">
                                    Startseite
                                </NavLink>                                
                                <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to="/verein">                                    
                                    Verein                                    
                                    <nav className ="nav-mobile">
                                        <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to ="/verein/vorstandschaft">
                                            Vorstandschaft
                                        </NavLink>
                                        <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to ="/verein/termine">
                                            Termine
                                        </NavLink>
                                        <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to ="/verein/schiessdienste">
                                            Schießdienste
                                        </NavLink>
                                        <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to ="/verein/schuetzenhaus">
                                            Schützenhaus
                                        </NavLink>
                                        <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to ="/verein/aktivitaeten">
                                            Aktivitäten
                                        </NavLink>
                                        {/*<NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to ="/verein/satzung">
                                            Satzung
                                        </NavLink>*/}
                                    </nav>                                    
                                </NavLink>
                                <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to="/ergebnisse">
                                    Ergebnisse
                                </NavLink>
                                <NavLink className="navbar-item-mobile" activeClassname="navbar-item-mobile active-mobile" to="/kontakt">
                                    Kontakt
                                </NavLink>                              
                            </Menu>
                        </div>
                    </MobileView>
                </div>
            </div>
        );
    }
}