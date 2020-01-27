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

  const dataTable = {
    columns: [
      { title: "Nome", field: "name" },
      { title: "Descrição", field: "description" },
      { title: "Finalizar em", field: "finishIn", type: "date" },
      {
        title: "Prioridade",
        field: "priority",
        lookup: { 34: "Simples", 63: "Urgente" }
      }
    ],
    data: [
      {
        name: "Projeto 1",
        description: "loren loren loren y",
        finishIn: "01/12/2019",
        priority: 63
      }
    ],
    title: "Tarefas",
    editable: true
  };

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
            <MaterialTable data={dataTable} />
          </ListItem>
          <ListItem>
            <ThemePicker />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
