import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Calendar from './components/Calendar/Calendar';
import Dropdown from './components/AppBar/Dropdown';
import DateNavigator from './components/AppBar/DateNavigator';
import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import SideBar from './components/AppBar/SideBar';
import theme from './components/theme';
import 'fontsource-roboto';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            currentViewName: "Week",
            drawerOpen: false,
        };
        this.currentDateChange = this.currentDateChange.bind(this);
        this.currentViewNameChange = this.currentViewNameChange.bind(this);
    };

    currentDateChange = (currentDate) => { this.setState({ currentDate }); }

    currentViewNameChange = (currentViewName) => { this.setState({ currentViewName }); }

    handleDrawerOpen = () => {
        this.setState({ drawerOpen: true })
    }

    handleDrawerClose = () => {
        this.setState({ drawerOpen: false })
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <header>
                    <AppBar color="inherit" elevation={1}>
                        <Toolbar variant="dense">
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                                spacing="1"
                            >
                                <Grid item>
                                    <Hidden xsDown>
                                        <Typography variant="h6" style={{ color: "#616161" }}>
                                            TimeFlex
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={this.handleDrawerOpen}
                                            edge="start"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    </Hidden>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="center"
                                        spacing="1"
                                    >
                                        <Grid item>
                                            <DateNavigator
                                                key={this.state.currentDate + this.state.currentViewName}
                                                currentDate={this.state.currentDate}
                                                currentViewName={this.state.currentViewName}
                                                currentDateChange={this.currentDateChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                onClick={() => { this.currentDateChange(new Date()) }}
                                            >
                                                Today
                                    </Button>
                                        </Grid>
                                        <Grid item>
                                            <Hidden xsDown>
                                                <Dropdown
                                                    key={this.state.currentViewName}
                                                    currentViewName={this.state.currentViewName}
                                                    currentViewNameChange={this.currentViewNameChange}
                                                />
                                            </Hidden>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </header>
                <body style={{ margin: "0px" }}>
                    <div style={{ margin: "55px 0" }} />
                    <CreateEventForm />
                    <Calendar
                        key={this.state.currentViewName + this.state.currentDate}
                        currentDate={this.state.currentDate}
                        currentViewName={this.state.currentViewName}
                    />
                    <SideBar
                        drawerOpen={this.state.drawerOpen}
                        handleDrawerClose={this.handleDrawerClose}
                        currentViewNameChange={this.currentViewNameChange}
                    />
                </body>
            </ThemeProvider >
        );
    }
}
