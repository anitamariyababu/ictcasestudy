function validate(){
let username=document.getElementById("username");
let error=document.getElementById("error");
return uservalidate(username,error);

}
function uservalidate(){
    let pwd=document.getElementById("pwd");
    let error4=document.getElementById("error4");
    let regexp="admin";
    if(username.value==regexp){
        error.innerHTML="Valid";
        error.style.color="green";
        return passwordValidation(pwd,error4);
    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;
    }
}

function passwordValidation()
    {
        let exppwd="12345";
     if(pwd.value==exppwd)
      {
        error4.innerHTML="Password format accepted!";
        error4.style.color="green";
        return true;
      }
     else{
    
        error4.innerHTML="Password format not accepted";
        error4.style.color="red";
        return false;
    
         } 
      
    }
//     function password2Validation(){
//       if (strong.test(pwd.value)) 
//           {
//             error4.innerHTML="Strong password!";
//             error4.style.color="green";
//             return password3Validation();
            
//           }

//         else if (medium.test(pwd.value)) 
//           {
//             error4.innerHTML="Medium strength password!";
//             error4.style.color="orange";
//             return password3Validation();
            
            
//           }
//         else
//           {
//             error4.innerHTML="Weak password!";
//             error4.style.color="red";
//             return password3Validation();
            
            
//           }
//    }
 

//     function password3Validation(){
//       if(pwd2.value==pwd.value )
//       {
//         error5.innerHTML="Password confirmed.";
//         error5.style.color="green";
//         return true;
//       }
//      else{
//         error5.innerHTML="Invalid confirmation. Please enter the password entered above.";
//         error5.style.color="red";
//         return false;
    
//          } 
//     }   