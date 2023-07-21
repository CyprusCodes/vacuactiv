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
    mt_p: "Noninvasive method of vacuum roller therapy",
    mt_pi: "<strong>Activ Endermology vacuum roller massage is a noninvasive method of vacuum therapy combined performance of the mobile rolls, and the radio wave bipolar.</strong> The treatment is completely non-invasive device, gives great results in the fight against cellulite, accelerates metabolism, increases trophies tissues, reduces body fat and shapes your body.",
    hw_e: "How works endermomassamge ?",
    hw_p: "<strong>Vacuuming skin-fold expands blood vessels, increases metabolism or the rate of removal of toxins from the cell.</strong> Lymph is drained through the movement of the head roller of the treatment. Bipolar radio wave acts directly on the skin and subcutaneous tissue. Tissue warms to 60 degrees Celsius, by contracting the collagen fibers. The skin becomes more resilient and definitely thicker.",
    act_e: "Active Endermology vacuum roller massag benefits",
    act_i: "<li>Promote the production of collagen and elastin</li> <li>Excess water retention</li> <li>Help to fade away scars, stretch marks and orange peel</li> <li>Reduce &amp; Prevent Cellulite</li> <li>Improve Skin Texture &amp; Elasticity</li> <li>Eliminate Toxins</li> <li>Stimulate Blood &amp; Lymphatic Flow</li> <li>Tone &amp; Re-contour Body Shape</li>",
    act_ii: "<li>Weight lost benefits</li> <li>No injections, anesthesia, or probing</li> <li>Massages can relieve stress and tension, and improve circulation</li> <li>Gives it a tight, toned appearance, improves blood flow</li> <li>No downtime or recovery period</li> <li>Painless</li> <li>Visible results after 8-10 sessions (results may vary)</li>",
    wr_a: "Wide range of applications",
    wr_ai: "<strong>Roller massage concept was found mainly to help reduce the appearance of scar tissue.</strong> But after establishing a many health care experts realized that Vacuum roller massage technology is very effective for cellulite reduction and improve skin elasticity. Vacuum roller massage treatment involves using motorized rollers to massage and manipulate the skin tissue. ",
    bdk: "Breakdown<br> of programs",
    bkf: "Effect",
    bkf_i: "<li>relaxation</li> <li>cellulite</li> <li>firming</li> <li>wellness</li>",
    bkr: "Area",
    bkr_i: "<li>calves</li> <li>thighs and buttocks</li> <li>back</li> <li>emnants</li> <li>abdomen</li>",
    prt: "Possibility<br> to set parameters",
    prt_i: "<li>time</li> <li>underpressure</li> <li>frequency</li> <li>mode</li> <li>RF intensity</li>",
    elb: "Electrically adjustable bed height,<br> managed from a touch screen",
    mni: "Modern non-invasive<br> technique benefits",
    mni_i: "<strong>A benefit of Vacuum roller massage is a non-surgical treatment as called as a one of non-invasive liposuction method.</strong> Anticellulite treatment is not the only benefit that can be reached using Vacuum roller massage machine Activ Endermology. Activ Endermology session can also help alleviate minor muscles, improve skin condition and improve blood and lymphatic circulation on treated area.",
    mni_ii: "This modern technique allows to reduce the appearance of cellulite by activating natural processes of fat tissue drainage. Using head equipped with independent and motorized rolls, the skin finds its smooth and flexible aspect. Activ Endermology vacuum roller massage is a non-invasive treatment to treat localized fat pockets and shape the body.",
    pwl: "Promotes weight loss<br> and full-body toning",
    pwl_i: "<strong>Vacuum roller therapy promotes weight loss and full-body toning by stimulating targeted areas and running them along the lymphatic lines.</strong> These special areas provide your circulatory system with the energy required to metabolize body fat, including the fat in your problem areas and the fat around your internal organs. A more efficient circulation can facilitate the removal of toxins and excess water that are causing or increasing your weight problems. The suction created helps to reach fat located in the deeper level, and separate it from the fibers.",
    htw: "How this cellulite reduction <br> technology works ?",
    htw_i: "<strong>Cellulite is the expression used to describe pockets of fat which are trapped and cause dimpling in the skin.</strong> This dimpling is irregular and patchy and has been identified with orange peel. 90% of post-adolescent women go on to develop cellulite at some time during their life. The thighs, buttocks and the abdomen are the most common areas for a woman to develop cellulite. Although it is often mistaken for obesity, cellulite is not actually obesity related because it can also take place in thin lean women. Cellulite tends to develop in the subcutaneous fat layers. This layer of fat is unique in its structure compared to the other layers because its fatty parts are structured into specific chambers by strands of linked tissue around it.",
    htw_ii: "Hormones also help out with the storage of fat along with the body’s metabolism in the subcutaneous fat layer. Cellulite is for the most part found in women during their hormonal changes such as puberty, pregnancy, and menopause and also whilst taking birth control pills. The vacuum roller helps to eliminate the metabolic toxins caused by intense effort to help prevent delayed onset muscle soreness. Softening muscle tissues the rollers increase fluidity and precision of movement.",
    ctdd: "Can the treatment be dangerous ?",
    ctdd_i: "<strong>Since vacuum roller massage is a non-invasive treatment, the side effects associated with the procedure are relatively minor.</strong> Patients may experience light bruising and broken capillaries at the treatment site, but vacuum roller massage with properly adjusted suction level is a painless and does not leave any bruises on the skin.",
    ct_dr: "Recommended duration and frequncy of treatments",
    ct_di: "<strong>Manufacturer recommends a cure of at least 10-15 treatments of 30-45 minutes each with 3 treatments every week.</strong> Once the cure is completed, it is recommended to keep maintenance sessions every 3-4 weeks to maintain the results.",
    ct_dii: "<strong>The first month of treatment is very important as it will send signals to awaken cells.</strong> It is therefore crucial to follow the treatment prescription. Note that this treatment is always more efficient when accompanied by a good life hygiene, healthy eating habits and physical activity.",
    trt: "Treatments",
    trt_i: "10",
    drd: "Duration",
    drd_i: "30<sup>min</sup>",
    s_ct: "Set contains",
    s_cti: "<li>main unit</li> <li>treatment head (RF) 1 applicator</li> <li>treatment head (massage) 2 applicators</li>",
    s_ctii: "<li>treatment outfit 5 pcs</li> <li>power cable</li> <li>professional training</li>",
    sp_f: "Specification",
    spf_s: "Size",
    spf_h: "Height",
    spf_ih: "80 cm (31,5 inches)",
    spf_w: "Width",
    spf_iw: "85 cm (33,46 inches)",
    spf_l: "Length",
    spf_il: "210 cm (82,68 inches)",
    spf_t: "Technology",
    spf_ti: "RF, negative pressure, massage with self-propelled rollers",
    spf_u: "Underpressure",
    spf_ui: "690mBar",
    spf_r: "Radio frequency",
    spf_ri: "500kHz",
    spf_wr: "Working frequency",
    spf_wri: "0-20Hz",
    spf_idi: "Display",
    spf_idii: "LCD, Touch screen",
    spf_p: "Power consumption",
    spf_pi: "750W",
    spf_v: "Voltage",
    spf_vi: "220-230V",
    spf_n: "Noise level",
    spf_ni: "65dB",




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
    mt_p: "Неинвазивный метод вакуумно-роликовой терапии",
mt_pi: "<strong>Активная вакуумно-роликовая массажная терапия - это неинвазивный метод вакуумной терапии, сочетающий движение подвижных роликов и биполярные радиоволны.</strong> Это полностью безопасное устройство, которое превосходно справляется с борьбой против целлюлита, ускоряет обмен веществ, улучшает состояние тканей, уменьшает жировые отложения и формирует ваше тело.",

hw_e: "Как работает эндермомассаж?",
hw_p: "<strong>Вакуумное подтяжение кожи расширяет кровеносные сосуды, увеличивает обмен веществ и ускоряет выведение токсинов из клеток.</strong> Лимфа выталкивается при помощи движения ролика по обрабатываемой зоне. Биполярные радиоволны напрямую воздействуют на кожу и подкожные ткани. Температура тканей достигает 60 градусов Цельсия, что способствует сжатию коллагеновых волокон и повышает упругость и плотность кожи.",

act_e: "Преимущества активной вакуумно-роликовой массажной терапии",
act_i: "<li>Стимулирует производство коллагена и эластина</li> <li>Устраняет задержку воды в организме</li> <li>Помогает уменьшить рубцы, растяжки и «апельсиновую корку»</li> <li>Уменьшает и предотвращает целлюлит</li> <li>Улучшает текстуру и упругость кожи</li> <li>Удаляет токсины</li> <li>Стимулирует кровообращение и лимфоток</li> <li>Формирует и корректирует форму тела</li>",

act_ii: "<li>Преимущества по снижению веса</li> <li>Отсутствие инъекций, наркоза или вмешательств</li> <li>Массажи способствуют снятию стресса и напряжения, улучшают кровообращение</li> <li>Придают коже упругость, улучшают кровообращение</li> <li>Отсутствие времени восстановления после процедуры</li> <li>Безболезненные процедуры</li> <li>Видимые результаты после 8-10 сеансов (результаты могут варьироваться)</li>",

wr_a: "Широкий спектр применения",
wr_ai: "<strong>Концепция роликового массажа была разработана прежде всего для помощи в уменьшении внешнего вида рубцовой ткани.</strong> Но после многочисленных исследований эксперты в области здравоохранения обнаружили, что вакуумный роликовый массаж очень эффективен для борьбы с целлюлитом и улучшения упругости кожи. Процедура вакуумного роликового массажа включает использование моторизованных роликов для массажа и манипуляции с тканями кожи.",

bdk: "Разбиение программ",
bkf: "Эффект",
bkf_i: "<li>Расслабление</li> <li>Уменьшение целлюлита</li> <li>Подтяжка кожи</li> <li>Улучшение благополучия</li>",

bkr: "Зона",
bkr_i: "<li>Икры</li> <li>Бедра и ягодицы</li> <li>Спина</li> <li>Руки</li> <li>Живот</li>",

prt: "Возможность установки параметров",
prt_i: "<li>Время</li> <li>Вакуумное давление</li> <li>Частота</li> <li>Режим</li> <li>Интенсивность радиочастоты</li>",

elb: "Электрически регулируемая высота кровати,<br> управляемая с помощью сенсорного экрана",

mni: "Преимущества современных неинвазивных технологий",
mni_i: "<strong>Преимущество вакуумно-роликовой массажной терапии заключается в том, что это нехирургическое лечение, также известное как метод неинвазивной липосакции.</strong> Процедуры по устранению целлюлита - это не единственное, что можно достичь с помощью массажной терапии с вакуумными роликами Activ Endermology. Сеансы активной вакуумно-роликовой массажной терапии также помогают смягчить мышцы, улучшить состояние кожи и улучшить кровообращение и лимфоток в обрабатываемой зоне.",

mni_ii: "Эта современная техника позволяет уменьшить проявление целлюлита, активируя естественные процессы дренажа жировой ткани. Используя головку с независимыми и моторизованными роликами, кожа становится гладкой и упругой. Активный вакуумно-роликовой массаж - это неинвазивное лечение для борьбы с локализованными жировыми отложениями и формирования силуэта тела.",

pwl: "Способствует снижению веса и укреплению всего тела",
pwl_i: "<strong>Вакуумно-роликовая терапия способствует снижению веса и укреплению всего тела, стимулируя целевые области и проходящие по ним лимфатические линии.</strong> Эти специальные области обеспечивают кровообращение с энергией, необходимой для метаболизма жиров, включая жир в проблемных зонах и вокруг внутренних органов. Более эффективное кровообращение может способствовать удалению токсинов и лишней воды, вызывающих проблемы с весом. Создаваемое вакуумом позволяет достичь жиров, расположенных на более глубоком уровне, и отделить их от волокон.",

htw: "Как работает технология уменьшения целлюлита?",
htw_i: "<strong>Целлюлит - это термин, используемый для описания скопления жира, которое заключено в коже и вызывает образование ямочек на поверхности кожи.</strong> Эти ямочки имеют неровную и пятнистую структуру, напоминающую апельсиновую корку. 90% женщин после подросткового возраста сталкиваются с проблемой целлюлита в течение своей жизни. Самые распространенные зоны для образования целлюлита у женщин - это бедра, ягодицы и живот. Несмотря на то что его часто путают с ожирением, целлюлит на самом деле не связан с ожирением, так как он может возникать и у тонких и стройных женщин. Целлюлит скапливается в подкожных слоях жира. Этот слой жира уникален своей структурой, поскольку его жировые части организованы в определенные камеры вокруг связующих тканей.",

htw_ii: "Гормоны также способствуют накоплению жира и обмену веществ в подкожном слое жира. Целлюлит в большинстве случаев образуется у женщин в периоды гормональных изменений, таких как подростковый возраст, беременность, менопауза, а также при принятии контрацептивных препаратов. Вакуумный ролик помогает устранить токсины, образующиеся из-за интенсивных усилий, что помогает предотвратить отсроченную боль в мышцах. Ролики размягчают мышцы, улучшают их гибкость и точность движений.",

ctdd: "Может ли процедура быть опасной?",
ctdd_i: "<strong>Поскольку вакуумный роликовый массаж является неинвазивной процедурой, побочные эффекты связанные с процедурой относительно незначительны.</strong> Пациенты могут испытывать легкое появление синяков и разрыва капилляров на месте обработки, но при правильно подобранном уровне вакуума, массаж с вакуумными роликами практически безболезнен и не оставляет синяков на коже.",

ct_dr: "Рекомендуемая продолжительность и частота процедур",
ct_di: "<strong>Производитель рекомендует курс из не менее 10-15 процедур, каждая длительностью от 30 до 45 минут, проводить 3 процедуры еженедельно.</strong> По завершении курса рекомендуется проводить поддерживающие процедуры каждые 3-4 недели, чтобы сохранить результаты.",
ct_dii: "<strong>Первый месяц лечения очень важен, так как он отправит сигналы для пробуждения клеток.</strong> Поэтому крайне важно следовать предписаниям лечения. Обратите внимание, что эффективность этой процедуры всегда выше, когда она сопровождается здоровыми привычками в области гигиены, здорового питания и физической активности.",

trt: "Количество процедур",
trt_i: "10",

drd: "Продолжительность",
drd_i: "30 мин.",

s_ct: "В комплект входит",
s_cti: "<li>Основное устройство</li> <li>Терапевтическая головка (RF) 1 аппликатор</li> <li>Терапевтическая головка (массаж) 2 аппликатора</li>",

s_ctii: "<li>Комплект для процедур 5 шт.</li> <li>Провод питания</li> <li>Профессиональное обучение</li>",

sp_f: "Характеристики",
spf_s: "Размер",
spf_h: "Высота",
spf_ih: "80 см (31,5 дюйма)",

spf_w: "Ширина",
spf_iw: "85 см (33,46 дюйма)",

spf_l: "Длина",
spf_il: "210 см (82,68 дюйма)",

spf_t: "Технология",
spf_ti: "RF, отрицательное давление, массаж с помощью самоходных роликов",

spf_u: "Вакуумное давление",
spf_ui: "690 мБар",

spf_r: "Радиочастота",
spf_ri: "500 кГц",

spf_wr: "Рабочая частота",
spf_wri: "0-20 Гц",

spf_idi: "Дисплей",
spf_idii: "ЖК-экран, сенсорный",

spf_p: "Потребляемая мощность",
spf_pi: "750 Вт",

spf_v: "Напряжение",
spf_vi: "220-230 В",

spf_n: "Уровень шума",
spf_ni: "65 дБ",
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
    mt_p: "Μη επεμβατική μέθοδος θεραπείας με κυλίνδρους βακούμ κύλισης",
mt_pi: "<strong>Το μασάζ με κυλίνδρους Ενδερμολογίας με βακούμ είναι μια μη επεμβατική μέθοδος θεραπείας με βακούμ που συνδυάζει την κίνηση των κινούμενων κυλίνδρων και τον βιπολικό ραδιοκύματο.</strong> Η θεραπεία είναι εντελώς μη επεμβατική, παρέχει εξαιρετικά αποτελέσματα στην καταπολέμηση της κυτταρίτιδας, επιταχύνει τον μεταβολισμό, αυξάνει τα τροπαία ιστού και μειώνει το λίπος του σώματος, διαμορφώνοντας το σώμα σας.",

hw_e: "Πώς λειτουργεί το ενδερμομασάζ;",
hw_p: "<strong>Η αναρρόφηση του δέρματος διευρύνει τα αιμοφόρα αγγεία, αυξάνει τον μεταβολισμό ή το ρυθμό απομάκρυνσης των τοξινών από το κύτταρο.</strong> Η λεμφάδα απομακρύνεται μέσω της κίνησης του κυλίνδρου κεφαλής της θεραπείας. Ο βιπολικός ραδιοκύματος δρα απευθείας στο δέρμα και τον υποδόριο ιστό. Τα ιστοτεντωμένα κολλαγόνια συστέλλονται, η επιδερμίδα γίνεται πιο ανθεκτική και ορατά πιο παχύ.",

act_e: "Οφέλη από το ενεργό μασάζ με κυλίνδρους βακούμ",
act_i: "<li>Προώθηση της παραγωγής κολλαγόνου και ελαστίνης</li> <li>Μείωση υπερβολικής κατακράτησης νερού</li> <li>Βοηθά στην εξαφάνιση ουλών, ραγάδων και πορτοκαλί φλούδας</li> <li>Μείωση & Πρόληψη της κυτταρίτιδας</li> <li>Βελτίωση της υφής και ελαστικότητας του δέρματος</li> <li>Εξάλειψη τοξινών</li> <li>Διέγερση της αίματος & της λεμφικής ροής</li> <li>Διαμόρφωση & Ανασχεδίαση του σώματος</li>",

act_ii: "<li>Οφέλη από την απώλεια βάρους</li> <li>Χωρίς ένεση, αναισθησία ή εξετάσεις</li> <li>Τα μασάζ μπορούν να ανακουφίσουν από το άγχος και την ένταση και να βελτιώσουν την κυκλοφορία</li> <li>Χαρίζει σφιχτή, τονωμένη εμφάνιση, βελτιώνει την κυκλοφορία του αίματος</li> <li>Δεν απαιτείται χρόνος ανάρρωσης μετά τη διαδικασία</li> <li>Ανώδυνο</li> <li>Ορατά αποτελέσματα μετά από 8-10 συνεδρίες (τα αποτελέσματα μπορεί να διαφέρουν)</li>",

wr_a: "Ευρύ φάσμα εφαρμογών",
wr_ai: "<strong>Το κονσεπτ του μασάζ με κυλίνδρους αναπτύχθηκε κυρίως για να βοηθήσει στη μείωση της εμφάνισης του ιστού ουλών.</strong> Ωστόσο, μετά την εξέλιξη, ειδικοί στην υγειονομική περίθαλψη ανακάλυψαν ότι η τεχνολογία του μασάζ με κυλίνδρους βακούμ είναι πολύ αποτελεσματική για τη μείωση της κυτταρίτιδας και τη βελτίωση της ελαστικότητας του δέρματος. Η θεραπεία με κυλίνδρους βακούμ περιλαμβάνει τη χρήση κινητήριων κυλίνδρων για μασάζ και χειρισμό του ιστού του δέρματος.",

bdk: "Διάσπαση<br> των προγραμμάτων",
bkf: "Εφέ",
bkf_i: "<li>Χαλάρωση</li> <li>Κυτταρίτιδα</li> <li>Σύσφιξη</li> <li>Ευεξία</li>",

bkr: "Περιοχή",
bkr_i: "<li>Γάμπες</li> <li>Μηροί και γλουτοί</li> <li>Πλάτη</li> <li>Άκρα</li> <li>Κοιλιά</li>",

prt: "Δυνατότητα<br> ρύθμισης παραμέτρων",
prt_i: "<li>Χρόνος</li> <li>Αρνητική πίεση</li> <li>Συχνότητα</li> <li>Λειτουργία</li> <li>Ένταση ραδιοσυχνότητας</li>",

elb: "Ύψος κρεβατιού που ρυθμίζεται ηλεκτρικά,<br> διαχειρίζεται από οθόνη αφής",

mni: "Πλεονεκτήματα σύγχρονων μη επεμβατικών τεχνολογιών",
mni_i: "<strong>Ένα από τα πλεονεκτήματα του μασάζ με κυλίνδρους βακούμ είναι ότι πρόκειται για μη χειρουργική θεραπεία, γνωστή ως μία μέθοδος μη επεμβατικής λιποαναρρόφησης.</strong> Η αντικυτταριτιδική θεραπεία δεν είναι το μόνο πλεονέκτημα που μπορεί να επιτευχθεί χρησιμοποιώντας τη μηχανή μασάζ με κυλίνδρους βακούμ Endermology. Η συνεδρία με κυλίνδρους βακούμ Endermology μπορεί επίσης να βοηθήσει στην ανακούφιση μικρών μυϊκών προβλημάτων, τη βελτίωση της κατάστασης του δέρματος και τη βελτίωση της αιματικής και λεμφικής κυκλοφορίας στην περιοχή που υποβάλλεται σε θεραπεία.",

mni_ii: "Αυτή η σύγχρονη τεχνική επιτρέπει τη μείωση της εμφάνισης της κυτταρίτιδας, ενεργοποιώντας τις φυσικές διεργασίες αποστράγγισης των λιπαρών ιστών. Χρησιμοποιώντας μια κεφαλή εξοπλισμένη με ανεξάρτητους και μοτορισμένους κυλίνδρους, το δέρμα αποκτά μια λεία και ευέλικτη όψη. Το ενεργό μασάζ με κυλίνδρους βακούμ είναι μια μη επεμβατική θεραπεία για την αντιμετώπιση τοπικών λιπαρών σακών και διαμόρφωση του σώματος.",

pwl: "Χρησιμοποιείται για την προώθηση απώλειας βάρους<br> και ενίσχυσης όλου του σώματος",
pwl_i: "<strong>Η θεραπεία με κυλίνδρους βακούμ προωθεί την απώλεια βάρους και την ενίσχυση όλου του σώματος, ενεργοποιώντας τις στοχευμένες περιοχές και τις λεμφατικές γραμμές.</strong> Αυτές οι ειδικές περιοχές παρέχουν στο κυκλοφορικό σας σύστημα την ενέργεια που απαιτείται για το μεταβολισμό των λιπών του σώματος, συμπεριλαμβανομένων των λιπών στις προβληματικές περιοχές και τα λίπη γύρω από τα εσωτερικά όργανα. Μια πιο αποτελεσματική κυκλοφορία μπορεί να διευκολύνει την απομάκρυνση των τοξινών και του περιττού νερού που προκαλούν τα προβλήματα με το βάρος σας. Η αναρρόφηση που προκαλείται βοηθά στην επίτευξη των λιπαρών που βρίσκονται σε βαθύτερο επίπεδο και στην απομόνωσή τους από τα ινούντα.",

htw: "Πώς λειτουργεί αυτή η τεχνολογία μείωσης της κυτταρίτιδας;",
htw_i: "<strong>Η κυτταρίτιδα είναι ο όρος που χρησιμοποιείται για να περιγράψει τις τσέπες λίπους που είναι παγιδευμένες και προκαλούν διάφορα αποτυπώματα στο δέρμα.</strong> Αυτό το διάταγμα είναι ανεπίπεδο και ασύμμετρο και έχει συνδεθεί με το εφέ της πορτοκαλί φλούδας. Το 90% των γυναικών μετά την εφηβεία αναπτύσσουν κυτταρίτιδα κάποια στιγμή κατά τη διάρκεια της ζωής τους. Οι μηροί, οι γλουτοί και την κοιλιά είναι οι πιο κοινές περιοχές για την ανάπτυξη κυτταρίτιδας. Παρόλο που συχνά συγχέεται με την παχυσαρκία, η κυτταρίτιδα δεν σχετίζεται πραγματικά με την παχυσαρκία, καθώς μπορεί να παρουσιαστεί και σε λεπτές γυναίκες. Η κυτταρίτιδα τείνει να αναπτύσσεται στα υποδόρια λιπώδη στρώματα. Αυτό το λιπώδες στρώμα έχει μια ξεχωριστή δομή σε σύγκριση με τα άλλα λιπώδη στρώματα, καθώς τα λιπώδη τμήματά του είναι δομημένα σε συγκεκριμένες κοιλότητες από μια αλυσίδα συνδεδεμένου ιστού περικλείοντάς το.",

htw_ii: "Οι ορμόνες βοηθούν επίσης στην αποθήκευση του λίπους μαζί με το μεταβολισμό του οργανισμού στο υποδόριο λιπώδες στρώμα. Η κυτταρίτιδα παρατηρείται κυρίως σε γυναίκες κατά τις ορμονικές αλλαγές τους, όπως η εφηβεία, η εγκυμοσύνη και η εμμηνόπαυση, καθώς και κατά την περίοδο που παίρνουν χάπια αντισύλληψης. Οι κυλίνδροι βακούμ βοηθούν στην εξάλειψη των μεταβολικών τοξινών που προκαλούνται από έντονη προσπάθεια για να βοηθήσουν στην αποτροπή του οδυνηρού μυϊκού πόνου μετά την άσκηση. Μαλακώνοντας τους μυϊκούς ιστούς, οι κύλινδροι αυξάνουν τη ρευστότητα και την ακρίβεια της κίνησης.",

ctdd: "Μπορεί η θεραπεία να είναι επικίνδυνη;",
ctdd_i: "<strong>Καθώς το μασάζ με κυλίνδρους βακούμ είναι μια μη επεμβατική θεραπεία, οι παρενέργειες που συνδέονται με τη διαδικασία είναι σχετικά μικρές.</strong> Οι ασθενείς μπορεί να βιώσουν ελαφρύ μωρά και σπασμένα αγγεία στο σημείο της θεραπείας, αλλά το μασάζ με κυλίνδρους βακούμ με κατάλληλη ρύθμιση του επιπέδου αναρρόφησης είναι ανώδυνο και δεν αφήνει μωρά στο δέρμα.",

ct_dr: "Προτεινόμενη διάρκεια και συχνότητα των θεραπειών",
ct_di: "<strong>Ο κατασκευαστής συνιστά μια κουρά ελάχιστα 10-15 συνεδρίες διάρκειας 30-45 λεπτών η κάθε μία, με 3 συνεδρίες ανά εβδομάδα.</strong> Αφού ολοκληρωθεί η κουρά, συνίσταται να διατηρούνται συνεδρίες συντήρησης κάθε 3-4 εβδομάδες για να διατηρηθούν τα αποτελέσματα.",

ct_dii: "<strong>Το πρώτο μήνα της θεραπείας είναι πολύ σημαντικό, καθώς θα στείλει σήματα για την ξυπνητική κλήση των κυττάρων.</strong> Είναι συνεπώς κρίσιμο να ακολουθείτε την συνταγή της θεραπείας. Σημειώστε ότι αυτή η θεραπεία είναι πάντα πιο αποτελεσματική όταν συνοδεύεται από έναν υγιή τρόπο ζωής, υγιεινές διατροφικές συνήθειες και φυσική δραστηριότητα.",

trt: "Θεραπείες",
trt_i: "10",

drd: "Διάρκεια",
drd_i: "30<sup>λεπτά</sup>",

s_ct: "Σετ περιλαμβάνει",
s_cti: "<li>Κεντρική μονάδα</li> <li>Κεφαλή θεραπείας (RF) 1 απολεπιστήρας</li> <li>Κεφαλή θεραπείας (μασάζ) 2 απολεπιστήρες</li>",

s_ctii: "<li>Σύνολο θεραπείας 5 τεμαχίων</li> <li>Καλώδιο τροφοδοσίας</li> <li>Επαγγελματική εκπαίδευση</li>",

sp_f: "Προδιαγραφές",
spf_s: "Μέγεθος",
spf_h: "Ύψος",
spf_ih: "80 εκατοστά (31,5 ίντσες)",

spf_w: "Πλάτος",
spf_iw: "85 εκατοστά (33,46 ίντσες)",

spf_l: "Μήκος",
spf_il: "210 εκατοστά (82,68 ίντσες)",

spf_t: "Τεχνολογία",
spf_ti: "RF, αρνητική πίεση, μασάζ με αυτόματους κυλίνδρους",

spf_u: "Αρνητική πίεση",
spf_ui: "690mBar",

spf_r: "Ραδιοσυχνότητα",
spf_ri: "500kHz",

spf_wr: "Εργαστηριακή συχνότητα",
spf_wri: "0-20Hz",

spf_idi: "Οθόνη ενδείξεων",
spf_idii: "LCD, οθόνη αφής",

spf_p: "Κατανάλωση ισχύος",
spf_pi: "750W",

spf_v: "Τάση",
spf_vi: "220-230V",

spf_n: "Επίπεδο θορύβου",
spf_ni: "65dB",
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
  