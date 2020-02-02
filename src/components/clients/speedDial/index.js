import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab";
import { PersonAddRounded } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { styleSpeedDial } from "./styles";

const customSpeedDial = makeStyles(theme => styleSpeedDial(theme));

export default function SpeedDials() {
  const [open, setOpen] = useState(false);
  const dialogDispatch = useDispatch();

  const handleDialogState = () => {
    dialogDispatch({type: "OPEN_FORM_CLIENT"});
  };

  const openStateDial = () => {
    setOpen(true);
  };
  const closeStateDial = () => {
    setOpen(false);
  };
  

  return (
    <SpeedDial
      ariaLabel=""
      className={customSpeedDial().root}
      icon={<SpeedDialIcon />}
      onClose={closeStateDial}
      onOpen={openStateDial}
      open={open}
      direction="up"
    >
      <SpeedDialAction
        icon={<PersonAddRounded />}
        tooltipTitle="Novo cliente"
        onClick={handleDialogState}
      />
    </SpeedDial>
  );
}
