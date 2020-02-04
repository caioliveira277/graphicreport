import React from "react";
import { styleCard } from "./styles";
import { TextField, Card, makeStyles } from "@material-ui/core";

const customCard = makeStyles(styleCard());

export default function FormCampaign() {
  return (
    <Card className={customCard().root}>
      <form>
        <TextField autoFocus label="Nome do cliente" name="name" type="text" />
      </form>
    </Card>
  );
}
