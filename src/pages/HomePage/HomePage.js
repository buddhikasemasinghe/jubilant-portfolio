import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    // gridList: {
    //     width: 500,
    //     height: 450,
    // },
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <Container my={2}>
            <Grid container>
                <Grid item xs={12} mt={2}>
                    <Box mt={2}>
                        <GridList cellHeight={450}>
                            <GridListTile style={{width: '100%'}}>
                                <img src="https://i.picsum.photos/id/871/1600/1400.jpg"/>
                            </GridListTile>
                        </GridList>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box m={2}>
                        <Typography variant="h3" align="center">
                            Experienced Software Engineer
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Box m={2}>
                        <Button variant="contained" color="primary">
                            My Experience
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default HomePage;
