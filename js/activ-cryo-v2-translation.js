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

  header: "Cryosauna for cryotherapy treatment",

  //body
  description:
    "Activ Cryo V2 is a cryosauna for cryotherapy treatment which exposes the body to extremely low temperatures for several minute by using advanced method of liquid nitrogen cryo technology. The device has all the required CE and B certificates.",
  certificates: "Certificates",
  get_quote: "Get a quote",
  efficient_therapy: "Efficient therapy<br> in low temperatures",
  scientific_research:
    "According to scientific and medical research, the optimum efficiency of whole body cryotherapy procedures, is achieved once the body is exposed to temperatures up to -120-170°C (-184-280F) for a 1-3 minutes, reducing the skin’s surface temperature.",
  temperature: "Temperature inside<br> cabin",
  timeless: "Timeless solutions for your business",
  fitness: "Fitness clubs",
  medical_center: "Medical<br>centers",
  physiotherapy: "Physiotherapy",
  best_solution: "Best solution for your business",
  clinics: "Clinics",
  hotel_gym: "Hotel gyms",
  research_clinical:
    "<strong>Research of experts and clinical studies show clients may experience relief from muscle pain and soreness after cryotherapy sessions.</strong> This makes cryotherapy more effective alternative recovery method than the old applications such as ice packs or ice bath immersion. Cryotherapy sessions could relieve muscle pain, rheumatic spasm, swelling, and joint stiffness.",
  cryo_implementation:
    "<strong>Cryotherapy has now been implemented in many spas, medical offices and cryo fitness studios.</strong>",
  screens: "Built-in 2x large,<br> readable screens",
  display: "Digital display<br> inside cabin",
  color_touch: "Color Touch<br> screen panel",
  multi_blow: "Multi-blow system evenly distribute temperature inside cabin",
  airflow_system:
    "<strong>Activ Cryo V2 as the only cryotherapy cabin has been equipped with an airflow system,</strong> which causes even distribution of low temperature around the whole body of the patient. Each part of the body receives the same cold dose throughout the treatment process.",
  positive_revolution: "A positive revolution for your health",
  benefits_list:
    "The list of benefits include improved muscle and joint function, the soothing and elimination of pain, increased blood circulation, chronic pain recovery and fast-tracked injury recovery.",
  body_performance: "Increase body<br> performance",
  recovery: "Faster<br> recovery",
  quicker: "times quicker",
  sports_medicine: "Best solution<br> for sports medicine &amp; pain managment",
  chronic:
    "<strong>Growing incidence of chronic medical conditions and demand fast recovery after injuries and pain relief solutions,</strong> coupled with distress caused due to unfavorable temperature changes, continue to stimulate the adoption of cryotherapy in the world.",
  benefits:
    "<strong>Decreasing inflammation, increasing metabolism and reduction of chronic pain and fatigue</strong> are some of the essential benefits of cryotherapy that will continue of compel the use of cryochambers all around the world.",
  aching_muscles:
    "<strong>If you are an avid runner and go to the gym regularly you probably deal with aching muscles more often than not.</strong><br> That is why cryotherapy comes to help and it is a rising trend offered by spas, healthcare facilities, sports medicine &amp; training, slimming centres, fitness centres and wellness centres.",
  popularity:
    "It’s gaining popularity for its supposed beneficial effects on fast recovery, pain reduction, eczema, depression, anxiety, exercise recovery, quick calories burn, immune boost and many more.",
  weight_loss: "Supports weight loss",
  bone_chilling:
    "<strong>This bone chilling procedure has also been shown to burn up to 600 – 800 calories, increase the metabolism, release endorphins, improve sleep, reduce cellulite and reproduce collagen.</strong> With an increasing demand, cryotherapy chambers are implemented in various settings including spas, medical clinics, gyms, sporting facilities and cryotherapy centres.",
  burn: "Burn up to",
  burned_calories: "800<br> <small>calories</small>",
  cryotherapy: "Cryotherapy treatments benefits<br>",
  cooling_strategies:
    "Cooling strategies have been used for centuries to limit fever and improve performances or improve recovery.",
  increased_physical:
    "<strong>Increase strength,<br> power and agility</strong>",
  regeneration:
    "<small>Faster regeneration of muscles and joints<br> <strong>up to 80%</strong></small>",
  mental_health: "<strong>Improve Mental Health</strong>",
  reduced_anxiety:
    "<small>Reduced depression or anxiety symptoms<br> </small><small><strong>up to 50%</strong></small>",
  quick_weight_loss: "<strong>Quick weight<br> loss</strong>",
  accelerates_metabolism:
    "<small>It accelerates metablism for all day<br> <strong>up to 65%</strong></small>",
  health_benefits: "Health benefits of using<br> cryotherapy treatments",
  recovery_performance: "Recovery &amp; performance",
  improved_performance:
    "The reason why so many top athletes use cryotherapy is its ability to speed up recovery, improve the training results and overall performance.",
  arthritis: "Pain &amp; arthritis",
  muscle_joint_pain:
    "Cryotherapy’s anti-inflammatory effects can drastically reduce muscle and joint pain. It is also known to help people suffering from Arthritis.",
  over: "over",
  treatment_shorter: "shorter treatment<br> time vs. ice bath",

  //Copy-Paste
  norepinephrine:
    "Cryotherapy causes the body to produce a hormone called Norepinephrine. This increases the fat metabolism up to 6 days and the impact of one session is equivalent to burning 500-800 calories.",
  stress_anxiety: "Stress &amp; anxiety",
  endorphins:
    "During Cryotherapy your body releases endorphins which in return can affect your overall mood in a positive way. Cryotherapy can alleviate stress, anxiety, and depression by simply making you feel happier. A positive mind can do wonders in improving yourself and your life.",
  detoxification: "Detoxification",
  blood_circulation:
    "The freezing temperatures in Cryotherapy increase your blood circulation which makes it easier to deliver oxygen, nutrients, and enzymes throughout the body.",
  insomnia: "Insomnia",
  insomnia_description:
    "Due to the same endorphins mentioned above, Cryotherapy can help anyone struggling with Insomnia. Not getting enough sleep can sometimes be deeply entwined with any stress or weight gain you may be experiencing. Insomnia can cause a handful of problems you didn’t have before so a good nights sleep is important if you want to function at your best.",
  inflammation: "Inflammation",
  inflammation_description:
    "Cryotherapy can reduce any kind of inflammation on your body with the help of a variety of enzymes and by boosting the immune system.",
  collagen: "Collagen Production",
  collagen_description:
    "Cryotherapy can boost your collagen production which is an essential anti-aging building block. Increased collagen can reduce the appearance of wrinkles by plumping the skin and increasing elasticity creating a more youthful and smoother look.",
  skin: "Skin Conditions",
  skin_description_1:
    "If you suffer from any skin conditions such as acne or even eczema, you might want to give Cryotherapy a try. Many of the benefits mentioned above play a part in improving the skin by alleviating stress, increasing collagen or reducing inflammation.",
  skin_description_2:
    "Cryotherapy encourages cell rejuvenation and can expel toxins out of your body. All these things working together can clear up the skin and give relief to Eczema or Psoriasis-like symptoms.",
  general_health: "General Health &amp; Wellness",
  general_health_description:
    "Constricting the benefits of Cryotherapy to only 10 is not easy. It is a powerful treatment that promotes a lot of good to your general health and wellness. Whether you’re looking for anti-aging results, improved mental health, help with weight loss or reduce pain, Cryotherapy is worth trying.",
  thermovision: "Thermovision <br>camera",
  thermovision_use:
    "Safely control body temperature during cryotherapy treatment",
  intuitive: "Intuitive <br>interface",
  intuitive_description:
    "Easily set up your cryotherapy treatment and make changes",
  auto_drying: "Auto drying <br>system",
  auto_drying_description:
    "An efficient system that dries the entire cabin inside",
  hq_build: "High quality<br>build",
  hq_build_description:
    "The cabin is made of high-quality materials and tempered glass",
  modern: "Modern look",
  modern_description:
    "Modern shape and LED backlight give the cryotherapy cabin a unique look",
  pre_freeze: "Pre-freeze mode",
  pre_freeze_description:
    "The purpose of this function is to cool the interior of the cabin to the appropriate temperature in order to obtain the best efficiency and economy of liquid nitrogen consumption.",
  dry_mode: "Dry mode",
  dry_mode_description:
    "The function effectively dries the entire interior of the cryotherapy cabin. It also removal cold gas from the cryosauna cabin to outside of the room.",
  cryo_screen: "Cryotherapy treatment<br>screen",
  cryo_screen_description:
    "During the cryotherapy treatment, the screen will display the time to the end of the treatment, the temperature inside the cabin and of the patient body. Interface also enables the possibility of raising or lowering the client during the procedure.",
  interface: "Intuitive interface",
  interface_description:
    "<strong>The interface has been designed to make settings easily and quickly.</strong> The main goal that we wanted to achieve was the maximum ease and legibility for the operator to choose the right settings for the cryotherapy treatment and the use of the capsule.",
  program_select: "Program select",
  program_select_description:
    "<strong>Operator has possibility to select 3 predefined programs and a manual</strong> option that allows to adjust the cryotherapy treatment to the client's needs.",
  pre_freeze: "Pre-freeze mode",
  pre_freeze_description:
    "The purpose of this function is to cool the interior of the cabin to the appropriate temperature in order to obtain the best efficiency and economy of liquid nitrogen consumption.",
  lower_temperature: "Lower temperature<br> in the cabin",
  regular_chamber: "Regular cryotherapy chamber",
  immune_boost:
    "Boosting your immune<br> system helps you destroy<br> viruses quicker </h2>",
  physical_boost_description:
    "<strong>During cryotherapy your body’s production of anti-inflammatory hormones significantly increases, reducing inflammation in the body.</strong> This reduced inflammation helps your body heal and recover faster, and reduces pain in problem areas. During the session, your body also undergoes low doses of physical stress from the cold. Such stress keeps your cells on their toes and can then bring about an adaptive response which strengthens your immune system. This happens because of the increase of your body’s immune cells. This boost to your immune system helps you destroy viruses and fight off tumor factors.",
  comfortable: "More comfortable and not painful",
  open_roof:
    "<strong>Thanks to the implementation of the innovative solutions, such as an open roof,</strong> patients suffering from claustrophobia can safely use Activ Cryo V2.<br> Also this technology, unlike an ice bath or immersion, cryotherapy is not painful. During the treatment, the skin temperature will decrease over 2 to 3 minutes inside the chamber. This process will rejuvenate your body, skin and mind.",
  shorter_duration: "Shorter treatment time<br> and more effects",
  treatment_time: "<strong>2 min treatment</strong> in Activ Cryo V2",
  ice_bath: "<strong>20 min</strong> in Ice bath",
  comparison: "Compare<br> crytoherapy vs ice bath",
  ice_bath_specifications: "Ice Bath",
  extreme_cold: "Extreme Cold Air up to -180",
  treatment_delivery: "Treatment Delivery",
  cold_water: "Cold Water (8<sup>o</sup>C to 16<sup>o</sup>C)",
  skin_temp_1: "0<sup>o</sup>C to 1.6<sup>o</sup>C",
  resulting_skin_temp: "Resulting Skin Temp.",
  skin_temp_2: "8<sup>o</sup>C to 16<sup>o</sup>C",
  treatment_duration_1: "2 - 3 minutes",
  treatment_duration: "Treatment Time",
  treatment_duration_2: "15 to 20 minutes",
  high_comfort: "High",
  comfort_level: "Level of Comfort",
  low_comfort: "Low",
  blood_cycle: "Vasodilaion/Int. blood cycle",
  bodily_response: "Response from Body",
  warmed_blood: "Warmed Blood to peripherals",
  blood_enriched_yes: "Yes",
  blood_enriched: "Enriches Blood",
  blood_enriched_no: "No",
  increased_hemoglobin_yes: "Yes",
  increased_hemoglobin: "Increases Hemoglobin",
  increased_hemoglobin_no: "No",
  blood_temp_increased: "Increased",
  blood_temp: "Blood Temperature Change",
  blood_temp_decreased: "Decreased",
  blood_circulation_yes: "Yes",
  blood_circulation: "Improves Blood Circulation",
  blood_circulation_no: "No",
  immune_system_yes: "Yes",
  immune_system: "Improves Immune System",
  immune_system_no: "No",
  hyperthermia_no: "No",
  hyperthermia: "Risk of Hyperthermia",
  hyperthermia_yes: "Yes",
  endorphin_release_yes: "Yes",
  endorphin_release: "Release of Endorphins",
  endorphin_release_no: "No",
  energy_boost: "Immediately / Boost energy",
  exercise_return: "Time to Return to Excercise",
  exercise_return_hours: "12 to 24 Hours",
  improves_skin_yes: "Yes",
  improves_skin: "Improves Skin Health",
  improves_skin_no: "No",
  increases_collagen_yes: "Yes",
  increases_collagen: "Increases Collagen Production",
  increases_collagen_no: "No",

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
  description:
    "Activ Cryo V2 - это криосауна для криотерапии, которая подвергает организм воздействию чрезвычайно низких температур в течение нескольких минут с использованием передовых методов криотехнологии с жидким азотом. Устройство имеет все необходимые сертификаты CE и B.",
  certificates: "Сертификаты",
  get_quote: "Получить котировку",
  efficient_therapy: "Эффективная терапия<br> при низких температурах",
  scientific_research:
    "Согласно научным и медицинским исследованиям, оптимальная эффективность процедур целого тела криотерапии достигается, когда организм подвергается воздействию температур до -120-170°C (-184-280F) в течение 1-3 минут, снижая поверхностную температуру кожи.",
  temperature: "Температура внутри<br> кабины",
  timeless: "Вечные решения для вашего бизнеса",
  fitness: "Фитнес-клубы",
  medical_center: "Медицинские<br>центры",
  physiotherapy: "Физиотерапия",
  best_solution: "Лучшее решение для вашего бизнеса",
  clinics: "Клиники",
  hotel_gym: "Гостиничные тренажерные залы",
  research_clinical:
    "<strong>Исследования экспертов и клинические исследования показывают, что клиенты могут испытывать облегчение от мышечной боли и напряжения после сеансов криотерапии.</strong> Это делает криотерапию более эффективным альтернативным методом восстановления по сравнению с традиционными методами, такими как ледяные компрессы или купание в ледяной воде. Сеансы криотерапии могут облегчать мышечную боль, ревматические спазмы, отечность и скованность суставов.",
  cryo_implementation:
    "<strong>Криотерапия сейчас внедрена во многих спа-салонах, медицинских офисах и студиях криофитнеса.</strong>",
  screens: "Встроенные 2 больших,<br> читаемых экрана",
  display: "Цифровой дисплей<br> внутри кабины",
  color_touch: "Цветной<br> сенсорный экран",
  multi_blow:
    "Система множественного распределения воздушного потока равномерно распределяет температуру внутри кабины",
  airflow_system:
    "<strong>Activ Cryo V2 как единственная криотерапевтическая кабина оснащена системой воздушного потока,</strong> обеспечивающей равномерное распределение низкой температуры по всему телу пациента. Каждая часть тела получает одинаковую холодовую дозу на протяжении всего процесса лечения.",
  positive_revolution: "Положительная революция для вашего здоровья",
  benefits_list:
    "Список преимуществ включает улучшение функции мышц и суставов, снятие боли и успокоение, увеличение кровообращения, восстановление при хронической боли и ускоренное восстановление после травмы.",
  body_performance: "Повышение физической<br> эффективности",
  recovery: "Более быстрое<br> восстановление",
  quicker: "раз быстрее",
  sports_medicine:
    "Лучшее решение<br> для спортивной медицины &amp; управления боли",
  chronic:
    "<strong>Растущая заболеваемость хроническими заболеваниями и потребность в быстром восстановлении после травм и решениях по облегчению боли,</strong> в сочетании с дискомфортом, вызванным неблагоприятными изменениями температуры, продолжают стимулировать внедрение криотерапии во всем мире.",
  benefits:
    "<strong>Снижение воспаления, увеличение обмена веществ и уменьшение хронической боли и усталости</strong> - это некоторые из основных преимуществ криотерапии, которые продолжат побуждать использование криокамер по всему миру.",
  aching_muscles:
    "<strong>Если вы увлеченный бегун и регулярно ходите в спортзал, вероятно, вы часто сталкиваетесь с болезненными мышцами.</strong><br> Вот почему криотерапия приходит на помощь, и это становится все более популярным трендом, предлагаемым спа-салонами, медицинскими учреждениями, спортивной медициной & тренировками, центрами по коррекции фигуры, фитнес-центрами и учреждениями здоровья.",
  popularity:
    "Криотерапия становится популярной из-за предполагаемых полезных эффектов на быстрое восстановление, снижение боли, экзему, депрессию, тревогу, восстановление после физических нагрузок, быстрое сжигание калорий, укрепление иммунной системы и многое другое.",
  weight_loss: "Поддерживает потерю веса",
  bone_chilling:
    "<strong>Эта кости охлаждающая процедура также способствует сжиганию до 600 – 800 калорий, увеличению обмена веществ, высвобождению эндорфинов, улучшению сна, уменьшению целлюлита и воспроизведению коллагена.</strong> В условиях растущего спроса, криотерапевтические камеры внедряются в различных местах, включая спа-салоны, медицинские клиники, спортивные залы и центры криотерапии.",
  burn: "Сжигайте до",
  burned_calories: "800<br> <small>калорий</small>",
  cryotherapy: "Преимущества криотерапии <br>",
  cooling_strategies:
    "Охлаждающие стратегии использовались веками для снижения лихорадки и улучшения результатов или восстановления.",
  increased_physical:
    "<strong>Увеличение силы,<br> мощности и подвижности</strong>",
  regeneration:
    "<small>Более быстрая регенерация мышц и суставов<br> <strong>до 80%</strong></small>",
  mental_health: "<strong>Улучшение психического здоровья</strong>",
  reduced_anxiety:
    "<small>Снижение симптомов депрессии или тревоги<br> </small><small><strong>до 50%</strong></small>",
  quick_weight_loss: "<strong>Быстрое снижение<br> веса</strong>",
  accelerates_metabolism:
    "<small>Ускоряет обмен веществ на протяжении всего дня<br> <strong>до 65%</strong></small>",
  health_benefits: "Польза для здоровья от использования<br> криотерапии",
  recovery_performance: "Восстановление &amp; производительность",
  improved_performance:
    "Причина, по которой так много лучших спортсменов используют криотерапию, заключается в ее способности ускорить восстановление, улучшить результаты тренировок и общую производительность.",
  arthritis: "Боль &amp; артрит",
  muscle_joint_pain:
    "Противовоспалительные эффекты криотерапии могут значительно снизить мышечные и суставные боли. Также известно, что она помогает людям, страдающим от артрита.",
  over: "более чем",
  treatment_shorter: "время лечения<br> меньше по сравнению с ледяными ваннами",

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
  description:
    "Το Activ Cryo V2 είναι μια κρυοσάουνα για θεραπεία κρυοθεραπείας που εκθέτει το σώμα σε ακραίες χαμηλές θερμοκρασίες για αρκετά λεπτά, χρησιμοποιώντας προηγμένες μεθόδους της κρυοτεχνολογίας με υγρό αζωτο. Το συσκευασία διαθέτει όλα τα απαιτούμενα πιστοποιητικά CE και B.",
  certificates: "Πιστοποιητικά",
  get_quote: "Λάβετε μια προσφορά",
  efficient_therapy: "Αποτελεσματική θεραπεία<br> σε χαμηλές θερμοκρασίες",
  scientific_research:
    "Σύμφωνα με επιστημονικές και ιατρικές έρευνες, η βέλτιστη αποδοτικότητα των διαδικασιών ολικής κρυοθεραπείας επιτυγχάνεται όταν το σώμα εκτίθεται σε θερμοκρασίες έως -120-170°C (-184-280F) για 1-3 λεπτά, μειώνοντας την επιφανειακή θερμοκρασία του δέρματος.",
  temperature: "Θερμοκρασία εσωτερικά inside<br> του καμπίνου",
  timeless: "Αιώνιες λύσεις για την επιχείρησή σας",
  fitness: "Γυμναστήρια",
  medical_center: "Ιατρικά<br>κέντρα",
  physiotherapy: "Φυσιοθεραπεία",
  best_solution: "Η καλύτερη λύση για την επιχείρησή σας",
  clinics: "Κλινικές",
  hotel_gym: "Γυμναστήρια ξενοδοχείων",
  research_clinical:
    "<strong>Οι έρευνες ειδικών και κλινικές μελέτες δείχνουν ότι οι πελάτες μπορεί να αισθάνονται ανακούφιση από μυϊκούς πόνους και ευαισθησία μετά από συνεδρίες κρυοθεραπείας.</strong> Αυτό καθιστά την κρυοθεραπεία πιο αποτελεσματική εναλλακτική μέθοδο ανάκτησης σε σχέση με παλαιότερες εφαρμογές όπως παγοκύστες ή βύθιση σε παγωμένο νερό. Οι συνεδρίες κρυοθεραπείας μπορούν να ανακουφίσουν μυϊκούς πόνους, ρευματικούς σπασμούς, πρήξιμο και στυτικότητα αρθρώσεων.",
  cryo_implementation:
    "<strong>Η κρυοθεραπεία έχει εφαρμοστεί πλέον σε πολλά σπα, ιατρικά γραφεία και στούντιο κρυού φιτνες.</strong>",
  screens: "Ενσωματωμένες 2 μεγάλες,<br> αναγνώσιμες οθόνες",
  display: "Ψηφιακή οθόνη<br> εντός της καμπίνας",
  color_touch: "Έγχρωμη<br> οθόνη αφής",
  multi_blow:
    "Το πολυκατευθυντικό σύστημα αεραγωγών διανέμει ομοιόμορφα τη θερμοκρασία μέσα στην καμπίνα",
  airflow_system:
    "<strong>Το Activ Cryo V2 ως η μοναδική κρυοθεραπευτική καμπίνα έχει εξοπλιστεί με ένα σύστημα αέρα,</strong> το οποίο προκαλεί ομοιόμορφη διανομή της χαμηλής θερμοκρασίας γύρω από ολόκληρο το σώμα του ασθενούς. Κάθε μέρος του σώματος λαμβάνει την ίδια κρύα δόση κατά τη διάρκεια της θεραπευτικής διαδικασίας.",
  positive_revolution: "Μια θετική επανάσταση για την υγεία σας",
  benefits_list:
    "Η λίστα των οφελών περιλαμβάνει βελτιωμένη λειτουργία μυών και αρθρώσεων, ανακούφιση και εξάλειψη του πόνου, αυξημένη κυκλοφορία του αίματος, ανάρρωση από χρόνιο πόνο και επιταχυνόμενη ανάρρωση από τραυματισμό.",
  body_performance: "Αύξηση της απόδοσης<br> του σώματος",
  recovery: "Ταχύτερη ανάρρωση<br> ",
  quicker: "φορές πιο γρήγορα",
  sports_medicine:
    "Η καλύτερη λύση<br> για την ιατρική του αθλητισμού &amp; διαχείριση του πόνου",
  chronic:
    "<strong>Η αυξανόμενη εμφάνιση χρόνιων ιατρικών παθήσεων και η ανάγκη για γρήγορη ανάρρωση μετά από τραυματισμούς και λύσεις για την ανακούφιση από τον πόνο,</strong> σε συνδυασμό με το δυσάρεστο αίσθημα που προκαλείται λόγω μη ευνοϊκών αλλαγών θερμοκρασίας, συνεχίζουν να ενθαρρύνουν την εφαρμογή της κρυοθεραπείας στον κόσμο.",
  benefits:
    "<strong>Η μείωση της φλεγμονής, η αύξηση του μεταβολισμού και η μείωση του χρόνιου πόνου και της κόπωσης</strong> είναι μερικά από τα ουσιαστικά οφέλη της κρυοθεραπείας που θα συνεχίσουν να ωθούν τη χρήση των κρυοθαλαμης σε όλον τον κόσμο.",
  aching_muscles:
    "<strong>Εάν είστε παθιασμένος δρομέας και πηγαίνετε συχνά στο γυμναστήριο, πιθανόν να αντιμετωπίζετε συχνά μυϊκούς πόνους.</strong><br> Γι' αυτό η κρυοθεραπεία έρχεται να βοηθήσει και είναι μια ανερχόμενη τάση που προσφέρεται από κέντρα αισθητικής, ιατροφαρμακευτικά ιδρύματα, αθλητική ιατρική & εκπαίδευση, κέντρα αδυνατίσματος, γυμναστήρια και κέντρα ευεξίας.",
  popularity:
    "Η κρυοθεραπεία αποκτά δημοτικότητα λόγω των υποτιθέμενων ευεργετικών της επιδράσεων στην ταχεία ανάρρωση, μείωση του πόνου, έκζεμα, κατάθλιψη, άγχος, ανάκτηση μετά από άσκηση, γρήγορη καύση θερμίδων, ενίσχυση του ανοσοποιητικού και πολλά άλλα.",
  weight_loss: "Υποστηρίζει την απώλεια βάρους",
  bone_chilling:
    "<strong>Αυτή η διαδικασία ψύξης των οστών έχει επίσης δείξει ότι καίει έως 600 - 800 θερμίδες, αυξάνει τον μεταβολισμό, απελευθερώνει ενδορφίνες, βελτιώνει τον ύπνο, μειώνει το κυτταρίτιδα και αναπαράγει το κολλαγόνο.</strong> Με την αυξανόμενη ζήτηση, οι κρυοθεραπευτικές κάμερες εφαρμόζονται σε διάφορα μέρη, συμπεριλαμβανομένων σπα, ιατρικών κλινικών, γυμναστηρίων και κέντρων κρυοθεραπείας.",
  burn: "Καίτε έως",
  burned_calories: "800<br> <small>θερμίδες</small>",
  cryotherapy: "Οφέλη θεραπείας κρυοθεραπείας<br>",
  cooling_strategies:
    "Οι στρατηγικές ψύξης χρησιμοποιούνται εδώ και αιώνες για τον περιορισμό της πυρετού και τη βελτίωση των επιδόσεων ή την ανάκτηση.",
  increased_physical:
    "<strong>Αύξηση δύναμης,<br> ισχύος και ευλυγισίας</strong>",
  regeneration:
    "<small>Ταχύτερη αναγέννηση μυών και αρθρώσεων<br> <strong>έως 80%</strong></small>",
  mental_health: "<strong>Βελτίωση της ψυχικής υγείας</strong>",
  reduced_anxiety:
    "<small>Μείωση συμπτωμάτων κατάθλιψης ή άγχους<br> </small><small><strong>έως 50%</strong></small>",
  quick_weight_loss: "<strong>Γρήγορη απώλεια<br> βάρους</strong>",
  accelerates_metabolism:
    "<small>Επιταχύνει τον μεταβολισμό για όλη την ημέρα<br> <strong>έως 65%</strong></small>",
  health_benefits:
    "Οφέλη για την υγεία από τη χρήση<br> θεραπειών κρυοθεραπείας",
  recovery_performance: "Ανάρρωση &amp; απόδοση",
  improved_performance:
    "Ο λόγος που τόσοι πολλοί κορυφαίοι αθλητές χρησιμοποιούν την κρυοθεραπεία είναι η ικανότητά της να επιταχύνει την ανάρρωση, να βελτιώνει τα αποτελέσματα της προπόνησης και τη συνολική απόδοση.",
  arthritis: "Πόνος &amp; αρθρίτιδα",
  muscle_joint_pain:
    "Οι αντιφλεγμονώδεις επιδράσεις της κρυοθεραπείας μπορούν να μειώσουν δραστικά τους πόνους των μυών και των αρθρώσεων. Επίσης, είναι γνωστό πως βοηθά ανθρώπους που πάσχουν από αρθρίτιδα.",
  over: "πάνω από",
  treatment_shorter:
    "sχρόνος θεραπείας<br> μικρότερος σε σύγκριση με το λουτρό πάγου",

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