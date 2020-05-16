import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
    button: {
        minHeight: '70px',
        minWidth: '300px',
    },
    cardImage :{
        maxHeight: 550,
        height: 450
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <Container my={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} mt={2}>
                    <Box mt={2}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.cardImage}
                                    image="https://i.picsum.photos/id/871/1600/1400.jpg"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box m={1}>
                        <Typography variant="h3" align="center" color={"secondary"}>
                           I  <FavoriteIcon fontSize={"large"} /> programming  <SentimentSatisfiedTwoToneIcon fontSize={"large"}/>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Box m={1}>
                        <Button variant="contained" color="secondary" size={"large"} className={classes.button}>
                            My Skills
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default HomePage;
