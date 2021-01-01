import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TopBar from './TopBar/TopBar';
import Calendar from './Calendar/Calendar';
import theme from './theme';
import 'fontsource-roboto';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentViewName: "Week",
        };
        this.currentViewNameChange = (event) => {
            this.setState({ currentViewName: event.currentTarget.title });
        }
    };

    render() {
        const { currentViewName } = this.state;
        console.log("App state: " + currentViewName);
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <header>
                        <TopBar currentViewName={currentViewName} currentViewNameChange={this.currentViewNameChange} />
                    </header>
                    <body>
                        <div style={{ margin: "15px" }} />
                        <Calendar currentViewName={currentViewName} />
                    </body>
                </ThemeProvider>
            </div>

        )
    }
}
