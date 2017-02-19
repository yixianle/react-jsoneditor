import {convertTreeJson} from "../util"

//
export default changeVal => store => next => action =>{
  console.log(convertTreeJson(store.getState()),"---propsChange begin--")
  next(action)
  console.log(convertTreeJson(store.getState()),"---propsChange end--")
  changeVal(convertTreeJson(store.getState()))
}