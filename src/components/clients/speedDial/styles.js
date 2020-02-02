const styleSpeedDial = (theme) => ({
  root: {
    position: "fixed",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(5),
      right: theme.spacing(5)
    },
  }
});

export { styleSpeedDial };
