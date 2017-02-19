
import { UPDATE_VAL, CREATE_NODE, DELETE_NODE, ADD_CHILD, REMOVE_CHILD } from '../actions'

const initialState = {}

export default (state = initialState, action) => {
  console.log(state,action,"----reducers update_val----")
  const { type, id, val } = action
  switch (type) {
    case UPDATE_VAL:
      if(id && state[id]){
        return {
          ...state,
          [id]:Object.assign({},state[id],{val:val})
        }
      }
      return state
    default:
      return state
  }
}
