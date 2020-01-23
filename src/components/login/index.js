import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { AccountCircle, VpnKey } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CustomStep from "./stepsStyles";
import "./styles.css";

const useStyles = makeStyles(theme => CustomStep(theme));

export default function FormLogin() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Seu nome de usário", "Sua senha", "Pronto!"];

  const HandleBlur = e => {
    var target = e.target;
    if(target.value && target.name === "username"){
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }else if(target.value && target.name === "password"){
      
    }
  };
  return (
    <form id="formLogin">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField name="username" label="Nome de usuário" onBlur={HandleBlur} />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <VpnKey />
        </Grid>
        <Grid item>
          <TextField name="password" type="password" label="Senha" onBlur={HandleBlur} />
        </Grid>
      </Grid>
    </form>
  );
}
