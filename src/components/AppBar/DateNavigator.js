import format from 'date-fns/format';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Picker from './Picker';

export default class DateNavigator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.props.currentDate,
            currentViewName: this.props.currentViewName,
            pickerIsOpen: false,
        };
    }

    setPicker = (pickerIsOpen) => {
        this.setState({ pickerIsOpen });
    }

    handlerPickerDate = (date) => {
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

    render() {
        return (
            <Grid container direction="row" alignItems="center">
                <IconButton onClick={this.handleNavPrvs}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <Picker
                    key={this.state.currentDate + this.currentViewName}
                    currentDate={this.state.currentDate}
                    currentViewName={this.state.currentViewName}
                    handleSelectedDate={this.props.currentDateChange}
                />
                <IconButton onClick={this.handleNavNx}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Grid>
        )
    }
}
