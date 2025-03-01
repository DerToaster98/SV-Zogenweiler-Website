import { Component } from "react";
import LoadingSymbol from "../LoadingSymbol";
import { useEffect, useState } from "react";

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

    constructor(props) {
        super(props);

        // URL structure: Holds category, year and index

        this.state = {
            tournamentData: null,
            torunamentCategories: null,
            loading: true,
            year: null,
            category: null,
            tournamentIndex: -1
        }
    }

    renderSelectedTournament() {

    }

    async componentDidMount() {
        this.setState({loading: true});
        await this.initializeTournamentData();
        await this.fetchInitialTournamentData();
    }

    async initializeTournamentData() {
        // TODO: Langfristig umbauen auf einen Server, der pro Jahr eine JSON Datei bereitstellt
        // Oder auf Github die JSON Datei mit allen Jahren bereitstellen und dann da auch drauf zugreifen
        // Oder halt irgendwo auf nem FileServer
    }

    async fetchInitialTournamentData() {
        // Grab latest year from tournamentdata
        // Grab first category
        // Grab first tournament
    }


    render() {
        if(this.props.loading) {
            return(
                <div className="results">
                    <div className="page-content">
                        <LoadingSymbol>Lade Daten...</LoadingSymbol>
                    </div>
                </div>
            );
        }
        return(
            <div className="results">
                <div className="page-content">
                    <div className="year-selection">
                        {this.renderAvailableYears()}
                    </div>
                    <div className="disciple-selection">
                        {this.renderAvailableDisciples()}
                    </div>
                    <div className="tournament-list">
                        {this.renderSelectedTournaments()}
                    </div>
                    {this.renderSelectedTournament()}
                </div>
            </div>
        );
    }

    renderAvailableYears() {
        if (!this.props.tournamentData) {
            return;
        }

    }

    renderAvailableDisciples() {

    }

    renderSelectedTournament() {
        // TODO: "Not found" component
        if (!this.props.tournamentData) {
            return;
        }
        var yearData = this.tournamentData[this.props.year];
        if (!yearData) {
            return;
        }
        var categoryData = yearData[this.props.category];
        if (!categoryData) {
            return;
        }
        var tournamentEntry = categoryData[this.props.tournamentIndex];
        if (!tournamentEntry) {
            return;
        }
        return tournamentEntry;
    }
}

class Participant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: this.props.name,
            //TODO: Make this nullable!
            team: null,
            scores: []
        }
    }

    setDisplayName(displayName) {
        this.setState({displayName: displayName});
    }

    displayName(displayName) {
        this.setDisplayName(displayName);
        return this;
    }

    setScore(score) {
        this.state.scores.push(score);
    }

    score(score) {
        this.setScore(score)
        return this;
    }

    setTeam(team) {
        this.setState({team: team});
    }

    team(team) {
        this.setTeam(team);
        return this;
    }

    getScore() {
        var score = 0;
        for (const scoreTmp of this.state.scores) {
            score += scoreTmp;
        }
        return score;
    }
}

class BiathlonParticipant extends Participant {
    constructor(props) {
        super(props);

        this.state = {
            displayName: this.props.displayName,
            //TODO: Make this nullable!
            team: null,
            scores: [],
            punishmentRounds: [],
            time: 0,
            category: null
        }        
    }

    setTime(hours, minutes, seconds) {
        var totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
        this.setState({time: totalSeconds});        
    }

    time(hours, minutes, seconds) {
        this.setTime(hours, minutes, seconds);
        return this;
    }

    setTime(minutes, seconds) {
        this.setTime(0, minutes, seconds);
    }

    time(minutes, seconds) {
        this.setTime(minutes, seconds);
        return this;
    }

    setCategory(category) {
        this.setState({category: category});        
    }

    category(category) {
        this.setCategory(category);
        return this;
    }

    addPunishmentRound(roundIndex) {
        this.state.punishmentRounds.push(roundIndex);
    }

    punishmentRound(roundIndex) {
        this.addPunishmentRound(roundIndex);
        return this;
    }
}

class TournamentBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: this.props.displayName,
            date: new Date(),
            participants: []
        }
    }
}

class TeamTournamentBase extends TournamentBase {

}

class CrossBiathlonTournament extends TeamTournamentBase {

}

/** TODO: Wie funktionieren Generics in JavaScript? */