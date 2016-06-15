import React from 'react';
import { connect } from 'react-redux';

import { addMessSpec } from './../actions';

let AddMessSpec = ({ dispatch }) => {
   let name,
       spec;

   return (
      <form id="mess-spec-builder"
         onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessSpec(name.value, spec.value));
            document.getElementById('mess-spec-builder').reset();
         }} >
         <label htmlFor="name">Name</label>
         <input
            id="name"
            name="name"
            type="text"
            ref={node=>{
               name=node;
            }} />
         <br/>
         <label htmlFor="spec">Spec</label>
         <input
            id="spec"
            name="spec"
            type="text"
            ref={node=>{
               spec=node;
            }} />
         <br/>
         <input
            name="submit"
            type="submit" />
      </form>
   );
}

AddMessSpec = connect()(AddMessSpec);

export default AddMessSpec;