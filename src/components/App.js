import React , {Component} from 'react'

import Node from '../containers/Node';

export default class App extends Component {
  render() {
    const { json } = this.props
    
    return <div>
        <div className="jsoneditor jsoneditor-mode-form" >
            <div className="jsoneditor-tree">
                <table className="jsoneditor-tree">
                    <tbody>
                        <tr className="jsoneditor-expandable">
                            <td>
                                <Node id={0}></Node>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }
}
