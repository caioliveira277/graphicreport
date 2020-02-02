const styleDialog = () => ({
  root: {
    "& > div.MuiGrid-container > div.MuiGrid-item > div.MuiFormControl-root":{
      margin: 5
    },
    "& > div.MuiGrid-container > div.MuiGrid-item > fieldset":{
      margin: 10
    },
    "& :first-child":{
      display: "flex",
      justifyContent: "center"
    },
    "& :first-child > .MuiAvatar-root":{
      width: 80,
      height: 80,
    }
  }
})

export { styleDialog };