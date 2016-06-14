import React from 'react';

const MessSpecList = ({ data }) => {
   debugger
   const specsNames = Object.keys(data).map((ms) =>
      <li key={data[ms].id}>{data[ms].name}</li>
   );
   return (
      <div className="alls-specs">
         <h2> Message Specification List </h2>
         <ul>
            {specsNames}
         </ul>
      </div>
   );
}

export default MessSpecList;