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
  ideal_treatment:
    "<span style='color: #dfc395;'>VA Body Sculpt</span> is the ideal treatment for those who dream of having a slim and fit figure!",
  electromagnetic_tech: "Advanced electromagnetic technology – HIFEM",
  electromagnetic_tech_description:
    "<strong>The device uses advanced high-frequency electromagnetic technology – HIFEM (High-Intensity Focused Electromagnetic Technology)</strong> – this energy is effective in building muscle as it is able to induce and sustain maximum muscle contractions for many seconds. It exercises the muscles with much more power and frequency than it is possible during any workout. Thanks to this, we achieve fast muscle build-up in a treated area. What is crucial, the build-up takes place naturally, without pathological hypertrophy, but at the same time to an extent that is not achievable in the same time with normal exercises. VA Body Sculpt builds muscles faster than any other training.</p>",
  confirmed_effects: "Effects confirmed by<br> numerous research results",
  changes_in_tissue:
    "Evidence of simultaneous changes in human adipose tissue and muscle tissue",
  waist_volume: "Waist volume<br> reduction",
  body_fat: " Average<br> reduction of body fat",
  muscle_mass_increase: "Average<br> increase in muscle mass",
  fat_down_muscle_up:
    "Reduction of <span class='text-gold'>body fat</span> and build-up of <span class='text-gold'>muscle mass</span>",
  muscle_fat_description:
    "<strong>Heavy effort of a particular muscle causes an increase in the metabolism of the surrounding fatty tissue which results in its reduction.</strong> So, VA Body Sculpt is a device that models figure in two ways. It builds muscle mass and reduces fatty tissue. During one treatment session that takes 30 minutes. VA Body Sculpt induces 20,000 contractions in a muscle. It’s like doing 20,000 sit-ups in half an hour, for example, when exercising your abdominal muscles. For fast results, treatments with VA Body Sculpt can be done even every other day. Of course, you need to wait for the muscle build-up effect up to 4 weeks after a minimum of 4 treatments.",
  muscle_contraction:
    "VA Body Sculpt with HIFEM induces approximately 20,000 muscle contractions per session",
  supramaximal:
    "Induced contractions, known as supramaximal contractions, cannot be achieved by voluntary muscle contraction.",
  two_in_one: "Two benefits, one<br> treatment",
  approximate_contractions:
    "<strong>approximately <span class='text-white' style='color: #fff !important;'>20,000</span> induced<br> contractions per session</strong>",
  not_all_about_the_fat: "Because it’s not only<br> about the fat...",
  voluntary_contractions:
    "Voluntary contractions can increase the demand for energy from fat cells. The released epinephrine gives a sign to fat cells to initiate lipolysis. The fat stored in the form of triglycerides is broken down to free fatty acids (FFA) and glycerol, which are used as energy sources.",
  intense_supramaximal:
    "Intense supramaximal contractions increase the production of epinephrine, which triggers a cascade effect leading to supramaximal lipolysis in fat cells. Since the stimulation is so rapid and intense, the lipolytic response is excessive and free fatty acids begin to accumulate in adipocytes.",
  excessive_flow:
    "Excessive flow of free fatty acids causes cell dysfunction and induction of apoptosis – programmed cell death3. The dead cells collapse and are naturally eliminated.",
  body_made_up:
    "<span class='text-gold'>30%</span> to <span class='text-gold'>40%</span> of the<br> body is made of<br> muscles",
  not_achievable_through:
    "VA Body Sculpt with HIFEM technology induces supramaximal muscle contractions that are not achievable through voluntary activity. When we subject fat tissue to supramaximal contractions, it is forced to adapt to such extreme conditions. The internal structure of the muscle is remodelled, resulting in the growth of myofibrils (muscle hypertrophy) and the formation of new muscle fibres (muscle hyperplasia). The consequence of this process is increased muscle density and volume (increased muscle mass).",
  before: "Before",
  after: "After",
  after_application: "Effects after application<br> VA Body Sculpt",
  unique_device:
    "The device, as one of the few on the<br> market, has <span class='text-underline text-gold'>four RF applicators</span> and a<br> <span class='text-underline'>pelvic muscle rehabilitation applicator</span>.",
  large_applicators:
    "<strong style='font-size: 32px;'>Large applicators</strong>",
  waist_and_belly: "For waist<br> and belly treatments and buttocks",
  small_applicators:
    "<strong style='font-size: 32px;'>Small applicators</strong>",
  biceps_and_triceps: "For use<br> on biceps, triceps and calves",
  pelvic_applicator:
    "<strong style='font-size: 32px;'>Pelvic applicator</strong>",
  hip_and_thighs: "For use<br> on the hip and thighs",
  radio_frequency: "Radio Frequency</span> pads",
  rf_method:
    "<strong>RF is a nonsurgical method of tightening your skin. The procedure involves using energy waves to heat the deep layer of your skin known as your dermis. This heat stimulates the production of collagen so that get skin firming and tightening results.</strong>",
  ideal_treatment_slim_fit:
    "The ideal treatment for those who dream of having a slim and fit figure.",
  pure_relaxation:
    " Workout with VA Body Sculpt is pure relaxation, as you simply lie comfortably on the treatment bed while the device does the exercises for you. The exercises are of such intensity and frequency that you will never be able to achieve!<br> VA Body Sculpt can be applied directly on the skin or through tight, thin clothing. After the treatment, there is absolutely no convalescence and no restrictions on activity, even sporting activity.",
  achievements: "Thanks to VA Body Sculpt treatments you achieve:",
  belly: "Belly",
  abdominal_visibility:
    "Visibility of the abdominal shape by increasing muscle mass with simultaneous loss of subcutaneous fat",
  firming_and_tightening: "Firming and tightening of flabby abdominal skin",
  abdomen_and_waist_reduce: "Fat reduction in the abdomen and waist area",
  waist_slimming: "Waist slimming",
  after_childbirth:
    "Strengthening of the abdominal muscles after childbirth along with the reduction of the diastasis of the rectus muscles",
  after_lipo_improvement:
    "Improvement of the appearance of the abdomen after liposuction: smoothing and tightening",
  arms_and_calves: "Arms and calves",
  desired_effect:
    "In men, VA Body Sculpt gives the desired effect of muscular and strong arms.",
  arms_defined_shape:
    "in women, after the procedure, the arms have a more defined shape, the muscles are marked and the fatty tissue is reduced",
  slender_look: "the arms look slender, with the shape of the muscles marked",
  flaccidity_reduction:
    "Skin tightening, reduction of flaccidity and sagging, especially in the area of ​​the brachial triceps",
  strengthen_calf_triceps:
    "the applicator working on calf modeling is designed to strengthen specific calf triceps muscles",
  buttocks: "Buttocks",
  non_invasive_lift:
    "Non-invasive buttock lift, meaning buttock lift without a scalpel",
  without_injection:
    "Firming of the buttocks without injections or convalescence",
  transformation_fat_into_muscle:
    "Reduction of fat tissue with simultaneous “transformation” of fat into muscle",
  modelling_of_buttocks:
    "Enlargement and modelling of the buttocks, the so-called Brazilian buttocks",
  strengthening_buttocks: "Strengthening the buttocks muscles",
  sculpture_of_buttocks:
    "Improvement of liposuction effects by bringing out the sculpture of the buttocks muscles",
  improved_effects_for_athletes:
    "Improvement of effects for bodybuilders, athletes, etc.",
  belly: "Belly",
  visibility_of_shape:
    "Visibility of the abdominal shape by increasing muscle mass with simultaneous loss of subcutaneous fat",
  firming_of_flabby: "Firming and tightening of flabby abdominal skin",
  fat_reduction_abdomen: "Fat reduction in the abdomen and waist area",
  waist_slimming_shady: "Waist slimming",
  strengthening_after_childbirth:
    "Strengthening of the abdominal muscles after childbirth along with the reduction of the diastasis of the rectus muscles",
  improvement_after_lipo:
    "Improvement of the appearance of the abdomen after liposuction: smoothing and tightening",
  clinic_advantages: "Clinic advantages",
  contouring_treatment:
    "ffer your clients the latest in cutting edge body contouring treatment technology.",
  let_it_work: "Just turn on and let the system do the work for you.",
  simple_and_easy: "Simple and easy to use operation.",
  zero_consumables: "Zero consumables.",
  no_side_effects: "Non-invasive, no downtime, no side effects and pain free.",
  four_applicators:
    "Comes with 4 applicators, allowing treatments for stomach, buttocks, arms and thighs.",
  tested_independently:
    "Clinically tested<br> in <span class='text-gold'>7 independent</span><br> studies",
  buttock_lift_treatment:
    "<strong>VA Body Sculpt is the only treatment that helps both women and men burn fat while toning the underlying muscles. Moreover, VA Body Sculpt® is the world’s first buttock lift treatment.</strong>",
  specifications: "Specifications",
  size: "Size",
  width: "Width",
  height: "Height",
  depth: "Depth",
  vibration_intensity: "Magnetic vibration intensity",
  frequency: "Frequency",
  power: "Power",
  pulse_width: "Pulse width",
  cooling: "Cooling",
  air_cooling: "Air cooling",
  rf_pads: "Radio frequency pads",
  number_of_pads: "Number of pads",

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

  //body
  ideal_treatment:
    "<span style='color: #dfc395;'>VA Body Sculpt</span> - идеальное лечение для тех, кто мечтает о стройной и подтянутой фигуре!",
  electromagnetic_tech: "Продвинутая электромагнитная технология - HIFEM",
  electromagnetic_tech_description:
    "<strong>Устройство использует передовую высокочастотную электромагнитную технологию - HIFEM (High-Intensity Focused Electromagnetic Technology)</strong> - эта энергия эффективно строит мышцы, так как она способна вызывать и поддерживать максимальные мышечные сокращения в течение нескольких секунд. Это упражнение мышц происходит с гораздо большей мощностью и частотой, чем возможно во время любой тренировки. Благодаря этому, мы достигаем быстрого наращивания мышц в обрабатываемой области. Что критично важно, наращивание происходит естественным путем, без патологической гипертрофии, но в то же время в объеме, который недостижим за то же время обычными упражнениями. VA Body Sculpt строит мышцы быстрее, чем любая другая тренировка.</p>",
  confirmed_effects:
    "Эффекты, подтвержденные<br> многочисленными исследованиями",
  changes_in_tissue:
    "Доказательства одновременных изменений в подкожной жировой ткани и мышечной ткани человека",
  waist_volume: "Уменьшение объема талии",
  body_fat: "Среднее снижение жира в теле",
  muscle_mass_increase: "Среднее увеличение мышечной массы",
  fat_down_muscle_up:
    "Снижение <span class='text-gold'>жира в теле</span> и увеличение <span class='text-gold'>мышечной массы</span>",
  muscle_fat_description:
    "<strong>Интенсивные усилия определенной мышцы вызывают увеличение обмена веществ окружающей жировой ткани, что приводит к ее снижению.</strong> Таким образом, VA Body Sculpt - это устройство, которое моделирует фигуру двумя способами. Оно увеличивает мышечную массу и снижает жировую ткань. За одну сеанс тренировки, который длится 30 минут, VA Body Sculpt вызывает 20 000 сокращений в мышце. Это как выполнение 20 000 подъемов туловища за полчаса, например, при тренировке мышц пресса. Для быстрых результатов процедуры с VA Body Sculpt можно проводить даже через день. Конечно, для достижения эффекта увеличения мышц придется подождать до 4 недель после минимум 4 процедур.",
  muscle_contraction:
    "VA Body Sculpt с технологией HIFEM вызывает примерно 20 000 сокращений мышц за один сеанс",
  supramaximal:
    "Вызываемые сокращения, известные как супрамаксимальные сокращения, не могут быть достигнуты с помощью добровольного сокращения мышц.",
  two_in_one: "Два преимущества, одна<br> процедура",
  approximate_contractions:
    "<strong>примерно <span class='text-white' style='color: #fff !important;'>20 000</span> сокращений, вызываемых<br> за один сеанс</strong>",
  not_all_about_the_fat: "Потому что не все<br> вращается вокруг жира...",
  voluntary_contractions:
    "Добровольные сокращения могут увеличить потребность в энергии у жировых клеток. Выделяемая эпинефрином дает сигнал жировым клеткам начать липолиз. Жир, хранящийся в виде триглицеридов, расщепляется на свободные жирные кислоты (FFA) и глицерол, которые используются в качестве источников энергии.",
  intense_supramaximal:
    "Интенсивные супрамаксимальные сокращения увеличивают производство эпинефрина, что запускает каскадный эффект, приводящий к супрамаксимальному липолизу в жировых клетках. Поскольку стимуляция настолько быстрая и интенсивная, липолитический ответ является избыточным, и свободные жирные кислоты начинают накапливаться в адипоцитах.",
  excessive_flow:
    "Избыточный поток свободных жирных кислот вызывает нарушение функции клеток и запускает программированную гибель клеток - апоптоз. Мертвые клетки разрушаются и естественным образом выводятся из организма.",
  body_made_up:
    "<span class='text-gold'>30%</span> до <span class='text-gold'>40%</span> тела состоит<br> из мышц",
  not_achievable_through:
    "VA Body Sculpt с технологией HIFEM вызывает супрамаксимальные сокращения мышц, которые недостижимы с помощью добровольной активности. Когда мы подвергаем жировую ткань супрамаксимальным сокращениям, она вынуждена адаптироваться к таким экстремальным условиям. Внутренняя структура мышц перестраивается, что приводит к росту миофибрилл (гипертрофия мышц) и образованию новых мышечных волокон (гиперплазия мышц). Последствием этого процесса является увеличение плотности и объема мышц (увеличение мышечной массы).",
  before: "До",
  after: "После",
  after_application: "Эффекты после применения<br> VA Body Sculpt",
  unique_device:
    "Устройство, как одно из немногих на рынке, имеет <span class='text-underline text-gold'>четыре аппликатора RF</span> и<br> <span class='text-underline'>аппликатор для реабилитации мышц тазового дна</span>.",
  large_applicators:
    "<strong style='font-size: 32px;'>Большие аппликаторы</strong>",
  waist_and_belly: "Для областей<br> талии и живота, а также ягодиц",
  small_applicators:
    "<strong style='font-size: 32px;'>Маленькие аппликаторы</strong>",
  biceps_and_triceps: "Для использования на<br> бицепсах, трицепсах и икрах",
  pelvic_applicator:
    "<strong style='font-size: 32px;'>Аппликатор для тазового дна</strong>",
  hip_and_thighs: "Для использования<br> на бедрах и ягодицах",
  radio_frequency: "Панели с радиочастотой",
  rf_method:
    "<strong>RF - это нехирургический метод укрепления кожи. Процедура включает использование энергетических волн для нагрева глубокого слоя кожи, известного как дерма. Это нагрев стимулирует производство коллагена, что приводит к уплотнению и укреплению кожи.</strong>",
  ideal_treatment_slim_fit:
    "Идеальное лечение для тех, кто мечтает о стройной и подтянутой фигуре.",
  pure_relaxation:
    "Тренировка с VA Body Sculpt - это чистое расслабление, так как вы просто комфортно лежите на лечебной кушетке, в то время как устройство выполняет упражнения за вас. Упражнения такой интенсивности и частоты, которых вы никогда не сможете достичь!<br> VA Body Sculpt можно использовать непосредственно на коже или через плотную, тонкую одежду. После процедуры нет абсолютно никакой реабилитации и ограничений в деятельности, включая занятия спортом.",
  achievements: "Благодаря процедурам с VA Body Sculpt вы достигаете:",
  belly: "Живот",
  abdominal_visibility:
    "Повышение видимости формы живота за счет увеличения мышечной массы при одновременном снижении подкожного жира",
  firming_and_tightening: "Уплотнение и подтяжка обвисшей кожи живота",
  abdomen_and_waist_reduce: "Уменьшение жира в области живота и талии",
  waist_slimming: "Сужение талии",
  after_childbirth:
    "Укрепление мышц пресса после родов в сочетании с уменьшением диастаза прямых мышц",
  after_lipo_improvement:
    "Улучшение внешнего вида живота после липосакции: выравнивание и уплотнение",
  arms_and_calves: "Руки и икры",
  desired_effect:
    "У мужчин VA Body Sculpt дает желаемый эффект мускулистых и крепких рук.",
  arms_defined_shape:
    "у женщин после процедуры руки приобретают более четкую форму, мышцы отмечены, а жировая ткань снижается",
  slender_look: "руки выглядят стройными, с очерченной формой мышц",
  flaccidity_reduction:
    "Уплотнение кожи, уменьшение обвисания и ослабления, особенно в области трехглавой мышцы плечевого пояса",
  strengthen_calf_triceps:
    "работающий на моделирование икроножных мышц аппликатор предназначен для укрепления определенных трехглавых мышц икры",
  buttocks: "Ягодицы",
  non_invasive_lift:
    "Неинвазивное подтяжка ягодиц, то есть подтяжка ягодиц без скальпеля",
  without_injection: "Укрепление ягодиц без инъекций и реабилитации",
  transformation_fat_into_muscle:
    "Уменьшение жировой ткани с одновременным «трансформированием» жира в мышцы",
  modelling_of_buttocks:
    "Увеличение и моделирование ягодиц, так называемые бразильские ягодицы",
  strengthening_buttocks: "Укрепление мышц ягодиц",
  sculpture_of_buttocks:
    "Улучшение результатов липосакции за счет выделения контура мышц ягодиц",
  improved_effects_for_athletes:
    "Улучшение результатов для бодибилдеров, спортсменов и т.д.",
  belly: "Живот",
  visibility_of_shape:
    "Повышение видимости формы живота за счет увеличения мышечной массы при одновременном снижении подкожного жира",
  firming_of_flabby: "Уплотнение и подтяжка обвисшей кожи живота",
  fat_reduction_abdomen: "Уменьшение жира в области живота и талии",
  waist_slimming_shady: "Сужение талии",
  strengthening_after_childbirth:
    "Укрепление мышц пресса после родов в сочетании с уменьшением диастаза прямых мышц",
  improvement_after_lipo:
    "Улучшение внешнего вида живота после липосакции: выравнивание и уплотнение",
  clinic_advantages: "Преимущества клиники",
  contouring_treatment:
    "Предложите вашим клиентам самое современное лечение контурной коррекции тела.",
  let_it_work: "Просто включите и позвольте системе сделать всю работу за вас.",
  simple_and_easy: "Простая и удобная в использовании.",
  zero_consumables: "Нулевое количество расходных материалов.",
  no_side_effects:
    "Неинвазивный, без времени восстановления, без побочных эффектов и безболезненный.",
  four_applicators:
    "Имеет 4 аппликатора, позволяющих проводить процедуры для живота, ягодиц, рук и бедер.",
  tested_independently:
    "Клинически протестировано<br> в <span class='text-gold'>7 независимых</span><br> исследованиях",
  buttock_lift_treatment:
    "<strong>VA Body Sculpt - единственная процедура, которая помогает как женщинам, так и мужчинам сжигать жир и одновременно укреплять подлежащие мышцы. Более того, VA Body Sculpt® - это первая в мире процедура лифтинга ягодиц.</strong>",
  specifications: "Технические характеристики",
  size: "Размер",
  width: "Ширина",
  height: "Высота",
  depth: "Глубина",
  vibration_intensity: "Интенсивность магнитных вибраций",
  frequency: "Частота",
  power: "Мощность",
  pulse_width: "Ширина импульса",
  cooling: "Охлаждение",
  air_cooling: "Охлаждение воздухом",
  rf_pads: "Панели с радиочастотой",
  number_of_pads: "Количество панелей",

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

  //body
  ideal_treatment:
    "<span style='color: #dfc395;'>VA Body Sculpt</span> είναι η ιδανική θεραπεία για όσους ονειρεύονται ένα λεπτό και εύσωμο σώμα!",
  electromagnetic_tech: "Προηγμένη ηλεκτρομαγνητική τεχνολογία - HIFEM",
  electromagnetic_tech_description:
    "<strong>Η συσκευή χρησιμοποιεί προηγμένη υψηλής συχνότητας ηλεκτρομαγνητική τεχνολογία - HIFEM (Τεχνολογία Υψηλής Εντατικότητας Συγκεντρωμένων Ηλεκτρομαγνητικών Κυμάτων)</strong> - αυτή η ενέργεια είναι αποτελεσματική στη δημιουργία μυών, καθώς μπορεί να προκαλέσει και να διατηρήσει μέγιστες συσπάσεις των μυών για πολλά δευτερόλεπτα. Ασκεί τους μύες με πολύ μεγαλύτερη δύναμη και συχνότητα από ό,τι είναι δυνατό κατά τη διάρκεια οποιασδήποτε προπόνησης. Χάρη σε αυτό, επιτυγχάνουμε γρήγορη οικοδόμηση μυών στην περιοχή που υποβάλλεται σε θεραπεία. Το κρίσιμο σημείο είναι ότι η οικοδόμηση λαμβάνει χώρα φυσικά, χωρίς παθολογική υπερτροφία, αλλά ταυτόχρονα σε ένα βαθμό που δεν είναι εφικτός στον ίδιο χρόνο με κανονικές ασκήσεις. Το VA Body Sculpt κτίζει μυς πιο γρήγορα από οποιαδήποτε άλλη προπόνηση.</p>",
  confirmed_effects:
    "Επιβεβαιωμένα αποτελέσματα με<br> πολλές ερευνητικές μελέτες",
  changes_in_tissue:
    "Αποδείξεις για ταυτόχρονες αλλαγές στο ανθρώπινο λιπώδες ιστό και στο μυϊκό ιστό",
  waist_volume: "Μείωση όγκου κοιλιάς",
  body_fat: " Μέση μείωση<br> λίπους σώματος",
  muscle_mass_increase: "Μέση αύξηση<br> μυϊκής μάζας",
  fat_down_muscle_up:
    "Μείωση του <span class='text-gold'>λίπους του σώματος</span> και αύξηση της <span class='text-gold'>μυϊκής μάζας</span>",
  muscle_fat_description:
    "<strong>Η έντονη προσπάθεια ενός συγκεκριμένου μυός προκαλεί αύξηση του μεταβολισμού του περιβάλλοντος λιπώδους ιστού, με αποτέλεσμα τη μείωσή του.</strong> Έτσι, το VA Body Sculpt είναι μια συσκευή που διαμορφώνει το σώμα με δύο τρόπους. Δημιουργεί μυϊκή μάζα και μειώνει το λιπώδες ιστό. Κατά τη διάρκεια μιας συνεδρίας που διαρκεί 30 λεπτά, το VA Body Sculpt προκαλεί 20.000 συσπάσεις σε ένα μυ. Είναι σαν να κάνετε 20.000 αναπτήρες σε μισή ώρα, για παράδειγμα, όταν ασκείτε τους κοιλιακούς μυς. Για γρήγορα αποτελέσματα, οι θεραπείες με το VA Body Sculpt μπορούν να γίνονται ακόμα και κάθε δεύτερη μέρα. Φυσικά, πρέπει να περιμένετε για το αποτέλεσμα οικοδόμησης μυών έως 4 εβδομάδες μετά από τουλάχιστον 4 θεραπείες.",
  muscle_contraction:
    "Το VA Body Sculpt με την τεχνολογία HIFEM προκαλεί περίπου 20.000 συσπάσεις μυών ανά συνεδρία",
  supramaximal:
    "Οι προκαλούμενες συσπάσεις, γνωστές ως υπερμεγέθεις συσπάσεις, δεν μπορούν να προκληθούν με εκούσια συσπάσεις μυών.",
  two_in_one: "Δύο οφέλη, μία<br> θεραπεία",
  approximate_contractions:
    "<strong>περίπου <span class='text-white' style='color: #fff !important;'>20.000</span> προκαλούμενες<br> συσπάσεις ανά συνεδρία</strong>",
  not_all_about_the_fat: "Επειδή δεν είναι μόνο<br> το λίπος...",
  voluntary_contractions:
    "Οι εκούσιες συσπάσεις μυών μπορούν να αυξήσουν τη ζήτηση ενέργειας από τα λιποκύτταρα. Το απελευθερωμένο επινεφρίνη δίνει σήμα στα λιποκύτταρα να ενεργοποιήσουν τη λιπόλυση. Το λίπος που είναι αποθηκευμένο σε μορφή τριγλυκεριδίων διασπάται σε ελεύθερα λιπαρά οξέα (FFA) και γλυκερίνη, τα οποία χρησιμοποιούνται ως πηγές ενέργειας.",
  intense_supramaximal:
    "Οι έντονες υπερμεγέθεις συσπάσεις αυξάνουν την παραγωγή επινεφρίνης, η οποία ενεργοποιεί μια κατάσταση καταρροής των λιπών σε λιποκύτταρα. Επειδή οι διεγέρσεις είναι τόσο γρήγορες και έντονες, η λιπολυτική ανταπόκριση είναι υπερβολική και τα ελεύθερα λιπαρά οξέα αρχίζουν να συσσωρεύονται στα λιποκύτταρα.",
  excessive_flow:
    "Η υπερβολική ροή ελεύθερων λιπαρών οξέων προκαλεί δυσλειτουργία των κυττάρων και ενεργοποίηση αποπνευματοποίησης - προγραμματισμένος κυτταρικός θάνατος3. Τα νεκρά κύτταρα καταρρέουν και εξαπολύονται φυσικά.",
  body_made_up:
    "<span class='text-gold'>30%</span> έως <span class='text-gold'>40%</span> του<br> σώματος αποτελείται<br> από μυς",
  not_achievable_through:
    "Η τεχνολογία HIFEM του VA Body Sculpt προκαλεί υπερμεγέθεις συσπάσεις μυών που δεν είναι εφικτές μέσω εκούσιας δραστηριότητας. Όταν υποβάλλουμε το λιπώδη ιστό σε υπερμεγέθεις συσπάσεις, αναγκάζεται να προσαρμοστεί σε τέτοιες ακραίες συνθήκες. Η εσωτερική δομή του μυϊκού ιστού αναδιαρθρώνεται, με αποτέλεσμα την αύξηση των μυοφιβρίλλων (μυική υπερτροφία) και το σχηματισμό νέων μυϊκών ινών (μυική υπερπλασία). Η συνέπεια αυτής της διαδικασίας είναι η αύξηση της πυκνότητας και του όγκου του μυϊκού ιστού (αύξηση της μυϊκής μάζας).",
  before: "Πριν",
  after: "Μετά",
  after_application: "Επιπτώσεις μετά την εφαρμογή του<br> VA Body Sculpt",
  unique_device:
    "Η συσκευή, ως μία από τις λίγες στην<br> αγορά, διαθέτει <span class='text-underline text-gold'>τέσσερις εφαρμογείς RF</span> και μια<br> <span class='text-underline'>εφαρμογή αποκατάστασης των μυών του λεκάνης</span>.",
  large_applicators:
    "<strong style='font-size: 32px;'>Μεγάλες εφαρμογείς</strong>",
  waist_and_belly: "Για θεραπείες κοιλιάς<br> και μέσης και γλουτών",
  small_applicators:
    "<strong style='font-size: 32px;'>Μικρές εφαρμογείς</strong>",
  biceps_and_triceps: "Για χρήση σε<br> μπράτσα, τρίκεψ και μηρούς",
  pelvic_applicator:
    "<strong style='font-size: 32px;'>Εφαρμογή για τη λεκάνη</strong>",
  hip_and_thighs: "Για χρήση στη λεκάνη<br> και τους μηρούς",
  radio_frequency: "Εφαρμογές ραδιοσυχνότητας</span>",
  rf_method:
    "<strong>Η ραδιοσυχνότητα είναι μια μη χειρουργική μέθοδος σύσφιξης του δέρματος. Η διαδικασία περιλαμβάνει τη χρήση κυμάτων ενέργειας για να θερμάνει το βαθύ στρώμα του δέρματός σας, γνωστό ως δερμικό στρώμα. Αυτή η θερμότητα ενεργοποιεί την παραγωγή κολλαγόνου για να επιτύχετε σφίξιμο και τόνωση του δέρματος.</strong>",
  ideal_treatment_slim_fit:
    "Η ιδανική θεραπεία για όσους ονειρεύονται ένα λεπτό και εύσωμο σώμα.",
  pure_relaxation:
    "Η προπόνηση με το VA Body Sculpt είναι απόλυτα χαλαρωτική, καθώς απλώς καθίστε άνετα στο κρεβάτι της θεραπείας ενώ η συσκευή κάνει τις ασκήσεις για εσάς. Οι ασκήσεις είναι τόσο έντονες και συχνές που δεν θα μπορούσατε ποτέ να επιτύχετε! Το VA Body Sculpt μπορεί να εφαρμοστεί απευθείας στο δέρμα ή μέσα από σφιχτά, λεπτά ρούχα. Μετά τη θεραπεία, δεν υπάρχει καθόλου ανάρρωση και κανένα περιορισμό στη δραστηριότητα, ακόμα και στην αθλητική δραστηριότητα.",
  achievements: "Με τις θεραπείες VA Body Sculpt επιτυγχάνετε:",
  belly: "Κοιλιά",
  abdominal_visibility:
    "Ορατότητα του σχήματος της κοιλιάς μέσω αύξησης της μυϊκής μάζας με ταυτόχρονη απώλεια του υποδόριου λίπους",
  firming_and_tightening: "Σύσφιξη και τόνωση του δέρματος της κοιλιάς",
  abdomen_and_waist_reduce: "Μείωση του λίπους στην κοιλιά και στη μέση",
  waist_slimming: "Λεπτές μέση",
  after_childbirth:
    "Ενδυνάμωση των μυών της κοιλιάς μετά τη γέννηση, μαζί με τη μείωση της διαστάσεως της διάστασης των ευθύς μυών",
  after_lipo_improvement:
    "Βελτίωση της εμφάνισης της κοιλιάς μετά τη λιποαναρρόφηση: εξομάλυνση και σύσφιξη",
  arms_and_calves: "Χέρια και γάμπες",
  desired_effect:
    "Στους άντρες, το VA Body Sculpt προσφέρει το επιθυμητό αποτέλεσμα των μυών και των δυνατών χεριών.",
  arms_defined_shape:
    "Στις γυναίκες, μετά τη διαδικασία, τα χέρια έχουν πιο καθορισμένο σχήμα, τα μυς είναι μαρκαρισμένα και το λιπώδες ιστό είναι μειωμένο",
  slender_look:
    "τα χέρια δείχνουν λεπτά, με το σχήμα των μυών να είναι μαρκαρισμένο",
  flaccidity_reduction:
    "Σύσφιξη του δέρματος, μείωση της χαλαρότητας και της κάθετης, ειδικά στην περιοχή των τρικεφάλων των μπράτσων",
  strengthen_calf_triceps:
    "η εφαρμογή που δουλεύει στον μυς της γάμπας έχει σχεδιαστεί για να ενισχύσει τους συγκεκριμένους μύες της γάμπας",
  buttocks: "Γλουτοί",
  non_invasive_lift:
    "Μη επεμβατική ανύψωση των γλουτών, που σημαίνει ανύψωση των γλουτών χωρίς ξυράφι",
  without_injection: "Σύσφιξη των γλουτών χωρίς ενέσεις ή ανάρρωση",
  transformation_fat_into_muscle:
    "Μείωση του λιπώδους ιστού με ταυτόχρονη μετατροπή του λίπους σε μυς",
  modelling_of_buttocks:
    "Μεγέθυνση και διαμόρφωση των γλουτών, οι λεγόμενοι γλουτοί της Βραζιλίας",
  strengthening_buttocks: "Ενδυνάμωση των μυών των γλουτών",
  sculpture_of_buttocks:
    "Βελτίωση των αποτελεσμάτων της λιποαναρρόφησης αναδεικνύοντας τη γλυπτική των μυών των γλουτών",
  improved_effects_for_athletes:
    "Βελτίωση των αποτελεσμάτων για bodybuilders, αθλητές κ.λπ.",
  belly: "Κοιλιά",
  visibility_of_shape:
    "Ορατότητα του σχήματος της κοιλιάς μέσω αύξησης της μυϊκής μάζας με ταυτόχρονη απώλεια του υποδόριου λίπους",
  firming_of_flabby: "Σύσφιξη του δέρματος της κοιλιάς",
  fat_reduction_abdomen: "Μείωση του λίπους στην κοιλιά και στη μέση",
  waist_slimming_shady: "Λεπτές μέση",
  strengthening_after_childbirth:
    "Ενδυνάμωση των μυών της κοιλιάς μετά τη γέννηση, μαζί με τη μείωση της διαστάσεως της διάστασης των ευθύς μυών",
  improvement_after_lipo:
    "Βελτίωση της εμφάνισης της κοιλιάς μετά τη λιποαναρρόφηση: εξομάλυνση και σύσφιξη",
  clinic_advantages: "Πλεονεκτήματα της κλινικής",
  contouring_treatment:
    "Προσφέρετε στους πελάτες σας την πιο πρόσφατη κορυφαία τεχνολογία ανάλυσης του σώματος.",
  let_it_work: "Απλώς αφήστε το σύστημα να δουλέψει για εσάς.",
  simple_and_easy: "Απλή και εύκολη λειτουργία.",
  zero_consumables: "Μηδενική κατανάλωση.",
  no_side_effects:
    "Μη επεμβατικό, χωρίς χρόνο ανάρρωσης, χωρίς παρενέργειες και χωρίς πόνο.",
  four_applicators:
    "Διατίθεται με 4 εφαρμογείς, επιτρέποντας θεραπείες για την κοιλιά, τους γλουτούς, τα χέρια και τους μηρούς.",
  tested_independently:
    "Κλινικά δοκιμασμένο<br> σε <span class='text-gold'>7 ανεξάρτητες</span><br> μελέτες",
  buttock_lift_treatment:
    "<strong>Το VA Body Sculpt είναι η μόνη θεραπεία που βοηθά τόσο γυναίκες όσο και άνδρες να καίνε λίπος ενώ ταυτόχρονα τονώνει τους υποκείμενους μύες. Επιπλέον, το VA Body Sculpt® είναι η πρώτη θεραπεία για την ανύψωση των γλουτών στον κόσμο.</strong>",
  specifications: "Προδιαγραφές",
  size: "Μέγεθος",
  width: "Πλάτος",
  height: "Ύψος",
  depth: "Βάθος",
  vibration_intensity: "Ένταση μαγνητικών δονήσεων",
  frequency: "Συχνότητα",
  power: "Ισχύς",
  pulse_width: "Διάρκεια παλμού",
  cooling: "Ψύξη",
  air_cooling: "Αερόψυξη",
  rf_pads: "Εφαρμογές ραδιοσυχνοτήτων",
  number_of_pads: "Αριθμός εφαρμογών",

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
