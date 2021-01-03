import format from 'date-fns/format';
import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TodayIcon from '@material-ui/icons/Today';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker, } from '@material-ui/pickers';


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            currentDate: this.props.currentDate,
            currentViewName: this.props.currentViewName,
            pickerIsOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = (event) => {
        this.setState({
            anchorEl: null,
        });
        if (event.currentTarget.title) {
            this.props.currentViewNameChange(event.currentTarget.title);
        }
    };

    handleToday = () => {
        this.props.currentDateChange(new Date());
    }

    setPicker = (bool) => {
        this.setState({
            pickerIsOpen: bool,
        });
    }

    handlePickerDate = (date) => {
        this.props.currentDateChange(date);
    }

    handleNavNx = () => {
        let date = new Date(this.state.currentDate);
        if (this.state.currentViewName === "Day") {
            date.setDate(date.getDate() + 1);
        }
        if (this.state.currentViewName === "Week") {
            date.setDate(date.getDate() + 7);
        }
        if (this.state.currentViewName === "Month") {
            date.setDate(date.getMonth() + 1);
        }
        this.props.currentDateChange(date);
    }

    handleNavPrvs = () => {
        let date = new Date(this.state.currentDate);
        if (this.state.currentViewName === "Day") {
            date.setDate(date.getDate() - 1);
        }
        if (this.state.currentViewName === "Week") {
            date.setDate(date.getDate() - 7);
        }
        if (this.state.currentViewName === "Month") {
            date.setDate(date.getMonth() - 1);
        }
        this.props.currentDateChange(date);
    }

    renderPicker = () => {
        let pickerFormat = "MMMM yyyy";
        let date = format(this.state.currentDate, 'MMMM yyyy');
        if (this.state.currentViewName === "Day") {
            pickerFormat = "d MMMM yyyy";
            date = format(this.state.currentDate, 'd MMMM yyyy');
        }
        return (
            <div>
                {
                    this.state.pickerIsOpen
                        ? <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                variant="dialog"
                                format={pickerFormat}
                                margin="small"
                                value={this.state.currentDate}
                                onChange={this.handlePickerDate}
                                open={this.state.pickerIsOpen}
                                onOpen={() => { this.setPicker(true) }}
                                onClose={() => { this.setPicker(false) }}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        : <Button
                            endIcon={<TodayIcon />}
                            onClick={() => { this.setPicker(true) }}
                            style={{ margin: "0 10px", color: "#616161" }}
                        >
                            {date}
                        </Button>
                }
            </div>
        );
    }

    renderNavigator = () => {
        return (
            <Fragment style={{ margin: "0 5px" }}>
                <IconButton onClick={this.handleNavPrvs}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                {this.renderPicker()}
                <IconButton onClick={this.handleNavNx}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Fragment >
        );
    }

    renderDropdown = () => {
        return (
            <Fragment>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="outlined"
                    size="small"
                    endIcon={<ArrowDropDownIcon />}
                    style={{ margin: "0 5px" }}
                >
                    {this.state.currentViewName}
                </Button >
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem title="Day" onClick={this.handleClose}>Day</MenuItem>
                    <MenuItem title="Week" onClick={this.handleClose}>Week</MenuItem>
                    <MenuItem title="Month" onClick={this.handleClose}>Month</MenuItem>
                </Menu>
            </Fragment >
        );
    }

    render() {
        return (
            <Fragment>
                <AppBar color="inherit" elevation={0}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="primary" style={{ flexGrow: 1 }}>
                            TimeFlex
                        </Typography>
                        {this.renderNavigator()}
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ margin: "0 5px" }}
                                disableElevation size="small"
                                onClick={this.handleToday}
                            >
                                Today
                            </Button>
                            {this.renderDropdown()}
                        </div>
                    </Toolbar>
                </AppBar>
            </Fragment >
        );
    }
}

export default TopBar;