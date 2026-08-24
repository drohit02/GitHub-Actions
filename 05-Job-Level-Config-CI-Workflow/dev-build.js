const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

console.log("Node JS App Build Started in Develop Environment");

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS App Build is Running in Develop Environment");
})();

(async ()=> {
    await sleepTime(2400);
    console.log("Node JS Build Completedin Develop Environment");
})();