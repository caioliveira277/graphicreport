import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  AssignmentTurnedInRounded,
  BarChartRounded,
  PeopleAltRounded,
  PostAddRounded,
  TrendingUpRounded
} from "@material-ui/icons";
import { Box, Tabs, Tab as TabElement } from "@material-ui/core";

const page = {
  "/": 0,
  "/campaigns": 1,
  "/clients": 2,
  "/editions": 3,
  "/active": 4,
}
export default function Tab() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const current = history.location.pathname.split("/")[2];
    setValue(page[`/${current}`]);
  },[history])


  const handleChange = (event, newValue) => {
    setValue(newValue);
    var action = event.currentTarget.getAttribute("data-action");
    history.push(`/app${action}`);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
      >
        <TabElement
          label="Geral"
          data-action="/"
          icon={<AssignmentTurnedInRounded />}
        />
        <TabElement
          label="Campanhas"
          data-action="/campaigns"
          icon={<BarChartRounded />}
        />
        <TabElement
          label="Clientes"
          data-action="/clients"
          icon={<PeopleAltRounded />}
        />
        <TabElement
          label="Edições"
          data-action="/editions"
          icon={<PostAddRounded />}
        />
        <TabElement
          label="Ativo"
          data-action="/active"
          icon={<TrendingUpRounded />}
        />
      </Tabs>
    </Box>
  );
}
