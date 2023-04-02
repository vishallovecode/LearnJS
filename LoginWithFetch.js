

//  we need to create login form 

// one login label 
// userName field 
 // password 


 let user_name =  '';
 let user_password = "";

 const loginCont  = document.createElement("div");
  loginCont.style.display = "flex" ;
  loginCont.style.flexDirection= "column";
  loginCont.style.justifyContent = "center";

  // Login Header
  const loginHeader = document.createElement("h3");
  loginHeader.innerText = "Login"
  loginCont.appendChild(loginHeader);


  // userName Label
    const userNamelabel =  document.createElement('label');
    userNamelabel.innerText = "UserName:"
  // userName input 
    const userName =  document.createElement('input')
    userName.style.padding = "5px";
    userName.style.textAlign ='center'
    userName.placeholder = "Type UserName..."
    userName.onchange = userInputChange

    // Password Label
    const passwordlabel =  document.createElement('label');
    passwordlabel.innerText = "Password:"
    // password input 
    const password =  document.createElement('input')
    password.style.padding = "5px";
    password.style.textAlign ='center'
    password.placeholder = "Type Password..."
    password.type = 'password'
    password.onchange =  passwordInputChange

    loginCont.appendChild(userNamelabel);
    loginCont.appendChild(userName);
    loginCont.appendChild(passwordlabel);
    loginCont.appendChild(password);


    const loginButton  = document.createElement("button");
    loginButton.innerText = "Login" 
    loginButton.style.outline = "none"
    loginButton.style.background = "blue"
    loginButton.style.color = "white"
    loginButton.style.fontWeight = "bold"
    loginButton.style.marginTop = "10px"
    loginButton.style.padding = "10px"
    loginCont.appendChild(loginButton);
    loginButton.onclick = loginHandler 

     // hoisit


     function  loginHandler () {

    let payload = {};
    payload.username =  user_name;
    payload.password = user_password;
    let options = {
        method: "POST",
        headers: {  // request headers
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    }
        fetch('https://dummyjson.com/auth/login' ,options).then(res=>{
            if(res.status ==200) {
                return res.json().then(result => {
                   alert(`${result.firstName} ${result.lastName} You have successFully login with us`)
                })
            } else {
               alert("Something went wrong....")
            }
    
        })

     }

     function userInputChange(e) {
        user_name = e.target.value;
    
     }

     function passwordInputChange (e) {
        user_password = e.target.value

     }






  //  SEARCH INPUT BOX 

   
//   https://dummyjson.com/users/search?q=sear&select=id,firstName,lastName,image


const searchBox =  document.createElement('input')
searchBox.style.padding = "5px";
searchBox.style.margin = "15px";

searchBox.style.textAlign ='center'
searchBox.placeholder = "Search for the result"
searchBox.type = 'text'
searchBox.onchange =  searhcInputHandler


loginCont.appendChild(searchBox);

document.body.appendChild(loginCont);


function  searhcInputHandler() {
     //call api with value
}




  