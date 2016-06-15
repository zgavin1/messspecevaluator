import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import MessSpec from './../components/messspec';

class MessSpecsContainer extends Component {



   render() {
      const { data, removeMessSpec } = this.props;
      debugger
      return (
         <MessSpecList
          data={data}
          closeMessSpec={removeMessSpec}
          runMessSpec={console.log("run a spec")} />
      );
   }
}

const MessSpecList = ({
   data,
   closeMessSpec,
   runMessSpec
}) => {
   debugger
   return (
   <div className="all-specs">
      <h2> Message Specification List </h2>
      <ul>
         {Object.keys(data).map((ms) => {
            ms = data[ms]
            return (
               <MessSpec
                key={ms.id}
                data={ms.ms}
                closeMessSpec={() => closeMessSpec(ms.id)}
                runMessSpec={() => runMessSpec()} />
            )
         })}
      </ul>
   </div>)
};

const mapStateToProps = (state) => ({
   data: state.messSpecs
})

MessSpecsContainer = connect(
   mapStateToProps,
   actions
)(MessSpecsContainer);

export default MessSpecsContainer;