/**
 * Author: Sushant Kumar Rout
 * @returns 
 * async and await is ment for make the promise call synchronised.
 */
async function myData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
      return promise;
}

async function test() {
    console.log("APplication Start");
    console.log((await myData()));
    console.log("Application end");
}

test();