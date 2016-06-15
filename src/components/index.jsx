import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

import MessSpecForm from './msform';
import MessSpecList from './mslist';

class App extends Component {
   render() {
      const { messSpecs, removeMessSpec, addMessSpec } = this.props;
      return (
         <div>
            <h1>Message Specifications</h1>
            <MessSpecForm submitHandler={addMessSpec} />
            <MessSpecList
             data={messSpecs}
             onMessSpecClose={removeMessSpec} />
         </div>
      );
   }
};

const mapStateToProps = (state) => ({
   messSpecs: state.messSpecs
})

var ConnectedApp = connect(mapStateToProps, actions)(App);

export default ConnectedApp;