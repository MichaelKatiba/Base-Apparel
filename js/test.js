var checkForm = function(){
    if (form.address.value.indexOf('@') != -1 && form.address.value.indexOf('.') != -1 ) {
       document.querySelector("#useremail").style.border = "#00ff00";
    } else {
       document.querySelector('#useremail').style.border = "#f96262";
        
    }
}
