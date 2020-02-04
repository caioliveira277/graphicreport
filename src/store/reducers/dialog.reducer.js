const INITIAL_STATE = { form: false, manager: false };

export default function dialogState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_FORM_CLIENT":
      state.form = true;
      return state;
    case "CLOSE_FORM_CLIENT":
      state.form = false;
      return state;
    case "OPEN_MANAGER_CLIENT":
      state.manager = true;
      return state;
    case "CLOSE_MANAGER_CLIENT":
      state.manager = false;
      return state;
    default:
      return state;
  }
}
