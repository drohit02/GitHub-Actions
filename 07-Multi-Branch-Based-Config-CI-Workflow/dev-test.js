console.log("Node JS : Develop Environment Test Runner Initiated!!");

const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

(async ()=> {
    await sleepTime(2400);  
    console.log("Node JS : Develop Environment Test Running!!")

})();

(async ()=> {
    await sleepTime(2400);  
    console.log("Node JS : Develop Environment Test Ran Successfully!!")

})();