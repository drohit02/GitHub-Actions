const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Build Started in QA Environment");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Build is Running in QA Environment");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Build Completed in QA Environment");
})();