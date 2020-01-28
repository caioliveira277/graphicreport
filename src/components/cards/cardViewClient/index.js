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
import { cardStyle } from "./styles";

const customCard = makeStyles(cardStyle());
export default function CardViewClient({ data }) {
  return (
    <Card className={customCard().root}>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        <StarBorderRounded /> {data.name} <StarBorderRounded />
      </Typography>
      <Box display="flex" justifyContent="center" mb={1}>
        <Avatar src={data.avatar} alt="US" className={customCard().avatar} />
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="p" gutterBottom>
          CNPJ: {data.cnpj}
        </Typography>
      </Box>
      <Box m={2}>
        <Typography component="p" gutterBottom>
          CPF: {data.cpf}
        </Typography>
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="p" gutterBottom>
          Método de pagamento: {data.paymentMethod}
        </Typography>
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="p" gutterBottom>
          Contas: {data.adAccount}
        </Typography>
      </Box>
      <Divider />
      <Box m={2}>
        <Typography component="p" gutterBottom>
          Acesso: {data.username+" / "+data.password}
        </Typography>
      </Box>
    </Card>
  );
}
