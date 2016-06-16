import expect from 'expect';
import reducers from './../src/reducers';
import * as actions from './../src/actions';

describe('reducers', () => {
   it('should return an object with keys messSpecs and output', () => {
      expect(reducers(undefined, {}))
         .toBeA('object')
         .toIncludeKeys(['messSpecs', 'output'])
   })

   describe("messSpecs", () => {
      it('should default to return an empty object', () => {
         expect(reducers(undefined, {}).messSpecs)
            .toEqual({})
      })

      it('should not mutate previous state', () => {
         let previousState = reducers(undefined, {})
         const addAction = actions.addMessSpec("firstSpec", "secondState")
         let nextState = reducers(previousState, addAction)
         
         expect(previousState.messSpecs)
            .toEqual({})

         expect(previousState.messSpecs === nextState.messSpecs)
            .toBe(false)
      })

      it('stores message specifications by name with spec argument as a property', () => {
         const names = ["here", "are", "names"]
         const specs = ["array", "of", "specs"]
         let state
         for (var i = 0; i < 3; i++) {
            let addAction = actions.addMessSpec(names[i], specs[i])
            state = reducers(state, addAction)
         }

         expect(state.messSpecs)
            .toIncludeKeys(names)

         for (var j = 0; j< 3; j++) {
            expect(state.messSpecs[names[j]].spec)
               .toEqual(specs[j])
         }
      })

      it('can remove message specifications from state', () => {
         const names = ["here", "are", "names"]
         const specs = ["array", "of", "specs"]
         let state
         for (var i = 0; i < 3; i++) {
            let addAction = actions.addMessSpec(names[i], specs[i])
            state = reducers(state, addAction)
         }

         expect(
            reducers(state, actions.removeMessSpec("array"))
               .messSpecs
               .array
            ).toEqual(undefined)
      })

      it('can update the editing property of a message specification', () => {
         let action = actions.editMessSpec("setedittotrue")
         let state = reducers(undefined, actions.addMessSpec("setedittotrue", "spec"))
         // console.log(state)
         expect(
            reducers(state, action)
               .messSpecs
               .setedittotrue
               .editing
            ).toEqual(true)
      })

      it('can update names and specs of Message Specifications', () => {
         let data = {prevName: "updateSpec", name: "updateSpec", spec: "specNew"}
         let action = actions.updateMessSpec(data)
         let state = reducers(undefined, actions.addMessSpec("updateSpec", "specOld"))
         state = reducers(state, actions.editMessSpec("updateSpec"))
         expect(
            reducers(state, action)
               .messSpecs
               .updateSpec
               .spec
            ).toEqual("specNew")

         data = {prevName: "oldName", name: "newName", spec: "sameSpec"}
         action = actions.updateMessSpec(data)
         state = reducers(state, actions.addMessSpec("oldName", "sameSpec"))
         state = reducers(state, actions.editMessSpec("oldName"))
         const id = state.messSpecs.oldName.id
         expect(
            reducers(state, action)
               .messSpecs
               .newName
            ).toEqual({name: "newName", spec: "sameSpec", id: id, editing: false})
      })

   })

   describe("output", () => {
      it('should default to return an empty string', () => {
         expect(reducers(undefined, {}).output)
            .toEqual("")
      })

      it('should receive spec string and update state', () => {
         expect(reducers(undefined, actions.receiveSpecString("updated string")).output)
            .toEqual("updated string")
      })
   })
})