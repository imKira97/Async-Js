
/*
after buying the car we will plan the trip 

we will buy car after 5 days and after buying the car we will plan the trip
*/

/*

function buyCar(){
    setTimeout(()=>{
        console.log("buying the car");
        
    },5000);
}

function planTrip(){
    setTimeout(()=>{
        console.log("planing the trip");
        
    
    },2000);
}

buyCar();
planTrip();
*/
/*
The above code will not give us the desried output
1st it will plan trip than buy a car which is not possible 

out plan a trip should wait till buyCar() is done 

so do this 
1st) we will use callback function
2nd) with the help of promises

*/

/*with the help of callback function 

here we pass planTrip as a callback function to buyCar

so after 5sec when buycar get executed call will go planTrip

add new function reachedManali after 1day suppose we plan to go manali it should get executed after planTrip
*/

/*
2
function buyCar(cb1,cb2){
    setTimeout(()=>{
        console.log("buying the car");
        
        cb1(cb2);
        
    },5000);
}

function planTrip(cb){
    setTimeout(()=>{
        console.log("planing the trip for Manali");
        cb();
    
    },2000);
}

function reachedManali(){
    setTimeout(()=>{
        console.log('reached Manali')
    },1000);
}

buyCar(planTrip,reachedManali);//due to mulitple cb function
*/
/*
Suppose there are more task todo like this we could stuck in callback hell 
hence to stop this we can use promise 
*/

//Using Promise
function buyCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('buy a car')
        },5000);
    });
}

function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("planing the trip for Manali");
        
        },2000);
    });
    
}

function reachedManali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached Manali')
        },1000);
    })
    
}

buyCar().then((msg)=>{
    console.log(msg);
    planTrip().then((msg)=>{
        console.log(msg);
        reachedManali().then((msg)=>{
            console.log(msg);
        });
    })
})
