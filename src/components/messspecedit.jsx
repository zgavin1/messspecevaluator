import React from 'react';

// "Semi-Dumb" Presentational component for
// Message Specifications being edited.
const MessSpecEdit = ({ data, update }) => {
   let newName,
       newSpec;

   return (
      <li>
         <input 
          ref={node=>{
            newName=node
          }}
          defaultValue={data.name} />
         <input
          ref={node=>{
            newSpec=node
          }}
          defaultValue={data.spec} /> 
         <button onClick={e=>{
            // it would help here to have
            // the messSpecs stored by id
            // wouldn't need to pass prevName
            e.preventDefault();
            const newData = {
               prevName: data.name,
               name: newName.value,
               spec: newSpec.value
            };
            update(newData);
          }}>Update</button>
      </li>
   );
};

export default MessSpecEdit;