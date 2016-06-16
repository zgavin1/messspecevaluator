import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessSpecOutput extends Component {
   render() {
      const { output } = this.props;
      return (
         <h1>{output}</h1>
      );
   }
}

const mapStateToProps = (state) => ({
   output: state.output
})

export default connect(mapStateToProps)(MessSpecOutput);


