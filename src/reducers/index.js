import { combineReducers } from 'redux'

// helper reducer
const messSpec = (state, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         return {
            id: action.id,
            name: action.name,
            spec: action.spec,
            editing: false
         };
      case "OPEN_EDIT_MESS_SPEC":
         if (state.name !== action.name) {
            return state;
         }
         return {
            ...state,
            editing: true
         }
      case "UPDATE_MESS_SPEC":
         return {
            ...state,
            name: action.name,
            spec: action.spec,
            editing: false
         }
      default:
         return state;
   }
}

// main reducer
const messSpecs = (state = {}, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
      case "OPEN_EDIT_MESS_SPEC":
         return {
            ...state,
            [action.name]: messSpec(state[action.name], action)
         };
      case "UPDATE_MESS_SPEC":
         if (action.name !== action.prevName) {
            let updatedState = Object.assign({}, state);
            updatedState[action.name] = messSpec(state[action.prevName], action);
            delete updatedState[action.prevName];
            return updatedState;
         }

         return {
            ...state,
            [action.name]: messSpec(state[action.name], action)
         }

      case "REMOVE_MESS_SPEC":
         let nextState = Object.assign({}, state);
         delete nextState[action.name];
         return nextState;
      default: 
         return state;
   }
}

const output = (state= "", action) => {
   debugger
   switch (action.type) {
      case "RECEIVE_SPEC_STRING":
         return action.string;
      default:
         return state;
   }
}

export default combineReducers({
   messSpecs,
   output
})