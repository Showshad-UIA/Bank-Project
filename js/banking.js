document.getElementById('login-submit').addEventListener('click',function(){
    const userEmail=document.getElementById('email-field');
    const Email= userEmail.value;
    // password field
    const userPassword=document.getElementById('password-field');
    const Password= userPassword.value; 
    if(Email=='raihan@gmail.com'&& Password=='secret'){
     console.log('valid user');
     
    //  send to diffrent page
     window.location.href='banking.html';
    }
    else{
        console.log('invalid user!');
    }
})