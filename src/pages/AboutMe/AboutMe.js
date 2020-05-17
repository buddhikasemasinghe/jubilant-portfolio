import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'black'
    },
    cardImage :{
        maxHeight: 750,
        minHeight: 500
    },
    card: {
        marginBottom: '10px'
    }
});

const AboutMe = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <Container className={classes.root} ref={ref}>
            <Grid container spacing={3}>
                <Grid sm={6} item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.cardImage}
                                image="https://i.picsum.photos/id/123/4928/3264.jpg"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sm={6} item>

                </Grid>
            </Grid>
        </Container>
    )
})

export default AboutMe;
