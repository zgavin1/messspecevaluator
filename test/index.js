import expect from 'expect';
import * as actions from './../src/actions';

describe('action creators', () => {
   describe('addMessSpec', () => {
      it('should create an action to add a Message Specification', () => {
         expect(actions.addMessSpec("adding", "spec"))
            .toInclude({type: "ADD_MESS_SPEC"})
            .toInclude({name: "adding"})
            .toInclude({spec: "spec"})
      })

      it('should assign unique ids to Message Specifications', () => {
         const ids = [];
         for (var i = 0; i < 50; i++) {
            ids.push(actions.addMessSpec("adding", "spec").id);
         }

         // Fast new method in ES6 to get unique array values
         expect([...new Set(ids)].length)
            .toEqual(50);
      })
   })

   describe('removeMessSpec', () => {
      it('should create an action to remove a Message Specification', () => {
         expect(actions.removeMessSpec("removing"))
            .toEqual({
               type: "REMOVE_MESS_SPEC",
               name: "removing"
            })
      })
   })

   describe('editMessSpec', () => {
      it('should create an action to edit a Message Specification', () => {
         expect(actions.editMessSpec("editing"))
            .toEqual({
               type: "OPEN_EDIT_MESS_SPEC",
               name: "editing"
            })
      })
   })

   describe('updateMessSpec', () => {
      it('should create an action to update a Message Specification', () => {
         var data = {
            prevName: "previousName",
            name: "NextName",
            spec: "NextSpec" 
         }

         expect(actions.updateMessSpec(data))
            .toEqual({
               type: "UPDATE_MESS_SPEC",
               prevName: "previousName",
               name: "NextName",
               spec: "NextSpec" 
            })
      })
   })

   describe('receiveSpecString', () => {
      it('should create an action to receive a new output string from running a Message Specification', () => {
         expect(actions.receiveSpecString("new output"))
            .toEqual({
               type: "RECEIVE_SPEC_STRING",
               string: "new output"
            })
      })
   })
})