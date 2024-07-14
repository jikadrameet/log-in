let title = document.querySelector('.title');
let signup = document.querySelector('.signup');
let Email = document.querySelector('.Email');
let ConfirmPassword = document.querySelector('.ConfirmPassword');
let google = document.querySelector('.google');
let button =  document.querySelector('.btn');

google.addEventListener('click',()=>{
    Email.style.maxHeight = '2px';
    ConfirmPassword.style.maxHeight = '0vh';
    Email.style.display = 'none';
    ConfirmPassword.style.display = 'none';
    title.style.display = 'none';
    signup.innerHTML= 'Log in';
    google.classList.add("disable");
    google.classList.remove("enable");
    
});
button.addEventListener('click',()=>{
    Email.style.maxHeight = '60px';
    ConfirmPassword.maxHeight = '60px';
    signup.innerHTML= 'sign Up';
    google.classList.remove("disable");
    google.classList.add("enable");
    
});




