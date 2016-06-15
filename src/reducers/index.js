import { combineReducers } from 'redux'

const messSpecs = (state = {}, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         return {
            ...state,
            [action.id]: {
               name: action.name,
               spec: action.spec,
               id: action.id
            }
         };
      case "REMOVE_MESS_SPEC":
         debugger
         let nextState = Object.assign({}, state);
         delete nextState[action.id];
         return nextState;
      default: 
         return state;
   }
}

const ids = (state = [], action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         return [
            ...state,
            action.id
         ];
      case "REMOVE_MESS_SPEC":
         return state.filter(id => id !== action.id);
      default:
         return state;
   }
}

export default combineReducers({
   messSpecs,
   ids
})