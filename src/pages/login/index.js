import React from "react";
import FormLogin from "../../components/login";
import "./styles.css";
import { Container, Grid } from "@material-ui/core";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="center">
        <FormLogin />
      </Grid>
    </Container>
  );
}
