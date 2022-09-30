// For slideshow (Line no. 3 -> 34)

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusSlides(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}





// Footer section JS

var count = setInterval(function () {
  var dates = new Date();


  document.getElementById("day").innerHTML = dates.getDate();
  document.getElementById("month").innerHTML = dates.getMonth() + 1;
  document.getElementById("year").innerHTML = dates.getFullYear();
}, 1000);



// Payment Gateway (DebitCard/CreditCard)

function otp() {

  var filled;

  function validateDetails() {
    filled = Boolean(false);

    var name = document.getElementById("fname").value;
    var email = document.getElementById("email2").value;
    var cardno = document.getElementById("card").value;
    var CVV = document.getElementById("cvv").value;
    var expiryMonth = document.getElementById("expmonth").value;
    var expiryYear = document.getElementById("expyear").value;

    if (name.length != 0 && email.length != 0 && cardno.length != 0 && CVV.length != 0 && expiryMonth.length != 0 && expiryYear.length != 0) {
      filled = Boolean(true);
    }

    else {
      if (name.length == 0) {
        alert("Fill in your name");
      }
      if (email.length == 0) {
        alert("Fill in your email");
      }
      if (cardno.length == 0) {
        alert("Fill in your card number");
      }
      if (CVV.length == 0) {
        alert("Fill in your CVV");
      }
      if (expiryMonth.length == 0) {
        alert("Fill in your expiry month");
      }
      if (expiryYear.length == 0) {
        alert("Fill in your expiry year");
      }
    }




  }

  function validateOtp(num) {
    const re = /\d{3}-\d{3}$/;
    var result = num.match(re);
    if (result) {
      alert("Confirmation details will be send to your mail id.");
      window.location.reload(true);
    }
    else {
      num = prompt("Enter OTP sent on email in XXX-XXX format: ");
      validateOtp(num);
    }
  }

  validateDetails();

  if (filled) {
    const num = prompt("Enter OTP sent in XXX-XXX format");
    validateOtp(num);
  }



}







