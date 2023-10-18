function sortArrayInAccendingOrder(arr){
        return arr.sort((a,b)=>a.remainingSeats-b.remainingSeats)
    }
function sortArrayInDecendingOrder(arr){
        return arr.sort((a,b)=>a-b).reverse();
    }
function getBoatName(boatLimit){
    let remainingWeight = [];
    let index = 0;
    let boatName = "boat" + index;
    
    
    return function(value, result){
        if(result){
            return remainingWeight
        }
        if(remainingWeight.length==0){
            // first person
            let remainingSeats = boatLimit-value;
            remainingWeight.push({remainingSeats,boatName:boatName,count:1});
        }else{
            let sortedRemaingWeight = sortArrayInAccendingOrder(remainingWeight)
            remainingWeight = sortedRemaingWeight
            let isValueNotInserted = false;
            sortedRemaingWeight.map(item=>{
                if(item.remainingSeats>=value && item.remainingSeats-value >= 0 && item.count<2 && !isValueNotInserted){
                    let remainingSeats = item.remainingSeats-value;
                     item.remainingSeats = remainingSeats;
                     item.count++;
                    isValueNotInserted = true;
                }
            })
            if(!isValueNotInserted){
                index = index+1;
                let boatName = "boat" + index;
                let remainingSeats = boatLimit-value;
                remainingWeight.push({remainingSeats,boatName:boatName,count:1});
                remainingWeight = sortArrayInAccendingOrder(remainingWeight)
            }
        }
    }
}

function getNumberOfBoatRequired(arr, limit){
    const boatValue = getBoatName(limit)
    arr.forEach(item=>{
        boatValue(item)
    })
    const result = boatValue(null,true);
    //console.log(result)
    return result.length;
    
}


var numRescueBoats = function(people, limit) {
    people = sortArrayInDecendingOrder(people)
    return getNumberOfBoatRequired(people, limit)
};

//console.log(numRescueBoats([5,1,7,4,2,4],7))

// there is more better solution available

// 2. For example, given the list of words 
//["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, 
//you should return the following:

// ["the  quick brown", # 1 extra space on the left
// "fox  jumps  over", # 2 extra spaces distributed evenly
// "the   lazy   dog"] # 4 extra spaces distributed evenly


function getDistributedSpace(arr,size){
    let resultArray = [];
    let completeWord = '';
    arr.forEach((word)=>{
        if(completeWord.length<size){
            completeWord = completeWord.length>0 ? completeWord  + " " + word : word;
            
        }else{
            let tempArr = completeWord.split(" ");
            let wordsToPush = [];
            let lastWord = '';
            tempArr.forEach((item,index)=>{
                if(tempArr.length-1===index){
                    lastWord = item;
                    return;
                }
                wordsToPush.push(item)
            })
           resultArray.push(wordsToPush.join(' '));
            completeWord = [word, lastWord].join(' '); 
        }
    })
    if(completeWord.length){
        resultArray.push(completeWord)
    }
    let newResultArr = insertSpace(resultArray,size)
    console.log(newResultArr, "result")
}

function insertSpaceInSingleWord(words, numberOfSpaceToDistribute){
    let newWord = words.split('');
        for(var i=0;i<newWord.length;i++){
            if(newWord[i]===" " && numberOfSpaceToDistribute > 0 && newWord[i+1]!==" "){
                newWord[i] = "  ";
                numberOfSpaceToDistribute--;
            }
        }
    if(numberOfSpaceToDistribute>0){
       return insertSpaceInSingleWord(newWord.join(''),numberOfSpaceToDistribute) 
    }
    return newWord
}

function insertSpace(resultArray, size){
    let numberOfSpaceToDistribute=0;
    let newResultArr = [];
    resultArray.forEach((words)=>{
        numberOfSpaceToDistribute = size-words.length;
        let newWord = insertSpaceInSingleWord(words,numberOfSpaceToDistribute)
        newResultArr.push(newWord.join(''))
    })
    return newResultArr;
}

//getDistributedSpace(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],16)


var findSubstring = function(s, words) {
    let length = 0;
    let res = [];
    const wordsMap = words.reduce((acc,word)=>{
        if(!acc[word]){
            acc[word]=true;
        }
        length = word.length;
        return acc;
    },{})
    let i=0;
    let j = length;
    let count = 0;
    let startIndex
    while(i<s.length){
        
        let substr = s.substring(i,j);
        //console.log(substr, wordsMap)
        if(wordsMap[substr]){
            startIndex = startIndex===null?i:startIndex<i?startIndex:i;
            count++;
        }else{
            count = 0;
            startIndex = null;
            
        }
        if(count==words.length){
            res.push(startIndex)
        }
        
        i=i+length;
        j=i+length;
        
    }
    return res;
};

//console.log(findSubstring("barfoofoobarthefoobarman",["foo","bar","the"]))



// var obj = {
//     a:5,
//     b:10,
//     getValue:function(){
//         return this.a
//     }
// }

// var obj2 = Object.assign({},obj);

// obj.__proto__.getValueB=function(){
//         return this.b
//     }


// console.log(obj2.getValueB());


function parent(){
    this.a = 5;
    this.getB=function(){
        return 20;
    }
}


parent.prototype.getValue = function(){
    return this.a
}

var obj3 = {
    a:30
}



// call, bind, apply

//obj.getValue.call(obj3)
// var obj = new parent();



// var obj2 = new parent();

// console.log(obj.getValue());
// console.log(obj2.getValue());
// console.log(obj.getValue.call(obj3));

// promise, promise.all // promise.allSattled

// hoisting, closure, design pattern, factory module, pub sub, singleton

// var obj = {};
// var obj2 = {};
// var obj3 = obj2;
// console.log(obj==obj2)
// console.log(obj===obj2)
// console.log(obj2==obj3)
// console.log(obj==obj3)


class EventEmitter {
  eventFactory = {};

  on = function (eventName, callbackFn) {
    if (this.eventFactory[eventName]) {
      this.eventFactory[eventName].push(callbackFn);
    } else {
      this.eventFactory[eventName] = [callbackFn];
    }
  };
  emit = function (eventName, ...args) {
    if (this.eventFactory[eventName] && this.eventFactory[eventName].length) {
      this.eventFactory[eventName].forEach((cb) => {
        cb(...args);
      });
    } else {
      console.log("No event available");
    }
  };
}

var obj = new EventEmitter();

obj.on("foo", (...args) => {console.log(args)});
obj.on("foo", (...args) => {console.log(args)});
obj.on("bar", (...args) => {console.log(args)});

obj.emit("foo", 1, 2, 3);