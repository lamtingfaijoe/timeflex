import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
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
        this.props.currentDateChange(new Date().toISOString().slice(0, 10));
    }

    renderNavigator = () => {
        // return ();
    }

    renderDropdown = () => {
        const { anchorEl, currentViewName } = this.state;
        return (
            <div>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="outlined"
                    color="error"
                    size="small"
                    endIcon={<ArrowDropDownIcon />}
                    style={{ marginRight: "5px" }}
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
            </div >
        );
    }

    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="inherit" elevation={1}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" style={{ flexGrow: 1 }} color="primary">
                            TimeFlex
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginRight: "10px" }}
                            disableElevation size="small"
                            onClick={this.handleToday}
                        >
                            Today
                        </Button>
                        {this.renderDropdown()}
                        <Button size="small">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}

export default TopBar;