// let const
// default parameters

function checkDefault(a = 1, b = 2, c = 3) {
  console.log("a=>", a);
  console.log("b=>", b);
  console.log("c=>", c);
}

checkDefault(5, 6, 7);

// template literals and multiline string

const stringLiteral = `vishal
vcishal
znmxbc 
nzmxc s
bns dch sd
`;

function generateTemplate(name = "User", mobile) {
  //   const emailTemplate =  'Hey ' + user + "your number" + mobile + 'has been recharge successfully';
  const emailTemplate = `Hey ${name} "your number ${mobile} has been recharge successfully`;
  console.log(emailTemplate);
}

generateTemplate("adsd", 9278787486);
generateTemplate();
generateTemplate();

// Arrow functions

// Promises
// block scoping

// Object Destructuring

var object = {
  clg: "Chris chruch university",
  cty: "Kanpur",
  brnc: "CSE",
};

//  const college  =  object.collegeName;
//  const city =  object.cityName;
//  const branch  =  object.branch;

// Object destructring  , given alias , by default
const { clg: college, cty: city, brnc: branchCode, regNo = "12345" } = object;
console.log("college", college);
console.log("cityName", city);
console.log("city", branchCode);
console.log("regNo", regNo);

function positionName() {
  return ["ADAM", "Lalu", "Kamal"];
}

const data = positionName();
const [firstName, secondName, lastName] = data;
console.log(firstName, secondName, lastName);

// destuctring for nested object

// spread department->block->name(departMentBlockName)
let student = {
  name: "Adam",
  lasdtName: "Gil",
  address: {
    local: {
      city: "UK",
      pincode: "2392321", // => 1235667
    },
  },
  department: {
    block: {
      name: "36A",
    },
  },
  hostel: {
    name: "BH3",
  },
  collegeName: {
    name: "LPU",
  },
};
const departMentBlockName = student.department.block.name;
const HostelName = student.hostel.name;

const t = { a: 123, b: 235 };

const { a, b } = t;

const {
  address: {
    local: { pincode },
  },
} = student;

console.log(pincode);

student = {
  ...student,
  ...student.address,
  local: {
    pincode: 1235667,
  },
};

console.log(student);
