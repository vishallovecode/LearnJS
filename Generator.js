// es6 

// function GenerateNumber () {
//     return Math.random()*100; 
// }

// const randomNumber  = GenerateNumber();
//  console.log(randomNumber)


    function* GenerateNumber () {
        
        yield "helloo";
        yield 'good'
      
 }

 const  generate =  GenerateNumber(); // Generator Object => Iterator 
 // Iterator => next
 console.log(generate) // iterator next , value  , done
//  console.log(generate.next());
//  console.log(generate.next());
//  console.log(generate.next());
//  console.log(generate.next());


//  for( let data of  generate) {
//      console.log(data)
//  }

//  console.log(generate.next()); // does not have any value 
 // 



 // if you  use normally generator does that function is async  => No
 // How can i make that function as async  ? => as async keyword in the function 



  function* tricky () {
    yield 1223445;
    yield 45657;
    yield 4567;
    // return 5678; 
    yield 5678;
  }

//   const genObj =  tricky();
//   // this will not cosnsider the return statmenet
//   for(let value of genObj) {
//     console.log(value)
//   }


  // Generator composition => we can call generator inside another generator  


  function* giveRandomMessage () {
    yield* tricky();
    yield*  GenerateNumber();

  }

  const itObj = giveRandomMessage();
  for(let it of itObj) {
    console.log(it)
  }
  
  

