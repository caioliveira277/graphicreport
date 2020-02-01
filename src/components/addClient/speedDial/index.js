import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab";
import { PersonAddRounded } from "@material-ui/icons";
import { speedDialStyle } from "./styles";

const customSpeedDial = makeStyles(speedDialStyle());


export default function SpeedDials() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={customSpeedDial().speedDial}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
    >
      <SpeedDialAction
        icon={<PersonAddRounded />}
        tooltipTitle="Novo cliente"
        onClick={handleClose}
      />
    </SpeedDial>
  );
}
