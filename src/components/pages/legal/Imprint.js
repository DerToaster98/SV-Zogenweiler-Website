import { Component } from "react";

import { getClubHouseAddressNoContact, getResponsiblePersonAddresNoContact } from "../../../Constants";

export default class Imprint extends Component {
    render() {
        return (
            <div className="imprint">
                <div className="page-content">
                    <header>
                        <h1 className="text-color-green">Impressum</h1>
                    </header>
                    <article>                                        
                        {getClubHouseAddressNoContact()}

                        <p>
                            <strong>Vertreten durch:</strong>
                            <br />
                            Rolf Wiggenhauser
                        </p>

                        <h2>Kontakt</h2>
                        <p>
                            Telefon: 07504 - 1761
                            <br />
                            E-Mail: osm@svzogenweiler.de
                        </p>

                        <h2>Redaktionell verantwortlich</h2>
                        {getResponsiblePersonAddresNoContact()}

                        <h2>Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle</h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
                    </article>
                </div>
            </div>
        );
    }
}