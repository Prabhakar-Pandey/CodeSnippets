/*

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".


Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

*/


/**
 * @param {string} s
 * @return {number}
 */


//[1,2,3]

var Stack = function(){

    this.arr = [];
    this.push = (item)=>{
        this.arr.push(item)   
        //console.log(this.arr)
    }
    this.pop = ()=>{
        const item = this.arr.pop();
        //console.log(this.arr)
        return item
    }
    this.top = ()=>{
        //console.log(this.arr)
        if (this.arr.length === 0) {
          return null;
        }
        return this.arr[this.arr.length - 1];
    }
    

      this.isEmpty = () => {
        return this.arr.length === 0;
      }

    return this;
}

var parenthesesMap = {
    ")":"("
}


var longestValidParentheses = function(s) {
    var arrOfChar = s.split(''); //[")","(",")"]
    var stk = new Stack();
    let maxLength = 0;
      let currentLength = 0;
    
      arrOfChar.forEach((char) => {
        let stackTopChar = stk.top();
    
        if (!stackTopChar || char !== parenthesesMap[stackTopChar]) {
          stk.push(char);
        } else {
          stk.pop();
          currentLength += 2;
          maxLength = Math.max(maxLength, currentLength);
        }
      });
    
      return maxLength;
    
};


console.log("Output for" + "`)()())` is " + longestValidParentheses(")()())"))
console.log("Output for" + "`)())` is " + longestValidParentheses(")())"))