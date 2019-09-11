/**
 * 用ES5 实现map
 * 1. map函数功能：
 * 
 */
// map 用法实例
let arr = [1,2,3,4,5]
// 1. 用于数组,所以需要判断是否是数组  
// 判断数据类型  isArray
// 2. map方法 接收两个参数
// 参数1： 一个函数
    // 函数的 可以接收三个参数，第一个参数 表示 当前元素 第二个 表示当前元素的索引，第三个 表示当前数组
// 参数2 ： 指定回调函数中 this的指向
let result = arr.map( (item,index,arr)=>{
    console.log(arr)
    return arr
},thisArg)
// console.log(result)

Array.arrMap = function(fn,context){
    if( typeof fn != 'function'){
        throw new TypeError(`${fn} is not a Function`)
    }
    // this 
    let arr = this
    let temp = []
    for ( let i = 0;I<arr.length;i++){
        let result = fn.call(context,arr[i],arr)
        temp.push(result)
    }
    return temp

}