import React from "react";
import {
  Card,
  Typography,
  Box,
  Avatar,
  makeStyles,
  Divider
} from "@material-ui/core";
import { StarBorderRounded } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { cardStyle } from "./styles";

const customCard = makeStyles(cardStyle());

export default function CardViewClient({ data }) {
  const dialogDispatch = useDispatch();

  const handleManagerClient = () => {
    dialogDispatch({type: "OPEN_MANAGER_CLIENT"});
  }

  return (
    <Card className={customCard().root}>
      <Typography variant="h5" component="h2" gutterBottom align="center" onClick={handleManagerClient}>
        <StarBorderRounded /> {data.name} <StarBorderRounded />
      </Typography>
      <Box display="flex" justifyContent="center" mb={1}>
        <Avatar src={data.avatar} alt="US" className={customCard().avatar} />
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="h4" gutterBottom>
          CNPJ:
        </Typography>
        <Typography component="p" gutterBottom>
          {data.cnpj}
        </Typography>
      </Box>
      <Box m={2}>
        <Typography component="h4" gutterBottom>
          CPF:
        </Typography>
        <Typography component="p" gutterBottom>
          {data.cpf}
        </Typography>
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="h4" gutterBottom>
          Método de pagamento:
        </Typography>
        <Typography component="p" gutterBottom>
          {data.paymentMethod}
        </Typography>
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="h4" gutterBottom>
          Descrição:
        </Typography>
        <Typography component="p" gutterBottom>
          {data.description}
        </Typography>
      </Box>
      <Divider />
    </Card>
  );
}
