import React, { useState } from "react";
import {
  AssignmentTurnedInRounded,
  BarChartRounded,
  PeopleAltRounded,
  PostAddRounded,
  TrendingUpRounded
} from "@material-ui/icons";
import { Box, Tabs, Tab as TabElement } from "@material-ui/core";

export default function Tab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
      >
        <TabElement label="Geral" icon={<AssignmentTurnedInRounded />} />
        <TabElement label="Graficos" icon={<BarChartRounded />} />
        <TabElement label="Clientes" icon={<PeopleAltRounded />} />
        <TabElement label="Edições" icon={<PostAddRounded />} />
        <TabElement label="Ativos" icon={<TrendingUpRounded />} />
      </Tabs>
    </Box>
  );
}
