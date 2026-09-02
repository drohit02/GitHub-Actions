const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Build Started in Production Environment");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Build is Running in Production Environment");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Build Completedin Production Environment");
})();