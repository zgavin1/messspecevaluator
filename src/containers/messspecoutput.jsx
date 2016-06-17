import React, { Component } from 'react';
import { connect } from 'react-redux';

import OutputDisplay from './../components/outputdisplay';

// "Dumb" Presentational Component for the output of
// running a Message Specification
class MessSpecOutput extends Component {
   render() {
      const { output } = this.props;
      return (
         <OutputDisplay >
            { output }
         </OutputDisplay>
      );
   }
}

const mapStateToProps = (state) => ({
   output: state.output
})

export default connect(mapStateToProps)(MessSpecOutput);


