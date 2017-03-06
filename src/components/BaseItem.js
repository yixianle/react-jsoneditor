/**
 * Created by lele on 16/12/24.
 */

import React, { Component } from 'react'
import classnames from 'classnames'


export default class ObjectItem extends Component {
  handleBlur = (key,e) => {
    const { id, type, changeVal } = this.props
    
    let val = e.target.innerHTML
    if(type==="number"){
      val = isNaN(val-0)?val:(val-0)
    }else if(type==="boolean"){
      val = val==="true"?true:(val==="false"?false:val)
    }else if(type==="null"){
      val = val==="null"?null:val
    }
    changeVal(id, val)
  }
  
  render(){
    const { keyName, val, type, changeVal } = this.props

    return <div>
        <div className="jsoneditor-tree">
            <button className="jsoneditor-invisible"></button>
        </div>
        <div className="jsoneditor-tree">
            <div className="jsoneditor-field">{keyName}</div>
        </div>
        <div className="jsoneditor-separator">:</div>
        <div className="jsoneditor-tree jsoneditor-tree-val">
            <div
            onBlur={this.handleBlur.bind(this,keyName)}
            className={"jsoneditor-value jsoneditor-read-write jsoneditor-"+type}>
              {val===null?"null":val.toString()}
            </div>
        </div>
    </div>;
  }
}