//Onload Event
window.addEventListener("load", () => {
  //refresh function call
  empTblRefresh();

  employee = new Object();

// designations values
  designations = [{id:1,name:'Manager'},
                  {id:2,name:'AS-Manager'},
                  {id:3,name:'Cashier'}];

  fillDataintoSelect(selectDesignation,'Select designations',designations,'name');

//  selectDesignation.innerHTML = "";
//  const desOptionMsg = document.createElement('option');
//  desOptionMsg.innerText = 'Select designation'
//  desOptionMsg.selected = 'selected'
//  desOptionMsg.disabled = 'selected'

//  selectDesignation.appendChild(desOptionMsg);

//  designations.forEach(element => {

//   const option = document.createElement('option');
//   option.innerText = element.name ;
//   option.value = JSON.stringify(element);
//   selectDesignation.appendChild(option);
  
//  });

// employee statuses values
  employeeStatuses = [{id:1,name:'Working'},
                      {id:2,name:'Resign'},
                      {id:3,name:'Deleted'}];

  // selectEmployeeStatus.innerHTML = "";
  // const empOptionMsg = document.createElement('option');
  // empOptionMsg.innerText = 'Select Employee Status';
  // empOptionMsg.selected ='selected';
  // empOptionMsg.disabled = 'disabled';

  // selectEmployeeStatus.appendChild(empOptionMsg);

  // employeeStatuses.forEach(element =>{

  //   const option = document.createElement('option');
  //   option.innerText = element.name;
  //   option.value = JSON.stringify(element);
  //   selectEmployeeStatus.appendChild(option);
  // })
 fillDataintoSelect(selectEmployeeStatus,'Select employee status',employeeStatuses,'name');


});

//Create Function add Table records
const empTblRefresh = () => {
  
  // employees = [
  //   {
  //     id: 1,
  //     callingName: "Pubudu",
  //     fullName: "Pubudu Madushan",
  //     nic: "200101602322",
  //     email: "pubudum@gmail.com",
  //     userAccount: "yes",
  //     mobile: "0785897098",
  //     designation: "Manager",
  //     empStatus: { id: 1, name: "Working" },
  //   },
  //   {
  //     id: 2,
  //     callingName: "Kavidu",
  //     fullName: "Kavindu Madushan",
  //     nic: "200160563599",
  //     email: "pubudum@gmail.com",
  //     userAccount: "no",
  //     mobile: "0755897094",
  //     designation: "Cashier",
  //     empStatus: { id: 1, name: "Resign" },
  //   },
  //   {
  //     id: 3,
  //     callingName: "Chamidu",
  //     fullName: "Chamidu Madushan",
  //     nic: "200197853749",
  //     email: "pubudum@gmail.com",
  //     userAccount: "yes",
  //     mobile: "0725897096",
  //     designation: "Cashier",
  //     empStatus: { id: 1, name: "Deleted" },
  //   },
  //   {
  //     id: 3,
  //     callingName: "Sumudu",
  //     fullName: "Sumudu Madushan",
  //     nic: "200197853749",
  //     email: "pubudum@gmail.com",
  //     userAccount: "yes",
  //     mobile: "0725897096",
  //     designation: "Manager",
  //     empStatus: { id: 1, name: "Working" },
  //   },
  //   {
  //     id: 3,
  //     callingName: "Tharidu",
  //     fullName: "Tharidu Madushan",
  //     nic: "200197853749",
  //     email: "pubudum@gmail.com",
  //     userAccount: "no",
  //     mobile: "0725897096",
  //     designation: "Cashier",
  //     empStatus: { id: 1, name: "Resign" },
  //   },
    
  // ];

  employees = [];

  $.ajax("/employee/findall",{

    async:false,
    type:"GET",
    contentType:"json",
    success: function (data){
      console.log(data);
      employees = data;
    },
    error: function (resOb){
      console.log(resOb);
      employees = [];
    }
  })

  

  const properties = [
    
    { property: "fullname", datatype: "string" },
    { property: "nic", datatype: "string" },
    { property: "email", datatype: "string" },
    { property: getUserAccount, datatype: "function" },
    { property: "mobile", datatype: "string" },
    { property: getDesignation, datatype: "function" },
    { property: getEmployeeStatus, datatype: "function" },
  ];

  //call fill data in to table function
  //(tableId,dataArrayName,displayPropertyName,deleteFunctionName)
  fillDataIntoTable(
    tblEmployee,
    employees,
    properties,
    employeeDeleteFunction,
    employeeRefillFunction,
    employeePrintFunction,
    false
  );
};

const getEmployeeStatus = (rowOb) => {
  switch (rowOb.empstatus_id.name) {
    case "Working":
      return '<p class ="working-status">' + rowOb.empstatus_id.name + "</p>";

    case "Resign":
      return '<p class ="resign-status">' + rowOb.empstatus_id.name + "</p>";

    case "Deleted":
      return '<p class ="deleted-status">' + rowOb.empstatus_id.name + "</p>";

    default:
  }
};

// const getEmployeeStatus = (rowOb)=>{

//     if(rowOb.empStatus.name == 'Working'){

//         return '<p class ="working-status">'+rowOb.empStatus.name+ '</p>';
//     }

//     if(rowOb.empStatus.name == 'Resign'){

//         return '<p class ="resign-status">'+rowOb.empStatus.name+ '</p>';
//     }

//     if(rowOb.empStatus.name == 'Deleted'){

//         return '<p class ="deleted-status">'+rowOb.empStatus.name+ '</p>';
//     }

// }

const getUserAccount = (uA) => {
  switch (uA.userAccount) {
    case "yes":
      return '<i class="fa-solid fa-circle-check fa-2xl text-success"></i>';

    case "no":
      return '<i class="fa-solid fa-circle-xmark fa-2xl text-danger"></i>';

    default:


  }
};

const getDesignation = (des) =>{

  return des.designation_id.name;

  // switch(des.designation_id.name){

  //   case "Manager":
  //     return "Manager";
    
  //   case "Cashier":
  //     return "Cashier";
  // }

  
}


//generate calling name value function

// const generateCallingName = ()=>{

//   const callingNames = document.getElementById('callingNameOptions');
// callingNames.innerHTML = ' ';

// const callingNameParts = txtFullName.value.split(' ');
// console.log(callingNameParts);

// for(callingName of callingNameParts){

//   const option = document.createElement('option');
//   option.value = callingName;

//   callingNames.appendChild(option);
// }


// }







//Create Function for delete employee record
const employeeDeleteFunction = (object, rowIndex) => {
  console.log("Delete");

  tblEmployee.children[1].children[rowIndex].style.backgroundColor = 'red';

  setTimeout(function () {

    const userConfirm = confirm(

      "Are you want to delete this employee\n" +
        "\n Full Name - " +
        object.fullName +
        "\n NIC - " +
        object.nic
    );

    if (userConfirm) {
      const deleteServerResponse = "Error";

      if (deleteServerResponse == "Ok") {
        alert("Delete successfully");

        
      } else {

        alert(
          "Delete not completed.you have following error \n" +
            deleteServerResponse
        );
      }
    }

    empTblRefresh();

  }, 500);

  
};

//Create employeeFunctionRefill function
const employeeRefillFunction = (object,rowIndex) => {
  console.log("Refill");
  txtFullName.value = object.fullName;
  textCallName.value = object.callingName;
  txtNIC.value = object.nic;
  txtMobileNumber.value = object.mobile;
  txtEmail.value = object.email;
  selectDesignation.value = object.designation;
  selectEmployeeStatus.value = object.empStatus.name;

  
}




const employeePrintFunction = () => {
  console.log("Print");
};


//definr function chrck error
const checkFormError = ()=>{

  let errors = '';

  if (employee.fullName== null){

    errors = errors +"Full Name is required\n";
    txtFullName.style.border = '1px solid red';
  }


  if (employee.callingName== null){

    errors = errors +"Calling Name is required\n";
  }


  if (employee.nic== null){

    errors = errors +"NIC is required\n";
  }


  if (employee.mobile== null){

    errors = errors +"Mobile is required\n";
  }


  if (employee.email== null){

    errors = errors +"E-Mail is required\n";

  }


  if (employee.empStatus== null){

    errors = errors +"Employee Status is required\n";
  }


  return errors;

}


//define function submit employee form
const employeeSubmit =()=>{

  //console.log('Submit');

//check form error
const errors = checkFormError();

if(errors==''){

  //if error not available
  //get user confirmation

}else{

  alert('Form has following errors\n'+errors);
}



}



// create function for fullname validation
const fullNameValidator = (feild)=>{

  const pattern = "^([A-Z][a-z]{2,20}[\\s])+([A-Z][a-z]{2,20})$";
  const regPattern = new RegExp(pattern);

  if(regPattern.test(feild.value)){

    feild.style.border = '2px solid green';
    employee.fullName = feild.value;

    //genetrate calling name
     fulNameValueParts = feild.value.split(' ');

     callingNameOptions.innerHTML = '';
    fulNameValueParts.forEach(element => {

      const option = document.createElement('option');
      option.value = element;

      callingNameOptions.appendChild(option);

    });




  }else{

    feild.style.border = '2px solid red';
    employee.fullName = null;
  }
}


//Create calling name validator

const textCallingNameValidation = (feild)=>{

  const callingNameValue = feild.value;

  const index = callingNameOptions.map(element=>element).indexof(callingNameValue);
  console.log(index);

  if(index !=-1){
    //valid

    feild.style.border ='2px solid green';
    employee.callingName = callingNameValue;

  }else{
    //invalid

    feild.style.border = '2px solid red';
    employee.callingName = null;

  }

}
