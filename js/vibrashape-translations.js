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
    mt: "The combination of vibration platform with infrared IR",
    mt_p: "Whole body vibration plate encourages lymphatic movement, rapid muscular contractions and systemic circulation to provide an effective warm up or workout. Simple exercises in combination with vibration therapy and the effects of infrared IR lamps guarantee more than satisfactory results during short training sessions. Hack your strength and recovery in just minutes each day. Say goodbye to spending hours at the gym every week, as Vibrashape offers a convenient alternative that delivers remarkable results. Whether you’re passionate about your hours-long lifting sessions or energetic Zumba classes, Vibrashape complements your existing routine seamlessly. In addition to its strength and recovery benefits, Vibrashape serves as a valuable tool for supplemental use. By incorporating Whole Body Vibration Therapy (WBVT), you can stimulate lymphatic drainage, enhance bone mass, and elevate your mood. Embrace the efficiency and versatility of Vibrashape, and unlock a new level of fitness, well-being, and overall vitality.",
    exn: "Exercise on the vibration platform",
    exn_i: "<strong >Exercising on the Vibrashape vibration platform involves performing simple exercises on a vibration platform</strong > that produces pulsating vibrations and moves in different directions with different speed and amplitude.",
    exn_ii: "The vibrations reach to all parts of the muscles, putting them into intensive work, which in turn effectively reduces fat tissue.",
    avt: "Amazing vibration<br /> technology",
    avt_i: "<strong >Implemented vibration technology enhances motor unit recruitment and synchronization resulting in increased force production and efficiency of movement.</strong > Vibrashape creates 25-50 vibrations per second forcing the body’s kinetic chain to respond each time, requiring stabilization, coordination, strength and endurance.",
    vba: "Vibration amplitude",
    dis: "Degrees of intensity",
    enp: "Engine power<br />",
    mxm: "Maximum weight<br />",
    trp: "5 different training programs",
    trp_i: "<strong >Vibrashape allows the user to choose</strong > from five different training programs.",
    trp_ii: "Reduction of<br /> fatty tissu and<br /> decrease cholesterol<br /> level",
    trp_iii: "More intense fat breakdown<br /> and lowering cholesterol<br /> levels.",
    trp_iv: "Body modeling<br /> and strengthening<br /> muscles<br /> &nbsp;",
    trp_v: "Improving flexibility<br /> and joint strength,<br /> tendons and bones<br /> &nbsp;",
    trp_vi: "Possibility<br /> independent<br /> all settings<br /> parameters",
    mn: "Manual",
    bfs: "Vibrashape benefits<br />",
    bfs_p: "<strong >Vibrating platform is beneficial for tendons, joints and bones, significantly strengthening them.</strong > Training on Vibrashape improves blood circulation, which in turn accelerates the removal of harmful metabolic products from the body (the body cleans itself faster). According to experts, a maximum of <strong >fifteen-minute training on Vibrashape</strong > is the equivalent of a classic one-hour training in the gym. Vibration at specific frequencies also helps oxygen and nutrients get to your muscles and other tissues more efficiently, which can aid in flexibility, blood flow, muscle soreness, and can even reduce levels of your main stress hormone, cortisol.",
    cls: "Classic training",
    ifr: "Infrared IR",
    ifr_p: "Vibrashape has independently functioning vibrating plates, as well as <strong >5 infrared heaters with a power of 100W each.</strong >",
    pwr: "Power<br /> of the radiator",
    rdtn: "Radiation<br /> range",
    fdn: "The full<br /> spectrum of radiation",
    fdn_p: "The infrared heaters used in the device generate the full spectrum of IR-A, IR-B and IR-C radiation. It reaches the muscles and warms them up, thus generating a greater demand for energy, which is derived from fat burning. In addition, infrared accelerates the treatment of injuries and rheumatism and the removal of toxins from the body, relieves stress, improves well-being, and improves the condition and aesthetics of the skin.",
    sdn: "Spectrum<br /> of radiation",
    sdn_i: "IR-A<br /> IR-B<br /> IR-C",
    sdn_p: "IR-A radiation, as the shortest infrared waves, characterized by deep heating and penetration into the deeper parts of the skin. On the other hand, IR-B and IR-C, as relatively shorter infrared rays, will affect the upper skin and epidermis, as well as cause moderate heating.",
    rcm: "Recommended for<br /> treatments",
    rcm_i: "<li style='color: #ffffff'> Idiopathic peripheral neuropathy </li> <li style='color: #ffffff'> Osteoporosis </li> <li style='color: #ffffff'> Multiple sclerosis",
    rcm_ii: "<li style='color: #ffffff'> Parkinson’s disease </li> <li style='color: #ffffff'> Cerebral palsy </li> <li style='color: #ffffff'> Rheumatoid arthritis </li>",
    spf: "Specifications",
    spf_s: "Size",
    spf_h: "<div>Height</div> <div>131 cm (51,57 inches)</div>",
    spf_d: "<div>Depth</div> <div>100 cm (39,37 inches)</div>",
    spf_w: "<div>Width</div> <div>104 cm (40,94 inches)</div>",
    spf_ps: "Power supply",
    spf_mx: "Max power consumption",
    spf_e: "<div>Engine</div> <div>AC / 3PH (three-phase)</div>",
    spf_ep: "Engine Power",
    spf_ec:"<div>Engine control</div> <div>Frequency inverter</div>",
    spf_vb: "<div> Vibration frequency adjustment </div> <div>Yes</div>",
    spf_ivb: "<div>Independent vibrating plates</div> <div>Yes 2x</div>",
    spf_i: "Infrared heaters",
    spf_ih: "<div>Infrared heaters power</div> <div>100W each</div>",
    spf_rd: "Radiation range",
    spf_t: "Touch display size",





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
    mt: "Сочетание вибрационной платформы с инфракрасным ИК",
     mt_p: "Виброплита для всего тела стимулирует движение лимфы, быстрые мышечные сокращения и системное кровообращение, обеспечивая эффективную разминку или тренировку. Простые упражнения в сочетании с вибротерапией и воздействием инфракрасных ИК-ламп гарантируют более чем удовлетворительные результаты во время коротких тренировок. Улучшайте свою силу и восстанавливайтесь всего за несколько минут каждый день. Забудьте о том, чтобы проводить часы в тренажерном зале каждую неделю, поскольку Vibrashape предлагает удобную альтернативу, которая дает замечательные результаты. Если вы увлечены многочасовыми тренировками с поднятием тяжестей или энергичными занятиями зумбой, Vibrashape органично дополняет существующую рутину.В дополнение к своим преимуществам силы и восстановления, Vibrashape служит ценным инструментом для дополнительного использования.Включив вибротерапию всего тела (WBVT), вы можете стимулировать лимфодренаж, увеличить костную массу и поднять настроение , Воспользуйтесь эффективностью и универсальностью Vibrashape и откройте для себя новый уровень физической подготовки, хорошего самочувствия и общей жизненной силы",
     exn: "Упражнение на виброплатформе",
     exn_i: "<strong>Упражнения на виброплатформе Vibrashape включают выполнение простых упражнений на виброплатформе</strong>, которая производит пульсирующие вибрации и движется в разных направлениях с разной скоростью и амплитудой.",
     exn_ii: "Вибрации достигают всех частей мышц, заставляя их интенсивно работать, что в свою очередь эффективно уменьшает жировую ткань.",
     avt: "Удивительная технология вибрации<br />",
     avt_i: "<strong>Внедренная технология вибрации улучшает рекрутирование и синхронизацию двигательных единиц, что приводит к увеличению производства силы и эффективности движения.</strong> Vibrashape создает 25-50 вибраций в секунду, каждый раз заставляя кинетическую цепь тела реагировать, требуя стабилизации, координация, сила и выносливость.",
     vba: "Амплитуда вибрации",
     dis: "Степени интенсивности",
     enp: "Мощность двигателя<br />",
     mxm: "Максимальный вес<br />",
     trp: "5 различных программ обучения",
     trp_i: "<strong>Vibrashape позволяет пользователю выбирать</strong> из пяти различных программ обучения.",
     trp_ii: "Уменьшение<br /> жировой ткани и<br /> снижение уровня холестерина<br />",
     trp_iii: "Более интенсивное расщепление жиров<br /> и снижение уровня холестерина<br />.",
     trp_iv: "Моделирование тела<br /> и укрепление<br /> мышц<br /> &nbsp;",
     trp_v: "Повышение гибкости<br /> и прочности суставов,<br /> сухожилий и костей<br /> &nbsp;",
     trp_vi: "Возможность<br /> независимого <br /> от всех настроек <br /> параметров",
     mn: "Вручную",
     bfs: "Преимущества Vibrashape<br />",
     bfs_p: "<strong>Виброплатформа благотворно влияет на сухожилия, суставы и кости, значительно укрепляя их.</strong> Тренировки на Vibrashape улучшают кровообращение, что в свою очередь ускоряет вывод из организма вредных продуктов метаболизма (организм самоочищается быстрее). По мнению экспертов, максимальная <strong>пятнадцатиминутная тренировка на Vibrashape</strong> эквивалентна классической часовой тренировке в тренажерном зале. Вибрация на определенных частотах также помогает кислороду и питательным веществам поступать к мышцам. и другие ткани более эффективно, что может помочь в гибкости, кровотоке, боли в мышцах и может даже снизить уровень вашего основного гормона стресса, кортизола",
     cls: "Классический тренинг",
     ifr: "Инфракрасный ИК",
     ifr_p: "Vibrashape имеет независимо функционирующие виброплиты, а также <strong>5 инфракрасных обогревателей мощностью 100 Вт каждый.</strong>",
     pwr: "Мощность<br /> излучателя",
     rdtn: "Диапазон излучения<br />",
     fdn: "Полный<br /> спектр излучения",
     fdn_p: "Инфракрасные обогреватели, используемые в устройстве, генерируют полный спектр ИК-А, ИК-В и ИК-С излучения. Оно достигает мышц и нагревает их, тем самым вызывая повышенный спрос на энергию, получаемую из жира. сжигание.Кроме того, инфракрасное излучение ускоряет лечение травм и ревматизма и выведение токсинов из организма, снимает стресс, улучшает самочувствие, улучшает состояние и эстетику кожи.",
     sdn: "Спектр<br /> излучения",
     sdn_i: "IR-A<br /> IR-B<br /> IR-C",
     sdn_p: "ИК-А излучение, как самые короткие инфракрасные волны, характеризующиеся глубоким прогревом и проникновением в более глубокие участки кожи. С другой стороны, ИК-В и ИК-С, как относительно более короткие инфракрасные лучи, будут воздействовать на верхних слоев кожи и эпидермиса, а также вызывать умеренное нагревание.",
     rcm: "Рекомендуется для лечения<br />",
     rcm_i: "<li style='color: #ffffff'> Идиопатическая периферическая нейропатия </li> <li style='color: #ffffff'> Остеопороз </li> <li style='color: #ffffff'> Рассеянный склероз ",
     rcm_ii: "<li style='color: #ffffff'> Болезнь Паркинсона </li> <li style='color: #ffffff'> Детский церебральный паралич </li> <li style='color: #ffffff'> Ревматоидный артрит </li>",
     spf: "Технические характеристики",
     spf_s: "Размер",
     spf_h: "<div>Рост</div> <div>131 см (51,57 дюйма)</div>",
     spf_d: "<div>Глубина</div> <div>100 см (39,37 дюймов)</div>",
     spf_w: "<div>Ширина</div> <div>104 см (40,94 дюйма)</div>",
     spf_ps: "Электропитание",
     spf_mx: "Максимальное энергопотребление",
     spf_e: "<div>Двигатель</div> <div>AC/3PH (трехфазный)</div>",
     spf_ep: "Мощность двигателя",
     spf_ec:"<div>Управление двигателем</div> <div>Преобразователь частоты</div>",
     spf_vb: "<div> Регулировка частоты вибрации </div> <div>Да</div>",
     spf_ivb: "<div>Независимые виброплиты</div> <div>Да 2x</div>",
     spf_i: "Инфракрасные обогреватели",
     spf_ih: "<div>Мощность инфракрасных обогревателей</div> <div>100 Вт каждый</div>",
     spf_rd: "Диапазон излучения",
     spf_t: "Размер сенсорного экрана",
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
    mt: "Ο συνδυασμός πλατφόρμας δόνησης με υπέρυθρες IR",
     mt_p: "Η πλάκα δόνησης ολόκληρου του σώματος ενθαρρύνει τη λεμφική κίνηση, τις γρήγορες μυϊκές συσπάσεις και τη συστηματική κυκλοφορία για αποτελεσματική προθέρμανση ή προπόνηση. Απλές ασκήσεις σε συνδυασμό με θεραπεία δονήσεων και τα αποτελέσματα των υπέρυθρων λαμπτήρων υπερύθρων εγγυώνται περισσότερα από ικανοποιητικά αποτελέσματα κατά τη διάρκεια σύντομων προπονήσεων. Χαλαρώστε τη δύναμή σας και την ανάρρωσή σας σε λίγα λεπτά κάθε μέρα. Πείτε αντίο στο να περνάτε ώρες στο γυμναστήριο κάθε εβδομάδα, καθώς το Vibrashape προσφέρει μια βολική εναλλακτική που προσφέρει αξιοσημείωτα αποτελέσματα. Είτε είστε παθιασμένοι με τις πολύωρες συνεδρίες ανύψωσης είτε με τα ενεργητικά μαθήματα Zumba. Το Vibrashape συμπληρώνει απρόσκοπτα την υπάρχουσα ρουτίνα σας. Εκτός από τα οφέλη δύναμης και αποκατάστασης, το Vibrashape χρησιμεύει ως πολύτιμο εργαλείο για συμπληρωματική χρήση. Με την ενσωμάτωση της θεραπείας δόνησης ολόκληρου σώματος (WBVT), μπορείτε να τονώσετε τη λεμφική παροχέτευση, να ενισχύσετε την οστική μάζα και να ανυψώσετε τη διάθεσή σας . Αγκαλιάστε την αποτελεσματικότητα και την ευελιξία του Vibrashape και ξεκλειδώστε ένα νέο επίπεδο φυσικής κατάστασης, ευεξίας και συνολικής ζωτικότητας.",
     exn: "Άσκηση στην πλατφόρμα δόνησης",
     exn_i: "<strong>Η άσκηση στην πλατφόρμα δόνησης Vibrashape περιλαμβάνει την εκτέλεση απλών ασκήσεων σε μια πλατφόρμα δόνησης</strong> που παράγει παλλόμενους κραδασμούς και κινείται σε διαφορετικές κατευθύνσεις με διαφορετική ταχύτητα και πλάτος.",
     exn_ii: "Οι δονήσεις φτάνουν σε όλα τα μέρη των μυών, βάζοντάς τους σε εντατική εργασία, η οποία με τη σειρά της μειώνει αποτελεσματικά τον λιπώδη ιστό.",
     avt: "Εκπληκτική τεχνολογία δόνησης<br />",
     avt_i: "<strong>Η εφαρμοσμένη τεχνολογία δόνησης ενισχύει την πρόσληψη και τον συγχρονισμό της κινητήριας μονάδας με αποτέλεσμα την αυξημένη παραγωγή δύναμης και την αποτελεσματικότητα της κίνησης.</strong> Το Vibrashape δημιουργεί 25-50 δονήσεις ανά δευτερόλεπτο αναγκάζοντας την κινητική αλυσίδα του σώματος να ανταποκρίνεται κάθε φορά, απαιτώντας σταθεροποίηση. συντονισμός, δύναμη και αντοχή",
     vba: "Πλάτος δόνησης",
     dis: "Βαθμοί έντασης",
     enp: "Ισχύς κινητήρα<br />",
     mxm: "Μέγιστο βάρος<br />",
     trp: "5 διαφορετικά προγράμματα εκπαίδευσης",
     trp_i: "<strong>Το Vibrashape επιτρέπει στον χρήστη να επιλέξει</strong> από πέντε διαφορετικά προγράμματα εκπαίδευσης.",
     trp_ii: "Μείωση<br /> λιπώδους ιστού και<br /> μείωση του επιπέδου χοληστερόλης<br />",
     trp_iii: "Πιο έντονη διάσπαση λίπους<br /> και μείωση των επιπέδων χοληστερόλης<br />.",
     trp_iv: "Μοντελοποίηση σώματος<br /> και ενδυνάμωση<br /> μυών<br /> &nbsp;",
     trp_v: "Βελτίωση της ευλυγισίας<br /> και της δύναμης των αρθρώσεων,<br /> τενόντων και οστών<br /> &nbsp;",
     trp_vi: "Δυνατότητα<br /> ανεξάρτητα<br /> όλες οι ρυθμίσεις<br /> παράμετροι",
     mn: "Εγχειρίδιο",
     bfs: "Πλεονεκτήματα Vibrashape<br />",
     bfs_p: "<strong>Η πλατφόρμα δόνησης είναι ευεργετική για τους τένοντες, τις αρθρώσεις και τα οστά, ενισχύοντάς τα σημαντικά.</strong> Η προπόνηση στο Vibrashape βελτιώνει την κυκλοφορία του αίματος, η οποία με τη σειρά της επιταχύνει την απομάκρυνση των επιβλαβών μεταβολικών προϊόντων από το σώμα (το σώμα καθαρίζεται από μόνο του. γρηγορότερα). Σύμφωνα με τους ειδικούς, το πολύ <strong >δεκαπέντε λεπτά προπόνησης στο Vibrashape</strong> ισοδυναμεί με μια κλασική προπόνηση μιας ώρας στο γυμναστήριο. Οι κραδασμοί σε συγκεκριμένες συχνότητες βοηθούν επίσης το οξυγόνο και τα θρεπτικά συστατικά να φτάσουν στους μυς σας και άλλους ιστούς πιο αποτελεσματικά, που μπορούν να βοηθήσουν στην ευελιξία, τη ροή του αίματος, τον μυϊκό πόνο και μπορεί ακόμη και να μειώσουν τα επίπεδα της κύριας ορμόνης του στρες, της κορτιζόλης.",
     cls: "Κλασική εκπαίδευση",
     ifr: "Υπέρυθρο IR",
     ifr_p: "Το Vibrashape διαθέτει δονούμενες πλάκες που λειτουργούν ανεξάρτητα, καθώς και <strong >5 θερμάστρες υπερύθρων με ισχύ 100 W το καθένα.</strong >",
     pwr: "Ισχύς<br /> του ψυγείου",
     rdtn: "Radiation<br /> range",
     fdn: "Το πλήρες<br /> φάσμα της ακτινοβολίας",
     fdn_p: "Οι υπέρυθρες θερμάστρες που χρησιμοποιούνται στη συσκευή παράγουν όλο το φάσμα της ακτινοβολίας IR-A, IR-B και IR-C. Φτάνει στους μύες και τους θερμαίνει, δημιουργώντας έτσι μεγαλύτερη ζήτηση για ενέργεια, η οποία προέρχεται από το λίπος Επιπλέον, η υπέρυθρη ακτινοβολία επιταχύνει τη θεραπεία τραυματισμών και ρευματισμών και την απομάκρυνση των τοξινών από το σώμα, ανακουφίζει από το στρες, βελτιώνει την ευεξία και βελτιώνει την κατάσταση και την αισθητική του δέρματος.",
     sdn: "Φάσμα<br /> ακτινοβολίας",
     sdn_i: "IR-A<br /> IR-B<br /> IR-C",
     sdn_p: "Η ακτινοβολία IR-A, ως τα συντομότερα υπέρυθρα κύματα, που χαρακτηρίζονται από βαθιά θέρμανση και διείσδυση στα βαθύτερα μέρη του δέρματος. Από την άλλη πλευρά, το IR-B και το IR-C, ως σχετικά μικρότερες υπέρυθρες ακτίνες, θα επηρεάσουν την στο άνω μέρος του δέρματος και της επιδερμίδας, καθώς και να προκαλούν μέτρια θέρμανση.",
     rcm: "Συνιστάται για<br /> θεραπείες",
     rcm_i: "<li style='color: #ffffff'> Ιδιοπαθής περιφερική νευροπάθεια </li> <li style='color: #ffffff'> Οστεοπόρωση </li> <li style='color: #ffffff'> Πολλαπλή σκλήρυνση ",
     rcm_ii: "<li style='color: #ffffff'> Νόσος του Πάρκινσον </li> <li style='color: #ffffff'> Εγκεφαλική παράλυση </li> <li style='color: #ffffff'> Ρευματοειδής αρθρίτιδα </li>",
     spf: "Προδιαγραφές",
     spf_s: "Μέγεθος",
     spf_h: "<div>Ύψος</div> <div>131 cm (51,57 ίντσες)</div>",
     spf_d: "<div>Βάθος</div> <div>100 cm (39,37 ίντσες)</div>",
     spf_w: "<div>Πλάτος</div> <div>104 cm (40,94 ίντσες)</div>",
     spf_ps: "Τροφοδοτικό",
     spf_mx: "Μέγιστη κατανάλωση ενέργειας",
     spf_e: "<div>Μηχανή</div> <div>AC / 3PH (τριφασικό)</div>",
     spf_ep: "Ισχύς κινητήρα",
     spf_ec:"<div>Έλεγχος κινητήρα</div> <div>Μετατροπέας συχνότητας</div>",
     spf_vb: "<div> Ρύθμιση συχνότητας δόνησης </div> <div>Ναι</div>",
     spf_ivb: "<div>Ανεξάρτητες δονούμενες πλάκες</div> <div>Ναι 2x</div>",
     spf_i: "Υπέρυθρες θερμάστρες",
     spf_ih: "<div>Ισχύς θερμαντικών υπερύθρων</div> <div>100W έκαστος</div>",
     spf_rd: "Εύρος ακτινοβολίας",
     spf_t: "Μέγεθος οθόνης αφής",
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
  