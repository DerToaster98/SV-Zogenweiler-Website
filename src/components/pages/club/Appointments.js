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

class TimeBlock extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        var timeBlock = <span>Ganztägig</span>;
        if ((this.props.appointment.props.startDate.getHours() + this.props.appointment.props.startDate.getMinutes() + this.props.appointment.props.endDate.getHours() + this.props.appointment.props.endDate.getMinutes()) > 0) {
            if (this.props.appointment.props.startDate < this.props.appointment.props.endDate) {
                timeBlock = <span>{this.props.appointment.props.startDate.getHours() + ':' + this.props.appointment.props.startDate.getMinutes()} - {this.props.appointment.props.endDate.getHours() + ':' + this.props.appointment.props.endDate.getMinutes()} Uhr</span>;
            } else {
                timeBlock = <span>{this.props.appointment.props.startDate.getHours() + ':' + this.props.appointment.props.startDate.getMinutes()} Uhr </span>;
            }
        }
        return timeBlock;
    }
}

class AppointmentEntry extends Component {

    render() {
        var isMultiDayDuration = this.props.startDate < this.props.endDate;
        var dateLine = this.props.startDate.toLocaleDateString();
        if (isMultiDayDuration) {
            dateLine = this.props.startDate.toLocaleDateString() + ' - ' + this.props.endDate.toLocaleDateString();
        }        
        
        /*TODO: Infos einblenden je nach Typ*/
        return (
            <div className="appointment-entry">
                <article>
                    <h3>{this.props.name}</h3>
                    <div>
                        <span>Datum: {dateLine}</span>
                        <br></br>
                        <TimeBlock appointment={this}/>
                    </div>
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
            appointments: new Map(),
            currentDate: new Date(),
            weekAppointments: [],
            monthAppointments: []
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
        var monthAppointments = this.findAppointmentsOfMonth(currentDate);

        this.setState({
            weekAppointments: weekAppointments,
            monthAppointments: monthAppointments
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
        
        var appointment = <AppointmentEntry
            startDate={actualStartDate}
            endDate={actualEndDate}
            appointmentType={type}
            name={content}
        />

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
                appointment
            );

            var newTmpDate = tmpStartDate.setDate(tmpStartDate.getDate() + 1);
            tmpStartDate = new Date(newTmpDate);
        }        
    }

    tileClassName = ({date, view}) => {
        if (view === 'month') {
            var appointments = this.findAppointments(date);
            if (appointments.length > 0) {
                return CLASSNAME_APPOINTMENT_FOUND;
            }
        }          
    }

    onChange = (nextValue) => {
        this.setState(
            {
                currentDate: nextValue,
                weekAppointments: this.findAppointmentsOfWeek(nextValue),
                monthAppointments: this.findAppointmentsOfMonth(nextValue)
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

        return Array.from(uniqueSet);
    }

    findAppointmentsOfMonth(selectedDate) {
        var resultSet = new Set();        

        var selectedYear = selectedDate.getFullYear();
        var selectedMonth = selectedDate.getMonth() +1;        

        var yearData = this.state.appointments.get(selectedYear);
        if (yearData) {
            var monthData = yearData.get(selectedMonth);
            if (monthData) {
                // TODO: Iterate over map of the month and extract all      
                monthData.forEach(day => {
                    day.forEach(index => {
                        resultSet.add(index);
                    });
                });        
            }
        }

        return Array.from(resultSet);
    }

    findAppointmentsOfWeek(selectedDate) {
        var result = new Set();
        var currentDay = new Date(selectedDate);
        
        // Get first day of the week and begin with monday
        var firstWeekDay = selectedDate.getDate() - ((selectedDate.getDay() + 6) % 7);
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

    generateAllAppointmentsList() {
        var yearObjects = [];

        for (var [year, months] of this.state.appointments) {
            var monthsOfYear = [];
            for (var [month, days] of months) {
                var daysOfMonth = [];
                for (var [day, appointments] of days) {
                    var dayDate = new Date(year, month - 1, day);
                    var dayObject = <div>
                        <h4>{dayDate.toLocaleDateString()}</h4>
                        <dl>
                            {
                                Object.keys(appointments).map((key) => {
                                    var timeBlock = <TimeBlock appointment={appointments[key]}></TimeBlock>
                                    return (
                                        <dd key={key}>
                                            <div>
                                                <span>{appointments[key].props.name + ';'} {timeBlock}</span>
                                            </div>
                                        </dd>
                                    )
                                })
                            }
                        </dl>
                    </div>;
                    daysOfMonth.push(dayObject);
                }
                var monthObject = <div>                    
                    <h3>{(new Date(year, month - 1, 1)).toLocaleString('default', {month: 'long'})}</h3>
                    <dl>
                        {
                            Object.keys(daysOfMonth).map((key) => {
                                return (
                                    <dd key={key}>
                                        {daysOfMonth[key]}
                                    </dd>
                                )
                            })
                        }
                    </dl>
                </div>;
                monthsOfYear.push(monthObject);
            }

            var yearObject = <div>
                <h2>{year}</h2>
                <dl>
                    {
                        Object.keys(monthsOfYear).map((key) => {
                            return (
                                <dd key={key}>
                                    {monthsOfYear[key]}
                                </dd>
                            )
                        })
                    }
                </dl>
            </div>;
            yearObjects.push(yearObject);
        }

        return Object.keys(yearObjects).map((key) => {
            return (
                <dd key={key}>
                    {yearObjects[key]}
                </dd>
            )
        });
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
                                <dl>
                                    {
                                        Object.keys(this.state.weekAppointments).map((key) => {
                                            return (
                                                <dd key={key}>
                                                    {this.state.weekAppointments[key]}
                                                </dd>
                                            )
                                        })
                                    }
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Anstehende Termine des Monats:</h2>
                        <div>
                            <dl>
                                {
                                    /*TODO: Einrückung, Abstände, Formatierung */
                                    Object.keys(this.state.monthAppointments).map((key) => {
                                        return (
                                            <dd key={key}>
                                                {this.state.monthAppointments[key]}
                                            </dd>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                    <h1 className="text-color-green">Alle Termine</h1>
                    <div>
                        <dl>
                            {
                                this.generateAllAppointmentsList()
                            }
                        </dl>
                    </div>                    
                </div>
            </div>
        );
    }

}
