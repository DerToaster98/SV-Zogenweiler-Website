import { Component } from "react";

import './activities.css';

export default class Activities extends Component {
            
    render() {
        return(
            <div className="activities">
                <div className="page-content">
                    <header>
                        <h1 className="text-color-green">Aktivitäten und Veranstaltungen</h1>
                    </header>
                    <article>
                        <span>Im Lauf des Jahres sind wir nicht nur im Schießsport aktiv. Viele weitere Termine und Aktivitäten sind bei uns fest im kalender verankert. Die genauen Termine kannst du auf unserem Kalender finden.</span>
                        <h2 className="text-color-blue">Hier eine Auswahl unserer Aktivitäten</h2>
                        <dl>
                            <dt>
                                <span className="bold-text">
                                    Schießbude
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Bei Mai- und Sommerfesten in der Gemeinde sind wir mit unserer eigenen Schießbude vertreten.
                                </span>
                            </dd>

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Glassammlung
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Zwei mal im Jahr sammeln wir in der Gemeinde Horgenzell Altglas.
                                </span>
                            </dd>

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Gemeindemeisterschaft
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Bei der jährlichen Gemeindemeisterschaft treten örtliche Vereine und Gruppierungen gegeneinander an.
                                    Es warten attraktive Preise und die Verkündung des Neuen Gemeindemeisters.
                                </span>
                            </dd>

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Jedermannsschießen
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Beim gemütlichen Feierabendhock mit Jedermannsschießen können kleine Preise geschossen werden.
                                </span>
                            </dd>

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Königsschießen mit Preisschießen
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Jährlich im Oktober findet unser Königsschießen mit Preisschießen statt. Die Könige und Königinnen dürfen den Verein mit den übergebenen Ketten ein Jahr lang representieren.
                                </span>
                            </dd>                            

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Schützenball
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Am Fasnetssontag ist bei uns traditionell der Schützenball. Jung und Alt feiern hier bis in die Morgenstunden.
                                </span>
                            </dd>                            

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Cross-Biathlon
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Der Schützenkreis Ravensburg veranstaltet seit vielen Jahren bei uns am Schützenhaus den Cross-Biathlon.
                                    Viele Vereine aus dem eigenen und benachbarten Kreisen nehmen an dem Event teil.
                                </span>
                            </dd>                            

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Weihnachtsfeier
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Zum Abschluss des Jahres feiern wir in gemütlicher Runde und gutem Essen in unserem Vereinsheim.
                                </span>
                            </dd>                            

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Öffentliche Auftritte
                                </span>                                
                            </dt>                            
                            <dd>
                                <span>
                                    Zu Fronleichnahm, Hochzeiten und anderen öffentlichen Veranstaltungen rückt der Verein mit Fahne und Uniform aus.
                                </span>
                            </dd>
                        </dl>
                    </article>
                </div>                
            </div>
        );
    }
}