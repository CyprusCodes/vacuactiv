$.i18n = function (options) {
  options = $.extend(
    {},
    {
      lang: window.localStorage.getItem("language") || "en",
      data: $.i18n,
    },
    options
  );

  var langStore = options.data[options.lang];
  this.setLang = function (language) {
    window.localStorage.setItem("language", language);
    langStore = options.data[language];
  };

  this.getItem = function (key) {
    return langStore[key];
  };

  return this;
};

$.i18n.en = {
  home_text_link: "home",
  hproduct_text_link: "products",
  about_text_link: "about us",
  quote_text_link: "get a quote",
  news_text_link: "news",
  faq_text_link: "faq",
  contact_text_link: "contact",
  fitness_devices_cat: "Fitness <br />devices",
  aqua_devices_cat: "Aqua <br />devices",
  cryotherapy_devices_cat: "Cryotherapy devices",
  wellness_devices_cat: "Wellness <br />&amp; SPA",
  furniture_devices_cat: "Furniture <br /> &amp; Others",
  products_text: "Products",
  experience_1:
    "Experience<br /> The ultimate Workout With <a href='#' class='immersion-link2' target='_blanck'>Innovative Technology</a>",
  start_scrolling: "START SCROLLING",
  satisfied_custommers: "Satisfied customers.",
  shipment_worldwide: "Shipment world wide.",
  opened_a_year: "Opened Studio a year.",
  distributors_worldwide: "Distributors world wide.",
  awards_won: "Prizes and awards won.",
  cryo_leading: "''Cryotherapy: <br /> Leading Production",
  cryo_leading_p:
    "Since 2002, Vacu Activ has been producing innovative slimming and cryotherapy devices. We meet the expectations of customers by offering world-class equipment. Our company's mission is to create high-quality devices using the latest technology and to trigger activities. Human and his needs inspire our creative processes.",
  build_trust: "''Building Trust: <br />A systematic Approach",
  build_trust_p:
    "Our devices adapt to people and their lifestyle. We change with the changing reality, looking to the future. We draw on both modern technological and aesthetic solutions, taking care of the unique design of our products.",
  get_started: "GET STARTED",
  product_h: "PRODUCT",
  product_h_1: "Infrashape Horizontal",
  product_desc_1:
    "Infrashape Horizontal is a revolutionary capsule that maximizes the effectiveness of training on a stationary bike. Exercise efficiency is optimized thanks to the horizontal position taken by the user, as well as thanks to the additional effects in the form of infrared, negative pressure or additional functions like aromatherapy, colortherapy, collagen or lymphatic drainage. Infrashape Horizontal speeds up the time to achieve goals.",
  product_h_2: "Cryo Local Polar Bear",
  product_desc_2:
    "Cryo Local Polar Bear is a perfect device for local cryo stimulation that can be used for treatment on particular parts of the body. The device is ideal for rehabilitation and skin care treatments. Spot cryotherapy is used to treat problematic areas with a vapor of nitrogen blowing with a temperature up to -160°C. Application for pain relief and reduce inflammation in targetted areas of body as well as after surgery treatments and rehabilitation procedure. Available programs for localized cryotherapy for neck, lower back, shoulder, elbow, wrist, hip, knee, ankle and belly areas.",
  product_h_3: "Cryo Total",
  product_desc_3:
    "Cryo Total is a cryotherapy chamber which used cooling by cold air, which is a most advanced technology than cooling by nitrogen vapor. Client does not contact with any chemical substances and stays away from involve in nitrogen vapor which is used in a regular cryotherapy chambers where head is over. Cryo Total cryochamber involve whole body including head to cryotherapy treatment using just cooled natural air.",
  view_project:
    "VIEW PROJECT <i class='fa fa-icon-long-arrow-right' style='margin-left: 5px; color: #e10000'></i>",
  stay_update: "Stay updated",
  stay_update_desc:
    "Stay up-to-date with current special discounts, <br />new devices and the latest <br />news from the Vacu Activ world.",
  live_chat: "Live chat",
  live_chat_desc:
    "Our advisors are available to answer any question. Feel free to join our Live Chat.",
  join_btn: "Join",
  tech_support: "Technical Support",
  tech_support_desc:
    "If you have any issues with the devie, contact with our technician team to solve the problem.",
  more_btn: "MORE",
  footer_desc: "Experience the Ultimate Workout with innovative technologies",
  product_category: "Product Categories",
  f_fitness_devices: "Fitness Devices",
  f_cryo_devices: "Cryotherapy Devices",
  f_aqua_devices: "Aqua Devices",
  f_wellness_spa: "Wellness & SPA Devices",
  f_support: "Support",
  f_tech_support: "Technical support",
  f_faq: "FAQ",
  f_get_in_touch: "Get in Touch",
  f_copy_right: "&copy; 2023 Vacu ACtiv All Rights Reserved.",
};

$.i18n.ru = {
  home_text_link: "Дом",
  hproduct_text_link: "",
  about_text_link: "",
  quote_text_link: "",
  news_text_link: "",
  faq_text_link: "",
  contact_text_link: "",
  fitness_devices_cat: "",
  aqua_devices_cat: "",
  cryotherapy_devices_cat: "",
  wellness_devices_cat: "",
  furniture_devices_cat: "",
  products_text: "",
  experience_1: "",
  start_scrolling: "",
  satisfied_custommers: "",
  shipment_worldwide: "",
  opened_a_year: "",
  distributors_worldwide: "",
  awards_won: "",
  cryo_leading: "",
  cryo_leading_p: "",
  build_trust: "",
  build_trust_p: "",
  get_started: "",
  product_h: "",
  product_h_1: "",
  product_h_2: "",
  product_h_3: "",
  product_desc_1: "",
  product_desc_2: "",
  product_desc_3: "",
  view_project: "",
  stay_update: "",
  stay_update_desc: "",
  live_chat: "",
  live_chat_desc: "",
  join_btn: "",
  tech_support: "",
  tech_support_desc: "",
  more_btn: "",
  footer_desc: "",
  product_category: "",
  f_fitness_devices: "",
  f_cryo_devices: "",
  f_aqua_devices: "",
  f_wellness_spa: "",
  f_support: "",
  f_tech_support: "",
  f_faq: "",
  f_get_in_touch: "",
  f_copy_right: "",
};

$.i18n.gr = {
  home_text_link: "Σπίτι",
  hproduct_text_link: "Προϊόντα",
  about_text_link: "Λάβετε εισαγωγικά",
  quote_text_link: "Λάβετε εισαγωγικά",
  news_text_link: "Νέα",
  faq_text_link: "FAQ",
  contact_text_link: "Επικοινωνία",
  fitness_devices_cat: "Συσκευές<br /> γυμναστικής",
  aqua_devices_cat: "Συσκευές <br />Aqua",
  cryotherapy_devices_cat: "Συσκευές κρυοθεραπείας",
  wellness_devices_cat: "Ευεξία<br /> & SPA",
  furniture_devices_cat: "Έπιπλα<br /> & Άλλα",
  products_text: "Προϊόντα",
  experience_1:
    "Ζήστε<br /> την απόλυτη προπόνηση με <a href='#' class='immersion-link2' target='_blanck'>πρωτοποριακή τεχνολογία</a>.",
  start_scrolling: "ΞΕΚΙΝΗΣΤΕ ΤΗΝ ΚΥΛΙΣΗ",
  satisfied_custommers: "Ικανοποιημένοι πελάτες.",
  shipment_worldwide: "Αποστολή σε όλο τον κόσμο.",
  opened_a_year: "Ανοίγει στούντιο το χρόνο.",
  distributors_worldwide: "Διανομείς σε όλο τον κόσμο.",
  awards_won: "Κέρδισαν βραβεία και βραβεία.",
  cryo_leading: "''Κρυοθεραπεία: <br /> Κορυφαία Παραγωγή",
  cryo_leading_p:
    "Από το 2002, η Vacu Activ παράγει καινοτόμες συσκευές αδυνατίσματος και κρυοθεραπείας. Ικανοποιούμε τις προσδοκίες των πελατών προσφέροντας εξοπλισμό παγκόσμιας κλάσης. Η αποστολή της εταιρείας μας είναι να δημιουργεί συσκευές υψηλής ποιότητας χρησιμοποιώντας την τελευταία λέξη της τεχνολογίας και να ενεργοποιεί δραστηριότητες. Ο άνθρωπος και οι ανάγκες του εμπνέουν τις δημιουργικές μας διαδικασίες.",
  build_trust: "''Οικοδόμηση εμπιστοσύνης: <br />Συστηματική προσέγγιση",
  build_trust_p:
    "Οι συσκευές μας προσαρμόζονται στους ανθρώπους και τον τρόπο ζωής τους. Αλλάζουμε με τη μεταβαλλόμενη πραγματικότητα, κοιτάζοντας το μέλλον. Βασιζόμαστε τόσο σε σύγχρονες τεχνολογικές όσο και σε αισθητικές λύσεις, φροντίζοντας για τον μοναδικό σχεδιασμό των προϊόντων μας.",
  get_started: "ΞΕΚΙΝΑ",
  product_h: "ΠΡΟΪΟΝ",
  product_h_1: "Infrashape Horizontal",
  product_desc_1:
    "Το Infrashape Horizontal bike είναι μια επαναστατική κάψουλα που μεγιστοποιεί την αποτελεσματικότητα της προπόνησης σε στατικό ποδήλατο.Η αποτελεσματικότητα της άσκησης βελτιστοποιείται χάρη στην οριζόντια θέση που παίρνει ο χρήστης, καθώς και χάρη σε πρόσθετα εφέ με τη μορφή υπέρυθρων, αρνητικής πίεσης ή πρόσθετες λειτουργίες όπως αρωματοθεραπεία, χρωματοθεραπεία, κολλαγόνο ή λεμφική παροχέτευση. Το Infrashape Horizontal επιταχύνει το χρόνο για την επίτευξη στόχων.",
  product_h_2: "Cryo Local Polar Bear",
  product_desc_2:
    "Cryo Local Polar Bear is a perfect device for local cryo stimulation that can be used for treatment on particular parts of the body. The device is ideal for rehabilitation and skin care treatments. Spot cryotherapy is used to treat problematic areas with a vapor of nitrogen blowing with a temperature up to -160°C. Application for pain relief and reduce inflammation in targetted areas of body as well as after surgery treatments and rehabilitation procedure. Available programs for localized cryotherapy for neck, lower back, shoulder, elbow, wrist, hip, knee, ankle and belly areas.",
  product_h_3: "Cryo Total",
  product_desc_3:
    "Cryo Total is a cryotherapy chamber which used cooling by cold air, which is a most advanced technology than cooling by nitrogen vapor. Client does not contact with any chemical substances and stays away from involve in nitrogen vapor which is used in a regular cryotherapy chambers where head is over. Cryo Total cryochamber involve whole body including head to cryotherapy treatment using just cooled natural air.",
  view_project:
    "ΠΡΟΒΟΛΗ ΕΡΓΟΥ<i class='fa fa-icon-long-arrow-right' style='margin-left: 5px; color: #e10000'></i>",
  stay_update: "Stay updated",
  stay_update_desc:
    "Stay up-to-date with current special discounts, <br />new devices and the latest <br />news from the Vacu Activ world.",
  live_chat: "Live chat",
  live_chat_desc:
    "Our advisors are available to answer any question. Feel free to join our Live Chat.",
  join_btn: "Join",
  tech_support: "Technical Support",
  tech_support_desc:
    "If you have any issues with the devie, contact with our technician team to solve the problem.",
  more_btn: "MORE",
  footer_desc: "Experience the Ultimate Workout with innovative technologies",
  product_category: "Product Categories",
  f_fitness_devices: "Fitness Devices",
  f_cryo_devices: "Cryotherapy Devices",
  f_aqua_devices: "Aqua Devices",
  f_wellness_spa: "Wellness & SPA Devices",
  f_support: "Support",
  f_tech_support: "Technical support",
  f_faq: "FAQ",
  f_get_in_touch: "Get in Touch",
  f_copy_right: "&copy; 2023 Vacu ACtiv All Rights Reserved.",
};

var i18n = $.i18n();

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    this.innerHTML = i18n.getItem(forLabel);
  });
};

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setContactFormPlaceholders(lang) {
  if (lang === "en") {
    $('input[name="fullName"]').attr("placeholder", "Enter your Name");
    $('input[name="email"]').attr("placeholder", "Enter your Email");
    $('input[name="EMAIL"]').attr("placeholder", "Your Email");
    $('textarea[name="message"]').attr("placeholder", "Enter your Message");
  }
  if (lang === "ru") {
    $('input[name="fullName"]').attr("placeholder", "Введите ваше имя");
    $('input[name="email"]').attr(
      "placeholder",
      "Введите адрес электронной почты"
    );
    $('input[name="EMAIL"]').attr(
      "placeholder",
      "Введите адрес электронной почты"
    );
    $('textarea[name="message"]').attr("placeholder", "Введите ваше сообщение");
  }
  if (lang === "gr") {
    $('input[name="fullName"]').attr("placeholder", "Εισάγετε το όνομά σας");
    $('input[name="email"]').attr("placeholder", "Συμπληρώστε το email σας");
    $('input[name="EMAIL"]').attr("placeholder", "Συμπληρώστε το email σας");
    $('textarea[name="message"]').attr(
      "placeholder",
      "Εισαγάγετε το Μήνυμά σας"
    );
  }
}

$(document).ready(function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18n.setLang(lang);
  }
  changeLabels();
  setContactFormPlaceholders(window.localStorage.getItem("language") || "en");

  $("#dropdownMenuButton").text(
    (window.localStorage.getItem("language") || "en").toUpperCase()
  );
});

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);
    setContactFormPlaceholders(lang);
    $(".dropdownMenuButton").text(
      (window.localStorage.getItem("language") || "en").toUpperCase()
    );

    const langQueryParam = getParameterByName("lang");
    if (langQueryParam) {
      var url = new URL(window.location.href);
      var search_params = url.searchParams;
      search_params.set("lang", lang);
      url.search = search_params.toString();
      var new_url = url.pathname + url.search;
      window.history.replaceState({}, "", new_url);
    }

    changeLabels();
    e.preventDefault();
  });
