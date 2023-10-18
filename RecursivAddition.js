/*
    A number is said to be a magic number, if the sum of its digits are calculated till a single digit recursively by adding the sum of the digits after every addition. If the single digit comes out to be 1,then the number is a magic number. 

For example- 
Number= 50113 
=> 5+0+1+1+3=10 
=> 1+0=1 
This is a Magic Number 
*/

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

function replaceWithUnderscore(str, ch){
    return str.replace(ch,"_")
}

function replaceUnderscoreWithChar(str,ch,index){
    let newStr = ""
    for(var i=0;i<str.length;i++){
        if(i==index){
            newStr += ch
        }else{
            newStr += str[i]
        }
    }
    return newStr;
}

var customSortString = function(order, s) {
    let objectMap = [];
    let newStr = s;
    for(var i=0;i<s.length;i++){
        let position = order.indexOf(s[i]);
        if(position>-1){
            newStr = replaceWithUnderscore(newStr,s[i])
            objectMap.push({
                current:i,
                orderIndex:position,
                char:s[i]
            }) 
        }
    }
    for(var i=0;i<objectMap.length;i++){
        newStr = replaceUnderscoreWithChar(newStr,objectMap[i].char,objectMap[i].orderIndex)
    }
    
    return newStr
};

console.log(customSortString("kqep","pekeq"))
var sortedSquares = function(nums) {
    const squreArray = nums.map(item=>item*item)
    return squreArray.sort()
};

//sortedSquares([-4,-1,0,3,10])


function sumOfDigits(number){
    if(number<10){
        return number;
    }else{
        let numberString = String(number);
        let sum = 0;
        for(var i=0;i<numberString.length;i++){
            sum += Number(numberString[i])
        }
        return sumOfDigits(sum);
    }
}

//console.log(sumOfDigits(50113));