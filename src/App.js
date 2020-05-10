import React from 'react';
import './App.css';
import {useScrollTrigger} from "@material-ui/core";
import * as PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main :'#1c1a1a'
        },
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function App(props) {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <ElevationScroll {...props}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6">Buddhika Semasinghe</Typography>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar/>
                <Container>
                    <Box my={2}>
                        {[...new Array(120)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;