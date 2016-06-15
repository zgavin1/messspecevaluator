import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import MessSpec from './../components/messspec';
import MessSpecEdit from './../components/messspecedit';

class MessSpecsContainer extends Component {

   parseSpec(spec) {
      // TODO: Need to handle edge cases
      //  nested specs: <ms><ms>specname</ms></ms>
      //  fake specs: <ms>specname doesn't exist</ms>
      //  how to validate formatting: <ms> </ms> spec name </ms> 

      let subSpecName = "";
      const messSpecs = this.props.data,
            openMS = spec.indexOf("<ms>"),
            closeMS = spec.indexOf("</ms>");

      if (openMS >= 0 && closeMS >=0) {
         subSpecName = spec.slice(openMS + 4, closeMS);
      }
      if (openMS !== -1) {
         let x = spec.slice(0, openMS);
         if (messSpecs[subSpecName]) {
            x += this.parseSpec(messSpecs[subSpecName].spec);
         } else {
            x += "<ms>"+subSpecName+"</ms>";
         }
         console.log(x + this.parseSpec(spec.slice(closeMS+5))); 
      }
      console.log(spec);
   }

   render() {
      // const { data, removeMessSpec, editMessSpec } = this.props;
      return (
         <MessSpecList
          runMessSpec={this.parseSpec.bind(this)}
          { ...this.props } />
      );
   }
}

const MessSpecList = ({
   data,
   removeMessSpec,
   runMessSpec,
   editMessSpec,
   updateMessSpec
}) => {
   return (
      <div className="all-specs">
         <h2> Message Specification List </h2>
         <ul>
            {Object.keys(data).map((ms) => {
               ms = data[ms]

               if (ms.editing) {
                  return (
                     <MessSpecEdit
                      key={ms.id}
                      data={ms} 
                      update={(newData) => updateMessSpec(newData)} />
                  );
               }

               return (
                  <MessSpec
                   key={ms.id}
                   data={ms}
                   close={() => closeMessSpec(ms.name)}
                   run={() => runMessSpec(ms.spec)}
                   edit={() => editMessSpec(ms.name)} />
               )
            })}
         </ul>
      </div>
   );
};

const mapStateToProps = (state) => ({
   data: state.messSpecs
})

MessSpecsContainer = connect(
   mapStateToProps,
   actions
)(MessSpecsContainer);

export default MessSpecsContainer;