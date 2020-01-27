const gridStyle = () => ({
  item1: {
    display: "flex",
    justifyContent: "center"
  },
  item2: {
    display: "flex",
    justifyContent: "center",
    "& > .MuiPaper-root.MuiCard-root": {
      padding: 10,
      "& > h2":{
        color: "#ffb400"
      }
    }
  }
});

export { gridStyle };
