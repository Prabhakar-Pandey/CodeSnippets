const myArr = [];

const myArr2 = [];



Array.prototype.addListener = function(event,callback){
    this.__proto__.listnerFactory = {
        add:[],
        remove:[]
    }

    if(event==="add"){
       this.__proto__.listnerFactory.add.push(callback)
    }
}

Array.prototype.dispatchAction = function(event){
    if(event==="add"){
       let callBacks = this.__proto__.listnerFactory.add;
        if(callBacks.length){
            callBacks.forEach((cb)=>{
                if(typeof cb === 'function'){
                    cb();
                }
            })
        }
    }
}


myArr.addListener('add', (items) => {
    console.log("added to listner")
})


Array.prototype.newPush = function(data){
    this.push(data)
    this.dispatchAction("add")
}

myArr.newPush(1)
myArr2.newPush(2)

console.log(myArr,myArr2);