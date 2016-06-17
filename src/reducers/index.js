import { combineReducers } from 'redux'

// Helper reducer for Message Specifications
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
         if (state.editing) {
            return {
               ...state,
               name: action.name,
               spec: action.spec,
               editing: false
            }
         }
         return state;
      default:
         return state;
   }
}

// Main reducer for Message Specifications.
const messSpecs = (state = {}, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         if (state[action.name]) {
            return state;
         }
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

// Reducer for the output of running a Message Specification.
const output = (state = "", action) => {
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