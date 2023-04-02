
// Using dom Js can change the css of the elements
// Using dom Js can change the attributes of trhe elements 
// Using dom Js can add actions to the elemnenst
// Using dom js can change the content 
// Using dom js can delete the elements 
// create element
//
let header  = document.createElement('h1');
// header.innerHTML = `<span>Welcome to Learn Js</span>`
header.innerText = `Welcome to Learn Js`

document.body.appendChild(header)

let buttonElement = document.createElement('button') // 
buttonElement.textContent = "Submit"
buttonElement.style.background = 'red'
buttonElement.style.color = "white"
buttonElement.style.height = "50px"
buttonElement.style.width = "150px"
buttonElement.style.fontSize ="20px"
buttonElement.style.margin = '20px'
buttonElement.type = "submit"
console.log(buttonElement)

const form = document.createElement('form');
form.id = "divElem";
form.style.display ='flex'
form.style.flexDirection ='column'
document.body.appendChild(form);
const inputElem1 = document.createElement('input');
inputElem1.placeholder ="Start Typing Your Email.....";
inputElem1.style.padding = "20px"
inputElem1.style.margin = "20px"
inputElem1.style.width = "40%"
form.appendChild(inputElem1);

const inputElem2 = document.createElement('input');
inputElem2.placeholder ="Start Typing Your  Password.....";
inputElem2.style.padding = "20px"
inputElem2.style.width = "40%"
inputElem2.style.marginLeft = '20px'
form.appendChild(inputElem2);

form.appendChild(buttonElement)

inputElem1.focus(); 

setTimeout(()=>{
    inputElem1.blur();
}, 5000)

inputElem1.type = 'number';


// buttonElement.textContent = "Login"
// buttonElement.innerHTML = "Login"
buttonElement.innerText = "Login"
buttonElement.onclick = buttonClick
function buttonClick () {
    console.log('Hey  I am clicked');
}


const button2 = document.createElement('button');
console.log(document.getElementById('divElem'))


// Welcome to the LearnJS => done
      // Updating => SignUp 
// Update first input box to accept the  text 
// Insert One input box for the name 
// insert another input box for the lastName
// Deal pasword section  as password
// update the  text to signup in login button


//Update first input box to accept the  text 

inputElem1.type = 'email'




// ParentNode.insertBefore(nodeWhichNeedToInbsert , nodeBefore we need to inser)

const inputNode  =  document.createElement('input');
inputNode.id = "inputName"
inputNode.placeholder= 'Please type your name...'
inputNode.style.padding = "20px"
inputNode.style.margin = "20px"
inputNode.style.width = "40%"
inputNode.required = true
form.insertBefore(inputNode, inputElem2)


const inputNode1  =  document.createElement('input');
inputNode1.id = "inputLast"

inputNode1.placeholder= 'Please type your last NAME...'
inputNode1.style.padding = "20px"
inputNode1.style.margin = "20px"
inputNode1.style.width = "40%"

form.insertBefore(inputNode1 , inputElem2)


inputElem2.type = 'password'

buttonElement.innerText = "Sign Up"
buttonElement.style.cursor = 'pointer'

buttonElement.onclick = ()=> {
   const inputName =  document.getElementById('inputName')
    const name  = inputName?.value;
    const inputLast =  document.getElementById('inputLast')
    const lastName  = inputLast?.value;
 if(lastName || name) {
    form.style.display = 'none'
    const h3  = document.createElement('h3');
    h3.innerText = `WelCome Back  ${name} ${lastName} ..`
    document.body.appendChild(h3);
 } else {
    alert("Failed to Signup...")
 }

 
}


// 



// Selectors    

// Selecting element from dom using id  
const spanElem  = document.createElement('span');
spanElem.className = "SpanCheck"
spanElem.innerText= "ClassName check"
form.appendChild(spanElem)
console.log('Selecting through id' ,document.getElementById('inputLast'));
console.log('Selecting through tagName' ,document.getElementsByTagName('form'))
console.log('Selecting through tagName' ,document.getElementsByTagName('input'))
console.log('Selecting through className' ,document.getElementsByClassName('SpanCheck'))

console.log('Selecting through querySelector' ,document.querySelector('input'))
console.log('Selecting through querySelectorAll' ,document.querySelectorAll('input'))

console.log('Selecting through querySelector' ,document.querySelector('#inputLast'))
console.log('Selecting through querySelector' ,document.querySelector('.SpanCheck'))

// removing the element
button2.remove();

// Dom Events  
// Event bubbling 
// event capturing 
// event propagation 
// event delegation
// event preventDefault

