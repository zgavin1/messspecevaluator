import { v4 } from 'node-uuid';
// import MessageSpecification from './../api';

export const addMessSpec = (name, spec) => ({
   type: "ADD_MESS_SPEC",
   id: v4(),
   name,
   spec
});

export const removeMessSpec = (name) => ({
   type: "REMOVE_MESS_SPEC",
   name
});

export const editMessSpec = (name) => ({
   type: "OPEN_EDIT_MESS_SPEC",
   name
})

export const updateMessSpec = (data) => {
   return {
      type: "UPDATE_MESS_SPEC",
      prevName: data.prevName,
      name: data.name,
      spec: data.spec
   }
}