import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dropdown from './Dropdown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const TopBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" elevation={1}>
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title} color="primary">
                        TimeFlex
                    </Typography>
                    <Button size="small">Logout</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default TopBar;