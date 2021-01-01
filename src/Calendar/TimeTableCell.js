import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Scheduler, WeekView } from '@devexpress/dx-react-scheduler-material-ui';

const useStyles = makeStyles(theme => ({
    weekendCell: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        '&:hover': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        },
        '&:focus': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        },
    },
    weekend: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
}));

const TimeTableCell = (props) => {
    const classes = useStyles();
    const { startDate } = props;
    const date = new Date(startDate);

    if (date.getDate() === new Date().getDate()) {
        return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
        return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
    } return <WeekView.TimeTableCell {...props} />;
};

export default TimeTableCell;