import { Component } from "react";

/**
 * Layout: Zeitstrahl oben mit den Jahren
 * Darunter: Untereinander die Kategorien und innerhalb davon die verschiedenen Wettkämpfe mit Datum
 * Kategorien sind einklappbar
 * 
 * Datenquelle: Entweder roher CSV Quelltext irgendwo oder Fileserver => Über Orderstruktur kann das ganze dann "geparsed" werden
 */
export default class Results extends Component {
    /**Mehrdimensionales Array (Jahr, Typ, Ergebnisse innerhalb des Typs) welches die Ergebnisse repräsentiert */
    /**Idee: Erster Key: Jahr => String, Zweiter Key: Klasse bzw. Methode die einzelne Ergebnisse rendern kann, Dritte Value: die Einzelnen Ergebnisse der Kategorie */
    static resultData = new Map();


    render() {
        return(
            <div className="results">
                <div className="page-content">

                </div>
            </div>
        );
    }
}

/** TODO: Wie funktionieren Generics in JavaScript? */