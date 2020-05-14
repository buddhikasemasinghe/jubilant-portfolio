import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    input: {
        height: 300
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <Container my={2}>
            <Grid container>
                <Grid item xs={6}>
                    dfd
                </Grid>
                <Grid item xs={6}>
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
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Contact;
