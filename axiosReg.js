const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#username');
const emailInput=document.querySelector('#useremail');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

document.addEventListener('DOMContentLoaded',showUser);
function showUser(){
    axios.get('https://crudcrud.com/api/76e35193c63443adae3f0a47809d2e04/appointmentData')
        .then((res)=>{
            Object.keys(res.data).forEach((k)=>{
                const userInfo=res.data[k];
                toCreateListItem(userInfo);
            })
        })

}

function onSubmit(e){
    e.preventDefault();
    

    if(nameInput.value===''|| emailInput.value===''){
        //add css class of error for msg
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }

    else{
        
        
        const user={
            'name':nameInput.value,
            'email':emailInput.value

        }

        axios.post('https://crudcrud.com/api/76e35193c63443adae3f0a47809d2e04/appointmentData',user)
        .then((res)=>{console.log(res.data);
        toCreateListItem(res.data);
        })
        .catch((err)=>{console.log(err)});

        nameInput.value='';
        emailInput.value='';
    }

}


function toCreateListItem(userDetails){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${userDetails.name} : ${userDetails.email}`));

    //for delete
    var deleteBtn=document.createElement('input');
    deleteBtn.id='deleteUser'
    deleteBtn.type='button'
    deleteBtn.value='Delete'
    deleteBtn.className='deleteBtn';
    deleteBtn.style.border='3px solid red';
    deleteBtn.addEventListener('click',function(){
        localStorage.removeItem(userDetails.email);
        li.remove();
    });
    li.appendChild(deleteBtn);

    //for edit 
    var editBtn=document.createElement('input');
    editBtn.id='editUser'
    editBtn.type='button'
    editBtn.value='Edit'
    editBtn.className='editBtn';
    editBtn.style.border='3px solid blue';
    editBtn.addEventListener('click',function(){
            document.getElementById('name').value=userDetails.name;
            document.getElementById('email').value=userDetails.email;
            li.remove();
    });
    li.appendChild(editBtn);


    userList.appendChild(li);






}