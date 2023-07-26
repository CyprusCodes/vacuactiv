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

  //body

  pool_biking: "Solution for pool biking exercise in individual capsule",
  hydrobike_description:
    "<strong>Hydrobike II is combining advantages of underwater exercises on exercise bike with benefits of targeted hydro massage in one fitness equipment.</strong> Using aquatic bike with combination of hydro-static resistance of water, leads to best results without need of heavy physical training. Aqua rider bike provide provides extra pedal resistance benefits.",
  certificates: "Certificates",
  quote: "Get a quote",
  five_elements: "Connection of 5 elements in one device",
  element_one: "<sup><strong>1</strong></sup> Exercise on <br />water bike",
  element_two: "<sup><strong>2</strong></sup> Water resistance <br />workout",
  element_three:
    "<sup><strong>3</strong></sup> Hydro massage benefits <br />during exercise",
  element_four: "<sup><strong>4</strong></sup> Color therapy",
  element_five: "<sup><strong>5</strong></sup> Ozone therapy",
  stainless_steel: "High quality and stainless steel bike",
  design_specifics_1:
    "<strong>Designed in marine quality 316L stainless steel. Bike inside the Hydrobike II is characterised by its unrivalled aquatic spinning performance.</strong> The dual height/weight setting of the saddle and handlebars ensures a good sitting position without muscular risk.",
  design_specifics_2:
    "Designed to simplify your life, it provides dual marking of the saddle and handlebar pillars to record your own setting, from one session to the next. Because comfort is not optional, the pedal has been selected to provide you with very comfortable barefoot use. Its ergonomics increase the resistance of your pedalling for and even sportier feel!",
  mechanical_resistance:
    "<strong>Mechanical resistance</strong> adjusted with graduated wheel",
  custom_difficulty:
    "<strong>Customize the difficulty of the exercise</strong> and adjust your efforts from the seated position by turning the wheel",
  comfort_pedals: "<strong>Comfort pedals</strong>",
  maximum_weight: "Maximum user weight <strong>up to 150kg</strong>",
  material: "Stainless steel<br>",
  hydromassage_benefits: "Benefits from Hydromassage",
  unique_features:
    "<strong>Thanks to unique features, Hydrobike II fights against cellulite faster than other fitness equipment thanks to equipment of 14 powerful jets for hydromassage</strong> directed to sensitive areas of body effectively eliminate the effect of cellulite and helps to get fast weight loss. Thanks to drainage, which is activating lymphatic system and effect of using the aqua exercise bike with intensified resistance, is shaping body and transform fat cells into the energy. Hydromassage help regenerate the connective skin tissues, allowing the skin to appear younger and smoother.",
  powerful_jets: "Powerfull<br> hydromassage jets",
  balance: "Bring balance and health to your mind by colortherapy",
  colour_therapy:
    "<strong>Colour therapy is a non-invasive and holistic treatment that brings balance and health to your mind and body.</strong> The vibrations of the colour in colour therapy class improve your mood and overall health. Colours are made up of reflected lights that hit our retinas as the wavelengths vibrate.",
  ozone_therapy: "Ozone therapy",
  ozone_therapy_description:
    "<strong>Ozone Therapy (or ozono therapy) is an alternative treatment when you introduce the ozone (O₃), a reactive form of oxygen and a powerful oxidizing agent, in water.</strong> When ozone is dissolved in water, it produces a broad-spectrum biocide that can kill the bacteria, viruses and (tiny) cysts. Ozone Therapy is considered as one of the most powerful and versatile therapies. It has proven to be quite beneficial in different ways such as it improves metabolism, stimulates the immune system by increasing the white blood cells count, purifies the blood and the lymph, oxidizes toxins that have accumulated in the body, etc.",
  recommended: "Recommended for places",
  rehabilitation: "Rehabilitation",
  sport_centers: "Sport centers",
  fitness_studios: "Future fitness<br>studios",
  hotel_spa: "Hotel SPA",
  gyms: "Fitness gyms",
  recommended_for:
    "<strong>The device is recommended for clinics, hospitals, sanatoriums, rehabilitation and physiotherapeutic treatments.</strong> With no loading on the human joints, Hydrobike II could be used by person at any age. Result arrives regardless of the intensity exercises, even if used in relaxation mode. Exercise session improves blood circulation and lymph drainage, have the effect of affecting the adipose tissue. Ozone, which released during the treatment, has an effect similar to the skin microdermabrasion through the production of oxygen.",
  touch_screen: "Large, touchscreen and<br> an intuitive interface",
  touch_screen_size: "Size of<br> the touch screen",
  water_temp_indicator: "Water temperature indicator",
  yes_lower_case: "yes",
  water_lvl_indicator: "Water level<br> indicator",
  water_aeration: "Switching water aeration on and off",
  hydromassage_on_off: "Turning on<br> and off the hydromassage",
  water_capacity: "Water capacity<br>",
  no_load_on_joints: "Exercise with no load on joints and more",
  amazing_results:
    "<strong>Hydrobike II brings amazing results for people at any age.</strong> This aquatic fitness equipment created for person who is seeking for aesthetic changes or person who is searching for not hard exercises with relaxation during physical training.",
  water_resistance_bike:
    "Our device is a water resistance bike with hydromassage inside a capsule offers for your joints mobility and exercise, without impact. A well-executed workout will improve your range of motion and strengthen the muscles surrounding your joint.",
  specifications: "Specifications",
  size: "Size",
  height: "Height",
  width: "Width",
  depth: "Depth",
  water_capacity: "Water capcity",
  power_supply: "Power supply",
  power_consumption: "Power consumption",
  number_of_nozzles: "Number of nozzles",
  adjustable_water_pressure: "Adjustable water pressure",
  adjustable_bike_resistance: "Adjustable bike resistance",
  hand_shower: "Hand shower",
  touch_display: "Touch display size",
  h_t: "176 cm (69,29 inches)",
  w_t: "194 cm (76,38 inches)",
  d_t: "157 cm (61,81 inches)",
  t_d: "8 -inches (waterproof)",
  spt: "8<sup>-inch</sup>",

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

  header: "Криосауна для криотерапевтического лечения",

  //body

  pool_biking:
    "Решение для занятий водным велосипедом в индивидуальной капсуле",
  hydrobike_description:
    "<strong>Hydrobike II объединяет преимущества занятий под водой на велосипеде с преимуществами направленного гидромассажа в одном фитнес-оборудовании.</strong> Использование водного велосипеда в сочетании с гидростатическим сопротивлением воды дает лучшие результаты без необходимости выполнения тяжелых физических упражнений. Аква-велосипед также обеспечивает дополнительное сопротивление при педалировании.",
  certificates: "Сертификаты",
  quote: "Получить предложение",
  five_elements: "Соединение 5 элементов в одном устройстве",
  element_one:
    "<sup><strong>1</strong></sup> Занятия на <br />водном велосипеде",
  element_two:
    "<sup><strong>2</strong></sup> Упражнения с <br />сопротивлением воды",
  element_three:
    "<sup><strong>3</strong></sup> Преимущества гидромассажа <br />во время упражнений",
  element_four: "<sup><strong>4</strong></sup> Цветотерапия",
  element_five: "<sup><strong>5</strong></sup> Озонотерапия",
  stainless_steel: "Высокое качество и нержавеющая сталь велосипеда",
  design_specifics_1:
    "<strong>Изготовлен из морской нержавеющей стали 316L. Велосипед Hydrobike II характеризуется непревзойденными характеристиками для водных тренировок.</strong> Двойные настройки высоты и веса седла и руля обеспечивают хорошее положение сидения без риска для мышц.",
  design_specifics_2:
    "Предусмотрено двойное обозначение стоек седла и руля для записи ваших настроек с одной сессии на другую. Педали были специально подобраны, чтобы обеспечить вам очень комфортное использование без обуви. Их эргономика увеличивает сопротивление педалирования и создает еще более спортивное ощущение!",
  mechanical_resistance:
    "<strong>Механическое сопротивление</strong> регулируется градуированным колесом",
  custom_difficulty:
    "<strong>Настройте сложность упражнения</strong> и регулируйте нагрузку из положения сидя, поворачивая колесо",
  comfort_pedals: "<strong>Комфортные педали</strong>",
  maximum_weight: "Максимальный вес пользователя <strong>до 150 кг</strong>",
  material: "Нержавеющая сталь<br>",
  hydromassage_benefits: "Преимущества гидромассажа",
  unique_features:
    "<strong>Благодаря уникальным функциям Hydrobike II борется с целлюлитом быстрее, чем другое фитнес-оборудование, благодаря оборудованию 14 мощных форсунок для гидромассажа.</strong> Они направлены на чувствительные участки тела и эффективно устраняют целлюлит, помогая быстро снизить вес. Гидромассаж способствует регенерации соединительных тканей кожи, что делает кожу моложе и более гладкой.",
  powerful_jets: "Мощные<br> форсунки для гидромассажа",
  balance:
    "Восстановите баланс и здоровье вашего разума с помощью цветотерапии",
  colour_therapy:
    "<strong>Цветотерапия - это неинвазивное и комплексное лечение, которое восстанавливает баланс и здоровье вашего разума и тела.</strong> Вибрации цвета в классе цветотерапии улучшают ваше настроение и общее здоровье. Цвета состоят из отраженного света, который попадает на наши сетчатки при колебаниях волн.",
  ozone_therapy: "Озонотерапия",
  ozone_therapy_description:
    "<strong>Озонотерапия (или озонотерапия) - это альтернативное лечение, при котором в воду вводится озон (O₃), реактивная форма кислорода и мощное окисляющее вещество.</strong> Когда озон растворяется в воде, он производит биоцид широкого спектра, способный уничтожать бактерии, вирусы и (мелкие) кисты. Озонотерапия считается одной из самых мощных и универсальных терапий. Она оказывает положительное влияние на обмен веществ, стимулирует иммунную систему, повышает количество лейкоцитов, очищает кровь и лимфу, окисляет токсины, накопившиеся в организме и т. д.",
  recommended: "Рекомендуется для использования в следующих местах",
  rehabilitation: "Реабилитационные центры",
  sport_centers: "Спортивные центры",
  fitness_studios: "Фитнес-студии будущего",
  hotel_spa: "Отельные спа",
  gyms: "Фитнес-залы",
  recommended_for:
    "<strong>Это устройство рекомендуется для клиник, больниц, санаториев, реабилитационных и физиотерапевтических учреждений.</strong> Благодаря ненагружающим суставы упражнениям на Hydrobike II можно пользоваться в любом возрасте. Результат достигается независимо от интенсивности упражнений, даже если используется в режиме релаксации. Тренировка улучшает кровообращение и лимфодренаж, оказывая влияние на жировую ткань. Озон, который выделяется во время процедуры, имеет сходное с микродермабразией кожи действие через выработку кислорода.",
  touch_screen: "Большой сенсорный интерфейс",
  touch_screen_size: "Размер сенсорного экрана",
  water_temp_indicator: "Индикатор температуры воды",
  yes_lower_case: "да",
  water_lvl_indicator: "Индикатор уровня воды",
  water_aeration: "Переключение аэрации воды",
  hydromassage_on_off: "Включение и выключение гидромассажа",
  water_capacity: "Объем воды<br>",
  no_load_on_joints: "Занятия без нагрузки на суставы и многое другое",
  amazing_results:
    "<strong>Hydrobike II приносит удивительные результаты для людей любого возраста.</strong> Это акватическое фитнес-оборудование создано для тех, кто ищет эстетических изменений или ищет несложные упражнения с релаксацией во время физических тренировок.",
  water_resistance_bike:
    "Наше устройство - это водный велосипед с гидромассажем внутри капсулы, предлагающий движение и упражнения без удара по суставам. Хорошо выполненные тренировки улучшат вашу подвижность и укрепят мышцы, окружающие суставы.",
  specifications: "Технические характеристики",
  size: "Размер",
  height: "Высота",
  width: "Ширина",
  depth: "Глубина",
  water_capacity: "Вместимость воды",
  power_supply: "Источник питания",
  power_consumption: "Потребляемая мощность",
  number_of_nozzles: "Количество форсунок",
  adjustable_water_pressure: "Регулируемое давление воды",
  adjustable_bike_resistance: "Регулируемое сопротивление велосипеда",
  hand_shower: "Ручной душ",
  touch_display: "Размер сенсорного дисплея",
  h_t: "176 см (69,29 дюймов)",
  w_t: "194 см (76,38 дюймов)",
  d_t: "157 см (61,81 дюймов)",
  t_d: "8 дюймов (водонепроницаемый)",
  spt: "8<sup>дюйм</sup>",
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

  header:
    "Κρυοσάουνα για θεραπεία κρυοθεραπείας (Kryosáouna gia therapía kryotherapeías)",

  //body

  pool_biking:
    "Λύση για την άσκηση με ποδήλατο στην πισίνα σε μια ατομική κάψουλα",
  hydrobike_description:
    "<strong>Το Hydrobike II συνδυάζει τα πλεονεκτήματα της άσκησης κάτω από το νερό με τα οφέλη του εντοπισμένου υδρομασάζ σε ένα εξοπλισμό φιτνεσ.</strong> Χρησιμοποιώντας αναρτημένο ποδήλατο με συνδυασμό της υδροστατικής αντίστασης του νερού, προσφέρει τα καλύτερα αποτελέσματα χωρίς την ανάγκη για βαριά φυσική προπόνηση. Το ποδήλατο Aqua Rider παρέχει επιπλέον οφέλη αντίστασης στην πεταλιά.",
  certificates: "Πιστοποιητικά",
  quote: "Λάβετε μια προσφορά",
  five_elements: "Σύνδεση 5 στοιχείων σε ένα συσκευή",
  element_one: "<sup><strong>1</strong></sup> Άσκηση στο <br />νερό ποδήλατο",
  element_two: "<sup><strong>2</strong></sup> Άσκηση με <br />αντίσταση νερού",
  element_three:
    "<sup><strong>3</strong></sup> Οφέλη υδρομασάζ <br />κατά τη διάρκεια της άσκησης",
  element_four: "<sup><strong>4</strong></sup> Θεραπεία χρωμάτων",
  element_five: "<sup><strong>5</strong></sup> Θεραπεία οζόντος",
  stainless_steel: "Ποδήλατο υψηλής ποιότητας και ανοξείδωτου χάλυβα",
  design_specifics_1:
    "<strong>Σχεδιασμένο από ανοξείδωτο χάλυβα 316L υψηλής ποιότητας. Το ποδήλατο Hydrobike II χαρακτηρίζεται από τις ασύγκριτες αποδόσεις κινητήρων για τις υδροκυκλοφορίες.</strong> Οι διπλές ρυθμίσεις ύψους / βάρους της σέλας και των τιμονιών εξασφαλίζουν καλή στάση χωρίς μυϊκό κίνδυνο.",
  design_specifics_2:
    "Σχεδιασμένο για να απλοποιήσει τη ζωή σας, παρέχει διπλή σήμανση των πυλών της σέλας και του τιμονιού για να καταγράψετε τις δικές σας ρυθμίσεις από μια συνεδρία στην επόμενη. Επειδή η άνεση δεν είναι προαιρετική, η πεταλιά έχει επιλεγεί για να προσφέρει πολύ άνετη χρήση χωρίς παπούτσια. Η εργονομία της αυξάνει την αντίσταση της πεταλιάς για ακόμη πιο αθλητική αίσθηση!",
  mechanical_resistance:
    "<strong>Μηχανική αντίσταση</strong> ρυθμιζόμενη με βαθμονομημένο τροχό",
  custom_difficulty:
    "<strong>Προσαρμόστε τη δυσκολία της άσκησης</strong> και ρυθμίστε την προσπάθειά σας από την καθιστή θέση, γυρίζοντας τον τροχό",
  comfort_pedals: "<strong>Αναπαυτικά πεντάλ</strong>",
  maximum_weight: "Μέγιστο βάρος χρήστη <strong>έως 150kg</strong>",
  material: "Ανοξείδωτος χάλυβας<br>",
  hydromassage_benefits: "Οφέλη από το υδρομασάζ",
  unique_features:
    "<strong>Χάρη σε μοναδικά χαρακτηριστικά, το Hydrobike II καταπολεμά την κυτταρίτιδα πιο γρήγορα από άλλο εξοπλισμό φιτνεσ χάρη στον εξοπλισμό με 14 ισχυρούς ακροφύσιους για υδρομασάζ</strong> που είναι κατευθυνόμενοι σε ευαίσθητες περιοχές του σώματος, εξουδετερώνουν αποτελεσματικά την κυτταρίτιδα και βοηθούν στην γρήγορη απώλεια βάρους. Χάρη στην αποστράγγιση, η οποία ενεργοποιεί το λεμφικό σύστημα και το αποτέλεσμα της χρήσης του αθλητικού ποδηλάτου με εντατική αντίσταση, διαμορφώνει το σώμα και μετατρέπει τα λιποκύτταρα σε ενέργεια. Το υδρομασάζ βοηθά στην αναγέννηση των συνδετικών ιστών του δέρματος, επιτρέποντας στο δέρμα να φαίνεται νεότερο και πιο απαλό.",
  powerful_jets: "Ισχυροί<br> ακροφύσιοι υδρομασάζ",
  balance: "Φέρνετε ισορροπία και υγεία στον νου σας με τη θεραπεία χρωμάτων",
  colour_therapy:
    "<strong>Η θεραπεία χρωμάτων είναι μια μη επεμβατική και ολιστική θεραπεία που φέρνει ισορροπία και υγεία στον νου και το σώμα σας.</strong> Οι δονήσεις του χρώματος στη θεραπεία χρωμάτων βελτιώνουν τη διάθεσή σας και τη συνολική σας υγεία. Τα χρώματα αποτελούνται από αντανακλασμένα φώτα που χτυπούν τις αμφιβληστροειδείς μας καθώς τα κύματα δονούνται.",
  ozone_therapy: "Θεραπεία οζόντος",
  ozone_therapy_description:
    "<strong>Η θεραπεία οζόντος (ή οζονοθεραπεία) είναι μια εναλλακτική θεραπεία όταν εισάγετε το οζόν (O₃), μια αντιδραστική μορφή οξυγόνου και ένα ισχυρό οξειδωτικό παράγοντα, στο νερό.</strong> Όταν το οζόν διαλύεται στο νερό, παράγει ένα ευρύ φάσμα βιοκτόνου που μπορεί να σκοτώσει τα βακτήρια, ιούς και (μικροσκοπικά) κύστες. Η θεραπεία οζόντος θεωρείται ως μία από τις πιο ισχυρές και ευέλικτες θεραπείες. Έχει αποδειχθεί ότι είναι αρκετά ευεργετική σε διαφορετικούς τομείς, όπως βελτιώνει τον μεταβολισμό, διεγείρει το ανοσοποιητικό σύστημα αυξάνοντας τον αριθμό των λευκών αιμοσφαιρίων, καθαρίζει το αίμα και το λεμφικό, οξειδώνει τις τοξίνες που έχουν συσσωρευτεί στο σώμα, κ.λπ.",
  recommended: "Συνιστάται για μέρη",
  rehabilitation: "Αποκατάσταση",
  sport_centers: "Αθλητικά κέντρα",
  fitness_studios: "Μελλοντικά γυμναστήρια<br>",
  hotel_spa: "Ξενοδοχειακό SPA",
  gyms: "Γυμναστήρια φιτνεσ",
  recommended_for:
    "<strong>Η συσκευή συνιστάται για κλινικές, νοσοκομεία, ιαματικά κέντρα, αποκαταστάσεις και φυσιοθεραπευτικές θεραπείες.</strong> Χωρίς φόρτιση στις αρθρώσεις του ανθρώπου, το Hydrobike II μπορεί να χρησιμοποιηθεί από άτομα οποιασδήποτε ηλικίας. Το αποτέλεσμα προκύπτει ανεξάρτητα από την ένταση της άσκησης, ακόμη και αν χρησιμοποιείται σε κατάσταση χαλάρωσης. Η άσκηση βελτιώνει την κυκλοφορία του αίματος και την αποστράγγιση του λεμφικού, έχοντας αποτέλεσμα να επηρεάζει το λιπώδη ιστό. Το οζόν, που ελευθερώνεται κατά τη διάρκεια της θεραπείας, έχει ένα αποτέλεσμα παρόμοιο με τη μικροδερματοαπόξεση του δέρματος μέσω της παραγωγής οξυγόνου.",
  touch_screen: "Μεγάλη οθόνη αφής και<br> μια ευανάγνωστη διεπαφή",
  touch_screen_size: "Μέγεθος της<br> αφής οθόνης",
  water_temp_indicator: "Ενδεικτικό θερμοκρασίας νερού",
  yes_lower_case: "ναι",
  water_lvl_indicator: "Ενδεικτικό<br> επιπέδου νερού",
  water_aeration: "Εναλλαγή εναέριων νερού on και off",
  hydromassage_on_off: "Ενεργοποίηση<br> και απενεργοποίηση του υδρομασάζ",
  water_capacity: "Χωρητικότητα νερού<br>",
  no_load_on_joints: "Άσκηση χωρίς φόρτιση στις αρθρώσεις και άλλα",
  amazing_results:
    "<strong>Το Hydrobike II φέρνει εκπληκτικά αποτελέσματα για άτομα οποιασδήποτε ηλικίας.</strong> Αυτός ο εξοπλισμός υδατικής γυμναστικής δημιουργήθηκε για άτομα που αναζητούν αισθητικές αλλαγές ή άτομα που αναζητούν μη δύσκολες ασκήσεις με χαλάρωση κατά τη διάρκεια της φυσικής εκγύμνασης.",
  water_resistance_bike:
    "Η συσκευή μας είναι ποδήλατο με αντίσταση νερού με υδρομασάζ μέσα σε μια κάψουλα που προσφέρει κινητικότητα και άσκηση χωρίς κραδάσματα στις αρθρώσεις σας. Μια καλά εκτελεσμένη προπόνηση θα βελτιώσει την κινητικότητα σας και θα ενισχύσει τους μύες που περιβάλλουν τις αρθρώσεις σας.",
  specifications: "Προδιαγραφές",
  size: "Μέγεθος",
  height: "Ύψος",
  width: "Πλάτος",
  depth: "Βάθος",
  water_capacity: "Χωρητικότητα νερού",
  power_supply: "Τροφοδοσία ρεύματος",
  power_consumption: "Κατανάλωση ισχύος",
  number_of_nozzles: "Αριθμός ακροφυσίων",
  adjustable_water_pressure: "Ρυθμιζόμενη πίεση νερού",
  adjustable_bike_resistance: "Ρυθμιζόμενη αντίσταση ποδηλάτου",
  hand_shower: "Χειρός ντους",
  touch_display: "Μέγεθος οθόνης αφής",
  h_t: "176 cm (69,29 ίντσες)",
  w_t: "194 cm (76,38 ίντσες)",
  d_t: "157 cm (61,81 ίντσες)",
  t_d: "8 ίντσες (αδιάβροχο)",
  spt: "8<sup>-ίντσα</sup>",
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
