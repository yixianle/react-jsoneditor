import React from 'react'
import { render } from 'react-dom'


import JsonEdit from "./app"

function changeVal(val){
  console.log(val,"-----changeVal index------")
}

const json = {
    "array1": ["aaaaaaaaaaaaaaaaa", 1, {a:1}],
    "array2": [],
    "boolean": true,
    "null1": null,
    "null2": "",
    "null3": 0,
    "number": 1234,
    "object1": {"a": "b", "c": "d"},
    "string1": "Hello World",
    "one": {
      "two": {
        "three":[{
          "array1":{
            "array2":{
              "array3":5555
            }
          }
        }]
      }
    }
  };

render(
  <JsonEdit json={json} changeVal={changeVal} />,
  document.getElementById('root')
)

/*
import { createStore, applyMiddleware } from 'redux'
import {Component} from 'react'
import { Provider } from 'react-redux'

const reducer = (state = {}, action) => {
  console.log(state,action,"----reducers update_val other----")
  const { type, id, val } = action
  switch (type) {
    case "update_val":
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

const store = createStore(reducer)

class App extends Component {
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
                              22222
                              <JsonEdit changeVal={changeVal} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }
}

render(<Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)*/