import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardImage :{
        maxHeight: 750,
        minHeight: 500
    }
});

const AboutMe = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sm={6} item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.cardImage}
                                image="https://i.picsum.photos/id/123/4928/3264.jpg"
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sm={6} item>

                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMe;
