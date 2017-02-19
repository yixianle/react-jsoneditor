/**
 * Created by lele on 16/12/24.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import ObjectItem from '../components/ObjectItem'
import BaseItem from '../components/BaseItem'
import { updateVal } from '../actions'

import {convertLevelJson,convertTreeJson} from "../util"

// 
class Node extends Component {
  render() {
    const { keyName, val, type, length, childIds } = this.props

    let element;
    if(type==="array"||type==="object"){
      element = <ObjectItem  {...this.props} />
    }else{
      element = <BaseItem {...this.props} />
    }
    return <div className="jsoneditor-values">
              {element}
          </div>
  }
}

const mapDispatchToProps = dispatch => 
  ({
  changeVal: (id, val)=>{
    dispatch(updateVal(id, val))
  }
})

const mapStateToProps = (state,ownProps) => {
  const {id} = ownProps
  return {
    ...state[id],
    id
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Node)