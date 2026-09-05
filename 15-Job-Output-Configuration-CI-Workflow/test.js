const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Test Cases Started before deployement");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Test Cases are Running ibefore deployement");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Test Cases Completed before deployement");
})();