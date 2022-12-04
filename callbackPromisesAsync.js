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


//Using promises


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
    console.log(`before creating post user time was ${user.activityTime}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                console.log(`After creating post ${post.title}`);
                console.log(posts);
                user.activityTime=new Date().getTime();
                console.log(`User last Activity is ${user.activityTime}`);
                resolve();

            }
            else{
                reject('Error Something went wrong');
            }
        
        },1000);
    });

};

function deletePost(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                
                resolve(posts.pop());
            }
            else{   
                reject('Array is Empty now');
            }
        },2000);
    })
}



async function init(){
    try{
        
    const msg1=await createPost({title:'Post Three',body:'Body Three'});
    const msg2=await getPosts();
    
    const msg3=await deletePost();
    const msg4=await getPosts();
    
    const msg5=await deletePost();
    
    const msg6=await getPosts();
    
    const msg7=await deletePost();
    
    const msg8=await getPosts();
    
    const msg9=await deletePost();
    const msg10=await getPosts();
    
    }
    catch(err){
        console.log(err);
    }



    

    // .then(()=>{
    //     getPosts();
    //     deletePost().then(()=>{
    //         getPosts();
    //         deletePost().then(()=>{
    //             getPosts();
    //             deletePost().then(()=>{
    //                 getPosts();
    //                 deletePost().then(()=>{

    //                 })
    //                 .catch((err)=>{
    //                     console.log(err);
    //                 });
    //             }).catch((err)=>{
    //                 console.log(err);
    //             });
    //         }).catch((err)=>{
    //             console.log(err);
    //         });
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }).catch(err=> console.log(err));
}
init();

// createPost({title:'Post Three',body:'Body Three'})
//     .then(()=>{
//         getPosts();
//         deletePost().then(()=>{
//             getPosts();
//             deletePost().then(()=>{
//                 getPosts();
//                 deletePost().then(()=>{
//                     getPosts();
//                     deletePost().then(()=>{

//                     })
//                     .catch((err)=>{
//                         console.log(err);
//                     });
//                 }).catch((err)=>{
//                     console.log(err);
//                 });
//             }).catch((err)=>{
//                 console.log(err);
//             });
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }).catch(err=> console.log(err));


    



/*
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
            
            if(posts.length>0){
                const postElement=posts.pop();
                resolve();
            }
            else{   
                reject();
            }
        },5000);
    })
}
*/


    







// deletePost2().then(getPosts).catch(err=>console.log('Array is empty'));
// deletePost3().then(getPosts).catch(err=>console.log('Array is empty'));
// deletePost4().then(getPosts).catch(err=>console.log('Array is empty'));
// deletePost5().then(getPosts).catch(err=>console.log('Array is empty'));




//deletePost().then(getPosts).catch(err=>console.log('Array is empty'));
//deletePost().then(getPosts).catch(err=>console.log('Array is empty'));

//Promise.all -
// const promise1=Promise.resolve('Hello world');
// const promise2=20;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye'));
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))




// //Async wait

// console.log('person1 ticket');
// console.log('person2 ticket');
// console.log('person3 ticket');

// const friendBringingTicket=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('ticket');
//     },2000);
// });

// const getPopcorn=friendBringingTicket.then((t)=>{
//     console.log('friends have ticket');
//     console.log('f1 we should go in ');
//     console.log('f2:I am hungry');
//     return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)});
// });

// const getButter=getPopcorn.then((t)=>{
// console.log('f1: i got some popcorn');
// console.log('lets go in');
// console.log('f2:i need butter in it')

// return new Promise((resolve,reject)=>{resolve(`${t} butter`)});
// });
// getButter.then((t)=>{console.log(t)});


// const preMovie=async ()=>'preMovie';
// //it returns a promise
// preMovie().then((t)=>{
//     console.log(t);
// });

/*
const preMovie= async ()=>{

    const bringTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('shows ticket')},3000);
    });

    // const getPopcorn=new Promise((resolve,reject)=>{
    //     resolve('popcorn')
    // });

    // const applyButter= new Promise((resolve,reject)=>{resolve('butter ')});
    // const getCoke= new Promise((resolve,reject)=>{resolve('Coke ')});
    // const getCandy= new Promise((resolve,reject)=>{resolve('Candy ')});
    // let ticket=await bringTicket;    
    // let [popcorn,butter,candy,coke]=await Promise.all([getPopcorn,applyButter,getCandy,getCoke]);

    
    // 
    // Each of these should be done together 
    // once everyone is done show tickets only than
    // console.log(`${popcorn} ${butter} ${candy} ${coke}`);
    let ticket;
    try{
        ticket=await bringTicket; 
    }
    catch(e){
        ticket='no tickets available'
    }
    return ticket;

}

preMovie().then((t)=>{console.log(`person3  ${t}`)});


console.log('person 5 ticket');
console.log('person 6 ticket');
*/