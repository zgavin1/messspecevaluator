import React from 'react';
import { connect } from 'react-redux';

import { addMessSpec } from './../actions';

/*
* Container component for adding Message Specifications.
* Definitely bad practice to have a component with both
* logic and presentation.
* TODO: Refactor with LinkedState-Mixin rather than ref props
*/ 
let AddMessSpec = ({ dispatch, messSpecs }) => {
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
               // If no Message Specification exists with this name
               // and the name contains at least one non-whitespace character
               // proceed with dispatching the addMessSpec action.
               if (!messSpecs[name.value] && name.value.replace(/ /g,'') !== "") {
                  dispatch(addMessSpec(name.value, spec.value));
                  document.getElementById('mess-spec-builder').reset();
               } else {
                  alert("That name is either taken or just an empty string! Choose another, or the delete the existing Message Specification with that name.")
               }
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

const mapStateToProps = (state) => ({
   messSpecs: state.messSpecs
})

AddMessSpec = connect(mapStateToProps)(AddMessSpec);

export default AddMessSpec;