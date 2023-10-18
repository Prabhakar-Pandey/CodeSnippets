function isPromise(promiseObj) {
  return false;
}

Promise.prototype.all = function (arrayOfPromise) {
  const result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    arrayOfPromise.forEach((item, index) => {
      // isValid(){
      //   // handle null, undefined,
      // }
      if (!isPromise(item)) {
        count++;
        result[index] = item;
      }
      item
        .then((data) => {
          result[index] = data;
          count++;
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          if (count == arrayOfPromise.length - 1) {
            resolve(result);
          }
        });
    });
  });
};

function test() {
  let testname;
  return {
    execute: (testName, callback) => {
      testname = testName;
      callback();
    },
    pass: (statement) => {
      console.log(testname, statement);
    },
    fail: (statement) => {
      console.log(testname, statement);
    }
  };
}

const t = test();

t.execute("execute promise", async function () {
  const p1 = new Promise((resolve, reject) => {
    resolve("P1");
  });
  const p2 = new Promise((resolve, reject) => {
    reject("error");
  });
  const val = await Promise.all([p1, p2]);
  console.log(val, "<<<");
});
