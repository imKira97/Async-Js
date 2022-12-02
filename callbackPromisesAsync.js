/*Using Calbacks

const posts=[
    {title:'Post One',body:'Body One',createdAt:new Date().getTime()},
    {title:'Post Two',body:'Body Two',createdAt:new Date().getTime()},
    
];

let intervalId=0;

//clearInterval is used to stop interval
function getPosts(){
    // setTimeout(()=>{
    //     let output='';
    //     // posts.forEach((post,index)=>{
    //     //     output+=`<li>${post.title} created at ${(new Date().getTime()-posts.createdAt)/1000}seconds </li>`;
    //     // });

    //     for(let i=0;i<posts.length;i++){
    //         output+=`<li>${posts[i].title} created at ${(new Date().getTime()-posts[i].createdAt)/1000}seconds </li>`;
    //     }
    //     document.body.innerHTML=output;
    // },1000);
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        // posts.forEach((post,index)=>{
        //     output+=`<li>${post.title} created at ${(new Date().getTime()-posts.createdAt)/1000}seconds </li>`;
        // });

        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title} created at ${(new Date().getTime()-posts[i].createdAt)/1000}seconds </li>`;
        }
        document.body.innerHTML=output;
        },2000);
}

function createPost(post,callback){
    
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}



getPosts();

createPost({title:'post Three',body:'Body three'},getPosts);
createPost({title:'post Four',body:'Body four'},getPosts);

var timer;
var count=0;
function lastEditinSeconds(){
    count=0;
    countInterval(timer);
    timer=setInterval(()=>{
        count++;
        console.log(count);

    },1000);
}
*/

/*
Using promises
*/

const posts=[
    {title:'Post One',body:'Body One'},
    {title:'Post Two',body:'Body Two'},
    
];

function getPosts(){
    setTimeout(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        output+=`<li>${posts[i].title}</li>`;
    }
    document.body.innerHTML=output;
    

},1000);
};
const user={username:'user',activityTime:new Date().getTime()};

let promiseFun=()=>{
    getPosts();
    updateLastUserActivity();

}

function createPost(post){
    console.log(`before creating post user time was ${user.activityTime}`)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error Something went wrong');
            }
            console.log(`After creating post ${post.title}`);
            console.log(posts);
            user.activityTime=new Date().getTime();
            console.log(`User last Activity is ${user.activityTime}`);
        },1000);
    });

};

function updateLastUserActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        },1000);
    });
}


createPost({title:'Post Three',body:'Body Three'})
    .then(promiseFun)
    .catch(err=>console.log(err));

    

function deletePost(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            const pop1=posts.pop();
            if(pop1===undefined){
                reject();
            }
            else{
                resolve();
            }
        },3000);
    })
}
function deletePost2(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            const pop1=posts.pop();
            if(pop1===undefined){
                reject();
            }
            else{   
                resolve();
            }
        },3000);
    })
}
function deletePost3(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            const pop1=posts.pop();
            if(pop1===undefined){
                reject();
            }
            else{   
                resolve();
            }
        },4000);
    })
}
function deletePost4(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            const pop1=posts.pop();
            if(pop1===undefined){
                reject();
            }
            else{   
                resolve();
            }
        },5000);
    })
}
function deletePost5(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            const pop1=posts.pop();
            if(pop1===undefined){
                reject();
            }
            else{   
                resolve();
            }
        },5000);
    })
}



    




getPosts();
deletePost().then(()=>{
    getPosts();
    console.log(posts);
    
}).catch(err=>console.log('Array is empty'));


// deletePost2().then(getPosts).catch(err=>console.log('Array is empty'));
// deletePost3().then(getPosts).catch(err=>console.log('Array is empty'));
// deletePost4().then(getPosts).catch(err=>console.log('Array is empty'));
// deletePost5().then(getPosts).catch(err=>console.log('Array is empty'));




//deletePost().then(getPosts).catch(err=>console.log('Array is empty'));
//deletePost().then(getPosts).catch(err=>console.log('Array is empty'));

/*Promise.all -
const promise1=Promise.resolve('Hello world');
const promise2=20;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye'));
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

*/

