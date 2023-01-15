
// Fetch is global method of browser
// Fetch return the promises

// Fetch status =  200 
// status => 500 => server side issu
// status=> 403 =>  UnAuthorized 
// status  => 404 not found
// ok: true/false


// response.text() => it will return in text format
// response.json();
// response.formData(); // image upload
// response.blob()=> image video

//

const rootContainer = document.createElement('div');
rootContainer.style.border = "1px solid";
rootContainer.style.background = "lightgreen"
rootContainer.style.padding= "20px"
rootContainer.style.width = '95%'
rootContainer.style.display = "flex"
rootContainer.style.flexWrap = 'wrap'
document.body.appendChild(rootContainer);


 fetch('https://jsonplaceholder.typicode.com/posts' , null , 'GET').then((res)=>{
    if(res.status==200) {
       res.json().then(response=>{
         createCard(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
 }).catch((error)=>{
    console.log(error)
 })


 // creating card in dom  

 

 const createCard =(postData) => {
   postData.forEach((element , index) => {
      console.log(postData)
      const title =  element.title;
      const body =  element.body;
      const cardContainer  = document.createElement('div');
      cardContainer.style.border = '1px solid blue'
      cardContainer.style.minHeight= "100px"
      cardContainer.style.maxHeight= "200px"
      cardContainer.style.minWidth ="300px"
      cardContainer.style.maxWidth ="300px"
      cardContainer.style.display = "flex";
      cardContainer.style.flexDirection = 'column';
      cardContainer.style.margin = '20px'
      cardContainer.style.padding = '10px'
    
    
   
      const span1 = document.createElement('span');
      span1.style.fontWeight = "bold";
      span1.style.fontSize= "20px"
      span1.innerText = title;
      cardContainer.appendChild(span1)
      const span2 = document.createElement('span');
      span2.style.fontWeight = "semibold";
      span2.style.fontSize= "14px"
      span2.innerText = body;
      span2.style.color = 'blue'
      span2.style.margin = '5px'
      cardContainer.appendChild(span2)
      rootContainer.appendChild(cardContainer)
   
    });
 }

 
 

