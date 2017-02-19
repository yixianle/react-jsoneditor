import React , {Component} from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import Node from '../containers/Node';

export default class App extends Component {
  //const App = ({json}) =>{ console.log(json,999); 
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

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(TodoActions, dispatch)
// })

// const mapStateToProps = (state) => {
//   console.log(state,777)
//   return {
//       json:state
//   }
// }
// export default connect()(App)