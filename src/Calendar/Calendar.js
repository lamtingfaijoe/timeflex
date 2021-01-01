import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    AllDayPanel,
    DayView,
    WeekView,
    MonthView,
    DateNavigator,
    Toolbar,
    CurrentTimeIndicator,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    TodayButton,
    ViewSwitcher,
    EditRecurrenceMenu,
    ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import DayScaleCell from './DayScaleCell';
import TimeTableCell from './TimeTableCell';
import appointments from './data/today-appointments';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
            addedAppointment: {},
            appointmentChanges: {},
            editingAppointment: undefined,
            currentViewName: this.props.currentViewName,
        };
        this.commitChanges = this.commitChanges.bind(this);
        this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
        this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
        this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
    }

    changeAddedAppointment(addedAppointment) {
        this.setState({ addedAppointment });
    }

    changeAppointmentChanges(appointmentChanges) {
        this.setState({ appointmentChanges });
    }

    changeEditingAppointment(editingAppointment) {
        this.setState({ editingAppointment });
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        console.log("Calendar state " + this.state.currentViewName);
        console.log("Calendar props " + this.props.currentViewName);
        const {
            currentDate,
            currentViewName,
            data,
            addedAppointment,
            appointmentChanges,
            editingAppointment,
        } = this.state;
        return (
            <Scheduler
                data={data}
                height={670}
                firstDayOfWeek={1}
            >
                <ViewState
                    currentDate={currentDate}
                    currentViewName={currentViewName}
                />
                <EditingState
                    onCommitChanges={this.commitChanges}
                    addedAppointment={addedAppointment}
                    onAddedAppointmentChange={this.changeAddedAppointment}
                    appointmentChanges={appointmentChanges}
                    onAppointmentChangesChange={this.changeAppointmentChanges}
                    editingAppointment={editingAppointment}
                    onEditingAppointmentChange={this.changeEditingAppointment}
                />
                <DayView />
                <WeekView
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                />
                <MonthView />
                <AllDayPanel />
                <EditRecurrenceMenu />
                <ConfirmationDialog />
                <Appointments />
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                    showDeleteButton
                />
                <AppointmentForm />
            </Scheduler>
        );
    }
}
