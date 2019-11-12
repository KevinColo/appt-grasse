import * as React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';
import 'moment/locale/fr'

export default class MyCalendar extends React.Component {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null
    };
    render() {
        return (
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                minimumNights={2}
                startDatePlaceholderText="Début"
                endDatePlaceholderText="Fin"
                numberOfMonths={1}
                displayFormat={() => moment.localeData('fr').longDateFormat('L')}
            />
        );
      }
}
