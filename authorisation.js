const Alogin = document.getElementById('authorisLogin')
const Apassword = document.getElementById('authorisPassword')
const BtnCreate = document.getElementById('createUser')

let login = [];
let password = [];

BtnCreate.addEventListener('click', function(e){
    e.preventDefault();
    if(Alogin.value === '' || Apassword.value === ''){
        alert("поля пустые")
        return;
    }
    login.push(Alogin.value)
    password.push(Apassword.value)
    
    localStorage.setItem('login', Alogin.value)
    localStorage.setItem('password', Apassword.value)
    console.log(Apassword.value);
    console.log(Alogin.value);
    window.location.href = 'nextList.html';
});

const PLogin = document.getElementById('PLogin');
const PPassword = document.getElementById('LoginPassword');
const JoinUser = document.getElementById('JoinUser');

JoinUser.addEventListener('click', function(e){
    e.preventDefault();
    if(PLogin.value === '' || PPassword.value === ''){
        alert("поля пустые")
        return;
    }
    const FromBaseLogin = localStorage.getItem('login')
    const savedLogin = PLogin.value;
    const FromBasepassword = localStorage.getItem('password')
    const savedpassword = LoginPassword.value;

    if(savedLogin === FromBaseLogin || savedpassword === FromBasepassword){
        console.log('логин и пароль правильный');
    }else{
        console.log("ты даун");
        return;
    }
    window.location.href = 'nextList.html';
});



function checkAge(age)
    {
        return new Promise(function (resolve, reject)
        {
            if(age >=18){
                resolve('доступ разрешен');
            }else{
                reject('доступ запрещен');
            }
        })   
    }
checkAge(20).then(value => console.log(value));
checkAge(10).catch(error => console.log(error));