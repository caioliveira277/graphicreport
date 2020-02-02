import React, { useState } from "react";
import {
  makeStyles,
  withStyles,
  Button,
  Menu,
  MenuItem,
  Box,
  Avatar
} from "@material-ui/core";
import { cardStyle } from "./styles";

const userCardCustom = makeStyles(cardStyle());

const StyledMenu = withStyles()(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

export default function CardCurrentUser() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={userCardCustom().root}>
      <Avatar
        onClick={handleClick}
        alt="Caio O"
        src="https://images.wallpaperscraft.com/image/fern_leaf_plant_green_119970_1280x720.jpg"
      />
      <Button onClick={handleClick}>John Snow</Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Deslogar</MenuItem>
      </StyledMenu>
    </Box>
  );
}
