function handleContactFormSubmit(event) {
  let x = document.forms["contact-us"]["email"].value;
  const form = document.getElementById("contact-us");

  if (x == "") {
    alert("Email must be filled out");
    return false;
  } else {
    event.preventDefault();
    var $formContact = $("#contact-us"),
      url = "https://api.productivemachines.co.uk/contact-message";
    const formValues = $formContact.serializeArray();
    const formObj = formValues.reduce((previous, current) => {
      const { name, value } = current;
      previous[name] = value;
      return previous;
    }, {});

    var jqxhr = $.ajax({
      url: url,
      method: "POST",
      dataType: "json",
      data: formObj,
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
        form.reset();
        setTimeout(() => {
          $("#form-result2").css("display", "none");
        }, 5000);
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
}
