import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            currentViewName: props.currentViewName,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = (event, props) => {
        this.setState({
            anchorEl: null,
        });
        if (event.currentTarget.title) {
            props.currentViewNameChange(event);
        }
    };

    // handleClose = (event) => {
    //     event.currentTarget.id ? this.setState({
    //         anchorEl: null,
    //         currentViewName: event.currentTarget.id,
    //     }) : this.setState({
    //         anchorEl: null,
    //     })
    // };

    render() {
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

}