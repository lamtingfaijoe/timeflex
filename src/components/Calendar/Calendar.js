import React, { Component } from 'react';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    AllDayPanel,
    DayView,
    WeekView,
    MonthView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    EditRecurrenceMenu,
    ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import DayScaleCell from './DayScaleCell';
import TimeTableCell from './TimeTableCell';
import appointments from '../../data/today-appointments';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight - 80,
            data: appointments,
            addedAppointment: {},
            appointmentChanges: {},
            editingAppointment: undefined,
            currentDate: this.props.currentDate,
            currentViewName: this.props.currentViewName,
        };
        this.commitChanges = this.commitChanges.bind(this);
        this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
        this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
        this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ height: window.innerHeight });
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
        return (
            <Scheduler
                data={this.state.data}
                height={window.innerHeight - 70}
                firstDayOfWeek={1}
            >
                <ViewState
                    currentDate={this.state.currentDate}
                    currentViewName={this.state.currentViewName}
                />
                <EditingState
                    onCommitChanges={this.commitChanges}
                    addedAppointment={this.state.addedAppointment}
                    onAddedAppointmentChange={this.changeAddedAppointment}
                    appointmentChanges={this.state.appointmentChanges}
                    onAppointmentChangesChange={this.changeAppointmentChanges}
                    editingAppointment={this.state.editingAppointment}
                    onEditingAppointmentChange={this.changeEditingAppointment}
                />
                <DayView
                    startDayHour={9}
                    endDayHour={22}
                />
                <WeekView
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                    startDayHour={9}
                    endDayHour={22}
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
