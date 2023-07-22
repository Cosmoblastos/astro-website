import { createTheme } from '@material-ui/core';

const Theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            "Lato"
        ].join(','),
        h1: {
            fontFamily: 'Kanit',
            fontStyle: 'normal',
        },
        h3: {
            fontFamily: 'Kanit',
            fontWeight: 600,
            fontSize: '2rem',
            fontStyle: 'normal'
        }
    },
    palette: {
        primary: {
            main: "#F2DEA2"
        },
        secondary: {
            main: '#274b72'
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
                borderRadius: '20px',
                fontWeight: 'bold',
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