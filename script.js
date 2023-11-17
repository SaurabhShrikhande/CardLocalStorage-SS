function storeuserinfo(){
    const firstname = prompt("Enter your name");
    const lastname = prompt("Enter your last name");
    const contry = prompt('enter your contry name');
    const phoneno = prompt('enter your phone number');
    const state = prompt("enter your state name");
    const city = prompt("enter your city name");
    const village = prompt('enter your village name');

     userinfo = {
        "firstname" : firstname,
        "lastname" : lastname,
        "contry" : contry,
        "phone" : phoneno,
        "state" : state,
        "city" : city,
        "village" : village
    }

    localStorage.setItem("userinfo", JSON.stringify(userinfo));
    
    filldata();
}

let userinforesult = localStorage.getItem("userinfo");

if (userinforesult){
    filldata();
  }
  else{
      storeuserinfo();
  }

  function filldata(){
    userinforesult = localStorage.getItem("userinfo");
    const final = JSON.parse(userinforesult);

    let x = document.getElementById("firstname");
    x.innerHTML = final.firstname;
    document.getElementById("lastname").innerText = final.lastname;
    document.getElementById("contry").innerText = final.contry;
    document.getElementById("phoneno").innerText =final.phone;
    document.getElementById("state").innerText = final.state;
    document.getElementById("city").innerText = final.city;
    document.getElementById("village").innerText = final.village;
}


