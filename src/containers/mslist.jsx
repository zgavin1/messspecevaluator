import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import MessSpec from './../components/messspec';
import MessSpecEdit from './../components/messspecedit';

// ms(ms(name))
let ms = (specs, string, depth = 0) => {
   if (!string) return "";
   if (depth >= 20) return string;
   if (specs[string]) {
      return ms(specs, specs[string].spec, depth+1);
   }

   const openMsIdx = string.indexOf("ms(");
   if (openMsIdx >= 0) {
      const prefix = string.slice(0, openMsIdx);
      let pCount = 1,
         evalString = "",
         idx = openMsIdx + 3;

      while (idx < string.length) {
         let char = string[idx];
         if (char === "(") {
            pCount++;
         } else if (char === ")") {
            pCount--;
            if (pCount === 0) {
               idx++;
               break;
            }
         }

         evalString += char;
         idx++;
      }
      return prefix + ms(specs, evalString, depth+1) + ms(specs, string.slice(idx), depth)
   }

   return string
}

class MessSpecsContainer extends Component {

   parseMS(string) {
      return ms(this.props.data, string);
   }

   render() {
      // const { data, removeMessSpec, editMessSpec } = this.props;
      return (
         <MessSpecList
          runMessSpec={this.parseMS.bind(this)}
          { ...this.props } />
      );
   }
}

const MessSpecList = ({
   data,
   removeMessSpec,
   runMessSpec,
   receiveSpecString,
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
                   close={() => removeMessSpec(ms.name)}
                   run={() => receiveSpecString(runMessSpec(ms.spec))}
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