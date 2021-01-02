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
import { withStyles } from "@material-ui/core/styles";


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            currentDate: this.props.currentDate,
            currentViewName: this.props.currentViewName,
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
        // this.props.currentDateChange(new Date().toISOString().slice(0, 10));
        this.props.currentDateChange(new Date());
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

    renderNavigator = () => {
        return (
            <Fragment>
                <IconButton onClick={this.handleNavPrvs}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <Typography variant="p" style={{ color: "#757575" }}>
                </Typography>
                <IconButton onClick={this.handleNavNx}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Fragment>
        );
    }

    renderDropdown = () => {
        const { anchorEl, currentViewName } = this.state;
        return (
            <Fragment>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="outlined"
                    color="error"
                    size="small"
                    endIcon={<ArrowDropDownIcon />}
                    style={{ margin: "0 5px" }}
                >
                    {currentViewName}
                </Button >
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
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
                <AppBar position="fixed" color="inherit" elevation={1}>
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
                            {/* <Button size="small">Logout</Button> */}
                        </div>
                    </Toolbar>
                </AppBar>
            </Fragment >
        );
    }
}

export default TopBar;