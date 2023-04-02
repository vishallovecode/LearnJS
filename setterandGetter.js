const userDetails = {
name: "Vishal", 
sharma: "Sharma",
 get fullName() {
        console.log(`${this.name} ${this.lastName}` )
    },
 set fullName (name) {
    this.name = name.split(" ")[0];
    this.lastName  = name.split(" ")[1];
 },
 mobile1: "991537881",


 get mobile () {
    return this.mobile1;
 },
 set mobile (number) {
this.mobile1 = number
 }

}

console.log(userDetails.fullName);
userDetails.fullName = "ABC XYZ"; // WE DID NOT DEFINED THE SETTER 
console.log(userDetails.fullName)

console.log(userDetails.mobile)
userDetails.mobile= "7888595486";
console.log(userDetails.mobile)

// data hiding we should go with getter and setter





// setter and getter use for data hiding