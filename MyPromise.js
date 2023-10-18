//console.log("hi") // synchronus code

function MyPromise(cb){
    const thenCallbacks = [];
    const catchCallbacks = [];
    const finallyCallBacks = [];
    var promiseObj = {
        then:(thenCB)=>{
            thenCallbacks.push(thenCB);
            return promiseObj;
        },
        catch:(catchCB)=>{
            catchCallbacks.push(catchCB);
            return promiseObj;
        },
        finally:(finallyCB)=>{
            finallyCallBacks.push(finallyCB);
        },
        state:"Pending"
    }

    const resolve = (data) =>{
        promiseObj.state = "Fulfilled";
        return thenCallbacks.reduce((acc,fn, index)=>{
            let returnFn;
           if(typeof fn === 'function'){
               returnFn = fn(data)
           }
            if(index === thenCallbacks.length-1){
                finallyCallBacks.forEach((finallyFn)=>{
                   if(typeof finallyFn === 'function'){
                       finallyFn();
                   }
            
                });
            }
           
            return returnFn;
        },fn=thenCallbacks[0]);
    }

    const reject = (error) => {
        promiseObj.state = "Fulfilled";
        catchCallbacks.forEach((fn)=>{
           if(typeof fn === 'function'){
               fn(error)
           }
            
        })
        finallyCallBacks.forEach((finallyFn)=>{
           if(typeof finallyFn === 'function'){
               finallyFn();
           }
    
        });
    }

    try{
      cb.call(promiseObj,resolve.bind(promiseObj),reject.bind(promiseObj))  
    }catch(error){
        thenCallbacks.forEach((fn)=>{
           if(typeof fn === 'function'){
               fn(error)
           }
            
        });
    }finally{
        finallyCallBacks.forEach((fn)=>{
           if(typeof fn === 'function'){
               fn();
           }
            
        });
    }
    return promiseObj;
}



const promise = new MyPromise((resolve,reject)=>{
   setTimeout(()=>{
       //resolve("I am resolved now!")
       reject("Error: I got errored while execution")
   },1000) 
})

promise.then((data)=>{
   console.log(data, "I am from 1st then") // I am resolved now! 
    return data
}).then((data)=>{
    console.log(data, "I am from 2nd then")
}).catch((error)=>{
    console.log(error) // Error: I got errored while execution
}).finally(()=>{
    console.log("I am finally block!")
})
