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
    mt: "Solution for pool biking exercise in individual capsule",
    mt_p: "<strong >Hydroshape is combining advantages of underwater exercises on exercise bike with benefits of targeted hydro massage in one fitness equipment.</strong > Using aquatic bike with combination of hydro-static resistance of water, leads to best results without need of heavy physical training. Aqua rider bike provide provides extra pedal resistance benefits.",
    crtf: "Certificates",
    cnx: "Connection of 5 elements in 1 device",
    cnx_i: "<li> <sup><strong>1</strong></sup> Exercise on <br />water bike</li> <li> <sup><strong>2</strong></sup> Water resistance <br />workout</li> <li> <sup><strong>3</strong></sup> Hydro massage benefits <br />during exercise </li> <li> <sup><strong>4</strong></sup> Color therapy</li> <li> <sup><strong>5</strong></sup> Ozone therapy</li>",
    hqb: "Hhigh quality and stainless steel bike",
    hqb_i: "<strong >Designed in marine quality 316L stainless steel. Bike inside the Hydroshape is characterised by its unrivalled aquatic spinning performance.</strong > The dual height/weight setting of the saddle and handlebars ensures a good sitting position without muscular risk.",
    hqb_ii: "Designed to simplify your life, it provides dual marking of the saddle and handlebar pillars to record your own setting, from one session to the next. Because comfort is not optional, the pedal has been selected to provide you with very comfortable barefoot use. Its ergonomics increase the resistance of your pedalling for and even sportier feel!",
    mae: "<strong >Mechanical resistance</strong > adjusted with graduated wheel",
    mae_p: "<strong >Customize the difficulty of the exercise</strong > and adjust your efforts from the seated position by turning the wheel",
    cmf: "Comfort pedals",
    mxw: "Maximum user weight <strong>up to 150kg</strong>",
    stn: "Stainless steel<br />",
    bft: "Benefits from Hydromassage",
    bft_p: "<strong >Thanks to unique features, Hydroshape fights against cellulite faster than other fitness equipment thanks to equipment of 16 powerful jets for hydromassage</strong > directed to sensitive areas of body effectively eliminate the effect of cellulite and helps to get fast weight loss. Thanks to drainage, which is activating lymphatic system and effect of using the aqua exercise bike with intensified resistance, is shaping body and transform fat cells into the energy. Hydromassage help regenerate the connective skin tissues, allowing the skin to appear younger and smoother.",
    hpj: "Powerfull<br /> Hydromassage jets",
    clt: "Bring balance and health to your mind by colortherapy",
    clt_p: "<strong >Colour therapy is a non-invasive and holistic treatment that brings balance and health to your mind and body.</strong > The vibrations of the colour in colour therapy class improve your mood and overall health. Colours are made up of reflected lights that hit our retinas as the wavelengths vibrate.",
    ozt: "Ozone therapy",
    ozt_p: "<strong >Ozone Therapy (or ozono therapy) is an alternative treatment when you introduce the ozone (O₃), a reactive form of oxygen and a powerful oxidizing agent, in water.</strong > When ozone is dissolved in water, it produces a broad-spectrum biocide that can kill the bacteria, viruses and (tiny) cysts. Ozone Therapy is considered as one of the most powerful and versatile therapies. It has proven to be quite beneficial in different ways such as it improves metabolism, stimulates the immune system by increasing the white blood cells count, purifies the blood and the lymph, oxidizes toxins that have accumulated in the body, etc.",
    rcm: "Recommended for places",
    rcm_f: "Fitness gyms",
    rcm_r: "Rehabilitation",
    rcm_s: "Future fitness<br /> studios",
    rcm_c: "Sport centers",
    rcm_h: "Hotel SPA",
    p_rcm: "<strong >The device is recommended for clinics, hospitals, sanatoriums, rehabilitation and physiotherapeutic surgeries.</strong > With no loading on the human joints, Hydroshape could be used by person at any age. Result arrives regardless of the intensity exercises, even if used in relaxation mode. Exercise session improves blood circulation and lymph drainage, have the effect of affecting the adipose tissue. Ozone, which released during the treatment, has an effect similar to the skin microdermabrasion through the production of oxygen.",
    lts: "Large, touchscreen and<br /> an intuitive interface",
    sts: "Siz of<br /> the touch screen",
    sts_i: "8<sup> -inch</sup>",
    wti: "Water temperature indicator",
    ys: "yes",
    wli: "Water level<br /> indicator",
    swt: "Switching water aeration on and off",
    tof: "Turning on<br /> and off the Hydromassage",
    wtc: "Water capacity<br />",
    exn: "Exercise with no load on joints and more",
    exn_i: "<strong >Hydroshape brings amazing results for people at any age.</strong > This aquatic fitness equipment created for person who is seeking for aesthetic changes or person who is searching for not hard exercises with relaxation during physical training.",
    exn_ii: "Fitness exercise during underwater cycling session improves lymphatic and blood circulation and have drainage effect on fat tissue. Ozone released during treatment has effect similar to micro pealing on skin thanks to oxygen production.",
    spf: "Specifications",
    spf_s: "Size",
    spf_h: "div>Height</div> <div>146 cm (57,48 inches)</div>",
    spf_w: "div>Width</div> <div>205 cm (80,71 inches)</div>",
    spf_d: "<div>Depth</div> <div>129 cm (50,79 inches)</div>",
    spf_t: "Water capacity",
    spf_p: "Power supply",
    spf_c: "Power consumption",
    spf_n: "Number of nozzles",
    spf_a: "Adjustable water pressure",
    spf_ab: "Adjustable bike resistance",
    spf_hs: "Hand shower",
    spf_td: "Touch display size",
    spf_ii: "8 -inch (waterproof)",







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
    mt: "Решение для упражнений на велосипеде в бассейне в индивидуальной капсуле",
mt_p: "<strong>Hydroshape сочетает преимущества упражнений под водой на велосипеде с преимуществами целевого гидромассажа в одном фитнес-оборудовании.</strong> Использование водного велосипеда в сочетании с гидростатическим сопротивлением воды приводит к лучшим результатам без необходимости тяжелых физических тренировок. Водный велосипед обеспечивает дополнительные преимущества сопротивления педалей.",

crtf: "Сертификаты",
cnx: "Соединение 5 элементов в 1 устройство",
cnx_i: "<li> <sup><strong>1</strong></sup> Упражнения на водном велосипеде</li> <li> <sup><strong>2</strong></sup> Тренировка с водным сопротивлением</li> <li> <sup><strong>3</strong></sup> Преимущества гидромассажа во время упражнений</li> <li> <sup><strong>4</strong></sup> Цветотерапия</li> <li> <sup><strong>5</strong></sup> Озонотерапия</li>",

hqb: "Высококачественный велосипед из нержавеющей стали",
hqb_i: "<strong>Разработанный из морской нержавеющей стали 316L. Велосипед внутри Hydroshape отличается беспрецедентной производительностью в условиях воды.</strong> Двойные регулировки высоты/веса сиденья и рулей обеспечивают правильное положение сидения без опасности для мышц.",
hqb_ii: "Разработанный для упрощения вашей жизни, он имеет двойные маркировки на стойках сиденья и руля для записи ваших собственных настроек с одной сессии на другую. Педаль была выбрана для обеспечения очень удобного использования без обуви. Ее эргономика увеличивает сопротивление ваших педалирования для еще более спортивного ощущения!",

mae: "<strong>Механическое сопротивление</strong> регулируется с помощью шкалированного колеса",
mae_p: "<strong>Настройте сложность упражнения</strong> и регулируйте усилия в положении сидячего положения, поворачивая колесо",

cmf: "Удобные педали",
mxw: "Максимальный вес пользователя <strong>до 150 кг</strong>",

stn: "Нержавеющая сталь<br />",

bft: "Преимущества гидромассажа",
bft_p: "<strong>Благодаря уникальным характеристикам, Hydroshape борется с целлюлитом быстрее, чем другое фитнес-оборудование, благодаря 16 мощным струям для гидромассажа,</strong> направленным на чувствительные участки тела, эффективно устраняют эффект целлюлита и способствуют быстрой потере веса. Благодаря дренажу, активизирующему лимфатическую систему и эффекту использования водного велосипеда с усиленным сопротивлением, формируется тело и трансформируются жировые клетки в энергию. Гидромассаж помогает регенерировать соединительные ткани кожи, что делает кожу моложе и более гладкой.",

hpj: "Мощные струи гидромассажа",

clt: "Восстановите баланс и здоровье своего разума с помощью цветотерапии",
clt_p: "<strong>Цветотерапия - это неинвазивное и голистическое лечение, которое приносит баланс и здоровье вашему разуму и телу.</strong> Вибрации цвета в классе цветотерапии улучшают ваше настроение и общее здоровье. Цвета состоят из отраженных светов, которые попадают на наши сетчатки при вибрациях волн.",

ozt: "Озонотерапия",
ozt_p: "<strong>Озонотерапия (или озонотерапия) является альтернативным лечением, при котором в воду вводится озон (O₃), реактивная форма кислорода и мощное окислительное вещество.</strong> Когда озон растворяется в воде, образуется биоцид широкого спектра, который может убивать бактерии, вирусы и (микроскопические) кисты. Озонотерапия считается одной из самых мощных и универсальных терапий. Она показала свою эффективность в различных направлениях, таких как улучшение метаболизма, стимуляция иммунной системы путем увеличения количества лейкоцитов, очищение крови и лимфы, окисление токсинов, накопившихся в организме и т.д.",

rcm: "Рекомендуется для использования в",
rcm_f: "Фитнес-центрах",
rcm_r: "Реабилитационных центрах",
rcm_s: "Студиях будущего фитнеса",
rcm_c: "Спортивных центрах",
rcm_h: "Гостиничных спа",
p_rcm: "<strong >Устройство рекомендуется для клиник, больниц, санаториев, реабилитационных и физиотерапевтических центров.</strong > Благодаря отсутствию нагрузки на суставы человека, Hydroshape может использоваться людьми любого возраста. Результат достигается независимо от интенсивности упражнений, даже если используется в режиме релаксации. Упражнения улучшают кровообращение и лимфодренаж, оказывают эффект на жировую ткань. Озон, выделяющийся во время процедуры, оказывает действие, аналогичное микродермабразии кожи за счет выработки кислорода.",

lts: "Большой сенсорный<br /> и интуитивный интерфейс",
sts: "Размер сенсорного<br /> экрана",
sts_i: "8 дюймов",

wti: "Индикатор температуры воды",
ys: "да",

wli: "Индикатор уровня воды",

swt: "Переключение аэрации воды",

tof: "Включение и выключение<br /> гидромассажа",

wtc: "Объем воды",

exn: "Упражнения без нагрузки на суставы и многое другое",
exn_i: "<strong >Hydroshape приносит удивительные результаты для людей любого возраста.</strong > Это акватическое фитнес-оборудование создано для тех, кто ищет аэстетические изменения, а также для тех, кто ищет легкие упражнения с релаксацией во время физических тренировок.",

exn_ii: "Фитнес-упражнения во время сеанса подводного велосипеда улучшают лимфатическое и кровеносное кровообращение и оказывают дренажный эффект на жировую ткань. Выделяющийся озон имеет эффект, аналогичный микрошлифованию кожи за счет выработки кислорода.",

spf: "Технические характеристики",
spf_s: "Размер",
spf_h: "Высота 146 см (57,48 дюймов)",
spf_w: "Ширина 205 см (80,71 дюймов)",
spf_d: "Глубина 129 см (50,79 дюймов)",
spf_t: "Объем воды",
spf_p: "Питание",
spf_c: "Потребляемая мощность",
spf_n: "Количество форсунок",
spf_a: "Регулируемое давление воды",
spf_ab: "Регулируемое сопротивление велосипеда",
spf_hs: "Ручной душ",
spf_td: "Размер сенсорного экрана",
spf_ii: "8 дюймов (водонепроницаемый)",
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
    mt: "Λύση για άσκηση ποδηλασίας στην πισίνα σε μια μοναδική κάψουλα",
mt_p: "<strong >Το Hydroshape συνδυάζει τα πλεονεκτήματα των ασκήσεων υποβρύχιου ποδηλάτου με τα οφέλη της εντοπισμένης υδρομασάζ σε έναν εξοπλισμό γυμναστικής.</strong > Χρησιμοποιώντας υδροποδήλατο σε συνδυασμό με την υδροστατική αντίσταση του νερού, επιτυγχάνονται τα καλύτερα αποτελέσματα χωρίς την ανάγκη για βαριά φυσική προπόνηση. Το υδροποδήλατο παρέχει επιπλέον οφέλη από την πεταλιά με αντίσταση.",

crtf: "Πιστοποιήσεις",
cnx: "Σύνδεση 5 στοιχείων σε 1 συσκευή",
cnx_i: "<li> <sup><strong>1</strong></sup> Άσκηση με <br />υδροποδήλατο</li> <li> <sup><strong>2</strong></sup> Προπόνηση με <br />αντίσταση νερού</li> <li> <sup><strong>3</strong></sup> Οφέλη υδρομασάζ <br />κατά τη διάρκεια της άσκησης </li> <li> <sup><strong>4</strong></sup> Θεραπεία χρωματοθεραπείας</li> <li> <sup><strong>5</strong></sup> Θεραπεία με όζον</li>",

hqb: "Υψηλής ποιότητας και ανοξείδωτο ποδήλατο",
hqb_i: "<strong >Σχεδιασμένο από ανοξείδωτο χάλυβα 316L ποιότητας ναυτιλίας. Το ποδήλατο μέσα στο Hydroshape χαρακτηρίζεται από την ασύγκριτη απόδοση υποβρύχιας πεταλιάς.</strong > Η διπλή ρύθμιση ύψους / βάρους της σέλας και των τιμονιών εξασφαλίζει μια καλή καθιστική θέση χωρίς κινδύνους για τους μύες.",
hqb_ii: "Σχεδιασμένο για να απλοποιήσει τη ζωή σας, παρέχει διπλή σήμανση των στύλων της σέλας και του τιμονιού για να καταγράψετε τη δική σας ρύθμιση, από μια συνεδρία στην επόμενη. Επειδή η άνεση δεν είναι προαιρετική, η πεταλιά έχει επιλεγεί για να σας παρέχει πολύ άνετη χρήση χωρίς παπούτσια. Η εργονομία του αυξάνει την αντίσταση της πεταλιάς σας για μια ακόμη πιο αθλητική αίσθηση!",

mae: "<strong >Μηχανική αντίσταση</strong > που ρυθμίζεται με κλίμακα",
mae_p: "<strong >Προσαρμόστε τη δυσκολία της άσκησης</strong > και ρυθμίστε την προσπάθειά σας από την καθιστή θέση σας περιστρέφοντας τον τροχό.",

cmf: "Άνετα πεντάλ",
mxw: "Μέγιστο βάρος χρήστη <strong>έως 150 κιλά</strong>",

stn: "Ανοξείδωτο χάλυβα<br />",
bft: "Οφέλη από το υδρομασάζ",
bft_p: "<strong >Χάρη στα μοναδικά χαρακτηριστικά του, το Hydroshape καταπολεμά την κυτταρίτιδα γρηγορότερα από άλλον εξοπλισμό γυμναστικής χάρη στην εξοπλισμού με 16 ισχυρά ακροφύσια για υδρομασάζ</strong > που εστιάζονται στις ευαίσθητες περιοχές του σώματος και εξουδετερώνουν αποτελεσματικά το αντίκτυπο της κυτταρίτιδας και βοηθούν στην γρήγορη απώλεια βάρους. Χάρη στην αποστράγγιση, που ενεργοποιεί το λεμφικό σύστημα και την επίδραση της χρήσης του υδροποδηλάτου με εντατική αντίσταση, διαμορφώνεται το σώμα και μετατρέπονται τα λιποκύτταρα σε ενέργεια. Το υδρομασάζ βοηθά στην αναγέννηση των συνδετικών ιστών του δέρματος, επιτρέποντας στο δέρμα να φαίνεται πιο νεανικό και λείο.",

hpj: "Ισχυρά ακροφύσια<br /> υδρομασάζ",
clt: "Επαναφέρετε ισορροπία και υγεία στο μυαλό σας με χρωματοθεραπεία",
clt_p: "<strong >Η χρωματοθεραπεία είναι μια μη επεμβατική και ολιστική θεραπεία που επαναφέρει ισορροπία και υγεία στο μυαλό και το σώμα σας.</strong > Οι δονήσεις του χρώματος στη χρωμοθεραπεία βελτιώνουν τη διάθεσή σας και τη συνολική υγεία σας. Τα χρώματα αποτελούνται από αντανακλώμενο φως που πληττει τις αμφιβληστροειδείς μας όπως κυματίζουν τα κύματα μήκους.",

ozt: "Θεραπεία όζοντος",
ozt_p: "<strong >Η Θεραπεία όζοντος (ή οζονοθεραπεία) είναι μια εναλλακτική θεραπεία κατά την οποία εισάγετε το όζον (O₃), μια αντιδραστική μορφή οξυγόνου και ένα ισχυρό οξειδωτικό μέσο, στο νερό.</strong > Όταν το όζον διαλύεται στο νερό, παράγει ένα ευρύ φάσμα βιοκτόνου που μπορεί να σκοτώσει τα βακτήρια, τους ιούς και τις (μικροσκοπικές) κύστες. Η Θεραπεία όζοντος θεωρείται ως μία από τις πιο ισχυρές και ευέλικτες θεραπείες. Έχει αποδειχθεί ότι είναι πολύ ωφέλιμη σε διαφορετικούς τρόπους, όπως βελτιώνει τον μεταβολισμό, διεγείρει το ανοσοποιητικό σύστημα αυξάνοντας τον αριθμό των λευκών αιμοσφαιρίων, καθαρίζει το αίμα και το λεμφικό, οξειδώνει τις τοξίνες που έχουν συσσωρευτεί στο σώμα, κ.λπ.",

rcm: "Συνιστάται για χώρους",
rcm_f: "Γυμναστήρια fitness",
rcm_r: "Αποκατάσταση",
rcm_s: "Μελλοντικά στούντιο fitness",
rcm_c: "Αθλητικά κέντρα",
rcm_h: "Ξενοδοχειακό SPA",
p_rcm: "<strong>Η συσκευή συνιστάται για κλινικές, νοσοκομεία, σανατόρια, αποκατάσταση και φυσιοθεραπευτικές επεμβάσεις.</strong> Χωρίς φόρτωση στις ανθρώπινες αρθρώσεις, το Hydroshape μπορεί να χρησιμοποιηθεί από άτομα οποιασδήποτε ηλικίας. Το αποτέλεσμα επιτυγχάνεται ανεξάρτητα από την ένταση των ασκήσεων, ακόμα και αν χρησιμοποιείται σε λειτουργία χαλάρωσης. Η συνεδρία άσκησης βελτιώνει την κυκλοφορία του αίματος και τον λεμφικό αποστραγγισμό, έχοντας επίδραση στο λιπώδες ιστό. Το οζόν, που απελευθερώνεται κατά τη διάρκεια της θεραπείας, έχει αντίστοιχη επίδραση με την δερματομικροεπίδεση μέσω της παραγωγής οξυγόνου.",
lts: "Μεγάλη οθόνη αφής και<br /> μια ευανάγνωστη διεπαφή",
sts: "Μέγεθος της<br /> οθόνης αφής",
sts_i: "8 ίντσες",
wti: "Ενδεικτικό θερμοκρασίας νερού",
ys: "ναι",
wli: "Ενδεικτικό επιπέδου νερού",
swt: "Εναλλαγή αερισμού του νερού",
tof: "Ενεργοποίηση και απενεργοποίηση<br /> του υδρομασάζ",
wtc: "Χωρητικότητα νερού",
exn: "Άσκηση χωρίς φόρτο στις αρθρώσεις και περισσότερα",
exn_i: "<strong>Το Hydroshape προσφέρει εκπληκτικά αποτελέσματα για άτομα οποιασδήποτε ηλικίας.</strong> Αυτός ο υδροεκγυμναστικός εξοπλισμός δημιουργήθηκε για άτομα που αναζητούν αισθητικές αλλαγές ή για όσους αναζητούν ασκήσεις που δεν είναι πολύ απαιτητικές με χαλάρωση κατά τη διάρκεια της φυσικής εκγύμνασης.",
exn_ii: "Η άσκηση υγρού φυσικής κατάστασης κατά τη διάρκεια της κάθυσης με υδροκύκληση βελτιώνει τη λεμφική και αιματική κυκλοφορία και έχει αποστραγγιστική επίδραση στο λιπώδες ιστό. Το οζόν, που απελευθερώνεται κατά τη διάρκεια της θεραπείας, έχει αντίστοιχη επίδραση με τη δερματομικροεπίδεση χάρη στην παραγωγή οξυγόνου.",
spf: "Προδιαγραφές",
spf_s: "Μέγεθος",
spf_h: "<div>Ύψος</div> <div>146 cm (57,48 ίντσες)</div>",
spf_w: "<div>Πλάτος</div> <div>205 cm (80,71 ίντσες)</div>",
spf_d: "<div>Βάθος</div> <div>129 cm (50,79 ίντσες)</div>",
spf_t: "Χωρητικότητα νερού",
spf_p: "Παροχή ηλεκτρικού ρεύματος",
spf_c: "Κατανάλωση ισχύος",
spf_n: "Αριθμός ακροφυσίων",
spf_a: "Ρυθμιζόμενη πίεση νερού",
spf_ab: "Ρυθμιζόμενη αντίσταση ποδηλάτου",
spf_hs: "Χειρός ντουζ",
spf_td: "Μέγεθος οθόνης αφής",
spf_ii: "8 ίντσες (αδιάβροχη)",
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
  