import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { TurnedIn, DoneRounded, PriorityHighRounded } from "@material-ui/icons";
import { cardStyle } from "./styles";

const customCard = makeStyles(cardStyle());

export default function RecipeReviewCard() {
  return (
    <Card className={customCard().card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={customCard().avatar}>
            <PriorityHighRounded />
          </Avatar>
        }
        action={
          <IconButton>
            <TurnedIn />
          </IconButton>
        }
        title="Tarefa"
        subheader="30 de Janeiro, 2020"
      />
      <CardMedia
        className={customCard().media}
        image="https://miro.medium.com/max/5250/1*8ygFKYb0Yo6Hc-vnScGA9A.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <DoneRounded />
        </IconButton>
      </CardActions>
    </Card>
  );
}
