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
    mt: "A modern reception desk for your studio",
    mt_p: "The subtle counter fits perfectly into the current trends and will be perfect as a reception desk for your fitness studio or office. Thanks to the combination of noble materials, colored laminate and appropriately selected LED backlights, it creates an elegant whole.",
    fct: "Functionality and<br /> desgn",
    fct_p: "<strong>The Los Angeles reception, in addition to its beauty, shape and design, is also a functional piece of furniture with a wide range of practical applications.</strong> It allows the customer to create an ergonomic workplace, and at the same time enables efficient communication without unnecessary obstacles.",
    cps: "Complete set",
    cps_i: "<strong>We have designed a set of furniture to furnish your studio, where each element combines elegance, light design, beauty as well as modern line and shape.</strong> The whole set consists of a reception desk, a table, an armchair and a set of lamps of various diameters. Choose the right color of furniture for the interior of the your studio or brand.",
    drg: "Drag To rotate",
    dms: "Dimensions",
    cta: "Counter A",
    ctb: "Counter B",




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
    mt: "Современный стойкий приемный столик для вашей студии",
    mt_p: "Этот изящный столик идеально сочетается с текущими тенденциями и прекрасно подойдет в качестве приемного стола для вашей фитнес-студии или офиса. Благодаря сочетанию благородных материалов, цветной ламинации и правильно подобранных светодиодных подсветок, создается элегантное и стильное целое.",
    fct: "Функциональность и дизайн",
    fct_p: "<strong>Приемный стол Лос-Анджелес является не только красивым и стильным, но также и функциональной частью мебели с широким спектром практического применения.</strong> Он позволяет клиенту создать эргономичное рабочее место и обеспечивает эффективное общение без лишних препятствий.",
    cps: "Полный комплект",
    cps_i: "<strong>Мы разработали комплект мебели для обустройства вашей студии, в котором каждый элемент сочетает в себе элегантность, легкий дизайн, красоту, а также современные линии и формы.</strong> Весь комплект включает приемный стол, стол, кресло и набор светильников различных диаметров. Выберите подходящий цвет мебели для интерьера вашей студии или вашего бренда.",
    drg: "Перетащите для вращения",
    dms: "Размеры",
    cta: "Столик А",
    ctb: "Столик Б",


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
    
mt: "Ένα μοντέρνο ρεσεψιόν για το στούντιο σας",
mt_p: "Το λεπτό πάγκος ταιριάζει τέλεια στις τρέχουσες τάσεις και θα είναι ιδανικός ως ρεσεψιόν για το γυμναστήριο ή το γραφείο σας. Χάρη στον συνδυασμό ευγενών υλικών, χρωματιστού λαμινάτου και κατάλληλα επιλεγμένων φωτιστικών LED, δημιουργεί ένα κομψό σύνολο.",
fct: "Λειτουργικότητα και Σχεδιασμός",
fct_p: "<strong>Η ρεσεψιόν Los Angeles, εκτός από την ομορφιά, το σχήμα και τον σχεδιασμό, είναι επίσης ένα λειτουργικό έπιπλο με μια ευρεία γκάμα πρακτικών εφαρμογών.</strong> Επιτρέπει στον πελάτη να δημιουργήσει ένα εργονομικό χώρο εργασίας και ταυτόχρονα επιτρέπει αποτελεσματική επικοινωνία χωρίς περιττά εμπόδια.",
cps: "Ολοκληρωμένο σετ",
cps_i: "<strong>Σχεδιάσαμε ένα σετ επίπλων για να επιπλώσετε το στούντιο σας, όπου κάθε στοιχείο συνδυάζει κομψότητα, ελαφρύ σχεδιασμό, ομορφιά καθώς και μοντέρνες γραμμές και σχήματα.</strong> Το σύνολο αποτελείται από ρεσεψιόν, τραπέζι, πολυθρόνα και σετ λαμπτήρων διαφόρων διαμέτρων. Επιλέξτε το σωστό χρώμα επίπλων για το εσωτερικό του στούντιο σας ή το brand σας.",
drg: "Σύρετε για περιστροφή",
dms: "Διαστάσεις",
cta: "Πάγκος Α",
ctb: "Πάγκος Β",


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
  