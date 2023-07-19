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
  mt_p_t:
    "<strong>The vacuum roller slimming use the vacuum suction principle and the unique roller</strong> to lift up the skin along with subcutaneous tissue, and then vacuum suction rollers roll forward and backward to do deeply and wave-like massage on the body and to do aerobic exercise as absorb, pinch and rolling for skin and adipose tissue to boost up the lymph detoxification function and blood circulation 4 times faster than usually, in the meantime, the deep massage can transform the fat into fatty acids, and drain out of body by lymph circulation, to consume fat effectively to get slimming body. Accelerate the metabolism of skin to enhance reproduce ability of the collagen protein and elastic fiber tissue, makes skin becomes better.",
  hw_e: "How works endermomassage ?",
  hw_p: "<strong>Vacuuming skin-fold expands blood vessels, increases metabolism or the rate of removal of toxins from the cell.</strong> Lymph is drained through the movement of the head roller of the treatment. Bipolar radio wave acts directly on the skin and subcutaneous tissue. Tissue warms to 60 degrees Celsius, by contracting the collagen fibers. The skin becomes more resilient and definitely thicker.",
  act_bn: "Activ Endermology Solo vacuum roller massage benefits",
  act_bni:
    "<li>Promote the production of collagen and elastin </li> <li>Excess water retention</li> <li>Help to fade away scars, stretch marks and orange peel</li> <li>Reduce &amp; Prevent Cellulite</li> <li>Improve Skin Texture &amp; Elasticity</li> <li>Eliminate Toxins</li> <li>Stimulate Blood &amp; Lymphatic Flow</li> <li>Tone &amp; Re-contour Body Shape</li>",
  act_bnii:
    "<li>Weight lost benefits</li> <li>No injections, anesthesia, or probing</li> <li>Massages can relieve stress and tension, and improve circulation</li> <li>Gives it a tight, toned appearance, improves blood flow</li> <li>No downtime or recovery period</li> <li>Painless</li> <li>Visible results after 8-10 sessions (results may vary)</li>",
  wr_a: "Wide range of applications",
  wr_ai:
    "<strong>Roller massage concept was found mainly to help reduce the appearance of scar tissue.</strong> But after establishing a many health care experts realized that Vacuum roller massage technology is very effective for cellulite reduction and improve skin elasticity. Vacuum roller massage treatment involves using motorized rollers to massage and manipulate the skin tissue. ",
  bk_p: "Breakdown <br> of programs",
  bk_e: "Effect",
  bk_ei:
    "<li>relaxation</li> <li>cellulite</li> <li>firming</li> <li>wellness</li>",
  bk_a: "Area",
  bk_ai:
    "<li>calves</li> <li>thighs and buttocks</li> <li>back</li> <li>emnants</li> <li>abdomen</li>",
  bk_g: "Possibility<br> to set parameters",
  bk_gi:
    "<li>time</li> <li>underpressure</li> <li>frequency</li> <li>mode</li> <li>RF intensity</li>",
  mdn: "MOdern non-invasive<br> technique benefis",
  mdn_pi:
    "<strong>A benefit of Vacuum roller massage is a non-surgical treatment as called as a one of non-invasive liposuction method.</strong> Anticellulite treatment is not the only benefit that can be reached using Vacuum roller massage machine Activ Endermology. Activ Endermology session can also help alleviate minor muscles, improve skin condition and improve blood and lymphatic circulation on treated area.",
  mdn_pii:
    "This modern technique allows to reduce the appearance of cellulite by activating natural processes of fat tissue drainage. Using head equipped with independent and motorized rolls, the skin finds its smooth and flexible aspect. Activ Endermology vacuum roller massage is a non-invasive treatment to treat localized fat pockets and shape the body.",
  sprf: "Super RF Fat Dissolve Slimming",
  sprf_p:
    "RF energy greatly promote fat resolving, make the fat cells resolve and liquid inject into lymph diversion system. Fat cells mainly are resolved to 3 chemical compound: water, glycerinum, fatty acid. Water and glycerinumm enter into lymph system and expelbody outside with the urine together. Fatty acid accerlate metabolism with the RF heating, absorbed by liver and transform to energy.Foused RF can rapidly and effectively resolve collagen fiber, separate collagen tissue structure. During the natural healing process,it motivates collagen fiber fibroblast, makes it actively create new collagen fiber. Newborn collagen regroup skin.",
  crh: "How this cellulite reduction<br> technology works ?",
  crh_pi:
    "<strong>Cellulite is the expression used to describe pockets of fat which are trapped and cause dimpling in the skin.</strong> This dimpling is irregular and patchy and has been identified with orange peel. 90% of post-adolescent women go on to develop cellulite at some time during their life. The thighs, buttocks and the abdomen are the most common areas for a woman to develop cellulite. Although it is often mistaken for obesity, cellulite is not actually obesity related because it can also take place in thin lean women. Cellulite tends to develop in the subcutaneous fat layers. This layer of fat is unique in its structure compared to the other layers because its fatty parts are structured into specific chambers by strands of linked tissue around it. ",
  crh_pii:
    "Hormones also help out with the storage of fat along with the body’s metabolism in the subcutaneous fat layer. Cellulite is for the most part found in women during their hormonal changes such as puberty, pregnancy, and menopause and also whilst taking birth control pills. The vacuum roller helps to eliminate the metabolic toxins caused by intense effort to help prevent delayed onset muscle soreness. Softening muscle tissues the rollers increase fluidity and precision of movement.",
  pwl_t: "Promotes weight loss<br> and full-body toning",
  pwl_ti:
    "<strong>Vacuum roller therapy promotes weight loss and full-body toning by stimulating targeted areas and running them along the lymphatic lines.</strong> These special areas provide your circulatory system with the energy required to metabolize body fat, including the fat in your problem areas and the fat around your internal organs. A more efficient circulation can facilitate the removal of toxins and excess water that are causing or increasing your weight problems. The suction created helps to reach fat located in the deeper level, and separate it from the fibers.",
  cbd_t: "Can the treatment be dangerous ?",
  cbd_ti:
    "<strong>Since vacuum roller massage is a non-invasive treatment, the side effects associated with the procedure are relatively minor.</strong> Patients may experience light bruising and broken capillaries at the treatment site, but vacuum roller massage with properly adjusted suction level is a painless and does not leave any bruises on the skin.",
  rcd_t: "Recommended duration and frequency of treatments",
  rcd_ti:
    "<strong>Manufacturer recommends a cure of at least 10-15 treatments of 30-45 minutes each with 3 treatments every week.</strong> Once the cure is completed, it is recommended to keep maintenance sessions every 3-4 weeks to maintain the results.",
  rcd_tii:
    "<strong>The first month of treatment is very important as it will send signals to awaken cells.</strong> It is therefore crucial to follow the treatment prescription. Note that this treatment is always more efficient when accompanied by a good life hygiene, healthy eating habits and physical activity.",
  ttmt: "Treatments",
  ttmt_i: "10",
  ttmd: "Duration",
  ttmd_i: "30<sup>min</sup>",
  ctnts: "Set contains",
  ctnts_i:
    "<strong>The first month of treatment is very important as it will send signals to awaken cells.</strong> It is therefore crucial to follow the treatment prescription. Note that this treatment is always more efficient when accompanied by a good life hygiene, healthy eating habits and physical activity.",
  ctnts_ii:
    "<li>treatment outfit 5 pcs</li> <li>power cable</li> <li>professional training</li>",
  glry: "Gallery",
  spcft: "Specification",
  sz_i: "Size",
  sz_h: "Heigh",
  sz_hi: "168,1 cm (66,1 inches)",
  sz_ht: "Height 2",
  sz_hti: "83,9 cm (33,03 inches)",
  sz_w: "Width",
  sz_wi: "56,8 cm (22,3 inches)",
  sz_d: "Depht",
  sz_di: "96 cm (37,8 inches)",
  sz_t: "Technology",
  sz_ti: "RF, negative pressure, message with self-propelled rollers",
  sz_u: "Underpressure",
  sz_ui: "690mBar",
  sz_f: "Radio frequency",
  sz_fi: "500kHz",
  sz_wf: "Working frequency",
  sz_wfi: "0-20kHz",
  sz_ds: "Display",
  sz_dsi: "LCD, TOuch Screen",
  sz_p: "Power consumption",
  sz_pi: "750W",
  sz_v: "Voltage",
  sz_vi: "220-230V",
  sz_nl: "Noise level",
  sz_nli: "65dB",

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

  mt_p: "Неинвазивный метод вакуумно-роллерной терапии",
  mt_p_t:
    "<strong>Вакуумный ролик для похудения использует принцип вакуумного всасывания и уникальный ролик</strong>, чтобы поднять кожу вместе с подкожной тканью, а затем вакуумные ролики катятся вперед и назад, чтобы сделать глубокий и волнообразный массаж на теле и выполнять аэробные упражнения, такие как поглощение, сжатие и перекатывание кожи и жировой ткани, чтобы повысить функцию детоксикации лимфы и кровообращение в 4 раза быстрее, чем обычно, в то же время глубокий массаж может преобразовать жир в жирные кислоты, и выводить из тела циркуляцию лимфы, чтобы эффективно потреблять жир для похудения тела. Ускорение метаболизма кожи для повышения способности воспроизводства белка коллагена и ткани эластичных волокон, делает кожу лучше.",
  hw_e: "Как работает эндермомассаж?",
  hw_p: "<strong>Вакуумирование кожной складки расширяет кровеносные сосуды, увеличивает метаболизм или скорость удаления токсинов из клетки.</strong> Лимфа дренируется за счет движения головного валика процедуры. Биполярная радиоволна действует напрямую на коже и подкожной клетчатке. Ткань нагревается до 60 градусов Цельсия, сокращая коллагеновые волокна. Кожа становится более упругой и определенно толще.",
  act_bn: "Преимущества вакуумно-роликового массажа Activ Endermology Solo",
  act_bni:
    "<li>Стимулирует выработку коллагена и эластина.</li> <li>Удерживает избыток воды.</li> <li>Помогает избавиться от шрамов, растяжек и апельсиновой корки.</li> <li>Уменьшает и усиливает ; Предотвращает целлюлит</li> <li>Улучшает текстуру и эластичность кожи</li> <li>Выводит токсины</li> <li>Стимулирует кровоток и лимфоток</li> <li>Тонизирует и восстанавливает контур формы тела</li>",
  act_bnii:
    "<li>Преимущества потери веса</li> <li>Без инъекций, анестезии или зондирования</li> <li>Массаж может снять стресс и напряжение, а также улучшить кровообращение</li> <li>Придает эффект подтянутый, подтянутый внешний вид, улучшает кровоток.</li> <li>Нет реабилитационного периода или периода восстановления.</li> <li>Безболезненно</li> <li>Видимые результаты после 8-10 сеансов (результаты могут отличаться)</li> ",
  wr_a: "Широкий спектр приложений",
  wr_ai:
    "<strong>Было обнаружено, что концепция роликового массажа в основном помогает уменьшить появление рубцовой ткани.</strong> Но после того, как многие эксперты в области здравоохранения установили, что технология вакуумного роликового массажа очень эффективна для уменьшения целлюлита и повышения эластичности кожи. Вакуумно-роликовый массаж включает в себя использование моторизованных роликов для массажа и манипулирования кожными тканями",
  bk_p: "Разбивка <br> программ",
  bk_e: "Эффект",
  bk_ei:
    "<li>расслабление</li> <li>целлюлит</li> <li>укрепление</li> <li>здоровье</li>",
  bk_a: "Площадь",
  bk_ai:
    "<li>икры</li> <li>бедра и ягодицы</li> <li>спина</li> <li>половинки</li> <li>живот</li>",
  bk_g: "Возможность<br>установить параметры",
  bk_gi:
    "<li>время</li> <li>пониженное давление</li> <li>частота</li> <li>режим</li> <li>интенсивность радиочастот</li>",
  mdn: "Преимущества современной неинвазивной<br> техники",
  mdn_pi:
    "<strong>Преимущество Вакуумно-роликового массажа заключается в безоперационном лечении, так называемом методе неинвазивной липосакции.</strong> Антицеллюлитное лечение - не единственное преимущество, которого можно достичь с помощью Вакуумно-роликового массажера. Activ Endermology Сеанс Activ Endermology также может помочь расслабить мелкие мышцы, улучшить состояние кожи и улучшить кровообращение и лимфатическую циркуляцию в обрабатываемой области.",
  mdn_pii:
    "Эта современная техника позволяет уменьшить проявления целлюлита, активизируя естественные процессы дренирования жировой ткани. С помощью головки, оснащенной независимыми и моторизованными роликами, кожа обретает гладкий и эластичный вид. Вакуумно-роликовый массаж Activ Endermology - это неинвазивный лечение локализованных жировых отложений и формирование фигуры.",
  sprf: "Супер-радиочастотное растворение жира для похудения",

  sprf_p:
    "РЧ-энергия значительно способствует расщеплению жира, заставляет жировые клетки рассасываться и вводить жидкость в систему отведения лимфы. Жировые клетки в основном расщепляются до 3 химических соединений: вода, глицерин, жирная кислота. Вода и глицерин попадают в лимфатическую систему и выталкивают тело наружу с мочой вместе.Жирные кислоты ускоряют метаболизм с РЧ-нагревом, поглощаются печенью и преобразуются в энергию.Foused RF может быстро и эффективно расщеплять коллагеновые волокна, отделять структуру коллагеновой ткани.Во время естественного процесса заживления он мотивирует фибробласты коллагеновых волокон, делает он активно создает новое коллагеновое волокно. Новорожденный коллаген перегруппировывает кожу.",
  crh: "Как работает эта технология<br>уменьшения целлюлита?",
  crh_pi:
    "<strong>Целлюлит — это выражение, используемое для описания карманов жира, которые задерживаются и вызывают ямочки на коже. </strong> Эти ямочки неправильной формы и пятнистые, идентифицируются с апельсиновой коркой. 90% подростков. У женщин в какой-то момент жизни развивается целлюлит.Бедра, ягодицы и живот являются наиболее распространенными областями, где у женщин развивается целлюлит.Хотя его часто ошибочно принимают за ожирение, целлюлит на самом деле не связан с ожирением, потому что он имеют место у худощавых худых женщин. Целлюлит имеет тенденцию развиваться в подкожно-жировых слоях. Этот слой жира уникален по своей структуре по сравнению с другими слоями, потому что его жировые части структурированы в особые камеры тяжами связанной ткани вокруг него. ",
  crh_pii:
    "Гормоны также помогают откладывать жир вместе с метаболизмом тела в подкожно-жировом слое. Целлюлит чаще всего встречается у женщин во время их гормональных изменений, таких как половое созревание, беременность и менопауза, а также при приеме противозачаточных средств. таблетки. Вакуумный ролик помогает устранить метаболические токсины, вызванные интенсивными усилиями, чтобы предотвратить отсроченную болезненность мышц. Смягчая мышечные ткани, ролики повышают плавность и точность движений.",
  pwl_t: "Способствует снижению веса<br> и тонусу всего тела",
  pwl_ti:
    "<strong>Вакуумно-роллерная терапия способствует снижению веса и тонизированию всего тела, стимулируя целевые области и проводя их по лимфатическим линиям.</strong> Эти особые области обеспечивают вашу систему кровообращения энергией, необходимой для метаболизма жировых отложений, в том числе жир в ваших проблемных зонах и жир вокруг ваших внутренних органов.Более эффективная циркуляция может способствовать удалению токсинов и избыточной воды, которые вызывают или увеличивают ваши проблемы с весом.Созданное всасывание помогает достичь жира, расположенного на более глубоком уровне, и отделить его от волокон.",
  cbd_t: "Может ли лечение быть опасным?",
  cbd_ti:
    "<strong>Поскольку вакуумно-роликовый массаж является неинвазивной процедурой, побочные эффекты, связанные с процедурой, относительно незначительны.</strong> У пациентов могут возникать легкие синяки и разрывы капилляров в месте воздействия, но вакуумно-роликовый массаж с правильно отрегулированный уровень всасывания безболезненный и не оставляет синяков на коже.",
  rcd_t: "Рекомендуемая продолжительность и частота процедур",
  rcd_ti:
    "<strong>Производитель рекомендует лечение, состоящее как минимум из 10–15 процедур по 30–45 минут каждая с 3 процедурами в неделю.</strong> После завершения лечения рекомендуется проводить поддерживающие сеансы каждые 3–4. недели для поддержания результатов.",
  rcd_tii:
    "<strong>Первый месяц лечения очень важен, так как он будет посылать сигналы для пробуждения клеток.</strong> Поэтому крайне важно следовать назначению лечения. Обратите внимание, что это лечение всегда более эффективно, когда сопровождается хорошим гигиена жизни, здоровое питание и физическая активность.",
  ttmt: "Лечение",
  ttmt_i: "10",
  ttmd: "Продолжительность",
  ttmd_i: "30<sup>мин</sup>",
  ctnts: "Набор содержит",
  ctnts_i:
    "<strong>Первый месяц лечения очень важен, так как он будет посылать сигналы для пробуждения клеток.</strong> Поэтому крайне важно следовать назначению лечения. Обратите внимание, что это лечение всегда более эффективно, когда сопровождается хорошим гигиена жизни, здоровое питание и физическая активность.",
  ctnts_ii:
    "<li>лечебное оборудование 5 шт.</li> <li>кабель питания</li> <li>профессиональная подготовка</li>",
  glry: "Галерея",
  spcft: "Спецификация",
  sz_i: "Размер",
  sz_h: "Высота",
  sz_hi: "168,1 см (66,1 дюйма)",
  sz_ht: "Высота 2",
  sz_hti: "83,9 см (33,03 дюйма)",
  sz_w: "Ширина",
  sz_wi: "56,8 см (22,3 дюйма)",
  sz_d: "Глубина",
  sz_di: "96 см (37,8 дюймов)",
  sz_t: "Технология",
  sz_ti: "RF, разрежение, сообщение с самоходными катками",
  sz_u: "Пониженное давление",
  sz_ui: "690 мбар",
  sz_f: "Радиочастота",
  sz_fi: "500 кГц",
  sz_wf: "Рабочая частота",
  sz_wfi: "0-20 кГц",
  sz_ds: "Показать",
  sz_dsi: "ЖК-дисплей, сенсорный экран",
  sz_p: "Потребляемая мощность",
  sz_pi: "750 Вт",
  sz_v: "Напряжение",
  sz_vi: "220-230В",
  sz_nl: "Уровень шума",
  sz_nli: "65дБ",

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
  mt_p: "Μη επεμβατική μέθοδος θεραπείας με κυλίνδρους κενού",
  mt_p_t:
    "<strong>Το αδυνάτισμα με κυλίνδρους κενού χρησιμοποιεί την αρχή αναρρόφησης κενού και τον μοναδικό κύλινδρο</strong> για να ανυψώσει το δέρμα μαζί με τον υποδόριο ιστό και, στη συνέχεια, οι κύλινδροι αναρρόφησης κενού κυλούν προς τα εμπρός και προς τα πίσω για να κάνουν βαθύ μασάζ που μοιάζει με κυματισμό στο σώμα και να κάνετε αερόβια άσκηση, όπως απορροφήστε, τσιμπήστε και κυλάτε το δέρμα και τον λιπώδη ιστό για να ενισχύσετε τη λειτουργία αποτοξίνωσης της λέμφου και την κυκλοφορία του αίματος 4 φορές πιο γρήγορα από ό,τι συνήθως, στο μεταξύ, το βαθύ μασάζ μπορεί να μετατρέψει το λίπος σε λιπαρά οξέα. και στραγγίζουν από το σώμα μέσω της κυκλοφορίας της λέμφου, για να καταναλώνουν αποτελεσματικά το λίπος για να αδυνατίζουν το σώμα. Επιταχύνουν τον μεταβολισμό του δέρματος για να ενισχύσουν την ικανότητα αναπαραγωγής της πρωτεΐνης κολλαγόνου και των ελαστικών ινών ιστών, κάνουν το δέρμα να γίνεται καλύτερο.",
  hw_e: "Πώς λειτουργεί το endermomassage;",
  hw_p: "<strong>Η σκούπα με ηλεκτρική σκούπα διευρύνει τα αιμοφόρα αγγεία, αυξάνει τον μεταβολισμό ή τον ρυθμό απομάκρυνσης των τοξινών από το κύτταρο.</strong> Η λέμφος παροχετεύεται μέσω της κίνησης του κυλίνδρου της κεφαλής της θεραπείας. Τα διπολικά ραδιοκύματα δρα άμεσα. στο δέρμα και στον υποδόριο ιστό. Ο ιστός θερμαίνεται στους 60 βαθμούς Κελσίου, με τη συστολή των ινών κολλαγόνου. Το δέρμα γίνεται πιο ανθεκτικό και σίγουρα πιο παχύ.",
  act_bn: "Οφέλη από το μασάζ με ρολό κενού Activ Endermology Solo",
  act_bni:
    "<li>Προώθηση της παραγωγής κολλαγόνου και ελαστίνης </li> <li>Υπερβολική κατακράτηση νερού</li> <li>Βοηθά στο ξεθώριασμα των ουλών, των ραγάδων και της φλούδας πορτοκαλιού</li> <li>Μείωση &amp ; Πρόληψη της κυτταρίτιδας</li> <li>Βελτίωση της υφής και της ελαστικότητας του δέρματος</li> <li>Εξάλειψη των τοξινών</li> <li>Τόνωση του αίματος και της λεμφικής ροής</li> <li>Τόνος και ανανέωση σχήμα σώματος</li>",
  act_bnii:
    "<li>Οφέλη απώλειας βάρους</li> <li>Χωρίς ενέσεις, αναισθησία ή ανίχνευση</li> <li>Το μασάζ μπορεί να ανακουφίσει το άγχος και την ένταση και να βελτιώσει την κυκλοφορία</li> <li>Δίνει σφιχτή, τονισμένη εμφάνιση, βελτιώνει τη ροή του αίματος</li> <li>Χωρίς χρόνο διακοπής λειτουργίας ή περίοδο αποκατάστασης</li> <li>Ανώδυνη</li> <li>Ορατά αποτελέσματα μετά από 8-10 συνεδρίες (τα αποτελέσματα ενδέχεται να διαφέρουν)</li >",
  wr_a: "Ευρεία γκάμα εφαρμογών",
  wr_ai:
    "<strong>Η έννοια του μασάζ με κυλίνδρους βρέθηκε να βοηθά κυρίως στη μείωση της εμφάνισης ουλώδους ιστού.</strong> Όμως, μετά την καθιέρωση πολλών ειδικών στον τομέα της υγειονομικής περίθαλψης, συνειδητοποίησαν ότι η τεχνολογία μασάζ με κυλίνδρους κενού είναι πολύ αποτελεσματική για τη μείωση της κυτταρίτιδας και τη βελτίωση της ελαστικότητας του δέρματος. Η θεραπεία μασάζ με κυλίνδρους κενού περιλαμβάνει τη χρήση μηχανοκίνητων κυλίνδρων για μασάζ και χειρισμό του ιστού του δέρματος",
  bk_p: "Ανάλυση <br> προγραμμάτων",
  bk_e: "Εφέ",
  bk_ei:
    "<li>χαλάρωση</li> <li>κυτταρίτιδα</li> <li>σύσφιξη</li> <li>ευεξία</li>",
  bk_a: "Περιοχή",
  bk_ai:
    "<li>γάμπες</li> <li>μηροί και γλουτοί</li> <li>πλάτη</li> <li>κατάλοιπα</li> <li>κοιλιά</li>",
  bk_g: "Δυνατότητα<br> ορισμού παραμέτρων",
  bk_gi:
    "<li>χρόνος</li> <li>υποπίεση</li> <li>συχνότητα</li> <li>λειτουργία</li> <li>ένταση RF</li>",
  mdn: "Σύγχρονη μη επεμβατική<br> τεχνική benefis",
  mdn_pi:
    "<strong>Ένα όφελος από το μασάζ με ρολό κενού είναι μια μη χειρουργική θεραπεία που ονομάζεται μη επεμβατική μέθοδος λιποαναρρόφησης.</strong> Η θεραπεία κατά της κυτταρίτιδας δεν είναι το μόνο όφελος που μπορεί να επιτευχθεί με τη χρήση της μηχανής μασάζ με ρολό κενού Activ Endermology. Η συνεδρία Activ Endermology μπορεί επίσης να βοηθήσει στην ανακούφιση των μικρών μυών, στη βελτίωση της κατάστασης του δέρματος και στη βελτίωση της κυκλοφορίας του αίματος και της λέμφου στην υπό θεραπεία περιοχή.",
  mdn_pii:
    "Αυτή η σύγχρονη τεχνική επιτρέπει τη μείωση της εμφάνισης της κυτταρίτιδας ενεργοποιώντας τις φυσικές διαδικασίες αποστράγγισης του λιπώδους ιστού. Χρησιμοποιώντας την κεφαλή εξοπλισμένη με ανεξάρτητα και μηχανοκίνητα ρολά, το δέρμα βρίσκει την ομαλή και εύκαμπτη όψη του. Το μασάζ κενού κυλίνδρου Activ Endermology είναι ένα μη επεμβατικό θεραπεία για τη θεραπεία των τσέπες τοπικού λίπους και τη διαμόρφωση του σώματος.",
  sprf: "Super RF Fat Dissolve Slimming",
  sprf_p:
    "Η ενέργεια ραδιοσυχνοτήτων προωθεί σε μεγάλο βαθμό τη διάλυση λίπους, κάνει τα λιποκύτταρα να διαλυθούν και να εγχυθεί υγρό στο σύστημα εκτροπής της λέμφου. Τα λιποκύτταρα κυρίως αναλύονται σε 3 χημικές ενώσεις: νερό, γλυκερίνη, λιπαρό οξύ. Το νερό και η γλυκερίνη εισέρχονται στο λεμφικό σύστημα και διώχνουν το σώμα έξω με τα ούρα μαζί. Τα λιπαρά οξέα επιταχύνουν τον μεταβολισμό με τη θέρμανση ραδιοσυχνοτήτων, απορροφώνται από το συκώτι και μετατρέπονται σε ενέργεια. Το συγχωνευμένο RF μπορεί γρήγορα και αποτελεσματικά να επιλύσει τις ίνες κολλαγόνου, να διαχωρίσει τη δομή του ιστού του κολλαγόνου. δημιουργεί ενεργά νέες ίνες κολλαγόνου. Το νεογέννητο κολλαγόνο ανασυντάσσει το δέρμα.",
  crh: "Πώς λειτουργεί αυτή η τεχνολογία μείωσης της κυτταρίτιδας<br>;",
  crh_pi:
    "<strong>Κυτταρίτιδα είναι η έκφραση που χρησιμοποιείται για να περιγράψει θύλακες λίπους που παγιδεύονται και προκαλούν λακκάκια στο δέρμα.</strong> Αυτό το λακκάκι είναι ακανόνιστο και αποσπασματικό και έχει ταυτιστεί με τη φλούδα πορτοκαλιού. Το 90% των μετά την εφηβεία Οι γυναίκες αναπτύσσουν κυτταρίτιδα κάποια στιγμή κατά τη διάρκεια της ζωής τους. Οι μηροί, οι γλουτοί και η κοιλιά είναι οι πιο συχνές περιοχές όπου μια γυναίκα εμφανίζει κυτταρίτιδα. εμφανίζεται σε αδύνατες γυναίκες. Η κυτταρίτιδα τείνει να αναπτύσσεται στα στρώματα του υποδόριου λίπους. Αυτό το στρώμα λίπους είναι μοναδικό στη δομή του σε σύγκριση με τα άλλα στρώματα, επειδή τα λιπαρά του μέρη είναι δομημένα σε συγκεκριμένους θαλάμους από κλώνους συνδεδεμένου ιστού γύρω του",
  crh_pii:
    "Οι ορμόνες βοηθούν επίσης στην αποθήκευση λίπους μαζί με τον μεταβολισμό του σώματος στο υποδόριο λίπος. Η κυτταρίτιδα εντοπίζεται ως επί το πλείστον στις γυναίκες κατά τη διάρκεια των ορμονικών τους αλλαγών όπως η εφηβεία, η εγκυμοσύνη και η εμμηνόπαυση και επίσης κατά τη λήψη αντισυλληπτικών χάπια. Ο κύλινδρος κενού βοηθά στην εξάλειψη των μεταβολικών τοξινών που προκαλούνται από την έντονη προσπάθεια για την πρόληψη καθυστερημένης εμφάνισης μυϊκού πόνου. Μαλακώνοντας τους μυϊκούς ιστούς οι κύλινδροι αυξάνουν τη ρευστότητα και την ακρίβεια της κίνησης.",
  pwl_t: "Προωθεί την απώλεια βάρους<br> και την τόνωση ολόκληρου του σώματος",
  pwl_ti:
    "<strong>Η θεραπεία με κυλίνδρους κενού προάγει την απώλεια βάρους και την τόνωση ολόκληρου του σώματος διεγείροντας στοχευμένες περιοχές και εκτελώντας τις κατά μήκος των λεμφικών γραμμών.</strong> Αυτές οι ειδικές περιοχές παρέχουν στο κυκλοφορικό σας σύστημα την ενέργεια που απαιτείται για τον μεταβολισμό του σωματικού λίπους, συμπεριλαμβανομένου του σωματικού λίπους. το λίπος στις προβληματικές περιοχές σας και το λίπος γύρω από τα εσωτερικά σας όργανα. Μια πιο αποτελεσματική κυκλοφορία μπορεί να διευκολύνει την απομάκρυνση των τοξινών και της περίσσειας νερού που προκαλούν ή αυξάνουν τα προβλήματα βάρους σας. Η αναρρόφηση που δημιουργείται βοηθά στην επίτευξη λίπους που βρίσκεται στο βαθύτερο επίπεδο και διαχωρίστε το από τις ίνες.",
  cbd_t: "Μπορεί η θεραπεία να είναι επικίνδυνη;",
  cbd_ti:
    "<strong>Δεδομένου ότι το μασάζ με κυλίνδρους κενού είναι μια μη επεμβατική θεραπεία, οι παρενέργειες που σχετίζονται με τη διαδικασία είναι σχετικά μικρές.</strong> Οι ασθενείς μπορεί να εμφανίσουν ελαφρύ μώλωπες και σπασμένα τριχοειδή αγγεία στο σημείο της θεραπείας, αλλά το μασάζ με κύλινδρο κενού με κύλινδρο με κενό με ρολό με τη διαδικασία είναι σχετικά μικρές.</strong> Το σωστά ρυθμισμένο επίπεδο αναρρόφησης είναι ανώδυνο και δεν αφήνει μώλωπες στο δέρμα.",
  rcd_t: "Συνιστώμενη διάρκεια και συχνότητα θεραπειών",
  rcd_ti:
    "<strong>Ο κατασκευαστής συνιστά μια θεραπεία τουλάχιστον 10-15 θεραπειών των 30-45 λεπτών η καθεμία με 3 θεραπείες κάθε εβδομάδα.</strong> Μόλις ολοκληρωθεί η θεραπεία, συνιστάται να συνεχίζονται οι συνεδρίες συντήρησης κάθε 3-4 εβδομάδες για να διατηρηθούν τα αποτελέσματα.",
  rcd_tii:
    "<strong>Ο πρώτος μήνας της θεραπείας είναι πολύ σημαντικός καθώς θα στείλει σήματα για την αφύπνιση των κυττάρων.</strong> Επομένως, είναι σημαντικό να ακολουθήσετε τη συνταγή της θεραπείας. Σημειώστε ότι αυτή η θεραπεία είναι πάντα πιο αποτελεσματική όταν συνοδεύεται από καλή θεραπεία. υγιεινή της ζωής, υγιεινές διατροφικές συνήθειες και σωματική δραστηριότητα.",
  ttmt: "Θεραπεία",
  ttmt_i: "10",
  ttmd: "Διάρκεια",
  ttmd_i: "30<sup>λεπτά</sup>",
  ctnts: "Το σύνολο περιέχει",
  ctnts_i:
    "<strong>Ο πρώτος μήνας της θεραπείας είναι πολύ σημαντικός καθώς θα στείλει σήματα για την αφύπνιση των κυττάρων.</strong> Επομένως, είναι σημαντικό να ακολουθήσετε τη συνταγή της θεραπείας. Σημειώστε ότι αυτή η θεραπεία είναι πάντα πιο αποτελεσματική όταν συνοδεύεται από καλή θεραπεία. υγιεινή της ζωής, υγιεινές διατροφικές συνήθειες και σωματική δραστηριότητα.",
  ctnts_ii:
    "<li>στολή περιποίησης 5 τμχ</li> <li>καλώδιο τροφοδοσίας</li> <li>επαγγελματική εκπαίδευση</li>",
  glry: "Gallery",
  spcft: "Προδιαγραφές",
  sz_i: "Μέγεθος",
  sz_h: "Ύψος",
  sz_hi: "168,1 cm (66,1 ίντσες)",
  sz_ht: "Ύψος 2",
  sz_hti: "83,9 cm (33,03 ίντσες)",
  sz_w: "Πλάτος",
  sz_wi: "56,8 cm (22,3 ίντσες)",
  sz_d: "Depht",
  sz_di: "96 cm (37,8 ίντσες)",
  sz_t: "Τεχνολογία",
  sz_ti: "RF, αρνητική πίεση, μήνυμα με αυτοκινούμενους κυλίνδρους",
  sz_u: "Υποπίεση",
  sz_ui: "690mBar",
  sz_f: "Ραδιοφωνική συχνότητα",
  sz_fi: "500kHz",
  sz_wf: "Συχνότητα εργασίας",
  sz_wfi: "0-20kHz",
  sz_ds: "Εμφάνιση",
  sz_dsi: "LCD, οθόνη αφής",
  sz_p: "Κατανάλωση ενέργειας",
  sz_pi: "750W",
  sz_v: "Τάση",
  sz_vi: "220-230V",
  sz_nl: "Επίπεδο θορύβου",
  sz_nli: "65dB",

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
