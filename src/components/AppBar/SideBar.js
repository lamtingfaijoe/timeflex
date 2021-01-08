import React,{ useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        // alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function SideBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [currentViewName, setCurrentViewName] = useState(props.currentViewName)
    const [title,setTitle] = useState(null)
    const handleClickDay = () =>{
        
        props.currentViewNameChange("Day")
        
    }
    const handleClickWeek = () =>{
        
        props.currentViewNameChange("Week")
        
    }

    const handleClickMonth = () =>{
        
        props.currentViewNameChange("Month")
        
    }
    
    return (
        <div className={classes.root}>
            
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >   
                
                <div className={classes.drawerHeader}>
                <h2>TimeFlex {"   "}  </h2> 
                <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    
                    
                    
                </div>
                <Divider />
                <List>
                    <ListItem button key="Day View" style={{ color: '#848485' }} onClick={handleClickDay} value="Day">
                    <ListItemText primary="Day View" />
                    </ListItem>
                    
                    <ListItem button key="Week View" style={{ color: '#848485' }} onClick={handleClickWeek} value="Week">
                    <ListItemText primary="Week View" />
                    </ListItem>

                    <ListItem button key="Month View" style={{ color: '#848485' }} onClick={handleClickMonth} value="Month">
                    <ListItemText primary="Month View" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
