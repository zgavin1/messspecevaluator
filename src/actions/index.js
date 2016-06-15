import { v4 } from 'node-uuid';
import MessageSpecification from './../api';

export const addMessSpec = (name, spec) => ({
   type: "ADD_MESS_SPEC",
   id: v4(),
   ms: new MessageSpecification(name, spec)
});

export const removeMessSpec = (id) => ({
   type: "REMOVE_MESS_SPEC",
   id
});