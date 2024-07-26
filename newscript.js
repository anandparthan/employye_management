
let userData = []
let empData = []
let apiURL = 'http://localhost:3000/employees'
let currentpage = 1;
let pagevalue = parseInt(document.getElementById("pagenumber").value);
// let totalitems = 0;
let paginationlist = document.getElementById("paginationbtnlist");

//------------------- API FETCHING----------------------------//

async function fetchdata() {
  try {
    const response = await fetch(apiURL)
    if (!response.ok) {

      throw new Error("a error in data fetching")
    }
    const data = await response.json()
    userData = data.reverse();
    empData = userData
    console.log(userData);

    showData(currentpage)
    pagination();

  }

  catch (error) {
    console.error("network error")
  }


}
fetchdata();

document.getElementById("pagenumber").addEventListener('change', (e) => {
  e.preventDefault();
  pagevalue = parseInt(document.getElementById("pagenumber").value);

  showData(currentpage = 1);
  pagination();
})


// SHOWING DATA IN TABLE

function showData(page) {
  let start = (page - 1) * pagevalue;
  let end = start + pagevalue;
  let finalresult = userData.slice(start, end)
  i = start;
  const tablebody = document.getElementById('empbody');
  let row = "";
  finalresult.forEach((employee) => {
    i++;
    // totalitems++
    let siNo = i > 9 ? `#${i}` : `#0${i}`
    row += `

<tr>
<td>${siNo}</td>
<td class="nowrap"><img class="uploadimage" src="http://localhost:3000/employees/${employee.id}/avatar"> ${employee.salutation}. ${employee.firstName}  ${employee.lastName}</td>
<td>${employee.email}</td>
<td>${employee.phone}</td>
<td>${employee.gender}</td>
<td>${employee.dob}</td>
<td>${employee.country}</td>
<td>
    <div class="dropdown">
        <button class="btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="sample.html?id=${employee.id}"><i class="fa-solid fa-eye"></i><span>View Details</span></a></li>
          <li><a class="dropdown-item" href="#" onclick ="editemployee('${employee.id}')"><i class="fa-solid fa-pen"></i><span >Edit</span></a></li>
          <li><a class="dropdown-item" href="#" onclick = "employeedelete('${employee.id}')"><i class="fa-solid fa-trash" ></i><span>Delete</span></a></li>
        </ul>
      </div>
</td>
</tr>
`



  })

  tablebody.innerHTML = row;
  document.getElementById("employee-total").textContent = userData.length;
}

// --------------------- add employee popup-----------------------//

function employeepopup() {

  let addemployee = document.getElementById("addEmployeeForm");
  let overlay = document.getElementById("overlay");

  addemployee.style.display = "block"
  overlay.style.display = "block"

}

//--------------------- close add employee popup-----------------------//

function closeemployeepopup() {

  let addemployee = document.getElementById("addEmployeeForm");
  let overlay = document.getElementById("overlay");

  addemployee.style.display = "none"
  overlay.style.display = "none"

}

//************************* */ UPLOAD IMAGE*******************************//

let profilepic = document.getElementById("img");
let inputfile = document.getElementById("upldimg");

inputfile.onchange = () => {
  profilepic.src = URL.createObjectURL(inputfile.files[0]);

}

//--------------------------- add employee--------------------------------//


// async function addemployee(){

// const salutation = document.getElementById("salutation").value
// const firstname = document.getElementById("firstname").value
// const lastname = document.getElementById("lastname").value
// const email = document.getElementById("mail").value
// const phonenumber = document.getElementById("number").value
// const dob = document.getElementById("dob").value
// const male = document.getElementById("male").checked
// const female = document.getElementById("female").checked
// const username = document.getElementById("usrnm").value
// const password = document.getElementById("psd").value
// const qualification = document.getElementById("qualification").value
// const address = document.getElementById("address").value
// const country = document.getElementById("country").value
// const state = document.getElementById("state").value
// const city = document.getElementById("city").value
// const pin = document.getElementById("pin").value

// let newuser ={
//     salutation:salutation,
//     firstName:firstname,
//     lastName:lastname,
//     email:email,
//     phone:phonenumber,
//     dob:dob.split("-").reverse().join("-"),
//     gender: male ? "male" : (female ? "female" : "unknown"),
//     username:username,
//     password:password,
//     qualifications:qualification,
//     address:address,
//     country:country,
//     state:state,
//     city:city,
//     pin:pin
// };

// try{

//     const response = await fetch(apiURL,{
// method : "POST",
// headers : {
//     "content-type": "application/json",
// },
// body : JSON.stringify(newuser),


//     });

//     userData.push(newuser);
// showData()

// }



// catch(error){
// console.error("error in add employee",error);
// }
// console.log('employee added succesfully');


// }


// document.getElementById("addemployee").addEventListener('click',(e)=>{
// e.preventDefault();
// // formvalidation()
// addemployee();
// closeemployeepopup();
// })


async function addEmployee() {
  const salutation = document.getElementById("salutation").value;
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("mail").value;
  const phoneNumber = document.getElementById("number").value;
  const dob = document.getElementById("dob").value;
  const male = document.getElementById("male").checked;
  const female = document.getElementById("female").checked;
  const username = document.getElementById("usrnm").value;
  const password = document.getElementById("psd").value;
  const qualification = document.getElementById("qualification").value;
  const address = document.getElementById("address").value;
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const pin = document.getElementById("pin").value;

  let newUser = {
    salutation: salutation,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phoneNumber,
    dob: dob.split("-").reverse().join("-"),
    gender: male ? "male" : (female ? "female" : "unknown"),
    username: username,
    password: password, // Fixed the typo here
    qualifications: qualification,
    address: address,
    country: country,
    state: state,
    city: city,
    pin: pin
  };

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const formdata = new FormData();
    formdata.append("avatar", inputfile.files[0]);

    const resp = await fetch(`${apiURL}/${data.id}/avatar`, {
      method: "POST",
      body: formdata,

    });

    newUser.id = data.id
    userData.unshift(newUser);
    showData(currentpage);
    closeemployeepopup();
    document.getElementById("forms").reset();
    Swal.fire({
      title: "Employee Added Succesfully",
      text: "You clicked the button!",
      icon: "success"
    });


    console.log('Employee added successfully');
  } catch (error) {
    console.error("Error in add employee:", error);

  }
}

document.getElementById("addemployee").addEventListener('click', (e) => {
  e.preventDefault();

  addvalidation()
  addEmployee();


  // Ensure this function is defined somewhere
});
function reset() {
  document.getElementById()
}


// ----------------------DELETE POPUP--------------------------------//

function deletepopup() {

  let deletepopup = document.getElementById("deleteemployee")
  let overlay = document.getElementById("overlay")

  deletepopup.style.display = "block"
  overlay.style.display = "block"


}


//------------------------- CLOSE DELETE POPUP------------------------------//

function closedeletepopup() {


  let deletepopup = document.getElementById("deleteemployee")
  let overlay = document.getElementById("overlay")

  deletepopup.style.display = "none"
  overlay.style.display = "none"

}


// -----------------------------EMPLOYEE DELETE---------------------------------//

function employeedelete(id) {

  deletepopup();

  const deletebtn = document.getElementById("deletebtn");

  deletebtn.onclick = async (e) => {
    e.preventDefault();

    const deleted = await fetch(`http://localhost:3000/employees/${id}`, {

      method: "DELETE",
      headers: { "Content-Type": "application/json" }

    })
    if (!deleted.ok) {
      throw new Error('Failed to delete employee');
    }


    userData = userData.filter(emp => emp.id !== id)


    showData(currentpage);
    closedeletepopup();
    Swal.fire({
      title: "DELETED!",
      text: "You clicked the button!",
      icon: "success"
    });
    console.log(userData);

  }

}

//------------------------------ EDIT POPUP------------------------------------//

function editpopup() {

  let editpopup = document.getElementById("editEmployee");
  let overlay = document.getElementById("overlay");

  editpopup.style.display = "block"
  overlay.style.display = "block"

}

//--------------------------- CLOSE EDIT POPUP-------------------------------//

function closeeditpopup() {

  let editpopup = document.getElementById("editEmployee");
  let overlay = document.getElementById("overlay");

  editpopup.style.display = "none"
  overlay.style.display = "none"

}

// ********************************EDITING UPLOAD IMAGE*************************************//

let editpic = document.getElementById("editEmployeeChangeImage");
let editupload = document.getElementById("editupload");

editupload.onchange = () => {
  editpic.src = URL.createObjectURL(editupload.files[0])

}



// ----------------------EDIT EMPLOYEE FORM-----------------------------//


// async function editemployee(id) {
//   editpopup();

//   const response = await fetch(`http://localhost:3000/employees/${id}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch employee data for editing');
//   }

//   const userData = await response.json();
//   document.getElementById("editEmployeeChangeImage").src = `http://localhost:3000/employees/${id}/avatar`;
//   document.getElementById('editSalutation').value = userData.salutation;
//   document.getElementById('editFirstName').value = userData.firstName;
//   document.getElementById('editLastName').value = userData.lastName;
//   document.getElementById('editEmail').value = userData.email;
//   document.getElementById('editMobileNumber').value = userData.phone;
//   document.getElementById('editDateOfBirth').value = userData.dob.split("-").reverse().join("-");
//   document.getElementById('editmale').checked = userData.gender === "male";
//   document.getElementById('editFemale').checked = userData.gender === "female";
//   document.getElementById('editusrnm').value = userData.username;
//   document.getElementById('editpsd').value = userData.password;
//   document.getElementById('editQualification').value = userData.qualifications;
//   document.getElementById('editAddress').value = userData.address;
//   console.log(document.getElementById('editCountry').value = userData.country)
//   document.getElementById('editState').value = userData.state;
//   document.getElementById('editCity').value = userData.city;
//   document.getElementById('editPin').value = userData.pin;


//   const editsubmitbtn = document.getElementById("saveEditEmployee");
//   const newsubmitbtn = editsubmitbtn.cloneNode(true);
//   editsubmitbtn.parentNode.replaceChild(newsubmitbtn, editsubmitbtn)

//   newsubmitbtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     if(! editvalidation()){
//       return
//     }else{
   
//     const updateuser = {
//       pin: document.getElementById("editPin").value,
//       salutation: document.getElementById("editSalutation").value,
//       firstName: document.getElementById("editFirstName").value,
//       lastName: document.getElementById("editLastName").value,
//       email: document.getElementById("editEmail").value,
//       phone: document.getElementById("editMobileNumber").value,
//       qualifications: document.getElementById("editQualification").value,
//       address: document.getElementById("editAddress").value,
//       city: document.getElementById("editCity").value,
//       state: document.getElementById("editState").value,
//       country: document.getElementById("editCountry").value,
//       dob: document.getElementById("editDateOfBirth").value.split("-").reverse().join("-"),
//       gender: document.getElementById("editmale").checked ? "male" : "female",
//       username: document.getElementById("editusrnm").value,
//       password: document.getElementById("editpsd").value
//     };

//     const newresponse = await fetch(`http://localhost:3000/employees/${id}`, {
//       method: "PUT",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updateuser),
//     });

//     const editinput = document.getElementById("editupload");
//     if (editinput.files.length > 0) {
//       const formdata = new FormData();
//       formdata.append("avatar", editinput.files[0]);

//       const avatarresponse = await fetch(`http://localhost:3000/employees/${id}/avatar`, {
//         method: "POST",
//         body: formdata,
//       });
//     }
//     if (!newresponse.ok) {
//       throw new Error('Failed to update employee data');
//     }
    
//     updateuser.id = id;

//     console.log(updateuser);
//     const userindex = empData.findIndex(user => user.id === id);
//     console.log(userindex);
//     empData.splice(userindex,1,updateuser);
  
//     closeeditpopup();
//     showData(currentpage);
//   }
// });

// }

// async function editemployee(id) {
//   editpopup();

//   try {
//     const response = await fetch(`http://localhost:3000/employees/${id}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch employee data for editing');
//     }

//     const userData = await response.json();
//     document.getElementById("editEmployeeChangeImage").src = `http://localhost:3000/employees/${id}/avatar`;
//     document.getElementById('editSalutation').value = userData.salutation;
//     document.getElementById('editFirstName').value = userData.firstName;
//     document.getElementById('editLastName').value = userData.lastName;
//     document.getElementById('editEmail').value = userData.email;
//     document.getElementById('editMobileNumber').value = userData.phone;
//     document.getElementById('editDateOfBirth').value = userData.dob.split("-").reverse().join("-");
//     document.getElementById('editmale').checked = userData.gender === "male";
//     document.getElementById('editFemale').checked = userData.gender === "female";
//     document.getElementById('editusrnm').value = userData.username;
//     document.getElementById('editpsd').value = userData.password;
//     document.getElementById('editQualification').value = userData.qualifications;
//     document.getElementById('editAddress').value = userData.address;
//     document.getElementById('editCountry').value = userData.country;
//     document.getElementById('editState').value = userData.state;
//     document.getElementById('editCity').value = userData.city;
//     document.getElementById('editPin').value = userData.pin;

//     const editsubmitbtn = document.getElementById("saveEditEmployee");
//     const newsubmitbtn = editsubmitbtn.cloneNode(true);
//     editsubmitbtn.parentNode.replaceChild(newsubmitbtn, editsubmitbtn);

//     newsubmitbtn.addEventListener("click", async (e) => {
//       e.preventDefault();
//       if (!editvalidation()) {
//         return;
//       } else {
//         const updateuser = {
//           pin: document.getElementById("editPin").value,
//           salutation: document.getElementById("editSalutation").value,
//           firstName: document.getElementById("editFirstName").value,
//           lastName: document.getElementById("editLastName").value,
//           email: document.getElementById("editEmail").value,
//           phone: document.getElementById("editMobileNumber").value,
//           qualifications: document.getElementById("editQualification").value,
//           address: document.getElementById("editAddress").value,
//           city: document.getElementById("editCity").value,
//           state: document.getElementById("editState").value,
//           country: document.getElementById("editCountry").value,
//           dob: document.getElementById("editDateOfBirth").value.split("-").reverse().join("-"),
//           gender: document.getElementById("editmale").checked ? "male" : "female",
//           username: document.getElementById("editusrnm").value,
//           password: document.getElementById("editpsd").value
//         };

//         const newresponse = await fetch(`http://localhost:3000/employees/${id}`, {
//           method: "PUT",
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(updateuser),
//         });

//         if (!newresponse.ok) {
//           throw new Error('Failed to update employee data');
//         }
        
//         const editinput = document.getElementById("editupload");
//         if (editinput.files.length > 0) {
//           const formdata = new FormData();
//           formdata.append("avatar", editinput.files[0]);

//           const avatarresponse = await fetch(`http://localhost:3000/employees/${id}/avatar`, {
//             method: "POST",
//             body: formdata,
//           });

//           if (!avatarresponse.ok) {
//             throw new Error('Failed to upload avatar');
//           }
//         }
        
//         updateuser.id = id;
//         const userindex = empData.findIndex(user => user.id === id);
//         empData.splice(userindex, 1, updateuser);

//         closeeditpopup();
//         showData(currentpage);
//       }
//     });

//   } catch (error) {
//     console.error('Error editing employee:', error);
//     // Handle error (e.g., show error message to user)
//     // Optionally, you can rethrow the error if you want to propagate it further
//     // throw error;
//   }
// }

// async function editemployee(id) {
//   editpopup();

//   try {
//     const response = await fetch(`http://localhost:3000/employees/${id}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch employee data for editing');
//     }

//     const userData = await response.json();
//     document.getElementById("editEmployeeChangeImage").src = `http://localhost:3000/employees/${id}/avatar`;
//     document.getElementById('editSalutation').value = userData.salutation;
//     document.getElementById('editFirstName').value = userData.firstName;
//     document.getElementById('editLastName').value = userData.lastName;
//     document.getElementById('editEmail').value = userData.email;
//     document.getElementById('editMobileNumber').value = userData.phone;
//     document.getElementById('editDateOfBirth').value = userData.dob.split("-").reverse().join("-");
//     document.getElementById('editmale').checked = userData.gender === "male";
//     document.getElementById('editFemale').checked = userData.gender === "female";
//     document.getElementById('editusrnm').value = userData.username;
//     document.getElementById('editpsd').value = userData.password;
//     document.getElementById('editQualification').value = userData.qualifications;
//     document.getElementById('editAddress').value = userData.address;
//     document.getElementById('editCountry').value = userData.country;
//     document.getElementById('editState').value = userData.state;
//     document.getElementById('editCity').value = userData.city;
//     document.getElementById('editPin').value = userData.pin;

//     const editsubmitbtn = document.getElementById("saveEditEmployee");
//     const newsubmitbtn = editsubmitbtn.cloneNode(true);
//     editsubmitbtn.parentNode.replaceChild(newsubmitbtn, editsubmitbtn);

//     newsubmitbtn.addEventListener("click", async (e) => {
//       e.preventDefault();
//       if (!editvalidation()) {
//         return;
//       } else {
//         const updateuser = {
//           pin: document.getElementById("editPin").value,
//           salutation: document.getElementById("editSalutation").value,
//           firstName: document.getElementById("editFirstName").value,
//           lastName: document.getElementById("editLastName").value,
//           email: document.getElementById("editEmail").value,
//           phone: document.getElementById("editMobileNumber").value,
//           qualifications: document.getElementById("editQualification").value,
//           address: document.getElementById("editAddress").value,
//           city: document.getElementById("editCity").value,
//           state: document.getElementById("editState").value,
//           country: document.getElementById("editCountry").value,
//           dob: document.getElementById("editDateOfBirth").value.split("-").reverse().join("-"),
//           gender: document.getElementById("editmale").checked ? "male" : "female",
//           username: document.getElementById("editusrnm").value,
//           password: document.getElementById("editpsd").value
//         };

//         const newresponse = await fetch(`http://localhost:3000/employees/${id}`, {
//           method: "PUT",
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(updateuser),
//         });

//         if (!newresponse.ok) {
//           throw new Error('Failed to update employee data');
//         }
        
//         const editinput = document.getElementById("editupload");
//         if (editinput.files.length > 0) {
//           const formdata = new FormData();
//           formdata.append("avatar", editinput.files[0]);

//           const avatarresponse = await fetch(`http://localhost:3000/employees/${id}/avatar`, {
//             method: "POST",
//             body: formdata,
//           });

//           if (!avatarresponse.ok) {
//             throw new Error('Failed to upload avatar');
//           }
//         }
        
//         updateuser.id = id;
//         const userindex = empData.findIndex(user => user.id === id);
//         empData.splice(userindex, 1, updateuser);

//         closeeditpopup();
//         showData(currentpage);
//       }
//     });

//   } catch (error) {
//     console.error('Error editing employee:', error);
//     // Use SweetAlert2 for displaying the error message
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Failed to fetch employee data for editing. Please try again later.',
//     });


  
//   }
// }

async function editemployee(id) {
  editpopup();

  try {
    // Fetch employee data
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch employee data for editing');
    }
    const userData = await response.json();

    // Update form fields with fetched data
    document.getElementById("editEmployeeChangeImage").src = `http://localhost:3000/employees/${id}/avatar`;
    document.getElementById('editSalutation').value = userData.salutation;
    document.getElementById('editFirstName').value = userData.firstName;
    document.getElementById('editLastName').value = userData.lastName;
    document.getElementById('editEmail').value = userData.email;
    document.getElementById('editMobileNumber').value = userData.phone;
    document.getElementById('editDateOfBirth').value = userData.dob.split("-").reverse().join("-");
    document.getElementById('editmale').checked = userData.gender === "male";
    document.getElementById('editFemale').checked = userData.gender === "female";
    document.getElementById('editusrnm').value = userData.username;
    document.getElementById('editpsd').value = userData.password;
    document.getElementById('editQualification').value = userData.qualifications;
    document.getElementById('editAddress').value = userData.address;
    document.getElementById('editCountry').value = userData.country;
    document.getElementById('editState').value = userData.state;
    document.getElementById('editCity').value = userData.city;
    document.getElementById('editPin').value = userData.pin;

    // Clone and replace submit button
    const editsubmitbtn = document.getElementById("saveEditEmployee");
    const newsubmitbtn = editsubmitbtn.cloneNode(true);
    editsubmitbtn.parentNode.replaceChild(newsubmitbtn, editsubmitbtn);

    // Add event listener to new submit button
    newsubmitbtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!editvalidation()) {
        return;
      } else {
        const updateuser = {
          pin: document.getElementById("editPin").value,
          salutation: document.getElementById("editSalutation").value,
          firstName: document.getElementById("editFirstName").value,
          lastName: document.getElementById("editLastName").value,
          email: document.getElementById("editEmail").value,
          phone: document.getElementById("editMobileNumber").value,
          qualifications: document.getElementById("editQualification").value,
          address: document.getElementById("editAddress").value,
          city: document.getElementById("editCity").value,
          state: document.getElementById("editState").value,
          country: document.getElementById("editCountry").value,
          dob: document.getElementById("editDateOfBirth").value.split("-").reverse().join("-"),
          gender: document.getElementById("editmale").checked ? "male" : "female",
          username: document.getElementById("editusrnm").value,
          password: document.getElementById("editpsd").value
        };

        try {
          // Update employee data
          const newresponse = await fetch(`http://localhost:3000/employees/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateuser),
          });

          if (!newresponse.ok) {
            throw new Error('Failed to update employee data');
          }

          // Handle avatar upload if file is selected
          const editinput = document.getElementById("editupload");
          if (editinput.files.length > 0) {
            const formdata = new FormData();
            formdata.append("avatar", editinput.files[0]);

            const avatarresponse = await fetch(`http://localhost:3000/employees/${id}/avatar`, {
              method: "POST",
              body: formdata,
            });

            if (!avatarresponse.ok) {
              throw new Error('Failed to upload avatar');
            }
          }

          // Update local data after successful update
          updateuser.id = id;
          const userindex = empData.findIndex(user => user.id === id);
          empData.splice(userindex, 1, updateuser);

         
      
          closeeditpopup();
          Swal.fire({
            title: "Employee Edited Succesfully",
            text: "You clicked the button!",
            icon: "success"
          });
          showData(currentpage);
        } catch (error) {
          console.error('Error updating employee data:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to update employee data. Please try again later.',

          });
          
          closeeditpopup();
        }
      }
    });

  } catch (error) {
    console.error('Error editing employee:', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to fetch employee data for editing. Please try again later.',
    });
    
    closeeditpopup();
  }
}







//------------------------------------------------- ADD FORM VALIDATION----------------------------------------------------//


// let errormsg = document.getElementsByClassName("errormsg");

// function formvalidation(){

// const salutation = document.getElementById("salutation");
// const firstName = document.getElementById("firstname");
// const lastName = document.getElementById("lastname");
// const email = document.getElementById("mail");
// const phone = document.getElementById("number");
// const DOB = document.getElementById("dob");
// const Male = document.getElementById("male");
// const Female = document.getElementById("female");
// const Username = document.getElementById("usrnm");
// const password = document.getElementById("psd");
// const Qualifications = document.getElementById("qualification");
// const Address = document.getElementById("address");
// const Country = document.getElementById("country");
// const State = document.getElementById("state");
// const City = document.getElementById("city");
// const Pin = document.getElementById("pin");


// let phonevalidation = (emp,index,message)=>{
// if(emp.value.trim()=== ""){
// errormsg[index].innerText = message;
// }else if(emp.value.length !== 10){
// errormsg[index].innerText= "Mobile number must be 10 digit";
// }
// else{
//     errormsg[index].innerText="";
// }

// };

// let gendervalidation = (index,message)=>{
//     if(!Male.checked && !Female.checked){
//       errormsg[index].innerText = message;
//     } else {
//       errormsg[index].innerText = "";
//     }
//   }

//   let validationform =(emp,index,message)=>{
//     if(emp.value.trim() ===""){
//       errormsg[index].innerText = message;
//     } else {
//       errormsg[index].innerText = "";
//     }
//   }

//   let emailvalidation = (emp,index,message)=>{
//     let emailregex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

//     if(emp.value.trim() === ''){
//       errormsg[index].innerText = message;
//     } else if(!emp.value.match(emailregex)){
//       errormsg[index].innerText = "Check Email Format";
//     } else {
//       errormsg[index].innerText = "";
//     }
//   }

//   validationform(salutation,0,"select salutation")
//   validationform(firstName,1,"First Name is required")
//   validationform(lastName,2,"Last Name is required")
//   emailvalidation(email,3,"Email is required")
//   phonevalidation(phone,4,"Phone is required")
//   validationform(DOB,5,"Date of Birth is required")
// gendervalidation(6,"Gender is required")
//   validationform(Username,7,"Username is required")
// validationform(password,8,"Password is required")

// validationform(Qualifications,9,"Qualifications is required")
// validationform(Address,10,"Address is required")
// validationform(Country,11,"Country is required")
// validationform(State,12,"State is required")
// validationform(City,13,"City is required")
// validationform(Pin,14,"PIN is required")
// }

function addvalidation() {

  const salutation = document.getElementById("salutation").value.trim();
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("mail").value.trim();
  const phone = document.getElementById("number").value.trim();

  // DOB

  const DOB = document.getElementById("dob");
  const dob_validtaion = document.getElementById("boberror");
  const dob_value = DOB.value.trim();

  // GENDER 

  const gender = document.querySelector('input[name="gender"]:checked')
  const gender_validation = document.getElementById("gendererror");

  const username = document.getElementById("usrnm").value.trim();
  const password = document.getElementById("psd").value.trim();
  const qualifications = document.getElementById("qualification").value.trim();
  const address = document.getElementById("address").value.trim();
  const country = document.getElementById("country").value.trim();
  const state = document.getElementById("state").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();

  // PATTERNS
  const namepattern = /^[A-za-z]+$/
  const phonePattern = /^\d{10}$/
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const pinpattern = /^\d{6}$/
  let Valid = true;

  // validation of gender and DOB

  if (gender) {
    gender_validation.textContent = ""
  }
  else {
    gender_validation.textContent = " * gender is required"
    Valid = false;
  }

  if (dob_value === "") {
    dob_validtaion.textContent = " * Date of Birth is required"
    Valid = false;
  }

  // Valiadation of form 

  if (salutation == "" || salutation == "select") {
    document.getElementById("salutationerror").textContent = " * salutation is required";
    Valid = false;
  }

  if (!namepattern.test(firstName)) {
    document.getElementById("firstnameerror").textContent = " * first name is required"
    Valid = false;
  }

  if (!namepattern.test(lastName)) {
    document.getElementById("lastnameerror").textContent = " * last name is required"
    Valid = false;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("mailerror").textContent = " * email is required"
    Valid = false;
  }

  if (!phonePattern.test(phone)) {
    document.getElementById("numbererror").textContent = " * number is required"
    Valid = false;
  }

  if (username == "") {
    document.getElementById("usernameerror").textContent = " * username is required"
    Valid = false;
  }

  if (password == "") {
    document.getElementById('passworderror').textContent = " * Password is required"
    Valid = false;
  }

  if (qualifications == "") {
    document.getElementById('qualificationerror').textContent = " * Qualification is required"
    Valid = false;
  }

  if (address == "") {
    document.getElementById('addresserror').textContent = " * Address is required"
    Valid = false;
  }


  if (country == "" || country == "select country") {
    document.getElementById('countryerror').textContent = " * Country is required"
    Valid = false;
  }

  if (state == "" || state == "select state") {
    document.getElementById('stateerror').textContent = " * State is required"
    Valid = false;
  }

  if (city == "") {
    document.getElementById('cityerror').textContent = " * City is required"
    Valid = false;
  }

  if (!pinpattern.test(pin)) {
    document.getElementById('pinerror').textContent = " * pin is required"
    Valid = false;
  }


  // validation of gender when clicking

  const male = document.getElementById("male");
  const female = document.getElementById("female");
  male.addEventListener("click", () => {
    document.getElementById("gendererror").textContent = "";
  })
  female.addEventListener("click", () => {

    document.getElementById("gendererror").textContent = "";
  })
  document.getElementById("forms").addEventListener("submit", (event) => {
    event.preventDefault();
  })
  return Valid;

}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addEmployeeForm").addEventListener("input", (event) => {
    const input = event.target;
    const errormsg = input.parentElement.querySelector(".errormsg");
    if (input && errormsg) {
      errormsg.textContent = "";
    }

  })
  document.getElementById("forms").addEventListener("submit", (event) => {
    event.preventDefault();

  })
})





//--------------------------------------------------------------------------------//

//------------------------------------- EDIT FORM VALIDATION-------------------------------------//

// let  editerrormsg = document.getElementsByClassName("editerrormsg");

// function editformvalidation(){

// const salutation = document.getElementById("editSalutation");
// const firstName = document.getElementById("editFirstName");
// const lastName = document.getElementById("editLastName");
// const email = document.getElementById("editEmail");
// const phone = document.getElementById("editMobileNumber");
// const dob = document.getElementById("editDateOfBirth");
// const male = document.getElementById("editmale");
// const female = document.getElementById("editFemale");
// const username = document.getElementById("editusrnm");
// const password = document.getElementById("editpsd");
// const qualifications = document.getElementById("editQualification");
// const address = document.getElementById("editAddress");
// const country = document.getElementById("editCountry");
// const state = document.getElementById("editState");
// const city = document.getElementById("editCity");
// const pin = document.getElementById("editPin");

// let phonevalidation = (emp,index,message)=>{

// if(emp.value.trim()=== ""){

//   editerrormsg[index].innerText = message;
// }else if(emp.value.length !== 10){
//   editerrormsg[index].innerText= "Mobile number must be 10 digit"
// }
// else{
//   editerrormsg[index].innerText=""
// }
// }

// let gendervalidation = (index,message)=>{

//   if(!male.checked && !female.checked){
//     editerrormsg[index].innerText = message
//   }
//   else{
//     editerrormsg[index].innerText = "";
//   }

// }

// let editvalidation = (emp,index,message)=>{
// if(emp.value.trim()=== ""){
//   editerrormsg[index].innerText= message;
// }
// else{
//   editerrormsg[index].innerText= "";
// }

// }

// let emailvalidationedit = (emp,index,message)=>{
//   let emailregex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

//   if(emp.value.trim()===""){
//     editerrormsg[index].innerText= message;
//   }else{
//     editerrormsg[index].innerText= "";
//   }


// }


// editvalidation(salutation,0,"select salutation")
// editvalidation(firstName,1,"First Name is required")
// editvalidation(lastName,2,"Last Name is required")
// emailvalidationedit(email,3,"Email is required")
// phonevalidation(phone,4,"Phone is required")
// editvalidation(dob,5,"Date of Birth is required")
// gendervalidation(6,"Gender is required")
// editvalidation(username,7,"Username is required")
// editvalidation(password,8,"Password is required")
// editvalidation(qualifications,9,"Qualifications is required")
// editvalidation(address,10,"Address is required")
// editvalidation(country,11,"Country is required")
// editvalidation(state,12,"State is required")
// editvalidation(city,13,"City is required")
// editvalidation(pin,14,"PIN is required")




// }



function editvalidation() {

  const salutation = document.getElementById("editSalutation").value.trim();
  const firstName = document.getElementById("editFirstName").value.trim();
  const lastName = document.getElementById("editLastName").value.trim();
  const email = document.getElementById("editEmail").value.trim();
  const phone = document.getElementById("editMobileNumber").value.trim();

  // DOB

  const DOB = document.getElementById("editDateOfBirth");
  const dob_validtaion = document.getElementById("dobedit");
  const dob_value = DOB.value.trim();

  // GENDER 

  const gender = document.querySelector('input[name="editgender"]:checked')
  const gender_validation = document.getElementById("genderedit");

  const username = document.getElementById("editusrnm").value.trim();
  const password = document.getElementById("editpsd").value.trim();
  const qualifications = document.getElementById("editQualification").value.trim();
  const address = document.getElementById("editAddress").value.trim();
  const country = document.getElementById("editCountry").value.trim();
  const state = document.getElementById("editState").value.trim();
  const city = document.getElementById("editCity").value.trim();
  const pin = document.getElementById("editPin").value.trim();

  // PATTERNS
  const namepattern = /^[A-za-z]+$/
  const phonePattern = /^\d{10}$/
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const pinpattern = /^\d{6}$/
  let Valid = true;

  // validation of gender and DOB

  if (gender) {
    gender_validation.textContent = ""
  }
  else {
    gender_validation.textContent = " * gender is required"
    Valid = false;
  }

  if (dob_value === "") {
    dob_validtaion.textContent = " * Date of Birth is required"
    Valid = false;
  }

  // Valiadation of form 

  if (salutation == "" || salutation == "select") {
    document.getElementById("salutationedit").textContent = " * salutation is required";
    Valid = false;
  }

  if (!namepattern.test(firstName)) {
    document.getElementById("firstnameedit").textContent = " * first name is required"
    Valid = false;
  }

  if (!namepattern.test(lastName)) {
    document.getElementById("lastnameeditedit").textContent = " * last name is required"
    Valid = false;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("mailedit").textContent = " * email is required"
    Valid = false;
  }

  if (!phonePattern.test(phone)) {
    document.getElementById("numberedit").textContent = " * number is required"
    Valid = false;
  }

  if (username == "") {
    document.getElementById("usernameedit").textContent = " * username is required"
    Valid = false;
  }

  if (password == "") {
    document.getElementById('passwordedit').textContent = " * Password is required"
    Valid = false;
  }

  if (qualifications == "") {
    document.getElementById('qualificationedit').textContent = " * Qualification is required"
    Valid = false;
  }

  if (address == "") {
    document.getElementById('addressedit').textContent = " * Address is required"
    Valid = false;
  }


  if (country == "" || country == "select country") {
    document.getElementById('countryedit').textContent = " * Country is required"
    Valid = false;
  }

  if (state == "" || state == "select state") {
    document.getElementById('stateedit').textContent = " * State is required"
    Valid = false;
  }

  if (city == "") {
    document.getElementById('cityedit').textContent = " * City is required"
    Valid = false;
  }

  if (!pinpattern.test(pin)) {
    document.getElementById('pinedit').textContent = " * pin is required"
    Valid = false;
  }


  // validation of gender when clicking

  const male = document.getElementById("editmale");
  const female = document.getElementById("editFemale");
  male.addEventListener("click", () => {
    document.getElementById("genderedit").textContent = "";
  })
  female.addEventListener("click", () => {

    document.getElementById("genderedit").textContent = "";
  })
  document.getElementById("formedit").addEventListener("submit", (event) => {
    event.preventDefault();
  })
  return Valid;

}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("editEmployee").addEventListener("input", (event) => {
    const input = event.target;
    const errormsg = input.parentElement.querySelector(".editerrormsg");
    if (input && errormsg) {
      errormsg.textContent = "";
    }

  })
  document.getElementById("forms").addEventListener("submit", (event) => {
    event.preventDefault();
  })
})




//**************************SEARCH INPUT***************************//



const searchinput = document.getElementById("searchinput");

searchinput.addEventListener('input', (event) => {
  const searchvalue = event.target.value.trim().toLowerCase();

  userData = empData;

  if (searchvalue !== "") {
    userData = userData.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(searchvalue) ||
        employee.lastName.toLowerCase().includes(searchvalue) ||
        employee.email.toLowerCase().includes(searchvalue) ||
        employee.phone.toLowerCase().includes(searchvalue)
      );
    });
  }
  showData(currentpage)
  pagination()
});

//**************************************/ PAGINATION /************************ */

// function pagination(){


// paginationlist.innerHTML = ""
// let totalpages = Math.ceil(userData.length / pagevalue)

// let fastBtn = document.createElement("li");
//     fastBtn.classList.add("pagebtn");
//     fastBtn.innerHTML = `<a class="page-link"><<</a>`
//     paginationlist.appendChild(fastBtn);
//     fastBtn.addEventListener("click",()=>{
//       showData(currentpage = 1)
//       highlightcurrentpage()
//     })

//     let firstprevious = document.createElement("li");
//         firstprevious.classList.add("pagebtn");
//         firstprevious.innerHTML =`<a class="page-link"><</a>`
//         paginationlist.appendChild(firstprevious);
//         firstprevious.addEventListener("click",()=>{
//           if(currentpage!=1){
//              currentpage--
//           }
//           else{
// currentpage=1
//           }
//           showData(currentpage)
//           highlightCurrentPage()
//         }
//         )



//         for(let i=1; i<=totalpages; i++){
// let page = document.createElement("li");
//     page.classList.add("pagebtn");
//     page.innerHTML =`<a class="page-link">${i}</a>`
//     if (i === currentpage) {
//       page.classList.add("active");
//   }
//     paginationlist.appendChild(page);
//     page.addEventListener("click", ()=>{

//       showData(currentpage=i);
//       highlightCurrentPage()
//     })
//         }


//         let nextbtn = document.createElement("li");
//         nextbtn.classList.add("pagebtn");
//         nextbtn.innerHTML = `<a class="page-link">></a>`
//         paginationlist.appendChild(nextbtn);
//         nextbtn.addEventListener("click",()=>{
// if(currentpage!=totalpages){
// currentpage++
// }
// else{
// currentpage=totalpages;


// }

// showData(currentpage);
// highlightCurrentPage()



//         })


//         let lastbtn = document.createElement("li");
//         lastbtn.classList.add("pagebtn");
//         lastbtn.innerHTML=`<a class="page-link">>></a>`
//         paginationlist.appendChild(lastbtn)
//         lastbtn.addEventListener("click", ()=>{
//           showData(currentpage=totalpages)
//           highlightCurrentPage()
//         })

// }

// function highlightCurrentPage() {
//   const pageBtns = document.querySelectorAll(".pagebtn");
//   pageBtns.forEach(btn => {
//       btn.classList.remove("active");
//   });
//   pageBtns.forEach(btn => {
//       if (btn.innerText.trim() == currentpage) {
//           btn.classList.add("active");
//       }
//   });
// }


function pagination() {
  paginationlist.innerHTML = "";
  let totalpages = Math.ceil(userData.length / pagevalue);

  let fastBtn = document.createElement("li");
  fastBtn.classList.add("pagebtn");
  fastBtn.style.cursor = "pointer"
  fastBtn.innerHTML = `<a class="page-link"><<</a>`;
  paginationlist.appendChild(fastBtn);
  fastBtn.addEventListener("click", () => {

    showData(currentpage = 1);
    highlightCurrentPage();
  });

  let firstprevious = document.createElement("li");
  firstprevious.classList.add("pagebtn");
  firstprevious.style.cursor = "pointer"
  firstprevious.innerHTML = `<a class="page-link"><</a>`;
  paginationlist.appendChild(firstprevious);
  firstprevious.addEventListener("click", () => {
    if (currentpage != 1) {
      currentpage--;
    } else {
      currentpage = 1;
    }
    showData(currentpage);
    highlightCurrentPage();
  });

  for (let i = 1; i <= totalpages; i++) {
    let page = document.createElement("li");
    page.classList.add("pagebtn");
    page.style.cursor = "pointer"

    page.innerHTML = `<a class="page-link">${i}</a>`;


    paginationlist.appendChild(page);
    page.addEventListener("click", () => {
      currentpage = i;
      showData(currentpage);
      highlightCurrentPage();
    });
  }

  let nextbtn = document.createElement("li");
  nextbtn.classList.add("pagebtn");
  nextbtn.style.cursor = "pointer"

  nextbtn.innerHTML = `<a class="page-link">></a>`;
  paginationlist.appendChild(nextbtn);
  nextbtn.addEventListener("click", () => {
    if (currentpage != totalpages) {
      currentpage++;
    } else {
      currentpage = totalpages;
    }
    showData(currentpage);
    highlightCurrentPage();
  });

  let lastbtn = document.createElement("li");
  lastbtn.classList.add("pagebtn");
  lastbtn.style.cursor = "pointer"

  lastbtn.innerHTML = `<a class="page-link">>></a>`;
  paginationlist.appendChild(lastbtn);
  lastbtn.addEventListener("click", () => {
    showData(currentpage = totalpages);
    highlightCurrentPage();
  });

  highlightCurrentPage();
}

function highlightCurrentPage() {
  const pageBtns = document.querySelectorAll(".pagebtn");
  pageBtns.forEach(btn => {
    btn.classList.remove("active");
  });
  pageBtns.forEach(btn => {
    if (btn.innerText == currentpage) {
      btn.classList.add("active");
    }
  });
}
