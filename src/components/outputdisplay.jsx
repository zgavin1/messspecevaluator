import React from 'react';

// "Smart" container component for output
const OutputDisplay = ({ children }) => {
   return (
      <div>
         <h3>see your output below:</h3>
         { children }
      </div>
   );
};

export default OutputDisplay;