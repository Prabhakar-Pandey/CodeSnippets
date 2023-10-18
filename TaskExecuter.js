

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
function executeTask(task) {
  const completedTasks = [];

  const execute = (t) => {
    let startTime = formatDate(new Date());
    console.log(`Executing task ${t.name}`, startTime);
    setTimeout(() => {
        let endTime = formatDate(new Date());
      console.log(`Completed task ${t.name}`,endTime);
      

      t.deps.forEach(dep => {
        if (!completedTasks.includes(dep)) {
          execute(dep);
        }
      });
        completedTasks.push(t);
    }, t.time);
  };

  execute(task);
}


executeTask(taskE);