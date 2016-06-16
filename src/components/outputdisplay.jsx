import React from 'react';

const OutputDisplay = ({ children }) => {
   return (
      <div>
         <h3>see your output below:</h3>
         { children }
      </div>
   );
};

export default OutputDisplay;