import React, { useState } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Link,
  Avatar,
} from "@material-ui/core";
import MaterialTable from "../../components/materialTable";
import { gridStyle } from "./styles";
import CardViewClient from "../../components/cards/cardViewClient";
import CardFeedback from "../../components/cardFeedback";

const customGrid = makeStyles(gridStyle());

const users = {
  1: {
    name: "Joseph Stranger",
    cpf: "887.965.485-35",
    cnpj: "23.341.028/0001-98",
    paymentMethod: "Boleto",
    adAccount: "google: Joseph123/secret123, facebook: Joseph321/secret321",
    username: "MysecretLogin",
    password: "****",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s"
  },
  2: {
    name: "Will Smith",
    cpf: "937.965.285-15",
    cnpj: "64.311.028/0001-98",
    paymentMethod: "Cartão de crédito",
    adAccount: "google: Will123/secret123, facebook: Will321/secret321",
    username: "MyWillLogin",
    password: "****",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMxyAg9hl69ZUyDaSbnCW2ET7pc_6q_AsC5VD0XaWJxoHW6Z-IA&s"
  }
};

export default function Clients() {
  const [user, setUser] = useState({
    name: "Selecione um cliente",
    cpf: "",
    cnpj: "",
    paymentMethod: "",
    adAccount: "",
    username: "",
    password: "****",
    avatar: ""
  });

  const handleClickRow = e => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    setUser({
      ...user,
      name: users[id].name,
      cpf: users[id].cpf,
      cnpj: users[id].cnpj,
      paymentMethod: users[id].paymentMethod,
      adAccount:users[id].adAccount,
      username: users[id].username,
      password: "****",
      avatar: users[id].avatar
    });
  };
  const DataTable = {
    columns: [
      {
        title: "Avatar",
        field: "imageUrl",
        render: rowData => <Avatar src={rowData.imageUrl} alt="" />
      },
      {
        title: "Cliente",
        field: "client",
        render: rowData => (
          <Link href="/app" onClick={handleClickRow} data-id={rowData.id}>
            {rowData.client}
          </Link>
        )
      },
      {
        title: "Status",
        field: "status",
        lookup: { inactive: "Inativo", active: "Ativo", waiting: "Aguardando" }
      }
    ],
    data: [
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMxyAg9hl69ZUyDaSbnCW2ET7pc_6q_AsC5VD0XaWJxoHW6Z-IA&s",
        client: "Will Smith",
        status: "active",
        id: 2
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s",
        client: "Joseph Stranger",
        status: "waiting",
        id: 1
      }
    ],
    title: "Clientes",
    editable: { active: true, Add: false }
  };

  return (
    <Container fixed>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Card>
            <MaterialTable data={DataTable} />
          </Card>
        </Grid>
        <Grid item xs={6} className={customGrid().item2}>
          <CardViewClient data={user} />
        </Grid>
        <Grid item xs={12} className={customGrid().item2}>
          <CardFeedback />
        </Grid>
      </Grid>
    </Container>
  );
}
