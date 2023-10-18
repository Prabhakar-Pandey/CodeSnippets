function NewClass () {
    NewClass.prototype.val = this.val+1; 
    this.val = NewClass.prototype.val;
    this.getNumber = function(){
        return this.val;
    }
}

NewClass.prototype.val = 0


var a = new NewClass()

console.log(a.getNumber()) // 1

var b = new NewClass()

console.log(b.getNumber()) // 2
console.log(a.getNumber()) // 1
console.log(b.getNumber()) // 2
