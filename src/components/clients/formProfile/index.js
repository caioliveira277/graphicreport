import React, { useRef } from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Switch,
  Avatar,
  ButtonBase,
  Tooltip,
  Box
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { styleDialog } from "./styles";

export default function FormProfile() {
  const appendAvatar = useRef(null);
  const imageAvatar = useRef(null);

  const customDialog = makeStyles(styleDialog());

  const dialogState = useSelector(state => state.dialogState.form);
  const dialogDispatch = useDispatch();

  const handleClose = () => {
    dialogDispatch({ type: "CLOSE_FORM_CLIENT" });
  };

  const renderImage = event => {
    const img = imageAvatar.current.querySelector("img");
    const inputFiles = event.target;
    if (inputFiles.files && inputFiles.files[0]) {
      const reader = new FileReader();
      reader.onload = event => {
        img.setAttribute("src", event.target.result);
      };
      reader.readAsDataURL(inputFiles.files[0]);
    }
  };
  const handleClickImage = () => {
    appendAvatar.current.click();
  };

  return (
    <Dialog open={dialogState} onClose={handleClose} scroll="paper">
      <DialogTitle id="form-dialog-title">Novo cliente</DialogTitle>
      <DialogContent className={customDialog().root}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <Tooltip title="Adicionar imagem">
              <ButtonBase onClick={handleClickImage}>
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgpfHaPz2vPtv_qM4HDIQxioSj_bmjpUH27zqrlauuABaOywd&s"
                  ref={imageAvatar}
                ></Avatar>
              </ButtonBase>
            </Tooltip>
            <Box display="none">
              <input type="file" ref={appendAvatar} onChange={renderImage} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              label="Nome do cliente"
              name="name"
              type="text"
              fullWidth
            />
            <TextField label="CPF" name="cpf" type="text" fullWidth />
            <TextField label="Email" name="email" type="email" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="labelPaymentMethod">
                Metodo de pagamento
              </InputLabel>
              <Select
                labelId="labelPaymentMethod"
                value=""
                name="paymentMethod"
              >
                <MenuItem value="Boleto">Boleto</MenuItem>
                <MenuItem value="Cartao">Cartão crédito/débito</MenuItem>
              </Select>
            </FormControl>
            <TextField label="CNPJ" name="cpnj" type="text" fullWidth />
            <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Switch value="Ativo" />}
                  label="Ativo"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Descrição"
              multiline
              rowsMax="5"
              name="description"
              placeholder="Sobre o cliente"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Salvar
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
