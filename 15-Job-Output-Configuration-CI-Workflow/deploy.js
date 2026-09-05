const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App deployment Started");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App deployment is RUunning");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Deployment Completed");
})();