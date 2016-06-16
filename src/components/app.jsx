import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

import AddMessSpec from './../containers/addmessspec';
import MessSpecList from './../containers/mslist';
import MessSpecOutput from './../containers/messspecoutput';

const App = () => (
   <div>
      <h1>Message Specifications</h1>
      <AddMessSpec />
      <MessSpecList />
      <MessSpecOutput />
   </div>
);

export default App;