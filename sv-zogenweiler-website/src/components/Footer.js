import { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className="pageFooter color-green-footer">           
                <nav className="navbox-footer-right">                            
                    <span className="navbarItemFooter">Schützenverein Hubertus Zogenweiler e.V.</span>
                    <NavLink className="navbarItemFooter" activeClassname="navbarItemFooter active" to="/impressum">
                        Impressum
                    </NavLink>                                
                    <NavLink className="navbarItemFooter" activeClassname="navbarItemFooter active" to="/datenschutz">                                    
                        Datenschutz
                    </NavLink>                    
                </nav>
            </footer>
        );
    }
}