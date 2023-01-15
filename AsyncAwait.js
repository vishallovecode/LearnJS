
// we use both keyword simultaneoulsy 
// means withour using async you cannot use await
// using async keyword we can make function as asynchronous function 
// the functon which is using  the async keywoord that will always return the promises
// we can avoid promises chaining with the async and await combination (somehow)


const fetchPost = async ()=> {
return 0;
}

// console.log( 'fetchPost' ,fetchPost())

async function fetchData2 (){
return 1
}

// console.log('fetchData2' ,fetchData2())

// fetchData2().then((res1)=>{
//     console.log('fetchData2' , res1)
// })


// const resolvedData= async()=> {
//     const data  =  await fetchData2();
//     console.log("Await inside" , data)
//     return data;
// }
// // resolvedData();
// console.log(resolvedData())

const resolvedMe = async () => {
    const data  = await   new Promise((resolved , reject)=> {
        setTimeout(()=>{
            console.log("hey i am here")
            resolved("Hye data is fine")
        }, 10000)
    })
    console.log('data' , data)
}
resolvedMe();
const fetchPostData  = async()=> {
    console.log("started api call")
    const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    console.log(posts ,"end api call")
}
fetchPostData();
