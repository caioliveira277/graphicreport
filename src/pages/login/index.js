import React from "react";
import FormLogin from "../../components/login";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { containerStyle } from "./styles";

toast.configure();
const customContainer = makeStyles(containerStyle());

export default function Login(props) {
  return (
    <Container maxWidth="sm" className={customContainer().root}>
      <Grid container justify="center" alignItems="center">
        <FormLogin props={props} />
      </Grid>
    </Container>
  );
}
