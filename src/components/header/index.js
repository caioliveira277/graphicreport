import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ManagerTasks from "./cardStart/managerTasks";
import Tab from "./cardMiddle/tab";
import CardCurrentUser from "./cardEnd/currentUser";
import Notifications from "./cardEnd/notifications";
import { headerStyle } from "./styles";

const headerCustom = makeStyles(theme => headerStyle(theme));

export default function Header() {
  return (
    <header className={headerCustom().root}>
      <Grid container>
        <Grid item xs={6} lg={2}>
          <ManagerTasks />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Tab />
        </Grid>
        <Grid item xs={6} lg={2}>
          <Notifications />
          <CardCurrentUser />
        </Grid>
      </Grid>
    </header>
  );
}
