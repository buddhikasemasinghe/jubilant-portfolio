import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#a47f6c'
    },
    input: {
        height: 300
    },
}));

const Contact = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <Container className={classes.root} ref={ref}>
            <Grid container spacing={3}>
                <Grid item lg={6}>
                    <Box m={4}>
                        <Typography variant="h3" align="center" color={"secondary"}>
                            Contact
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} color="secondary">
                    <Box m={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    style={{margin: 8}}
                                    placeholder="Enter your name"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    style={{margin: 8}}
                                    placeholder="Enter your email"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subject"
                                    style={{margin: 8}}
                                    placeholder="Add a subject"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    label="Message"
                                    style={{margin: 8}}
                                    fullWidth
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
});

export default Contact;
