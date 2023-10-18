function MyPromise(callback){


    const thenCallbacks = [];
    let errorCallbacks = null;
    let finallyCallback = null; 

    function resolve(value){
        // execute all thencallbacks
        let result = null;
        thenCallbacks.forEach(item=>{
            if(typeof item==='function'){
                if(!result){
                    result = value;
                }
                result = item(result)
            }
        })


        //finallyCallback();
    }

    function reject(errorValue){
        errorCallbacks(errorValue)
        //finallyCallback();
    }

    callback(resolve,reject)

    return {
        then:function(cb){
            thenCallbacks.push(cb)
            return this;
        },
        catch:function(errorCb){
            errorCallbacks = errorCb
        },
        finally:(finallyCb)=>{
            finallyCallback = finallyCb
        }
    }

}

var promise = new MyPromise((resolve,reject)=>{

    setTimeout(()=>{
        //resolve("resolve promise")
        resolve("resolve statement!")
    },1000)

})

promise.then((data)=>{
    console.log(data)// resolve promise
}).then((data)=>{
    console.log(data)// resolve promise
}).catch((err)=>{
    console.log(err,"<<<<<<")
})