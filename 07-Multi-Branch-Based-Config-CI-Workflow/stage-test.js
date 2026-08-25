console.log("Node JS : Stagging Environment Test Runner Initiated!!");

const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

(async ()=> {
    await sleepTime(2400);  
    console.log("Node JS : Stagging Environment Test Running!!")

})();

(async ()=> {
    await sleepTime(2400);  
    console.log("Node JS : Stagging Environment Test Ran Successfully!!")

})();