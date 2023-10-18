// 1. (req, res, next)=>
//2. (err, req, res, next )=>

class ExpressMiddleware {
    #fucArray = [];
    constructor(){
        this.index = 0;
    }
    next(){
        this.index += 1;
        this.start(this.req,this.res)
    }
    error(){
        console.log("from middleware")
    }
    use(fn){
        
        this.#fucArray.push(fn)
    }

    start(req,res) {
        this.req = req;
        this.res = res;

        try{
            if(this.#fucArray[this.index].length===3){
                this.#fucArray[this.index].call(this,this.req,this.res,this.next.bind(this))
            }
        }catch(e){
            for(var i=this.index;i<this.#fucArray.length;i++){
                if(this.#fucArray[i].length===4){
                    this.index = i;
                    this.#fucArray[i].call(this,e,this.req,this.res,this.next.bind(this))
                    
                }
            }
        }
        
    }
}

const app = new ExpressMiddleware()

app.use((req, res, next)=>{
    console.log('1')
    next()
})

app.use((req, res, next)=>{
    console.log('2')
    next()
})

app.use(
    (req, res, next)=>{
        console.log("3")
       throw new Error("Error 3")
    }
)
app.use(
    (req, res, next)=>{
        console.log("10")
    }
)
app.use((err, req, res, next)=>{
    console.log(err,"<<<<")
    next()
})

app.use((req, res, next)=>{
    console.log('5')
})

app.start({name:"req"},{name:'res'})





