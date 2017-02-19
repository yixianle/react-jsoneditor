import React,{Component} from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from "./components/App"
import reducer from "./reducers"
import propsChange from "./middleware/propsChange"
import {convertLevelJson,convertTreeJson} from "./util"

import "./components/jsoneditor.css"

export default class JsonEdit extends Component {
  componentWillMount(){
    //const levelJson = convertLevelJson(this.props.json)
    //console.log(convertTreeJson(json),66)

    this.store = createStore(
      reducer,
      convertLevelJson(this.props.json),
      applyMiddleware(propsChange(this.props.changeVal))
    )
  }
  render() {
    return <Provider store={this.store}>
        <App />
      </Provider>
  }
}
