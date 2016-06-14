import { combineReducers } from 'redux'

const messSpecs = (state = {}, action) => {
   switch (action.type) {
      case "ADD_MESS_SPEC":
         debugger
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