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
    m_tt: "Ergonomic, relaxing couch with heating and massage",
    mtt_p: "Enjoy some time on our relaxing lounger with massage benefits in the tranquility of your home, spa or fitness area. Activ Couch is adjusted to your body, offering high-quality comfort and relaxation after a long day. This is an excellent solution for spas, gyms, beauty salons, weight loss centers, health clubs as well as for home use.",
    msg_f: "Massage function",
    msg_fp: " The arrangement of the elements of the vibrating system have been designed to maximize positive massage and relaxation experiences.",
    mp_p: "Massage programs",
    mp_p_d: "5",
    m_z: "Massage <br> zones",
    mz_d: "4",
    ms_l: "Massage strength<br> levels",
    msl_d: "3",
    pfh: "Pleasure from heat",
    pfh_i: "<strong>Activ Couch heats up to a temperature of 36.6 °C, which additionally increases the pleasure of using it.</strong>",
    pfh_ii: " Great relaxing heated loungers in the tranquility of the body in the most comfortable for your body position. Heated to body temperature and adjusted to it, offer high-quality comfort.",
    mx_t: " Max<br> temperature ",
    mxt_i: "36,6<sup><small>o</small>C</sup>",
    int_i: "Intuitive remote control",
    int_ii: "<strong>All functions of the Activ Couch are operated using an intuitive remote control.</strong> It allows you to turn on 5 massage programs, set their power, manage massage zones and turn on heating.",
    specifications: "Specifications",
    spc_i: "<li>Ergonomic shape</li> <li>Massage function</li> <li>4-zone massage<br> (legs, down, up, neck)</li> <li>5 massage programs</li>",
    spc_ii: "<li>3 levels massage strength</li> <li>Heating function</li> <li>Remote control</li> <li>High-quality eco leather</li>",
    glry: "Gallery",
    sz_i: "Size",
    sz_w: "Width",
    sz_wi: "91 cm (35.8 inches)",
    sz_l: "Length",
    sz_li: "200 cm (78.7 inches)",
    ss_h: "Height",
    ss_hi: "90 cm (35.4 inches)",
    sz_e: "Weight",
    sz_ei: "250kg",


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
    m_tt: "Эргономичная, расслабляющая кушетка с подогревом и массажем",
     mtt_p: "Наслаждайтесь отдыхом на нашем расслабляющем шезлонге с массажем в тишине вашего дома, спа или фитнес-зала. Activ Couch подстраивается под ваше тело, предлагая высококачественный комфорт и расслабление после долгого дня. Это отличное решение. для спа, тренажерных залов, салонов красоты, центров похудения, клубов здоровья, а также для домашнего использования.",
     msg_f: "Функция массажа",
     msg_fp: " Расположение элементов вибрационной системы было разработано для получения максимального положительного эффекта от массажа и релаксации.",
     mp_p: "Массажные программы",
     mp_p_d: "5",
     m_z: "Массаж <br>зон",
     mz_d: "4",
     ms_l: "Уровни силы массажа<br>",
     msl_d: "3",
     pfh: "Удовольствие от тепла",
     pfh_i: "<strong>Activ Couch нагревается до температуры 36,6 °C, что дополнительно увеличивает удовольствие от его использования.</strong>",
     pfh_ii: "Отличные расслабляющие лежаки с подогревом в спокойствии тела в наиболее удобном для вашего тела положении. Нагретые до температуры тела и приспособленные к ней, обеспечивают качественный комфорт.",
     mx_t: "Максимальная<br> температура ",
     mxt_i: "36,6<sup><small>o</small>C</sup>",
     int_i: "Интуитивно понятное дистанционное управление",
     int_ii: "<strong>Все функции Activ Couch управляются с помощью интуитивно понятного пульта дистанционного управления.</strong> Он позволяет включать 5 программ массажа, устанавливать их мощность, управлять зонами массажа и включать подогрев.",
     specifications: "Технические характеристики",
     spc_i: "<li>Эргономичная форма</li> <li>Функция массажа</li> <li>4-зонный массаж<br> (ноги, вниз, вверх, шея)</li> <li>5 программ массажа </li>",
     spc_ii: "<li>3 уровня силы массажа</li> <li>Функция подогрева</li> <li>Пульт дистанционного управления</li> <li>Высококачественная экокожа</li>",
     glry: "Галерея",
     sz_i: "Размер",
     sz_w: "Ширина",
     sz_wi: "91 см (35,8 дюйма)",
     sz_l: "Длина",
     sz_li: "200 см (78,7 дюймов)",
     ss_h: "Высота",
     ss_hi: "90 см (35,4 дюйма)",
     sz_e: "Вес",
     sz_ei: "250 кг",

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
    m_tt: "Εργονομικός, χαλαρωτικός καναπές με θέρμανση και μασάζ",
     mtt_p: "Απολαύστε λίγο χρόνο στη χαλαρωτική μας ξαπλώστρα με οφέλη μασάζ στην ηρεμία του σπιτιού, του σπα ή του γυμναστηρίου σας. Ο καναπές Activ προσαρμόζεται στο σώμα σας, προσφέροντας άνεση και χαλάρωση υψηλής ποιότητας μετά από μια κουραστική μέρα. Αυτή είναι μια εξαιρετική λύση για spa, γυμναστήρια, ινστιτούτα αισθητικής, κέντρα αδυνατίσματος, κέντρα υγείας καθώς και για οικιακή χρήση.",
     msg_f: "Λειτουργία μασάζ",
     msg_fp: " Η διάταξη των στοιχείων του δονούμενου συστήματος έχει σχεδιαστεί για να μεγιστοποιεί τις θετικές εμπειρίες μασάζ και χαλάρωσης.",
     mp_p: "Προγράμματα μασάζ",
     mp_p_d: "5",
     m_z: "Ζώνες <br> μασάζ",
     mz_d: "4",
     ms_l: "Επίπεδα δύναμης μασάζ<br>",
     msl_d: "3",
     pfh: "Ευχαρίστηση από τη ζέστη",
     pfh_i: "<strong>Ο καναπές Activ θερμαίνεται σε θερμοκρασία 36,6 °C, γεγονός που αυξάνει επιπλέον την ευχαρίστηση χρήσης του.</strong>",
     pfh_ii: " Υπέροχες χαλαρωτικές θερμαινόμενες ξαπλώστρες στην ηρεμία του σώματος στην πιο άνετη θέση για το σώμα σας. Θερμαινόμενες στη θερμοκρασία του σώματος και προσαρμοσμένες σε αυτήν, προσφέρουν άνεση υψηλής ποιότητας.",
     mx_t: " Μέγιστη<br> θερμοκρασία ",
     mxt_i: "36,6<sup><small>o</small>C</sup>",
     int_i: "Διαισθητικό τηλεχειριστήριο",
     int_ii: "<strong>Όλες οι λειτουργίες του Activ Couch λειτουργούν χρησιμοποιώντας ένα διαισθητικό τηλεχειριστήριο.</strong> Σας επιτρέπει να ενεργοποιήσετε 5 προγράμματα μασάζ, να ρυθμίσετε την ισχύ τους, να διαχειριστείτε τις ζώνες μασάζ και να ενεργοποιήσετε τη θέρμανση.",
     specifications: "Προδιαγραφές",
     spc_i: "<li>Εργονομικό σχήμα</li> <li>Λειτουργία μασάζ</li> <li>μασάζ 4 ζωνών<br> (πόδια, κάτω, πάνω, λαιμός)</li> <li>5 προγράμματα μασάζ </li>",
     spc_ii: "<li>3 επίπεδα αντοχής μασάζ</li> <li>Λειτουργία θέρμανσης</li> <li>Τηλεχειριστήριο</li> <li>οικολογικό δέρμα υψηλής ποιότητας</li>",
     glry: "Gallery",
     sz_i: "Μέγεθος",
     sz_w: "Πλάτος",
     sz_wi: "91 cm (35,8 ίντσες)",
     sz_l: "Μήκος",
     sz_li: "200 cm (78,7 ίντσες)",
     ss_h: "Ύψος",
     ss_hi: "90 cm (35,4 ίντσες)",
     sz_e: "Βάρος",
     sz_ei: "250kg",


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
  