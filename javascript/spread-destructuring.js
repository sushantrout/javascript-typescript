let age = 28;
let employee = {
  name: "Sushant",
  age, //if property anme is same as the refernce name of the variable dirctly it can map.
};

console.log(employee);

let { employeeName } = employee; //destructuring

let newEmployee = {...employee, age: '290'} //spreading op
console.log(newEmployee);


