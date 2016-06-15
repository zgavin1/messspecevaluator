import React from 'react';

const MessSpec = ({ data, closeMessSpec }) => {
   return (
      <li>
         <span>{data.name} </span>
         <button> Run Specification </button>
         <button onClick={closeMessSpec}> Remove Message Specification </button>
      </li>
   );
};

export default MessSpec;