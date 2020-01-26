const headerStyle = () => ({
  root: {
    backgroundColor: "var(--color-background1)",
    height: "auto",
    color: "var(--color-text1)",
    boxShadow: "var(--box-shadow1)",
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
      color: "var(--color-text1)",
      textTransform: "capitalize",
      fontSize: "1rem"
    }
  }
});

export { headerStyle, cardStyle };
