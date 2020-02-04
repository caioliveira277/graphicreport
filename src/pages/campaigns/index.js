import React from "react";
import { Container, Grid } from "@material-ui/core";
import FormCampaign from "../../components/campaigns/formCampaign";

export default function Campaigns() {
  return (
    <Container fixed>
      <Grid container spacing={5} justify="center">
        <Grid item xs={6}>
          <FormCampaign />
        </Grid>
      </Grid>
    </Container>
  );
}
