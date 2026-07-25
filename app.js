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
    };

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    if(customerArray == null){
        customerArray = [];
    }

    customerArray.push(customer);

    localStorage.setItem("customerList", JSON.stringify(customerArray));

    alert("Customer Added");

    clearFields();
}

function btnSearchByIdOnAction(){

    let id = document.getElementById("txtCustomerId").value;

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    if(customerArray == null){
        alert("No Customers Found");
        return;
    }

    for(let i=0;i<customerArray.length;i++){

        if(customerArray[i].id == id){

            document.getElementById("txtCustomerName").value = customerArray[i].name;
            document.getElementById("txtCustomerAge").value = customerArray[i].age;
            document.getElementById("txtCustomerAddress").value = customerArray[i].address;

            return;
        }
    }

    alert("Customer Not Found");
}

function btnDeleteByIdOnAction(){

    let id = document.getElementById("txtCustomerId").value;

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    if(customerArray == null){
        alert("No Customers");
        return;
    }

    for(let i=0;i<customerArray.length;i++){

        if(customerArray[i].id == id){

            customerArray.splice(i,1);

            localStorage.setItem("customerList",JSON.stringify(customerArray));

            alert("Customer Deleted");

            btnLoadTableOnAction();

            clearFields();

            return;
        }
    }

    alert("Customer Not Found");
}

function btnUpdateByIdOnAction(){

    let id = document.getElementById("txtCustomerId").value;

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    if(customerArray == null){
        alert("No Customers");
        return;
    }

    for(let i=0;i<customerArray.length;i++){

        if(customerArray[i].id == id){

            customerArray[i].name = document.getElementById("txtCustomerName").value;
            customerArray[i].age = document.getElementById("txtCustomerAge").value;
            customerArray[i].address = document.getElementById("txtCustomerAddress").value;

            localStorage.setItem("customerList",JSON.stringify(customerArray));

            alert("Customer Updated");

            btnLoadTableOnAction();

            clearFields();

            return;
        }
    }

    alert("Customer Not Found");
}

function btnClearStorageOnAction(){

    localStorage.clear();

    document.getElementById("customerTableBody").innerHTML = "";

    alert("Storage Cleared");

    clearFields();
}

function btnLoadTableOnAction(){

    let customerArray = JSON.parse(localStorage.getItem("customerList"));

    let tableBody = document.getElementById("customerTableBody");

    tableBody.innerHTML = "";

    if(customerArray == null){

        alert("No Customers Found");

        return;
    }

    for(let i=0;i<customerArray.length;i++){

        tableBody.innerHTML += `
        <tr>
            <td>${customerArray[i].id}</td>
            <td>${customerArray[i].name}</td>
            <td>${customerArray[i].age}</td>
            <td>${customerArray[i].address}</td>
        </tr>
        `;
    }
}

function clearFields(){

    document.getElementById("txtCustomerId").value = "";
    document.getElementById("txtCustomerName").value = "";
    document.getElementById("txtCustomerAge").value = "";
    document.getElementById("txtCustomerAddress").value = "";
}