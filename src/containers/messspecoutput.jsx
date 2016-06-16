import React, { Component } from 'react';
import { connect } from 'react-redux';

import OutputDisplay from './../components/outputdisplay';

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


