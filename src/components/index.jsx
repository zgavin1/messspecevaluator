import React from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

const App = ({ addMessSpec }) => {
   let name,
       spec;

   return (
      <div>
         <h1>Message Specifications</h1>
         <form id="mess-spec-builder"
            onSubmit={(e) => {
               e.preventDefault();
               addMessSpec(name.value, spec.value);
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
      </div>
   );
};

const mapStateToProps = (state) => ({
   messSpecs: state.messSpecs
})

var ConnectedApp = connect(mapStateToProps, actions)(App);

export default ConnectedApp;