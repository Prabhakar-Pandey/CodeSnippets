function updateTheIndexValue(index1,index2, arr){
    return arr.map((item,index)=>{
        if(index===index1||index===index2){
            return null
        }else{
            return item
        }
    })
}

function checkIndexValues(arr, value){
    const result=[]
    arr.forEach((item,index)=>{
        if(item===value){
            result.push(index)
        }
    })
    return result;
}

function getPairs(arr,sumOfNumber){
    const result = []

    arr.forEach((item, index)=>{
        const remiderValue = sumOfNumber-item;// 6
        const indexOfReminder = checkIndexValues(arr,remiderValue);//mdifying[]
        if(indexOfReminder.length>0){
            indexOfReminder.forEach(value=>{
                result.push({value1:index,value2:value});
            })
            
            arr=updateTheIndexValue(index,indexOfReminder, arr)
        }
    
    })

    return result
}


const result = getPairs([-1,1,2,3,4,4,6],5);
console.log(result)



