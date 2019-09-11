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
let context ={
    a:1
}
let result = arr.map( (item,index,arr)=>{
    // console.log(arr)
    console.log(this)
    return arr
})
// console.log(result)

// Array.arrMap = function(fn,context){
//     if( typeof fn != 'function'){
//         throw new TypeError(`${fn} is not a Function`)
//     }
//     // this 
//     let arr = this
//     let temp = []
//     for ( let i = 0;I<arr.length;i++){
//         let result = fn.call(context,arr[i],arr)
//         temp.push(result)
//     }
//     return temp

// }

/**
 * 知识点1 Array.ptototype.map()方法
 * 用法： map创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
 * 1. 返回一个新的数组
 * 2. 返回的数组 由 旧的数组 元素 由指定的 函数处理过 的结果 组成
 * 
 * 
 */
Array.prototype.myMap = function(fn,thisArg){
    // 1. 参数判断 fn
    // thisArg 是执行callback函数时使用的this值
      //  如果thisArg有值，那么每次callback被调用时，this都会指向thisArg对应的对象上，如果省略了 thisArg，或者赋值为undefined，null，则会自动指向全局对象（ES6 不是这样）
    if( typeof fn != 'function'){
        throw '类型错误'
    }
    // this=> 调用数组原型上的方法 slice  因为 
    var arr = Array.prototype.slice.call(this)
    // 2. 遍历原数组，让数组的元素都被fn处理过
    let arr = thisArg
    for(let i=0; i< arr.length;i++ ){

    }
    // 返回新的数组
}   