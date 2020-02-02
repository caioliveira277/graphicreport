const cardStyle = () => ({
  root: {
    display: "flex",
    padding: 12,
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

export { cardStyle };
