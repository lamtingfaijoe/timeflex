import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            view: "week",
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
            view: event.currentTarget.id,
        })
    };

    render() {
        console.log("hi:" + this.state.view)
        return (
            <div>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="outlined"
                    color="primary"
                    size="small"
                >
                    {this.state.view}
                </Button >
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem id="day" onClick={this.handleClose}>Day</MenuItem>
                    <MenuItem id="week" onClick={this.handleClose}>Week</MenuItem>
                    <MenuItem id="month" onClick={this.handleClose}>Month</MenuItem>
                </Menu>
            </div >
        );
    }

}