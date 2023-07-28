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
    mt: "Cooled air chamber for cryotherapy treatment",
    mt_p: "<strong >Discover the ultimate biohacking solution for your body at Cryo Total’s state-of-the-art cryotherapy chamber.</strong > Step into a world of unparalleled benefits as you immerse yourself in subzero temperatures of -140 degrees for a transformative 2 to 3-minute session. Harnessing the power of cryotherapy, our advanced chamber biohacks your body to provide exceptional pain relief, optimize body composition, fortify immune health, expedite recovery, and ignite a surge of revitalizing energy. Experience the remarkable decrease in inflammation, accelerated metabolism, and the remarkable increase in both Deep and REM sleep quality. Unleash the full potential of your body and embark on a biohacking journey with Cryo Total’s whole body cryotherapy chamber. Elevate your wellness, optimize your performance, and unlock new levels of vitality like never before.",
    crtft: "Certificates",
    eft: "Efficient therapy<br /> in low temperatures.",
    eft_i: "According to scientific and medical research, the optimum efficiency of whole body cryotherapy procedures, is achieved once the body is exposed to temperatures up to -120 to -140°C (-184F to -284F) for a 1-3 minutes, reducing the skin’s surface temperature.",
    tmpi: "Temperature inside<br /> cabin",
    lrg: "Larger than ever",
    lrg_p: "Touch screen<br /> display size",
    lrg_i: "21<sup>inch</sup>",
    lrg_ii: "<strong >The largest display in a cryotherapy chamber build in inside a body frame without bezels.</strong > Thanks to the huge surface of the monitor, we were able to focus on designing a clean, intuitive interface that shows many parameters during the session, without affecting the readability and ease of use of the device.",
    adt: "Adjuste the treatment<br /> as needed.",
    adt_p: "Cryo Total has the ability to lower the window, which allows you to adjust the treatment to the preferences indicated. The operator can set up a full-body or part-body cryotherapy treatment in which the head protrudes above the cold air, which affects the circulation of cold air inside the capsule.",
    isv: "Innovatory system separating<br />vapors",
    isv_p: "<strong >100% breathable air environment</strong ><br /> with no client contact with nitrogen vapors.",
    ctbn: "Cryotherapy treatments benefits<br />",
    ctbn_p: "Cooling strategies have been used for centuries to limit fever and improve performances or improve recovery",
    ctb_m: "Mental health improve",
    ctb_m_i: "<small>Reducing depression or anxiety symptoms<br /><strong>up to 50%</strong></small>",
    qckl: "<strong >Quick weight<br /> loss</strong >",
    qckl_i: "<small >It accelerates metabolism for all day<br /> <strong>up to 65%</strong></small >",
    isp: "<strong >Increase strength, power and agility</strong >",
    isp_i: "<small >Faster regeneration of muscles and joints<br /> <strong>up to 80%</strong></small >",
    bst: "Best solution for your business",
    bst_f: "Fitness gym",
    bst_p: "Physiotherapy",
    bst_o: "Own Cryo studio",
    bst_c: "Clinics",
    bst_h: "Hotel gym",
    bst_m: "Medical centers",
    hbfs: "Health benefits of using<br /> cryotherapy treatments",
    rcvp: "Recovery &amp; performance",
    rcvp_p: "The reason why so many top athletes use cryotherapy is its ability to speed up recovery, improve the training results and overall performance.",
    arth: "Pain &amp; arthritis",
    arth_p: "Cryotherapy’s anti-inflammatory effects can drastically reduce muscle and joint pain. It is also known to help people suffering from Arthritis.",
    wls: "Weight loss",
    wls_p: "Cryotherapy causes the body to produce a hormone called Norepinephrine. This increases the fat metabolism up to 6 days and the impact of one session is equivalent to burning 500-800 calories.",
    stxn: "Stress and anxiety",
    stxn_p: "During Cryotherapy your body releases endorphins which in return can affect your overall mood in a positive way. Cryotherapy can alleviate stress, anxiety, and depression by simply making you feel happier. A positive mind can do wonders in improving yourself and your life.",
    dtxn: "Detoxification",
    dtxn_p: "The freezing temperatures in Cryotherapy increase your blood circulation which makes it easier to deliver oxygen, nutrients, and enzymes throughout the body.",
    insm: "Insomnia",
    insm_p: "Due to the same endorphins mentioned above, Cryotherapy can help anyone struggling with Insomnia. Not getting enough sleep can sometimes be deeply entwined with any stress or weight gain you may be experiencing. Insomnia can cause a handful of problems you didn’t have before so a good nights sleep is important if you want to function at your best.",
    ifnm: "Inflamation",
    ifnm_p: "Cryotherapy can reduce any kind of inflammation on your body with the help of a variety of enzymes and by boosting the immune system.",
    clgn: "Collagen production",
    clgn_p: "Cryotherapy can boost your collagen production which is an essential anti-aging building block. Increased collagen can reduce the appearance of wrinkles by plumping the skin and increasing elasticity creating a more youthful and smoother look.",
    sknc: "Skin conditions",
    sknc_p: "If you suffer from any skin conditions such as acne or even eczema, you might want to give Cryotherapy a try. Many of the benefits mentioned above play a part in improving the skin by alleviating stress, increasing collagen or reducing inflammation.<br /> Cryotherapy encourages cell rejuvenation and can expel toxins out of your body. All these things working together can clear up the skin and give relief to Eczema or Psoriasis-like symptoms.",
    grhs: "General health &amp; Wellness",
    grhs_p: "Constricting the benefits of Cryotherapy to only 10 is not easy. It is a powerful treatment that promotes a lot of good to your general health and wellness. Whether you’re looking for anti-aging results, improved mental health, help with weight loss or reduce pain, Cryotherapy is worth trying.",
    csnt: "Constant temperatures inside cryo cabin",
    csnt_p: "The technology used in Cryo Total evenly distributes cold air in the cabin, which thoroughly cools the patient inside",
    iti: "Intuitive<br /> interface",
    iti_p: "Beautifully designed, very readable interface, displayed on a large additional screen",
    ata: "Auto drying<br /> system",
    ata_p: "Powerfull warm air pumps, dry the entire cabin efficiently and quickly",
    twc: "Two way communication",
    twc_p: "The safety and comfort of the procedure is our priority, which is why we have facilitated the patient's contact with the operator, enabling communication through built-in microphones and audio communication devices.",
    spci: "Spacious interior",
    spci_p: "The interior of the cabin has been designed in such a way that the patient does not feel claustrophobic. The cabin enables the treatment of two patients at the same time.",
    fdf: "Full drying feature",
    fdf_p: "To keep the cabin clean and to prevent moisture inside, the capsule is equipped with heat pumps that dry the cabin quickly and efficiently.",
    imp: "Important alerts",
    imp_p: "Cryo Total will inform you about important messages or instructions for using the cryotherapy cabin. All instructions will appear clearly on the screen.",
    sftr: "Safety rules",
    sftr_p: "Before each start of the cryotherapy treatment, the patient goes through several stages of verification, which are displayed on the screen.",
    iti_o: "<strong >We used entire space of the monitor so that the operator could easily find the most needed information, parameters and functions of Cryo Total</strong >. Quickly control the temperature inside the cabin, set the window in the right position, or choose the right program in an easy way.",
    crcp: "Choose your<br /> program",
    crcp_p: "There are 3 predefined programs and one manual. Each program is characterized by a different intensity of the treatment and temperature.",
    sfts: "Safety sensors",
    sfts_p: "Cryo Total cryotherapy capsule is equipped with a sensor that detects the position of the door. During the cryotherapy treatment, when the door is opened, the session will be automatically paused by the security system.",
    fdt: "Full drying feature",
    fdf_p: "To keep the cabin clean and to prevent moisture inside, the capsule is equipped with heat pumps that dry the cabin quickly and efficiently.",
    imp_p: "Cryo Total will inform you about important messages or instructions for using the cryotherapy cabin. All instructions will appear clearly on the screen.",
    pfrz: "Quick prefreezing<br /> to start treatment in a minute.",
    elcm: "Electric cryotherapy chamber",
    bst_im: "Boosting your immune<br />system helps you destroy<br />viruses quicker",
    bstim_p: "<strong >During cryotherapy your body’s production of anti-inflammatory hormones significantly increases, reducing inflammation in the body.</strong > This reduced inflammation helps your body heal and recover faster, and reduces pain in problem areas. During the session, your body also undergoes low doses of physical stress from the cold. Such stress keeps your cells on their toes and can then bring about an adaptive response which strengthens your immune system. This happens because of the increase of your body’s immune cells. This boost to your immune system helps you destroy viruses and fight off tumor factors.",
    sprt: "Support your health<br /> thanks to cryotherapy treatments",
    mscl: "Muscle recovery",
    mscl_p: "Thanks to Cryo Total cryotherapy treatment athletes can train harder, longer, and recover quicker, which helps them achieve maximum results from workouts and improve performance as well. During a treatment, as temperatures rapidly cool, oxygen is pushed through the body to help reduce inflammation, relieve pain and recover the muscles.",
    bta: "Beauty &amp; anti-aging",
    bta_p: "Cold treatment in Cryo Total cryo chamber can help maintain a youthful appearance by reducing the signs of aging such as wrinkles and fine lines, while also tightening the skin and reducing cellulite. Cryotherapy stimulates collagen production in the deeper layers of skin resulting in a smoother, firmer and more youthful look.",
    wls_i: "Staying in cold temperatures promotes natural loss of weight. The treatment helps stimulate blood flow throughout the body and boost the delivery of oxygenated blood, which leads to the increase of metabolic rate.",
    grhs_i: "Medical studies have shown that WBC or PBC treatment helps individuals battle insomnia and induces deeper sleep. The treatment also reduces stress and anxiety, and improves the immune system and organ function.",
    im_bst: "Boost immune system",
    im_p: "During cryotherapy your body's production of anti-inflammatory hormones significantly increases, reducing inflammation in the body. This happens because of the increase of your body's immune cells. This boost to your immune system helps you destroy viruses and fight off tumor factors.",
    pmg: "Pain management",
    pmg_p: "Treatments in Cryo Total reduces pain and speeds up the injury recovery process. During a treatment, the body slows down nerve signal transmissions and releases a neurotransmitter that reduces pain sensitivity. The treatment also speeds up the recovery process by boosting the flow of nutrient-rich blood.",
    smry: "Summary",
    spf: "Specifications",
    spf_s: "Size",
    spf_h: "<div>Height</div> <div>232,5 cm (91,54 inches)</div>",
    spf_d: "<div>Depth</div> <div>125 cm (49,21 inches)</div>",
    spf_w: "<div>Width</div> <div>197,5 cm (77,76 inches)</div>",
    spf_wt: "<div>Weight</div> <div>290 kg</div>",
    spf_p: "<div>Power supply</div> <div>230V or 110V</div>",
    spf_m: "<div>Maximum power needed</div> <div>10amp 230VAC / 20amp 110VAC</div>",
    spf_c: "<div>Cooling down time</div> <div>3-5 min</div>",
    spf_t: "<div>Temperature range</div> <div>up to -140°C</div>",
    spf_td: "<div>Touch display size</div> <div>21 -inch</div>",
    spf_tp: "<div>Tank pressure</div> <div>22 Bar</div>",
    spf_e: "<div>Electric window</div> <div>yes</div>",
    spf_ds: "<div>Door sensor</div> <div>yes</div>",
    spf_a: "<div>Audio Two-way communication</div> <div>yes</div>",






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
    mt: "Охлаждаемая камера для криотерапии",
mt_p: "<strong>Откройте для своего тела последнее слово в биохакинге в криотерапевтической камере Cryo Total с передовыми технологиями.</strong> Погрузитесь в мир непревзойденных преимуществ, окунувшись в экстремальные температуры до -140 градусов на трансформирующую сессию продолжительностью 2-3 минуты. Наша передовая камера, использующая криотерапию, оптимизирует функции вашего тела, обеспечивает исключительное облегчение от боли, улучшает состав тела, укрепляет иммунное здоровье, ускоряет восстановление и заряжает вас волнующей энергией. Почувствуйте замечательное снижение воспаления, ускоренный обмен веществ, а также улучшение качества глубокого и быстрого сна. Разблокируйте полный потенциал своего тела и отправляйтесь в биохакинговое путешествие с криотерапевтической камерой Cryo Total. Поднимите свой уровень благополучия, оптимизируйте свои достижения и обретите новый уровень жизненной энергии, как никогда раньше.",
crtft: "Сертификаты",
eft: "Эффективная терапия<br /> при низких температурах.",
eft_i: "Научные и медицинские исследования показывают, что оптимальная эффективность процедур целостной криотерапии достигается, когда тело подвергается воздействию температур до -120 до -140 °C (-184F до -284F) в течение 1-3 минут, что снижает температуру кожи.",
tmpi: "Температура внутри<br /> кабины",
lrg: "Больше, чем когда-либо",
lrg_p: "Размер экрана сенсорного<br /> дисплея",
lrg_i: "21<sup>дюйм</sup>",
lrg_ii: "<strong>Самый большой дисплей в криотерапевтической камере без рамок.</strong> Благодаря огромной поверхности монитора мы смогли сосредоточиться на разработке чистого и интуитивно понятного интерфейса, который показывает множество параметров во время сессии, не влияя на читаемость и удобство использования устройства.",
adt: "Настройте терапию<br /> по вашим предпочтениям.",
adt_p: "Cryo Total имеет возможность опускать окно, что позволяет настраивать терапию согласно указанным предпочтениям. Оператор может настроить терапию целостного тела или отдельных частей тела, при этом голова находится над холодным воздухом, что влияет на циркуляцию холодного воздуха внутри капсулы.",
isv: "Инновационная система<br /> разделения паров",
isv_p: "<strong>Среда из 100% дышащего воздуха</strong> без контакта клиента с азотными паров.",
ctbn: "Преимущества криотерапии<br />",
ctbn_p: "Методы охлаждения использовались веками для снижения температуры при лихорадке, улучшения результатов тренировок или восстановления.",
ctb_m: "Улучшение психического здоровья",
ctb_m_i: "<small>Снижение симптомов депрессии или тревоги<br /><strong>до 50%</strong></small>",
qckl: "<strong>Быстрое снижение<br /> веса</strong>",
qckl_i: "<small>Ускорение обмена веществ в течение всего дня<br /><strong>до 65%</strong></small>",
isp: "<strong>Увеличение силы, мощности и ловкости</strong>",
isp_i: "<small>Более быстрое восстановление мышц и суставов<br /><strong>до 80%</strong></small>",
bst: "Лучшее решение для вашего бизнеса",
bst_f: "Фитнес-зал",
bst_p: "Физиотерапия",
bst_o: "Собственная студия криотерапии",
bst_c: "Медицинские клиники",
bst_h: "Гостиничный фитнес-зал",
bst_m: "Медицинские центры",
hbfs: "Здоровье, получаемое<br /> благодаря криотерапии",
rcvp: "Восстановление и результаты",
rcvp_p: "Причина, по которой многие профессиональные спортсмены используют криотерапию, заключается в ее способности ускорить восстановление, улучшить результаты тренировок и общую производительность.",
arth: "Боль и артрит",
arth_p: "Противовоспалительное действие криотерапии может значительно снизить мышечную и суставную боль. Также известно, что она помогает людям, страдающим артритом.",
wls: "Похудение",
wls_p: "Криотерапия заставляет организм производить гормон норэпинефрин, что увеличивает метаболизм жиров на протяжении 6 дней, и эффект одной сессии равен сжиганию 500-800 калорий.",
stxn: "Стресс и тревога",
stxn_p: "Во время криотерапии ваш организм вырабатывает эндорфины, которые в свою очередь могут положительно влиять на ваше общее настроение. Криотерапия может снизить стресс, тревогу и депрессию, просто заставляя вас чувствовать себя счастливее. Позитивный настрой может сделать чудеса в улучшении вашего самочувствия и жизни.",
dtxn: "Детоксикация",
dtxn_p: "Замораживающие температуры в криотерапии увеличивают кровообращение, что облегчает доставку кислорода, питательных веществ и ферментов по всему телу.",
insm: "Бессонница",
insm_p: "Из-за упомянутых выше эндорфинов криотерапия может помочь тем, кто страдает бессонницей. Недостаточное количество сна может быть тесно связано с любым стрессом или набором веса, который вы можете испытывать. Бессонница может вызывать ряд проблем, которых у вас не было раньше, поэтому хороший ночной сон важен, если вы хотите функционировать наилучшим образом.",
ifnm: "Воспаление",
ifnm_p: "Криотерапия может уменьшить любое воспаление на вашем теле с помощью разнообразных ферментов и усиления иммунной системы.",
clgn: "Производство коллагена",
clgn_p: "Криотерапия может увеличить производство коллагена, который является важным антистарением строительным блоком. Увеличенный коллаген может снизить появление морщин, разглаживая кожу и увеличивая упругость, создавая более молодой и гладкий вид.",
sknc: "Проблемы с кожей",
sknc_p: "Если у вас есть проблемы с кожей, такие как акне или экзема, вам, возможно, стоит попробовать криотерапию. Многие из вышеуказанных преимуществ способствуют улучшению кожи, уменьшению стресса, увеличению коллагена или снижению воспаления. Криотерапия стимулирует регенерацию клеток и способствует выведению токсинов из организма. Все это вместе способно очистить кожу и облегчить симптомы экземы или псориаза.",
grhs: "Общее здоровье и благополучие",
grhs_p: "Сводить преимущества криотерапии до только 10 не так просто. Это мощное лечение, которое способствует улучшению вашего общего здоровья и благополучия. Независимо от того, ищете ли вы антивозрастные результаты, улучшение психического здоровья, помощь в похудении или снижение боли, стоит попробовать криотерапию.",
csnt: "Постоянные температуры внутри криокамеры",
csnt_p: "Технология, используемая в Cryo Total, равномерно распределяет холодный воздух в кабине, что полностью охлаждает пациента внутри",
iti: "Интуитивный<br />интерфейс",
iti_p: "Красиво спроектированный, очень читаемый интерфейс, отображаемый на большом дополнительном экране",
ata: "Автоматическая система<br />сушки",
ata_p: "Мощные насосы с теплым воздухом быстро и эффективно высушивают всю кабину",
twc: "Двусторонняя связь",
twc_p: "Безопасность и комфорт процедуры - наш приоритет, поэтому мы облегчили контакт пациента с оператором, обеспечив возможность общения через встроенные микрофоны и аудиоустройства.",
spci: "Просторный интерьер",
spci_p: "Интерьер кабины спроектирован таким образом, чтобы пациент не чувствовал klaustrofobii. Капсула позволяет лечить двух пациентов одновременно.",
fdf: "Полная функция сушки",
fdf_p: "Для поддержания чистоты внутри кабины и предотвращения попадания влаги внутрь, капсула оборудована тепловыми насосами, которые быстро и эффективно высушивают кабину.",
imp: "Важные оповещения",
imp_p: "Cryo Total будет информировать вас о важных сообщениях или инструкциях по использованию криотерапийной капсулы. Все инструкции будут отображаться четко на экране.",
sftr: "Правила безопасности",
sftr_p: "Перед каждым началом криотерапии пациент проходит несколько этапов проверки, которые отображаются на экране.",
iti_o: "<strong>Мы использовали всю площадь монитора, чтобы оператор мог легко найти наиболее нужную информацию, параметры и функции Cryo Total</strong>. Быстро контролируйте температуру внутри кабины, устанавливайте окно в правильное положение или выбирайте правильную программу легким способом.",
crcp: "Выберите свою<br />программу",
crcp_p: "Есть 3 предопределенные программы и одна ручная. Каждая программа характеризуется разной интенсивностью лечения и температурой.",
sfts: "Сенсоры безопасности",
sfts_p: "Криотерапевтическая капсула Cryo Total оборудована датчиком, который определяет положение двери. Во время процедуры криотерапии, когда дверь открывается, сеанс автоматически приостанавливается системой безопасности.",
fdt: "Полная функция сушки",
fdf_p: "Для поддержания чистоты внутри кабины и предотвращения попадания влаги внутрь, капсула оборудована тепловыми насосами, которые быстро и эффективно высушивают кабину.",
imp_p: "Cryo Total будет информировать вас о важных сообщениях или инструкциях по использованию криотерапийной капсулы. Все инструкции будут отображаться четко на экране.",
pfrz: "Быстрая предварительная заморозка<br />для начала процедуры за минуту.",
elcm: "Электрическая криотерапевтическая капсула",
bst_im: "Повышение иммунитета<br />помогает уничтожать<br />вирусы быстрее",
bstim_p: "<strong>Во время криотерапии производство противовоспалительных гормонов в вашем организме значительно возрастает, что снижает воспаление в организме.</strong> Это снижение воспаления помогает вашему организму заживлять и восстанавливаться быстрее, а также уменьшает боль в проблемных областях. Во время сеанса ваш организм также испытывает низкие дозы физического стресса от холода. Такой стресс заставляет ваши клетки быть настороже и может вызвать адаптивный ответ, который укрепляет ваш иммунитет. Это происходит из-за увеличения числа иммунных клеток в вашем организме. Такое укрепление иммунной системы помогает уничтожать вирусы и бороться с факторами, способствующими развитию опухолей.",
sprt: "Поддержите свое здоровье<br />с помощью криотерапии",
mscl: "Восстановление мышц",
mscl_p: "Благодаря криотерапии от Cryo Total спортсмены могут тренироваться сильнее, дольше и восстанавливаться быстрее, что помогает им достичь максимальных результатов от тренировок и улучшить свои спортивные показатели. Во время сеанса, по мере быстрого охлаждения, кислород протекает через организм, помогая снизить воспаление, снимать боль и восстанавливать мышцы.",
bta: "Красота и молодость",
bta_p: "Холодовая процедура в криокамере Cryo Total может помочь сохранить молодой вид, уменьшая признаки старения, такие как морщины и мелкие линии, а также уплотняя кожу и уменьшая целлюлит. Криотерапия стимулирует производство коллагена в глубоких слоях кожи, что приводит к более гладкому, упругому и молодому внешнему виду.",
wls_i: "Нахождение в холодных температурах способствует естественному снижению веса. Процедура помогает стимулировать кровоток по всему организму и увеличивает поступление оксигенированной крови, что приводит к увеличению обмена веществ.",
grhs_i: "Медицинские исследования показали, что процедуры криотерапии помогают бороться с бессонницей и способствуют глубокому сну. Процедура также снижает стресс и тревожность, улучшает иммунную систему и функции органов.",
im_bst: "Повышение иммунитета",
im_p: "Во время криотерапии производство противовоспалительных гормонов в вашем организме значительно возрастает, что снижает воспаление в организме. Это происходит из-за увеличения числа иммунных клеток в вашем организме. Такое укрепление иммунной системы помогает уничтожать вирусы и бороться с факторами, способствующими развитию опухолей.",
pmg: "Управление болью",
pmg_p: "Процедуры Cryo Total снижают боль и ускоряют процесс восстановления после травмы. Во время процедуры замедляется передача сигналов нервами и высвобождается нейромедиатор, который снижает чувствительность к боли. Процедура также ускоряет процесс восстановления, увеличивая приток питательной крови.",
smry: "Итоги",
spf: "Технические характеристики",
spf_s: "Размер",
spf_h: "<div>Высота</div> <div>232,5 см (91,54 дюйма)</div>",
spf_d: "<div>Глубина</div> <div>125 см (49,21 дюйма)</div>",
spf_w: "<div>Ширина</div> <div>197,5 см (77,76 дюйма)</div>",
spf_wt: "<div>Вес</div> <div>290 кг</div>",
spf_p: "<div>Питание</div> <div>230 В или 110 В</div>",
spf_m: "<div>Максимальная потребляемая мощность</div> <div>10 А 230 В / 20 А 110 В</div>",
spf_c: "<div>Время охлаждения</div> <div>3-5 минут</div>",
spf_t: "<div>Диапазон температур</div> <div>до -140°C</div>",
spf_td: "<div>Размер сенсорного экрана</div> <div>21 дюйм</div>",
spf_tp: "<div>Давление в баке</div> <div>22 бар</div>",
spf_e: "<div>Электрическое окно</div> <div>да</div>",
spf_ds: "<div>Датчик двери</div> <div>да</div>",
spf_a: "<div>Двусторонняя аудиосвязь</div> <div>да</div>",
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
    mt: "Δωμάτιο με ψύξη για θεραπεία κρυοθεραπείας",
mt_p: "<strong>Ανακαλύψτε την απόλυτη λύση βιο-βελτίωσης για το σώμα σας στο σύγχρονο δωμάτιο κρυοθεραπείας της Cryo Total.</strong> Βυθιστείτε σε θερμοκρασίες υπό το μηδέν, -140 βαθμούς, για μια μετασχηματιστική συνεδρία διάρκειας 2 έως 3 λεπτών και ανακαλύψτε έναν κόσμο απαράμιλλων οφελών. Με τη χρήση της κρυοθεραπείας, το προηγμένο δωμάτιο βιο-βελτιώνει το σώμα σας παρέχοντας εξαιρετική ανακούφιση από τον πόνο, βελτιστοποιεί τη σύνθεση του σώματος, ενισχύει την ανοσοποιητική υγεία, επιταχύνει την ανάρρωση και αναζωογονεί τον οργανισμό με ενέργεια. Ζήστε την εξαιρετική μείωση του φλεγμονώδους προστατευτικού συστήματος, την επιτάχυνση της μεταβολής και την εκπληκτική βελτίωση της ποιότητας του βαθιού και του REM ύπνου. Απελευθερώστε την πλήρη δυναμική του σώματός σας και ξεκινήστε ένα ταξίδι βιο-βελτίωσης με το δωμάτιο κρυοθεραπείας ολικού σώματος της Cryo Total. Αναβαθμίστε την ευεξία σας, βελτιστοποιήστε την απόδοσή σας και ξεκλειδώστε νέα επίπεδα ενέργειας όπως ποτέ πριν.",

crtft: "Πιστοποιητικά",
eft: "Αποτελεσματική θεραπεία<br />σε χαμηλές θερμοκρασίες.",
eft_i: "Σύμφωνα με επιστημονική και ιατρική έρευνα, η βέλτιστη απόδοση των διαδικασιών κρυοθεραπείας ολόκληρου του σώματος επιτυγχάνεται όταν το σώμα εκτίθεται σε θερμοκρασίες έως -120 έως -140°C (-184F έως -284F) για 1-3 λεπτά, μειώνοντας την επιφανειακή θερμοκρασία του δέρματος.",

tmpi: "Θερμοκρασία εσωτερικά<br />στο καμπίνι",
lrg: "Μεγαλύτερο από ποτέ",
lrg_p: "Μέγεθος οθόνης αφής",
lrg_i: "21<sup>ιντσών</sup>",
lrg_ii: "<strong>Η μεγαλύτερη οθόνη σε καμπίνα κρυοθεραπείας που χτίζεται μέσα σε ένα σώμα χωρίς πλαίσια.</strong> Χάρη στην τεράστια επιφάνεια της οθόνης, καταφέραμε να επικεντρωθούμε στον σχεδιασμό μιας καθαρής, εύχρηστης διεπαφής που εμφανίζει πολλές παραμέτρους κατά τη διάρκεια της συνεδρίας, χωρίς να επηρεάζει την αναγνωσιμότητα και την ευκολία χρήσης της συσκευής.",

adt: "Προσαρμόστε τη θεραπεία<br />κατά τις ανάγκες σας.",
adt_p: "Η Cryo Total έχει τη δυνατότητα να χαμηλώσει το παράθυρο, πράγμα που σας επιτρέπει να προσαρμόσετε τη θεραπεία ανάλογα με τις προτιμήσεις σας. Ο χειριστής μπορεί να ρυθμίσει μια θεραπεία κρυοθεραπείας για ολόκληρο το σώμα ή μόνο για μέρος του σώματος, με το κεφάλι να ξεπερνά το κρύο αέρα και να επηρεάζει την κυκλοφορία του κρύου αέρα μέσα στο κάψουλα.",

isv: "Καινοτόμο σύστημα διαχωρισμού<br />ατμών",
isv_p: "<strong>Περιβάλλον με 100% αναπνέοντα αέρα</strong> χωρίς επαφή του πελάτη με ατμούς αζώτου.",

ctbn: "Οφέλη των θεραπειών κρυοθεραπείας",
ctbn_p: "Οι στρατηγικές ψύξης χρησιμοποιούνται εδώ και αιώνες για τον περιορισμό του πυρετού και τη βελτίωση της απόδοσης ή της ανάρρωσης",

ctb_m: "Βελτίωση της ψυχικής υγείας",
ctb_m_i: "<small>Μείωση των συμπτωμάτων κατάθλιψης ή άγχους<br /><strong>έως 50%</strong></small>",

qckl: "<strong>Γρήγορη απώλεια βάρους</strong>",
qckl_i: "<small>Επιταχύνει τον μεταβολισμό για ολοήμερη δράση<br /><strong>έως 65%</strong></small>",

isp: "<strong>Αύξηση δύναμης, ισχύος και ευκινησίας</strong>",
isp_i: "<small>Ταχύτερη αναγέννηση των μυών και των αρθρώσεων<br /><strong>έως 80%</strong></small>",

bst: "Καλύτερη λύση για την επιχείρησή σας",
bst_f: "Γυμναστήριο Fitness",
bst_p: "Φυσιοθεραπεία",
bst_o: "Δικό σας studio Cryo",
bst_c: "Κλινικές",
bst_h: "Γυμναστήριο ξενοδοχείου",
bst_m: "Ιατρικά κέντρα",

hbfs: "Οφέλη για την υγεία από τη χρήση των θεραπειών κρυοθεραπείας",
rcvp: "Ανάρρωση και απόδοση",
rcvp_p: "Ο λόγος που τόσοι πολλοί κορυφαίοι αθλητές χρησιμοποιούν την κρυοθεραπεία είναι η ικανότητά της να επιταχύνει την ανάρρωση, να βελτιώνει τα αποτελέσματα της προπόνησης και την συνολική απόδοση.",

arth: "Πόνος και αρθρίτιδα",
arth_p: "Οι αντιφλεγμονώδεις επιδράσεις της κρυοθεραπείας μπορούν να μειώσουν δραστικά τον πόνο στους μύες και τις αρθρώσεις. Επίσης, είναι γνωστό ότι βοηθά ανθρώπους που πάσχουν από αρθρίτιδα.",

wls: "Απώλεια βάρους",
wls_p: "Η κρυοθεραπεία προκαλεί τον οργανισμό να παράγει ένα ορμόνη με όνομα νορεπινεφρίνη. Αυτό αυξάνει τον μεταβολισμό των λιπών για έως και 6 ημέρες και η επίδραση μιας συνεδρίας είναι ισοδύναμη με την καύση 500-800 θερμίδων.",

stxn: "Στρες και άγχος",
stxn_p: "Κατά τη διάρκεια της κρυοθεραπείας, το σώμα σας απελευθερώνει ενδορφίνες που μπορούν να επηρεάσουν την συνολική σας διάθεση με θετικό τρόπο. Η κρυοθεραπεία μπορεί να ανακουφίσει το άγχος, το άγχος και την κατάθλιψη, κάνοντάς σας να νιώθετε πιο χαρούμενοι. Ένα θετικό πνεύμα μπορεί να κάνει θαύματα για να βελτιώσετε τον εαυτό σας και τη ζωή σας.",

dtxn: "Αποτοξίνωση",
dtxn_p: "Οι παγετώνες θερμοκρασίες της κρυοθεραπείας αυξάνουν την κυκλοφορία του αίματος, κάτι που διευκολύνει την παράδοση οξυγόνου, θρεπτικών συστατικών και ενζύμων σε όλο το σώμα.",

insm: "Αϋπνία",
insm_p: "Λόγω των ίδιων ενδορφινών που αναφέρθηκαν παραπάνω, η κρυοθεραπεία μπορεί να βοηθήσει όποιον αντιμετωπίζει προβλήματα αϋπνίας. Η έλλειψη ύπνου μπορεί να συνδέεται με το άγχος ή την αύξηση του βάρους που μπορεί να βιώνετε. Η αϋπνία μπορεί να προκαλέσει πολλά προβλήματα που δεν είχατε πριν, γι 'αυτό ένας καλός ύπνος είναι σημαντικός αν θέλετε να λειτουργείτε στο καλύτερό σας.",

ifnm: "Φλεγμονή",
ifnm_p: "Η κρυοθεραπεία μπορεί να μειώσει κάθε είδος φλεγμονής στο σώμα σας με τη βοήθεια διάφορων ενζύμων και ενισχύοντας το ανοσοποιητικό σύστημα.",

clgn: "Παραγωγή κολλαγόνου",
clgn_p: "Η κρυοθεραπεία μπορεί να αυξήσει την παραγωγή κολλαγόνου, που είναι ένας ουσιαστικός οικοδόμος αντιγήρανσης. Το αυξημένο κολλαγόνο μπορεί να μειώσει την εμφάνιση των ρυτίδων, κάνοντας το δέρμα πιο λαμπερό και ελαστικό, δημιουργώντας μια πιο νεανική και απαλή εμφάνιση.",

sknc: "Προβλήματα δέρματος",
sknc_p: "Αν αντιμετωπίζετε οποιοδήποτε πρόβλημα δέρματος, όπως την ακμή ή ακόμη και την έκζεμα, μπορείτε να δοκιμάσετε την κρυοθεραπεία. Πολλά από τα παραπάνω οφέλη συμβάλλουν στη βελτίωση του δέρματος, μειώνοντας το άγχος, αυξάνοντας το κολλαγόνο ή μειώνοντας τη φλεγμονή. Η κρυοθεραπεία προωθεί την ανανέωση των κυττάρων και μπορεί να εξουδετερώσει τις τοξίνες από το σώμα σας. Όλα αυτά τα πράγματα που δρουν μαζί μπορούν να βελτιώσουν το δέρμα και να δώσουν ανακούφιση από τα συμπτώματα που μοιάζουν με έκζεμα ή πισωρίαση.",

grhs: "Γενική υγεία & Ευεξία",
grhs_p: "Να περιορίσουμε τα οφέλη της κρυοθεραπείας σε μόνο 10 δεν είναι εύκολο. Είναι μια ισχυρή θεραπεία που προάγει πολλά καλά στη γενική υγεία και ευεξία σας. Είτε ψάχνετε για αντιγηραντικά αποτελέσματα, βελτιωμένη ψυχική υγεία, βοήθεια με την απώλεια βάρους ή τη μείωση του πόνου, η κρυοθεραπεία αξίζει να δοκιμαστεί.",

csnt: "Σταθερές θερμοκρασίες εσωτερικά στο κρυο καμπίνι",
csnt_p: "Η τεχνολογία που χρησιμοποιείται στο Cryo Total διανέμει ομοιόμορφα κρύο αέρα στην καμπίνα, η οποία ψύχει πλήρως τον ασθενή εσωτερικά.",

iti: "Εύκολο στη χρήση διεπαφή",
iti_p: "Με όμορφο σχεδιασμό και πολύ αναγνώσιμη διεπαφή, εμφανίζεται σε μεγάλη επιπλέον οθόνη.",

ata: "Αυτόματο σύστημα ξήρανσης",
ata_p: "Ισχυρές αντλίες ζεστού αέρα, στεγνώνουν την καμπίνα ολοκληρωμένα και γρήγορα.",

twc: "Επικοινωνία διπλής κατεύθυνσης",
twc_p: "Η ασφάλεια και η άνεση της διαδικασίας είναι η προτεραιότητά μας, γι 'αυτό έχουμε διευκολύνει την επαφή του ασθενούς με τον χειριστή, επιτρέποντας την επικοινωνία μέσω ενσωματωμένων μικροφώνων και συσκευών ηχητικής επικοινωνίας.",

spci: "Ευρύχωρο εσωτερικό",
spci_p: "Το εσωτερικό της καμπίνας έχει σχεδιαστεί έτσι ώστε ο ασθενής να μην αισθάνεται κλειστοφοβία. Η καμπίνα επιτρέπει τη θεραπεία δύο ασθενών ταυτόχρονα.",

fdf: "Πλήρης λειτουργία στεγνώματος",
fdf_p: "Για να διατηρείται η καμπίνα καθαρή και για να αποτραπεί η υγρασία στο εσωτερικό, η κάψουλα είναι εξοπλισμένη με αντλίες θερμότητας που στεγνώνουν την καμπίνα γρήγορα και αποτελεσματικά.",

imp: "Σημαντικές ειδοποιήσεις",
imp_p: "Η Cryo Total θα σας ενημερώνει για σημαντικά μηνύματα ή οδηγίες χρήσης της καμπίνας κρυοθεραπείας. Όλες οι οδηγίες θα εμφανίζονται σαφώς στην οθόνη.",

crcp: "Επιλέξτε το πρόγραμμά σας",
crcp_p: "Υπάρχουν 3 προκαθορισμένα προγράμματα και ένα χειροκίνητο. Κάθε πρόγραμμα χαρακτηρίζεται από διαφορετική ένταση της θεραπείας και θερμοκρασία.",

sfts: "Αισθητήρες ασφαλείας",
sfts_p: "Η κάψουλα κρυοθεραπείας Cryo Total είναι εξοπλισμένη με αισθητήρα που ανιχνεύει τη θέση της πόρτας. Κατά τη διάρκεια της κρυοθεραπείας, όταν ανοίγεται η πόρτα, η συνεδρία θα διακοπεί αυτόματα από το σύστημα ασφαλείας.",

pfrz: "Γρήγορο προψύξιμο για να ξεκινήσετε τη θεραπεία σε ένα λεπτό.",

elcm: "Ηλεκτρική καμπίνα κρυοθεραπείας",
bst_im: "Ενισχύοντας το ανοσοποιητικό σας σύστημα, βοηθάτε να καταστρέψετε ιούς πιο γρήγορα",
bstim_p: "<strong >Κατά τη διάρκεια της κρυοθεραπείας, η παραγωγή αντιφλεγμονών ορμονών αυξάνεται σημαντικά στο σώμα σας, μειώνοντας τη φλεγμονή στο σώμα.</strong > Η μείωση αυτή της φλεγμονής βοηθά το σώμα σας να θεραπεύεται και να αναρρώνει πιο γρήγορα και μειώνει τον πόνο σε προβληματικές περιοχές. Κατά τη διάρκεια της συνεδρίας, το σώμα σας υποβάλλεται επίσης σε χαμηλές δόσεις φυσικού στρες από το κρύο. Αυτό το στρες κρατάει τα κύτταρά σας σε εγρήγορση και μπορεί να προκαλέσει μια προσαρμοστική αντίδραση που ενισχύει το ανοσοποιητικό σας σύστημα. Αυτό συμβαίνει λόγω της αύξησης των ανοσοκυττάρων του σώματός σας. Αυτή η ενίσχυση του ανοσοποιητικού σας συστήματος σας βοηθά να καταστρέφετε ιούς και να αντιμετωπίζετε παράγοντες όγκων.",

sprt: "Υποστηρίξτε την υγεία σας με κρυοθεραπεία",
mscl: "Αποκατάσταση μυών",
mscl_p: "Χάρη στη θεραπεία κρυοθεραπείας του Cryo Total, οι αθλητές μπορούν να προπονηθούν πιο σκληρά, για περισσότερο χρόνο και να αναρρώσουν πιο γρήγορα, βοηθώντας τους να επιτύχουν τα μέγιστα αποτελέσματα από τις προπονήσεις και να βελτιώσουν την απόδοσή τους. Κατά τη διάρκεια της θεραπείας, καθώς οι θερμοκρασίες κρυώνουν γρήγορα, το οξυγόνο πιέζεται μέσα από το σώμα για να βοηθήσει στη μείωση της φλεγμονής, την ανακούφιση του πόνου και την ανάκαμψη των μυών.",

bta: "Ομορφιά & αντιγήρανση",
bta_p: "Η κρυοθεραπεία στην καμπίνα κρυοθεραπείας του Cryo Total μπορεί να βοηθήσει στη διατήρηση μιας νεανικής εμφάνισης μειώνοντας τα σημάδια της γήρανσης, όπως τις ρυτίδες και τις λεπτές γραμμές, ενώ ταυτόχρονα σφίγγει το δέρμα και μειώνει την κυτταρίτιδα. Η κρυοθεραπεία ενισχύει την παραγωγή κολλαγόνου στις βαθύτερες στοιβάδες του δέρματος, με αποτέλεσμα μια πιο ομαλή, σφικτή και νεανική εμφάνιση.",

wls_i: "Η διαμονή σε χαμηλές θερμοκρασίες προάγει τη φυσική απώλεια βάρους. Η θεραπεία βοηθά στην ενίσχυση της κυκλοφορίας του αίματος σε όλο το σώμα και στην αύξηση της διακίνησης οξυγονούχου αίματος, που οδηγεί στην αύξηση του μεταβολισμού.",

grhs_i: "Οι ιατρικές μελέτες έχουν δείξει ότι η θεραπεία WBC ή PBC βοηθά τα άτομα να αντιμετωπίσουν την αϋπνία και να επιτύχουν βαθύτερο ύπνο. Η θεραπεία μειώνει επίσης το άγχος και την κατάθλιψη και βελτιώνει το ανοσοποιητικό σύστημα και τη λειτουργία των οργάνων.",

im_bst: "Ενισχύστε το ανοσοποιητικό σας σύστημα",
im_p: "Κατά τη διάρκεια της κρυοθεραπείας, η παραγωγή αντιφλεγμονών ορμονών αυξάνεται σημαντικά στο σώμα σας, μειώνοντας τη φλεγμονή στο σώμα. Αυτό συμβαίνει λόγω της αύξησης των ανοσοκυττάρων του σώματός σας. Αυτή η ενίσχυση του ανοσοποιητικού σας συστήματος σας βοηθά να καταστρέφετε ιούς και να αντιμετωπίζετε παράγοντες όγκων.",

pmg: "Διαχείριση πόνου",
pmg_p: "Οι θεραπείες στο Cryo Total μειώνουν τον πόνο και επιταχύνουν τη διαδικασία ανάρρωσης των τραυματισμών. Κατά τη διάρκεια της θεραπείας, το σώμα επιβραδύνει τη μετάδοση νευρικών σημάτων και απελευθερώνει ένα νευροδιαβιβαστή που μειώνει την ευαισθησία στον πόνο. Η θεραπεία επιταχύνει επίσης τη διακίνηση θρεπτικού αίματος.",

smry: "Περίληψη",
spf: "Προδιαγραφές",
spf_s: "Μέγεθος",
spf_h: "<div>Ύψος</div> <div>232,5 cm (91,54 ίντσες)</div>",
spf_d: "<div>Βάθος</div> <div>125 cm (49,21 ίντσες)</div>",
spf_w: "<div>Πλάτος</div> <div>197,5 cm (77,76 ίντσες)</div>",
spf_wt: "<div>Βάρος</div> <div>290 κιλά</div>",
spf_p: "<div>Τροφοδοσία ρεύματος</div> <div>230V ή 110V</div>",
spf_m: "<div>Μέγιστη ισχύς απαιτούμενη</div> <div>10 αμπέρ 230VAC / 20 αμπέρ 110VAC</div>",
spf_c: "<div>Χρόνος ψύξης</div> <div>3-5 λεπτά</div>",
spf_t: "<div>Εύρος θερμοκρασίας</div> <div>έως -140°C</div>",
spf_td: "<div>Μέγεθος οθόνης αφής</div> <div>21 ίντσες</div>",
spf_tp: "<div>Πίεση δεξαμενής</div> <div>22 Bar</div>",
spf_e: "<div>Ηλεκτρικό παράθυρο</div> <div>ναι</div>",
spf_ds: "<div>Αισθητήρας πόρτας</div> <div>ναι</div>",
spf_a: "<div>Διπλή επικοινωνία ήχου</div> <div>ναι</div>",
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
  