import { combineReducers } from 'redux'

const messSpecs = (state = {}, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         return {
            ...state,
            [action.name]: {
               id: action.id,
               name: action.name,
               spec: action.spec
            }
         };
      case "REMOVE_MESS_SPEC":
         let nextState = Object.assign({}, state);
         delete nextState[action.name];
         return nextState;
      default: 
         return state;
   }
}

export default combineReducers({
   messSpecs
})