import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import MessSpec from './../components/messspec';
import MessSpecEdit from './../components/messspecedit';


/**
 * #ms: the parsing function for handling
 * running a Message Specification. Takes the object
 * from state, the string to be parsed, and a depth
 * counter. Returns either the string or
 * calls itself recursively to find nested specs.
 */
let ms = (specs, string, depth = 0) => {
   // if string is empty, immediately return an empty string
   if (!string) return "";
   /* if we're caught in an infinite loop,
   * just end it after 20 calls,
   * 20 being fairly arbitrary */
   if (depth >= 20) return string;
   // if we find the specific string in
   // our messSpecs store return it
   if (specs[string]) {
      return ms(specs, specs[string].spec, depth+1);
   }

   // find an opening tag "ms(" and start 
   // gathering the nested text
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
      // return string before opening ms tag
      // + recursive ms() passing specs data, nested string and 
      // new depth + recursive ms() passing specs data,
      // nested string and new depth
      return prefix + ms(specs, evalString, depth+1) + ms(specs, string.slice(idx), depth)
   }
   // otherwise, if we don't find 
   // an opening ms tag at all
   // return the original string argument
   return string
}

/* Container for MessSpecList */
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

/* Presentation Component */
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