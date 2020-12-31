import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4791db',
            main: '#1976d2',
            dark: '#115293',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#000',
        },
    },
});

export default theme;