import React, { useState } from "react";
import {
  withStyles,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Grid
} from "@material-ui/core";
import { switchDarkStyle } from "./styles";

const CustomSwitchDark = withStyles(switchDarkStyle())(Switch);

export default function ThemePicker() {
  const [state, setState] = useState({
    checkedDark: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Temas:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={
              <CustomSwitchDark
                checked={state.checkedA}
                onChange={handleChange("checkedDark")}
                value="checkedDark"
              />
            }
            label="Dark"
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
}
