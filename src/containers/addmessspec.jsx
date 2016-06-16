import React from 'react';
import { connect } from 'react-redux';

import { addMessSpec } from './../actions';

let AddMessSpec = ({ dispatch }) => {
   let name,
       spec;

   return (
      <div>
         <h2>Use the form below to create new Message Specifications</h2>
         <ul><strong>Instructions:</strong>
         <li>Give your Message Specification a name and a spec.</li>
         <li>When you submit the form, your Message Specification will appear below by name.</li>
         <li>You can run, edit and delete existing Message Specifications.</li>
         <li>Running a Message Specification will output it{"'"}s spec.</li>
         <li>You can reference a separate Message Specification by name in a spec
            by enclosing the name like so: {"ms(name)"}, which will return the spec
            of the named Message Specification. </li>
         </ul>
         <form id="mess-spec-builder"
            onSubmit={(e) => {
               e.preventDefault();
               dispatch(addMessSpec(name.value, spec.value));
               document.getElementById('mess-spec-builder').reset();
            }} >
            <label htmlFor="name">Name: </label>
            <input
               id="name"
               name="name"
               type="text"
               ref={node=>{
                  name=node;
               }} />
            <br/>
            <label htmlFor="spec">Spec: </label>
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
      </div>
   );
}

AddMessSpec = connect()(AddMessSpec);

export default AddMessSpec;