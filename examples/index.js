import React from 'react'
import { render } from 'react-dom'


import JsonEdit from "../src/app"

function changeVal(val){
  console.log(val,"-----changeVal------")
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
