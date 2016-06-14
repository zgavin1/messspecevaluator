import React from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

import MessSpecForm from './msform';
import MessSpecList from './mslist';

const App = ({ messSpecs, addMessSpec }) => {
   return (
      <div>
         <h1>Message Specifications</h1>
         <MessSpecForm submitHandler={addMessSpec} />
         <MessSpecList data={messSpecs} />
      </div>
   );
};

const mapStateToProps = (state) => ({
   messSpecs: state.messSpecs
})

var ConnectedApp = connect(mapStateToProps, actions)(App);

export default ConnectedApp;