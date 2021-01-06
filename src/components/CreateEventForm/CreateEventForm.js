import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FormPicker from './FormPicker';
import { appointments } from '../../data/appointments';

const styles = {
    fab: {
        position: "absolute",
        bottom: 25,
        right: 25,
        zIndex: 1,
    },
};

class CreateEventForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            allDay: false,
            title: "",
            startDate: new Date(),
            endDate: new Date(),
            description: null,
        };
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    handleSubmit = () => {
        let appointment = {
            title: this.state.title,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        };
        this.handleClose();
    }

    setAllDay = () => {
        this.setState({ allDay: this.state.allDay ? false : true })
    }

    handleTextFieldInput = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleStartDateInput = (startDate) => {
        this.setState({ startDate });
    }

    handleEndDateInput = (endDate) => {
        this.setState({ endDate });
    }



    render() {
        const { classes } = this.props;
        console.log(this.state)
        return (
            <div>
                <Dialog
                    aria-labelledby="form-dialog-title"
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    fullWidth maxWidth="xs"
                >
                    <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
                    <DialogContent style={{ minHeight: "300px" }}>
                        <Grid container direction="column" spacing={2} justify="space-evenly">
                            <Grid item>
                                <TextField
                                    autoFocus
                                    required
                                    name="title"
                                    label="Title"
                                    onChange={this.handleTextFieldInput}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item key={this.state.allDay}>
                                {
                                    this.state.allDay
                                        ? <div>
                                            <Grid container direction="row" alignItems="center" justify="flex-start" spacing={2}>
                                                <Grid item style={{ minWidth: "55px" }}>
                                                    <Typography variant="body2" style={{ color: "#616161" }}>From</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <FormPicker currentDate={new Date()} handleFormChange={this.handleStartDateInput} allDay />
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" alignItems="center" justify="flex-start" spacing={2}>
                                                <Grid item style={{ minWidth: "55px" }}>
                                                    <Typography variant="body2" style={{ color: "#616161" }}>Until</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <FormPicker currentDate={new Date()} handleFormChange={this.handleEndDateInput} allDay />
                                                </Grid>
                                            </Grid>
                                        </div>
                                        : <div>
                                            <Grid container direction="row" alignItems="center" justify="flex-start" spacing={2}>
                                                <Grid item style={{ minWidth: "55px" }}>
                                                    <Typography variant="body2" style={{ color: "#616161" }}>From</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <FormPicker currentDate={new Date()} handleFormChange={this.handleStartDateInput} />
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" alignItems="center" justify="flex-start" spacing={2}>
                                                <Grid item style={{ minWidth: "55px" }}>
                                                    <Typography variant="body2" style={{ color: "#616161" }}>Until</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <FormPicker currentDate={new Date()} handleFormChange={this.handleEndDateInput} />
                                                </Grid>
                                            </Grid>
                                        </div>
                                }
                            </Grid>
                            <Grid container="row" justify="flex-start" style={{ margin: "10px 0" }}>
                                <Grid item style={{ marginLeft: "10px" }}>
                                    <FormControlLabel
                                        value="start"
                                        control={<Switch color="primary" size="small" onChange={this.setAllDay} />}
                                        label="All day"
                                    />
                                </Grid>
                                <Grid item style={{ marginLeft: "10px" }}>
                                    <FormControlLabel
                                        value="start"
                                        control={<Switch color="primary" size="small" />}
                                        label="Repeat"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                    defaultValue=" "
                                    onChange={this.handleFormChange}
                                    multiline rows="2"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.handleSubmit} color="primary" disableElevation>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
                <Tooltip title="Create Event" placement="left" aria-label="add">
                    <Fab color="primary" aria-label="add" style={styles.fab} onClick={this.handleOpen}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div >
        )
    }
}

export default CreateEventForm;