import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { gridStyle } from "./styles";

const customGrid = makeStyles(gridStyle());

export default function Home() {
  return (
    <Container fixed>
        <Grid item xs={12} className={customGrid().root}>
          <h1>Home</h1>
        </Grid>
    </Container>
  );
}
