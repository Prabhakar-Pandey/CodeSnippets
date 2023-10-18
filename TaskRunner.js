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
const taskE = {
  name: "E",
  time: 1000,
  deps: [taskD, taskC]
};
let jobs = [];



function executeTask(task){
  let startTime = formatDate(new Date());
      setTimeout(() => {
        //console.log("timeout",task.name)
        let data = Date;

        if (jobs.indexOf(task.name) === -1) {
          let endTime = formatDate(new Date());
          jobs.push(task.name);
          resolve();
          console.log(
            task.name,
            startTime,
            endTime
          );
        }
      }, task.time);
}


function runTask(task) {
  // ...

  return new Promise(async (resolve, reject) => {
    if (task.deps.length) {
      // task.deps.forEach(async task=>{

      // })
      for (let i = 0; i < task.deps.length; i++) {
        await runTask(task.deps[i]);
      }
      
    }else if(jobs.indexOf(task.name)===-1){
      await runTask(task);
    }
    if (task.time) {
      let startTime = formatDate(new Date());
      setTimeout(() => {
        //console.log("timeout",task.name)
        let data = Date;

        if (jobs.indexOf(task.name) === -1) {
          let endTime = formatDate(new Date());
          jobs.push(task.name);
          resolve();
          console.log(
            task.name,
            startTime,
            endTime
          );
        }
      }, task.time);
    }
  });

  // if(jobs.indexOf(task.name)===-1){
  //   jobs.push(task.name)
  // }
}

const allJobsOrder = runTask(taskE);
console.log(jobs);
