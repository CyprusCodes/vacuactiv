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
  cryo_flow_header: "Localized electrical cryotherapy machine",
  cryo_flow_subheader:
    "Cryo Flow is a electrical cryotherapy device and completely nitrogen-free",
  cryo_flow_info:
    "Our innovative cryotherapy system allows to evenly distribute the cold air flow over the surface of the skin with a point and controlled dosage to achieve the desired effect of the procedure for athletes recovery or laser treatments.",
  cold_air_therapy_equipment: "Cold air therapy equipment",
  cryo_flow_definition:
    "Cryo Flow is a modern device that decrease body temperature in order to reduce inflammation and soreness, increase collagen production, boost immune system, help to minimize chronic stress, relax muscles, rise level of body energy, lower back pain. This is not medical equipment and used as wellness and recovery purposes in sport and beauty industry.",
  maximum_air_temp: "Maximum air cooled temperature",
  best_solution: "Best solution for your business",
  hotel_gyms: "Hotel gyms",
  clinics: "Clinics",
  rehabilitation: "Rehabilitation",
  medical_center: "Medical center",
  physiotherapy: "Physiotherapy",
  fitness_gyms: "Fitness gyms",
  cold_air_electric_power: "Cold air from electric power",
  machine_explanation_1:
    "This is advanced refrigeration technology to produce cool blowing. Device uses an air compressor that takes the atmospheric air in, compresses it and finally releases by the handle to the surface area of the body.",
  machine_explanation_2:
    "Cryo Flow is equipped with high power compressor which makes the system work for a long period of time continuously (Keeping the lowest temperature can give up to 2 hours treatment under 6th level of fan speed)",
  machine_explanation_3:
    "Cold air cooling is widely used in sport and wellness to reduce muscle pain and get muscle relaxation.",
  machine_explanation_4:
    "Unlike other cooling methods, such as contact cooling, cryogen spray or ice packs, cold air blowing is safety recovery treatment with no contact to skin.",
  cryo_flow_beauty: "Cryo Flow + LED therapy <br/> for beauty and slimming",

  process_info:
    "<strong>This non-invasive Botox alternative is designed to combat ageing and inflammation.</strong>The process involves cooling the face and neck area with a controlled beam of vaporised cold air from our direct application CRYO FLOW machine. This is followed by an LED light therapy session to supercharge your collagen production and anti-ageing effects.",
  led_therapy_facial:
    "LED therapy facial combines 6 colours LED light which has different wave lengths for light treatment for skins problems, helping to regain a youthful look.",
  led_lamp_effect:
    "The LED lamp has a significant effect on the regeneration of skin with signs of aging and age-related collagen loss. It also improves the condition and tension of the skin and soothes sunburn.",
  red: "Red",
  green: "Green",
  purple: "Purple",
  white: "White",
  yellow: "Yellow",
  blue: "Blue",
  red_info:
    "<strong>Stimulates the skin to intensively produce collagen and elastin, thanks to which it reduces wrinkles and improves skin firmness, </strong>it also helps to get rid of puffiness under the eyes. It has anti-inflammatory properties and reduces redness, thanks to which it is also helpful in regenerating the  skin after invasive procedures.",
  blue_info:
    "<strong>Supports the treatment of acne lesions,and also prevents the formation of new ones</strong> – to a very large extent destroys bacteria.During the treatment, the mask regulates the work of the sebaceous glands and reduces enlarged pores.",
  green_info:
    "<strong>Improves blood circulation and has arelaxing effect on the skin.</strong>Supports the wound healing process, blocks the formation of melanin (spots, freckles and discoloration). It greatly reduces wrinkles and scars, and stimulates the lymph glands.",
  purple_info:
    "<strong>It acts on melanocytes, which are responsible for the color of the skin and hair in our body.</strong> During the treatment, it brightens and reduces discoloration, freckles and stains arising in old age; rejuvenates, nourishes the skin and heals irritations. The use of the mask also contributes to the improvement of blood microcirculation.",
  white_info:
    "<strong>Penetrates very deeply into the skin, speeds up the metabolism in the body,removes wrinkles</strong>;the treatment is recommended especially for people who have problems with skin firmness.",
  yellow_info:
    "<strong>The treatment provides energy to the cellular energy center, increases the amount of active oxygen</strong>,nourishes and oxygenates the cells. Supports immune functions, slows down the aging process as it stimulates collagen synthesis in the skin.",
  device_concept_header: "Well-thought-out device concept",
  device_concept_info:
    "For us, the safety of our products  is paramount, so we have equipped  Cryo Flow with self defrosting system for best cooling performance and installed self water drainage  system to make cleaning more safe and comfortable. The device is  equipped in a automatic fuse to  protect it and make the treatment procedures secured. The whole housing and the device is also thermally protected.",
  innovative_appearance: "Innovative<br/>appearance and solutions",
  multi_color_touchscreen:
    "In addition to the modern and innovative appearance of the device, we have installed <strong>10.1-inch multi color touchscreen</strong> for display intuitive user interface and easy control of the device functions and features. Our machine gives you the ability to manage various options like: Air speed adjustments (from 1 to 6), set the temperature from -4°C to -30°C, quick and easy defrost button.",
  cooling_circuit_header: "Efficient closed cooling circuit",
  cooling_circuit_info:
    "Ambient room air is filtered and cooled down to -30°C by a closed loop cooling circuit.<br /> Thanks to that we made cost efficient machine with <strong>no consumable or additional costs.</strong>",

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
  cryo_flow_header: "Местный электрический криотерапевтический аппарат",
  cryo_flow_subheader:
    "Cryo Flow - это электрическое криотерапевтическое устройство, полностью лишенное азота",
  cryo_flow_info:
    "Наш инновационный криотерапевтический система позволяет равномерно распределить холодный поток воздуха по поверхности кожи с точечной и контролируемой дозировкой для достижения желаемого эффекта процедуры для восстановления у атлетов или лазерных процедур.",
  cold_air_therapy_equipment: "Оборудование для терапии холодным воздухом",
  cryo_flow_definition:
    "Cryo Flow - это современное устройство, которое понижает температуру тела для уменьшения воспаления и боли, повышения производства коллагена, укрепления иммунной системы, помощи в снижении хронического стресса, расслабления мышц, повышения уровня энергии организма и снижения боли в пояснице. Это не является медицинским оборудованием и используется для целей оздоровления и восстановления в спортивной и косметической индустрии.",
  maximum_air_temp: "Максимальная температура воздушного охлаждения",
  best_solution: "Лучшее решение для вашего бизнеса",
  hotel_gyms: "Отельные спортзалы",
  clinics: "Клиники",
  rehabilitation: "реабилитация",
  medical_center: "Медицинский центр",
  physiotherapy: "Физиотерапия",
  fitness_gyms: "фитнес-залы",
  cold_air_electric_power: "Холодный воздух от электроэнергии",
  machine_explanation_1:
    "Это передовая технология холодильной техники для производства прохладного воздуха. Устройство использует воздушный компрессор, который захватывает атмосферный воздух, сжимает его и, в конечном итоге, выдыхает через ручку на поверхность тела.",
  machine_explanation_2:
    "Крио поток оснащен мощным компрессором, который обеспечивает непрерывную работу системы в течение длительного времени (При сохранении низкой температуры можно получить до 2 часов лечения при 6-ой скорости вентилятора)",
  machine_explanation_3:
    "Охлаждение холодным воздухом широко используется в спорте и для укрепления здоровья для уменьшения мышечной боли и обеспечения расслабления мышц.",
  machine_explanation_4:
    "В отличие от других методов охлаждения, таких как контактное охлаждение, криогенный спрей или ледяные компрессы, обдувание холодным воздухом является безопасной методикой восстановления без контакта с кожей.",
  cryo_flow_beauty: "Крио Поток + Терапия с LED <br/> Для красоты и похудения",
  process_info:
    "<strong>Этот неинвазивный альтернативный метод Ботокса разработан для борьбы с возрастными изменениями и воспалением. </strong>Процесс включает охлаждение области лица и шеи управляемым потоком испаренного холодного воздуха из нашей машины CRYO FLOW. Затем следует сеанс светодиодной терапии, чтобы усилить производство коллагена и антивозрастной эффект.",
  led_therapy_facial:
    "Лечение светодиодами лица сочетает 6 цветов светодиодного света с различными длинами волн для лечения проблем кожи, помогая вернуть молодой вид.",
  led_lamp_effect:
    "Светодиодная лампа имеет значительное влияние на регенерацию кожи с признаками старения и потери коллагена, связанной с возрастом. Она также улучшает состояние и упругость кожи, а также снимает раздражение после загара.",
  red: "Красный",
  green: "Зеленый",
  purple: "Пурпурный",
  white: "Белый",
  yellow: "Желтый",
  blue: "Синий",
  red_info:
    "<strong>Стимулирует кожу на интенсивное производство коллагена и эластина, благодаря чему уменьшает морщины и повышает упругость кожи. </strong> Также помогает избавиться от отеков под глазами. Он обладает противовоспалительными свойствами и уменьшает покраснение, благодаря чему также полезен для восстановления кожи после инвазивных процедур.",
  blue_info:
    "<strong>Поддерживает лечение угревых высыпаний и также предотвращает образование новых.</strong>в очень большой степени уничтожает бактерии. Во время лечения маска регулирует работу сальных желез и уменьшает увеличенные поры.",
  green_info:
    "<strong>Улучшает кровообращение и оказывает расслабляющее действие на кожу</strong>Поддерживает процесс заживления ран, блокирует образование меланина (пятен, веснушек и пигментации). Значительно уменьшает морщины и шрамы, а также стимулирует лимфатические узлы.",
  purple_info:
    "<strong>Он воздействует на меланоциты, которые отвечают за цвет кожи и волос в нашем теле</strong>Во время лечения она осветляет и уменьшает пигментацию, веснушки и пятна, возникающие в старости; омолаживает, питает кожу и заживляет раздражения. Использование маски также способствует улучшению микроциркуляции крови",
  white_info:
    "<strong>Проникает очень глубоко в кожу, ускоряет метаболизм в организме, устраняет морщины.</strong>;Лечение рекомендуется особенно для людей, у которых есть проблемы со упругостью кожи.",
  yellow_info:
    "<strong>Лечение обеспечивает энергию центру клеточной энергии, увеличивает количество активного кислорода.</strong>,питает и оксигенирует клетки. Поддерживает иммунные функции, замедляет процесс старения, так как стимулирует синтез коллагена в коже.",
  device_concept_header: "Тщательно продуманная концепция устройства",
  device_concept_info:
    "Для нас безопасность наших продуктов является приоритетом, поэтому мы оснастили Cryo Flow системой автоматической разморозки для обеспечения наилучшей производительности охлаждения и установили систему самоочистки с автоматическим дренажем воды для обеспечения безопасности и комфорта при очистке. Устройство оснащено автоматическим предохранителем для защиты и обеспечения безопасности процедур обработки. Вся конструкция корпуса и устройства также защищена термически.",
  innovative_appearance: "Инновационный<br/>внешность и решения",
  multi_color_touchscreen:
    "В дополнение к современному и инновационному внешнему виду устройства, мы установили<strong>10,1-дюймовый многоцветный сенсорный экран</strong> для отображения интуитивного пользовательского интерфейса и удобного управления функциями и возможностями устройства. Наша машина предоставляет вам возможность управлять различными опциями, такими как: регулировка скорости воздуха (от 1 до 6), установка температуры от -4°C до -30°C, быстрая и простая кнопка разморозки",
  cooling_circuit_header: "Эффективная закрытая система охлаждения",
  cooling_circuit_info:
    "Окружающий воздух в комнате фильтруется и охлаждается до -30°C с помощью закрытой охлаждающей системы <br/> Благодаря этому мы создали экономичную машину <strong> без расходных материалов или дополнительных затрат</strong>",

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
  cryo_flow_header: "Τοπική ηλεκτρική κρυοθεραπευτική μηχανή",
  cryo_flow_subheader:
    "Το Cryo Flow είναι μια ηλεκτρική συσκευή κρυοθεραπείας και εντελώς απαλλαγμένο από αζωτο",
  cryo_flow_info:
    "Το καινοτόμο σύστημα κρυοθεραπείας μας επιτρέπει την ομοιόμορφη κατανομή της ροής κρύου αέρα στην επιφάνεια του δέρματος με στόχο και ελεγχόμενη δοσολογία για την επίτευξη του επιθυμητού αποτελέσματος της διαδικασίας για την ανάρρωση των αθλητών ή των θεραπειών με λέιζερ.",
  cold_air_therapy_equipment: "Εξοπλισμός θεραπείας με κρύο αέρα",
  cryo_flow_definition:
    "Η Cryo Flow είναι μια σύγχρονη συσκευή που μειώνει τη θερμοκρασία του σώματος προκειμένου να μειώσει τον φλεγμονώδη πόνο και την ερεθισμένη κατάσταση, να αυξήσει την παραγωγή κολλαγόνου, να ενισχύσει το ανοσοποιητικό σύστημα, να βοηθήσει στην ελαχιστοποίηση του χρόνιου στρες, να χαλαρώσει τους μύες, να αυξήσει το επίπεδο ενέργειας του σώματος και να μειώσει τον πόνο στην πλάτη. Η συσκευή αυτή δεν είναι ιατρικός εξοπλισμός και χρησιμοποιείται για σκοπούς ευεξίας και ανάκτησης στον αθλητικό και τον καλλυντικό κλάδο.",
  maximum_air_temp: "Μέγιστη θερμοκρασία με ψύξη αέρα",
  best_solution: "Η καλύτερη λύση για την επιχείρησή σας",
  hotel_gyms: "Γυμναστήρια ξενοδοχείου",
  clinics: "Κλινικές",
  rehabilitation: "αποκατάσταση",
  medical_center: "Ιατρικό Κέντρο",
  physiotherapy: "Φυσιοθεραπεία",
  fitness_gyms: "γυμναστήρια φυσικής κατάστασης",
  cold_air_electric_power: "Ψυχρός αέρας από ηλεκτρική ενέργεια",
  machine_explanation_1:
    "Αυτή είναι προηγμένη τεχνολογία ψύξης για την παραγωγή δροσερού αέρα. Η συσκευή χρησιμοποιεί έναν αεροσυμπιεστή που παίρνει τον ατμοσφαιρικό αέρα, τον συμπιέζει και τελικά τον απελευθερώνει μέσω της λαβής προς την επιφάνεια του σώματος.",
  machine_explanation_2:
    "Η Ροή Κρύου είναι εξοπλισμένη με υψηλής ισχύος συμπιεστή, που επιτρέπει στο σύστημα να λειτουργεί για μεγάλο χρονικό διάστημα συνεχώς (Διατηρώντας τη χαμηλότερη θερμοκρασία μπορεί να παρέχει μέχρι 2 ώρες θεραπείας στην 6η επίπεδο ταχύτητα ανεμιστήρα)",
  machine_explanation_3:
    "Η ψύξη με κρύο αέρα χρησιμοποιείται ευρέως στον αθλητισμό και την ευεξία για τη μείωση του πόνου των μυών και την χαλάρωση των μυών.",
  machine_explanation_4:
    "Αντίθετα από άλλες μεθόδους ψύξης, όπως η επαφή με το δέρμα, το ψύκτριο κρυογόνου ή τα παγωτά, η ψύξη με ροή κρύου αέρα είναι μια ασφαλής μέθοδος ανάκτησης χωρίς επαφή με το δέρμα",
  cryo_flow_beauty:
    "Κρυορροή + Θεραπεία με LED <br/> Για ομορφιά και αδυνάτισμα",
  process_info:
    "<strong>Αυτό το μη επεμβατικό εναλλακτικό του Μπότοξ σχεδιάστηκε για να αντιμετωπίσει τη γήρανση και το φλεγμονώδες πρόβλημα.</strong>Η διαδικασία περιλαμβάνει την ψύξη της περιοχής του προσώπου και του λαιμού με έναν ελεγχόμενο ακτίνα κρύου αέρα από τη μηχανή μας CRYO FLOW. Ακολουθείται από μια συνεδρία θεραπείας LED για να ενισχυθεί η παραγωγή κολλαγόνου και οι αντιγηραντικές επιδράσεις.",
  led_therapy_facial:
    "Η θεραπεία LED προσώπου συνδυάζει 6 χρώματα LED φωτός με διαφορετικά μήκη κύματος για την αντιμετώπιση προβλημάτων του δέρματος, βοηθώντας να αποκτήσετε ένα νεανικό υποσχόμενο βλέμμα",
  led_lamp_effect:
    "Το LED λαμπτήρας έχει σημαντική επίδραση στην αναγέννηση του δέρματος με σημάδια γήρανσης και απώλειας κολλαγόνου λόγω της ηλικίας. Βελτιώνει επίσης την κατάσταση και την τάση του δέρματος και καταπραΰνει τις εγκαύματα από τον ήλιο.",
  red: "Κόκκινο",
  green: "Πράσινο",
  purple: "Μοβ",
  white: "Λευκό",
  yellow: "Κίτρινο",
  blue: "Μπλε",
  red_info:
    "<strong>Ενθαρρύνει το δέρμα να παράγει εντατικά κολλαγόνο και ελαστίνη, χάρη στα οποία μειώνει τις ρυτίδες και βελτιώνει τη σφριγηλότητα του δέρματος</strong>Βοηθά επίσης στην αντιμετώπιση της οιδήματος κάτω από τα μάτια. Διαθέτει αντιφλεγμονώδεις ιδιότητες και μειώνει τον ερυθρισμό, χάρη στον οποίο είναι επίσης χρήσιμο στην αναγέννηση του δέρματος μετά από επεμβάσεις.",
  blue_info:
    "<strong>Υποστηρίζει την αντιμετώπιση των θεραπείας των ακμικών βλαβών και εμποδίζει τον σχηματισμό νέων.</strong>σε πολύ μεγάλο βαθμό καταστρέφει τα βακτήρια. Κατά τη διάρκεια της θεραπείας, η μάσκα ρυθμίζει τη λειτουργία των σμηγματογόνων αδένων και μειώνει τους διευρυμένους πόρους",
  green_info:
    "<strong>Βελτιώνει την κυκλοφορία του αίματος και έχει χαλαρωτική επίδραση στο δέρμα</strong>Υποστηρίζει τη διαδικασία επούλωσης των πληγών, αποκλείει τη δημιουργία μελανίνης (λεκέδων, πρηγμάτων και αποχρωματισμών). Μειώνει σημαντικά τις ρυτίδες και τις ουλές, και διεγείρει τους λεμφαδένες.",
  purple_info:
    "<strong>Δρα στους μελανοκύτταρα, τα οποία είναι υπεύθυνα για το χρώμα του δέρματος και των μαλλιών στο σώμα μας.</strong>Κατά τη διάρκεια της θεραπείας, ενισχύει και μειώνει την αποχρωματισμό, τις πανάδες και τις κηλίδες που προκύπτουν από τη γήρανση· αναζωογονεί, θρέφει το δέρμα και θεραπεύει τους ερεθισμούς. Η χρήση της μάσκας συμβάλλει επίσης στη βελτίωση της μικροκυκλοφορίας του αίματος.",
  white_info:
    "<strong>Εισχωρεί πολύ βαθιά στο δέρμα, επιταχύνει το μεταβολισμό στο σώμα, αφαιρεί τις ρυτίδες</strong>;Η θεραπεία συνιστάται ιδιαίτερα για άτομα που αντιμετωπίζουν προβλήματα με την σφριγηλότητα του δέρματος",
  yellow_info:
    "<strong> Η αγωγή παρέχει ενέργεια στο κυτταρικό κέντρο ενέργειας, αυξάνει το ποσό του ενεργού οξυγόνου</strong>,θρέφει και οξυγονώνει τις κύτταρο. Υποστηρίζει τις λειτουργίες του ανοσοποιητικού συστήματος, επιβραδύνει τη γήρανση καθώς διεγείρει τη σύνθεση κολλαγόνου στο δέρμα.",
  device_concept_header: "Σκεπτικά σχεδιασμένο συνεπές σύστημα",
  device_concept_info:
    "Για εμάς, η ασφάλεια των προϊόντων μας είναι πρωταρχικής σημασίας, έτσι εξοπλίσαμε το Cryo Flow με αυτόματο σύστημα απόψυξης για την καλύτερη ψύξη και εγκαταστήσαμε αυτόματο σύστημα αποστράγγισης νερού για να καθιστούμε τον καθαρισμό πιο ασφαλή και άνετο. Η συσκευή είναι εξοπλισμένη με αυτόματο ασφαλειακό ασφυξιόμετρο για να την προστατεύει και να διασφαλίζει την ασφάλεια των διαδικασιών θεραπείας. Ολόκληρη η κατοικία και η συσκευή προστατεύονται θερμικά.",
  innovative_appearance: "Καινοτόμο<br/>εμφάνιση και λύσεις",
  multi_color_touchscreen:
    "Εκτός από τη σύγχρονη και καινοτόμο εμφάνιση της συσκευής, έχουμε εγκαταστήσει <strong>10,1 ιντσών πολύχρωμη οθόνη αφής</strong> για εμφάνιση εύχρηστου διεπαφής χρήστη και εύκολου ελέγχου των λειτουργιών και χαρακτηριστικών της συσκευής μας. Η μηχανή μας σας δίνει τη δυνατότητα να διαχειρίζεστε διάφορες επιλογές, όπως: ρυθμίσεις ταχύτητας αέρα (από 1 έως 6), ρύθμιση της θερμοκρασίας από -4°C έως -30°C, γρήγορο και εύκολο κουμπί απόψυξης.",
  cooling_circuit_header: "Αποτελεσματικό κλειστό κύκλωμα ψύξης",
  cooling_circuit_info:
    "Το περιβαλλοντικό αέρα του δωματίου φιλτράρεται και ψύχεται μέχρι του -30°C μέσω ενός κλειστού κυκλώματος ψύξης.<br/>Χάρη σε αυτό, κατασκευάσαμε μια οικονομική μηχανή.<strong>χωρίς καταναλώσιμα ή επιπρόσθετες δαπάνες</strong>",
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
