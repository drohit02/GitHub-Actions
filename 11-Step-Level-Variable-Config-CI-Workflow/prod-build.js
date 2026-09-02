const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Build Started in Prod Environment");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Build is Running in Prod Environment");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Build Completedin Prod Environment");
})();