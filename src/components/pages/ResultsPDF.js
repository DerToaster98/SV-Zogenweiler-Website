import { Component } from "react";

export default class ResultsPDF extends Component {

    generateLink(ident, displayName) {
        // Link to file in public folder
        var url = '' + process.env.PUBLIC_URL + '/' + ident;
        return <a href={url}>{displayName}</a>
    }

    render() {
        return (
            <div className="results-pdf">
                <div className="page-content">
                    <h1>Ergebnisse</h1>
                    <article>
                        <ul>
                            <li>
                                {this.generateLink('pdf/Gemeindemeisterschaft_Ergebnisse_2025.pdf', 'Gemeindemeisterschaft 2025')}
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        );
    }
}