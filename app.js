console.log("Hii");

// localStorage.setItem("name", "kamal");
// localStorage.setItem("name1", "saman");

// localStorage.removeItem("name1");

// let custName = localStorage.getItem("name");
// console.log(custName);

// localStorage.clear();




// let customer = {
//     name: "kamal",
//     age: 12,
//     isActive: true
// };

// let stringCustomer = JSON.stringify(customer);

// localStorage.setItem("customer", stringCustomer);

// let retCustomer = localStorage.getItem("customer");

// let jsonCustomer = JSON.parse(retCustomer);

// console.log(jsonCustomer);


// ----------------------------------------------------------------------------------------------------------------





const customerList =[];

function btnAddCustomerOnAction(){
    let customer = {
        id:document.getElementById("txtCustomerId").value,
        name:document.getElementById("txtCustomerName").value,
        age:document.getElementById("txtCustomerAge").value,
        address:document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    console.log(customerList);
    
    localStorage.setItem("customerList",JSON.stringify(customerList));

    // alert("add customer")
}

function btnSearchByIdOnAction(){
    alert("search customer")
}

function btnDeleteByIdOnAction(){
    alert("delete customer");
}

function btnUpdateByIdOnAction(){
    alert("update customer");
}

function btnClearStorageOnAction(){
    localStorage.clear();
}

function btnLoadTableOnAction(){
    alert("load table");
}