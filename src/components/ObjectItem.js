/**
 * Created by lele on 16/12/24.
 */

import React, { Component } from 'react'
import classnames from 'classnames'
import Node from '../containers/Node'


export default class ObjectItem extends Component {
  state = {
    foldNode: true
  }
  //展开折叠子节点
  handleToggleFold = () => {
    //this.setState({ editing: true })
    //console.log("---handleToggleFold----")
    this.setState({
        foldNode: !this.state.foldNode
    })
  }
  render(){
    const { keyName, type, length, childIds } = this.props

    return <div>
        <div className="jsoneditor-tree">
            <button onClick={this.handleToggleFold} 
            className={classnames({
                "jsoneditor-collapsed": this.state.foldNode,
                "jsoneditor-expanded": !this.state.foldNode
            })} ></button>
        </div>
        <div className="jsoneditor-tree">
            <div className="jsoneditor-readonly">{keyName}</div>
        </div>
        <div className="jsoneditor-tree"></div>
        <div className="jsoneditor-tree jsoneditor-tree-val">
            <div className="jsoneditor-value jsoneditor-object">
                {type==='array'?'['+length+']':'{'+length+'}'}
            </div>
        </div>
        {this.state.foldNode?<div colSpan="4" style={{paddingLeft:25}}>
            {childIds.map(id=>(<Node key={id} id={id} />))}
            </div>:null}
        
    </div>;
  }
}