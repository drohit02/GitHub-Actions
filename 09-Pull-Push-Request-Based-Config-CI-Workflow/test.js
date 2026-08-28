console.log("Node JS : Test Runner Initiated!!");

const sleepTime = ms => new Promise(resolve => setTimeout(resolve,ms));

(async ()=> {
    await sleepTime(2400);  
    console.log("Node JS : Test Running!!")

})();

(async ()=> {
    await sleepTime(2400);  
    console.log("Node JS : Test Ran Successfully!!")

})();