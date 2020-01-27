import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { ChartBoundaries, ChartPie } from "../../components/charts";
import RecipeReviewCard from "../../components/cardTask";
import { gridStyle } from "./styles";

const customGrid = makeStyles(gridStyle());

export default function Home() {
  return (
    <Container fixed>
      <Grid container spacing={5}>
        <Grid item xs>
          <ChartBoundaries />
        </Grid>
        <Grid item xs>
          <ChartPie />
        </Grid>
      </Grid>
      <Grid container spacing={5} className={customGrid().root}>
        <Grid item xs>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </Container>
  );
}
