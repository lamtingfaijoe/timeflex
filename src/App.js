import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import 'fontsource-roboto';
import TopBar from './TopBar/TopBar';
import Calendar from './Calendar/Calendar';
import theme from './theme';

export default class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <header>
                        <TopBar />
                    </header>
                    <body>
                        <div style={{ margin: "10px" }}>
                            <Calendar />
                        </div>
                    </body>
                </ThemeProvider>
            </div>

        )
    }
}
