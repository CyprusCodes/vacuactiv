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
  quote_text_link: "Get a quote",
  news_text_link: "news",
  faq_text_link: "faq",
  contact_text_link: "contact",
  //header
  select_devices: "Select devices you're interested in",
  send_message: " Send us a message and we will get right back to you",
  first_name: "First Name",
  last_name: "Last Name",
  email: "Email",
  your_company: "Your Company",
  phone: "Phone",
  city: "City",
  country: "Country",
  privacy: "Privacy",
  privacy_info:
    "My information can be shared with a Vacu Activ distributor located in my country. Most inquiries are handled by Vacu Activ distributors and by selecting this we can provide you with faster and more accurate service.",
  send_a_quote: "SEND A QUOTE",
  //footer
  stay_update: "Stay updated",
  stay_update_desc:
    "Stay up-to-date with current special discounts, <br />new devices and the latest <br />news from the Vacu Activ world.",
  submit_btn: "submit",
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
  f_furniture: "Furniture & Others",
  f_support: "Support",
  f_tech_support: "Technical support",
  f_faq: "FAQ",
  f_get_in_touch: "Get in Touch",
  send_message: "<i class='fa fa-paper-plane'></i>&nbsp;Send message",
  f_copy_right: "&copy; 2023 Vacu ACtiv All Rights Reserved.",
};
$.i18n.ru = {
  home_text_link: "Дом",
  hproduct_text_link: "Продукты",
  about_text_link: "О нас",
  quote_text_link: "Получить цитаты",
  news_text_link: "Новости",
  faq_text_link: "Вопрос-Ответ",
  contact_text_link: "Контакт",
  //header
  select_devices: " Выберите устройства, которые вас интересуют",
  send_message: "Отправьте нам сообщение, и мы сразу же свяжемся с вами.",
  first_name: "Имя",
  last_name: "Фамилия",
  email: "Электронная почта",
  your_company: "Ваша компания",
  phone: "Телефон",
  city: "город",
  country: "Страна",
  privacy: "Конфиденциальность",
  privacy_info:
    "Моя информация может быть передана дистрибьютору Vacu Activ, расположенному в моей стране. Большинство запросов обрабатываются дистрибьюторами Vacu Activ, и выбрав это, мы можем обеспечить более быстрое и точное обслуживание",
  send_a_quote: "ОТПРАВЬТЕ КОТИРОВКУ",
  //footer
  stay_update: "Оставаться в курсе",
  stay_update_desc:
    "Будьте в курсе текущих специальных скидок,  <br />новых устройств и последних  <br />новостей из мира Vacu Activ.",
  submit_btn: "утверждать",
  live_chat: "Живой чат",
  live_chat_desc:
    "Наши консультанты готовы ответить на любой вопрос. Не стесняйтесь присоединиться к нашему живому чату.",
  join_btn: "Присоединиться",
  tech_support: "Техническая поддержка",
  tech_support_desc:
    "Если у вас есть какие-либо проблемы с устройством, свяжитесь с нашей командой технических специалистов, чтобы решить проблему.",
  more_btn: "БОЛЕЕ",
  footer_desc:
    "Испытайте непревзойденную тренировку с инновационными технологиями",
  product_category: "Категории продукта",
  f_fitness_devices: "Фитнес устройства",
  f_cryo_devices: "Приборы для криотерапии",
  f_aqua_devices: "Аква Устройства",
  f_wellness_spa: "Велнес и СПА устройства",
  f_furniture: "Мебель и прочее",
  f_support: "Поддерживать",
  f_tech_support: "Техническая поддержка",
  f_faq: "Вопрос-Ответ",
  f_get_in_touch: "Связаться",
  send_message: "<i class='fa fa-paper-plane'></i>&nbsp;отправлять",
  f_copy_right: "&copy; 2023 Vacu Activ Все права защищены.",
};

$.i18n.gr = {
  home_text_link: "Σπίτι",
  hproduct_text_link: "Προϊόντα",
  about_text_link: "Λάβετε εισαγωγικά",
  quote_text_link: "Λάβετε εισαγωγικά",
  news_text_link: "Νέα",
  faq_text_link: "FAQ",
  contact_text_link: "Επικοινωνία",
  //header
  select_devices: "Επιλέξτε συσκευές που σας ενδιαφέρουν",
  send_message: "Στείλτε μας ένα μήνυμα και θα επικοινωνήσουμε αμέσως μαζί σας",
  first_name: "Όνομα",
  last_name: "Επώνυμο",
  email: "Ηλεκτρονικό Ταχυδρομείο",
  your_company: "Η Εταιρεία σας",
  phone: "Τηλέφωνο",
  city: "πόλη",
  country: "Χώρα",
  privacy: "Ιδιωτικότητα",
  privacy_info:
    "Οι πληροφορίες μου μπορούν να κοινοποιηθούν με έναν διανομέα Vacu Activ που βρίσκεται στη χώρα μου. Οι περισσότερες ερωτήσεις χειρίζονται από διανομείς Vacu Activ και επιλέγοντας αυτό, μπορούμε να σας παρέχουμε πιο γρήγορη και ακριβή εξυπηρέτηση.",
  send_a_quote: "ОТПРАВЬТЕ КОТИРОВКУ",
  //footer
  stay_update: "Μείνετε ενημερωμένοι",
  stay_update_desc:
    "Μείνετε ενημερωμένοι με τρέχουσες ειδικές εκπτώσεις,  <br />νέες συσκευές και τα τελευταία <br />νέα από τον κόσμο του Vacu Activ.",
  submit_btn: "υποβάλλουν",
  live_chat: "Ζωντανή συζήτηση",
  live_chat_desc:
    "Οι σύμβουλοί μας είναι διαθέσιμοι να απαντήσουν σε οποιαδήποτε ερώτηση. Μη διστάσετε να εγγραφείτε στη Ζωντανή Συζήτησή μας.",
  join_btn: "Συμμετοχή",
  tech_support: "Τεχνική υποστήριξη",
  tech_support_desc:
    "Εάν αντιμετωπίζετε προβλήματα με τη συσκευή, επικοινωνήστε με την ομάδα τεχνικών μας για να λύσετε το πρόβλημα.",
  more_btn: "ΠΕΡΙΣΣΟΤΕΡΟ",
  footer_desc: "Ζήστε την απόλυτη προπόνηση με καινοτόμες τεχνολογίες",
  product_category: "κατηγορίες προϊόντων",
  f_fitness_devices: "Συσκευές γυμναστικής",
  f_cryo_devices: "Συσκευές κρυοθεραπείας",
  f_aqua_devices: "Συσκευές Aqua",
  f_wellness_spa: "Συσκευές ευεξίας & SPA",
  f_furniture: "Έπιπλα και άλλα",
  f_support: "Υποστήριξη",
  f_tech_support: "Τεχνική υποστήριξη",
  f_faq: "FAQ",
  f_get_in_touch: "Ερχομαι σε επαφή",
  send_message: "<i class='fa fa-paper-plane'></i>&nbsp;στείλετε",
  f_copy_right: "&copy; 2023 Vacu Activ Με την επιφύλαξη παντός δικαιώματος.",
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
    $('input[name="l_name"]').attr("placeholder", "Enter your last name");
    $('input[name="company"]').attr("placeholder", "company");
    $('input[name="phone"]').attr("placeholder", "phone number");
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
    $('input[name="l_name"]').attr("placeholder", "Введите вашу фамилию");
    $('input[name="company"]').attr("placeholder", "компания");
    $('input[name="phone"]').attr("placeholder", "номер телефона");
  }
  if (lang === "gr") {
    $('input[name="fullName"]').attr("placeholder", "Εισάγετε το όνομά σας");
    $('input[name="email"]').attr("placeholder", "Συμπληρώστε το email σας");
    $('input[name="EMAIL"]').attr("placeholder", "Συμπληρώστε το email σας");
    $('textarea[name="message"]').attr(
      "placeholder",
      "Εισαγάγετε το Μήνυμά σας"
    );
    $('input[name="l_name"]').attr("placeholder", "Εισάγετε το επώνυμό σας");
    $('input[name="company"]').attr("placeholder", "εταιρεία");
    $('input[name="phone"]').attr("placeholder", "τηλεφωνικός αριθμός");
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
