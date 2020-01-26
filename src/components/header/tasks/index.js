import React, { useState } from "react";
import { Fab, Drawer, Box, List, ListItem } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { TurnedIn, Check } from "@material-ui/icons";
import MaterialTable from "../../materialTable/index";
import ThemePicker from "../../themePicker/index";

export default function Tasks() {
  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    setState({ ...state, [side]: open });
  };

  return (
    <Box display="flex" justifyContent="flex-start">
      <Fab
        variant="extended"
        color="secondary"
        onClick={toggleDrawer("left", true)}
      >
        Tarefas
        <TurnedIn />
      </Fab>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <List>
          <Box mt={1} mb={1}>
            <Alert icon={<Check fontSize="inherit" />} severity="success">
              Salve aqui as suas terefas e anotações!
            </Alert>
          </Box>
          <ListItem>
            <MaterialTable />
          </ListItem>
          <ListItem>
            <ThemePicker />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
