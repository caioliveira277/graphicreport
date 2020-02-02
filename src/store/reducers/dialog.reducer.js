const INITIAL_STATE = false;

export default function dialogState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN":
      return true;
    case "CLOSE":
      return false;
    default:
      return state;
  }
}
