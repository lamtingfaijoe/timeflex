import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, WeekView, MonthView, Toolbar, DateNavigator, Appointments, TodayButton, ViewSwitcher } from '@devexpress/dx-react-scheduler-material-ui';
import appointments from './data/today-appointments';


export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
        };
    }


    render() {
        const { data, currentDate } = this.state;

        return (
            <Scheduler
                data={data}
                height={660}
            >
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={this.currentDateChange}
                    defaultCurrentViewName="Week"
                />
                <DayView
                    startDayHour={8}
                    endDayHour={13}
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <ViewSwitcher />
                <Appointments />
            </Scheduler>
        );
    }
}
