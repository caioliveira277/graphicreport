const headerStyle = (theme) => ({
  root: {
    backgroundColor: "var(--color-background1)",
    height: "auto",
    color: "var(--color-text1)",
    boxShadow: "var(--box-shadow1)",
    padding: 0,
    "& > .MuiGrid-container > :nth-child(2n)": {
      [theme.breakpoints.down('md')]: {
        order: 3
      },
    },
    "& > .MuiGrid-container > :nth-child(3n)": {
      display: "flex",
      justifyContent: "flex-end"
    },
  },
});

export { headerStyle };
