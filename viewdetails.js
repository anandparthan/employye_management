// var viewPage = new URLSearchParams(document.location.search);
// var id = viewPage.get("id");

// showDetails(id)
// function showDetails (id){
// // const viewimage =document.getElementById("userdetailimage");
// // viewimage.src





// fetch(`http://localhost:3000/employees/${id}` , {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
    
// })
// .then((response)=>{
//     return response.json();

// })
// .then((data)=>{


//     // function calculateAge(dateOfBirth) {
//     //     if (!dateOfBirth) {
//     //         return "Date of birth is not provided";
//     //     }
    
//     //     const today = new Date();
//     //     const birthDate = new Date(dateOfBirth);
    
//     //     if (isNaN(birthDate.getTime())) {
//     //         return "Invalid date of birth";
//     //     }
    
//     //     let age = today.getFullYear() - birthDate.getFullYear();
//     //     const monthDiff = today.getMonth() - birthDate.getMonth();
    
//     //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//     //         age--;
//     //     }
    
//     //     return age;
//     // }
    
//     // // Example usage:
//     // const dob = data.dob; // Date of birth in yyyy-mm-dd format
//     // const age = calculateAge(dob);
//     // console.log("Age:", age); // Output the calculated age
    

//     document.getElementById("viewname").innerHTML = data.salutation + " " + data.firstName + " " + data.lastName
//     document.getElementById("viewmail").innerHTML = data.email
//     document.getElementById("viewgender").innerHTML = data.gender
//     // document.getElementById("viewage").innerHTML = age;
//     document.getElementById("viewdob").innerHTML  = data.dob
//     document.getElementById("viewnumber").innerHTML = data.phone
//     document.getElementById("viewqualification").innerHTML = data.qualifications
//     document.getElementById("viewaddress").innerHTML = data.address
//     document.getElementById("viewusername").innerHTML = data.username

// })
// }

// // employeee delete

// function employeeDelete (){
//     console.log(id)
//     var deletebtn = document.getElementById("deletebtn")
//     deletebtn.addEventListener("click", ()=>{
//     fetch(`http://localhost:3000/employees/${id}` , {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
            
//         })
//         .then((res)=>{
//             if(res.ok){
//                 window.location.href = '/index.html';
//             }
//         })
        
//     })
//     var  overlay= document.getElementById("overlay");
//     var deleteemployeepopup= document.getElementById("deleteemployee");
    
    
//     overlay.style.display= "block";
//     deleteemployeepopup.style.display= "block";
    
//     };
    
//     // close employee delete
    
//     const closeEmployeeDelete = () =>{
    
//         var  overlay= document.getElementById("overlay");
//     var deleteemployeepopup= document.getElementById("deleteemployee");
    
//     overlay.style.display= "none";
//     deleteemployeepopup.style.display= "none";
//     }
    
//     // EMPLOYEE DELETE
//     function deleteemployee (){
//         var  overlay= document.getElementById("overlay");
//         var deleteemployeepopup = document.getElementById("deleteemployee");
    
//         overlay.style.display="none";
//         deleteemployeepopup.style.display="none";
    
//     }




//     //////////////////////////////// EDIT EMPLOYEE////////////////////////////////////////////

// function EmployeeEdit(){
//     console.log(id)
//         var  overlay= document.getElementById("overlay");
//         var editEmployee= document.getElementById("editEmployee");
    
//         overlay.style.display= "block";
//          editEmployee.style.display= "block";
    
    
    
//         fetch(`http://localhost:3000/employees/${id}` , {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
            
//         })
    
//         .then((response)=>{
//             return response.json();
    
//         })
//         .then((data)=>{
//             console.log(data)
//        var newdate = changeformat(data.dob)
//             function changeformat(dob) {
//                 dateArr = dob.split("-");
//                 let date = dateArr[2];
//                 let month = dateArr[1];
//                 let year = dateArr[0];
//                 const showFormat = date + "-" + month + "-" + year;
//                 console.log(showFormat,"hgjhfhfhfhfhfhf")
//                 return showFormat;
//             }
            
          
            
//         var checkmale=document.getElementById("flexRadioDefault1")
//         var checkFemale=document.getElementById("editFemale")
    
    
//     document.getElementById('editSalutation').value=data.salutation
//     document.getElementById('editFirstName').value=data.firstName
//     document.getElementById('editLastName').value=data.lastName
//     document.getElementById('editEmail').value=data.email
//     document.getElementById('editMobileNumber').value=data.phone
//     document.getElementById('editDateOfBirth').value=newdate
//     document.getElementById('editQualification').value=data.qualifications
//     document.getElementById('editAddress').value=data.address
//     document.getElementById('editCountry').value=data.country
//     document.getElementById('editState').value=data.state
//     document.getElementById('editCity').value=data.city
//     // document.getElementById('editPin').value=data.salutation
    
    
//     var gender= data.gender
//     if(gender === "Male"){
//     checkmale.checked=true
    
    
//     }
//     if(gender === "Female"){
//         checkFemale.checked=true
        
//     }            
//     })
    
    
//     var editsave=document.getElementById("saveEditEmployee")
//     editsave.addEventListener("click", (e) => {
//         e.preventDefault();
    
//         var salutation = document.getElementById("editSalutation");
//         var firstname = document.getElementById("editFirstName");
//         var lastname = document.getElementById("editLastName");
//         var email = document.getElementById("editEmail");
//         var phone = document.getElementById("editMobileNumber");
//         var dob = document.getElementById("editDateOfBirth").value;
//         var gender = document.querySelector('input[name="editgender"]:checked');
//         console.log(gender.value)
//         var qualification = document.getElementById("editQualification");
//         var address = document.getElementById("editAddress");
//         var city = document.getElementById("editCity");
//         var country = document.getElementById("editCountry")
//         var state = document.getElementById("editState")
//         var username = String(firstname.value) + " " + String(lastname.value);
    
//         function changeformat(dob) {
//             dateArr = dob.split("-");
//             let date = dateArr[2];
//             let month = dateArr[1];
//             let year = dateArr[0];
//             const showFormat = date + "-" + month + "-" + year;
//             console.log(showFormat)
//             return showFormat;
//         }
//         var formatedData = changeformat(dob);
    
//         var newUserDetails = {
//             salutation: salutation.value,
//             firstName: firstname.value,
//             lastName: lastname.value,
//             username: username,
//             email: email.value,
//             phone: phone.value,
//             dob: formatedData,
//             address: address.value,
//             city: city.value,
//             state: state.value,
//             country: country.value,
//             gender: gender.value,
//             qualifications: qualification.value,
//             password: "fdyyuythj",
//         };
//         console.log(newUserDetails)
    
//         fetch(`http://localhost:3000/employees/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newUserDetails),
//             })
//             .then((response) => {
//         if (!response.ok) {
//             throw new Error("Failed to add member");
//         } else {
           
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         // Call readEmp() function here to update the employee list
       
//     })
    
//     });
//     }

//     // close edit employee

// const closeEmployeeEdit = () =>{

//     var  overlay= document.getElementById("overlay");
//     var editEmployee= document.getElementById("editEmployee");

//     overlay.style.display= "none";
//      editEmployee.style.display= "none";
// }



const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  console.log(id);


//   ****************FETCHING DATA FROM BACKEND********************************//


let viewdata = [];
let userdata = viewdata;
const fetchemployee = async (employeeid) => {
  try {
    const response = await fetch(`http://localhost:3000/employees/${employeeid}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch employee data");
    }

    viewdata = await response.json();
    console.log(viewdata);
    viewemployee(viewdata);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};


fetchemployee(id); 



// *****************SHOW DATA DETAILS IN TABLE********************//



function viewemployee (employee){

    // to calculate age

let agedata = employee.dob
console.log(agedata);
let year = agedata.split("-").pop()
console.log(year)
let currentyear = new Date().getFullYear()
console.log(currentyear);
let currentage = currentyear-year
console.log(currentage);

    
document.getElementById("userdetailimage").src = `http://localhost:3000/employees/${employee.id}/avatar`;
    document.getElementById("viewname").innerText = `${employee.salutation}. ${employee.firstName} ${employee.lastName}`;
    document.getElementById("viewmail").innerText = `${employee.email}`;
    document.getElementById("viewgender").innerText = `${employee.gender}`;
    document.getElementById("viewage").innerText = currentage;
    document.getElementById("viewdob").innerText = `${employee.dob}`;
    document.getElementById("viewnumber").innerText = `${employee.phone}`;
    document.getElementById("viewqualification").innerText = `${employee.qualifications}`;
    document.getElementById("viewaddress").innerText = `${employee.address}`;
    document.getElementById("viewusername").innerText = `${employee.username}`;
}


//********************************* */ DELETE IN VIEW DETAILS******************************//

// **************delete popup*********************//


function viewdeletepopup(){

const del = document.getElementById("deleteemployee");
const overlay = document.getElementById("overlay");

del.style.display = "block";
overlay.style.display ="block"

}

//********************* */ cancel delete popup*****************************//

function cancelviewdelete(){
  const del = document.getElementById("deleteemployee");
  const overlay = document.getElementById("overlay");
  
  del.style.display = "none";
  overlay.style.display ="none"

}

//*****************************DELETE EMPLOYEE IN VIEW DETAILS*******************************//
document.getElementById("viewdelete").addEventListener("click",()=>{
  viewdelete(id)
})

function viewdelete (id){

  viewdeletepopup();

const deletebtn = document.getElementById("deletebtn");
 deletebtn.onclick = async (e)=>{
e.preventDefault();

const deleted = await fetch(`http://localhost:3000/employees/${id}`,{
  method : "DELETE",
  headers : {"Content-Type":"application/json"}
})
if(!deleted.ok){
throw new Error("failed to delete employee")
}

cancelviewdelete();
window.location.href = "index.html"


 }
 

}


// ****************************VIEW DETAILS EDIT POPUP***************************//

function vieweditpopup(){

let viewedit = document.getElementById("editEmployee");
let overlay = document.getElementById("overlay");

viewedit.style.display = "block";
overlay.style.display = "block";


}

function closevieweditpopup(){

  let viewedit = document.getElementById("editEmployee");
  let overlay = document.getElementById("overlay");
  
  viewedit.style.display = "none";
  overlay.style.display = "none";
  
}

// *********************************UPLOAD IMAGE**************************//


let viewimage = document.getElementById("editEmployeeChangeImage");
let vieweditupload = document.getElementById("vieweditimg");

vieweditupload.onchange = ()=>{
viewimage.src = URL.createObjectURL(vieweditupload.files[0])
}






//*******************/ EDIT VIEW EMPLOYEE******************************//

// document.getElementById('vieweditchange').addEventListener('click',()=>{
//   vieweditemployee(id)

// })

// async function vieweditemployee(id){
//   vieweditpopup()

//   try{

// const response = await fetch(`http://localhost:3000/employees/${id})`);
// if(!response.ok){
// throw new Error("failed to fetch employee data for editing");
// }

// viewdata = await response.json();

// document.getElementById('editSalutation').value = viewdata.salutation;
//   document.getElementById('editFirstName').value = viewdata.firstName;
//   document.getElementById('editLastName').value = viewdata.lastName;
//   document.getElementById('editEmail').value = viewdata.email;
//   document.getElementById('editMobileNumber').value = viewdata.phone;
//   document.getElementById('editDateOfBirth').value = viewdata.dob.split("-").reverse().join("-");
//   document.getElementById('editmale').checked = viewdata.gender === "male";
//   document.getElementById('editFemale').checked = viewdata.gender === "female";
//   document.getElementById('editusrnm').value = viewdata.username;
//   document.getElementById('editpsd').value = viewdata.password;
//   document.getElementById('editQualification').value = viewdata.qualifications;
//   document.getElementById('editAddress').value = viewdata.address;
//   document.getElementById('editCountry').value = viewdata.country;
//   document.getElementById('editState').value = viewdata.state;
//   document.getElementById('editCity').value = viewdata.city;
//   document.getElementById('editPin').value = viewdata.pin;



//   document.getElementById("saveEditEmployee").addEventListener("click",async (e=>{
// e.preventDefault();

// const updateuser = {
//   pin: document.getElementById("editPin").value,
//   salutation: document.getElementById("editSalutation").value,
//   firstName: document.getElementById("editFirstName").value,
//   lastName: document.getElementById("editLastName").value,
//   email: document.getElementById("editEmail").value,
//   phone: document.getElementById("editMobileNumber").value,
//   qualifications: document.getElementById("editQualification").value,
//   address: document.getElementById("editAddress").value,
//   city: document.getElementById("editCity").value,
//   state: document.getElementById("editState").value,
//   country: document.getElementById("editCountry").value,
//   dob: document.getElementById("editDateOfBirth").value.split("-").reverse().join("-"),
//   gender: document.getElementById("editmale").checked ? "male" : "female",
//   username: document.getElementById("editusrnm").value,
//   password: document.getElementById("editpsd").value
// };

// try{

// const putResponse = await fetch(`http://localhost:3000/employees/${id}`,{
// method : "PUT",
// headers : {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(updatedUser),
// });

// if (!putResponse.ok) {
//   throw new Error('Failed to update employee data');
// }

// }
// ))


// }
// Swal.fire({
//   title: "Successfully Edited Data",

//   icon: "success"
// });

// window.location.href = "index.html";



//   }
//   catch (error){
// console.error('Error updating employee:',error);
//   }




document.getElementById('vieweditchange').addEventListener("click", () => {
  vieweditemployee(id);
});

async function vieweditemployee(id) {
  vieweditpopup();

  try {
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    if (!response.ok) {
      throw new Error("failed to fetch employee data for editing");
    }

    const viewdata = await response.json();
document.getElementById("editEmployeeChangeImage").src = `http://localhost:3000/employees/${id}/avatar`
    document.getElementById('editPin').value = viewdata.pin;
    document.getElementById('editSalutation').value = viewdata.salutation;
    document.getElementById('editFirstName').value = viewdata.firstName;
    document.getElementById('editLastName').value = viewdata.lastName;
    document.getElementById('editEmail').value = viewdata.email;
    document.getElementById('editMobileNumber').value = viewdata.phone;
    document.getElementById('editDateOfBirth').value = viewdata.dob.split("-").reverse().join("-");
    document.getElementById('editmale').checked = viewdata.gender === "male";
    document.getElementById('editFemale').checked = viewdata.gender === "female";
    document.getElementById('editusrnm').value = viewdata.username;
    document.getElementById('editpsd').value = viewdata.password;
    document.getElementById('editQualification').value = viewdata.qualifications;
    document.getElementById('editAddress').value = viewdata.address;
    document.getElementById('editCountry').value = viewdata.country;
    document.getElementById('editState').value = viewdata.state;
    document.getElementById('editCity').value = viewdata.city;

    const viewsubmitbtn = document.getElementById("saveEditEmployee");
    const newsbmitbtn = viewsubmitbtn.cloneNode(true);
    viewsubmitbtn.parentNode.replaceChild(newsbmitbtn, viewsubmitbtn)


    newsbmitbtn.addEventListener("click", async (e) => {
      e.preventDefault();
      viewvalidation();
      
      const updatedUser = {
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
        username : document.getElementById('editusrnm').value,
        password : document.getElementById('editpsd').value
      };

      try {
        const putResponse = await fetch(`http://localhost:3000/employees/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser)
        });

        const editinput = document.getElementById("vieweditimg");
        if(editinput.files.length>0){
const formdata= new FormData();
formdata.append("avatar",editinput.files[0]);

const avatarresponse= await fetch(`http://localhost:3000/employees/${id}/avatar`,{
  method:"POST",
  body:formdata,
});


        }
        updatedUser.id = id
       
        const userindex = userdata.findIndex(employee => employee.id === id);
        userdata.splice(userindex,1,updatedUser)

      
        closevieweditpopup();
        Swal.fire({
          title: "Employee Edited Succesfully",
          text: "You clicked the button!",
          icon: "success"
        });
        
        viewemployee(updatedUser);


      } catch (error) {
        console.error('Error updating employee:', error);

        closevieweditpopup();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch employee data for editing. Please try again later.',
        });
       
        
      }
    });

  } catch (error) {
    console.error('Error fetching employee data:', error);

    closevieweditpopup();

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to fetch employee data for editing. Please try again later.',
    });
    
  }
}


// validation in view details 

function viewvalidation(){

  const salutation = document.getElementById("editSalutation").value.trim();
  const firstName = document.getElementById("editFirstName").value.trim();
  const lastName = document.getElementById("editLastName").value.trim();
  const email = document.getElementById("editEmail").value.trim();
  const phone = document.getElementById("editMobileNumber").value.trim();
  
  // DOB
  
  const DOB = document.getElementById("editDateOfBirth");
   const dob_validtaion = document.getElementById("viewdoberror");
  const dob_value = DOB.value.trim();
  
  // GENDER 
  
  const gender = document.querySelector('input[name="editgender"]:checked')
  const gender_validation = document.getElementById("viewgendererror");
  
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
  
  if(gender){
    gender_validation.textContent = ""
  }
  else{
    gender_validation.textContent = " * gender is required"
    Valid = false;
  }
  
  if(dob_value === ""){
    dob_validtaion.textContent = " * Date of Birth is required"
    Valid = false;
  }
  
  // Valiadation of form 
  
  if(salutation == "" || salutation == "select"){
    document.getElementById("viewsalutationerror").textContent = " * salutation is required";
    Valid = false;
  }
  
  if(!namepattern.test(firstName)){
  document.getElementById("viewfirsterror").textContent = " * first name is required"
  Valid = false;
  }
  
  if(!namepattern.test(lastName)){
  document.getElementById("viewlasterror").textContent = " * last name is required"
  Valid = false;
  }
  
  if(!emailPattern.test(email)){
    document.getElementById("viewemailerror").textContent =" * email is required"
  Valid = false;
  }
  
  if(!phonePattern.test(phone)){
    document.getElementById("viewnumbererror").textContent =" * number is required"
  Valid = false;
  }
  
  if(username == ""){
  document.getElementById("viewusernameerror").textContent = " * username is required"
  Valid = false;
  }
  
  if (password == "") {
    document.getElementById('viewpassworderror').textContent = " * Password is required"
    Valid = false;
  }
  
  if (qualifications == "") {
    document.getElementById('viewqualificationerror').textContent = " * Qualification is required"
    Valid = false;
  }
  
  if (address == "") {
    document.getElementById('viewaddresserror').textContent = " * Address is required"
    Valid = false;
  }
  
  
  if (country == "" || country == "select country") {
    document.getElementById('viewcountryerror').textContent = " * Country is required"
    Valid = false;
  }
  
  if (state == "" || state == "select state") {
    document.getElementById('viewstateerror').textContent = " * State is required"
    Valid = false;
  }
  
  if (city == "" ) {
    document.getElementById('viewcityerror').textContent = " * City is required"
    Valid = false;
  }
  
  if (!pinpattern.test(pin)) {
    document.getElementById('viewpinerror').textContent = " * pin is required"
    Valid = false;
  }
  
  
  // validation of gender when clicking
  
  const male = document.getElementById("editmale");
  const female = document.getElementById("editFemale");
  male.addEventListener("click", ()=>{
    document.getElementById("viewgendererror").textContent = "";
  })
  female.addEventListener("click", ()=>{
  
  document.getElementById("viewgendererror").textContent = "";
  })
  document.getElementById("viewforms").addEventListener("submit", (event)=>{
  event.preventDefault();
  })
  return Valid;
  
  }
  
  document.addEventListener("DOMContentLoaded",function (){
    document.getElementById("editEmployee").addEventListener("input",(event)=>{
  const input = event.target;
  const errormsg = input.parentElement.querySelector(".errormsg");
  if(input && errormsg ){
  errormsg.textContent = "";
  }
  
    })
    document.getElementById("viewforms").addEventListener("submit",(event)=>{
  event.preventDefault();
  
    })
  })