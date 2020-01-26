const headerStyle = () => ({
  root: {
    backgroundColor: "var(--color-theme1)",
    height: "auto",
    color: "var(--color-theme2)",
    boxShadow: "var(--box-shadow-1)",
    padding: 10,
    '& .tab':{
      padding: 0
    }
  }
});

const cardStyle = () => ({
  root: {
    "& button.MuiButtonBase-root.MuiIconButton-root": {
      marginRight: 30
    },
    "& div.MuiAvatar-root": {
      cursor: "pointer"
    },
    "& button": {
      color: "var(--color-theme2)",
      textTransform: "capitalize",
      fontSize: "1rem"
    }
  }
});

export { headerStyle, cardStyle };
