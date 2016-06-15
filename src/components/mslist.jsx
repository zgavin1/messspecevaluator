import React from 'react';
import { removeMessSpec } from './../actions';
import MessSpec from './messspec';

const MessSpecList = ({ data, onMessSpecClose }) => {
   const specsNames = Object.keys(data).map((ms) =>
      <MessSpec
       key={data[ms].id}
       data={data[ms]}
       closeMessSpec={() => onMessSpecClose(data[ms].id)} />
   );
   return (
      <div className="alls-specs">
         <h2> Message Specification List </h2>
         <ul>
            { specsNames }
         </ul>
      </div>
   );
}

export default MessSpecList;