import { Component } from "react";
import Calendar from "react-calendar";
import LoadingSymbol from "../../LoadingSymbol";

import 'react-calendar/dist/Calendar.css';
import './appointments.css';

/*TODO: Maybe different colors for different appointment types?*/
const APPOINTMENT_TYPE = {
    WHOLE_DAY : 'Ganztags',
    MULTIPLE_DAYS : 'Mehrtägig',
    MEETING : 'Versammlung',
    GENERAL_MEETING : 'Generalversammlung',
    TOURNAMENT : 'Meisterschaft',
    UNSPECIFIED : ''
}

const CLASSNAME_APPOINTMENT_FOUND = 'appointment-present';

class AppointmentEntry extends Component {

    render() {
        var isMultiDayDuration = this.props.startDate < this.props.endDate;
        var dateLine = this.props.startDate.toLocaleDateString();
        if (isMultiDayDuration) {
            dateLine = this.props.startDate.toLocaleDateString() + ' - ' + this.props.endDate.toLocaleDateString();
        }
        /*TODO: Infos einblenden je nach Typ*/
        return (
            <div className="appointment">
                <article>
                    <h3>{this.props.name}</h3>
                    <div>{dateLine}</div>                    
                </article>
            </div>
        );
    }
}

function dateToStr(date) {
    return '' + date.getDate() + '.' + (date.getMonth() +1) + '.' + date.getFullYear();
}

export default class Appointments extends Component {    

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            appointmentData: [],
            appointments: new Map(),
            currentDate: new Date(),
            weekAppointments: []
        }
    }

    async componentDidMount() {
        // TODO: Rework to parse JSON file instead
        this.setState({loading: true});

        await this.initAppointmentData();

        this.refresh();

        this.setState({loading: false})
    }

    refresh() {
        var currentDate = this.state.currentDate;
        
        var weekAppointments = this.findAppointmentsOfWeek(currentDate);

        this.setState({
            weekAppointments: weekAppointments
        });
    }

    async initAppointmentData() {
        //TODO: Add location as separate parameter
        //2025
        this.addAppointment("Sebastiansoktav Ravensburg", new Date(2025, 0, 26), APPOINTMENT_TYPE.WHOLE_DAY);
        this.addAppointment("Schützenkreis-Jahreshauptversammlung / Kreisschützentag Berg (SH)", new Date(2025, 0, 24, 19, 30), APPOINTMENT_TYPE.MEETING);
        this.addAppointment("Kreisschützentag Bodensee in Oberteuringen", new Date(2025, 1, 7, 19, 30), APPOINTMENT_TYPE.MEETING);
        this.addAppointment("Kreismeisterschaft", new Date(2025, 2, 8), new Date(2025, 2, 23), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Generalversammlung", new Date(2025, 2, 28), APPOINTMENT_TYPE.GENERAL_MEETING);
        this.addAppointment("Gemeinde-Vereine-Pokalschießen mit Siegerehrung", new Date(2025, 2, 30), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Ausserordentlicher Kreisschützentag Weissenau", new Date(2025, 3, 11, 18, 0), APPOINTMENT_TYPE.MEETING);
        this.addAppointment("Siegerehrung Kreismeisterschaft in Vogt", new Date(2025, 3, 25, 19, 30), APPOINTMENT_TYPE.MEETING);
        this.addAppointment("Glassammlung", new Date(2025, 3, 26), APPOINTMENT_TYPE.WHOLE_DAY);
        this.addAppointment("Bezirksschützentag Altheim", new Date(2025, 3, 27), APPOINTMENT_TYPE.WHOLE_DAY);
        this.addAppointment("Kreisdämmerschoppen in Vogt (Rundenwettkampfeinteilung)", new Date(2025, 5, 27, 20, 0), APPOINTMENT_TYPE.UNSPECIFIED);
        this.addAppointment("Cross-Biathlon beim Schützenhaus Zogenweiler", new Date(2025, 6, 13), APPOINTMENT_TYPE.WHOLE_DAY);
        this.addAppointment("Feierabendhock mit Jedermann-Schießen", new Date(2025, 8, 19, 18, 0), APPOINTMENT_TYPE.UNSPECIFIED);
        this.addAppointment("Kreiskönigsschießen und Kreis-Cup in Berg", new Date(2025, 8, 26), new Date(2025, 9, 1), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Königsschießen", new Date(2025, 9, 15, 19, 0), new Date(2025, 9, 15, 22, 0), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Königsschießen", new Date(2025, 9, 19, 10, 0), new Date(2025, 9, 19, 14, 0), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Siegerehrung Kreiskönigsschießen und Kreis-Cup Berg", new Date(2025, 9, 24, 19, 30), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Siegerehrung Königsschießen", new Date(2025, 9, 25), APPOINTMENT_TYPE.TOURNAMENT);
        this.addAppointment("Glassammlung", new Date(2025, 9, 25), APPOINTMENT_TYPE.WHOLE_DAY);
        this.addAppointment("Dämmerschoppen in Baindt", new Date(2025, 10, 14, 20, 0), APPOINTMENT_TYPE.UNSPECIFIED);
        this.addAppointment("Weihnachtsfeier", new Date(2025, 11, 21, 19, 0), APPOINTMENT_TYPE.UNSPECIFIED);
        //2026
        this.addAppointment("Kreisschützentag in Berg", new Date(2026, 0, 23), APPOINTMENT_TYPE.WHOLE_DAY);
        this.addAppointment("Generalversammlung", new Date(2026, 2, 20), APPOINTMENT_TYPE.GENERAL_MEETING);
        this.addAppointment("Gemeinde/Vereine- Pokalschießen mit Siegerehrung", new Date(2026, 2, 22), APPOINTMENT_TYPE.WHOLE_DAY);
    }

    addAppointment(content, startDate, type) {
        this.addAppointment(content, startDate, startDate, type);
    }   

    addAppointment(content, startDate, endDate, type) {
        const actualStartDate = new Date(startDate);
        const actualEndDate = new Date(endDate);

        var tmpStartDate = new Date(actualStartDate.getFullYear(), actualStartDate.getMonth(), actualStartDate.getDate(), 0, 0, 0, 0);
        var firstTime = true;

        var index = this.state.appointmentData.length;
        
        var appointment = <AppointmentEntry
            startDate={actualStartDate}
            endDate={actualEndDate}
            appointmentType={type}
            name={content}
        />
        this.state.appointmentData.push(appointment);

        while((tmpStartDate <= actualEndDate) || (firstTime)) {
            firstTime = false;
            var key = dateToStr(tmpStartDate);

            var year = tmpStartDate.getFullYear();
            var month = tmpStartDate.getMonth() + 1;
            var day = tmpStartDate.getDate();

            var yearData = this.state.appointments.get(year);
            if (!yearData) {
                yearData = new Map();
                this.state.appointments.set(year, yearData);
            }
            var monthData = yearData.get(month);
            if (!monthData) {
                monthData = new Map();
                yearData.set(month, monthData);
            } 
            var dayData = monthData.get(day);
            if (!dayData) {
                dayData = [];
                monthData.set(day, dayData);
            }
            dayData.push(
                index
            );

            var newTmpDate = tmpStartDate.setDate(tmpStartDate.getDate() + 1);
            tmpStartDate = new Date(newTmpDate);
        }        
    }

    tileClassName = ({date, view}) => {
        if (view === 'month') {
            let appointments = this.findAppointments(date);
            if (appointments.length > 0) {
                return CLASSNAME_APPOINTMENT_FOUND;
            }
        }          
    }

    onChange = (nextValue) => {
        this.setState(
            {
                currentDate: nextValue,
                weekAppointments: this.findAppointmentsOfWeek(nextValue)
            }
        );
    }

    findAppointments(selectedDate) {
        const uniqueSet = new Set();

        var selectedYear = selectedDate.getFullYear();
        var selectedMonth = selectedDate.getMonth() +1;
        var selectedDay = selectedDate.getDate();

        var yearData = this.state.appointments.get(selectedYear);
        if (yearData) {
            var monthData = yearData.get(selectedMonth);
            if (monthData) {
                var dayData = monthData.get(selectedDay);
                if (dayData) {
                    for (const tmp of dayData) {
                        uniqueSet.add(tmp);
                    }
                }
            }
        }

        var result = [];
        uniqueSet.forEach(index => {
            result.push(this.state.appointmentData[index]);
        });
        return result;
    }

    findAppointmentsOfMonth(selectedDate) {
        var result = [];        

        var selectedYear = selectedDate.getFullYear();
        var selectedMonth = selectedDate.getMonth() +1;        

        var yearData = this.state.appointments.get(selectedYear);
        if (yearData) {
            var monthData = yearData.get(selectedMonth);
            if (monthData) {
                // TODO: Iterate over map of the month and extract all                
            }
        }

        return result;
    }

    findAppointmentsOfWeek(selectedDate) {
        //TODO: Remove duplicates from list!
        var result = new Set();
        var currentDay = new Date(selectedDate);
        var firstWeekDay = selectedDate.getDate() - selectedDate.getDay();
        var lastWeekDay = firstWeekDay + 6;

        firstWeekDay = new Date(currentDay.setDate(firstWeekDay));
        lastWeekDay = new Date(currentDay.setDate(lastWeekDay));

        var tmpDay = new Date(firstWeekDay);
        while(tmpDay <= lastWeekDay) {                        
            for (const obj of this.findAppointments(tmpDay)) {            
                result.add(obj);                
            }
            
            var newTmpDate = tmpDay.setDate(tmpDay.getDate() + 1);
            tmpDay = new Date(newTmpDate);            
        }        

        return Array.from(result);        
    }

    render() {
        if(this.state.loading) {
            return(
                <div className="appointments">
                    <div className="page-content">
                        <LoadingSymbol>Lade Daten...</LoadingSymbol>
                    </div>
                </div>
            );
        }

        return (
            <div className="appointments">
                <div className="page-content">
                    <header>
                        <h1 className="text-color-green">Termine</h1>
                    </header>
                    <div className="appointment-calendar">
                        <Calendar
                            minDate={new Date((new Date()).getFullYear() - 1, 0, 1)}
                            maxDate={new Date((new Date()).getFullYear() + 1, 11, 31)}
                            value={this.state.currentDate}                        
                            minDetail="year"
                            onChange={this.onChange}
                            tileClassName={this.tileClassName}
                        />
                        <div>
                            <h2>Anstehende Termine der Woche:</h2>
                            <div>
                                {
                                    Object.keys(this.state.weekAppointments).map((key) => {
                                        return (
                                            <div key={key}>
                                                {this.state.weekAppointments[key]}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Anstehende Termine des Monats:</h2>
                    </div>
                    <h1 className="text-color-green">Alle Termine</h1>
                    <div>

                    </div>
                </div>
            </div>
        );
    }

}