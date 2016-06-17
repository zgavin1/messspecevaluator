import React from 'react';

// "Dumb" presnetation component to represent
// a single Message Specification
const MessSpec = ({ data, close, run, edit }) => {
   return (
      <li>
         <span>{data.name} </span>
         <button onClick={run}>Run</button>
         <button onClick={edit}>Edit</button>
         <button onClick={close}>Remove</button>
      </li>
   );
};

export default MessSpec;