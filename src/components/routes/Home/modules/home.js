import update from "react-addons-update";
import constants from "./actionConstants";

const { SET_NAME } = constants;
const initialState = {
  title: ''
};

export function setName() {
  return {
    type: SET_NAME,
    payload: 'Johnbosco'
  }
};

function handleSetName(state, action) {
    return update(state, {
      title: { $set: action.payload }
    })
}
const ACTION_HANDLERS = {
  SET_NAME: handleSetName
};

export function home(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
