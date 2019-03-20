function submitForm(){

  var name = document.forms["contactInfo"]["name"].value;
  var email = document.forms["contactInfo"]["email"].value;
  var phone = document.forms["contactInfo"]["phone"].value;


    if(name == ""){
      document.getElementById("nameAlert").style.display = "block";
    }
    if(email == ""){
      document.getElementById("emailAlert").style.display = "block";
    }
    if(phone == ""){
      document.getElementById("phoneAlert").style.display = "block";
    }
    if(name !== "" && email !== "" && phone != ""){
      alert("The information provided is valid.");
    }

    return false;
}
