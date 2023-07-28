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
    mt: "Fully electric cryotherapy chamber",
    mp_i: "Liquid nitrogen free",
    m_p_i: " <span style='text-decoration: underline' >Fully electric</span > cryotherapy chamber, completely <span style='text-decoration: underline' >free of liquid nitrogen</span >. Incredibly efficient and economical, ensuring <span style='text-decoration: underline' >low power consumption</span >. Quick cooling of the cabin to the appropriate treatment temperature. <span style='text-decoration: underline' >Smart voice notifications</span > and <span style='text-decoration: underline' >ambient lightning</span > will improve patients mood and overall experience. Stunning <span style='text-decoration: underline' >21-inch large screen touch display</span > to simply manage capsule.",
    mp_e: "Extremely low<br /> temperatures up to",
    mpe_t: "<span class='text-gradient-blue' >-110</span ><sup>°C</sup>",
    mpe_i: "<strong >Vacu Activ has developed an efficient technology that allows the electric cryochamber to be cooled down to -110°C in a very short time, using only electrical power.</strong > We offers the highest level of efficiency and safety, whilst delivering premium quality single-person cryotherapy sessions to the end-user with low energy power consumption.",
    mpe_l: "Low energy<br />consumption",
    mpe_li: " Cryo Hybrid has efficient cooling system which has been designed to reduce power consumption and high efficiency. Thanks to this, we were able to obtain a <strong >power consumption of 4.7 kWh per hour</strong >, which gives low operating cost of the device and a quick return on investment.",
    mp_li: "<span class='text-gradient-blue' >4,7</span > <sup>kWh</sup>",
    mp_o: "Low operating<br />cost",
    mpo_p: "<span class='text-gradient-blue' style='font-size: 130px' >$6</span > <sup >per day<br /> <span class='abs' ><span class='text-blue'>*</span >The value provided is approximate and may vary by country and region.</span ></sup >",
    up_t: "up to <span class='text-gradient-blue' >100+ sessions</span > per day",
    mk_p: "Make a profit, cut expenses, and provide the best experience possible. these are the main goals that lead to highest return on the investment (ROI) possible. Buy the right cryotherapy chamber and meet these goals. The Cryo Hybrid is an energy efficient, high performing machine that has proven to be the most profitable in the industry.",
    rc_e: "ROI calculator<br />example",
    avg: "AVERAGE",
    ss_avg: "Session per hour",
    h_avg: "5 persons per hour",
    avg_p: "Session price",
    bsn_d: "Business days",
    elc_c: "Electricity cost",
    elc_p: "The most recent reports from the EIA show the average residential electricity rate in the U.S. is 15.42 cents per kilowatt-hour (kWh)",
    e_avg_r: "Estimated average revenue",
    prm: "per month",
    bst_a: "Best effects after",
    bst_s: "10 sessions",
    bst_p: "<strong >The best and long-lasting effects after cryotherapy treatments are obtained after a minimum of 10 regular sessions</strong > at short intervals, every day or every 2nd day. In order to increase immunity, performance and maintain physical and mental health, we recommend repeating a series of cryotherapy treatments every quarter.",
    imp: "Improved",
    imp_h: "mental health<br />",
    imp_p: "Regular cryotherapy treatments are completely painless, additionally increase the level of dopamine, endorphins and serotonin, which translates into improved well-being and significantly affects mental health, reducing depression, anxiety and stress. Each of us knows how well systematic cold showers or ice baths have a pro-health effects on our body and immune system. Unfortunately, those solutions are time consuming take a lot effort and are very uncomfortable. Cryotherapy is an ideal alternative that saves time and is pleasant for patients.",
    i_imp: "Improves the",
    q_imp: "quality of sleep",
    qi_imp: "Hardening our body with extremely low temperatures thanks to cryotherapy treatments has many advantages, including helping with the problem of insomnia or interrupted sleep. Thanks to cold therapy, our body can easily enter and maintain the deep REM sleep phase, which is essential to cognitive functions like memory, learning, and creativity. REM sleep is known for the most vivid dreams, which is explained by the significant uptick in brain activity.",
    t_imp: "<strong >The use of the latest solutions and technologies makes it possible to obtain a adequate negative temperature <span style='color: #00baf0' >(-110°C)</span > in the cabin in a very short time to start the cryotherapy treatment.</strong > Whole sytem was built of appropriate, large vents and a very efficient and powerful aggregate, which quickly cools the cabin interior evenly. The entire cooling process allows you to quickly prepare the device for treatments and saves your time and money, making it easier make <span style=' color: #00baf0; font-weight: bold; ' >up to 100+ sessions during one day</span >.",
    prf_z: "Prefreezing<br />up to",
    prfz_m: "min",
    bnfs: "Benefits",
    bnf_sp: "Application of&nbsp; cryotherapy in sports",
    bnf_sp_i: "In amateur and professional sports, regeneration is a key factor in achieving training goals and increasing the body's efficiency. The use of cryotherapy by athletes or people actively engaged in physical activity significantly accelerates the recovery of strength after training, competition or injury. Systematic use of cold also has a protective effect on muscles and joints, making them more resistant to various types of injuries, contusions and increasing their efficiency. Athletes use it to reduce pain in muscles and joints while simultaneously relaxing, and also to regenerate specific areas.",
    bnf_we: "Application of&nbsp; cryotherapy in wellness",
    bnf_we_p: "Cryotherapy is used in various health areas, also in beauty or improving mental health. Cooling your whole body with cold drastically reduces the production of cortisol, the stress hormone, allowing your muscles to relax and speed up your metabolism. The body reacts to the low temperature in the Cryo Hybrid cabin, produces more collagen, which improves the condition of the skin and improves oxygenation, giving it elasticity. In addition to its many regenerative benefits, Cryo Hybrid will also improve the appearance and well-being of your customers.",
    bnf_me: "Application of&nbsp; cryotherapy in medicine",
    bnf_me_p: "The use of extremely low temperatures supports the treatment of many different ailments. Experts unanimously say that applying cold air to the body greatly relieves inflammation and pain due to the body's physiological response to a dramatic drop temperature. Through the systematic use of cold therapy, we strengthen the cardiovascular system and the immune system. More and more doctors and therapists in the field of orthopedics, physiotherapy consists of treatments in Vacu Activ cryochambers.",
    qkc: "Quick &amp;<br />convenient<br /><span class='text-gradient-orange'>drying</span> of the <br />cabin",
    qkc_p: "We have equipped the capsule with a very efficient drying system that very thoroughly and quickly dries the inside of the capsule, removing all moisture. The powerful heat exchanger distributes the warm air inside the cabin through the large vents. The drying process, depending on the condition of the room, takes up to 2 hours, thanks to which the cabin is prepared for next treatments and is safe for your patients.",
    dbl_i: "<span class='text-gradient-blue' >Double</span > layered glass",
    dbl_i_p: "When designing the Cryo Hybrid electric cryotherapy capsule, our engineers put a lot of effort on achieving very low temperatures inside the cabin with the lowest possible power consumption to maintain a high cost-effectiveness. That is why we tried to refine each element of the device using the best solutions. For this purpose, we used a double layered, high-quality tempered, chamber glass, to obtain even better isolation, thanks to which the temperature in the cabin is kept evenly low all the time.",
    ttt: "Two-way communication system <span class='description'>Two-way Voice Technology</span>",
    ttt_p: "When dealing with very low temperatures, down to -110oC, patient safety is the highest priority. The two-way communication system between the patient and the operator during the procedure increases safety and comfort. The applied system separates sounds appropriately, thanks to which the quality of communication is undisturbed and high quality.",
    eht: "Excellent audio quality<span class='description' >Holistic sound<br /> Technology</span >",
    eht_p: "To diversify and increase comfort during the cryotherapy treatment, we have equipped the cabin with a high-quality audio system that allows you to select the appropriate soundtracks. The client can decide for himself what atmosphere he wants during the session, choosing from 6 categories: Atmoshepric, dreamy, powerfull, happy, inspiring or relaxing. The tracks have been selected in such a way as to additionally stimulate our brain, influencing our mental health, enhance brain activity and act as a catalyst for improving health and well-being.",
    ihd: "Huge <span class='text-gradient-blue' >21-inch</span > display",
    ihd_p: "Even bigger, even better, even brighter, high resolution 21-inch touchscreen display. Using such a large screen space, we have designed a very simple and intuitive interface that allows you to easily and quickly manage all the functions of the cryotherapy capsule. Thanks to the huge size of the screen, you can easily read all important information on the display and conveniently set the device parameters.",
    svn: "<span class='text-gradient-blue' >Smart voice </span ><br /> notification",
    svn_p: "<strong >The system automatically detects the stage of the cryotherapy procedure and sends appropriate messages to the patient during the session</strong >, informing about start, selected session length, amount of time to the end and when is finished. In addition, it informs about the open door or activating other activities, such as freezing the capsule or drying, thanks to which the patient and the operator are constantly informed, which affects the whole experience. The operator can manage intelligent voice notifications in the system settings.",
    ial: "Interior<br /> <span class='text-gradient-blue' >ambient</span ><br /> lighting",
    ial_p: "<strong >Our designers also took care of the amazing appearance of the interior of the cryotherapy capsule.</strong > We have used LED lighting to highlighting geometric shapes, that visually enlarge the interior of the cabin, so that the patient feels more pleasant inside.Client can choose any color and brightness of the lighting inside the cabin to set appropriate atmosphere and feel unforgettable experience, triggering all the senses during the cryotherapy treatment.",
    sbm: "<span class='text-gradient-blue' >Subcooling</span ><br /> mode",
    sbm_p: "<strong >The function that in the Cryo Hybrid electric cryotherapy maintains the minus temperature inside the cabin to start the treatment at any time.</strong ><br /> You do not need to dry the cabin after a series of treatments and start cooling the capsule from the beginning, which saves time and money. Subcooling definitely helps facilitates the handling of patients, which accelerates the performance of subsequent cryotherapy treatments.",
    spc: "<span class='text-gradient-blue' >Spacious</span ><br /> cabin",
    spc_p: "<strong >The designed construction of the Cryo Hybrid electric cryotherapy chamber by Vacu Activ engineers allowed to execute very spacious interior in the cabin.</strong > Cryo Hybrid have enough space inside for the patient to feel comfortable, safe and have a free range of movements during the cryotherapy treatment. Additional illumination, high-quality finish of the cabin and background music stimulating the senses, and smart voice notifications, change the whole experience to another level of cryotherapy sessions for your patients.",










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
    mt: "Полностью электрическая криокамера",
     mp_i: "Без жидкого азота",
     m_p_i: " <span style='text-decoration: underline' >Полностью электрическая</span> криотерапевтическая камера, полностью <span style='text-decoration: underline' >без жидкого азота</span>. Невероятно эффективная и экономичная, обеспечивающая <span style='text-decoration: underline' >низкое энергопотребление</span>. Быстрое охлаждение кабины до соответствующей температуры лечения. <span style='text-decoration: underline' > Интеллектуальные голосовые уведомления</span> и <span style='text-decoration: underline' >окружающее освещение</span> улучшат настроение пациентов и общее впечатление. Потрясающий <span style='text-decoration: underline' >21-дюймовый сенсорный дисплей с большим экраном</span> для простого управления капсулой.",
     mp_e: "Чрезвычайно низкие<br /> температуры до",
     mpe_t: "<span class='text-gradient-blue' >-110</span ><sup>°C</sup>",
     mpe_i: "<strong>Компания Vacu Activ разработала эффективную технологию, которая позволяет охлаждать электрическую криокамеру до -110°C за очень короткое время, используя только электроэнергию.</strong> Мы предлагаем высочайший уровень эффективности и безопасности, предоставляя конечному пользователю сеансы криотерапии премиум-класса для одного человека с низким энергопотреблением.",
     mpe_l: "Низкое<br />потребление энергии",
     mpe_li: "Cryo Hybrid имеет эффективную систему охлаждения, которая была разработана для снижения энергопотребления и высокой эффективности. Благодаря этому мы смогли получить <strong>потребляемую мощность 4,7 кВтч в час</strong>, что дает низкую стоимость эксплуатации устройства и быструю окупаемость инвестиций.",
     mp_li: "<span class='text-gradient-blue' >4,7</span > <sup>кВтч</sup>",
     mp_o: "Низкие<br />эксплуатационные расходы",
     mpo_p: "<span class='text-gradient-blue' style='font-size: 130px' >6$</span> <sup >в день<br /> <span class='abs' ><span class='text-blue'>*</span>Указанное значение является приблизительным и может варьироваться в зависимости от страны и региона.</span ></sup >",
     up_t: "до <span class='text-gradient-blue' >100+ сеансов</span> в день",
     mk_p: "Получите прибыль, сократите расходы и предоставьте наилучшие впечатления. Это основные цели, которые ведут к максимальной отдаче от инвестиций (ROI). Купите подходящую камеру для криотерапии и достигните этих целей. Cryo Hybrid — это энергоэффективная, высокопроизводительная машина, которая зарекомендовала себя как самая прибыльная в отрасли.",
     rc_e: "Калькулятор ROI<br />пример",
     avg: "СРЕДНЕЕ",
     ss_avg: "Сеанс в час",
     h_avg: "5 человек в час",
     avg_p: "Стоимость сеанса",
     bsn_d: "Рабочие дни",
     elc_c: "Стоимость электроэнергии",
     elc_p: "Последние отчеты EIA показывают, что средний тариф на электроэнергию для жилых помещений в США составляет 15,42 цента за киловатт-час (кВтч)",
     e_avg_r: "Расчетный средний доход",
     prm: "в месяц",
     bst_a: "Лучшие эффекты после",
     bst_s: "10 сеансов",
     bst_p: "<strong>Наилучшие и длительные эффекты после криотерапии достигаются после минимум 10 регулярных сеансов</strong> с короткими интервалами, каждый день или каждые 2 дня. Для повышения иммунитета, работоспособности и поддержания физического и психического здоровья мы рекомендуем повторять серию криотерапевтических процедур каждый квартал.",
     imp: "Улучшенный",
     imp_h: "психическое здоровье<br />",
     imp_p: "Регулярные процедуры криотерапии совершенно безболезненны, дополнительно повышают уровень дофамина, эндорфинов и серотонина, что приводит к улучшению самочувствия и значительно влияет на психическое здоровье, уменьшая депрессию, беспокойство и стресс. Каждый из нас знает, насколько хорошо систематический холодный душ или ледяные ванны оказывают благотворное влияние на наш организм и иммунную систему. К сожалению, эти решения отнимают много времени и очень неудобны. .",
     i_imp: "Улучшает",
     q_imp: "качество сна",
     qi_imp: "Закаливание нашего тела экстремально низкими температурами благодаря криотерапии имеет много преимуществ, в том числе помогает решить проблему бессонницы или прерывистого сна. Благодаря холодовой терапии наше тело может легко входить и поддерживать фазу глубокого быстрого сна, которая необходима для когнитивных функций, таких как память, обучение и творчество. Быстрый сон известен самыми яркими сновидениями, что объясняется значительным всплеском мозговой активности.",
     t_imp: "<strong>Использование новейших решений и технологий позволяет получить адекватную отрицательную температуру <span style='color: #00baf0' >(-110°C)</span> в кабине за очень короткое время для начала криотерапии.</strong> Вся система построена из соответствующих, больших вентиляционных отверстий и очень эффективного и мощного агрегата, который быстро и равномерно охлаждает салон кабины. Весь процесс охлаждения позволяет быстро подготовить аппарат к процедурам и экономит ваше времени и денег, что упрощает создание <span style=' color: #00baf0; font-weight: жирный; ' >до 100+ сеансов в течениеодин день</span >.",
     prf_z: "Предварительная заморозка<br />до",
     prfz_m: "мин",
     bnfs: "Преимущества",
     bnf_sp: "Применение криотерапии в спорте",
     bnf_sp_i: "В любительском и профессиональном спорте регенерация является ключевым фактором в достижении целей обучения и повышении эффективности тела. Использование криотерапии спортсменами или людьми, активно занимающимися физической активностью мышцы и суставы, одновременно расслабляясь, а также для восстановления конкретных областей ",
     bnf_we: "Применение криотерапии в оздоровительных целях",
     bnf_we_p: "Криотерапия используется в различных областях здоровья, в том числе в красоте или для улучшения психического здоровья. Охлаждение всего тела холодом резко снижает выработку кортизола, гормона стресса, позволяя вашим мышцам расслабиться и ускорить обмен веществ. Тело реагирует на низкую температуру в кабине Cryo Hybrid, вырабатывает больше коллагена, который улучшает состояние кожи и улучшает оксигенацию, придавая ей эластичность. Помимо многих регенеративных преимуществ, Cryo Hybrid также улучшает внешний вид и благополучие ваших клиентов.",
     bnf_me: "Применение криотерапии в медицине",
     bnf_me_p: "Использование экстремально низких температур поддерживает лечение многих различных заболеваний. Специалисты единогласно утверждают, что воздействие холодного воздуха на тело значительно облегчает воспаление и боль благодаря физиологической реакции организма на резкое понижение температуры. Благодаря систематическому использованию холодотерапии мы укрепляем сердечно-сосудистую и иммунную системы. Все больше и больше врачей и терапевтов в области ортопедии, физиотерапия состоит из процедур в криокамерах Vacu Activ.",
     qkc: "Быстрая и<br />удобная<br /><span class='text-gradient-orange'>сушка</span> <br />кабины",
     qkc_p: "Мы оснастили капсулу очень эффективной системой сушки, которая очень тщательно и быстро высушивает внутреннюю часть капсулы, удаляя всю влагу. Мощный теплообменник распределяет теплый воздух внутри кабины через большие вентиляционные отверстия. Процесс сушки, в зависимости от состояния помещения, занимает до 2 часов, благодаря чему кабина подготовлена для следующих процедур и безопасна для ваших пациентов.",
     dbl_i: "<span class='text-gradient-blue' >Двойное</span > многослойное стекло",
     dbl_i_p: "При проектировании электрической криотерапевтической капсулы Cryo Hybrid наши инженеры приложили немало усилий для достижения очень низких температур внутри кабины с минимально возможным энергопотреблением для сохранения высокой экономической эффективности. Именно поэтому мы постарались доработать каждый элемент устройства, используя лучшие решения. Для этого мы использовали двухслойное, высококачественное закаленное, камерное стекло, чтобы получить еще лучшую изоляцию, благодаря которой температура в кабине все время поддерживается равномерно низкой.",
     ttt: "Система двусторонней связи <span class='description'>Технология двусторонней голосовой связи</span>",
     ttt_p: "При работе с очень низкими температурами, вплоть до -110oC, безопасность пациента является высшим приоритетом. Система двусторонней связи между пациентом и оператором во время процедуры повышает безопасность и комфорт. Применяемая система соответствующим образом разделяет звуки, благодаря чему качество связи является ненарушенным и качественным.",
     eht: "Отличное качество звука<span class='description'>Целостный звук<br />Технология</span>",
     eht_p: "Чтобы разнообразить и повысить комфорт во время криотерапии, мы оборудовали кабину качественной аудиосистемой, позволяющей подобрать подходящие звуковые дорожки. Клиент может сам решить, какую атмосферу он хочет во время сеанса, выбирая из 6 категорий: Атмосферная, мечтательная, мощная, счастливая, вдохновляющая или расслабляющая. -существование.",
     ihd: "Огромный <span class='text-gradient-blue' >21-дюймовый</span> дисплей",
     ihd_p: "Еще больше, еще лучше, еще ярче, сенсорный 21-дюймовый дисплей с высоким разрешением. Используя такое большое пространство экрана, мы разработали очень простой и интуитивно понятный интерфейс, который позволяет легко и быстро управлять всеми функциями криокапсулы. Благодаря огромному размеру экрана вы можете легко прочитать всю важную информацию на дисплее и удобно настроить параметры устройства.",
     svn: "<span class='text-gradient-blue' >Умный голос </span ><br /> уведомление",
     svn_p: "<strong>Система автоматически определяет этап процедуры криотерапии и отправляет соответствующие сообщения пациенту во время сеанса</strong >, информируя о начале, выбранной продолжительности сеанса, количестве времени до конца и времени завершения. Кроме того, он информирует об открытой двери или активации других действий, таких как замораживание капсулы или сушка, благодаря чему пациент и оператор постоянно информируются, что влияет на весь опыт. Оператор может управлять интеллектуальными голосовыми уведомлениями в настройках системы.",
     ial: "Внутреннее<br /> <span class='text-gradient-blue' >окружающее</span ><br /> освещение",
     ial_p: "<strong>Наши дизайнеры также позаботились об удивительном внешнем виде внутренней части криокапсулы.</strong> Мы использовали светодиодное освещение для выделения геометрических форм, которые зрительно увеличивают интерьер кабины, чтобы пациент чувствовал себя более приятно внутри. Клиент может выбрать любой цвет и яркость освещения внутри кабины, чтобы создать соответствующую атмосферу и испытать незабываемые ощущения, активизируя все органы чувств во время криотерапевтического лечения.",
     sbm: "<span class='text-gradient-blue' >Режим переохлаждения</span ><br />",
     sbm_p: "<strong>Функция, которая в электрической криотерапии Cryo Hybrid поддерживает минусовую температуру внутри кабины для начала лечения в любой момент.</strong ><br /> Вам не нужно сушить кабину после серии процедур и начинать охлаждение капсулы с самого начала, что экономит время и деньги. Переохлаждение определенно помогает облегчить обращение с пациентами, что ускоряет выполнение последующих процедур криотерапии.",
     spc: "<span class='text-gradient-blue' >Просторная</span ><br /> кабина",
     spc_p: "<strong>Разработанная инженерами Vacu Activ конструкция электрической криокамеры Cryo Hybrid позволила сделать очень просторный интерьер в кабине.</strong> В Cryo Hybrid достаточно места внутри, чтобы пациент чувствовал себя комфортно, безопасно и имел свободный диапазон движений во время криотерапии.",
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
    mt: "Πλήρως ηλεκτρικός θάλαμος κρυοθεραπείας",
     mp_i: "Χωρίς υγρό άζωτο",
     m_p_i: " <span style='text-decoration: underline' >Πλήρως ηλεκτρικός</span > θάλαμος κρυοθεραπείας, εντελώς <span style='text-decoration: underline' >χωρίς υγρό άζωτο</span >. Απίστευτα αποδοτικό και οικονομικό, εξασφαλίζοντας <span style='text-decoration: caspan style. ='text-decoration: underline' >Έξυπνες φωνητικές ειδοποιήσεις</span > και <span style='text-decoration: underline' >αστραπές περιβάλλοντος</span > θα βελτιώσουν τη διάθεση και τη συνολική εμπειρία των ασθενών. Εκπληκτική <span style='text-decoration: underline' >μεγάλη οθόνη αφής 21 ιντσών</span > για να διαχειριστείτε απλώς το καπάκι.",
     mp_e: "Εξαιρετικά χαμηλές<br /> θερμοκρασίες έως",
     mpe_t: "<span class='text-gradient-blue' >-110</span ><sup>°C</sup>",
     mpe_i: "<strong >Η Vacu Activ έχει αναπτύξει μια αποτελεσματική τεχνολογία που επιτρέπει στον ηλεκτρικό κρυοθάλαμο να ψύχεται στους -110°C σε πολύ σύντομο χρονικό διάστημα, χρησιμοποιώντας μόνο ηλεκτρική ενέργεια.</strong > Προσφέρουμε το υψηλότερο επίπεδο απόδοσης και ασφάλειας, ενώ παρέχουμε υψηλής ποιότητας συνεδρίες κρυοθεραπείας ενός ατόμου στον τελικό χρήστη, με χαμηλή κατανάλωση ενέργειας.",
     mpe_l: "Χαμηλή<br />κατανάλωση ενέργειας",
     mpe_li: " Το Cryo Hybrid διαθέτει αποτελεσματικό σύστημα ψύξης που έχει σχεδιαστεί για να μειώνει την κατανάλωση ενέργειας και την υψηλή απόδοση. Χάρη σε αυτό, καταφέραμε να επιτύχουμε <strong >κατανάλωση ισχύος 4,7 kWh ανά ώρα</strong>, η οποία προσφέρει χαμηλό κόστος λειτουργίας της συσκευής και γρήγορη απόδοση της επένδυσης.",
     mp_li: "<span class='text-gradient-blue' >4,7</span > <sup>kWh</sup>",
     mp_o: "Χαμηλό λειτουργικό<br />κόστος",
     mpo_p: "<span class='text-gradient-blue' style='font-size: 130px' >6$</span > <sup >ανά ημέρα<br /> <span class='abs' ><span class='text-blue'>*</span >Η τιμή που παρέχεται είναι κατά προσέγγιση.</span και μπορεί να διαφέρει ανά χώρα και >ανάλογα με την περιοχή",
     up_t: "έως <span class='text-gradient-blue' >100+ συνεδρίες</span > ανά ημέρα",
     mk_p: "Κερδίστε, μειώστε τα έξοδα και παρέχετε την καλύτερη δυνατή εμπειρία. Αυτοί είναι οι κύριοι στόχοι που οδηγούν στην υψηλότερη δυνατή απόδοση της επένδυσης (ROI). Αγοράστε τον κατάλληλο θάλαμο κρυοθεραπείας και εκπληρώστε αυτούς τους στόχους. Το Cryo Hybrid είναι ένα ενεργειακά αποδοτικό μηχάνημα υψηλής απόδοσης που έχει αποδειχθεί το πιο κερδοφόρο στον κλάδο.",
     rc_e: "Υπολογιστής ROI<br />παράδειγμα",
     avg: "ΜΕΣΟΣ",
     ss_avg: "Περίοδος ανά ώρα",
     h_avg: "5 άτομα ανά ώρα",
     avg_p: "Τιμή συνεδρίας",
     bsn_d: "Εργάσιμες ημέρες",
     elc_c: "Κόστος ηλεκτρικής ενέργειας",
     elc_p: "Οι πιο πρόσφατες αναφορές από την ΕΠΕ δείχνουν ότι ο μέσος οικιακός συντελεστής ηλεκτρικής ενέργειας στις ΗΠΑ είναι 15,42 σεντ ανά κιλοβατώρα (kWh)",
     e_avg_r: "Εκτιμώμενα μέσα έσοδα",
     prm: "ανά μήνα",
     bst_a: "Τα καλύτερα εφέ μετά",
     bst_s: "10 συνεδρίες",
     bst_p: "<strong>Τα καλύτερα και μακροχρόνια αποτελέσματα μετά τις θεραπείες κρυοθεραπείας επιτυγχάνονται μετά από τουλάχιστον 10 τακτικές συνεδρίες</strong> σε μικρά διαστήματα, κάθε μέρα ή κάθε 2η ημέρα. Για να αυξηθεί η ανοσία, η απόδοση και να διατηρηθεί η σωματική και ψυχική υγεία, συνιστούμε την επανάληψη μιας σειράς θεραπειών κρυοθεραπείας κάθε τρίμηνο.",
     imp: "Βελτιωμένο",
     imp_h: "ψυχική υγεία<br />",
     imp_p: "Οι τακτικές θεραπείες κρυοθεραπείας είναι εντελώς ανώδυνες, αυξάνουν επιπλέον το επίπεδο της ντοπαμίνης, των ενδορφινών και της σεροτονίνης, που μεταφράζεται σε βελτιωμένη ευεξία και επηρεάζει σημαντικά την ψυχική υγεία, μειώνοντας την κατάθλιψη, το άγχος και το στρες. Ο καθένας από εμάς γνωρίζει πόσο καλά το συστηματικό κρύο ντους ή το παγωμένο ντους επηρεάζει το σώμα μας και είναι πολύ ευεργετική. άβολα. Η κρυοθεραπεία είναι μια ιδανική εναλλακτική που εξοικονομεί χρόνο και είναι ευχάριστη για τους ασθενείς.",
     i_imp: "Βελτιώνει το",
     q_imp: "ποιότητα ύπνου",
     qi_imp: "Η σκλήρυνση του σώματός μας με εξαιρετικά χαμηλές θερμοκρασίες χάρη στις θεραπείες κρυοθεραπείας έχει πολλά πλεονεκτήματα, συμπεριλαμβανομένης της βοήθειας με το πρόβλημα της αϋπνίας ή του διακοπτόμενου ύπνου. Χάρη στην ψυχοθεραπεία, το σώμα μας μπορεί εύκολα να εισέλθει και να διατηρήσει τη φάση βαθύ ύπνου REM, η οποία είναι απαραίτητη για γνωστικές λειτουργίες όπως μνήμη, μάθηση και δημιουργικότητα. Ο ύπνος REM είναι γνωστός για τη σημαντική δραστηριότητα του εγκεφάλου.",
     t_imp: "<strong >Η χρήση των πιο πρόσφατων λύσεων και τεχνολογιών καθιστά δυνατή την απόκτηση κατάλληλης αρνητικής θερμοκρασίας <span style='color: #00baf0' >(-110°C)</span > στην καμπίνα σε πολύ σύντομο χρονικό διάστημα για να ξεκινήσει η κρυοθεραπεία.</strong> Ολόκληρο το σύστημα κατασκευάστηκε από κατάλληλους, μεγάλους αεραγωγούς και μια ισχυρή διαδικασία ψύξης που δροσίζει το εσωτερικό και πολύ αποτελεσματικό και αποτελεσματικό. προετοιμάστε γρήγορα τη συσκευή για θεραπείες και εξοικονομεί χρόνο και χρήμα, διευκολύνοντας την <span style=' color: #00baf0; font-weight: bold; ' >έως 100+ συνεδρίες κατά τη διάρκειαμια μέρα</span >.",
     prf_z: "Προκαταψύξη<br />έως",
     prfz_m: "min",
     bnfs: "Πλεονεκτήματα",
     bnf_sp: "Εφαρμογή&nbsp; κρυοθεραπείας στον αθλητισμό",
     bnf_sp_i: "Στον ερασιτεχνικό και επαγγελματικό αθλητισμό, η αναγέννηση είναι βασικός παράγοντας για την επίτευξη των προπονητικών στόχων και την αύξηση της αποτελεσματικότητας του σώματος. Η χρήση κρυοθεραπείας από αθλητές ή άτομα που ασχολούνται ενεργά με σωματική δραστηριότητα επιταχύνει σημαντικά την ανάκτηση της δύναμης μετά από προπόνηση, αγώνα ή τραυματισμό. Οι αθλητές το χρησιμοποιούν για να μειώσουν τον πόνο στους μύες και τις αρθρώσεις ενώ ταυτόχρονα χαλαρώνουν, αλλά και για να αναγεννήσουν συγκεκριμένες περιοχές.",
     bnf_we: "Εφαρμογή&nbsp; κρυοθεραπείας στην ευεξία",
     bnf_we_p: "Η κρυοθεραπεία χρησιμοποιείται σε διάφορους τομείς υγείας, επίσης στην ομορφιά ή στη βελτίωση της ψυχικής υγείας. Η ψύξη ολόκληρου του σώματός σας με κρύο μειώνει δραστικά την παραγωγή κορτιζόλης, της ορμόνης του στρες, επιτρέποντας στους μυς σας να χαλαρώσουν και να επιταχύνουν τον μεταβολισμό σας. Τα πολλά αναγεννητικά οφέλη του, το Cryo Hybrid θα βελτιώσει επίσης την εμφάνιση και την ευημερία των πελατών σας.",
     bnf_me: "Εφαρμογή της&nbsp; κρυοθεραπείας στην ιατρική",
     bnf_me_p: "Η χρήση εξαιρετικά χαμηλών θερμοκρασιών υποστηρίζει τη θεραπεία πολλών διαφορετικών παθήσεων. Οι ειδικοί λένε ομόφωνα ότι η εφαρμογή κρύου αέρα στο σώμα ανακουφίζει σημαντικά τη φλεγμονή και τον πόνο λόγω της φυσιολογικής απόκρισης του σώματος σε μια δραματική πτώση της θερμοκρασίας. Μέσω της συστηματικής χρήσης της ψυχοθεραπείας, ενισχύουμε το καρδιαγγειακό σύστημα και το ανοσοποιητικό σύστημα. θεραπείες σε κρυοθάλαμους Vacu Activ.",
     qkc: "Γρήγορο &amp;<br />βολικό<br /><span class='text-gradient-orange'> στέγνωμα</span> της <br />καμπίνας",
     qkc_p: "Έχουμε εξοπλίσει την κάψουλα με ένα πολύ αποτελεσματικό σύστημα στεγνώματος που στεγνώνει πολύ καλά και γρήγορα το εσωτερικό της κάψουλας, αφαιρώντας όλη την υγρασία. Ο ισχυρός εναλλάκτης θερμότητας διανέμει τον ζεστό αέρα μέσα στην καμπίνα μέσω των μεγάλων αεραγωγών. Η διαδικασία στεγνώματος, ανάλογα με την κατάσταση του δωματίου, διαρκεί έως και 2 ώρες, χάρη στην οποία η καμπίνα προετοιμάζεται για την επόμενη θεραπεία.",
     dbl_i: "<span class='text-gradient-blue' >Διπλό</span > πολυστρωματικό γυαλί",
     dbl_i_p: "Όταν σχεδίαζαν την κάψουλα ηλεκτρικής κρυοθεραπείας Cryo Hybrid, οι μηχανικοί μας κατέβαλαν μεγάλη προσπάθεια για να επιτύχουν πολύ χαμηλές θερμοκρασίες εντός της καμπίνας με τη χαμηλότερη δυνατή κατανάλωση ενέργειας για να διατηρήσουν υψηλή οικονομική απόδοση. Γι' αυτό προσπαθήσαμε να βελτιώσουμε κάθε στοιχείο της συσκευής χρησιμοποιώντας τις καλύτερες λύσεις. η θερμοκρασία στην καμπίνα διατηρείται ομοιόμορφα χαμηλή όλη την ώρα.",
     ttt: "Σύστημα αμφίδρομης επικοινωνίας <span class='description'>Τεχνολογία αμφίδρομης φωνής</span>",
     ttt_p: "Όταν αντιμετωπίζουμε πολύ χαμηλές θερμοκρασίες, έως -110oC, η ασφάλεια του ασθενούς είναι η ύψιστη προτεραιότητα. Το σύστημα αμφίδρομης επικοινωνίας μεταξύ ασθενούς και χειριστή κατά τη διάρκεια της διαδικασίας αυξάνει την ασφάλεια και την άνεση. Το εφαρμοζόμενο σύστημα διαχωρίζει τους ήχους κατάλληλα, χάρη στο οποίο η ποιότητα της επικοινωνίας είναι αδιατάρακτη και υψηλής ποιότητας.",
     eht: "Εξαιρετική ποιότητα ήχου<span class='description' >Ολιστικός ήχος<br /> Τεχνολογία</span >",
     eht_p: "Για να διαφοροποιήσουμε και να αυξήσουμε την άνεση κατά τη διάρκεια της θεραπείας κρυοθεραπείας, εξοπλίσαμε την καμπίνα με ένα σύστημα ήχου υψηλής ποιότητας που σας επιτρέπει να επιλέξετε τα κατάλληλα soundtrack. Ο πελάτης μπορεί να αποφασίσει μόνος του τι ατμόσφαιρα θέλει κατά τη διάρκεια της συνεδρίας, επιλέγοντας από 6 κατηγορίες: Ατμοσφαιρικό, ονειροπόλο, ισχυρό, χαρούμενο, εμπνευσμένο ή χαλαρωτικό. αναλυτής για τη βελτίωση της υγείας και της ευεξίας.",
     ihd: "Τεράστια οθόνη <span class='text-gradient-blue' >21 ιντσών</span >",
     ihd_p: "Ακόμα μεγαλύτερη, ακόμα καλύτερη, ακόμα πιο φωτεινή, οθόνη αφής 21 ιντσών υψηλής ανάλυσης. Χρησιμοποιώντας έναν τόσο μεγάλο χώρο οθόνης, έχουμε σχεδιάσει μια πολύ απλή και διαισθητική διεπαφή που σας επιτρέπει να διαχειρίζεστε εύκολα και γρήγορα όλες τις λειτουργίες της κάψουλας κρυοθεραπείας. Χάρη στο τεράστιο μέγεθος της οθόνης, μπορείτε εύκολα να διαβάσετε όλες τις σημαντικές πληροφορίες στην οθόνη και να ρυθμίσετε εύκολα τις παραμέτρους της συσκευής.",
     svn: "<span class='text-gradient-blue' >Έξυπνη φωνή </span ><br /> ειδοποίηση",
     svn_p: "<strong >Το σύστημα εντοπίζει αυτόματα το στάδιο της διαδικασίας κρυοθεραπείας και στέλνει κατάλληλα μηνύματα στον ασθενή κατά τη διάρκεια της συνεδρίας</strong >, ενημέρωση σχετικά με την έναρξη, την επιλεγμένη διάρκεια συνεδρίας, το χρόνο μέχρι το τέλος και το πότε θα ολοκληρωθεί. Επιπλέον, ενημερώνει για την ανοιχτή πόρτα ή την ενεργοποίηση άλλων δραστηριοτήτων, όπως το πάγωμα της κάψουλας ή το στέγνωμα, χάρη στα οποία ενημερώνονται συνεχώς ο ασθενής και ο χειριστής, κάτι που επηρεάζει την όλη εμπειρία. Ο χειριστής μπορεί να διαχειρίζεται έξυπνες φωνητικές ειδοποιήσεις στις ρυθμίσεις συστήματος.",
     ial: "Εσωτερικό<br /> <span class='text-gradient-blue' >περιβάλλον</span ><br /> φωτισμός",
     ial_p: "<strong>Οι σχεδιαστές μας φρόντισαν επίσης για την εκπληκτική εμφάνιση του εσωτερικού της κάψουλας κρυοθεραπείας.</strong> Χρησιμοποιήσαμε φωτισμό LED για να τονίσουμε γεωμετρικά σχήματα, που μεγεθύνουν οπτικά το εσωτερικό της καμπίνας, έτσι ώστε ο ασθενής να αισθάνεται πιο ευχάριστος μέσα. Ο πελάτης μπορεί να επιλέξει οποιοδήποτε χρώμα και φωτεινότητα του φωτισμού μέσα στην καμπίνα, για να δημιουργήσει την κατάλληλη ατμόσφαιρα και να βάλει την κατάλληλη ατμόσφαιρα.",
     sbm: "<span class='text-gradient-blue' >Υποψύξη</span ><br /> λειτουργία",
     sbm_p: "<strong >Η λειτουργία που στην ηλεκτρική κρυοθεραπεία Cryo Hybrid διατηρεί την μείον θερμοκρασία μέσα στην καμπίνα για να ξεκινήσει η θεραπεία ανά πάσα στιγμή.</strong><br /> Δεν χρειάζεται να στεγνώσετε την καμπίνα μετά από μια σειρά θεραπειών και να ξεκινήσετε την ψύξη της κάψουλας από την αρχή, γεγονός που εξοικονομεί χρόνο και χρήμα. Η υποψύξη σίγουρα βοηθάει στην απόδοση των ασθενών, διευκολύνει τη θεραπεία.",
     spc: "<span class='text-gradient-blue' >Ευρύχωρη</span ><br /> καμπίνα",
     spc_p: "<strong>Η σχεδιασμένη κατασκευή του ηλεκτρικού θαλάμου κρυοθεραπείας Cryo Hybrid από μηχανικούς της Vacu Activ επέτρεψε την εκτέλεση πολύ ευρύχωρου εσωτερικού χώρου στην καμπίνα.</strong> Το Cryo Hybrid έχει αρκετό χώρο στο εσωτερικό για να αισθάνεται άνετα, ασφαλής και να έχει ελεύθερο εύρος κινήσεων κατά τη διάρκεια της θεραπείας κρυοθεραπείας. άλλο επίπεδο συνεδριών κρυοθεραπείας για τους ασθενείς σας.",
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
  