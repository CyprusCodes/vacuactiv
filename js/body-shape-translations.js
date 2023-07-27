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
    mt_p: "Treadmill under pressure with oxygen",
    mct: "Innovativve underpressure vacu treadmill",
    mtc_i: "<strong >Welcome to the future of fitness, where multi-disciplinary workouts do double and triple duty from the ground up, starting with the Bodyshape treadmill machine. An innovative fitness device that fuses cardio with skincare benefits.</strong > Closed capsule with a built-in treadmill (optionally with a stepper or a bicycle), in which the training is supported by infrared heating therapy, under pressure vacuum and other functions increasing the effectiveness of exercises, encouraging weight loss and cellulite reduction. Modernist look, intuitive operation, innovative technology – these features make Bodyshape give a completely new quality to slimming training.",
    tml: "Timeless solution for your business",
    tml_i: "Rehabilitation",
    tml_ii: "Sports center",
    rcp: "Recommended for places",
    rcp_i: "Hotel Gyms",
    tml_iii: "Fitness Clubs",
    pla: "Plenty <span class='qodef-st-title-light' >additional</span > <span class='qodef-st-title-light' >functions</span ><br /> combined in Bodyshape",
    pna: "Aromatherapy",
    pna_i: "Stimulates the body's immune system to function and restores its natural balance. The use of properly selected essential oils supports: regeneration of the epidermis, biological renewal of the body, fighting infections, circulation and oxygenation of the blood.",
    pno: "Ozonetherapy",
    pno_i: "Uses the natural properties of ozone, i.e. a strong bactericidal and fungicidal stimulant. This element also has significant oxidizing properties. The mixture of oxygen and ozone is the most effective weapon in the fight against microorganisms that attack the human body. Ozone therapy is used in the case of bacterial infections, to stimulate the circulatory system and to improve cell metabolism.",
    pnc: "Collagen lamp",
    pnc_i: "The simulation of skin cellular activity by means of red light with an appropriately selected wavelength The light penetrates deep into the skin and additionally stimulates the processes of its self-healing and reconstruction. In this way, the healing of wounds and the disappearance of scars is accelerated. The aging process of the skin also slows down - collagen and elastin fibers are rebuilt.",
    pnr: "Color therapy",
    pnr_i: "Based on the use of properly selected colors that affect the functioning of the body. A specific color of light stimulates the brain to specific hormonal reactions, and the hormones produced in the glands are transmitted through the bloodstream to internal organs, activating them and regulating their work. Chromotherapy increases immunity, gives additional energy, restores the body's balance, calms down and increases the overall level of satisfaction.",
    pni: "Ionization",
    pni_i: "Our environment today is full of positive ions produced by electronic equipment. Being in such an environment increases sleepiness, worsens general well-being and increases fatigue. This function enriches the air with health ions, improving the psychophysical functioning of the body, which also receives a portion of additional energy.",
    pne: "Electrostimulation",
    pne_i: "Stimulates the muscles with low-frequency current. Using special electrodes, it makes it possible to work on selected parts of the body - supplies hard-to-reach places with necessary substances. Electrostimulation reduces tension and improves the process of nourishing the muscles, improves blood supply to tissues, and also has an analgesic effect.",
    pnt: "Treadmill",
    pnt_i: " <strong >Manufactured directly by Vacu Activ on special components.</strong > Equipped with a powerful <strong >three-phase brushless motor</strong > that guarantees failure-free operation.",
    mxs: "Maximum<br /> speed",
    mxs_i: "12<sub>km/h</sub>",
    bltw: "Belt<br />width",
    bltw_i: "50<sub>cm</sub>",
    mxi: "Maximum<br /> incline",
    mxi_i: "10°",
    mxl: "Maximum<br /> load",
    mxl_i: "180<sub>kg</sub>",
    tt_u: "Underpressure",
    ttu_p: " <strong >Generated by a specially designed vacu pump, which increases several times the efficiency of each training session. </strong >Thanks to vacuum-pressurized technology training is three times more effective than traditional equipment, and show results three times faster. To start training, patient need to put on special neoprene A-line skirt on the hop on the Bodyshape treadmill and when session is lunched, it will sucked down into the treadmill and forced to resist while walking. This pressure, as well as treadmill speed and incline are all adjustable.",
    lcl: "<strong>Loss of cellulite</strong>",
    lcl_i: "<small >Eliminates cellulite<br /> <strong >up to 80%</strong ></small >",
    rcr: "<strong> Reducing circumference </strong>",
    rcr_i: "<small >reduction in circumference<br /> <strong >from 8 to 20 cm</strong ></small >",
    mxnp: "Maximum negative pressure",
    mxp_u: "up to",
    mp_t: "30<sub>mBar</sub>",
    sp_i: "- supports fat burning",
    sp_ii: "- slims and shapes the figure",
    sp_iii: "- improves blood circulation (smooth, lastic and firm skin)",
    sp_iiii: "- improves the functioning of the circulatory and lymphatic systems.",
    ifr: "Infrared IR",
    ifr_p: "<strong >Modern radiators provide the full spectrum of infrared radiation IR-A, IR-B and IR-C. </strong >They deliver healing thermal radiation directly to the deep subcutaneous layers. In this way, they accelerate the metabolic process, dilate blood vessels, improve blood flow and oxygenate tissues.",
    pa_c: "<strong >Cellulite reduction</strong",
    pa_i: "<small >Significantly and safely reduced<br /> <strong >up to 85%</strong ></small >",
    ltg_i: "<strong> Reduce Pain</strong>",
    ltg_ii: "<small>Cut osteoarthritis-related pain<br /> <strong>by more than 50%</strong></small>",
    ifr_r: "IR radiation range",
    upt: "up to",
    upt_t: "1400<sub>nm</sub>",
    upt_i: "- cleansing the body of toxins,",
    upt_ii: "- treatment of injuries and<strong>rheumatism</strong>,",
    upt_iii: "- discharge of stress tensions, ",
    upt_iiii: "- reduce the feeling of fatigue, ",
    upt_iiiii: "- fat burning, ",
    upt_iiiiii: "- skin firming.",
    cpw: "Comparison of<br /> a 30 min workout",
    cpw_i: "<span class='qodef-pb-title' >Bodyshape treadmill</span > <span class='qodef-pb-percent'>0</span>",
    cpw_ii: "<span class='qodef-pb-title' >Regular treadmill</span > <span class='qodef-pb-percent'>0</span>",
    cpw_iii: "over",
    cpw_v: "76%",
    cpw_vi: "more calories<br /> burned",
    cp_vii: "Visible effects<br />after",
    cp_iv: "4-5",
    cp_iiv: "sessions",
    cpw_iv: "Innovative fitness technology for weight loss",
    cpw_iiv: "<strong >Uniting our achievements in science and engineering, we have created quality products that outperform our competitors and eclipses the benefits of traditional fitness equipment.</strong > Through our advanced vacuum compression &amp; infrared technology, our devices activate your body’s ability to target and burn specific areas of fat and cellulite, making it much easier for your body to rid itself of deeply stored fat.",
    cpw_iiiv: "<strong >The technology used in Bodyshape</strong > machine has been tested and proven to work. Lose weight, inches and at the same time get smoother and tighter skin in <strong>less than 10 sessions</strong>.",
    ct_n: "New, bigger<br />touchscreen",
    ctn_i: "13,3<sup>- inch</sup>",
    ctm: "Multivision enrich your training",
    ctm_i: "<strong >This innovative feature enriches the training with a virtual view, synchronized with your training.</strong > Imagine biking along the coast of Los Angeles, through the streets of Venice, among the desert sands or forest wilderness are just a few of the many possibilities offered by Multivision.",
    ctr: "Virtual track<br />screen",
    ctr_i: "Run a full-screen virtual run and enjoy amazing views while exercising on the interactive Bodyshape treadmill. You do not have to swich between screens to change training parameters, all controls and information are at your fingertips.",
    cts: "Set patient parameters",
    cts_i: "We have implemented in the software the ability to set user parameters such as gender, height, weight and age to get accurate calories burned summary after the training session.",
    ctt: "Training screen",
    ctt_p: "<strong>The training screen allows you to easily monitor and change the parameters of the functions in real time.</strong > Modify the infrared power, vacuum, treadmill speed, incline angle and more.",
    vts: "Virtual track selection",
    vts_p: "<strong >The virtual run function allows you to choose a place in the world where you want to train.</strong > The screen will display a video recording during your training session. You can run in Buenos Aires, Los Angeles, Italy, Costa Rica, Chicago or San Francisco.",
    vst: "Virtual track<br /> screen",
    vst_p: "Run a full-screen virtual run and enjoy amazing views while exercising on the interactive Bodyshape treadmill. You do not have to switch between screens to change training parameters, all controls and information are at your fingertips.",
    yba: "Your best app at your fingertips",
    yba_p: " During training it is also possible to use the apps like (Facebook, YouTube, Spotify, Netflix and play videos or audio files). Infrashape Horizontal is compatible with mobile devices – iPods, iPhones or Android smartphones can be easily connected to it.",
    tsd: "13,3 -inch col<br />touch screen",
    tsd_i: "Display virtual run, favorite movies or manage in an easy eay to all funcions on a large, touch screen.",
    tit: "Interactive treadmill",
    tit_p: "The Bodyshape treadmill combines many funcions and technological solutions to take your studio to the next level of exercise.",
    tat: "Steel arms",
    tat_p: "Stable, high quality handles, facilitate exercises on the Bodyshape treadmill",
    tld: "LED Lights",
    tld_p: "LED backlight gives a unique appearance of the device that perfectly composes into your modern fitness studio",
    tlf: "Ideal for fitness gym",
    tlf_p: "Interactive treadmill that revolutionizes your studio offer",
    shb: "Several health benefits<br /> thanks to one device",
    shb_i: "<strong >Faster metabolism</strong ><br /> <small >Speeds up the metabolic processes of the body.<br /> </small>",
    shb_ii: "<strong>Weight loss</strong ><br /> <small >Helps to achieve your dream figure as it burns many calories quickly.</small >",
    shb_iii: "<strong >Improve circulation</strong ><br /> <small >Improves blood flow and the entire lymphatic system.</small >",
    shb_iv: "<strong>Relax muscles</strong ><br /> <small >Ease joint pain and soothe tired muscles and tissues.</small >",
    shb_v: "<strong >Reduces cellulites</strong ><br /> <small >Eliminates cellulite and flushes fat deposits from under the skin.</small >",
    shb_vi: "<strong>Rejuvenation</strong ><br /> <small >Regenerates skin cells and promotes elasticity for firmer, beautiful, and youthful skin.</small >",
    smmr: "Summary",
    spf: "Specifications",
    spf_s: "Size",
    spf_w: "<div>Width</div> <div>123 cm (48,43 inches)</div>",
    spf_l: "<div>Width</div> <div>228 cm (89,76 inches)</div>",
    spf_h: "<div>Height</div> <div>159 cm (62,60 inches)</div>",
    spf_e: "<div>Weight</div> <div>230 kg</div>",
    spf_v: "<div>Voltage</div> <div>230 VAC / 50Hz / 1PH</div>",
    spf_p: "<div>Power consumption</div> <div>2.5 kW</div>",
    spf_i: "<div>Infrared temperature range</div> <div>25-50°C</div>",
    spf_ri: "<div>Infrared Lamp power</div> <div>350W</div>",
    spf_n: "<div>Number of Infrared Lamp</div> <div>2x</div>",
    spf_vr: "<div>Vacuum range</div> <div>0-30 mBar</div>",
    spf_vp: "<div>Vacuum power</div> <div>1500 W</div>",
    spf_t: "<div>Treadmill speed range</div> <div>1-12 km/h</div>",
    spf_ti: "<div>Treadmill incline range</div> <div>0-10°</div>",
    spf_m: "<div>Maximum load</div> <div>180 kg</div>",
    spf_td: "<div>Touch display size</div> <div>13,3 -inch</div>",







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
    mt_p: "Беговая дорожка под давлением с кислородом",
mct: "Инновационная вакуумная беговая дорожка под давлением",
mtc_i: "<strong>Добро пожаловать в будущее фитнеса, где многопрофильные тренировки в двойном и тройном объеме начинаются с беговой дорожки Bodyshape. Инновационное фитнес-устройство, объединяющее кардиотренировку с уходом за кожей.</strong> Закрытая капсула с встроенной беговой дорожкой (опционально с подножкой или велосипедом), на которой тренировки поддерживаются инфракрасной терапией с поддержкой вакуума и другими функциями, увеличивающими эффективность упражнений, стимулирующими потерю веса и уменьшение целлюлита. Современный дизайн, интуитивное управление, инновационные технологии – все это делает Bodyshape дарит новое качество для программ по похудению.",
tml: "Вечное решение для вашего бизнеса",
tml_i: "Реабилитация",
tml_ii: "Спортивный центр",
rcp: "Рекомендуется для мест",
rcp_i: "Спортивные залы отелей",
tml_iii: "Фитнес-клубы",
pla: "Множество <span class='qodef-st-title-light'>дополнительных</span> <span class='qodef-st-title-light'>функций</span><br /> объединено в Bodyshape",
pna: "Ароматерапия",
pna_i: "Стимулирует иммунную систему организма и восстанавливает естественное равновесие. Использование правильно подобранных эфирных масел поддерживает: регенерацию эпидермиса, биологическое обновление организма, борьбу с инфекциями, кровообращение и оксигенацию крови.",
pno: "Озонотерапия",
pno_i: "Использует природные свойства озона, такие как сильный бактерицидный и фунгицидный стимулятор. Этот элемент также обладает значительными окислительными свойствами. Смесь кислорода и озона является наиболее эффективным средством в борьбе с микроорганизмами, атакующими человеческий организм. Озонотерапия используется в случае бактериальных инфекций, для стимуляции кровообращения и улучшения обмена веществ в клетках.",
pnc: "Коллагеновая лампа",
pnc_i: "Моделирование клеточной активности кожи с помощью красного света с правильно выбранным длиной волны. Свет проникает глубоко в кожу и дополнительно стимулирует процессы ее самовосстановления и реконструкции. Таким образом, ускоряется заживление ран и исчезновение шрамов. Процесс старения кожи также замедляется - восстанавливаются коллагеновые и эластиновые волокна.",
pnr: "Цветотерапия",
pnr_i: "Основана на использовании правильно подобранных цветов, которые влияют на работу организма. Конкретный цвет света стимулирует мозг к определенным гормональным реакциям, и гормоны, вырабатываемые железами, передаются через кровь к внутренним органам, активируя их и регулируя их работу. Хромотерапия увеличивает иммунитет, дает дополнительную энергию, восстанавливает баланс организма, успокаивает и повышает общий уровень удовлетворенности.",
pni: "Ионизация",
pni_i: "Сегодня наше окружение полно положительных ионов, которые вырабатываются электронным оборудованием. Пребывание в такой среде увеличивает сонливость, ухудшает общее состояние и вызывает усталость. Эта функция обогащает воздух здоровыми ионами, улучшая психофизическую функцию организма, который также получает дополнительную энергию.",
pne: "Электростимуляция",
pne_i: "Стимулирует мышцы низкочастотным током. Используя специальные электроды, это позволяет работать на выбранных частях тела и доставлять необходимые вещества в труднодоступные места. Электростимуляция снимает напряжение и улучшает процесс питания мышц, улучшает кровообращение в тканях, а также имеет анальгезирующий эффект.",
pnt: "Беговая дорожка",
pnt_i: "<strong>Производится непосредственно компанией Vacu Activ на специальных компонентах.</strong> Оборудована мощным безщеточным трехфазным двигателем, который обеспечивает безотказную работу.",
mxs: "Максимальная<br />скорость",
mxs_i: "12<sub>км/ч</sub>",
bltw: "Ширина<br />полотна",
bltw_i: "50<sub>см</sub>",
mxi: "Максимальный<br />наклон",
mxi_i: "10°",
mxl: "Максимальная<br />нагрузка",
mxl_i: "180<sub>кг</sub>",
tt_u: "Под давлением",
ttu_p: "<strong>Образуется благодаря специально разработанному вакуумному насосу, который увеличивает эффективность каждой тренировочной сессии в несколько раз.</strong> Благодаря технологии вакуум-компрессии тренировки становятся втрое более эффективными по сравнению с традиционным оборудованием, и результаты показываются втрое быстрее. Для начала тренировки пациент должен надеть специальную юбку из неопрена на беговую дорожку Bodyshape, и когда сессия начнется, она будет притянута внутрь беговой дорожки и противостоять при ходьбе. Это давление, а также скорость и наклон беговой дорожки, все можно регулировать.",
lcl: "<strong>Уменьшение целлюлита</strong>",
lcl_i: "<small>Устраняет целлюлит<br /><strong>до 80%</strong></small>",
rcr: "<strong>Уменьшение объема</strong>",
rcr_i: "<small>Снижение объема<br /><strong>от 8 до 20 см</strong></small>",
mxnp: "Максимальное отрицательное давление",
mxp_u: "до",
mp_t: "30<sub>мБар</sub>",
sp_i: "- поддерживает сжигание жира",
sp_ii: "- утоньшает и формирует фигуру",
sp_iii: "- улучшает кровообращение (гладкая, упругая и тонкая кожа)",
sp_iiii: "- улучшает работу кровеносной и лимфатической систем.",
ifr: "Инфракрасный излучатель IR",
ifr_p: "<strong>Современные радиаторы предоставляют полный спектр инфракрасного излучения IR-A, IR-B и IR-C.</strong> Они направляют лечебное тепловое излучение прямо в глубокие подкожные слои. Таким образом, они ускоряют метаболический процесс, расширяют кровеносные сосуды, улучшают кровообращение и оксигенируют ткани.",
pa_c: "<strong>Уменьшение целлюлита</strong>",
pa_i: "<small>Значительное и безопасное<br /><strong>снижение до 85%</strong></small>",
ltg_i: "<strong>Уменьшение боли</strong>",
ltg_ii: "<small>Уменьшение боли, связанной с остеоартритом<br /><strong>более чем на 50%</strong></small>",
ifr_r: "Диапазон ИК излучения",
upt: "до",
upt_t: "1400<sub>нм</sub>",
upt_i: "- очищение организма от токсинов,",
upt_ii: "- лечение травм и <strong>ревматизма</strong>,",
upt_iii: "- снятие стрессовых напряжений,",
upt_iiii: "- снижение чувства усталости,",
upt_iiiii: "- сжигание жира,",
upt_iiiiii: "- упругость кожи.",
cpw: "Сравнение 30-минутной тренировки",
cpw_i: "<span class='qodef-pb-title'>Беговая дорожка Bodyshape</span> <span class='qodef-pb-percent'>0</span>",
cpw_ii: "<span class='qodef-pb-title'>Обычная беговая дорожка</span> <span class='qodef-pb-percent'>0</span>",
cpw_iii: "на",
cpw_v: "76%",
cpw_vi: "больше сожженных<br />калорий",
cp_vii: "Видимые результаты<br />после",
cp_iv: "4-5",
cp_iiv: "сессий",
cpw_iv: "Инновационные фитнес-технологии для похудения",
cpw_iiv: "<strong>Объединив наши достижения в науке и технике, мы создали качественные продукты, превосходящие наших конкурентов и перекрывающие преимущества традиционного фитнес-оборудования.</strong> Благодаря нашим передовым технологиям вакуумной компрессии и инфракрасной терапии, наши устройства активируют способность вашего организма сосредотачиваться на определенных участках жира и целлюлита, что значительно облегчает избавление организма от глубоко запасенного жира.",
cpw_iiiv: "<strong>Технология, используемая в машине Bodyshape</strong>, была проверена и доказана своей эффективностью. Похудеть, уменьшить объем и одновременно получить более гладкую и упругую кожу можно за <strong>менее чем за 10 сессий</strong>.",
ct_n: "Новый, больший<br />сенсорный экран",
ctn_i: "13,3<sup>-дюймовый</sup>",
ctm: "Многовариантное обогащение вашей тренировки",
ctm_i: "<strong>Эта инновационная функция обогащает тренировку виртуальным видом, синхронизированным с вашими упражнениями.</strong> Представьте себе езду на велосипеде вдоль побережья Лос-Анджелеса, по улицам Венеции, среди песчаных дюн или лесных дебрей - это лишь несколько из множества возможностей, предлагаемых Multivision.",
ctr: "Виртуальный трек<br />на экране",
ctr_i: "Запустите виртуальный забег на полноэкранном режиме и наслаждайтесь потрясающими видами во время занятий на интерактивной беговой дорожке Bodyshape. Вам не нужно переключаться между экранами для изменения параметров тренировки, все управление и информация находятся у вас под рукой.",
cts: "Установка параметров пользователя",
cts_i: "Мы реализовали возможность задавать параметры пользователя, такие как пол, рост, вес и возраст, чтобы получать точную информацию о сжигаемых калориях после тренировки.",
ctt: "Экран тренировки",
ctt_p: "<strong>Экран тренировок позволяет легко контролировать и в реальном времени изменять параметры функций.</strong> Модифицируйте инфракрасную мощность, вакуум, скорость беговой дорожки, угол наклона и многое другое.",
vts: "Выбор виртуального трека",
vts_p: "<strong>Функция виртуального бега позволяет выбрать место в мире, где вы хотите тренироваться.</strong> На экране будет показано видео во время вашей тренировки. Вы можете бегать в Буэнос-Айресе, Лос-Анджелесе, Италии, Коста-Рике, Чикаго или Сан-Франциско.",
vst: "Экран виртуального трека",
vst_p: "Запустите полноэкранный виртуальный бег и наслаждайтесь удивительными видами во время тренировки на интерактивной беговой дорожке Bodyshape. Вам не придется переключаться между экранами для изменения параметров тренировки, все управление и информация находятся под рукой.",
yba: "Лучшее приложение у ваших рук",
yba_p: "Во время тренировки вы также можете использовать приложения, такие как (Facebook, YouTube, Spotify, Netflix) и воспроизводить видео или аудиофайлы. Infrashape Horizontal совместим с мобильными устройствами - iPods, iPhones или смартфонами на Android, и легко с ними соединиться.",
tsd: "13,3-дюймовый сенсорный экран",
tsd_i: "Просматривайте виртуальный бег, любимые фильмы или управляйте всеми функциями на большом сенсорном экране легко и удобно.",
tit: "Интерактивная беговая дорожка",
tit_p: "Беговая дорожка Bodyshape сочетает в себе множество функций и технологических решений для повышения уровня ваших тренировок.",
tat: "Стальные ручки",
tat_p: "Надежные, высококачественные ручки облегчают упражнения на беговой дорожке Bodyshape.",
tld: "Светодиодные огни",
tld_p: "Светодиодная подсветка придает устройству уникальный внешний вид, который отлично вписывается в современную фитнес-студию.",
tlf: "Идеально подходит для фитнес-зала",
tlf_p: "Интерактивная беговая дорожка, которая революционизирует вашу предложение студии.",
shb: "Несколько преимуществ для здоровья благодаря одному устройству",
shb_i: "<strong>Ускорение обмена веществ</strong><br /><small>Ускоряет обменные процессы в организме.</small>",
shb_ii: "<strong>Похудение</strong><br /><small>Помогает достичь желаемой фигуры, быстро сжигая много калорий.</small>",
shb_iii: "<strong>Улучшение кровообращения</strong><br /><small>Повышает кровоток и улучшает работу лимфатической системы.</small>",
shb_iv: "<strong>Расслабление мышц</strong><br /><small>Уменьшает боли в суставах и снимает усталость мышц и тканей.</small>",
shb_v: "<strong>Уменьшение целлюлита</strong><br /><small>Устраняет целлюлит и выводит жировые отложения из-под кожи.</small>",
shb_vi: "<strong>Омоложение</strong><br /><small>Регенерирует клетки кожи и способствует упругости для красивой и молодой кожи.</small>",
smmr: "Сводка",
spf: "Технические характеристики",
spf_s: "размер",
spf_w: "<div>Ширина</div> <div>123 см (48,43 дюйма)</div>",
spf_l: "<div>Длина</div> <div>228 см (89,76 дюймов)</div>",
spf_h: "<div>Высота</div> <div>159 см (62,60 дюймов)</div>",
spf_e: "<div>Вес</div> <div>230 кг</div>",
spf_v: "<div>Напряжение</div> <div>230 В переменного тока / 50 Гц / 1 фаза</div>",
spf_p: "<div>Потребляемая мощность</div> <div>2.5 кВт</div>",
spf_i: "<div>Диапазон инфракрасной температуры</div> <div>25-50°C</div>",
spf_ri: "<div>Мощность инфракрасной лампы</div> <div>350 Вт</div>",
spf_n: "<div>Количество инфракрасных ламп</div> <div>2 шт.</div>",
spf_vr: "<div>Диапазон вакуума</div> <div>0-30 мбар</div>",
spf_vp: "<div>Мощность вакуума</div> <div>1500 Вт</div>",
spf_t: "<div>Диапазон скорости беговой дорожки</div> <div>1-12 км/ч</div>",
spf_ti: "<div>Диапазон угла наклона беговой дорожки</div> <div>0-10°</div>",
spf_m: "<div>Максимальная нагрузка</div> <div>180 кг</div>",
spf_td: "<div>Размер сенсорного дисплея</div> <div>13,3 дюйма</div>",

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
    mt_p: "Διάδρομος υπό πίεση με οξυγόνο",
mct: "Καινοτόμος υπόπιεση διάδρομος κενού",
mtc_i: "<strong>Καλώς ήλθατε στο μέλλον της φυσικής κατάστασης, όπου οι πολυδιάστατες προπονήσεις επιτελούν διπλό και τριπλό καθήκον από το έδαφος, ξεκινώντας με τη συσκευή Bodyshape treadmill. Μια καινοτόμος συσκευή φυσικής κατάστασης που συνδυάζει την καρδιοαναπνευστική αντοχή με οφέλη περιποίησης της επιδερμίδας.</strong> Κλειστή κάψουλα με ενσωματωμένο διάδρομο (προαιρετικά με stepper ή ποδήλατο), στον οποίο η εκγύμναση υποστηρίζεται από θεραπεία θέρμανσης με υπερκόκκινη ακτινοβολία, υπό πίεση κενού και άλλες λειτουργίες που αυξάνουν την αποτελεσματικότητα των ασκήσεων, ενθαρρύνοντας την απώλεια βάρους και τη μείωση της κυτταρίτιδας. Μοντέρνα εμφάνιση, εύκολη λειτουργία, καινοτόμος τεχνολογία - αυτά τα χαρακτηριστικά κάνουν το Bodyshape να προσδίδει μια εντελώς νέα ποιότητα στη διαδικασία αδυνατίσματος.</p>",
tml: "Αδιάχρονη λύση για την επιχείρησή σας",
tml_i: "Αποκατάσταση",
tml_ii: "Κέντρο αθλητισμού",
rcp: "Προτείνεται για χώρους",
rcp_i: "Γυμναστήρια Ξενοδοχείων",
tml_iii: "Αθλητικά Κέντρα",
pla: "Πολλές <span class='qodef-st-title-light'>πρόσθετες</span> <span class='qodef-st-title-light'>λειτουργίες</span><br /> που συνδυάζονται στο Bodyshape",
pna: "Αρωματοθεραπεία",
pna_i: "Ενισχύει το ανοσοποιητικό σύστημα του σώματος και αποκαθιστά τη φυσική του ισορροπία. Η χρήση κατάλληλα επιλεγμένων αιθέριων ελαίων υποστηρίζει την αναγέννηση της επιδερμίδας, τη βιολογική ανανέωση του σώματος, την καταπολέμηση λοιμώξεων, την κυκλοφορία και οξυγόνωση του αίματος.",
pno: "Οζονοθεραπεία",
pno_i: "Χρησιμοποιεί τις φυσικές ιδιότητες του όζοντος, δηλαδή ισχυρό βακτηριοκτόνο και μυκητοκτόνο διεγερτικό. Αυτό το στοιχείο έχει επίσης σημαντικές ιδιότητες οξειδωτικής δράσης. Το μείγμα οξυγόνου και όζοντος είναι το πιο αποτελεσματικό όπλο κατά των μικροοργανισμών που επιτίθενται στο ανθρώπινο σώμα. Η οζονοθεραπεία χρησιμοποιείται σε περιπτώσεις βακτηριακών λοιμώξεων, για να ενεργοποιήσει το κυκλοφορικό σύστημα και να βελτιώσει το μεταβολισμό των κυττάρων.",
pnc: "Λάμπα κολλαγόνου",
pnc_i: "Η προσομοίωση της κυτταρικής δραστηριότητας του δέρματος μέσω κόκκινου φωτός με κατάλληλο κύμα μήκους. Το φως διεισχύει βαθιά στο δέρμα και ενισχύει επιπλέον τις διαδικασίες αυτοθεραπείας και ανοικοδόμησής του. Με αυτόν τον τρόπο, επιταχύνεται η θεραπεία των πληγών και εξαφανίζονται τα ουλές. Ο διαδικαστικός χρόνος του δέρματος επιβραδύνεται επίσης - τα ίνια κολλαγόνου και ελαστίνης ανασυστήνονται.",
pnr: "Χρωμοθεραπεία",
pnr_i: "Βασίζεται στη χρήση κατάλληλων επιλεγμένων χρωμάτων που επηρεάζουν τη λειτουργία του σώματος. Ένα συγκεκριμένο χρώμα φωτός διεγείρει τον εγκέφαλο σε συγκεκριμένες ορμονικές αντιδράσεις, και τα ορμόνια που παράγονται στους αδένες μεταφέρονται μέσω της κυκλοφορίας του αίματος στα εσωτερικά όργανα, ενεργοποιώντας τα και ρυθμίζοντας τη λειτουργία τους. Η χρωμοθεραπεία αυξάνει την ανοσία, προσφέρει επιπλέον ενέργεια, αποκαθιστά την ισορροπία του σώματος, ηρεμεί και αυξάνει τον συνολικό βαθμό ικανοποίησης.",
pni: "Ιονισμός",
pni_i: "Η περιβάλλον μας σήμερα είναι γεμάτο θετικά ιόντα που παράγονται από ηλεκτρονικό εξοπλισμό. Η παραμονή σε ένα τέτοιο περιβάλλον αυξάνει την κατανάλωση ενέργειας, χειροτερεύει τη γενική ευεξία και αυξάνει την κόπωση. Αυτή η λειτουργία εμπλουτίζει τον αέρα με υγιεινά ιόντα, βελτιώνοντας την ψυχοφυσική λειτουργία του σώματος, το οποίο λαμβάνει επίσης μια πρόσθετη δόση ενέργειας.",
pne: "Ηλεκτροδιέγερση",
pne_i: "Διεγείρει τους μύες με χαμηλή συχνότητα ρεύματος. Χρησιμοποιώντας ειδικούς ηλεκτρόδια, δίνει τη δυνατότητα να εργαστείτε σε επιλεγμένα σημεία του σώματος - παρέχει δύσκολα προσβάσιμα σημεία με τις απαραίτητες ουσίες. Η ηλεκτροδιέγερση μειώνει την ένταση και βελτιώνει τη διαδικασία ενίσχυσης των μυών, βελτιώνει την κυκλοφορία του αίματος στα ιστούς και έχει αναλγητική επίδραση.",
pnt: "Διάδρομος",
pnt_i: "<strong>Κατασκευάζεται απευθείας από τη Vacu Activ με ειδικά εξαρτήματα.</strong> Διαθέτει ισχυρό <strong>τριφασικό ασύρματο μοτέρ</strong> που εξασφαλίζει αξιόπιστη λειτουργία.",
mxs: "Μέγιστη<br /> ταχύτητα",
mxs_i: "12<sub>χλμ/ώρα</sub>",
bltw: "Πλάτος<br /> ιμάντα",
bltw_i: "50<sub>εκ</sub>",
mxi: "Μέγιστη<br /> κλίση",
mxi_i: "10°",
mxl: "Μέγιστο<br /> βάρος",
mxl_i: "180<sub>κγ</sub>",
tt_u: "Υπόπιεση",
ttu_p: "<strong>Παράγεται από μια ειδικά σχεδιασμένη αντλία κενού, που αυξάνει αρκετές φορές την αποτελεσματικότητα κάθε προπόνησης. </strong>Χάρη στην τεχνολογία της κενο-πίεσης, η προπόνηση είναι τρεις φορές πιο αποτελεσματική από το παραδοσιακό εξοπλισμό και δείχνει αποτελέσματα τρεις φορές πιο γρήγορα. Για να ξεκινήσετε την προπόνηση, ο ασθενής πρέπει να φορέσει ειδική φούστα neoprene A-line και να επιβιβαστεί στον διάδρομο Bodyshape και όταν ξεκινήσει η συνεδρία, θα αναρροφηθεί στον διάδρομο και θα αντισταθεί κατά τη διάρκεια της πεζοπορίας. Αυτή η πίεση, καθώς και η ταχύτητα και η κλίση του διαδρόμου, είναι όλα ρυθμιζόμενα.",
lcl: "<strong>Μείωση κυτταρίτιδας</strong>",
lcl_i: "<small>Εξαλείφει την κυτταρίτιδα<br /><strong>έως και 80%</strong></small>",
rcr: "<strong>Μείωση περιφέρειας</strong>",
rcr_i: "<small>Μείωση περιφέρειας<br /><strong>από 8 έως 20 εκατοστά</strong></small>",
mxnp: "Μέγιστη αρνητική πίεση",
mxp_u: "έως",
mp_t: "30<sub>μΒαρ</sub>",
sp_i: "- υποστηρίζει την καύση λίπους",
sp_ii: "- λεπταίνει και διαμορφώνει το σώμα",
sp_iii: "- βελτιώνει την κυκλοφορία του αίματος (λείο, ελαστικό και σφιχτό δέρμα)",
sp_iiii: "- βελτιώνει τη λειτουργία του κυκλοφορικού και λεμφικού συστήματος.",
ifr: "Υπέρυθρη IR",
ifr_p: "<strong>Οι σύγχρονοι ακτινοβολητές παρέχουν το πλήρες φάσμα της υπέρυθρης ακτινοβολίας IR-A, IR-B και IR-C.</strong> Παρέχουν θεραπευτική θερμική ακτινοβολία απευθείας στα βαθιά υποδόρια στρώματα. Με αυτόν τον τρόπο, επιταχύνουν τη μεταβολική διαδικασία, διαστέλλουν τα αιμοφόρα αγγεία, βελτιώνουν τη ροή του αίματος και οξυγονώνουν τους ιστούς.",
pa_c: "<strong>Μείωση κυτταρίτιδας</strong>",
pa_i: "<small>Σημαντική και ασφαλής μείωση<br /><strong>έως και 85%</strong></small>",
ltg_i: "<strong>Μείωση του πόνου</strong>",
ltg_ii: "<small>Μείωση του πόνου που σχετίζεται με την οστεοαρθρίτιδα<br /><strong>πάνω από 50%</strong></small>",
ifr_r: "Εύρος ακτινοβολίας IR",
upt: "έως",
upt_t: "1400<sub>νμ</sub>",
upt_i: "- καθαρισμός του σώματος από τοξίνες,",
upt_ii: "- θεραπεία τραυματισμών και <strong>ρευματιστικών</strong>,",
upt_iii: "- απελευθέρωση των τάσεων άγχους,",
upt_iiii: "- μείωση της αίσθησης κόπωσης,",
upt_iiiii: "- καύση λίπους,",
upt_iiiiii: "- σύσφιγξη του δέρματος.",
cpw: "Σύγκριση 30 λεπτών προπόνησης",
cpw_i: "<span class='qodef-pb-title'>Διάδρομος Bodyshape</span> <span class='qodef-pb-percent'>0</span>",
cpw_ii: "<span class='qodef-pb-title'>Κανονικός διάδρομος</span> <span class='qodef-pb-percent'>0</span>",
cpw_iii: "πάνω από",
cpw_v: "76%",
cpw_vi: "περισσότερες θερμίδες<br />καίγονται",
cp_vii: "Ορατά αποτελέσματα μετά από",
cp_iv: "4-5",
cp_iiv: "συνεδρίες",
cpw_iv: "Καινοτόμα τεχνολογία φυσικής κατάστασης για απώλεια βάρους",
cpw_iiv: "<strong>Συνδυάζοντας τις επιτεύξεις μας στην επιστήμη και τη μηχανολογία, δημιουργήσαμε ποιοτικά προϊόντα που υπερτερούν των ανταγωνιστών μας και ξεπερνούν τα οφέλη του παραδοσιακού εξοπλισμού φυσικής κατάστασης.</strong> Μέσω της προηγμένης τεχνολογίας κομπρεσσίας κενού & υπερκόκκινης ακτινοβολίας, οι συσκευές μας ενεργοποιούν την ικανότητα του σώματος να στοχεύει και να καίει συγκεκριμένες περιοχές λίπους και κυτταρίτιδας, καθιστώντας πολύ πιο εύκολη για το σώμα σας την απελευθέρωση του βαθιά αποθηκευμένου λίπους.",
cpw_iiiv: "<strong>Η τεχνολογία που χρησιμοποιείται στο μηχάνημα Bodyshape έχει δοκιμαστεί και αποδεικνύεται ότι λειτουργεί.</strong> Χάστε βάρος, εκατοστά και ταυτόχρονα αποκτήστε πιο απαλό και σφιχτό δέρμα σε <strong>λιγότερες από 10 συνεδρίες</strong>.",
ct_n: "Νέα, μεγαλύτερη οθόνη αφής",
ctn_i: "13,3<sup>ιντσών</sup>",
ctm: "Ηλεκτρονική πλούσιο κατά την εκπαίδευσή σας",
ctm_i: "<strong>Αυτή η καινοτόμος δυνατότητα εμπλουτίζει την εκπαίδευση με μια εικονική θέα, συγχρονισμένη με την προπόνησή σας.</strong> Φανταστείτε να κάνετε ποδήλατο κατά μήκος της ακτής του Λος Άντζελες, μέσα από τους δρόμους της Βενετίας, ανάμεσα στις έρημους άμμους ή τα δάση της άγριας φύσης είναι μόνο μερικές από τις πολλές δυνατότητες που προσφέρει το Multivision.",
ctr: "Οθόνη εικονικής διαδρομής",
ctr_i: "Εκτελέστε μια πλήρη οθόνη εικονικής διαδρομής και απολαύστε καταπληκτική θέα κατά τη διάρκεια της άσκησης στο διαδραστικό διάδρομο Bodyshape. Δεν χρειάζεται να αλλάζετε οθόνες για να αλλάξετε παραμέτρους εκπαίδευσης, όλοι οι έλεγχοι και οι πληροφορίες είναι στα δάχτυλά σας.",
cts: "Ρύθμιση παραμέτρων ασθενούς",
cts_i: "Έχουμε ενσωματώσει στο λογισμικό τη δυνατότητα να ρυθμίσετε τις παραμέτρους του χρήστη, όπως φύλο, ύψος, βάρος και ηλικία για να λάβετε ακριβής σύνοψη των θερμίδων που καίγονται μετά την περίοδο εκπαίδευσης.",
ctt: "Οθόνη εκπαίδευσης",
ctt_p: "<strong>Η οθόνη εκπαίδευσης σας επιτρέπει να παρακολουθείτε και να αλλάζετε εύκολα τις παραμέτρους των λειτουργιών πραγματικού χρόνου.</strong> Τροποποιήστε την ισχύ υπερύθρων, το κενό, την ταχύτητα της τροχαίας, τη γωνία κλίσης και άλλα.",
vts: "Επιλογή εικονικής πίστας",
vts_p: "<strong>Η λειτουργία εικονικού τρεξίματος σας επιτρέπει να επιλέξετε ένα μέρος στον κόσμο όπου θέλετε να προπονηθείτε.</strong> Η οθόνη θα εμφανίζει ένα βίντεο καταγραφής κατά τη διάρκεια της προπόνησής σας. Μπορείτε να τρέξετε στο Μπουένος Άιρες, Λος Άντζελες, Ιταλία, Κόστα Ρίκα, Σικάγο ή Σαν Φρανσίσκο.",
vst: "Οθόνη εικονικής πίστας",
vst_p: "Τρέξτε ένα εικονικό τρέξιμο σε πλήρη οθόνη και απολαύστε καταπληκτικές θέατα κατά τη διάρκεια της άσκησης στο διαδραστικό διάδρομο Bodyshape. Δεν χρειάζεται να αλλάξετε ανάμεσα σε οθόνες για να αλλάξετε τις παραμέτρους προπόνησης, όλοι οι έλεγχοι και οι πληροφορίες βρίσκονται στα δάχτυλά σας.",
yba: "Η καλύτερη εφαρμογή στη διάθεσή σας",
yba_p: "Κατά τη διάρκεια της προπόνησης είναι επίσης δυνατή η χρήση εφαρμογών όπως (Facebook, YouTube, Spotify, Netflix και αναπαραγωγή βίντεο ή ηχητικών αρχείων). Το Infrashape Horizontal είναι συμβατό με φορητές συσκευές - iPods, iPhones ή Android smartphones μπορούν να συνδεθούν εύκολα σε αυτό.",
tsd: "Οθόνη αφής 13,3 ιντσών",
tsd_i: "Εμφάνιση εικονικού τρεξίματος, αγαπημένων ταινιών ή διαχείριση όλων των λειτουργιών με ευκολία σε μια μεγάλη οθόνη αφής.",
tit: "Διαδραστικός διάδρομος",
tit_p: "Ο διάδρομος Bodyshape συνδυάζει πολλές λειτουργίες και τεχνολογικές λύσεις για να πάει το στούντιο σας σε άλλο επίπεδο άσκησης.",
tat: "Χάλυβας βραχίονες",
tat_p: "Σταθερά, υψηλής ποιότητας χειρολαβές, διευκολύνουν τις ασκήσεις στον διάδρομο Bodyshape",
tld: "LED Φώτα",
tld_p: "Οι LED φωτισμοί δίνουν μια μοναδική εμφάνιση στη συσκευή που ταιριάζει απόλυτα στο μοντέρνο σας γυμναστήριο",
tlf: "Ιδανικό για γυμναστήριο fitness",
tlf_p: "Διαδραστικός διάδρομος που επαναστατεί την προσφορά του στούντιο σας",
shb: "Πολλαπλά οφέλη για την υγεία<br /> χάρη σε μια συσκευή",
shb_i: "<strong>Ταχύτερος μεταβολισμός</strong><br /><small>Επιταχύνει τις μεταβολικές διαδικασίες του σώματος.</small>",
shb_ii: "<strong>Απώλεια βάρους</strong><br /><small>Βοηθά να επιτευχθεί η επιθυμητή σιλουέτα καθώς καίει γρήγορα πολλές θερμίδες.</small>",
shb_iii: "<strong>Βελτίωση της κυκλοφορίας</strong><br /><small>Βελτιώνει την κυκλοφορία του αίματος και ολόκληρο το λεμφικό σύστημα.</small>",
shb_iv: "<strong>Χαλάρωση των μυών</strong><br /><small>Ανακουφίζει από τον πόνο των αρθρώσεων και καταπραΰνει κουρασμένους μύες και ιστούς.</small>",
shb_v: "<strong>Μείωση της κυτταρίτιδας</strong><br /><small>Εξαλείφει την κυτταρίτιδα και απομακρύνει τις λιπαρές καταθέσεις από κάτω από το δέρμα.</small>",
shb_vi: "<strong>Αναζωογόνηση</strong><br /><small>Αναγεννά τα κύτταρα του δέρματος και προάγει την ελαστικότητα για πιο σφριγηλό, όμορφο και νεανικό δέρμα.</small>",
smmr: "Περίληψη",
spf: "Προδιαγραφές",
spf_s: "Μέγεθος",
spf_w: "<div>Πλάτος</div> <div>123 cm (48,43 ίντσες)</div>",
spf_l: "<div>Πλάτος</div> <div>228 cm (89,76 ίντσες)</div>",
spf_h: "<div>Ύψος</div> <div>159 cm (62,60 ίντσες)</div>",
spf_e: "<div>Βάρος</div> <div>230 κιλά</div>",
spf_v: "<div>Τάση</div> <div>230 VAC / 50Hz / 1PH</div>",
spf_p: "<div>Κατανάλωση ισχύος</div> <div>2,5 kW</div>",
spf_i: "<div>Εύρος θερμοκρασίας υπερύθρων</div> <div>25-50°C</div>",
spf_ri: "<div>Ισχύς λάμπας υπερύθρων</div> <div>350W</div>",
spf_n: "<div>Αριθμός λαμπών υπερύθρων</div> <div>2x</div>",
spf_vr: "<div>Εύρος κενού</div> <div>0-30 mBar</div>",
spf_vp: "<div>Ισχύς κενού</div> <div>1500 W</div>",
spf_t: "<div>Εύρος ταχύτητας τροχαίας</div> <div>1-12 km/h</div>",
spf_ti: "<div>Εύρος κλίσης τροχαίας</div> <div>0-10°</div>",
spf_m: "<div>Μέγιστο φορτίο</div> <div>180 κιλά</div>",
spf_td: "<div>Μέγεθος οθόνης αφής</div> <div>13,3 ιντσών</div>",
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
  