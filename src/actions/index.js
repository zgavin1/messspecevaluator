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