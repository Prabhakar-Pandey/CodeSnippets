


var obj = {
    a:4,
    b:"hello",
    c:{
        key:{
            d:"world",
            e:[{key:"test"},{key:"test2"}]
        },
        key2:{
            childKey:{
                test:"Hello World!"
            }
        }
    },
    d:[1,2,4]
}




let resultObj={}

function deepClone(data, result={},key){

    // if(typeof data === 'object'){
    //     let resOB = {};
    //     result[key]=resOB;
    //     Object.keys(data).forEach((key)=>{
    //         if(typeof data[key]!== 'object'){
    //             // this block will take care of all non premitive data type i.e string, number, boolean
    //             resOB[key] = data[key]
    //         }else if(Array.isArray(data[key])){
    //             // will handle array of string number and object

    //             let arr = [];
    //             data[key].forEach(item=>{
    //                 arr.push(deepClone(item))
    //             })
    //             resOB[key] = arr;
                
    //         } else if(typeof data[key]=== 'object'){
                
                
    //             return deepClone(data[key], result, key);
                
    //         }
    //     })
        
    //     return result;
    // } 

    if(typeof data === 'object'){
        let resObj = {};
        if(Array.isArray(data)){
            let newArr = []
            data.forEach((item)=>{
                if(typeof item === 'object'){
                    newArr.push(deepClone(item));
                }else{
                    newArr.push(item);
                }
                
            });
            return newArr;
        }
        
        
        Object.keys(data).forEach((item)=>{
            resObj[item] = deepClone(data[item])
        })
        return resObj;
    }else{
        return data;
    }

    
}

let obj2 = {
    a:{
        b:"test",
        d:[1,2,3],
        e:[{test:"hello world!","test2":{f:"adasd"}}]
    },
    c:"new test"
}

const result = deepClone(obj2);
//result.a.d="Prabhakar";

console.log(JSON.stringify(obj2)===JSON.stringify(result), obj2, result)