import { v4 } from 'node-uuid';

export const addMessSpec = (name, spec) => ({
   type: "ADD_MESS_SPEC",
   id: v4(),
   name,
   spec
});

export const removeMessSpec = (id) => ({
   type: "REMOVE_MESS_SPEC",
   id
});