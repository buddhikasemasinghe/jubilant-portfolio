import React, {useEffect, useRef, useState} from 'react';
import {useScrollTrigger} from "@material-ui/core";
import * as PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import green from "@material-ui/core/colors/green";
import {ThemeProvider} from "@material-ui/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppHeader from "./components/Header/AppHeader";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import MySkills from "./pages/MySkills/MySkills";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c1a1a'
        },
        secondary: {
            main: '#f6f1f1'
        },
        text: green
    },
    status: {
        danger: 'orange',
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));


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

const App = (props) => {
    const homePageRef = useRef(null);
    const contactPageRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    const pageRefs = [
        {
            ref: homePageRef,
            title: 'Home'
        }, {
            ref: aboutRef,
            title: 'About Me'
        }, {
            ref: skillsRef,
            title: 'My Skills'
        }, {
            ref: contactPageRef,
            title: 'Contact'
        }];
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <ElevationScroll {...props}>
                    <AppHeader pageRef={pageRefs}/>
                </ElevationScroll>
                <Toolbar/>
                <HomePage ref={homePageRef}/>
                <MySkills ref={skillsRef}/>
                <AboutMe ref={aboutRef}/>
                <Contact ref={contactPageRef}/>
            </ThemeProvider>
        </div>
    );
}

export default App;
