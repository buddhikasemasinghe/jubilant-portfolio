import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginLeft: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(4)
    },
    fullList: {
        width: 'full'
    },
    paperAnchorTop: {
        top: '60px',
        background: '#efd6d6'
    }
}));


const AppHeader = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        menu: false
    });
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, menu: open });
    };
    const menuNames = ['Home', 'About Me', 'My Skills', 'Contact'];
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Buddhika Semasinghe</Typography>
                <Hidden lgUp>
                    <IconButton edge="end"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="top"
                            open={state['menu']}
                            onClose={toggleDrawer(false)}
                            classes={{paperAnchorTop: classes.paperAnchorTop}}>
                        <div className={classes.fullList} role="presentation">
                            <List>
                                {menuNames.map((text,index) => (
                                    <ListItem button key={text}>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                    ))}
                            </List>
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    {menuNames.map((text,index) => (
                        <Button key={index} color="inherit">{text}</Button>
                    ))}
                </Hidden>
            </Toolbar>
        </AppBar>
    )
};

export default AppHeader;
