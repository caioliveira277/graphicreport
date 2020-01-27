import React, { useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import Boundaries from "./boundaries";
import Pie from "./pie";

function ChartBoundaries(getData) {
  useEffect(() => {
    Boundaries();
    Pie();
  }, []);

  return (
    <Card>
      <CardContent>
        <canvas id="boundaries" height="300"></canvas>
      </CardContent>
    </Card>
  );
}
function ChartPie(getData) {
  useEffect(() => {
    Pie();
  }, []);

  return (
    <Card>
      <CardContent>
        <canvas id="pie" height="160"></canvas>
      </CardContent>
    </Card>
  );
}
export { ChartBoundaries, ChartPie };
