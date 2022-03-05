
function checkForm(form) {

  let firstName= form.firstName.value;
  let lastName= form.lastName.value;
  let email= form.email.value;
  let phoneNumber= form.phoneNumber.value;
  let postalCode= form.postalCode.value;
  let password= form.password.value;
  if (firstName=="" && lastName=="" &&email=="" &&phoneNumber==""&& postalCode ==""&& password=="")
  return false; 
  
  if(firstName=="") {
    window.alert("Please insert your firstName.");
    form.firstName.focus();
    firstName.preventDefault();
    return false;
  } 
  if(lastName=="") {
    window.alert("Please insert your lastName.");
    form.lastName.focus();
    return false;
  }

  let emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/;
  if(email==""||emailReg.test(email) === false) {
    window.alert("Please insert your email.");
    form.email.focus();
    return false;
  }

  if(phoneNumber=="") {
    window.alert("Please insert your phone Number.");
    form.phoneNumber.focus();
    return false;
  }
  if(postalCode !=""){
  let value1 = /^[0-9]{6}$/;
  if(value1.test(postalCode) === false) {
    window.alert("Please insert your Postal Code.");
    form.postalCode.focus();
    return false;
  }
}
let passwordReg = /^[0-9]{6,}$/;
  if(password==""||passwordReg.test(password) === false) {
    window.alert("Please insert your password.");
    form.password.focus();
    return false;
  }
  //alert ("ВСЕ ОТПРАВЛЕНО НЕ БЕЗОПАСНЫМ GET ");

return true;

}