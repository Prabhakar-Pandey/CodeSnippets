

var filterEmails = (email) => {
    //test.email+alex@leetcode.com
    
    let localName = email.split('@')[0];
    let domain = email.split('@')[1]
    
    if(localName.indexOf("+")>-1){
        localName = localName.split('+')[0];
    }
    
    localName = localName.replaceAll('.','')
    
    let newMail = localName +'@'+ domain
    console.log(localName,newMail)
    return newMail;
}

//filterEmails("test.email+alex@leetcode.com")

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let maxLeft = 0;
    let current = 0;
    let storedWater = 0;
    let count = 0;
    height.forEach((ht,index)=>{
        current = index;
        storedWater += Math.min(maxLeft,ht)
        let currentMaxLeft = Math.max(maxLeft,ht);
        if(currentMaxLeft>maxLeft){
            maxLeft = currentMaxLeft;
            count = 0;
             
        }else{
            count += 1;
            
        }
    })
    console.log(storedWater)

};

//maxArea([1,8,6,2,5,4,8,3,7])


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const mapObj = {};
    list1.forEach((li,index)=>{
        mapObj[li]=index;
    })
    let minIndex = 10000;
    let resultMap = {};
    let result = [];
    list2.forEach((li,index)=>{
        console.log(mapObj[li])
       if(isNaN(mapObj[li])===false){
           
           resultMap[li] = mapObj[li] + index;
           if(resultMap[li]<=minIndex){
               minIndex = resultMap[li]
           }
       }
    })
    
    console.log(resultMap,minIndex)
    Object.keys(resultMap).map((key)=>{
     if(resultMap[key]==minIndex){
         result.push(key)
     }                        
    })
    
   
    return result;
};

findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],
["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])