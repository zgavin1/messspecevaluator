let nextMessSpecId = 0;
export const addMessSpec = (name, spec) => ({
   type: "ADD_MESS_SPEC",
   id: nextMessSpecId++,
   name,
   spec
});