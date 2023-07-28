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
    mt: "Localized cryotherapy device for wellness, physiotherapy and sport medicine.",
    mt_p: "<strong >Cryo Local Polar Bear is a perfect device for local cryo stimulation that can be used for treatment on particular parts of body.</strong > The device is ideal for rehabilitation and skin care treatments.&nbsp;Spot cryotherapy is used to treat problematic areas with a vapor of nitrogen blowing with <strong>temperature up to -160°C</strong>. Application for pain relief and reduce inflammation in targeted areas of body as well as after surgery treatments and rehabilitation procedure. Available programs for localized cryotherapy for neck, lower back, shoulder, elbow, wrist, hip, knee, ankle and belly areas.",
    ltup: "Low temperature power up to -160 °C",
    ltup_i: "<strong >Local Cryo stimulation involves the exposure of extreme low temperatures (approximately -160°C or 256F) to a specific area of the body and face.</strong > The skin is cooled sufficiently using nitrogen vapor (LN2) to provoke the vasoconstriction of blood vessels, which is then followed by rapid vasodilation post treatment, Cryo stimulation activates the body’s optimum defense mechanism.",
    ltup_ii: "During the short session only the skin is cooled superficially and the body responds by raising it’s internal temperature through increased rates of micro-circulations across the treatment area. The metabolic surge continues for over 4 hours after each procedure. Local Cryo stimulation is often used for pain relief, post surgery recovery and injury rehabilitation. Pain relieving effects of Cryo stimulation can last for 3 – 4 days. Cryo stimulation is applied to increase the rate of healing in order to reduce injury timeframes alongside physical therapy programs.",
    elt: "Extreme low<br /> temperature",
    elt_t: "-160<sup><sup>o</sup>C</sup>",
    ctd: "10.1 -inch high quality, color touch display",
    ctd_p: "<strong >10.1-inch touch screen display</strong > with intuitive and simply to use interface, created by our design department to improve navigate through all the options and menus.",
    pdp: "23 predefined programs",
    pdp_i: "<strong >The system allows you to choose the appropriate treatment from among 23 predefined programs divided into categories such as: face, body, upper and lower body.</strong > The above categories include treatments for shoulders, back, chest, bottom, belly, thighs, hand, elbow, neck, wrist, biceps/triceps, hip calf, ankle, knee or foot.",
    pdp_ii: "In addition, there is a choice of a <strong>manual program</strong> to properly select the values ​​for a given patient’s problem and the end result.",
    rmte: "Remote",
    qctr: "Quick control the treatment by the remote control",
    qctr_p: "<strong >Control treatment through a remote controller located on the handle.</strong > Regulate flow force smoothly by pressing plus and minus buttons. LED lights will show 4 levels of outgoing cooling flow force that help to regulate cryo stimulation of the patient’s skin in a best possible way. Operator also has possibility to pause and start the cryogenic treatment directly from the remote control.",
    snr: "Sensors",
    snr_i: "Sensors located in remote control",
    snr_p: "<strong >Cryo Local Polar Bear is an innovative device that measures the patient’s skin surface temperature during cryotherapy treatment.</strong > A sensor placed in the blow-in nozzle allows a therapist to control the temperature of the body area and skin subjected to cold cryogen. As a result, the therapist can more easily find out whether cryo stimulation is carried out evenly and effectively, and the light signal informs about too intensive skin cooling and a frostbite threat. Thanks to this solution, the patient can feel safe and the operator can focus on the cryotherapy treatment to adequately cool the body part.",
    lzr: "Lasers",
    lzr_i: "Lasers helps you keep the optimal distance",
    lzr_p: "<strong >The lasers placed in the handle indicate the distance between the tip and the cooled area of ​​the body</strong > to make cryogenic treatment safe and not to burn skin surface. The laser beams are crossed and form a dot at the point where they intersect, which show the ideal distance between the handle and the skin.",
    tnk: "50 Liters tank with a sensor indicating the filling",
    tnk_i: "<strong >The device is equipped with a 50-liter liquid nitrogen tank</strong > which can be disconnected and connected in a very simple and quick way.",
    tnk_ii: "<strong >Access to the tank is very easy and does not require any additional tools.</strong > We have equipped Cryo Local Polar Bear with a sensor that indicates<br /> the current filling of the tank with nitrogen liquid and system informs the operator when tank is empty on the main screen.",
    rfp: "Recommended for places",
    rfp_p: "Physiotherapy",
    rfp_m: "Medical centers",
    rfp_c: "Clinics",
    rfp_h: "Hotels",
    rfp_l: "<strong >The device is recommended for clinics, hospitals, sanatoriums, rehabilitation and physiotherapeutic surgeries.</strong > Easy to move, it can work in several places: at the patient’s bed, in gyms, in rehabilitation and physiotherapy surgeries.",
    ctt: "Cryotherapy treatment",
    ctt_i: "Local cryotherapy treatment involves blowing of a mixture of liquid nitrogen vapors and cooled air. Making circular movements, a physiotherapist applies frozen air over the area subjected to cryotherapy. A single treatment usually lasts from several dozen seconds to 30 minutes.",
    ctt_ii: "This treatment method is more and more frequently used, also in cosmetics. If you have a problem with cellulite, erythema, birthmarks, with dilated capillaries or other skin imperfections, it is worth going to the nearest beauty salon and enjoying this treatment.",
    ata: "Anti-aging",
    ata_p: "Fine lines, pore size and wrinkles diminished on the face, neck and chest Improved firmness, smoothness and elasticity as collagen is stimulated.",
    prd: "Pain reduction",
    prd_p: "Extreme cold applied to the injured area stimulates oxygenated blood flow, reducing tension and inflammation.",
    frd: "Face redness reduction",
    frd_p: " Effective way to tighten and brighten the skin. They increase blood flow to the face, which can make the skin look healthy and plump.",
    imr: "Increased motion range",
    imr_p: "80% of the respondents noticed an improve in the range of motion",
    bcp: "Back pain",
    bcp_p: "Cryotherapy can reduce swelling, which is tied to pain. It may also reduce sensitivity to pain",
    atn: "Application",
    atn_i: "<strong >Cryotherapy is also used in face and body plastic surgery, in cellulite and overweight treatment and in prevention of aging processes.</strong > Local cryotherapy in the area of surgical site during plastic surgery and liposuction after application of sutures and before tourniquets significantly reduces postoperative oedema, accelerates the skin healing process. Thanks to local cryotherapy, skin becomes more oxygenated and, consequently, firm and luminous. Cryotherapy also helps to fight with wrinkles, since anti-wrinkle and moisturizing cosmetics are introduced into the skin during the procedure. Skin stimulated with cold absorbs all cosmetic preparations much better, which, thanks to the low temperature, can reach deeper layers of the epidermis. Therefore, the face oval improves, wrinkles become smoothed and the skin – stimulated for regeneration.",
    atn_ii: "<strong >Cryotherapy helps to take care of not only the face, but also the neckline, stomach, breasts, neck, buttocks and arms.</strong > Treatments carried out at low temperature reduce stretch marks, swelling or spider veins, making the skin more elastic and firm.",
    ctsp: "Cryothrapy in<br /> sports medicine",
    ctsp_p: "<strong >Treatment with cold in sport brings positive effects during healing of injuries, which has been confirmed by numerous tests.</strong > It is also an indispensable element of effective preparation and regeneration of the sports person. Athletes both in Poland and in the world use local cryotherapy. Cryotherapy in sport primarily accelerates body regeneration after training, has analgesic, anti-swelling, and anti-inflammatory effects, supporting treatment of various types of injuries to the musculoskeletal system.",
    wtp: "When to apply the treatment ?",
    wtp_i: "<li> Treatment of joints and muscles </li> <li> Injuries of joints and soft tissues, e.g. sprains, dislocations </li> <li> All rheumatoid and rheumatic diseases of the motor organs, e.g. rheumatoid arthritis </li> <li>Ankylosing spondylitis</li> <li>Psoriatic arthritis</li> <li> Joint diseases caused by metabolic disorders (gout) </li> <li>Periarticular inflammation</li> <li>Degenerative spine disease</li> <li> Burns – removing thermal shock </li> <li>Discopathies</li>",
    wtp_ii: "<li>Enthesopathies</li> <li>Tendopaties</li> <li>Myalgias</li> <li> Tendon diseases, torn muscles and ligaments </li> <li>Prevention of osteoporosis</li> <li>Multiple sclerosis</li> <li> Oedema, bruises, post-traumatic hematomas </li>",
    wtr: "What are the results<br /> of the treatment ?",
    wtr_i: "<li> Limitation of circulation in a particular place </li> <li>Slower metabolism</li> <li> Improved blood supply and oxygen absorption in tissues </li> <li>Stimulated cold receptors</li> <li> Reduced activity of heat receptors </li> <li> Formation of vasomotor changes </li> <li> Reduced muscle tension and reduced pain by launching an internal analgesic response </li>",
    wtr_ii: "<li>Inhibited inflammation</li> <li> More oxygenated skin – firmer and more elastic </li> <li>Smoothed wrinkles</li> <li>Improved face oval</li> <li>Faster skin regeneration</li> <li> Reduction of disappearance of edema </li>",
    glrr: "Gallery",
    spf: "Specifications",
    spf_s: "Size",
    spf_w: "<div>Width</div> <div>68,6 cm (27,01 inches)</div>",
    spf_l: "<div>Length</div> <div>70,3 cm (27,68 inches)</div>",
    spf_h: "<div>Height</div> <div>192,7 cm (75,87 inches)</div>",
    spf_p: "<div>Power supply</div> <div>230V or 110V</div>",
    spf_n: "<div>Nitrogen tank capacity</div> <div>50L</div>",
    spf_c: "<div>Nitrogen level sensors</div> <div>yes</div>",
    spf_hs: "<div>Hose length</div> <div>2m</div>",
    spf_t: "<div>Touch Display Size</div> <div>10.1 -inch</div>",
    spf_m: "<div>Maximum Temperature</div> <div>-160°C </div>",
    spf_ts: "<div>Temperature skin sensor</div> <div>yes </div>",
    spf_ls: "<div>Lasers</div> <div>yes </div>",
    spf_ri: "<div>Remote in the handle</div> <div>yes </div>",








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
    mt: "Устройство локализованной криотерапии для благополучия, физиотерапии и спортивной медицины.",
    mt_p: "<strong>Cryo Local Polar Bear - идеальное устройство для локальной криостимуляции, которое можно использовать для лечения определенных частей тела.</strong> Устройство идеально подходит для реабилитации и ухода за кожей. Пятновая криотерапия используется для лечения проблемных участков с паром азота, имеющим <strong>температуру до -160 °C.</strong> Применяется для облегчения боли, уменьшения воспаления в целевых областях тела, а также после оперативных вмешательств и процедур реабилитации. Доступны программы локализованной криотерапии для областей шеи, поясницы, плеча, локтя, запястья, бедра, колена, щиколотки и живота.",
    ltup: "Питание с низкой температурой до -160 °C",
    ltup_i: "<strong>Локальная криостимуляция включает воздействие экстремально низких температур (приблизительно -160 °C или 256F) на определенную область тела и лица.</strong> Кожу достаточно охлаждают, используя пар азота (LN2), чтобы вызвать вазоконстрикцию кровеносных сосудов, за которой следует быстрое вазодилатация после процедуры. Криостимуляция активирует оптимальные защитные механизмы организма.",
    ltup_ii: "В течение короткой сессии охлаждается только поверхность кожи, и организм реагирует, повышая свою внутреннюю температуру за счет увеличения скорости микроциркуляции по области обработки. Метаболический подъем продолжается более 4 часов после каждой процедуры. Локальная криостимуляция часто используется для облегчения боли, восстановления после операций и реабилитации травм. Облегчающее боли действие криостимуляции может длиться 3-4 дня. Криостимуляцию применяют для ускорения процесса заживления, чтобы уменьшить сроки восстановления после травм, в сочетании с программами физической терапии.",
    elt: "Экстремально низкая<br /> температура",
    elt_t: "-160<sup><sup>o</sup>С</sup>",
    ctd: "10,1-дюймовый сенсорный дисплей высокого качества",
    ctd_p: "<strong>10,1-дюймовый сенсорный дисплей</strong> с интуитивным и простым интерфейсом, созданным нашим отделом дизайна для улучшенной навигации по всем опциям и меню.",
    pdp: "23 предопределенных программы",
    pdp_i: "<strong>Система позволяет выбирать соответствующее лечение из 23 предопределенных программ, разделенных на категории, такие как: лицо, тело, верхнее и нижнее тело.</strong> В вышеуказанных категориях предусмотрены лечения для плеч, спины, груди, ягодиц, живота, бедер, рук, локтей, шеи, запястьев, бицепсов/трицепсов, бедер, голеностопных суставов, коленей или стоп.",
    pdp_ii: "Кроме того, предусмотрен выбор <strong>ручной программы</strong>, чтобы правильно выбрать значения для проблемы пациента и желаемого результата.",
    rmte: "Дистанционное управление",
    qctr: "Быстрое управление процедурой с помощью пульта дистанционного управления",
    qctr_p: "<strong>Управление процедурой через пульт дистанционного управления, расположенный на ручке.</strong> Плавно регулируйте силу потока, нажимая кнопки плюс и минус. Светодиодные индикаторы показывают 4 уровня силы исходящего охлаждающего потока, которые помогают регулировать криостимуляцию кожи пациента наилучшим образом. Оператор также имеет возможность приостановить и начать криогенную процедуру прямо с пульта дистанционного управления.",
    snr: "Датчики",
    snr_i: "Датчики расположены на пульте дистанционного управления",
    snr_p: "<strong>Cryo Local Polar Bear - инновационное устройство, которое измеряет температуру кожной поверхности пациента во время криотерапевтической процедуры.</strong> Датчик, расположенный в сопле, позволяет терапевту контролировать температуру области тела и кожи, подвергнутой холодному криогену. Благодаря этому терапевт может более точно определить, проводится ли криостимуляция равномерно и эффективно, а световой сигнал информирует о слишком интенсивном охлаждении кожи и возможной опасности обморожения. Благодаря этому решению пациент чувствует себя в безопасности, и оператор может сосредотачиваться на проведении криотерапии, чтобы правильно охладить часть тела.",
    lzr: "Лазеры",
    lzr_i: "Лазеры помогают поддерживать оптимальное расстояние",
    lzr_p: "<strong>Размещенные в ручке лазеры указывают на расстояние между кончиком и охлаждаемой областью тела</strong>, чтобы сделать криогенное обращение безопасным и не вызывать ожогов поверхности кожи. Лазерные лучи пересекаются и образуют точку в месте их пересечения, которая показывает идеальное расстояние между ручкой и кожей.",
    tnk: "Бак объемом 50 литров с датчиком уровня заполнения",
    tnk_i: "<strong>Устройство оборудовано 50-литровым баком с жидким азотом</strong>, который можно подключать и отключать очень простым и быстрым способом.",
    tnk_ii: "<strong>Доступ к баку очень прост и не требует дополнительных инструментов.</strong> Мы оснастили Cryo Local Polar Bear датчиком, который указывает текущий уровень заполнения бака жидким азотом, и система информирует оператора, когда бак пуст на главном экране.",
    rfp: "Рекомендуется для следующих мест",
    rfp_p: "Физиотерапии",
    rfp_m: "Медицинских центров",
    rfp_c: "Клиник",
    rfp_h: "Гостиниц",
    rfp_l: "<strong>Устройство рекомендуется для клиник, больниц, санаториев, реабилитационных и физиотерапевтических центров.</strong> Легко передвигается, может работать в нескольких местах: возле кровати пациента, в тренажерных залах, в реабилитационных и физиотерапевтических центрах.",
    ctt: "Криотерапия",
    ctt_i: "Локальное лечение криотерапией включает подачу смеси паров жидкого азота и охлажденного воздуха. Физиотерапевт делает круговые движения и наносит охлажденный воздух на область, подвергаемую криотерапии. Одно лечение обычно длится от нескольких десятков секунд до 30 минут.",
    ctt_ii: "Этот метод лечения становится все более популярным, также в косметологии. Если у вас есть проблемы с целлюлитом, эритемой, родинками, расширенными капиллярами или другими дефектами кожи, стоит обратиться в ближайший салон красоты и насладиться этим лечением.",
    ata: "Против старения",
    ata_p: "Мелкие морщины, размер пор и морщины уменьшаются на лице, шее и груди. Улучшается упругость, гладкость и эластичность, так как стимулируется производство коллагена.",
    prd: "Уменьшение боли",
    prd_p: "Экстремальный холод, примененный на травмированную область, стимулирует кровоток с кислородом, снижая напряжение и воспаление.",
    frd: "Уменьшение покраснений кожи",
    frd_p: "Эффективный способ укрепить и осветлить кожу. Они увеличивают кровоток к лицу, что может придать коже здоровый и объемный вид.",
    imr: "Увеличение диапазона движения",
    imr_p: "80% опрошенных заметили улучшение диапазона движения",
    bcp: "Боль в спине",
    bcp_p: "Криотерапия может снизить отечность, связанную с болью, а также уменьшить чувствительность к боли",
    atn: "Применение",
    atn_i: "<strong>Криотерапия также используется в хирургии пластики лица и тела, лечении целлюлита и избыточного веса и в предотвращении процессов старения.</strong> Локальная криотерапия в области хирургического вмешательства во время пластической хирургии и липосакции после наложения швов и перед жгутами значительно снижает постоперационный отек, ускоряет процесс заживления кожи. Благодаря локальной криотерапии кожа становится лучше оксигенированной и, следовательно, более упругой и сияющей. Криотерапия также помогает бороться с морщинами, так как косметические средства против морщин и увлажняющие средства вводятся в кожу во время процедуры. Кожа, стимулированная холодом, намного лучше всасывает все косметические препараты, которые, благодаря низкой температуре, могут проникать в глубокие слои эпидермиса. В результате улучшается овал лица, морщины разглаживаются, а кожа стимулируется на регенерацию.",
atn_ii: "<strong>Криотерапия позволяет заботиться не только о лице, но и о декольте, животе, груди, шее, ягодицах и руках.</strong> Процедуры, проводимые при низкой температуре, снижают растяжки, отеки или сетчатые вены, делая кожу более упругой и упругой.",
ctsp: "Криотерапия в<br />спортивной медицине",
ctsp_p: "<strong>Лечение холодом в спорте дает положительные результаты во время заживления травм, что было подтверждено многочисленными исследованиями.</strong> Оно также является неотъемлемой частью эффективной подготовки и регенерации спортсмена. Спортсмены как в Польше, так и во всем мире используют локальную криотерапию. Криотерапия в спорте прежде всего ускоряет регенерацию организма после тренировок, обладает обезболивающим, противоотечным и противовоспалительным действием, поддерживая лечение различных травм опорно-двигательного аппарата.",
wtp: "Когда применять процедуру?",
wtp_i: "<li>Лечение суставов и мышц</li> <li>Травмы суставов и мягких тканей, например, растяжения, вывихи</li> <li>Все ревматоидные и ревматические заболевания опорно-двигательного аппарата, например, ревматоидный артрит</li> <li>Болезнь Бехтерева</li> <li>Псориатический артрит</li> <li>Заболевания суставов, вызванные нарушениями обмена веществ (подагра)</li> <li>Периартрит</li> <li>Дегенеративные заболевания позвоночника</li> <li>Ожоги – удаление термического шока</li> <li>Дископатии</li>",
wtp_ii: "<li>Энтезопатии</li> <li>Тендопатии</li> <li>Миалгии</li> <li>Заболевания сухожилий, разорванные мышцы и связки</li> <li>Профилактика остеопороза</li> <li>Множественная склероз</li> <li> Отеки, синяки, послетравматические гематомы</li>",
wtr: "Каковы результаты процедуры?",
wtr_i: "<li>Ограничение кровообращения в определенном месте</li> <li>Медленный метаболизм</li> <li>Улучшенное кровоснабжение и усвоение кислорода в тканях</li> <li>Стимулированные холодовые рецепторы</li> <li>Сниженная активность тепловых рецепторов</li> <li>Формирование вазомоторных изменений</li> <li>Снижение напряжения мышц и сокращение боли за счет запуска внутреннего анальгетического ответа</li>",
wtr_ii: "<li>Подавление воспаления</li> <li>Более оксигенированная кожа – более упругая и эластичная</li> <li>Сглаживание морщин</li> <li>Улучшение овала лица</li> <li>Ускоренное восстановление кожи</li> <li> Снижение исчезновения отеков</li>",
glrr: "Галерея",
spf: "Характеристики",
spf_s: "Размер",
spf_w: "<div>Ширина</div> <div>68,6 см (27,01 дюймов)</div>",
spf_l: "<div>Длина</div> <div>70,3 см (27,68 дюймов)</div>",
spf_h: "<div>Высота</div> <div>192,7 см (75,87 дюймов)</div>",
spf_p: "<div>Питание</div> <div>230 В или 110 В</div>",
spf_n: "<div>Емкость бака с азотом</div> <div>50 л</div>",
spf_c: "<div>Датчики уровня азота</div> <div>да</div>",
spf_hs: "<div>Длина шланга</div> <div>2 м</div>",
spf_t: "<div>Размер сенсорного дисплея</div> <div>10,1 дюйма</div>",
spf_m: "<div>Максимальная температура</div> <div>-160°C</div>",
spf_ts: "<div>Датчик температуры кожи</div> <div>да</div>",
spf_ls: "<div>Лазеры</div> <div>да</div>",
spf_ri: "<div>Удаленное управление в ручке</div> <div>да</div>",
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
    mt: "Συσκευή τοπικής κρυοθεραπείας για ευεξία, φυσιοθεραπεία και αθλητική ιατρική.",
    mt_p: "<strong>Το Cryo Local Polar Bear είναι μια ιδανική συσκευή για την τοπική κρυοθεραπεία που μπορεί να χρησιμοποιηθεί για τη θεραπεία συγκεκριμένων μερών του σώματος.</strong> Η συσκευή είναι ιδανική για αποκατάσταση και περιποίηση του δέρματος. Η τοπική κρυοθεραπεία χρησιμοποιείται για να αντιμετωπίσει προβληματικές περιοχές με ένα ατμό αζώτου που φυσά με θερμοκρασία μέχρι -160°C. Χρησιμοποιείται για ανακούφιση από πόνο και μείωση φλεγμονής σε συγκεκριμένες περιοχές του σώματος, καθώς και μετά από χειρουργικές επεμβάσεις και διαδικασίες αποκατάστασης. Διατίθενται προγράμματα για τοπική κρυοθεραπεία για τις περιοχές του λαιμού, της μέσης, του ώμου, του αγκώνα, του καρπού, της γοφού, του γόνατος, του αστραγάλου και της κοιλιάς.",
    ltup: "Χαμηλή θερμοκρασία μέχρι -160 °C",
    ltup_i: "<strong>Η τοπική κρυοθεραπεία περιλαμβάνει την έκθεση σε ακραία χαμηλές θερμοκρασίες (περίπου -160°C ή 256F) σε μια συγκεκριμένη περιοχή του σώματος και του προσώπου.</strong> Το δέρμα ψύχεται επαρκώς χρησιμοποιώντας ατμό αζώτου (LN2) για να προκαλέσει την αγγειοσυστολή των αιμοφόρων αγγείων, που ακολουθείται από γρήγορη αγγειοδιαστολή μετά την θεραπεία. Η τοπική κρυοθεραπεία ενεργοποιεί το βέλτιστο μηχανισμό άμυνας του σώματος.",
    ltup_ii: "Κατά την σύντομη συνεδρία, ψύχεται μόνο επιφανειακά το δέρμα και το σώμα ανταποκρίνεται αυξάνοντας την εσωτερική του θερμοκρασία μέσω αυξημένων ρυθμών μικροκυκλοφοριών σε όλη την περιοχή της θεραπείας. Η μεταβολική έκρηξη συνεχίζεται για πάνω από 4 ώρες μετά από κάθε διαδικασία. Η τοπική κρυοθεραπεία χρησιμοποιείται συχνά για ανακούφιση από τον πόνο, αποκατάσταση μετά από χειρουργική επέμβαση και αποκατάσταση τραυματισμού. Οι αναλγητικές επιδράσεις της τοπικής κρυοθεραπείας μπορούν να διαρκέσουν 3-4 ημέρες. Η κρυοθεραπεία εφαρμόζεται για να αυξηθεί η ταχύτητα επούλωσης προκειμένου να μειωθούν οι χρονικοί πλαισιασμοί τραυματισμού σε συνδυασμό με προγράμματα φυσικοθεραπείας.",
    elt: "Ακραία χαμηλή<br /> θερμοκρασία",
    elt_t: "-160<sup><sup>o</sup>C</sup>",
    ctd: "Οθόνη υψηλής ποιότητας 10.1 ιντσών με έγχρωμη αφή",
    ctd_p: "<strong>Οθόνη αφής 10.1 ιντσών</strong> με εύκολο και απλό στη χρήση διεπαφή, δημιουργημένη από το τμήμα σχεδιασμού μας για βελτιωμένη πλοήγηση μέσω όλων των επιλογών και μενού.",
    pdp: "23 προκαθορισμένα προγράμματα",
    pdp_i: "<strong>Το σύστημα σας επιτρέπει να επιλέξετε την κατάλληλη θεραπεία από μια επιλογή 23 προκαθορισμένων προγραμμάτων που διαιρούνται σε κατηγορίες, όπως πρόσωπο, σώμα, πάνω και κάτω σώμα.</strong> Οι παραπάνω κατηγορίες περιλαμβάνουν θεραπείες για τους ώμους, την πλάτη, το στήθος, τον κάτω πόνο, την κοιλιά, τους μηρούς, το χέρι, τον αγκώνα, τον λαιμό, τον καρπό, τους δικέφαλους / τρίκεφαλους, τον γοφό, τον γάστρο, τον αστράγαλο, το γόνατο ή το πόδι.",
    pdp_ii: "Επιπλέον, υπάρχει επιλογή για ένα <strong>χειροκίνητο πρόγραμμα</strong> για να επιλέξετε σωστά τις τιμές για το πρόβλημα ενός συγκεκριμένου ασθενούς και το τελικό αποτέλεσμα.",
    rmte: "Τηλεχειριστήριο",
    qctr: "Γρήγορος έλεγχος της θεραπείας με το τηλεχειριστήριο",
    qctr_p: "<strong>Έλεγχος της θεραπείας μέσω του τηλεχειριστηρίου που βρίσκεται στη λαβή.</strong> Ρυθμίστε τη ροή της δύναμης ομαλά πατώντας τα κουμπιά συν και μείον. Τα LED φώτα θα εμφανίζουν 4 επίπεδα εξερχόμενης ροής ψύξης που βοηθούν να ρυθμίσουν την κρυοθεραπεία του δέρματος του ασθενούς με τον καλύτερο δυνατό τρόπο. Ο χειριστής έχει επίσης τη δυνατότητα να παύσει και να ξεκινήσει την κρυογενή θεραπεία απευθείας από το τηλεχειριστήριο.",
    snr: "Αισθητήρες",
    snr_i: "Αισθητήρες που βρίσκονται στο τηλεχειριστήριο",
    snr_p: "<strong>Το Cryo Local Polar Bear είναι μια καινοτόμος συσκευή που μετρά τη θερμοκρασία της επιδερμίδας του ασθενούς κατά τη διάρκεια της κρυοθεραπείας.</strong> Ένας αισθητήρας που τοποθετείται στο εύκαμπτο σωληνάκι του ατμού επιτρέπει στον θεραπευτή να ελέγχει τη θερμοκρασία της περιοχής του σώματος και του δέρματος που υπόκειται σε κρυοθεραπεία. Ως αποτέλεσμα, ο θεραπευτής μπορεί ευκολότερα να διαπιστώσει εάν η κρυοθεραπεία εφαρμόζεται ομοιόμορφα και αποτελεσματικά και το φωτεινό σήμα ενημερώνει για το υπερβολικό ψύξιμο του δέρματος και τον κίνδυνο παγετού. Χάρη σε αυτήν την λύση, ο ασθενής μπορεί να αισθάνεται ασφαλής και ο χειριστής μπορεί να επικεντρωθεί στην κρυοθεραπεία για να κρυώσει επαρκώς το μέρος του σώματος.",
    lzr: "Λέιζερ",
    lzr_i: "Οι λέιζερ βοηθούν να διατηρείτε την ιδανική απόσταση",
lzr_p: "<strong>Οι λέιζερ που τοποθετούνται στη λαβή υποδεικνύουν την απόσταση μεταξύ της άκρης και της ψυγειομένης περιοχής του σώματος</strong> για να κάνουν την κρυοθεραπεία ασφαλή και να μην επιβαρύνουν το επιφανειακό δέρμα. Οι δέσμες των λέιζερ διασταυρώνονται και δημιουργούν ένα σημείο στο σημείο όπου τέμνονται, το οποίο δείχνει την ιδανική απόσταση μεταξύ της λαβής και του δέρματος.",
tnk: "Δοχείο 50 λίτρων με αισθητήρα που υποδεικνύει τη γέμιση",
tnk_i: "<strong>Η συσκευή είναι εξοπλισμένη με ένα δοχείο υγρού αζώτου 50 λίτρων</strong> που μπορεί να αποσυνδεθεί και να συνδεθεί με πολύ απλό και γρήγορο τρόπο.",
tnk_ii: "<strong>Η πρόσβαση στο δοχείο είναι πολύ εύκολη και δεν απαιτεί κανένα επιπλέον εργαλείο.</strong> Έχουμε εξοπλίσει το Cryo Local Polar Bear με έναν αισθητήρα που υποδεικνύει την τρέχουσα γέμιση του δοχείου με υγρό αζώτου και το σύστημα ενημερώνει τον χειριστή όταν το δοχείο είναι άδειο στην κύρια οθόνη.",
rfp: "Προτείνεται για τις εξής τοποθεσίες",
rfp_p: "Φυσιοθεραπεία",
rfp_m: "Ιατρικά κέντρα",
rfp_c: "Κλινικές",
rfp_h: "Ξενοδοχεία",
rfp_l: "<strong>Η συσκευή συνιστάται για κλινικές, νοσοκομεία, λουτρά, αποκαταστάτες και χειρουργεία φυσιοθεραπείας.</strong> Εύκολη στη μετακίνηση, μπορεί να λειτουργήσει σε διάφορες τοποθεσίες: δίπλα από το κρεβάτι του ασθενούς, σε γυμναστήρια, σε χειρουργεία αποκατάστασης και φυσιοθεραπείας.",
ctt: "Θεραπεία κρυοθεραπείας",
ctt_i: "Η τοπική θεραπεία κρυοθεραπείας περιλαμβάνει τον ψεκασμό μίγματος ατμού αζώτου και κρύου αέρα. Κάνοντας κυκλικές κινήσεις, ένας φυσιοθεραπευτής εφαρμόζει παγωμένο αέρα στην περιοχή που υπόκειται σε κρυοθεραπεία. Μια μόνο θεραπεία συνήθως διαρκεί από μερικά δευτερόλεπτα έως 30 λεπτά.",
ctt_ii: "Αυτή η μέθοδος θεραπείας χρησιμοποιείται όλο και πιο συχνά, επίσης στην κοσμετολογία. Αν αντιμετωπίζετε πρόβλημα με κυτταρίτιδα, ερυθρότητα, ουλές, διασταλμένα καπίλλια ή άλλες ατέλειες του δέρματος, αξίζει να επισκεφθείτε το πλησιέστερο κέντρο αισθητικής και να απολαύσετε αυτήν τη θεραπεία.",
ata: "Αντιγήρανση",
ata_p: "Οι λεπτές γραμμές, η διάσταση των πόρων και οι ρυτίδες μειώνονται στο πρόσωπο, το λαιμό και το στήθος. Βελτιωμένη σφριγηλότητα, ομαλότητα και ελαστικότητα καθώς το κολλαγόνο διεγείρεται.",
prd: "Μείωση πόνου",
prd_p: "Η έντονη κρύο που εφαρμόζεται στη τραυματισμένη περιοχή διεγείρει τη ροή οξυγονωμένου αίματος, μειώνοντας την ένταση και τον φλεγμονώδη πόνο.",
frd: "Μείωση κόκκινου προσώπου",
frd_p: "Αποτελεσματικός τρόπος για την τόνωση και την αναζωογόνηση του δέρματος. Αυξάνουν την κυκλοφορία του αίματος στο πρόσωπο, πράγμα που μπορεί να κάνει το δέρμα να φαίνεται υγιές και παχύ.",
imr: "Αύξηση εύρους κίνησης",
imr_p: "Το 80% των ανταποκρινομένων παρατήρησε βελτίωση στο εύρος κίνησης",
bcp: "Πόνος στην πλάτη",
bcp_p: "Η κρυοθεραπεία μπορεί να μειώσει το οίδημα, που σχετίζεται με τον πόνο. Επίσης, μπορεί να μειώσει την ευαισθησία στον πόνο",
atn: "Εφαρμογή",
    atn_i: "<strong >Η κρυοθεραπεία χρησιμοποιείται επίσης στην πλαστική χειρουργική του προσώπου και του σώματος, στην αντιμετώπιση της κυτταρίτιδας και του υπέρβαρου και στην πρόληψη των διαδικασιών γήρανσης.</strong > Η τοπική κρυοθεραπεία στην περιοχή του χειρουργικού τομέα κατά την πλαστική χειρουργική και την λιποαναρρόφηση μετά την εφαρμογή των ραφών και πριν από τα τουρνικέ, μειώνει σημαντικά το μετεγχειρητικό οίδημα και επιταχύνει τη διαδικασία επούλωσης του δέρματος. Χάρη στην τοπική κρυοθεραπεία, το δέρμα γίνεται περισσότερο οξυγονούχο και, συνεπώς, πιο σφριγηλό και λαμπερό. Η κρυοθεραπεία βοηθά επίσης στην καταπολέμηση των ρυτίδων, καθώς αντιρυτιδικά και ενυδατικά καλλυντικά εισέρχονται στο δέρμα κατά τη διάρκεια της διαδικασίας. Το δέρμα που διεγείρεται από το κρύο απορροφά πολύ καλύτερα όλες τις καλλυντικές προετοιμασίες, οι οποίες, χάρη στη χαμηλή θερμοκρασία, μπορούν να φτάσουν σε βαθύτερα στρώματα της επιδερμίδας. Επομένως, η οροφή του προσώπου βελτιώνεται, οι ρυτίδες εξομαλύνονται και το δέρμα - ενεργοποιημένο για την αναγέννηση.",
    atn_ii: "<strong >Η κρυοθεραπεία βοηθά στη φροντίδα όχι μόνο του προσώπου, αλλά και του λαιμού, της κοιλιάς, του στήθους, του λαιμού, των γλουτών και των χεριών.</strong > Οι θεραπείες που πραγματοποιούνται σε χαμηλή θερμοκρασία μειώνουν τις ραγάδες, το οίδημα ή τις αράχνες φλέβες, κάνοντας το δέρμα πιο ελαστικό και σφριγηλό.",
    ctsp: "Κρυοθεραπεία στην<br /> ιατρική των αθλημάτων",
    ctsp_p: "<strong >Η θεραπεία με κρύο στον αθλητισμό φέρνει θετικά αποτελέσματα κατά την ανάρρωση από τραυματισμούς, το οποίο έχει επιβεβαιωθεί από πολλές δοκιμές.</strong > Είναι επίσης ένα αναπόσπαστο στοιχείο της αποτελεσματικής προετοιμασίας και ανάκτησης του αθλητή. Οι αθλητές τόσο στην Πολωνία όσο και στον κόσμο χρησιμοποιούν την τοπική κρυοθεραπεία. Η κρυοθεραπεία στον αθλητισμό επιταχύνει κυρίως την αναγέννηση του σώματος μετά την προπόνηση, έχει αναλγητική, αντιοιδηματώδη και αντιφλεγμονώδη δράση, υποστηρίζοντας τη θεραπεία διαφόρων τύπων τραυματισμών του μυοσκελετικού συστήματος.",
    wtp: "Πότε να εφαρμόσετε τη θεραπεία ;",
    wtp_i: "<li> Θεραπεία αρθρώσεων και μυών </li> <li> Τραυματισμοί αρθρώσεων και μαλακών ιστών, π.χ. διαστρέμματα, αποκαλύψεις </li> <li> Όλες οι ρευματοειδείς και ρευματικές παθήσεις των κινητικών οργάνων, π.χ. ρευματοειδής αρθρίτιδα </li> <li> Ανυπαρθρίτιδα σπονδυλίτιδα </li> <li> Ψωριασική αρθρίτιδα </li> <li> Αρθριτικές νόσοι που προκαλούνται από μεταβολικές διαταραχές (πονοκέφαλος) </li> <li> Γύρω από το αρθρίτιδα </li> <li> Αυτοάνοσες νοσήματα του κινητικού συστήματος (π.χ. κροτάφια) </li> <li> Δισκοπάθειες </li>",
    wtp_ii: "<li> Ανθεσοπάθειες </li> <li> Τενδοπάθειες </li> <li> Μυαλγίες </li> <li> Νόσοι τενόντων, θραυσμένα μυς και συνδέσμους </li> <li> Πρόληψη της οστεοπόρωσης </li> <li> Σκλήρυνση κατά πλάκας </li> <li> Οίδημα, μώλωπες, μετεγχειρητικές αιματώματα </li>",
    wtr: "Ποιά είναι τα αποτελέσματα<br /> της θεραπείας ;",
    wtr_i: "<li> Περιορισμός της κυκλοφορίας σε ένα συγκεκριμένο μέρος </li> <li> Επιβράδυνση του μεταβολισμού </li> <li> Βελτίωση της αιμοποίησης και της απορρόφησης οξυγόνου στα ιστού </li> <li> Διεγείρονται τα κρύα αισθητήρια </li> <li> Μειωμένη δραστηριότητα των θερμαινόμενων αισθητήρων </li> <li> Σχηματισμός αγγειακών αλλαγ ών </li> <li> Μείωση της έντασης των μυών και μείωση του πόνου με την έναρξη μιας εσωτερικής αναλγητικής αντίδρασης </li>",
    wtr_ii: "<li> Καταστολή του φλεγμονώδους </li> <li> Περισσότερο οξυγονωμένο δέρμα - πιο σφριγηλό και ελαστικό </li> <li> Εξομαλύνονται οι ρυτίδες </li> <li> Βελτίωση της οβάλ έκφρασης </li> <li> Γρηγορότερη αναγέννηση του δέρματος </li> <li> Μείωση της εξαφάνισης του οιδήματος </li>",
    glrr: "Συλλογή εικόνων",
    spf: "Προδιαγραφές",
    spf_s: "Μέγεθος",
    spf_w: "<div>Πλάτος</div> <div>68,6 cm (27,01 ίντσες)</div>",
    spf_l: "<div>Μήκος</div> <div>70,3 cm (27,68 ίντσες)</div>",
    spf_h: "<div>Ύψος</div> <div>192,7 cm (75,87 ίντσες)</div>",
    spf_p: "<div>Παροχή ηλεκτρικού ρεύματος</div> <div>230V ή 110V</div>",
    spf_n: "<div>Χωρητικότητα δεξαμενής νιτρογόνου</div> <div>50L</div>",
    spf_c: "<div>Αισθητήρες επιπέδου νιτρογόνου</div> <div>ναι</div>",
    spf_hs: "<div>Μήκος σωλήνα</div> <div>2μ</div>",
    spf_t: "<div>Μέγεθος οθόνης αφής</div> <div>10.1 ίντσες</div>",
    spf_m: "<div>Μέγιστη θερμοκρασία</div> <div>-160°C </div>",
    spf_ts: "<div>Αισθητήρας θερμοκρασίας δέρματος</div> <div>ναι </div>",
    spf_ls: "<div>Λέιζερ</div> <div>ναι </div>",
    spf_ri: "<div>Απομακρυσμένος έλεγχος</div> <div>ναι </div>",
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
  