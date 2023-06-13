/* contact form  */

$("#form-submit").on("click", function (e) {
  let x = document.forms["contact-us"]["email"].value;
  var $formContact = $("#contact-us"),
    url = "https://api.youth.com/"; //this has to be taken from a deployed google spread sheet
  if (x == "") {
    alert("Email must be filled out");
    return false;
  } else {
    e.preventDefault();

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $formContact.serializeArray(),
      success: function success(data) {
        $('button[type="submit"]').removeClass("clicked");
        $("#form-submit").html(
          "<i class='fa fa-paper-plane'></i>&nbsp;Send Message"
        );
        $("#form-submit").prop("disabled", false);
        $("#form-result2")
          .addClass("alert-warning")
          .removeClass("alert-success alert-danger")
          .css("display", "block");
        $("#form-result2")
          .addClass("alert-success")
          .removeClass("alert-warning alert-danger")
          .css("display", "block");
        $("#form-result2 > .content").html("Message sent successfully!");
      },
      error: function error() {
        $('button[type="submit"]').removeClass("clicked");
        $("#form-submit").html(
          "<i class='fa fa-paper-plane'></i>&nbsp;Send Message"
        );
        $("#form-submit").prop("disabled", false);
        $("#form-result2")
          .addClass("alert-danger")
          .removeClass("alert-warning alert-success")
          .css("display", "block");
        $("#form-result2 > .content").html(
          "Unsuccesful attempt. Please try again."
        );
      },
    }).then(
      $("#form-result2").css("display", "none"),
      $('button[type="submit"]').addClass("clicked"),
      $("#form-submit").prop("disabled", true),
      $("#form-submit").html("<i class='icon-loader fa-spin' > </i> Sending..")
    );
  }
  setTimeout(function () {
    $("#form-result2").css("display", "none");
  }, 3500);
});

/* subscribe form */

$("#mc-embedded-subscribe").on("click", function (event) {
  let email = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;

  if (email == "") {
    alert("Email must be filled out !");
    return false;
  } else {
    event.preventDefault();
    $("#trois").removeClass("alert-danger");
    $("#trois").addClass("alert-info");
    $("#trois > .content").html(
      "<i class='icon-loader fa-spin'></i> Sending ..."
    );

    $.ajax({
      url: "https://api.cypruscodes.com/subscribe",

      method: "POST",
      dataType: "json",
      data: { email: email, channel: "vacuactiv" },
      success: function success() {
        $("#trois > .content").html("Subscription received!");
        $("#trois").removeClass("alert-danger");
        $("#trois").addClass("alert-success");
        $("#trois").css("display", "block");
      },
      error: function error() {
        $("#trois").addClass("alert-danger");
        $("#trois").removeClass("alert-warning");
        $("#trois > .content").html("Unsuccesful attempt. Please try again.");
        $("#trois").css("display", "block");
      },
      complete: function () {
        $("#trois").css("display", "block");
        $("#trois > .content").html("Subscription received!");
        $("#trois").removeClass("alert-danger");
        $("#trois").removeClass("alert-info");
        $("#trois").addClass("alert-success");
      },
    });
  }
  setTimeout(function () {
    $("#trois").css("display", "none");
  }, 3500);
});

/* show hide language btn */
let lang = document.getElementById("lang");

function toggleLangBtn() {
  if (lang.className === "dropdown-menu") {
    lang.classList.add("show");
    setTimeout(function () {
      lang.classList.remove("show");
    }, 3000);
  } else {
    lang.classList.remove("show");
  }
}
