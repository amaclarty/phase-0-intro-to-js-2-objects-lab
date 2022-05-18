
let employee
employee = { 
    name : "David",
    streetAddress : "241 Ocean Parkway",
 };
const newroster = {...employee};

function updateEmployeeWithKeyAndValue(employee, key, value)    {
    const newroster = {...employee};
    newroster.name = "Sam"
    newroster.streetAddress = "11 Broadway"
    return newroster;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)   {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    const newrosterdel = {... employee};
    delete newrosterdel.name;
    return newrosterdel;
}
function destructivelyDeleteFromEmployeeByKey(employee, key)    {
    delete employee.name;
    return employee;
}
