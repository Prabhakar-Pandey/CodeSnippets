console.clear();
// A(1) --|
//        |-- D(1) --|
// B(2) --|          |-- E(1)
//                   |
// C(3) -------------|
//
//
// runTask(<task>)
// <taskName> <startTime> <endTime>

// runTask(taskA)
// A 0 1

// runTask(taskD)
// A 0 1
// B 0 2
// D 2 3

// runTask(taskE)
// A 0 1
// B 0 2
// C 0 3
// D 2 3
// E 3 4

function formatDate(date) {
  return `${date
    .getMinutes()
    .toString()
    .padStart(
      "0",
      2
    )}:${date
    .getSeconds()
    .toString()
    .padStart(0, 2)}`;
}

const taskA = { name: "A", time: 1000, deps: [] };
const taskB = { name: "B", time: 2000, deps: [] };
const taskC = { name: "C", time: 3000, deps: [] };
const taskD = {
  name: "D",
  time: 1000,
  deps: [taskA, taskB]
};
const taskF = {
  name: "D",
  time: 1000,
  deps: [taskA]
};
const taskE = {
  name: "E",
  time: 1000,
  deps: [taskD, taskC]
};
let jobs = [];



function executeTask(task){
  return new Promise((resolve)=>{
    let startTime = formatDate(new Date());
      setTimeout(() => {
        let endTime = formatDate(new Date());
          resolve({
            name:task.name,
            startTime,
            endTime
          });
          console.log(
            task.name,
            startTime,
            endTime
          );
      }, task.time);
  })
  
}
async function buildExecutionContext(tasks, depth=100){
  if(tasks.deps &&tasks.deps.length>0){
    for(let i=0;i<tasks.deps.length;i++){
      await buildExecutionContext(tasks.deps[i], depth-1)
    }
  } 
  return executeTask(tasks)
}

function runTask(tasks) {
  buildExecutionContext(tasks)
}



runTask(taskE);

//console.log(arr,jobsObj)

