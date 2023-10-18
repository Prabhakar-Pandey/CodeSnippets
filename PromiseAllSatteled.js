// const p1 = new Promise((resolve,reject)=>{
//     resolve("p1")
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("p2")
//     },1000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     resolve("p3")
// })

// Promise.prototype.mySatteled = myAllSatelled;

// function myAllSatelled(arrayOfPromises){
//     let result = [];
//     let count = 0;
//     return new Promise((resolve,reject)=>{
//         arrayOfPromises.forEach((promise,index)=>{
//         //
            
//             promise.then((data)=>{
//                 result[index] = {
//                     status:"resolved",
//                     data
//                 }
//                 count += 1;
//                 if(count===arrayOfPromises.length){
//                     resolve(result)
//                 }
//             }).catch((e)=>{
//                 result[index] = {
//                     status:"reject",
//                     errorMsg:e
//                 }
//                 count += 1;
//                 if(count===arrayOfPromises.length){
//                     resolve(result)
//                 }
//             })
//         })
//     })
// }

// Promise.mySatteled([p1,p2,p3]).then((data)=>{
//     console.log(data)
// })


// function parent(){
//     let data = 12;

//     function child(){
        
//     }
//     return function(){
        
//     }
// }

// const child1 = parent();


// React.useEffect(()=>{
    
// },()=>{})




function sum(a,b){
    console.log("called sum",a,b)
   // setTimeout(()=>{
         let value = a+ b;

        return value;
   // },1000)
   
}



function memoize(fn){
    let cache = {};
    
    return function(...args){
        let value = null;
        console.log(cache, args.join(","),"<<<<")
        if(cache[args.join(",")]){
            value = cache[args.join(",")]
            console.log("value from cache")
        }else{
           value = fn(...args);
            
           cache[args.join(",")] = value;
        }
        return value;
        
    }
}

const memoizedSum = memoize(sum);

memoizedSum(1,2)
setTimeout(()=>{
         memoizedSum(1,2)
    },2000)
