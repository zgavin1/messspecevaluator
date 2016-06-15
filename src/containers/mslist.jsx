import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import MessSpec from './../components/messspec';

class MessSpecsContainer extends Component {

   parseSpec(spec) {
      debugger
      const messSpecs = this.props.data;

      let subSpecName = "";
      
      const openMS = spec.indexOf("<ms>");
      const closeMS = spec.indexOf("</ms>");
      if (openMS >= 0 && closeMS >=0) {
         
         subSpecName = spec.slice(openMS + 4, closeMS);
         
      }
      // console.log(spec.slice(4, 7))
      if (openMS !== -1) {
         let x = spec.slice(0, openMS);
         
         // Need to find specs by name, but current
         // they're sorted by an id
         if (messSpecs[subSpecName]) {
            x += this.parseSpec(messSpecs[subSpecName].spec);
         } else {
            x += "<ms>"+subSpecName+"</ms>";
         }
         // return x + this.parseSpec(spec.slice(closeMS+5)); 
         console.log(x + this.parseSpec(spec.slice(closeMS+5))); 
      }
      // return spec;
      console.log(spec);
   }

   render() {
      const { data, removeMessSpec } = this.props;
      return (
         <MessSpecList
          data={data}
          closeMessSpec={removeMessSpec}
          runMessSpec={this.parseSpec.bind(this)} />
      );
   }
}

const MessSpecList = ({
   data,
   closeMessSpec,
   runMessSpec
}) => {
   return (
   <div className="all-specs">
      <h2> Message Specification List </h2>
      <ul>
         {Object.keys(data).map((ms) => {
            ms = data[ms]
            return (
               <MessSpec
                key={ms.id}
                data={ms}
                closeMessSpec={() => closeMessSpec(ms.name)}
                runMessSpec={() => runMessSpec(ms.spec)} />
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