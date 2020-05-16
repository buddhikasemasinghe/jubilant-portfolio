import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    cardImage :{
        maxHeight: 550,
        minHeight: 400
    }
});

const MySkills = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box m={2}>
                        <Typography variant="h4" align="center" color={"secondary"}>
                            What I do
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container xs={12} spacing={1}>
                    <Grid lg={4} item>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.cardImage}
                                    image="https://i.picsum.photos/id/1062/800/600.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Design
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Software Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid lg={4} item>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.cardImage}
                                    image="https://i.picsum.photos/id/118/1500/1000.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Development
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Cloud first development
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid lg={4} item>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.cardImage}
                                    image="https://i.picsum.photos/id/1084/4579/3271.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Maintenance
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        CI/CD
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Box m={2}>
                        <Button variant="contained" color="secondary">
                            More about me..
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MySkills;
