const INITIAL_STATE = { form: false, manager: false };

export default function dialogState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_FORM_CLIENT":
      return { form: true };
    case "CLOSE_FORM_CLIENT":
      return { form: false };
    case "OPEN_MANAGER_CLIENT":
      return { manager: true };
    case "CLOSE_MANAGER_CLIENT":
      return { manager: false };
    default:
      return state;
  }
}
