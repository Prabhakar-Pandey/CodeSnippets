const arr = [1,2,3,[2,[65]]];
//output = [1,2,3,2,65]
// [1,2,[3]]


function flattenArray(arr, result=[]){
    if(Array.isArray(arr) && arr.length){
        return arr.reduce((acc,item)=>{
            if(Array.isArray(item)){
                return flattenArray(item, acc);
            }else{
                acc.push(item)
                return acc;
            }
            
        },result)
    }
}
//console.log(flattenArray([1,2,[3]]));

//String str1 =“listen”
//String str2= “silent”

//[1,3,45,6,7,44]
// i  j k 

// function removeMaxvalue(arr){


//     return 44
// }

function log(){
    console.log("hi");
}

//Object.prototype.log = log

Object.prototype.log = log

var obj1 = {};
var obj2 = {};

obj1.log() // hi
obj2.log() // hi