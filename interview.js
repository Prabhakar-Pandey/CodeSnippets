

var length = 6;  // 

function get(){ 
    console.log(this.length) 
} 

 

var obj = { 
  length: 10,
  getLength: function(a){
      a();// 6
      arguments[0]() // 2
  }
}

 

obj.getLength(get, 9); 

// var obj = {
// 	a: {
// 	b: {
// 		c: 12,
// 		j: false
// 	},
// 	k: null
// 	}
// };

// console.log(findPath(obj, 'a.b.c'))

function findPath(obj,stringPath){
	const arrayOfKeys = stringPath.split('.')
	const keyToCheck = arrayOfKeys.shift(); // need to check
    const updatedStringPath = arrayOfKeys.join('.');
    if(obj[keyToCheck] && arrayOfKeys.length){
    	return findPath(obj[keyToCheck],updatedStringPath)
    }else{
    	return obj[keyToCheck]
    }
}



const UserList = {
  Id: 1,
  Name: "Jeff",
  partTime: true,
  Employees: [
    {
      Id: 2,
      Name: "Vivek",
      partTime: true,
      Employees: [
        {
          Id: 3,
          Name: "Vijay",
          partTime: true,
          Employees: [
            {
              Id: 4,
              Name: "Afsal",
              partTime: true,
              Employees: [
                {
                  Id: 5,
                  Name: "Sai",
                  partTime: true,
                  Employees: [{}]
                }
              ]
            },
            {
              Id: 6,
              Name: "Mani",
              partTime: true,
              Employees: [
                {
                  Id: 7,
                  Name: "Kshitiz",
                  partTime: true,
                  Employees: [{}]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


function getManagers(obj,empName, result=''){
    
    result += ' '+obj.Name;
    if(obj.Name==empName){ // this is for first case where 
        // console.log(result,"<<<<")
        return result
    }
    if(obj.Employees && obj.Employees.length){
        return obj.Employees.map(emp=>{
            
            return getManagers(emp,empName,result)
        }).join('')
    }
}

console.log(getManagers(UserList,"Sai"))

// o/p 

// 6 means -> JEFF ->VIvek->Vijay->Mani