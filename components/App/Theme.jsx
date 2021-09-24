import { createTheme } from '@material-ui/core';

const Theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            "Lato"
        ].join(',')
    },
    palette: {
        primary: {
            main: "#fff"
        },
        secondary: {
            main: '#79d7f7'
        },
        text: {
            primary: '#fff'
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: '#000'
                }
            }
        },
        MuiButton: {
            contained: {
            },
            containedPrimary: {
            }
        },
        MuiCard: {
            root: {
                boxShadow: 'none'
            }
        }
    }
});

export { Theme }

export default { Theme }