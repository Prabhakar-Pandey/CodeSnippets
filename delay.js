function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true) 
        },time)
    })
}


async function something() {

    console.log(new Date());
    
    await delay(1000);
    
    console.log(new Date());
    
}

//something();



const arr = [1,2,3,4,5];

arr.reduce((acc, index)=>{
    acc.push(String(index))
    return acc;
},[])


// use only reduce function to output: ['1', '2', '3', '4', '5']
