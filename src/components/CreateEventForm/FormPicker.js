import format from 'date-fns/format';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker, DatePicker } from '@material-ui/pickers';

export default class FormPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.props.currentDate,
            currentViewName: "Day",
            pickerIsOpen: false,
            allDay: true,
        };
    }

    setPicker = (pickerIsOpen) => {
        this.setState({ pickerIsOpen });
    }

    handleDateChange = (currentDate) => {
        this.setState({ currentDate });
    }

    render() {
        return (
            <div>
                {
                    this.state.pickerIsOpen
                        ?
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            {
                                this.state.allDay
                                    ? <DatePicker
                                        variant="dialog"
                                        margin="small"
                                        value={this.state.currentDate}
                                        onChange={this.handleDateChange}
                                        open={this.state.pickerIsOpen}
                                        onOpen={() => { this.setPicker(true) }}
                                        onClose={() => { this.setPicker(false) }}
                                        KeyboardButtonProps={{ 'aria-label': 'change date', }}
                                        disablePast
                                        showTodayButton
                                    />
                                    : <DateTimePicker
                                        variant="dialog"
                                        margin="small"
                                        value={this.state.currentDate}
                                        onChange={this.handleDateChange}
                                        open={this.state.pickerIsOpen}
                                        onOpen={() => { this.setPicker(true) }}
                                        onClose={() => { this.setPicker(false) }}
                                        KeyboardButtonProps={{ 'aria-label': 'change date', }}
                                        disablePast
                                        showTodayButton
                                    />
                            }

                        </MuiPickersUtilsProvider>
                        : <Button
                            onClick={() => { this.setPicker(true) }}
                            style={{ color: "#424242" }}
                        >
                            {format(this.state.currentDate, 'Pp')}
                        </Button>
                }
            </div>
        )
    }
}
