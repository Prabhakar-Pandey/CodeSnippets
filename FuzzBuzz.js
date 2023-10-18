// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz


var configs = [
    {
        condition:{
          and:["value % 3===0", "value%5===0"],
        },
        printStatement:"FizzBuzz"
    },
    {
        condition:{
            statement:"value%3===0"
        }, 
        printStatement:"Fizz"
    },{
        condition:{
            statement:"value%5===0"
        }, 
        printStatement:"Buzz"
    }
]


function isValid(statement,value){
    const data = eval(statement);
    return data;
}


function evaluate(configs, value){
    let val = false;
    for(var j=0;j<configs.length;j++){
        const {and,statement} = configs[j].condition;
        // console.log(or,statement,"<<<<")
        if(and){
            val = isValid(and[0],value)
            for(var i=1;i<and.length;i++){
              val = val && isValid(and[i],value);
            }
            if(val){
               val = configs[j].printStatement; 
                break;
            }
        }else if(statement){
            if(isValid(statement,value)){
                val= configs[j].printStatement;
                break;
            }
        }
        
    }
    return val
    
  
}

for(var i=1;i<=15;i++){
        const printStatement = evaluate(configs,i);
    //console.log(printStatement,i,"<<<")
        if(printStatement != false){
            console.log(printStatement)
        }else{
            console.log(i)
        }
    
    
    
}


// SearchComponent

// Requirements: props: ui layout[inputBox], api
// 1. debuounce
    
    
//     [[][]]