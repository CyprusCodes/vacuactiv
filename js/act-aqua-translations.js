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
    main_text: "Activ Aqua Bed",
    get_quote: "Get a quote",
    next_txt: "The next generation of water massage",
    specifications: "Specification",
    main_p: "Activ Aqua Bed is a dry water massage bed. It is performed with a heated stream of water flowing out under pressure from nozzles located inside. Water jets move in circular motions, hitting the surface of the rubber mat. This is how they massage the body – from head to toe.",
    title_2: "A combination of massage, water and heat ",
    p_2: "<strong>Dry water bed massage is a completely painless, non-invasive and safe procedure.</strong> It is a combination of three elements: massage, heat and water. Jets nozzles move up and down the body with wave-like streams of heated water, giving the user control of where to concentrate the massage. Thanks to this, it allows you to achieve satisfactory results.",
    amz_b: "Amazing benefits<br> of dry massage",
    reduce_p: " – reduces muscle tension,<br> – relaxes,<br>  – improves the circulatory system,<br>  – relieves pain",
    p_add: "In addition, massage on the Activ Aqua Bed has a relaxing and calming effect. You relax and feel full rejuvenation after the treatment. You get much more power and plenty of energy for all day.",
    max_l: "Maximum load<br>",
    max_l_d: "12<sup>kg</sup>",
    max_t: "Temperature",
    max_t_d: "40<sup>°C</sup>",
    max_d: "LED face<br> mask",
    max_d_d: "yes",
    max_j: "Powerfull jets",
    max_j_d: " 2<sup>x</sup>",
    t_ded: "Dedicated software on<br> large touch display",
    t_ded_p: "<strong>We have equipped Activ Aqua Bed with a large, 10.1-inch touch screen on a special arm</strong> that allows you to set the screen in any position towards the operator or patient. Dedicated software has been designed and created from scratch to use all the benefits of the fuctions. Thanks to this, we were able to use all the possibilities and refine every element of the interface in order to obtain ease of use and implement a lot of functions and solutions. Our design department is constantly developing the software, thanks to which the device receives updates along with new functions and improvements.",
    s_sc: "Session screen ",
    s_sc_t: "<strong>The session screen allows you to easily manage all the functions of the Activ Aqua Bed.</strong> Control the power of the jets, change their speed or the massage zone, as well as the water temperature and many more.",
    m_w: "Manage water<br>temperature",
    m_w_t: "<strong>Our software allows you to easily set the water temperature</strong> as well as its automatic shutdown after defining the time of inactivity. Activ Aqua Bed has been equipped with sensors which informs about the current water temperature and the water level as well on the screen.",
    c_b: " Choose body<br>part",
    c_b_t: " <strong>Activ Aqua Bed allows you to choose  a massage for a given part of the body or a full body massage.</strong> The option can also be easily changed during  the session.",
    s_s: " Session screen ",
    s_s_t: "<strong>The session screen allows you to easily manage all the functions of the Activ Aqua Bed.</strong>  Control the power of the jets, change their speed or the massage zone, as well as the water temperature and many more.",
    mw_w: "Manage water<br>temperature",
    mw_w_t: "<strong>Our software allows you to easily set the water  temperature</strong> as well as its automatic shutdown after defining the time of inactivity. Activ Aqua Bed has been equipped with sensors which informs about the current water temperature and the water level as well on the screen.",
    d_s: "Display size<br> ",
    d_s_t: " 10.1<sup>inch</sup>",
    m_m: "Modes of massages",
    m_m_t: "6",
    c_p: "Comfort and pleasure<br> from massage ",
    c_p_t: "<strong>The Activ Aqua Bed for water dry massage will surely satisfy all customers who will systematically perform treatments.</strong> The procedure is not embarrassing, because in order to take advantage of the massage, you only need to remove the shoes. The procedure itself is pleasant and very comfortable. It provides a quick, perceptible effect and can be adjusted to the individual needs of the client, thanks to the possibility of selecting the appropriate force, speed and area of the body of the massage. The height of the device is optimal to make it easier for customers of different body heights to comfortably lie down on the Activ Aqua Bed membrane mat.",
    mc_c: "6 massage modes to<br> choose from ",
    pll: "Parallel",
    psl: "Pulsating",
    ptl: "Punctual",
    wdk: "Wide Kneading",
    dkk: "Kneading",
    r_b: "Rubbing",
    fld: "Face luminotherapy by<br> LED lamp during body massage ",
    fld_t: "<strong>The LED lamp uses LED light for optical whitening and treatment of various skin problems such as: acne, skin allergies, pigmentation spots or long-healing wounds.</strong> The LED lamp has a significant effect on the regeneration of skin with signs of aging and age-related collagen loss. It also improves the condition and tension of the skin and soothes sunburn.",
    slf: "A salutary effect for the skin of the face ",
    slf_t: "<strong>The lamp works on the principle of photodynamic therapy, activating the cells of the deep layers of the skin and improving their metabolism.</strong> When the skin absorbs light, the light energy s converted into intercellular energy. As a result, the microvessels relax and strengthen. There is a photochemical reaction in the skin – an enzymatic reaction. The lamp is ideal for enhancing the effects of treatment with BB Glow ampoules. All this benefits are during a relaxing dry massage at the Activ Aqua Bed.",
    alc: "Amazing light impact",
    alc_t: "<strong>The stream of light penetrating the skin and reaching the inside of the cell stimulates the processes taking place inside it.</strong> Irradiation with LED light is comparable to the operation of a laser beam. The treatment with the use of LED technology is absolutely non-invasive, does not affect the structure of cells, but only stimulates and naturally activates and intensifies the regenerative processes taking place in it.",
    innd: "Indications",
    innd_i: "<li>acne removal,</li> <li>strengthening blood vessels, </li> <li>acceleration of skin regeneration,</li> <li>stimulation of collagen synthesis,</li>",
    innd_ii: "<li>brightening discoloration,<br> soothes irritations and accelerates skin healing, </li> <li>after cleansing treatments, </li> <li>micro-needle and needle mesotherapy</li>",
    pnh: "The power of six healing colors",
    pnh_p: "The LED face mask is equipped with six colors: red, blue, green,<br> purple, yellow and white.",
    pn_r: "<strong>Red</strong>",
    pn_r_t: "650-730<sup>NM</sup>",
    pn_r_p: "Stimulates the skin to increase the production of collagen and elastin, which helps to reduce wrinkles and improve skin firmness. It has an anti-inflammatory effect and reduces redness.",
    pn_b: "<strong>Blue</strong>",
    pn_b_t: "430-450<sup>NM</sup>",
    pn_b_p: "Helps to heal existing acne lesions and prevents new ones from forming by destroying P.acne bacteria. It regulates the work of the sebaceous glands and constricts enlarged pores.",
    pn_y: "<strong>Yellow</strong>",
    pn_y_t: "500<sup>NM</sup>",
    pn_y_p: "Heals acne and removes scars, repair skin.",
    pn_w: "<strong>White</strong>",
    pn_w_t: "380-730<sup>NM</sup>",
    pn_w_p: "Speeds up the metabolism, improves fine lines and sagging skin.",
    pn_g: "<strong>Green</strong>",
    pn_g_t: "525-550<sup>NM</sup>",
    pn_g_p: "Affects melanocytes. Brightens and reduces discoloration, freckles and age spots. It reduces wrinkles and scars.",
    pn_v: "<strong>Violet</strong>",
    pn_v_t: "380-430<sup>NM</sup>",
    pn_v_p: "Heals acne and removes scars, repair skin.",
    ct_d: "Contemporary design combining only advantages ",
    ct_d_p: "<strong>Activ Aqua Bed has a contemporary design, complete flexibility and comfort with a relaxing massage experience.</strong> Side LED backlight will additionally emphasize the modern line of the device, additionally allowing you to choose and manage at any time the appropriate color scheme, martching to your room decor or brand identity.",

    size: "Size",
    inch: "inch",
    yes: "yes",
    nm: "NM",
    heiht: "Height",
    heiht_i: "51,1 cm (21,3 inches)",
    heihit: "Height 2",
    heiht_ii: "72,2 cm (28,43 inches)",
    whit: "Width",
    whit_i: "115 cm (45,28 inches) ",
    lhet: "Length",
    lhet_i: "239,4 cm (94,25 inches)",
    srff: "The surface of the lair",
    srff_i: "1,3m2",
    mp_w: "Maximum patient weight",
    mp_w_i: "125kg",
    powerCons: "Power consumption",
    powerCons_i: "3600W",
    wtr: "Water temperature range",
    wtr_i: "20-40 Celsius",
    jets: "Number of jets",
    jets_i: "2x",
    tsc_a: "Touch screen size",
    tsc_i: "10.1 inch",
    nm_i: "Number of masssage programs",


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
    main_text: "Activ Aqua Bed",
    get_quote: "Получить цитату",
     next_txt: "Водный массаж следующего поколения",
     характеристики: "Спецификация",
     main_p: "Activ Aqua Bed - это кровать для сухого водного массажа. Выполняется подогретой струей воды, вытекающей под давлением из расположенных внутри форсунок. Струи воды движутся круговыми движениями, ударяясь о поверхность резинового коврика. Вот как они массируйте тело – с головы до пят",
     title_2: "Сочетание массажа, воды и тепла",
     p_2: "<strong>Массаж на сухой водной кровати - это совершенно безболезненная, неинвазивная и безопасная процедура.</strong> Это сочетание трех элементов: массажа, тепла и воды. Форсунки струй движутся вверх и вниз по телу волной -как потоки нагретой воды, давая пользователю возможность контролировать, на чем сконцентрировать массаж. Благодаря этому он позволяет достичь удовлетворительных результатов.",
     amz_b: "Удивительные преимущества<br> сухого массажа",
     reduce_p: "- уменьшает мышечное напряжение,<br>- расслабляет,<br>- улучшает работу кровеносной системы,<br>- снимает боль",
     p_add: "Кроме того, массаж на кровати Activ Aqua Bed оказывает расслабляющее и успокаивающее действие. Вы расслабляетесь и чувствуете полное омоложение после процедуры. Вы получаете гораздо больше сил и энергии на весь день.",
     max_l: "Максимальная загрузка<br>",
     max_l_d: "12<sup>кг</sup>",
     max_t: "Температура",
     max_t_d: "40<sup>°C</sup>",
     max_d: "Светодиодная маска для лица<br>",
     max_d_d: "да",
     max_j: "Мощные струи",
     max_j_d: " 2<sup>x</sup>",
     t_ded: "Специальное программное обеспечение на<br>большом сенсорном дисплее",
     t_ded_p: "<strong>Кровать Activ Aqua Bed мы оснастили большим 10,1-дюймовым сенсорным экраном на специальном кронштейне</strong>, что позволяет устанавливать экран в любом положении по отношению к оператору или пациенту. Было разработано специальное программное обеспечение. и создан с нуля, чтобы использовать все преимущества функций.Благодаря этому мы смогли использовать все возможности и доработать каждый элемент интерфейса, чтобы получить простоту использования и реализовать множество функций и решений.Наш дизайн отдел постоянно разрабатывает программное обеспечение, благодаря чему устройство получает обновления вместе с новыми функциями и улучшениями.",
     s_sc: "Экран сеанса",
     s_sc_t: "<strong>Экран сеанса позволяет легко управлять всеми функциями кровати Activ Aqua Bed.</strong> Управляйте мощностью струй, изменяйте их скорость или зону массажа, а также температуру воды и многое другое. более.",
     m_w: "Управление температурой воды<br>",
     m_w_t: "<strong>Наше программное обеспечение позволяет легко установить температуру воды</strong>, а также ее автоматическое отключение после определения времени бездействия. Кровать Activ Aqua Bed оснащена датчиками, которые информируют о текущей температуре воды и уровень воды также на экране.",
     c_b: "Выберите <br>часть тела",
     c_b_t: " <strong>Кровать Activ Aqua Bed позволяет выбрать массаж для данной части тела или массаж всего тела.</strong> Опцию также можно легко изменить во время сеанса.",
     s_s: "Экран сеанса",
     s_s_t: "<strong>Экран сеанса позволяет легко управлять всеми функциями кровати Activ Aqua Bed.</strong> Управляйте мощностью струй, изменяйте их скорость или зону массажа, а также температуру воды и многое другое. более.",
     mw_w: "Управление температурой воды<br>",
     mw_w_t: "<strong>Наше программное обеспечение позволяет легко установить температуру воды</strong>, а также ее автоматическое отключение после определения времени бездействия. Кровать Activ Aqua Bed оснащена датчиками, которые информируют о текущей температуре воды и уровень воды также на экране.",
     d_s: "Размер дисплея<br> ",
     d_s_t: " 10,1<sup>дюйма</sup>",
     m_m: "Режимы массажей",
     m_m_t: "6",
     c_p: "Комфорт и удовольствие<br> от массажа ",
     c_p_t: "<strong>Кровать Activ Aqua для водного сухого массажа наверняка удовлетворит всех клиентов, которые будут систематически проводить процедуры.</strong> Процедура не смущает, ведь для того, чтобы воспользоваться массажем, нужно всего лишь снять обувь.Сама процедура приятная и очень комфортная.Оказывает быстрый,ощутимый эффект и может быть адаптирована к индивидуальным потребностям клиента,благодаря возможности выбора подходящей силы,скорости и площади тела массажа . Высота устройства оптимальна, чтобы клиентам разного роста было удобно ложиться на мембранный коврик Activ Aqua Bed.",
     mc_c: "6 режимов массажа<br> на выбор",
     pll: "Параллельно",
     псл: "Пульсирующий",
     ptl: "Пунктуальный",
     wdk: "Широкий замес",
     dkk: "Замешивание",
     r_b: "Растирание",
     fld: "Светотерапия лица светодиодной лампой<br> во время массажа тела ",
     fld_t: "<strong>Светодиодная лампа использует светодиодный свет для оптического отбеливания и лечения различных кожных проблем, таких как: акне, кожная аллергия, пигментные пятна или долго заживающие раны.</strong> Светодиодная лампа оказывает значительное влияние на регенерация кожи с признаками старения и возрастной потерей коллагена, улучшает состояние и напряжение кожи, успокаивает солнечные ожоги.",
     slf: "Благотворный эффект для кожи лица",
     slf_t: "<strong>Лампа работает по принципу фотодинамической терапии, активируя клетки глубоких слоев кожи и улучшая их метаболизм.</strong> Когда кожа поглощает свет, световая энергия преобразуется в межклеточную энергию. В результате микрососуды расслабляются и укрепляются.Происходит фотохимическая реакция в коже – ферментативная реакция.Лампа идеально подходит для усиления эффекта от процедур с ампулами BB Glow.Все эти преимущества во время расслабляющего сухого массажа в Activ Аква Кровать.",
     alc: "Удивительное световое воздействие",
     alc_t: "<strong>Поток света, проникая сквозь кожу и достигая внутренней части клетки, стимулирует процессы, происходящие внутри нее.</strong> Облучение светодиодным светом сравнимо с действием лазерного луча. Лечение с помощью использование светодиодной технологии абсолютно неинвазивно, не влияет на структуру клеток, а лишь стимулирует и естественным образом активизирует и интенсифицирует протекающие в ней регенеративные процессы.",
     innd: "Показания",
     innd_i: "<li>удаление прыщей,</li> <li>укрепление сосудов,</li> <li>ускорение регенерации кожи,</li> <li>стимуляция синтеза коллагена,</li>",
     innd_ii: "<li>осветление пигментных пятен,<br> успокаивает раздражения и ускоряет заживление кожи, </li> <li>после очищающих процедур, </li> <li>микроигольчатой и игольчатой мезотерапии</li>",
     pnh: "Сила шести целебных цветов",
     pnh_p: "Светодиодная маска для лица оснащена шестью цветами: красным, синим, зеленым, <br> фиолетовым, желтым и белым.",
     pn_r: "<strong>Красный</strong>",
     pn_r_t: "650-730<sup>М.М.</sup>",
     pn_r_p: "Стимулирует кожу к увеличению выработки коллагена и эластина, что способствует уменьшению морщин и повышению упругости кожи. Обладает противовоспалительным действием и уменьшает покраснение.",
     pn_b: "<strong>Синий</strong>",
     pn_b_t: "430-450<sup>м. миль</sup>",
     pn_b_p: "Помогает заживлению существующих очагов акне и препятствует образованию новых, уничтожая бактерии P.acne. Регулирует работу сальных желез и сужает расширенные поры.",
     pn_y: "<strong>Желтый</strong>",
     pn_y_t: "500<sup>морских миль</sup>",
     pn_y_p: "Лечит прыщи и удаляет шрамы, восстанавливает кожу.",
     pn_w: "<strong>Белый</strong>",
     pn_w_t: "380-730<sup>морских миль</sup>",
     pn_w_p: "Ускоряет обмен веществ, уменьшает морщины и дряблость кожи.",
     pn_g: "<strong>Зеленый</strong>",
     pn_g_t: "525-550<sup>морских миль</sup>",
     pn_g_p: "Влияет на меланоциты. Осветляет и уменьшает обесцвечивание, веснушки и пигментные пятна. Уменьшает морщины и шрамы.",
     pn_v: "<strong>Фиолетовый</strong>",
     pn_v_t: "380-430<sup>М.М.</sup>",
     pn_v_p: "Лечит прыщи и удаляет шрамы, восстанавливает кожу.",
     ct_d: "Современный дизайн, сочетающий только достоинства",
     ct_d_p: "<strong>Кровать Activ Aqua Bed отличается современным дизайном, полной гибкостью и комфортом при расслабляющем массаже.</strong> Боковая светодиодная подсветка дополнительно подчеркнет современную линию устройства, дополнительно позволяя выбирать и управлять в любое время. выберите подходящую цветовую схему, подходящую к декору вашей комнаты или фирменному стилю.",

     size: "Размер",
     inch: "дюйм",
     yes: "да",
     nm: "НМ",
     heiht: "Высота",
     heiht_i: "51,1 см (21,3 дюйма)",
     heihit: "Высота 2",
     heiht_ii: "72,2 см (28,43 дюйма)",
     whit: "Ширина",
     whit_i: "115 см (45,28 дюймов)",
     lhet: "Длина",
     lhet_i: "239,4 см (94,25 дюйма)",
     srff: "Поверхность логова",
     srff_i: "1,3м2",
     mp_w: "Максимальный вес пациента",
     mp_w_i: "125 кг",
     powerCons: "Потребляемая мощность",
     powerCons_i: "3600 Вт",
     wtr: "Диапазон температур воды",
     wtr_i: "20-40 по Цельсию",
     jets: "Количество струй",
     jets_i: "2x",
     tsc_a: "Размер сенсорного экрана",
     tsc_i: "10,1 дюйма",
     nm_i: "Количество программ массажа",


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
    main_text: "Activ Aqua Bed",
    get_quote: "πάρε προσφορά",
    next_txt: "Η επόμενη γενιά μασάζ νερού",
    specifications: "Προσδιορισμός",
    main_p: "Το Activ Aqua Bed είναι ένα κρεβάτι μασάζ ξηρού νερού. Εκτελείται με ένα θερμαινόμενο ρεύμα νερού που ρέει υπό πίεση από ακροφύσια που βρίσκονται μέσα. Οι πίδακες νερού κινούνται με κυκλικές κινήσεις, χτυπώντας την επιφάνεια του ελαστικού χαλιού. Έτσι κάνουν μασάζ στο σώμα – από το κεφάλι μέχρι τα νύχια.",
    title_2: "Συνδυασμός μασάζ, νερού και θερμότητας",
    p_2: "<strong>Το μασάζ με κρεβάτι ξηρού νερού είναι μια εντελώς ανώδυνη, μη επεμβατική και ασφαλής διαδικασία.</strong> Είναι ένας συνδυασμός τριών στοιχείων: μασάζ, θερμότητα και νερό. Τα ακροφύσια πίδακες κινούνται πάνω και κάτω στο σώμα με ρεύματα θερμαινόμενου νερού που μοιάζουν με κύμα, δίνοντας στον χρήστη τον έλεγχο του σημείου συγκέντρωσης του μασάζ. Χάρη σε αυτό, σας επιτρέπει να επιτύχετε ικανοποιητικά αποτελέσματα.",
    amz_b: "Εκπληκτικά οφέλη<br> του ξηρού μασάζ",
    reduce_p: "– μειώνει την ένταση των μυών,<br> – χαλαρώνει,<br> – βελτιώνει το κυκλοφορικό σύστημα,<br> – ανακουφίζει από τον πόνο",
    p_add: "Επιπλέον, το μασάζ στο κρεβάτι Activ Aqua έχει ένα χαλαρωτικό και ηρεμιστικό αποτέλεσμα. Χαλαρώνετε και αισθάνεστε πλήρη αναζωογόνηση μετά τη θεραπεία. Παίρνετε πολύ περισσότερη δύναμη και άφθονη ενέργεια για όλη την ημέρα.",
    max_l: "Μέγιστο φορτίο<br>",
    max_l_d: "12<sup>kg</sup>",
    max_t: "Θερμοκρασία",
     max_t_d: "40<sup>°C</sup>",
     max_d: "μάσκα προσώπου LED<br>",
     max_d_d: "ναι",
     max_j: "Ισχυροί πίδακες",
     max_j_d: " 2<sup>x</sup>",
     t_ded: "Αποκλειστικό λογισμικό σε<br> μεγάλη οθόνη αφής",
     t_ded_p: "<strong>Έχουμε εξοπλίσει το Activ Aqua Bed με μια μεγάλη οθόνη αφής 10,1 ιντσών σε ειδικό βραχίονα</strong> που σας επιτρέπει να ρυθμίσετε την οθόνη σε οποιαδήποτε θέση προς τον χειριστή ή τον ασθενή. Έχει σχεδιαστεί ειδικό λογισμικό και δημιουργήθηκε από την αρχή για να χρησιμοποιήσει όλα τα πλεονεκτήματα των λειτουργιών. Χάρη σε αυτό, μπορέσαμε να χρησιμοποιήσουμε όλες τις δυνατότητες και να βελτιώσουμε κάθε στοιχείο της διεπαφής προκειμένου να αποκτήσουμε ευκολία στη χρήση και να εφαρμόσουμε πολλές λειτουργίες και λύσεις. Ο σχεδιασμός μας Το τμήμα αναπτύσσει συνεχώς το λογισμικό, χάρη στο οποίο η συσκευή λαμβάνει ενημερώσεις μαζί με νέες λειτουργίες και βελτιώσεις.",
     s_sc: "Οθόνη περιόδου λειτουργίας",
     s_sc_t: "<strong>Η οθόνη συνεδρίας σάς επιτρέπει να διαχειρίζεστε εύκολα όλες τις λειτουργίες του κρεβατιού Activ Aqua.</strong> Ελέγξτε την ισχύ των πίδακες, αλλάξτε την ταχύτητά τους ή τη ζώνη μασάζ, καθώς και τη θερμοκρασία του νερού και πολλά άλλα περισσότερο.",
     m_w: "Διαχείριση<br>θερμοκρασίας νερού",
     m_w_t: "<strong>Το λογισμικό μας σάς επιτρέπει να ρυθμίζετε εύκολα τη θερμοκρασία του νερού</strong> καθώς και την αυτόματη απενεργοποίησή του μετά τον καθορισμό του χρόνου αδράνειας. Το Activ Aqua Bed είναι εξοπλισμένο με αισθητήρες που ενημερώνουν για την τρέχουσα θερμοκρασία του νερού και την η στάθμη του νερού επίσης στην οθόνη.",
     c_b: "Επιλογή σώματος<br>τμήματος",
     c_b_t: " <strong>Το Activ Aqua Bed σάς επιτρέπει να επιλέξετε ένα μασάζ για ένα δεδομένο μέρος του σώματος ή ένα μασάζ σε ολόκληρο το σώμα.</strong> Η επιλογή μπορεί επίσης να αλλάξει εύκολα κατά τη διάρκεια της συνεδρίας.",
     s_s: "Οθόνη συνεδρίας",
     s_s_t: "<strong>Η οθόνη συνεδρίας σάς επιτρέπει να διαχειρίζεστε εύκολα όλες τις λειτουργίες του κρεβατιού Activ Aqua.</strong> Ελέγξτε την ισχύ των πίδακες, αλλάξτε την ταχύτητά τους ή τη ζώνη μασάζ, καθώς και τη θερμοκρασία του νερού και πολλά άλλα περισσότερο.",
     mw_w: "Διαχείριση<br>θερμοκρασίας νερού",
     mw_w_t: "<strong>Το λογισμικό μας σάς επιτρέπει να ρυθμίζετε εύκολα τη θερμοκρασία του νερού</strong> καθώς και την αυτόματη απενεργοποίηση του μετά τον καθορισμό του χρόνου αδράνειας. Το Activ Aqua Bed είναι εξοπλισμένο με αισθητήρες που ενημερώνουν για την τρέχουσα θερμοκρασία του νερού και την η στάθμη του νερού επίσης στην οθόνη.",
     d_s: "Μέγεθος οθόνης<br> ",
     d_s_t: " 10,1<sup>ίντσες</sup>",
     m_m: "Τρόποι μασάζ",
     m_m_t: "6",
     c_p: "Άνεση και ευχαρίστηση<br> από το μασάζ ",
     c_p_t: "<strong>Το Activ Aqua Bed for water dry massage σίγουρα θα ικανοποιήσει όλους τους πελάτες που θα κάνουν συστηματικά θεραπείες.</strong> Η διαδικασία δεν είναι ενοχλητική, γιατί για να επωφεληθείτε από το μασάζ, χρειάζεται μόνο να αφαιρέσετε το μασάζ. τα παπούτσια Η ίδια η διαδικασία είναι ευχάριστη και πολύ άνετη Παρέχει ένα γρήγορο, αντιληπτό αποτέλεσμα και μπορεί να προσαρμοστεί στις ιδιαίτερες ανάγκες του πελάτη, χάρη στη δυνατότητα επιλογής της κατάλληλης δύναμης, ταχύτητας και περιοχής του σώματος του μασάζ . Το ύψος της συσκευής είναι βέλτιστο για να διευκολύνει τους πελάτες διαφορετικών υψών σώματος να ξαπλώνουν άνετα στο στρώμα μεμβράνης Activ Aqua Bed.",
     mc_c: "6 λειτουργίες μασάζ για<br> επιλογή από ",
     pll: "Παράλληλο",
     psl: "Παλμικό",
     ptl: "Ακριβής",
     wdk: "Πλατύ ζύμωμα",
     dkk: "Ζύμωμα",
     r_b: "Τρίψιμο",
     fld: "Φωτεινοθεραπεία προσώπου με<br> λάμπα LED κατά το μασάζ σώματος ",
     fld_t: "<strong>Η λάμπα LED χρησιμοποιεί φως LED για οπτική λεύκανση και θεραπεία διαφόρων δερματικών προβλημάτων όπως: ακμή, δερματικές αλλεργίες, κηλίδες μελάγχρωσης ή πληγές που επουλώνονται πολύ.</strong> Η λάμπα LED έχει σημαντική επίδραση στην αναγέννηση του δέρματος με σημάδια γήρανσης και απώλεια κολλαγόνου που σχετίζεται με την ηλικία. Επίσης, βελτιώνει την κατάσταση και την ένταση του δέρματος και καταπραΰνει τα ηλιακά εγκαύματα.",
     slf: "Ένα ωφέλιμο αποτέλεσμα για το δέρμα του προσώπου",
     slf_t: "<strong>Η λάμπα λειτουργεί με βάση την αρχή της φωτοδυναμικής θεραπείας, ενεργοποιώντας τα κύτταρα των βαθιών στοιβάδων του δέρματος και βελτιώνοντας τον μεταβολισμό τους.</strong> Όταν το δέρμα απορροφά φως, η φωτεινή ενέργεια μετατρέπεται σε μεσοκυττάρια ενέργεια. Ως αποτέλεσμα, τα μικροαγγεία χαλαρώνουν και δυναμώνουν. Υπάρχει μια φωτοχημική αντίδραση στο δέρμα - μια ενζυματική αντίδραση. Η λάμπα είναι ιδανική για την ενίσχυση των αποτελεσμάτων της θεραπείας με αμπούλες BB Glow Όλα αυτά τα οφέλη είναι κατά τη διάρκεια ενός χαλαρωτικού ξηρού μασάζ στο Activ Κρεβάτι Aqua.",
     alc: "Εκπληκτική ελαφριά πρόσκρουση",
     alc_t: "<strong>Το ρεύμα φωτός που διεισδύει στο δέρμα και φτάνει στο εσωτερικό του κυττάρου διεγείρει τις διεργασίες που λαμβάνουν χώρα στο εσωτερικό του.</strong> Η ακτινοβόληση με φως LED είναι συγκρίσιμη με τη λειτουργία μιας δέσμης λέιζερ. Η θεραπεία με Η χρήση της τεχνολογίας LED είναι απολύτως μη επεμβατική, δεν επηρεάζει τη δομή των κυττάρων, αλλά διεγείρει και ενεργοποιεί φυσικά και εντείνει τις αναγεννητικές διαδικασίες που λαμβάνουν χώρα σε αυτό.",
     innd: "Ενδείξεις",
     innd_i: "<li>αφαίρεση ακμής,</li> <li>ενίσχυση των αιμοφόρων αγγείων, </li> <li>επιτάχυνση της αναγέννησης του δέρματος,</li> <li>διέγερση της σύνθεσης κολλαγόνου,</li>",
     innd_ii: "<li>αποχρωματισμός που λαμπρύνει,<br> καταπραΰνει τους ερεθισμούς και επιταχύνει την επούλωση του δέρματος, </li> <li>μετά από θεραπείες καθαρισμού, </li> <li>μεσοθεραπεία με μικροβελόνες και βελόνες</li>",
     pnh: "Η δύναμη των έξι θεραπευτικών χρωμάτων",
     pnh_p: "Η μάσκα προσώπου LED είναι εξοπλισμένη με έξι χρώματα: κόκκινο, μπλε, πράσινο,<br> μωβ, κίτρινο και λευκό.",
     pn_r: "<strong>Κόκκινο</strong>",
     pn_r_t: "650-730<sup>NM</sup>",
     pn_r_p: "Διεγείρει το δέρμα να αυξήσει την παραγωγή κολλαγόνου και ελαστίνης, που βοηθά στη μείωση των ρυτίδων και στη βελτίωση της σφριγηλότητας του δέρματος. Έχει αντιφλεγμονώδη δράση και μειώνει την ερυθρότητα.",
     pn_b: "<strong>Μπλε</strong>",
     pn_b_t: "430-450<sup>NM</sup>",
     pn_b_p: "Βοηθά στην επούλωση των υπαρχουσών βλαβών ακμής και αποτρέπει το σχηματισμό νέων καταστρέφοντας τα βακτήρια P.acne. Ρυθμίζει την εργασία των σμηγματογόνων αδένων και συστέλλει τους διευρυμένους πόρους.",
     pn_y: "<strong>Κίτρινο</strong>",
     pn_y_t: "500<sup>NM</sup>",
     pn_y_p: "Θεραπεύει την ακμή και αφαιρεί ουλές, επανορθώνει το δέρμα.",
     pn_w: "<strong>Λευκό</strong>",
     pn_w_t: "380-730<sup>NM</sup>",
     pn_w_p: "Επιταχύνει το μεταβολισμό, βελτιώνει τις λεπτές γραμμές και τη χαλάρωση του δέρματος.",
     pn_g: "<strong>Πράσινο</strong>",
     pn_g_t: "525-550<sup>NM</sup>",
     pn_g_p: "Επηρεάζει τα μελανοκύτταρα. Φωτίζει και μειώνει τον αποχρωματισμό, τις πανάδες και τις κηλίδες ηλικίας. Μειώνει τις ρυτίδες και τις ουλές.",
     pn_v: "<strong>Βιολετί</strong>",
     pn_v_t: "380-430<sup>NM</sup>",
     pn_v_p: "Θεραπεύει την ακμή και αφαιρεί ουλές, επανορθώνει το δέρμα.",
     ct_d: "Σύγχρονος σχεδιασμός που συνδυάζει μόνο πλεονεκτήματα",
     ct_d_p: "<strong>Το Activ Aqua Bed έχει μοντέρνο σχεδιασμό, πλήρη ευελιξία και άνεση με μια χαλαρωτική εμπειρία μασάζ.</strong> Ο οπίσθιος φωτισμός LED στο πλάι θα τονίσει επιπλέον τη μοντέρνα γραμμή της συσκευής, επιτρέποντάς σας επιπλέον να επιλέξετε και να διαχειρίζεστε οποιαδήποτε άλλη επιλογή. χρονομετρήστε τον κατάλληλο συνδυασμό χρωμάτων, ακολουθώντας τη διακόσμηση του δωματίου σας ή την ταυτότητα της επωνυμίας σας.",

     size: "Μέγεθος",
     inch: "ίντσα",
     yes: "ναι",
     nm: "NM",
     heiht: "Ύψος",
     heiht_i: "51,1 cm (21,3 ίντσες)",
     heihit: "Ύψος 2",
     heiht_ii: "72,2 cm (28,43 ίντσες)",
     whit: "Πλάτος",
     whit_i: "115 cm (45,28 ίντσες) ",
     lhet: "Μήκος",
     lhet_i: "239,4 cm (94,25 ίντσες)",
     srff: "Η επιφάνεια της φωλιάς",
     srff_i: "1,3m2",
     mp_w: "Μέγιστο βάρος ασθενούς",
     mp_w_i: "125kg",
     powerCons: "Κατανάλωση ενέργειας",
     powerCons_i: "3600W",
     wtr: "Εύρος θερμοκρασίας νερού",
     wtr_i: "20-40 Κελσίου",
     jets: "Αριθμός πίδακα",
     jets_i: "2x",
     tsc_a: "Μέγεθος οθόνης αφής",
     tsc_i: "10,1 ίντσες",
     nm_i: "Αριθμός προγραμμάτων μασάζ",


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
  