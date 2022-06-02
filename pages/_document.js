/*_document.jsx*/
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';

class MyDocument extends Document {
    constructor(props) {
        super(props);
    }

    static getInitialProps = async (ctx) => {
        const sheets = new ServerStyleSheets(),
            originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props => sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            style: sheets.toString(),
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
        };
    }

    render() {
        return <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
                <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> 
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    }
}

export default MyDocument;