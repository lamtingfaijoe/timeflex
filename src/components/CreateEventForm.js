import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
            isOpen: false,
        };
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="name"
                            label="Add title"
                            fullWidth
                        />
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
            </div>
        )
    }
}
