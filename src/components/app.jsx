import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

import AddMessSpec from './../containers/addmessspec';
import MessSpecList from './../containers/mslist';

const App = () => (
   <div>
      <h1>Message Specifications</h1>
      <AddMessSpec />
      <MessSpecList />
   </div>
);

export default App;