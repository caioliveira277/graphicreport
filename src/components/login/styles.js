const formStyle = () => ({
  root: {
    backgroundColor: "#c7dcea",
    marginTop: 30,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    boxShadow: "var(--box-shadow-1)",
    '& div.MuiGrid-root':{
      margin: 5,
    },
    '& button.MuiButtonBase-root':{
      marginTop: 10
    }
  },
});

const stepStyle = () => ({
  root: {
    borderRadius: 20,
    '& .MuiStepIcon-completed': {
      color: "#5ac146"
    }
  }
});
export { formStyle, stepStyle };
