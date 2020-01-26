import React from "react";
import Tab from "./tab/index";
import CardUser from "./cardUser/index";
import Tasks from "./tasks/index";
import { makeStyles, Grid } from "@material-ui/core";
import { headerStyle } from "./styles";

const headerCustom = makeStyles(headerStyle());

export default function Header() {
  return (
    <header className={headerCustom().root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Tasks />
        </Grid>
        <Grid item xs className="tab">
          <Tab />
        </Grid>
        <Grid item xs>
          <CardUser />
        </Grid>
      </Grid>
    </header>
  );
}
