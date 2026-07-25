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





const customerList = [];

function btnAddCustomerOnAction() {

    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }

    console.log(customer);

    customerList.push(customer);

    console.log(customerList);

    localStorage.setItem("customerList", JSON.stringify(customerList));
}

function btnSearchByIdOnAction() {

    let id = document.getElementById("txtCustomerId").value;

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    for (let i = 0; i < customerArray.length; i++) {

        if (customerArray[i].id == id) {

            document.getElementById("txtCustomerName").value = customerArray[i].name;
            document.getElementById("txtCustomerAge").value = customerArray[i].age;
            document.getElementById("txtCustomerAddress").value = customerArray[i].address;

            return;
        }
    }

    alert("Customer Not Found");
}

function btnDeleteByIdOnAction() {

    let id = document.getElementById("txtCustomerId").value;

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    for (let i = 0; i < customerArray.length; i++) {

        if (customerArray[i].id == id) {

            customerArray.splice(i, 1);

            localStorage.setItem("customerList", JSON.stringify(customerArray));

            alert("Customer Deleted");

            return;
        }
    }

    alert("Customer Not Found");
}

function btnUpdateByIdOnAction() {

    let id = document.getElementById("txtCustomerId").value;

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    for (let i = 0; i < customerArray.length; i++) {

        if (customerArray[i].id == id) {

            customerArray[i].name = document.getElementById("txtCustomerName").value;
            customerArray[i].age = document.getElementById("txtCustomerAge").value;
            customerArray[i].address = document.getElementById("txtCustomerAddress").value;

            localStorage.setItem("customerList", JSON.stringify(customerArray));

            alert("Customer Updated");

            return;
        }
    }

    alert("Customer Not Found");
}

function btnClearStorageOnAction() {

    localStorage.clear();

    alert("Storage Cleared");
}

function btnLoadTableOnAction() {

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    console.log(customerArray);
}