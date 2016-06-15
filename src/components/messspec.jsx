import React, { Component } from 'react';

const MessSpec = ({ data, closeMessSpec, runMessSpec }) => {
   return (
      <li>
         <span>{data.name} </span>
         <button onClick={runMessSpec}> Run Specification </button>
         <button onClick={closeMessSpec}> Remove Message Specification </button>
      </li>
   );
};

export default MessSpec;