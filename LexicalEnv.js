var globalA = 30;

console.log("nikhat", globalA);
function parent() {
  var pScope = 40;
  console.log("Parent", globalA, pScope);
  function child() {
    var childScope = 50;
    console.log("Child", globalA, pScope, childScope);
    function grandChild() {
      var grandChildScope = 60;
      console.log("Grand Child", globalA, pScope, childScope, grandChildScope);
    }
    grandChild();
  }
  child();
}

parent();

// it own scope and scope of its nested parent is called lexical environment

//  namaster javascript //  scopes and closures kyle simpson   => 81 pages

// Lexical scope
// Hoisting
// diff var let const
// function declaration and function statement (syntax different)
// how the functions works behind the scene
// call stack   (heart of the javascript)
