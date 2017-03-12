# jsoneditor
A react based tool to view, edit,and format JSON
## DEMO
http://jsoneditor.hotcn.top/

<img alt="react jsoneditor" src="https://github.com/yixianle/react-jsoneditor/blob/master/examples/demo.gif">

## Npm Module

### Install
```
  $ npm install react-jsoneditor
```

## Example

```javascript
  import JsonEdit from 'react-jsoneditor'

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
```
