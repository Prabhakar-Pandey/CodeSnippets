


// var promise = new Promise((resolve,reject)=>{
//     resolve("hello")

//     resolve("hi")
// })

// promise.then(data=>{
//     console.log(data)
// })


// function test(){
//     for(var i of [{val:1},{val:2},{val:3}]){
//         if(i.val==2){
//             return "exit at 2";
//         }
//         console.log(i.val)
//     }
// }
// console.log(test())



[1,2,3,4].forEach((item)=>{
    return console.log(item)
})

const arr1 = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
const arr2 = [[1], [[1, 4, [5, 3]], [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4]]]

Array.prototype.flatten = function(arr, result=[]){
    console.log(arr,this.flatten)
    arr.forEach(item=>{
        if(Array.isArray(item)){
            this.flatten(item, result)
        }else{
            result.push(item)
        }
    })
    return result;
}

arr1.flatten(arr2);