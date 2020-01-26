const switchDarkStyle = () => ({
  switchBase: {
    color: "#ffffff",
    "&$checked": {
      color: "#515151"
    },
    "&$checked + $track": {
      backgroundColor: "#515151"
    }
  },
  checked: {},
  track: {}
});

export { switchDarkStyle }