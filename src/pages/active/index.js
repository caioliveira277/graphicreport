import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Typography
} from "@material-ui/core";
import { ThumbUpAltRounded } from "@material-ui/icons";
import MaterialTable from "../../components/materialTable";
import Feedback from "../../components/feedback";
import { gridStyle } from "./styles";

const customGrid = makeStyles(gridStyle());

const dataTable = {
  columns: [
    {
      title: "Avatar",
      field: "imageUrl",
      render: rowData => (
        <img
          src={rowData.imageUrl}
          alt=""
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
      )
    },
    { title: "Cliente", field: "client" },
    { title: "Link", field: "link" },
    { title: "Liberado em", field: "releaseOn", type: "date" }
  ],
  data: [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMxyAg9hl69ZUyDaSbnCW2ET7pc_6q_AsC5VD0XaWJxoHW6Z-IA&s",
      client: "Will Smith",
      link: "https://facebook.com.br",
      releaseOn: "01/12/2019"
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s",
      client: "Joseph Stranger",
      link: "https://google.com.br",
      releaseOn: "01/12/2019"
    }
  ],
  title: "Links ativos",
  editable: false
};

export default function Active() {
  return (
    <Container fixed>
      <Grid container spacing={5}>
        <Grid item xs={6} className={customGrid().item1}>
          <Card>
            <MaterialTable data={dataTable} />
          </Card>
        </Grid>
        <Grid item xs={6} className={customGrid().item2}>
          <Card>
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Feedback <ThumbUpAltRounded />
            </Typography>
            <Feedback />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
