import { Component } from "react";

import './tasks.css';

export default class Tasks extends Component {
            
    render() {
        return(
            <div className="tasks">
                <div className="page-content">
                    <header>
                        <h1 className="text-color-green">Helfer- & Arbeitseinsätze</h1>
                    </header>
                    <article>
                        <span>
                            Die Anforderungen und Aufgaben im Verein sind in letzter Zeit stetig gestiegen, während die Zahl der Helfer leider abgenommen hat.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            Ziel ist es, alle Arbeiten rund um das Schützenhaus und den Verein auf viele Schultern zu verteilen. Wiederkehrende Aufgaben wie z.B. Schießdienste, Schießbude, Wirtsdienste, Einsätze bei unseren Veranstaltungen, Hausmeisteraufgaben, Ausrücken oder Glassammlung werden mit Arbeitsstunden vergütet.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            Eine Liste an offenen Aufgaben ist weiter unten zu finden. Nach Rücksprache können weitere Arbeiten übernommen werden.
                        </span>
                        <h2 className="text-color-blue">Richtlinie</h2>
                        <span>
                            Folgende Stunden sind im Laufe eines Kalenderjahres je nach Gruppe zu erfüllen. Mitglieder ab 67 Jahren sind von dieser Regelung befreit.                            
                        </span>
                        <table>
                            <tr>
                                <th>
                                    <h3 className="text-color-blue">
                                        Mitgliedsgruppe
                                    </h3>
                                </th>
                                <th>
                                    <h3 className="text-color-blue">
                                        Erwartete Stunden
                                    </h3>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <span>
                                        Vorstandsmitglieder
                                    </span>
                                </th>
                                <th>
                                    <span className="text-color-green">
                                        20 Stunden
                                    </span>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <span>
                                        WBK-Besitzer
                                    </span>
                                </th>
                                <th>
                                    <span className="text-color-green">
                                        20 Stunden
                                    </span>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <span>
                                        Aktive Schützen
                                    </span>
                                </th>
                                <th>
                                    <span className="text-color-green">
                                        10 Stunden
                                    </span>
                                </th>
                            </tr>                           
                        </table>
                        <br></br>
                        <br></br>
                        <span>
                            Nicht geleistete Arbeitsstunden werden in Rechnung gestellt. Bei Rückfragen bitte an den Vorstand wenden! Die Stunden sind nachzuweisen über Einträge im Rapportzettel. Dieser ist weiter unten auf dieser Seite verlinkt.
                        </span>
                        <h2 className="text-color-blue">Links</h2>
                        <ul>
                            <li>
                                <a href='https://docs.google.com/spreadsheets/d/1tPARMW0N2IFg_igsoyfbUDhwBFI0EtBN/edit?gid=792309724#gid=792309724' target="_blank">
                                    <span>Liste offener Aufgaben</span>
                                </a>
                            </li>
                            <li>
                                <a href='https://form.jotform.com/241066221715347' target="_blank">
                                    <span>Rapportzettel</span>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>                
            </div>
        );
    }
}
