/* show hide language btn */

/* contact form  */

$("#form-submit").on("click", function (e) {
  let x = document.forms["contact-us"]["email"].value;
  var $formContact = $("#contact-us"),
    url = "https://script.google.com/macros/s/AKfycbx9wLY5vZDlucUXbXU-h5fxtwG6cV1IM7ZHoveoBcB_iNU4k_mkPdXA_DE8H6ldJYTcYg/exec"
  console.log($formContact['fullName']);

  if (x == "") {
    if (lang === "ru") {
      alert("Электронная почта должна быть заполнена");
    } else if (lang === "gr") {
      alert("Το email πρέπει να συμπληρωθεί");
    } else {
      alert("Email must be filled out");
    }
    return false;
  } else {
    e.preventDefault();

    if (lang === "ru") {
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $formContact.serializeArray(),
        success: function success(data) {
          $('button[type="submit"]').removeClass("clicked");
          $("#form-submit").html(
            "<i class='fa fa-paper-plane'></i>&nbsp; Отправлять"
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
          $("#form-result2 > .content").html("Сообщение успешно отправлено!");
        },
        error: function error() {
          $('button[type="submit"]').removeClass("clicked");
          $("#form-submit").html(
            "<i class='fa fa-paper-plane'></i>&nbsp;Отправлять"
          );
          $("#form-submit").prop("disabled", false);
          $("#form-result2")
            .addClass("alert-danger")
            .removeClass("alert-warning alert-success")
            .css("display", "block");
          $("#form-result2 > .content").html(
            "Неудачная попытка. Пожалуйста, попробуйте еще раз."
          );
        },
      }).then(
        $("#form-result2").css("display", "none"),
        $('button[type="submit"]').addClass("clicked"),
        $("#form-submit").prop("disabled", true),
        $("#form-submit").html(
          "<i class='icon-loader fa-spin' > </i> отправка ..."
        )
      );
    } else if (lang === "gr") {
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $formContact.serializeArray(),
        success: function success(data) {
          $('button[type="submit"]').removeClass("clicked");
          $("#form-submit").html(
            "<i class='fa fa-paper-plane'></i>&nbsp;στείλετε"
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
          $("#form-result2 > .content").html("Το μήνυμα εστάλη επιτυχώς!");
        },
        error: function error() {
          $('button[type="submit"]').removeClass("clicked");
          $("#form-submit").html(
            "<i class='fa fa-paper-plane'></i>&nbsp;στείλετε"
          );
          $("#form-submit").prop("disabled", false);
          $("#form-result2")
            .addClass("alert-danger")
            .removeClass("alert-warning alert-success")
            .css("display", "block");
          $("#form-result2 > .content").html(
            "Αποτυχημένη προσπάθεια. ΠΑΡΑΚΑΛΩ προσπαθησε ξανα."
          );
        },
      }).then(
        $("#form-result2").css("display", "none"),
        $('button[type="submit"]').addClass("clicked"),
        $("#form-submit").prop("disabled", true),
        $("#form-submit").html(
          "<i class='icon-loader fa-spin' > </i> αποστολή..."
        )
      );
    } else {
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $formContact.serializeArray(),
        // data: { htmlBody: "ssssss"},
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
        $("#form-submit").html(
          "<i class='icon-loader fa-spin' > </i> Sending.."
        )
      );
    }
  } 
  console.log($formContact, 'afterrrr');
  setTimeout(function () {
    $("#form-result2").css("display", "none");
  }, 3500);
});

/* subscribe form */

$("#mc-embedded-subscribe").on("click", function (event) {
  let email = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;
  var lang = window.localStorage.getItem("language");
  if (email == "") {
    if (lang === "ru") {
      alert("Электронная почта должна быть заполнена");
    } else if (lang === "gr") {
      alert("Το email πρέπει να συμπληρωθεί");
    } else {
      alert("Email must be filled out");
    }
    return false;
  } else {
    event.preventDefault();
    $("#trois").removeClass("alert-danger");
    $("#trois").addClass("alert-info");
    if (lang === "gr") {
      $("#trois > .content").html(
        "<i class='icon-loader fa-spin'></i> Αποστολή ..."
      );

      $.ajax({
        url: "https://api.cypruscodes.com/subscribe",

        method: "POST",
        dataType: "json",
        data: { email: email, channel: "vacuactiv" },
        success: function success() {
          $("#trois > .content").html("Λήψη συνδρομής !");
          $("#trois").removeClass("alert-danger");
          $("#trois").addClass("alert-success");
          $("#trois").css("display", "block");
        },
        error: function error() {
          $("#trois").addClass("alert-danger");
          $("#trois").removeClass("alert-warning");
          $("#trois > .content").html(
            "Αποτυχημένη προσπάθεια. ΠΑΡΑΚΑΛΩ προσπαθησε ξανα."
          );
          $("#trois").css("display", "block");
        },
        complete: function () {
          $("#trois").css("display", "block");
          $("#trois > .content").html("Λήψη συνδρομής !");
          $("#trois").removeClass("alert-danger");
          $("#trois").removeClass("alert-info");
          $("#trois").addClass("alert-success");
        },
      });
    } else if (lang === "ru") {
      $("#trois > .content").html(
        "<i class='icon-loader fa-spin'></i> Отправка ..."
      );

      $.ajax({
        url: "https://api.cypruscodes.com/subscribe",

        method: "POST",
        dataType: "json",
        data: { email: email, channel: "vacuactiv" },
        success: function success() {
          $("#trois > .content").html("Подписка получена !");
          $("#trois").removeClass("alert-danger");
          $("#trois").addClass("alert-success");
          $("#trois").css("display", "block");
        },
        error: function error() {
          $("#trois").addClass("alert-danger");
          $("#trois").removeClass("alert-warning");
          $("#trois > .content").html(
            "Неудачная попытка. Пожалуйста, попробуйте еще раз."
          );
          $("#trois").css("display", "block");
        },
        complete: function () {
          $("#trois").css("display", "block");
          $("#trois > .content").html("Подписка получена !");
          $("#trois").removeClass("alert-danger");
          $("#trois").removeClass("alert-info");
          $("#trois").addClass("alert-success");
        },
      });
    } else {
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
  }
  setTimeout(function () {
    $("#trois").css("display", "none");
  }, 3500);
});


