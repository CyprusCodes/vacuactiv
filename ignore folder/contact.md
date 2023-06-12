# Google script contact form

1. Open a new google sheet document. Make sure you set up your column titles as per your input fields in your HTML form.
2. Go to Extensions/AppScript
3. Copy and Paste the below script

```javascript
function doGet(e) {
  return handleResponse(e);
}

//  Enter sheet name where data is to be written below
var SHEET_NAME = "contact-list";

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

function handleResponse(e) {
  // shortly after my original solution Google announced the LockService[1]
  // this prevents concurrent access overwritting data
  // [1] http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
  // we want a public lock, one that locks for all invocations
  var lock = LockService.getPublicLock();
  lock.waitLock(30000); // wait 30 seconds before conceding defeat.

  try {
    // next set where we write the data - you could write to multiple/alternate destinations
    var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet = doc.getSheetByName(SHEET_NAME);

    // we'll assume header is in row 1 but you can override with header_row in GET/POST data
    var headRow = e.parameter.header_row || 1;
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1; // get next row
    var row = [];
    // loop through the header columns
    for (i in headers) {
      if (headers[i] == "Timestamp") {
        // special case if you include a 'Timestamp' column
        let date = Utilities.formatDate(
          new Date(),
          "GMT",
          "dd MMM yyyy, HH:mm:ss"
        );
        row.push(date);
      } else {
        // else use header name to get data
        row.push(e.parameter[headers[i]]);
      }
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    // return json success results
    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: nextRow })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    console.log(e);
    // if error return this
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: e })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    //release lock
    lock.releaseLock();

    // https://developers.google.com/apps-script/reference/mail/mail-app#sendemailmessage
    MailApp.sendEmail({
      to: "ersel@epiphany.capital, sensijamcy@gmail.com",
      subject: "Epiphany Capital Contact Form",
      htmlBody: "<p>" + row.join("</p><p>") + "</p>",
    });
  }
}

function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty("key", doc.getId());
}
```

4. Run the **doGet** and **setup** functions an Deploy the app from the top-right button. Make sure your permissions are correct.

5. Save the deployed google script URL. _(something like script.google.com/macros/sAKfdsnfjjsdsdfd0e32-fdsf3dsf_dsfdsfds\_\_ofjds). this link will be used in your_ `custom.js` _file later_

6. Go to your landing page HTML codebase

7. create a `custom.js` file and Copy and paste the below block. In your `codebase` file and adjust the class names, ids and button texts as desired. Make sure you change the `url` variable with your unique google script link.

```javascript
//Contact form Submission via googlescript

var $formContact = $("#contact-us"),
  url =
    "https://script.google.com/macros/s/AKfycbxF5AAfaH5t91WYYhkMFkPP4h4gRFiP67_w19EwlGCCHGKntV4AQenwu34UUrZb5w_Kbw/exec"; //this has to be taken from a deployed google spread sheet

$("#form-submit").on("click", function (e) {
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
});
```

8. Make sure your HTML element names match your purpose. As an example, please see below.

```
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h3 class="text-uppercase">Get In Touch</h3>
              <p>
                Do you have a question about our products and services that you
                are interested in? Please fill in the form below, we are happy
                to help.
              </p>
              <div class="m-t-30">
                <form
                  class="widget-contact-form"
                  id="contact-us"
                  data-success-message-delay="40000"
                  novalidate
                  action="include/contact-form.php"
                  role="form"
                  method="post"
                >
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        aria-required="true"
                        name="fullname"
                        required
                        class="form-control required name"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="phone">Phone</label>
                      <input
                        type="tel"
                        aria-required="true"
                        name="mobile_phone"
                        required
                        class="form-control required email"
                        placeholder="Enter your Phone Number"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-md-12">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        aria-required="true"
                        name="email"
                        required
                        class="form-control required email"
                        name="email"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      type="text"
                      name="message"
                      required
                      rows="6"
                      class="form-control required"
                      placeholder="Enter your Message"
                    ></textarea>
                  </div>
                  <button
                    class="btn btn-primary"
                    type="submit"
                    id="form-submit"
                  >
                    <i class="fa fa-paper-plane"></i>&nbsp;Send message
                  </button>
                  <input
                    type="hidden"
                    name="recaptcha_response"
                    id="recaptchaResponse"
                  />
                  <div class="row">
                    <div id="form-result2" class="form-result alert">
                      <div class="content"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="text-uppercase">Address & Map</h3>
              <div class="row">
                <div class="col-lg-6">
                  <address>
                    <strong> Productive Machines,</strong><br />
                    Advanced Manufacturing Park,<br />
                    Technology Centre,<br />
                    Rotherham, S60 5WG, UK<br />
                    <!-- <abbr title="Phone">P:</h4> (123) 456-7890 -->
                  </address>
                </div>
              </div>
              <!-- Google Map -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9518.284133116662!2d-1.386691478516421!3d53.38672437745638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48797707e1e66bcf%3A0x942fb7df3d99424a!2sProductive%20Machines!5e0!3m2!1sen!2suk!4v1637001614860!5m2!1sen!2suk"
                width="600"
                height="390"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <!-- end: Google Map -->
            </div>
          </div>
        </div>
      </section>
```

\
Tips If you got a permission issue in your Google script deployment settings, you might get a CORS error.

Good Luck!
