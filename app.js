console.log("Hii");

// localStorage.setItem("name", "kamal");
// localStorage.setItem("name1", "saman");

// localStorage.removeItem("name1");

// let custName = localStorage.getItem("name");
// console.log(custName);

// localStorage.clear();




let customer = {
    name: "kamal",
    age: 12,
    isActive: true
};

let stringCustomer = JSON.stringify(customer);

localStorage.setItem("customer", stringCustomer);

let retCustomer = localStorage.getItem("customer");

let jsonCustomer = JSON.parse(retCustomer);

console.log(jsonCustomer);