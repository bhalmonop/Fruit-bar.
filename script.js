function submitForm(event) {
    event.preventDefault(); 
    
    var fullName = document.getElementById('customerName').value;
    var phoneNumber = document.getElementById('customerPhone').value;

    if (!fullName) {
      
      alert('Please fill in your full name.');
    } else if (fullName && phoneNumber) {
      
      window.location.href = 'index.html';
    } else {
      
      return;
    }
  }

  var submitButton = document.querySelector('.submit');
  submitButton.addEventListener('click', submitForm);

  $("input[type=tel]").each(function () {
    var iti = window.intlTelInput(this, {
      utilsScript:
        "https://app.dmenuonline.com/js/intl-tel-input/js/utils.js",
      initialCountry: "auto",
      geoIpLookup: function (success, failure) {
        $.get(
          "https://ipinfo.io?token=e1d746a7a8e255",
          function () {},
          "jsonp"
        ).always(function (resp) {
          var countryCode = resp && resp.country ? resp.country : "";
          success(countryCode);
        });
      },
    });

    this.addEventListener("countrychange", function (e) {
      var dialCode = iti.getSelectedCountryData().dialCode;
      this._iti_country = dialCode ? dialCode : "";
      if (dialCode) {
        this.value = "+" + dialCode;
      }
    });

   });

  $(".skip")
    .off("click")
    .on("click", function (e) {
      e.preventDefault();
      location.replace("index.html");
    });









      