let lang = document.getElementById("lang");

function toggleLangBtn() {
  if (lang.className === "dropdown-menu") {
    lang.classList.add("show");
  } else {
    lang.classList.remove("show");
  }
}

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
  //header
  mt: "Product<br />Categories",
  cgry: "CATEGORY <i class='fa fa-icon-long-arrow-right'></i>",
  scr: "SCROLL",

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

  // wellness devices
  mt_wlns: "Wellness & Spa<br />devices",
  gry: "WARMING BACKREST RELAXATION BED",
  pwx: "HOT PILATES CAPSULE",
  qoz: "DRY WATER MASSAGE BED",
  zdb: "ISOKINETIC BEDS",
  ckm: "LYMPHATIC DRAINAGE & ELECTRICAL STIMULATION",
  jhx: "ENDERMOMASSAGE",
  tnp: "HIFEM - HIGH-INTENSITY FOCUSED ELECTROMAGNETIC TECHNOLOGY",
  slr: "INNER BALL ROLLER MACHINE",

  //furniture and others

  dnz: "LAMPS",
  bxg: "ARMCHAIR",
  wtk: "RECEPTION",
  jpv: "TABLE",

  // fitness devices

  gzi: "treadmil under pressure with oxygen",
  vxp: "treadmil under pressure",
  ycm: "underpressure recumbent bike",
  rjl: "Roll massage",
  pkw: "vibration plate with infrared IR",
  nht: "hydromassage bathtub with exercise bike",
  zge: "Innovative device for endermomassage",

  // aqua devices


  
  // cryo devices
  fmu: "electric cryotherapy chamber",
  obz: "cryotherapy chamber for wbc and pbc treatment",
  ypk: "cryotherapy chamber",
  avc: "localised cryotherapy ( cryogenic blower )",
  qxl: "electric local cryotherapy",

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
  mt: "Категории<br />товаров",
  cgry: "КАТЕГОРИЯ <i class='fa fa-icon-long-arrow-right'></i>",
  scr: "ПРОКРУТКА",

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

  // wellness devices
  mt_wlns: "велнес & спа <br />устройства",
  gry: "ПОГРЕВАНИЕ СПИНКИ РЕЛАКСАЦИОННОЙ КРОВАТИ",
  pwx: "ГОРЯЧАЯ КАПСУЛА ДЛЯ ПИЛАТЕСА",
  qoz: "МАССАЖНАЯ КРОВАТЬ ДЛЯ СУХОЙ ВОДЫ",
  zdb: "ИЗОКИНЕТИЧЕСКИЕ КРОВАТИ",
  ckm: "ЛИМФОДРЕНАЖ И ЭЛЕКТРИЧЕСКАЯ СТИМУЛЯЦИЯ",
  jhx: "ЭНДЕРМОМАССАЖ",
  tnp: "HIFEM - ВЫСОКОИНТЕНСИВНАЯ ФОКУСИРОВАННАЯ ЭЛЕКТРОМАГНИТНАЯ ТЕХНОЛОГИЯ",
  slr: "МАШИНА С ВНУТРЕННИМ ШАРИКОМ",

  // furniture and others

  dnz: "ЛАМПЫ",
  bxg: "КРЕСЛО",
  wtk: "ПРИЕМ",
  jpv: "СТОЛ",

  // fitness devices

  gzi: "беговая дорожка под давлением с кислородом",
  vxp: "беговая дорожка под давлением",
  ycm: "велосипед под давлением",
  rjl: "Роликовый массаж",
  pkw: "виброплатформа с инфракрасной IR",
  nht: "гидромассажная ванна с тренажером-велосипедом",
  zge: "Инновационное устройство для эндермомассажа",

  // aqua devices


  
  // cryo devices

  fmu: "электрическая криотерапевтическая камера",
obz: "криотерапевтическая камера для лечения wbc и pbc",
ypk: "криотерапевтическая камера",
avc: "локальная криотерапия (криогенный вентилятор)",
qxl: "электрическая локальная криотерапия",


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
  mt: "Product<br />Categories",
  cgry: "ΚΑΤΗΓΟΡΙΑ <i class='fa fa-icon-long-arrow-right'></i>",
  scr: "ΘΕΑ",
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

  // wellness dvices
  mt_wlns: "ευεξίας και σπα<br />Συσκευές",
  gry: "ΘΕΡΜΑΝΤΙΚΟ ΚΡΕΒΑΤΙ ΧΑΛΑΡΩΣΗΣ ΠΛΑΤΗ",
  pwx: "HOT PILATES CAPSULE",
  qoz: "ΚΡΕΒΑΤΙ ΜΑΣΑΖ ΞΗΡΟΥ ΝΕΡΟΥ",
  zdb: "ISOKINETIC BEDS",
  ckm: "ΛΕΜΦΙΚΗ ΑΠΟΧΕΤΕΥΣΗ & ΗΛΕΚΤΡΙΚΗ ΔΙΕΓΕΡΣΗ",
  jhx: "ΕΝΔΕΡΜΟΜΑΣΑΖ",
  tnp: "HIFEM - ΗΛΕΚΤΡΟΜΑΓΝΗΤΙΚΗ ΤΕΧΝΟΛΟΓΙΑ ΥΨΗΛΗΣ ΕΝΤΑΣΗΣ",
  slr: "INNER BALL ROLLER MACHINE",

  // furniture and others

  dnz: "ΛΑΜΠΕΣ",
  bxg: "ΠΟΛΥΘΡΟΝΑ",
  wtk: "ΥΠΟΔΟΧΗ",
  jpv: "ΤΡΑΠΕΖΙ",

  //fitness devices

  gzi: "διάδρομος υπό πίεση με οξυγόνο",
  vxp: "διάδρομος υπό πίεση",
  ycm: "ποδήλατο υπό πίεσης",
  rjl: "μασάζ Roll",
  pkw: "πλάκα δόνησης με υπέρυθρες υπερύθρες",
  nht: "υδρομασάζ μπανιέρα με ποδήλατο άσκησης",
  zge: "Καινοτόμος συσκευή για endermomassage",

  // aqua devices


  
  // cryo devices

  fmu: "ηλεκτρικός θάλαμος κρυοθεραπείας",
obz: "θάλαμος κρυοθεραπείας για θεραπεία wbc και pbc",
ypk: "θάλαμος κρυοθεραπείας",
avc: "τοπική κρυοθεραπεία (κρυογεννής ανεμιστήρας)",
qxl: "ηλεκτρική τοπική κρυοθεραπεία",

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
