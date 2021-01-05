import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import InputAdornment from '@material-ui/core/InputAdornment';
import DescriptionIcon from '@material-ui/icons/Description';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FormPicker from './FormPicker';
import TodayIcon from '@material-ui/icons/Today';

const styles = {
    fab: {
        position: "absolute",
        bottom: 25,
        right: 25,
        zIndex: 1,
    },
};

export default class CreateEventForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            allDay: false,
        };
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    setAllDay = () => {
        this.setState({ allDay: this.state.allDay ? false : true })
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
                    <DialogContent>
                        <form>
                            <Grid container direction="column" spacing={2} justify="space-evenly">
                                <Grid item>
                                    <TextField
                                        autoFocus
                                        required
                                        id="title"
                                        label="Title"
                                    />
                                </Grid>
                                <Grid item>
                                    {
                                        this.state.allDay
                                            ? <Grid container direction="row" alignItems="center" justify="flex-start">
                                                <Grid item>
                                                    <Typography variant="body2" style={{ color: "#616161" }}>All day</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <FormPicker currentDate={new Date()} allDay />                                                </Grid>
                                            </Grid>
                                            : <div>
                                                <Grid container direction="row" alignItems="center" justify="space-between">
                                                    <Grid item>
                                                        <Typography variant="body2" style={{ color: "#616161" }}>From</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <FormPicker currentDate={new Date()} />
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" alignItems="center" justify="space-between">
                                                    <Grid item>
                                                        <Typography variant="body2" style={{ color: "#616161" }}>Until</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <FormPicker currentDate={new Date()} />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                    }
                                </Grid>
                                <Grid item>
                                    <FormControlLabel
                                        value="start"
                                        control={<Switch color="primary" onChange={this.setAllDay} />}
                                        label="All day"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Description" multiline rows="2" variant="outlined" defaultValue=" " />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.handleClose} color="primary" disableElevation>
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
