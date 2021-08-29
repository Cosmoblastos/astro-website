import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {Theme} from '../components/App';

function App({ Component, pageProps }) {
  return <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default App
