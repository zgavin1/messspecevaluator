import { combineReducers } from 'redux'

const messSpecs = (state = {}, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         return {
            ...state,
            [action.id]: {
               name: action.name,
               spec: action.spec
            }
         }
      default: 
         return state;
   }
}

export default combineReducers({
   messSpecs
})