import type from 'type-of'

// 存放平铺数据
let levelJson={}
// 标记平铺后对象的下标
let levelIndex=-1

// level data => tree json
const toTree = (node)=>{
  if(node.type!=="array"&&node.type!=="object"){ return }
  let json = node.type==="array"?[]:{}
  // 
  if(node.childIds){
    // 有子节点
    node.childIds.forEach((item,index)=>{
      let childNode = levelJson[item]
      if(childNode.type==="array"||childNode.type==="object"){
        json[childNode.keyName] = toTree(childNode)
      }else{
        json[childNode.keyName] = childNode.val
      }
    })
  }
  return json
}

// 
const smooth = (json,parentId)=>{
  // 
  let jsonMap = type(json)==="array"?json:Object.keys(json)
  jsonMap.map((item,index)=>{
    let val = type(json)==="array"?item:json[item]
    let keyName = type(json)==="array"?index:item

    appendLevelJson(keyName,val,parentId)
  })
}

// 将json的每一子项拼接到 levelJson
const appendLevelJson=(keyName,val,parentId)=>{
  levelIndex++
  parentId!=undefined && levelJson[parentId].childIds.push(levelIndex)

  let itemType = type(val)
  if(itemType==="array" || itemType==="object"){
    levelJson[levelIndex] = {
      type:itemType,
      keyName:keyName,
      length:itemType==="object"?Object.keys(val).length:val.length,
      childIds:[]
    }
    smooth(val,levelIndex)
  }else{
    levelJson[levelIndex] = {
      type:itemType,
      keyName:keyName,
      val:val
    }
  }
}

// 树形数据转为平铺数据 
export function convertLevelJson(tree) {
  //console.log(tree,"init json")
  levelJson={}
  // 初始化根节点
  appendLevelJson("root",tree)
  // 树形结构转为平铺结构
  smooth(tree)
  //console.log(levelJson,111)
  return levelJson
}

// 平铺数据转为树形数据
export function convertTreeJson(level){
  //console.log(levelJson,5566)
  levelJson = level||{}
  return levelJson[0] && toTree(levelJson[0])
}