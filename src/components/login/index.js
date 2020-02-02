import React, { useState } from "react";
import { AccountCircle, VpnKey } from "@material-ui/icons";
import {
  Stepper,
  Step,
  StepLabel,
  makeStyles,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import Validation from "./validation";
import { formStyle, stepStyle } from "./styles";

const customForm = makeStyles(formStyle());
const customStep = makeStyles(stepStyle());

export default function FormLogin({ props }) {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const steps = ["Nome de usário", "Senha secreta", "Entrar!"];

  const handleSubmit = e => {
    e.preventDefault();
    Validation(form).then(res => {
      if (res === true) {
        setActiveStep(3);
        props.history.push("/app/");
      }
    });
  };

  const handleKeyUp = e => {
    if (form.username) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
    if (form.username && form.password) {
      setActiveStep(2);
    } else if (form.username && !form.password) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <Stepper
        activeStep={activeStep}
        className={customStep().root}
        alternativeLabel
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form className={customForm().root} onSubmit={handleSubmit}>
        <Grid container spacing={1} alignItems="center" justify="center" mt={1}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              name="username"
              label="Nome de usuário"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              autoFocus
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item>
            <VpnKey />
          </Grid>
          <Grid item>
            <TextField
              name="password"
              type="password"
              label="Senha"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Grid>
      </form>
    </>
  );
}
