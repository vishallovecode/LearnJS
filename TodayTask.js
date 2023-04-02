




const addlist = ( event, type)=> {
    console.log(type)
    //  console.log("Adding Item" , event.target.className)
    //  console.log("Adding Item" , event.target.id)
    //  console.log("Adding Item" , event.target.tagName)
    //  event.target.innerText  = 'Submit'
     event.stopPropagation()
     console.log(event.currentTarget  )
}

const button  =  document.createElement('button');
 button.innerHTML = "Captuting"

 button.addEventListener('click' ,()=>{
    console.log('captuing click')
 } , false )
