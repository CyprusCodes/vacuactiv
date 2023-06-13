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
  caption_1: "Experience <br />The Ultimate Workout",
  caption_1_more: "MORE ABOUT IT",
  caption_2: "100% Fully<br />Electric Cryotherapy",
  caption_3: "Reduce Body <br />For Fat and Build-up Muscle Mass",
  caption_3_more: "BACK TO THE FIRST SLIDE",
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
  faq_text_link: "Часто задаваемые вопросы",
  contact_text_link: "Контакт",
  caption_1: "Испытайте <br />непревзойденную тренировку",
  caption_1_more: "ПОДРОБНЕЕ ОБ ЭТОМ",
  caption_2: " 100% полностью<br />электрическая криотерапия",
  caption_3: "Уменьшить тело <br />для жира и наращивания мышечной массы",
  caption_3_more: "ВЕРНУТЬСЯ К ПЕРВОМУ СЛАЙДУ",
  fitness_devices_cat: "Фитнес <br />устройства",
  aqua_devices_cat: "Аква <br />устройства",
  cryotherapy_devices_cat: "Аппараты для криотерапии",
  wellness_devices_cat: "Велнес <br />&amp;  СПА",
  furniture_devices_cat: "Мебель <br /> &amp; другое",
  products_text: "Продукты",
  experience_1:
    "Испытайте<br /> непревзойденную тренировку с <a href='#' class='immersion-link2' target='_blanck'>инновационными технологиями</a>",
  start_scrolling: "НАЧАТЬ ПРОКРУТКА",
  satisfied_custommers: "Довольные клиенты.",
  shipment_worldwide: "Отгрузка по всему миру.",
  opened_a_year: "Открыта студия в год.",
  distributors_worldwide: "Дистрибьюторы по всему миру.",
  awards_won: "Полученные призы и награды.",
  cryo_leading: "''Криотерапия: <br /> Ведущее производство",
  cryo_leading_p:
    "С 2002 года Vacu Activ производит инновационные устройства для похудения и криотерапии. Мы оправдываем ожидания клиентов, предлагая оборудование мирового класса. Миссия нашей компании — создавать качественные устройства с использованием новейших технологий и запускать активность. Человек и его потребности вдохновляют наши творческие процессы.",
  build_trust: "''Укрепление доверия: <br />систематический подход",
  build_trust_p:
    "Наши устройства адаптируются к людям и их образу жизни. Мы меняемся вместе с меняющейся реальностью, глядя в будущее. Мы опираемся как на современные технологические, так и на эстетические решения, заботясь об уникальном дизайне нашей продукции.",
  get_started: "НАЧАТЬ",
  product_h: "ПРОДУКТ",
  product_h_1: "Infrashape Horizontal",
  product_desc_1:
    "Infrashape Horizontal — это революционная капсула, максимально повышающая эффективность тренировок на велотренажере. Эффективность упражнений оптимизируется благодаря горизонтальному положению пользователя, а также благодаря дополнительным эффектам в виде инфракрасного излучения, отрицательного давления или дополнительных функций, таких как ароматерапия, цветотерапия, коллаген или лимфодренаж. Infrashape Horizontal ускоряет время достижения целей.",
  product_h_2: "Cryo Local Polar Bear",
  product_desc_2:
    "Cryo Local Polar Bear — идеальное устройство для локальной криостимуляции, которое можно использовать для лечения определенных частей тела. Устройство идеально подходит для реабилитации и ухода за кожей. Точечная криотерапия применяется для обработки проблемных зон обдувом парами азота с температурой до -160°С. Применение для облегчения боли и уменьшения воспаления в целевых областях тела, а также после хирургических процедур и реабилитационных процедур. Доступные программы для локальной криотерапии области шеи, поясницы, плеч, локтей, запястий, бедер, коленей, лодыжек и живота.",
  product_h_3: "Cryo Total",
  product_desc_3:
    "Cryo Total — криотерапевтическая камера, в которой используется охлаждение холодным воздухом, что является более передовой технологией, чем охлаждение парами азота. Клиент не контактирует ни с какими химическими веществами и держится подальше от паров азота, который используется в обычных криокамерах, где голова закружилась. В криокамере Cryo Total задействовано все тело, включая голову, для криотерапии с использованием только что охлажденного природного воздуха.",
  view_project:
    "ПОСМОТРЕТЬ ПРОЕКТ <i class='fa fa-icon-long-arrow-right' style='margin-left: 5px; color: #e10000'></i>",
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
  f_support: "Поддерживать",
  f_tech_support: "Техническая поддержка",
  f_faq: "Часто задаваемые вопросы",
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
  caption_1: "Ζήστε <br />την απόλυτη προπόνηση",
  caption_1_more: "ΠΕΡΙΣΣΟΤΕΡΑ ΓΙΑ ΑΥΤΟ",
  caption_2: "100% Πλήρως<br />Ηλεκτρική Κρυοθεραπεία",
  caption_3: "Μειώστε το σώμα<br />για λίπος και συσσώρευση μυϊκής μάζας",
  caption_3_more: "ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΠΡΩΤΗ ΔΙΑΦΑΝΕΙΑ",
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
    "Το Cryo Local Polar Bear είναι μια τέλεια συσκευή για τοπική κρυοδιέγερση που μπορεί να χρησιμοποιηθεί για θεραπεία σε συγκεκριμένα σημεία του σώματος. Η συσκευή είναι ιδανική για θεραπείες αποκατάστασης και περιποίησης δέρματος. Η κρυοθεραπεία σημείου χρησιμοποιείται για τη θεραπεία προβληματικών περιοχών με ατμό αζώτου που φυσά με θερμοκρασία έως -160°C. Εφαρμογή για την ανακούφιση από τον πόνο και τη μείωση της φλεγμονής σε στοχευμένες περιοχές του σώματος καθώς και μετά από χειρουργικές θεραπείες και διαδικασίες αποκατάστασης. Διαθέσιμα προγράμματα για τοπική κρυοθεραπεία για περιοχές αυχένα, πλάτης, ώμου, αγκώνα, καρπού, ισχίου, γόνατος, αστραγάλου και κοιλιάς.",
  product_h_3: "Cryo Total",
  product_desc_3:
    "Το Cryo Total είναι ένας θάλαμος κρυοθεραπείας που χρησιμοποιεί ψύξη με κρύο αέρα, η οποία είναι η πιο προηγμένη τεχνολογία από την ψύξη με ατμό αζώτου. Ο πελάτης δεν έρχεται σε επαφή με καμία χημική ουσία και μείνει μακριά από τη συμμετοχή σε ατμούς αζώτου που χρησιμοποιούνται σε κανονικούς θαλάμους κρυοθεραπείας όπου το κεφάλι είναι πάνω. Ο κρυοθάλαμος Cryo Total περιλαμβάνει ολόκληρο το σώμα, συμπεριλαμβανομένης της θεραπείας κρυοθεραπείας από το κεφάλι μέχρι την κρυοθεραπεία, χρησιμοποιώντας μόνο δροσερό φυσικό αέρα.",
  view_project:
    "ΠΡΟΒΟΛΗ ΕΡΓΟΥ<i class='fa fa-icon-long-arrow-right' style='margin-left: 5px; color: #e10000'></i>",
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
