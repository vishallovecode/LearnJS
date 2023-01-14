
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

 fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    if(res.status==200) {
       res.json().then(response=>{
        console.log(response)
        throw("Hey chill out")
        }).catch((error)=>{
            console.log(error)
        })
    }
 }).catch((error)=>{
    console.log(error)
 })
