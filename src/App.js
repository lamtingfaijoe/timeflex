import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TopBar from './components/TopBar';
import Calendar from './components/Calendar/Calendar';
import theme from './components/theme';
import 'fontsource-roboto';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            // currentDate: new Date().toISOString().slice(0, 10),
            currentViewName: "Week",
        };
        this.currentDateChange = this.currentDateChange.bind(this);
        this.currentViewNameChange = this.currentViewNameChange.bind(this);
    };

    currentDateChange = (currentDate) => { this.setState({ currentDate }); }

    currentViewNameChange = (currentViewName) => { this.setState({ currentViewName }); }

    render() {
        const { currentDate, currentViewName } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <header>
                    <TopBar
                        key={currentViewName + currentDate}
                        currentDate={currentDate}
                        currentViewName={currentViewName}
                        currentViewNameChange={this.currentViewNameChange}
                        currentDateChange={this.currentDateChange}
                    />
                </header>
                <body>
                    <div style={{ margin: "60px" }} />
                    <Calendar
                        key={currentViewName + currentDate}
                        currentDate={currentDate}
                        currentViewName={currentViewName}
                    />
                </body>
            </ThemeProvider>
        );
    }
}
