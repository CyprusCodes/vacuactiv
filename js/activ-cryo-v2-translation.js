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

  // comparison
  ice_bath_t: "Ice bath",
  cpr_i: "<div>Extreme Cold Air up to -180<sup>o</sup>C </div> <div>Treatment Delivery</div> <div>Cold Water (8<sup>o</sup>C to 16<sup>o</sup>C)</div>",
  cpr_ii: "<div>0<sup>o</sup>C to 1.6<sup>o</sup>C</div> <div>Resulting Skin Temp.</div> <div>8<sup>o</sup>C to 16<sup>o</sup>C</div>",
  cpr_iii: "<div>2 - 3 minutes</div> <div>Treatment Time</div> <div>15 to 20 minutes</div>",
  cpr_iv: "<div>High</div> <div>Level of Comfort</div> <div>Low</div>",
  cpr_v: "<div>Vasodilaion/Int. blood cycle</div> <div>Response from Body</div> <div>Warmed Blood to peripherals</div>",
  cpr_vi: "<div>Yes</div> <div>Enriches Blood</div> <div>No</div>",
  cpr_vii: "<div>Yes</div> <div>Increases Hemoglobin</div> <div>No</div>",
  cpr_iix: "<div>Incresed</div> <div>Blood Temperature Change</div> <div>Decresed</div>",
  cpr_ix: "<div>Yes</div> <div>Improves Blood circulation</div> <div>No</div>",
  cpr_x: "<div>Yes</div> <div>Improves Immune System</div> <div>No</div>",
  cpr_xi: "<div>No</div> <div>Risk of Hyperthermia</div> <div>Yes</div>",
  cpr_xii: "<div>Yes</div> <div>Release of Endorphins</div> <div>No</div>",
  cpr_xiii: "<div>Immediately / Boost energy</div> <div>Time to return to exercise</div> <div>12 to 24 Hours</div>",
  cpr_xiv: "<div>Yes</div> <div>Improves skin health</div> <div>No</div>",
  cpr_xv: "<div>Yes</div> <div>Increase Collagen production</div> <div>No</div>",




  // end comparison
  ice_bath_specifications: "<strong>20 min</strong> Ice Bath",
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
  health_profitability: "Profitability from health",
  fast_return: "Fast return on investment,<br> only 6 month estimated ROI",
  pandemic_2020:
    "<strong>Health today is more valuable than material things. The pandemic in 2020 has shown how important it is to take care of your body and health.</strong> That’s why Activ Cryo V2 it is a great investment move, good for the health of your customers and good for a business interest of you, as an owner.",
  cryo_journey:
    "To begin the journey of cryo business you need only 6 m2 room to start with. Cryosauna Activ Cryo V2 – it is the right investment. When people come for treatment, they invest in their health. By investing in Cryosauna you can launch a reliable business without a large capital, without putting all on the line.",
  weight_loss_2: "Weight loss",
  tech_specs: "Specifications",
  size: "Size",
  width: "Width",
  length: "Length",
  height: "Height",
  weight: "Weight",
  energy_consumption: "Electrical energy consumption",
  power_supply: "Power supply",
  temp_range: "Temperature range",
  nitrogen_consumption: "Nitrogen consumption (Session)",
  nitrogen_consumption_cabin: "Nitrogen consumption (Cabin freezing)",
  supports_health: "Support<br /> your health thanks to cryotherapy treatments",
  muscle_recovery: "Muscle recovery",
  harder_longer_quicker:
    "Activ Cryo V2 users can train harder, longer, and recover quicker, which helps them achieve maximum results from workouts. During a treatment, as temperatures rapidly cool, oxygen is pushed through the body to help reduce inflammation, relieve pain and recover the muscles.",
  beauty_antiaging: " Beauty &amp; anty aging</span>",
  youthful_appearance:
    "Activ Cryo V2 can help maintain a youthful appearance by reducing the signs of aging such as wrinkles and fine lines, while also tightening the skin and reducing cellulite. Cryotherapy stimulates collagen production in the deeper layers of skin resulting in a smoother, firmer and more youthful look.",
  loss_of_weight:
    "Activ Cryo V2 promotes natural loss of weight. The treatment helps stimulate blood flow throughout the body and boost the delivery of oxygenated blood, which leads to the increase of metabolic rate.",
  health_and_wellness: "Health &amp; Wellness",
  pbc_treatment:
    "Medical studies have shown that PBC treatment helps individuals battle insomnia and induces deeper sleep. The treatment also reduces stress and anxiety, and improves the immune system and organ function.",
  immune_system_boost: "Boost immune system",
  anti_inflammatory_hormones:
    "During cryotherapy your body's production of anti-inflammatory hormones significantly increases, reducing inflammation in the body. This happens because of the increase of your body's immune cells. This boost to your immune system helps you destroy viruses and fight off tumor factors.",
  pain_management: "Pain management",
  injury_recovery:
    "Activ Cryo V2 reduces pain and speeds up the injury recovery process. During a treatment, the body slows down nerve signal transmissions and releases a neurotransmitter that reduces pain sensitivity. The treatment also speeds up the recovery process by boosting the flow of nutrient-rich blood.",
  summary: "Summary",

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
  norepinephrine:
    "Криотерапия вызывает у организма выработку гормона под названием Норэпинефрин. Это увеличивает метаболизм жира до 6 дней, и влияние одной сессии эквивалентно сжиганию 500-800 калорий.",
  stress_anxiety: "Стресс &amp; тревога",
  endorphins:
    "Во время криотерапии ваш организм выделяет эндорфины, которые возвращаются и могут положительно повлиять на ваше общее настроение. Криотерапия может снизить стресс, тревогу и депрессию, просто заставляя вас чувствовать себя счастливее. Позитивное мышление может сделать чудеса в улучшении себя и своей жизни.",
  detoxification: "Детоксикация",
  blood_circulation:
    "Замораживающие температуры в криотерапии улучшают кровообращение, что облегчает доставку кислорода, питательных веществ и ферментов по всему организму.",
  insomnia: "Бессонница",
  insomnia_description:
    "Из-за упомянутых выше эндорфинов, криотерапия может помочь тем, кто страдает от бессонницы. Недостаточное количество сна иногда может тесно связаться с любым стрессом или набором веса, с которыми вы можете столкнуться. Бессонница может вызвать ряд проблем, которых у вас раньше не было, поэтому хороший сон очень важен, если вы хотите функционировать на своей максимальной производительности.",
  inflammation: "Воспаление",
  inflammation_description:
    "Криотерапия может снизить любое воспаление на вашем теле с помощью различных ферментов и усиления иммунной системы.",
  collagen: "Синтез коллагена",
  collagen_description:
    "Криотерапия может стимулировать синтез коллагена, который является важным строительным блоком против старения. Увеличение коллагена может уменьшить видимость морщин, наполнив кожу и повысив ее упругость, создавая более молодой и более гладкий вид.",
  skin: "Проблемы с кожей",
  skin_description_1:
    "Если у вас есть проблемы с кожей, такие как угревая сыпь или даже экзема, вам может захотеться попробовать криотерапию. Многие из вышеупомянутых преимуществ играют роль в улучшении кожи, снижая стресс, увеличивая коллаген или снижая воспаление.",
  skin_description_2:
    "Криотерапия стимулирует регенерацию клеток и может избавить организм от токсинов. Все эти факторы вместе могут улучшить состояние кожи и облегчить симптомы, подобные экземе или псориазу.",
  general_health: "Здоровье и благополучие",
  general_health_description:
    "Ограничивать преимущества криотерапии всего лишь 10 не так уж и просто. Это мощное лечение, которое способствует здоровью и благополучию в целом. Независимо от того, ищете ли вы результаты против старения, улучшение психического здоровья, помощь в похудении или снижение боли, криотерапия стоит попробовать.",
  thermovision: "Термовизионная камера",
  thermovision_use:
    "Безопасный контроль температуры тела во время процедуры криотерапии",
  intuitive: "Интуитивный интерфейс",
  intuitive_description:
    "Легко настраивайте свою криотерапию и вносите изменения",
  auto_drying: "Автоматическая сушилка",
  auto_drying_description: "Эффективная система сушки всей кабины внутри",
  hq_build: "Высококачественное исполнение",
  hq_build_description:
    "Кабина изготовлена из высококачественных материалов и закаленного стекла",
  modern: "Современный внешний вид",
  modern_description:
    "Современная форма и светодиодная подсветка придают криотерапевтической кабине уникальный вид",
  pre_freeze: "Режим предварительной заморозки",
  pre_freeze_description:
    "Цель этой функции - охлаждение интерьера кабины до соответствующей температуры для достижения наилучшей эффективности и экономии потребления жидкого азота.",
  dry_mode: "Режим сушки",
  dry_mode_description:
    "Эта функция эффективно сушит весь интерьер криотерапевтической кабины. Она также удаляет холодный газ изнутри кабины криосауны наружу.",
  cryo_screen: "Экран криотерапии",
  cryo_screen_description:
    "Во время процедуры криотерапии на экране отображается время до окончания процедуры, температура внутри кабины и тела пациента. Интерфейс также позволяет поднимать или опускать клиента во время процедуры.",
  interface: "Интуитивный интерфейс",
  interface_description:
    "<strong>Интерфейс разработан так, чтобы настройки можно было легко и быстро выполнять.</strong> Главная цель, которую мы хотели достичь, - это максимальная простота и читаемость для оператора, чтобы он мог выбрать правильные настройки для процедуры криотерапии и использования капсулы.",
  program_select: "Выбор программы",
  program_select_description:
    "<strong>Оператор имеет возможность выбрать 3 предопределенные программы и ручной режим,</strong> который позволяет настраивать процедуру криотерапии в соответствии с потребностями клиента.",
  pre_freeze: "Режим предварительной заморозки",
  pre_freeze_description:
    "Цель этой функции - охлаждение интерьера кабины до соответствующей температуры для достижения наилучшей эффективности и экономии потребления жидкого азота.",
  lower_temperature: "Снижение температуры в кабине",
  regular_chamber: "Стандартная криотерапевтическая камера",
  immune_boost:
    "Повышение иммунитета<br> помогает уничтожать<br> вирусы быстрее </h2>",
  physical_boost_description:
    "<strong>Во время криотерапии существенно увеличивается выработка гормонов противовоспалительных,</strong> что уменьшает воспаление в организме. Уменьшенное воспаление помогает организму быстрее заживать и восстанавливаться и снижает боль в проблемных местах. Во время сессии ваш организм также подвергается низким дозам физического стресса от холода. Такой стресс поддерживает активность ваших клеток и может привести к адаптивному ответу, укрепляющему вашу иммунную систему. Это происходит из-за увеличения иммунных клеток вашего организма. Это усиление иммунной системы помогает уничтожать вирусы и бороться с факторами, вызывающими развитие опухолей.",
  comfortable: "Более комфортно и без боли",
  open_roof:
    "<strong>Благодаря внедрению инновационных решений, таких как открытая крыша,</strong> пациенты, страдающие от клаустрофобии, могут безопасно использовать Activ Cryo V2.<br> Кроме того, в отличие от ледяной ванны или погружения, криотерапия не причиняет боли. Во время процедуры температура кожи будет снижаться в течение 2-3 минут внутри камеры. Этот процесс обновит ваш организм, кожу и разум.",
  shorter_duration: "Короче время процедуры<br> и больше эффектов",
  treatment_time: "<strong>Процедура длится 2 минуты</strong> в Activ Cryo V2",
  ice_bath: "<strong>20 минут</strong> в ледяной ванне",
  comparison: "Сравнение<br> криотерапии и ледяной ванны",
  ice_bath_t: "Ледяная ванна",
cpr_i: "<div>Экстремально холодный воздух до -180<sup>o</sup>C </div> <div>Воздействие лечения</div> <div>Холодная вода (от 8<sup>o</sup>C до 16<sup>o</sup>C)</div>",
cpr_ii: "<div>0<sup>o</sup>C до 1.6<sup>o</sup>C</div> <div>Температура кожи после процедуры</div> <div>8<sup>o</sup>C до 16<sup>o</sup>C</div>",
cpr_iii: "<div>2 - 3 минуты</div> <div>Время лечения</div> <div>15 до 20 минут</div>",
cpr_iv: "<div>Высокий</div> <div>Уровень комфорта</div> <div>Низкий</div>",
cpr_v: "<div>Вазодилатация / Кровообращение</div> <div>Реакция организма</div> <div>Прогретая кровь в периферийных частях</div>",
cpr_vi: "<div>Да</div> <div>Обогащает кровь</div> <div>Нет</div>",
cpr_vii: "<div>Да</div> <div>Увеличивает уровень гемоглобина</div> <div>Нет</div>",
cpr_iix: "<div>Увеличивается</div> <div>Изменение температуры крови</div> <div>Уменьшается</div>",
cpr_ix: "<div>Да</div> <div>Улучшает кровообращение</div> <div>Нет</div>",
cpr_x: "<div>Да</div> <div>Укрепляет иммунную систему</div> <div>Нет</div>",
cpr_xi: "<div>Нет</div> <div>Риск гипертермии</div> <div>Да</div>",
cpr_xii: "<div>Да</div> <div>Высвобождение эндорфинов</div> <div>Нет</div>",
cpr_xiii: "<div>Немедленно / Повышение энергии</div> <div>Время восстановления перед тренировкой</div> <div>12 до 24 часов</div>",
cpr_xiv: "<div>Да</div> <div>Улучшает здоровье кожи</div> <div>Нет</div>",
cpr_xv: "<div>Да</div> <div>Увеличивает производство коллагена</div> <div>Нет</div>",
  ice_bath_specifications: "Ледяная ванна",
  extreme_cold: "Экстремально холодный воздух до -180",
  treatment_delivery: "Проведение процедуры",
  cold_water: "Холодная вода (8<sup>o</sup>C до 16<sup>o</sup>C)",
  skin_temp_1: "0<sup>o</sup>C до 1.6<sup>o</sup>C",
  resulting_skin_temp: "Полученная температура кожи",
  skin_temp_2: "8<sup>o</sup>C до 16<sup>o</sup>C",
  treatment_duration_1: "2 - 3 минуты",
  treatment_duration: "Длительность процедуры",
  treatment_duration_2: "15 - 20 минут",
  high_comfort: "Высокий",
  comfort_level: "Уровень комфорта",
  low_comfort: "Низкий",
  blood_cycle: "Вазодилатация/Межклеточное кровообращение",
  bodily_response: "Ответ организма",
  warmed_blood: "Обогащение периферийного кровотока",
  blood_enriched_yes: "Да",
  blood_enriched: "Обогащение крови",
  blood_enriched_no: "Нет",
  increased_hemoglobin_yes: "Да",
  increased_hemoglobin: "Повышение гемоглобина",
  increased_hemoglobin_no: "Нет",
  blood_temp_increased: "Увеличение",
  blood_temp: "Изменение температуры крови",
  blood_temp_decreased: "Снижение",
  blood_circulation_yes: "Да",
  blood_circulation: "Улучшение кровообращения",
  blood_circulation_no: "Нет",
  immune_system_yes: "Да",
  immune_system: "Улучшение иммунитета",
  immune_system_no: "Нет",
  hyperthermia_no: "Нет",
  hyperthermia: "Риск гипертермии",
  hyperthermia_yes: "Да",
  endorphin_release_yes: "Да",
  endorphin_release: "Высвобождение эндорфинов",
  endorphin_release_no: "Нет",
  energy_boost: "Немедленное / Повышение энергии",
  exercise_return: "Время возврата к тренировкам",
  exercise_return_hours: "12 - 24 часа",
  improves_skin_yes: "Да",
  improves_skin: "Улучшение состояния кожи",
  improves_skin_no: "Нет",
  increases_collagen_yes: "Да",
  increases_collagen: "Увеличение синтеза коллагена",
  increases_collagen_no: "Нет",
  health_profitability: "Выгода от здоровья",
  fast_return:
    "Быстрое окупление, <br> ожидаемый срок окупаемости всего 6 месяцев",
  pandemic_2020:
    "<strong>Здоровье сегодня ценится выше материальных благ. Пандемия 2020 года показала, насколько важно заботиться о своем теле и здоровье.</strong> Поэтому Activ Cryo V2 - отличное инвестиционное решение, полезное для здоровья ваших клиентов и выгодное для вашего бизнеса, как владельца.",
  cryo_journey:
    "Чтобы начать свой путь в крио-бизнесе, вам понадобится всего 6 м2 помещения. Криосауна Activ Cryo V2 - это правильное инвестиционное решение. Когда люди приходят на процедуру, они инвестируют в свое здоровье. Инвестируя в криосауну, вы можете запустить надежный бизнес без большого капитала, не рискуя всем.",
  weight_loss_2: "Похудение",
  tech_specs: "Технические характеристики",
  size: "Размер",
  width: "Ширина",
  length: "Длина",
  height: "Высота",
  weight: "Вес",
  energy_consumption: "Энергопотребление",
  power_supply: "Источник питания",
  temp_range: "Диапазон температур",
  nitrogen_consumption: "Расход азота (процедура)",
  nitrogen_consumption_cabin: "Расход азота (замораживание кабины)",
  supports_health: "Поддержите свое здоровье благодаря процедурам криотерапии",
  muscle_recovery: "Восстановление мышц",
  harder_longer_quicker:
    "Пользователи Activ Cryo V2 могут тренироваться более интенсивно, дольше и быстрее восстанавливаться, что помогает достигать максимальных результатов от тренировок. Во время процедуры кровь быстро охлаждается, что помогает снизить воспаление, облегчить боль и ускорить восстановление мышц.",
  beauty_antiaging: "Красота и антивозрастные процедуры",
  youthful_appearance:
    "Activ Cryo V2 помогает сохранить молодой вид, уменьшая признаки старения, такие как морщины и мелкие линии, а также повышая упругость кожи и уменьшая целлюлит. Криотерапия стимулирует производство коллагена в глубоких слоях кожи, что приводит к более гладкому, упругому и молодому виду.",
  loss_of_weight:
    "Activ Cryo V2 способствует естественному похудению. Процедура стимулирует кровоток по всему организму и увеличивает поставку оксигенированной крови, что приводит к увеличению метаболического процесса.",
  health_and_wellness: "Здоровье и благополучие",
  pbc_treatment:
    "Медицинские исследования показали, что процедура криотерапии помогает бороться с бессонницей и способствует глубокому сну. Процедура также уменьшает стресс и тревогу, улучшает иммунную систему и функционирование органов.",
  immune_system_boost: "Укрепление иммунной системы",
  anti_inflammatory_hormones:
    "Во время криотерапии существенно увеличивается выработка гормонов противовоспалительных, что уменьшает воспаление в организме. Это происходит из-за увеличения иммунных клеток вашего организма. Это усиление иммунной системы помогает уничтожать вирусы и бороться с факторами, вызывающими развитие опухолей.",
  pain_management: "Управление болевыми ощущениями",
  injury_recovery:
    "Activ Cryo V2 снижает боль и ускоряет процесс восстановления после травм. Во время процедуры замедляются передачи сигналов нервами, и выделяется нейромедиатор, который снижает чувствительность к боли. Процедура также ускоряет процесс восстановления, увеличивая поток питательной крови.",
  summary: "Итог",

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
  norepinephrine:
    "Η κρυοθεραπεία προκαλεί την παραγωγή ενός ορμονητού με το όνομα Νορεπινεφρίνη. Αυτό αυξάνει τον μεταβολισμό του λίπους έως και 6 ημέρες, και η επίδραση μιας συνεδρίας είναι ισοδύναμη με την καύση 500-800 θερμίδων.",
  stress_anxiety: "Στρες και άγχος",
  endorphins:
    "Κατά τη διάρκεια της κρυοθεραπείας, το σώμα σας απελευθερώνει ενδορφίνες που επηρεάζουν θετικά τη διάθεσή σας. Η κρυοθεραπεία μπορεί να ανακουφίσει από το άγχος και την κατάθλιψη, κάνοντάς σας να νιώθετε πιο ευτυχισμένοι. Ένα θετικό πνεύμα μπορεί να κάνει θαύματα στη βελτίωση του εαυτού σας και της ζωής σας.",
  detoxification: "Αποτοξίνωση",
  blood_circulation:
    "Οι χαμηλές θερμοκρασίες της κρυοθεραπείας αυξάνουν την κυκλοφορία του αίματος, καθιστώντας ευκολότερη την παροχή οξυγόνου, θρεπτικών ουσιών και ενζύμων σε όλο το σώμα.",
  insomnia: "Αϋπνία",
  insomnia_description:
    "Λόγω των ίδιων ενδορφινών που αναφέρθηκαν παραπάνω, η κρυοθεραπεία μπορεί να βοηθήσει όσους αντιμετωπίζουν προβλήματα αϋπνίας. Η έλλειψη ύπνου μπορεί να συνδέεται με το άγχος ή την αύξηση βάρους που ενδεχομένως να αντιμετωπίζετε. Η αϋπνία μπορεί να προκαλέσει πολλά προβλήματα που δεν είχατε πριν, οπότε ο καλός ύπνος είναι σημαντικός αν θέλετε να λειτουργήσετε στον καλύτερό σας.",
  inflammation: "Φλεγμονή",
  inflammation_description:
    "Η κρυοθεραπεία μπορεί να μειώσει οποιαδήποτε φλεγμονή στο σώμα σας με τη βοήθεια διάφορων ενζύμων και την ενίσχυση του ανοσοποιητικού συστήματος.",
  collagen: "Σύνθεση κολλαγόνου",
  collagen_description:
    "Η κρυοθεραπεία μπορεί να ενισχύσει τη σύνθεση κολλαγόνου, που αποτελεί σημαντικό κομμάτι κατά του γήρανσης. Η αύξηση του κολλαγόνου μπορεί να μειώσει την εμφάνιση των ρυτίδων, γεμίζοντας το δέρμα και αυξάνοντας την ελαστικότητα του, δημιουργώντας ένα πιο νεανικό και λείο αποτέλεσμα.",
  skin: "Καταστάσεις του δέρματος",
  skin_description_1:
    "Αν αντιμετωπίζετε οποιαδήποτε προβλήματα με το δέρμα, όπως ακμή ή ακόμα και έκζεμα, ίσως θέλετε να δοκιμάσετε την κρυοθεραπεία. Πολλά από τα παραπάνω οφέλη παίζουν ρόλο στη βελτίωση του δέρματος, ανακουφίζοντας το άγχος, αυξάνοντας το κολλαγόνο ή μειώνοντας τη φλεγμονή.",
  skin_description_2:
    "Η κρυοθεραπεία ενθαρρύνει την αναζωογόνηση των κυττάρων και μπορεί να εξαλείψει τις τοξίνες από το σώμα. Όλα αυτά τα στοιχεία που δρουν μαζί μπορούν να βελτιώσουν την κατάσταση του δέρματος και να ανακουφίσουν από συμπτώματα παρόμοια με το έκζεμα ή τον πλακώδη λεύκωμα.",
  general_health: "Υγεία & ευεξία γενικά",
  general_health_description:
    "Περιορίζοντας τα οφέλη της κρυοθεραπείας σε μόλις 10 δεν είναι εύκολο. Είναι μια ισχυρή θεραπεία που προωθεί πολλά καλά στη γενική υγεία και ευεξία. Είτε αναζητάτε αποτελέσματα κατά του γήρατος, βελτίωση της ψυχικής υγείας, βοήθεια στην απώλεια βάρους ή μείωση του πόνου, η κρυοθεραπεία αξίζει να δοκιμάσετε.",
  thermovision: "Θερμοεικόνα κάμερα",
  thermovision_use:
    "Ασφαλής έλεγχος της θερμοκρασίας του σώματος κατά τη διάρκεια της κρυοθεραπείας",
  intuitive: "Εύχρηστη διεπαφή",
  intuitive_description:
    "Ρυθμίστε εύκολα τη θεραπεία κρυοθεραπείας και κάντε αλλαγές",
  auto_drying: "Αυτόματο σύστημα στεγνώματος",
  auto_drying_description:
    "Αποτελεσματικό σύστημα που στεγνώνει ολόκληρο το κατάστρωμα στο εσωτερικό",
  hq_build: "Κατασκευή υψηλής ποιότητας",
  hq_build_description:
    "Το κατάστρωμα είναι κατασκευασμένο από υψηλής ποιότητας υλικά και θερμαινόμενο γυαλί",
  modern: "Μοντέρνα εμφάνιση",
  modern_description:
    "Μοντέρνο σχήμα και LED φωτισμός δίνουν μια μοναδική εμφάνιση στο κατάστρωμα κρυοθεραπείας",
  pre_freeze: "Λειτουργία προ-ψύξης",
  pre_freeze_description:
    "Σκοπός αυτής της λειτουργίας είναι να κρυώσει το εσωτερικό του καταστρώματος στην κατάλληλη θερμοκρασία για να επιτύχετε την καλύτερη απόδοση και οικονομία στην κατανάλωση υγρού αζώτου.",
  dry_mode: "Λειτουργία στεγνώματος",
  dry_mode_description:
    "Η λειτουργία στεγνώματος στεγνώνει αποτελεσματικά το εσωτερικό του καταστρώματος κρυοθεραπείας. Απομακρύνει επίσης το κρύο αέρα από το κατάστρωμα κρυοθεραπείας προς τον εξωτερικό χώρο.",
  cryo_screen: "Οθόνη θεραπείας κρυοθεραπείας",
  cryo_screen_description:
    "Κατά τη διάρκεια της θεραπείας κρυοθεραπείας, η οθόνη θα εμφανίζει τον χρόνο έως το τέλος της θεραπείας, τη θερμοκρασία μέσα στο κατάστρωμα και τους μέσους όρους της θερμοκρασίας του ασθενούς. Η διεπαφή επιτρέπει επίσης τη δυνατότητα αύξησης ή μείωσης του πελάτη κατά τη διάρκεια της διαδικασίας.",
  interface: "Εύχρηστη διεπαφή",
  interface_description:
    "<strong>Η διεπαφή έχει σχεδιαστεί για να κάνει τις ρυθμίσεις εύκολες και γρήγορες.</strong> Ο κύριος στόχος που θέλαμε να επιτύχουμε ήταν η μέγιστη ευκολία και κατανοητότητα για τον χειριστή, ώστε να επιλέξει τις σωστές ρυθμίσεις για τη θεραπεία κρυοθεραπείας και τη χρήση του καψάλιου.",
  program_select: "Επιλογή προγράμματος",
  program_select_description:
    "<strong>Ο χειριστής έχει τη δυνατότητα να επιλέξει 3 προκαθορισμένα προγράμματα και μια επιλογή χειροκίνητης ρύθμισης</strong> που επιτρέπει να προσαρμόσετε τη θεραπεία κρυοθεραπείας στις ανάγκες του πελάτη.",
  pre_freeze: "Λειτουργία προ-ψύξης",
  pre_freeze_description:
    "Σκοπός αυτής της λειτουργίας είναι να κρυώσει το εσωτερικό του καταστρώματος στην κατάλληλη θερμοκρασία για να επιτύχετε την καλύτερη απόδοση και οικονομία στην κατανάλωση υγρού αζώτου.",
  lower_temperature: "Χαμηλότερη θερμοκρασία στο κατάστρωμα",
  regular_chamber: "Κανονικό κατάστρωμα κρυοθεραπείας",
  immune_boost: "Ενίσχυση του ανοσοποιητικού συστήματος",
  physical_boost_description:
    "<strong>Κατά τη διάρκεια της κρυοθεραπείας, η παραγωγή αντιφλεγμονωδών ορμονών του σώματος αυξάνεται σημαντικά, μειώνοντας τη φλεγμονή στο σώμα.</strong> Η μειωμένη φλεγμονή βοηθά το σώμα να θεραπεύεται και να ανακάμπτει πιο γρήγορα και μειώνει τον πόνο στις προβληματικές περιοχές. Κατά τη διάρκεια της συνεδρίας, το σώμα σας υπόκειται επίσης σε μικρές δόσεις φυσικού στρες από το κρύο. Ένα τέτοιο στρες κρατά τα κύτταρά σας σε εγρήγορση και μπορεί να προκαλέσει μια προσαρμοστική αντίδραση που ενισχύει το ανοσοποιητικό σας σύστημα. Αυτό συμβαίνει λόγω της αύξησης των ανοσοκυττάρων του σώματος. Αυτή η ενίσχυση του ανοσοποιητικού συστήματος βοηθά το σώμα να καταστρέψει ιούς και να καταπολεμήσει παράγοντες όπως όγκοι.",
  comfortable: "Πιο άνετο και χωρίς πόνο",
  open_roof:
    "<strong>Χάρη στην υλοποίηση καινοτόμων λύσεων, όπως ένα ανοιχτό ταράτσο,</strong> οι ασθενείς που υποφέρουν από κλειστοφοβία μπορούν να χρησιμοποιήσουν με ασφάλεια το Activ Cryo V2. Επίσης, αυτή η τεχνολογία, αντίθετα από το λουτρό πάγου ή τη βύθιση, η κρυοθεραπεία δεν είναι πονηρή. Κατά τη διάρκεια της θεραπείας, η θερμοκρασία του δέρματος θα μειωθεί μέσα σε 2 έως 3 λεπτά μέσα στο κατάστρωμα. Αυτή η διαδικασία θα αναζωογονήσει το σώμα, το δέρμα και το μυαλό σας.",
  shorter_duration: "Μικρότερος χρόνος θεραπείας και περισσότερα αποτελέσματα",
  treatment_time: "<strong>2 λεπτά θεραπεία</strong> με το Activ Cryo V2",
  ice_bath: "<strong>20 λεπτά</strong> σε λουτρό πάγου",
  comparison: "Σύγκριση κρυοθεραπείας έναντι λουτρού πάγου",
  ice_bath_t: "Κρύο μπάνιο",
cpr_i: "<div>Άκρως Κρύος Αέρας μέχρι -180<sup>o</sup>C</div> <div>Παροχή Θεραπείας</div> <div>Κρύο Νερό (8<sup>o</sup>C έως 16<sup>o</sup>C)</div>",
cpr_ii: "<div>0<sup>o</sup>C έως 1.6<sup>o</sup>C</div> <div>Θερμοκρασία Δέρματος</div> <div>8<sup>o</sup>C έως 16<sup>o</sup>C</div>",
cpr_iii: "<div>2 - 3 λεπτά</div> <div>Διάρκεια Θεραπείας</div> <div>15 έως 20 λεπτά</div>",
cpr_iv: "<div>Υψηλή</div> <div>Επίπεδο Άνεσης</div> <div>Χαμηλή</div>",
cpr_v: "<div>Απόκριση Από Το Σώμα</div> <div>Διάστολος Αιμοφόρων Αγγείων / Κύκλος Εσωτερικού Αίματος</div> <div>Κατευθυνόμενο Θερμαινόμενο Αίμα στις άκρες</div>",
cpr_vi: "<div>Ναι</div> <div>Εμπλουτίζει το Αίμα</div> <div>Όχι</div>",
cpr_vii: "<div>Ναι</div> <div>Αυξάνει τον Αιμοσφαιρίνη</div> <div>Όχι</div>",
cpr_iix: "<div>Αυξημένη</div> <div>Αλλαγή Θερμοκρασίας του Αίματος</div> <div>Μειωμένη</div>",
cpr_ix: "<div>Ναι</div> <div>Βελτιώνει την Κυκλοφορία του Αίματος</div> <div>Όχι</div>",
cpr_x: "<div>Ναι</div> <div>Βελτιώνει το Ανοσοποιητικό Σύστημα</div> <div>Όχι</div>",
cpr_xi: "<div>Όχι</div> <div>Κίνδυνος Υπερθερμίας</div> <div>Ναι</div>",
cpr_xii: "<div>Ναι</div> <div>Απελευθέρωση Ενδορφινών</div> <div>Όχι</div>",
cpr_xiii: "<div>Άμεσα / Ενίσχυση Ενέργειας</div> <div>Χρόνος Επιστροφής στην Άσκηση</div> <div>12 έως 24 Ώρες</div>",
cpr_xiv: "<div>Ναι</div> <div>Βελτιώνει την Υγεία του Δέρματος</div> <div>Όχι</div>",
cpr_xv: "<div>Ναι</div> <div>Αύξηση Παραγωγής Κολλαγόνου</div> <div>Όχι</div>",
  ice_bath_specifications: "Λουτρό πάγου",
  extreme_cold: "Άκρως κρύος αέρας μέχρι -180°C",
  treatment_delivery: "Παροχή θεραπείας",
  cold_water: "Κρύο νερό (8°C έως 16°C)",
  skin_temp_1: "0°C έως 1.6°C",
  resulting_skin_temp: "Τελική θερμοκρασία δέρματος",
  skin_temp_2: "8°C έως 16°C",
  treatment_duration_1: "2 - 3 λεπτά",
  treatment_duration: "Διάρκεια θεραπείας",
  treatment_duration_2: "15 έως 20 λεπτά",
  high_comfort: "Υψηλή",
  comfort_level: "Επίπεδο άνεσης",
  low_comfort: "Χαμηλή",
  blood_cycle: "Αγγειοδιάταση / Εσωτερική κυκλοφορία αίματος",
  bodily_response: "Αντίδραση του σώματος",
  warmed_blood: "Αίμα που ζεσταίνεται προς τις περιφερειακές περιοχές",
  blood_enriched_yes: "Ναι",
  blood_enriched: "Εμπλουτίζει το αίμα",
  blood_enriched_no: "Όχι",
  increased_hemoglobin_yes: "Ναι",
  increased_hemoglobin: "Αυξάνει την υμοσφαιρίνη",
  increased_hemoglobin_no: "Όχι",
  blood_temp_increased: "Αυξημένη",
  blood_temp: "Αλλαγή θερμοκρασίας αίματος",
  blood_temp_decreased: "Μειωμένη",
  blood_circulation_yes: "Ναι",
  blood_circulation: "Βελτιώνει την κυκλοφορία του αίματος",
  blood_circulation_no: "Όχι",
  immune_system_yes: "Ναι",
  immune_system: "Βελτιώνει το ανοσοποιητικό σύστημα",
  immune_system_no: "Όχι",
  hyperthermia_no: "Όχι",
  hyperthermia: "Κίνδυνος υπερθερμίας",
  hyperthermia_yes: "Ναι",
  endorphin_release_yes: "Ναι",
  endorphin_release: "Απελευθέρωση ενδορφινών",
  endorphin_release_no: "Όχι",
  energy_boost: "Άμεσα / Ενίσχυση ενέργειας",
  exercise_return: "Χρόνος επιστροφής στη γυμναστική",
  exercise_return_hours: "12 έως 24 ώρες",
  improves_skin_yes: "Ναι",
  improves_skin: "Βελτιώνει την υγεία του δέρματος",
  improves_skin_no: "Όχι",
  increases_collagen_yes: "Ναι",
  increases_collagen: "Αυξάνει την παραγωγή κολλαγόνου",
  increases_collagen_no: "Όχι",
  health_profitability: "Κερδοφορία από την υγεία",
  fast_return: "Γρήγορη απόδοση επενδύσεων, μόνο 6 μήνες εκτιμώμενο ROI",
  pandemic_2020:
    "<strong>Η υγεία σήμερα είναι πιο πολύτιμη από υλικά πράγματα. Η πανδημία του 2020 έδειξε πόσο σημαντικό είναι να φροντίζουμε το σώμα και την υγεία μας.</strong> Γι' αυτό το Activ Cryo V2 είναι μια μεγάλη επενδυτική κίνηση, καλή για την υγεία των πελατών σας και καλή για τα επιχειρηματικά συμφέροντά σας ως ιδιοκτήτης.",
  cryo_journey:
    "Για να ξεκινήσετε το ταξίδι της επιχείρησης κρυοθεραπείας, χρειάζεστε μόνο 6 m2 δωμάτιο για να ξεκινήσετε. Το Cryosauna Activ Cryo V2 - είναι η σωστή επένδυση. Όταν οι άνθρωποι έρχονται για θεραπεία, επενδύουν στην υγεία τους. Επενδύοντας στην κρυοθεραπεία, μπορείτε να ξεκινήσετε μια αξιόπιστη επιχείρηση χωρίς μεγάλο κεφάλαιο, χωρίς να βάζετε όλα τα πάντα σε κίνδυνο.",
  weight_loss_2: "Απώλεια βάρους",
  tech_specs: "Τεχνικές προδιαγραφές",
  size: "Μέγεθος",
  width: "Πλάτος",
  length: "Μήκος",
  height: "Ύψος",
  weight: "Βάρος",
  energy_consumption: "Κατανάλωση ηλεκτρικής ενέργειας",
  power_supply: "Τροφοδοσία",
  temp_range: "Εύρος θερμοκρασίας",
  nitrogen_consumption: "Κατανάλωση αζώτου (Συνεδρία)",
  nitrogen_consumption_cabin: "Κατανάλωση αζώτου (Κατάψυξη καταστρώματος)",
  supports_health: "Υποστηρίξτε<br />την υγεία σας με θεραπείες κρυοθεραπείας",
  muscle_recovery: "Ανάκαμψη μυών",
  harder_longer_quicker:
    "Οι χρήστες του Activ Cryo V2 μπορούν να προπονηθούν πιο δύσκολα, περισσότερο και να ανακάμψουν πιο γρήγορα, βοηθώντας τους να επιτύχουν τα μέγιστα αποτελέσματα από τις προπονήσεις. Κατά τη διάρκεια μιας θεραπείας, καθώς οι θερμοκρασίες ψύχονται γρήγορα, ο οξυγόνο πιέζεται μέσω του σώματος για να βοηθήσει στη μείωση της φλεγμονής, την ανακούφιση του πόνου και την ανάκαμψη των μυών.",
  beauty_antiaging: "Ομορφιά & αντι-γήρανση",
  youthful_appearance:
    "Το Activ Cryo V2 μπορεί να βοηθήσει να διατηρήσετε μια νεανική εμφάνιση μειώνοντας τα σημάδια της γήρανσης, όπως τις ρυτίδες και τις λεπτές γραμμές, ενώ παράλληλα σφίγγει το δέρμα και μειώνει την κυτταρίτιδα. Η κρυοθεραπεία διεγείρει την παραγωγή κολλαγόνου στις βαθύτερες στρώσεις του δέρματος, με αποτέλεσμα μια πιο ομαλή, πιο σφικτή και πιο νεανική εμφάνιση.",
  loss_of_weight: "Φυσική απώλεια βάρους",
  treatment_delivery: "Παροχή θεραπείας",
  cold_water: "Κρύο νερό (8°C έως 16°C)",
  skin_temp_1: "0°C έως 1.6°C",
  resulting_skin_temp: "Τελική θερμοκρασία δέρματος",
  skin_temp_2: "8°C έως 16°C",
  treatment_duration_1: "2 - 3 λεπτά",
  treatment_duration: "Διάρκεια θεραπείας",
  treatment_duration_2: "15 έως 20 λεπτά",
  high_comfort: "Υψηλή",
  comfort_level: "Επίπεδο άνεσης",
  low_comfort: "Χαμηλή",
  blood_cycle: "Αγγειοδιάταση / Εσωτερική κυκλοφορία αίματος",
  bodily_response: "Αντίδραση του σώματος",
  warmed_blood: "Αίμα που ζεσταίνεται προς τις περιφερειακές περιοχές",
  blood_enriched_yes: "Ναι",
  blood_enriched: "Εμπλουτίζει το αίμα",
  blood_enriched_no: "Όχι",
  increased_hemoglobin_yes: "Ναι",
  increased_hemoglobin: "Αυξάνει την υμοσφαιρίνη",
  increased_hemoglobin_no: "Όχι",
  blood_temp_increased: "Αυξημένη",
  blood_temp: "Αλλαγή θερμοκρασίας αίματος",
  blood_temp_decreased: "Μειωμένη",
  blood_circulation_yes: "Ναι",
  blood_circulation: "Βελτιώνει την κυκλοφορία του αίματος",
  blood_circulation_no: "Όχι",
  immune_system_yes: "Ναι",
  immune_system: "Βελτιώνει το ανοσοποιητικό σύστημα",
  immune_system_no: "Όχι",
  hyperthermia_no: "Όχι",
  hyperthermia: "Κίνδυνος υπερθερμίας",
  hyperthermia_yes: "Ναι",
  endorphin_release_yes: "Ναι",
  endorphin_release: "Απελευθέρωση ενδορφινών",
  endorphin_release_no: "Όχι",
  energy_boost: "Άμεσα / Ενίσχυση ενέργειας",
  exercise_return: "Χρόνος επιστροφής στη γυμναστική",
  exercise_return_hours: "12 έως 24 ώρες",
  improves_skin_yes: "Ναι",
  improves_skin: "Βελτιώνει την υγεία του δέρματος",
  improves_skin_no: "Όχι",
  increases_collagen_yes: "Ναι",
  increases_collagen: "Αυξάνει την παραγωγή κολλαγόνου",
  increases_collagen_no: "Όχι",
  health_profitability: "Κερδοφορία από την υγεία",
  fast_return: "Γρήγορη απόδοση επενδύσεων, μόνο 6 μήνες εκτιμώμενο ROI",
  pandemic_2020:
    "<strong>Η υγεία σήμερα είναι πιο πολύτιμη από υλικά πράγματα. Η πανδημία του 2020 έδειξε πόσο σημαντικό είναι να φροντίζουμε το σώμα και την υγεία μας.</strong> Γι' αυτό το Activ Cryo V2 είναι μια μεγάλη επενδυτική κίνηση, καλή για την υγεία των πελατών σας και καλή για τα επιχειρηματικά συμφέροντά σας ως ιδιοκτήτης.",
  cryo_journey:
    "Για να ξεκινήσετε το ταξίδι της επιχείρησης κρυοθεραπείας, χρειάζεστε μόνο 6 m2 δωμάτιο για να ξεκινήσετε. Το Cryosauna Activ Cryo V2 - είναι η σωστή επένδυση. Όταν οι άνθρωποι έρχονται για θεραπεία, επενδύουν στην υγεία τους. Επενδύοντας στην κρυοθεραπεία, μπορείτε να ξεκινήσετε μια αξιόπιστη επιχείρηση χωρίς μεγάλο κεφάλαιο, χωρίς να βάζετε όλα τα πάντα σε κίνδυνο.",
  tech_specs: "Τεχνικές προδιαγραφές",
  size: "Μέγεθος",
  width: "Πλάτος",
  length: "Μήκος",
  height: "Ύψος",
  weight: "Βάρος",
  energy_consumption: "Κατανάλωση ηλεκτρικής ενέργειας",
  power_supply: "Τροφοδοσία",
  temp_range: "Εύρος θερμοκρασίας",
  nitrogen_consumption: "Κατανάλωση αζώτου (Συνεδρία)",
  nitrogen_consumption_cabin: "Κατανάλωση αζώτου (Κατάψυξη καταστρώματος)",
  supports_health: "Υποστηρίξτε<br />την υγεία σας με θεραπείες κρυοθεραπείας",
  muscle_recovery: "Ανάκαμψη μυών",
  harder_longer_quicker:
    "Οι χρήστες του Activ Cryo V2 μπορούν να προπονηθούν πιο δύσκολα, περισσότερο και να ανακάμψουν πιο γρήγορα, βοηθώντας τους να επιτύχουν τα μέγιστα αποτελέσματα από τις προπονήσεις. Κατά τη διάρκεια μιας θεραπείας, καθώς οι θερμοκρασίες ψύχονται γρήγορα, ο οξυγόνο πιέζεται μέσω του σώματος για να βοηθήσει στη μείωση της φλεγμονής, την ανακούφιση του πόνου και την ανάκαμψη των μυών.",
  beauty_antiaging: "Ομορφιά & αντι-γήρανση",
  youthful_appearance:
    "Το Activ Cryo V2 μπορεί να βοηθήσει να διατηρήσετε μια νεανική εμφάνιση μειώνοντας τα σημάδια της γήρανσης, όπως τις ρυτίδες και τις λεπτές γραμμές, ενώ παράλληλα σφίγγει το δέρμα και μειώνει την κυτταρίτιδα. Η κρυοθεραπεία διεγείρει την παραγωγή κολλαγόνου στις βαθύτερες στρώσεις του δέρματος, με αποτέλεσμα μια πιο ομαλή, πιο σφικτή και πιο νεανική εμφάνιση.",
  loss_of_weight: "Φυσική απώλεια βάρους",
  health_and_wellness: "Υγεία & Ευεξία",
  pbc_treatment:
    "Επιστημονικές μελέτες έχουν δείξει ότι η θεραπεία PBC βοηθά τα άτομα να αντιμετωπίσουν την αϋπνία και να προκαλέσουν βαθύτερο ύπνο. Η θεραπεία μειώνει επίσης το άγχος και τη στρες, και βελτιώνει το ανοσοποιητικό σύστημα και τη λειτουργία των οργάνων.",
  immune_system_boost: "Ενίσχυση του ανοσοποιητικού συστήματος",
  anti_inflammatory_hormones:
    "Κατά τη διάρκεια της κρυοθεραπείας, η παραγωγή αντιφλεγμονώδων ορμονών αυξάνεται σημαντικά, μειώνοντας τη φλεγμονή στο σώμα. Αυτό συμβαίνει λόγω της αύξησης των ανοσοκυττάρων του σώματος. Αυτή η ενίσχυση του ανοσοποιητικού συστήματος βοηθά στην καταπολέμηση ιών και την αντιμετώπιση των παραγόντων που προκαλούν τους όγκους.",
  pain_management: "Διαχείριση πόνου",
  injury_recovery:
    "Το Activ Cryo V2 μειώνει τον πόνο και επιταχύνει τη διαδικασία ανάρρωσης από τραυματισμούς. Κατά τη διάρκεια μιας θεραπείας, το σώμα επιβραδύνει τη μετάδοση νευρικών σημάτων και απελευθερώνει ένα νευρομεσοθερευτικό που μειώνει την ευαισθησία στον πόνο. Η θεραπεία επίσης επιταχύνει τη διαδικασία ανάρρωσης ενισχύοντας τη ροή του αίματος με θρεπτικές ουσίες.",
  summary: "Σύνοψη",

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
