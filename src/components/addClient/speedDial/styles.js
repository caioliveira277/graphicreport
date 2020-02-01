const speedDialStyle = () => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      right: 105,
      bottom: 70
    },
  },
});

export { speedDialStyle }