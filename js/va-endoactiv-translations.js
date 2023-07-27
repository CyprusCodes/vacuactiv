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
    mt: "VA Endoactiv excellent body treatment",
    mt_p: "<strong >VA Endoactiv therapy is recognized as an excellent body treatment thanks to a revolutionary method of compression micro-vibration + infrared technology</strong > that is able to eliminate body and facial imperfections (fighting cellulite, remodeling fatty deposits and correcting facial imperfections).",
    cmp: "Compression with microvibration",
    cmp_p: "<strong >VA Endoactiv, a technology that uses an innovative compression microvibration system</strong >, is a procedure that, with the help of a roller composed of 50 silicone balls, generates low-frequency mechanical vibrations that act on the main causes of cellulite: lymphatic stagnation, fluid accumulation, accumulation of fat cells. The treatment follows a special protocol developed by the Scientific Committee and can be performed on the entire body, from the feet to the neck, from the forehead to the abdomen, buttocks and arms.",
    dpt: "Device is ideal for people<br /> who take care of themselves",
    ftc: "For those who take care of themselves",
    ftc_p: " Reduction of cellulite and adipose tissue, the effect of skin tightening, reduction of orange peel, elimination of skin flaccidity",
    fth: "For athletes",
    fth_p: "Elimination of muscle cramps and pain. Reduction of muscle pain during intensive training of athletes.",
    wks: "Wrinkle smoothing",
    wks_p: "Rejuvenation of the skin of the face and body, combating the symptoms of signs of aging of the skin of the face, decollete and neck, increasing skin tension",
    rxn: "Relaxation",
    rxn_p: "Elimination of venous and lymphatic stasis of the lower or upper limbs after a working day, relaxation, elimination of the feeling of heaviness in the muscles and limbs.",
    smc: "Smoothing scars",
    smc_p: "It improves blood supply to the tissue and facilitates skin nutrition. Eliminating the depression and leveling the color",
    pgr: "Proven, great results",
    pgr_p: "<strong >Universities and medical institutes have shown excellent and reliable results:</strong > tightens and tones muscles and tissues, fights and smoothes cellulite, smoothes the skin and reduces orange peel, improves lymphatic and venous circulation, performs important mechanical lymphatic drainage of the whole body, reduces waist and hip circumference, has amazing anti-aging effect on the face and neck.",
    htw: "How it works ?",
    htw_p: "<strong >The inner ball roller machine is a non-invasive mechanical compression micro-vibration + infrared treatment. The principle is to generate compression micro-vibration by rolling the silicone ball along the 360° rotation of the roller.</strong > As the ball rotates and exerts pressure on the skin, it produces a “pulsation compression” effect, which realizes the reciprocating motion of continuous pushing, pulling and kneading, and the tissue will experience some pressure. And lifting action, will not squeeze or damage the skin, its principle is to release infrared rays while pressure is applied to the tissues to stretch the cells to naturally and deeply stimulate cell activity, blood flow and oxygenation, and the fat deposits are pressurized and thus loosened for final decomposition.",
    bml: "Body modeling",
    bml_i: "The vibration of the balls creates a push-pull action that transforms the tissue. The shape and firmness of the body improves after just a few treatments, while reducing the unsightly orange peel effect visible on the skin.",
    mscf: "Muscle firming",
    mscf_p: "The compression microvibration technology firms the muscles by actively resisting compression. These vibrations stimulate the muscles and improve the tone in the treated areas.",
    lpd: "Lymhatic drainage",
    lpd_p: "Compression Microvibrations use the rotational movement of the balls and the direction of the cylinder’s movement over the skin to activate the proper functioning of the lymphatic system. This helps remove excess fluid from the tissue that has accumulated due to poor circulation.",
    vce: "Vascular effect",
    vce_p: "The arrangement of the balls in a honeycomb pattern stimulates the circulatory system, improving blood flow in the tissues. This “vascular tissue training” improves microcirculation.",
    anef: "Analgesic effect",
    anef_p: "Compression Microvibrations act on mechanoreceptors to reduce pain and tissue inflammation. They improve tissue oxygenation and reduce painful swelling",
    rrcl: "Reduces and removes cellulite",
    rrcl_p: "Pressure on deep muscle groups to fully soften and stretch, thereby reducing muscle stiffness and soreness, accelerating metabolism, eliminating stagnation and fluid accumulation, conditioning tissues and re-tightening skin tissues, reshaping your body.",
    sclg: "Stimulates collagen production",
    sclg_p: "It can also stimulate fibroblasts, increase the production of collagen and elastin, increase blood flow and increase oxygen. As a result, wrinkles are smoothed, puffiness and bags under the eyes are reduced, and the skin is rejuvenated and tightened.",
    tmsb: "Tone muscles and sculpt the body",
    tmsb_p: "Technology has been clinically proven to help tone muscles and sculpt the body and face to rejuvenate. It can also help redesign and tighten the chest.",
    wtb: "When<br /> applied to the body",
    wtb_p: "<li> Improve lymphatic drainage and circulation </li> <li>Deep detoxification</li> <li> Relieve muscle stiffness and soreness, </li> <li> Decompose subcutaneous fat deposits </li> <li>Eliminate cellulite</li> <li> Reduce cellulite and shape contours </li> <li> After a few procedures, your body will immediately reduce its volume by 1-2 sizes </li>",
    rclt: "Reduces cellulite",
    swk: "Smooth wrinkles",
    waf: "When<br /> applied to the face",
    waf_i: "<li> Improve the formation of blood vessels </li> <li> Improve production of collagen and elastin </li> <li> Increasing oxygen delivery </li> <li> Relax and regulate muscles </li> <li> Reduce expression wrinkles appears </li> <li>Reduces swelling</li> <li>Fights tissue sagging</li>",
    grt: "Give remarkable results",
    grt_p: "Our compressive Micro vibration method works gently on the tissue to tone and firm.",
    nsr: "Non-surgical treatment of fat eposits",
    nsr_p: "Our treatment can adapt to fight fatty deposits on any of these areas(arms, back, waist, abdomen, thighs, and buttocks). Leaving your body smooth, shapely, and sculpted from top to bottom.",
    fsk: "Five synergistic actions, works with precision on cellulite",
    fsk_p: "Reduces the infamous orange peel effect by improving circulation and soothing the tissues of the problem areas.",
    fae: "Fast and effective",
    fae_p: "Compressive Micro vibration Therapy, thanks to reactivates the circulation and stimulates the lymphatic system.",
    imv: "Innovative compressive Micro vibraion therapy",
    imv_p: "The latest full body treatment on the market that allows you to target the key areas of your body that cause you to cover up! Our treatments are effective on the whole body, and tackle everything from cellulite to sculpting.",
    fct: "For face treatment",
    edc: "Eliminates double chin",
    vbf: "VA Endoactiv is equipped with two tips for the body and face",
    slcb: "Silicone balls",
    slc_i: "for lifting",
    slc_ii: "Honeycomb sphere<br /> arrangement",
    slc_iii: "Clockwise rotation",
    rcw: "Rotate counterclockwise",
    glr: "Gallery",





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
    mt: "VA Endoactiv отличный уход за телом",
     mt_p: "<strong>Терапия VA Endoactiv признана отличным средством для ухода за телом благодаря революционному методу компрессионной микровибрации + инфракрасная технология</strong>, которая способна устранить недостатки тела и лица (борьба с целлюлитом, ремоделирование жировых отложений и коррекция недостатков лица)",
     cmp: "Сжатие с микровибрацией",
     cmp_p: "<strong>VA Endoactiv, технология, использующая инновационную компрессионную микровибрационную систему</strong>, представляет собой процедуру, которая с помощью ролика, состоящего из 50 силиконовых шариков, генерирует низкочастотные механические вибрации, воздействующие на основные причины целлюлита: застой лимфы, накопление жидкости, накопление жировых клеток.Лечение проводится по специальному протоколу, разработанному Научным комитетом, и может проводиться на всем теле, от ступней до шеи, ото лба до живота, ягодицы и руки.",
     dpt: "Устройство идеально подходит для людей<br />, которые заботятся о себе",
     ftc: "Для тех, кто следит за собой",
     ftc_p: "Уменьшение целлюлита и жировой ткани, эффект подтяжки кожи, уменьшение апельсиновой корки, устранение дряблости кожи",
     fth: "Для спортсменов",
     fth_p: "Устранение мышечных спазмов и болей. Уменьшение мышечных болей при интенсивных тренировках спортсменов.",
     wks: "Разглаживание морщин",
     wks_p: "Омоложение кожи лица и тела, борьба с симптомами признаков старения кожи лица, зоны декольте и шеи, повышение тонуса кожи",
     rxn: "Расслабление",
     rxn_p: "Устранение венозного и лимфатического застоя нижних или верхних конечностей после рабочего дня, релаксация, устранение чувства тяжести в мышцах и конечностях.",
     smc: "Разглаживание шрамов",
     smc_p: "Улучшает кровоснабжение тканей и способствует питанию кожи. Устранение депрессии и выравнивание цвета",
     pgr: "Проверено, отличные результаты",
     pgr_p: "<strong>Университеты и медицинские институты показали отличные и надежные результаты:</strong> подтягивает и тонизирует мышцы и ткани, борется и разглаживает целлюлит, разглаживает кожу и уменьшает апельсиновую корку, улучшает лимфатическую и венозную циркуляцию, выполняет важные механические лимфодренаж всего тела, уменьшает окружность талии и бедер, оказывает потрясающее омолаживающее действие на лицо и шею.",
     htw: "Как это работает?",
     htw_p: "<strong>Машина с внутренним шариковым роликом представляет собой неинвазивную механическую компрессионную микровибрацию + инфракрасную обработку. Принцип заключается в создании компрессионной микровибрации путем прокатки силиконового шарика по вращению ролика на 360°.</ сильное > Поскольку мяч вращается и оказывает давление на кожу, он производит эффект «пульсационного сжатия», который реализует возвратно-поступательное движение непрерывного толкания, вытягивания и разминания, и ткань испытывает некоторое давление. или повредить кожу, его принцип заключается в том, чтобы выпускать инфракрасные лучи, в то время как к тканям прикладывается давление, чтобы растянуть клетки, чтобы естественным образом и глубоко стимулировать клеточную активность, кровоток и насыщение кислородом, а жировые отложения подвергаются давлению и, таким образом, ослабляются для окончательного разложения. ",
     bml: "Моделирование тела",
     bml_i: "Вибрация шариков создает эффект 'тяни-толкай', который трансформирует ткань. Форма и упругость тела улучшаются уже после нескольких процедур, при этом уменьшается видимый на коже неприглядный эффект апельсиновой корки.",
     mscf: "Укрепление мышц",
     mscf_p: "Технология компрессионной микровибрации укрепляет мышцы, активно сопротивляясь сжатию. Эти вибрации стимулируют мышцы и улучшают тонус в обрабатываемых областях.",
     lpd: "Лимфодренаж",
     lpd_p: "Компрессионные микровибрации используют вращательное движение шариков и направление движения цилиндра по коже, чтобы активировать правильное функционирование лимфатической системы. Это помогает удалить лишнюю жидкость из тканей, скопившуюся из-за плохой циркуляции.",
     vce: "Сосудистый эффект",
     vce_p: "Расположение шариков в виде сот стимулирует систему кровообращения, улучшая кровоток в тканях. Такая 'тренировка сосудистой ткани' улучшает микроциркуляцию.",
     anef: "Обезболивающий эффект",
     anef_p: "Компрессионные микровибрации воздействуют на механорецепторы, уменьшая боль и воспаление тканей. Они улучшают оксигенацию тканей и уменьшают болезненный отек",
     rrcl: "Уменьшает и устраняет целлюлит",
     rrcl_p: "Давление на глубокие группы мышц для полного размягчения и растяжения, тем самым уменьшая жесткость и болезненность мышц, ускоряя обмен веществ, устраняя застой и скопление жидкости, кондиционируя ткани и подтягивая ткани кожи, изменяя форму вашего тела.",
     sclg: "Стимулирует выработку коллагена",
     sclg_p: "Он также может стимулировать фибробласты, повышать выработку коллагена и эластина, усиливать кровоток и повышать содержание кислорода.разглаживаются, уменьшаются отечность и мешки под глазами, а кожа омолаживается и подтягивается.",
     tmsb: "Тонизируйте мышцы и лепите тело",
     tmsb_p: "Клинически доказано, что технология помогает тонизировать мышцы и моделировать тело и лицо для омоложения. Она также может помочь изменить форму и подтянуть грудь.",
     wtb: "При<br /> нанесении на тело",
     wtb_p: "<li> Улучшает лимфодренаж и кровообращение </li> <li>Глубокая детоксикация</li> <li> Снимает скованность и болезненность мышц, </li> <li> Разлагает подкожные жировые отложения </li> <li >Устранение целлюлита</li> <li>Уменьшение целлюлита и формирование контуров</li> <li>Через несколько процедур ваше тело сразу уменьшится в объеме на 1-2 размера</li>",
     rclt: "Уменьшает целлюлит",
     swk: "Разгладить морщины",
     waf: "При<br /> нанесении на лицо",
     waf_i: "<li> Улучшает формирование кровеносных сосудов </li> <li> Улучшает выработку коллагена и эластина </li> <li> Увеличивает доставку кислорода </li> <li> Расслабляет и регулирует мышцы </li> <li> Уменьшает появление мимических морщин </li> <li>Уменьшает отек</li> <li>Борется с провисанием тканей</li>",
     grt: "Дать замечательные результаты",
     grt_p: "Наш метод компрессионной микровибрации мягко воздействует на ткани, придавая им тонус и упругость.",
     nsr: "Безоперационное лечение жировых отложений",
     nsr_p: "Наша процедура может адаптироваться для борьбы с жировыми отложениями в любой из этих областей (руки, спина, талия, живот, бедра и ягодицы). Ваше тело становится гладким, стройным и скульптурным сверху донизу.",
     fsk: "Пять синергетических действий, точно воздействующих на целлюлит",
     fsk_p: "Уменьшает печально известный эффект апельсиновой корки, улучшая кровообращение и успокаивая ткани проблемных зон.",
     fae: "Быстро и эффективно",
     fae_p: "Компрессионная микровибрационная терапия, благодаря которой реактивируется кровообращение и стимулируется лимфатическая система.",
     imv: "Инновационная компрессионная микровибротерапия",
     imv_p: "Новейшая на рынке процедура для всего тела, которая позволяет воздействовать на ключевые области тела, которые заставляют вас маскироваться! Наши процедуры эффективны для всего тела и решают все, от целлюлита до скульптурирования.",
     fct: "Для ухода за лицом",
     edc: "Устраняет второй подбородок",
     vbf: "VA Endoactiv оснащен двумя насадками для тела и лица",
     slcb: "Силиконовые шарики",
     slc_i: "для подъема",
     slc_ii: "Сотовая сфера<br /> расположение",
     slc_iii: "Вращение по часовой стрелке",
     rcw: "Вращать против часовой стрелки",
     glr: "Галерея",
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
    mt: "VA Endoactiv εξαιρετική περιποίηση σώματος",
     mt_p: "<strong>Η θεραπεία VA Endoactiv αναγνωρίζεται ως μια εξαιρετική θεραπεία σώματος χάρη σε μια επαναστατική μέθοδο συμπίεσης μικρο-δονήσεων + τεχνολογία υπερύθρων</strong> που είναι σε θέση να εξαλείψει τις ατέλειες του σώματος και του προσώπου (καταπολέμηση της κυτταρίτιδας, αναδόμηση των λιπών και διόρθωση των ατελειών του προσώπου).",
     cmp: "Συμπίεση με μικροδόνηση",
     cmp_p: "<strong>VA Endoactiv, μια τεχνολογία που χρησιμοποιεί ένα καινοτόμο σύστημα μικροδονήσεων συμπίεσης</strong>, είναι μια διαδικασία που, με τη βοήθεια ενός κυλίνδρου που αποτελείται από 50 μπάλες σιλικόνης, δημιουργεί μηχανικούς κραδασμούς χαμηλής συχνότητας που δρουν στο κύριες αιτίες κυτταρίτιδας: λεμφική στασιμότητα, συσσώρευση υγρών, συσσώρευση λιποκυττάρων Η θεραπεία ακολουθεί ειδικό πρωτόκολλο που αναπτύχθηκε από την Επιστημονική Επιτροπή και μπορεί να πραγματοποιηθεί σε ολόκληρο το σώμα, από τα πόδια μέχρι τον λαιμό, από το μέτωπο έως την κοιλιά, γλουτούς και μπράτσα",
     dpt: "Η συσκευή είναι ιδανική για άτομα<br /> που φροντίζουν τον εαυτό τους",
     ftc: "Για αυτούς που φροντίζουν τον εαυτό τους",
     ftc_p: "Μείωση της κυτταρίτιδας και του λιπώδους ιστού, η επίδραση της σύσφιξης του δέρματος, η μείωση του φλοιού πορτοκαλιού, η εξάλειψη της χαλαρότητας του δέρματος",
     fth: "Για αθλητές",
     fth_p: "Εξάλειψη μυϊκών κράμπων και πόνου. Μείωση μυϊκού πόνου κατά την εντατική προπόνηση αθλητών.",
     wks: "Λείανση ρυτίδων",
     wks_p: "Αναζωογόνηση του δέρματος του προσώπου και του σώματος, καταπολέμηση των συμπτωμάτων σημαδιών γήρανσης του δέρματος του προσώπου, του ντεκολτέ και του λαιμού, αύξηση της έντασης του δέρματος",
     rxn: "Χαλάρωση",
     rxn_p: "Εξάλειψη φλεβικής και λεμφικής στάσης των κάτω ή άνω άκρων μετά από μια εργάσιμη ημέρα, χαλάρωση, εξάλειψη της αίσθησης βάρους στους μύες και τα άκρα.",
     smc: "Λείανση ουλών",
     smc_p: "Βελτιώνει την παροχή αίματος στον ιστό και διευκολύνει τη θρέψη του δέρματος. Εξάλειψη της κατάθλιψης και εξομάλυνση του χρώματος",
     pgr: "Αποδεδειγμένα, εξαιρετικά αποτελέσματα",
     pgr_p: "<strong >Πανεπιστήμια και ιατρικά ιδρύματα έχουν δείξει εξαιρετικά και αξιόπιστα αποτελέσματα:</strong> συσφίγγει και τονώνει τους μύες και τους ιστούς, καταπολεμά και λειαίνει την κυτταρίτιδα, λειαίνει το δέρμα και μειώνει τη φλούδα πορτοκαλιού, βελτιώνει τη λεμφική και φλεβική κυκλοφορία, εκτελεί σημαντικές μηχανικές λεμφική παροχέτευση ολόκληρου του σώματος, μειώνει την περιφέρεια μέσης και ισχίου, έχει εκπληκτική αντιγηραντική δράση στο πρόσωπο και το λαιμό.",
     htw: "Πώς λειτουργεί;",
     htw_p: "<strong >Το μηχάνημα εσωτερικού κυλίνδρου με μπίλια είναι μια μη επεμβατική επεξεργασία μηχανικής συμπίεσης με μικροδόνηση + υπέρυθρη ακτινοβολία. Η αρχή είναι να δημιουργείται μικροδόνηση συμπίεσης κυλίοντας τη σφαίρα σιλικόνης κατά μήκος της περιστροφής 360° του κυλίνδρου.</ ισχυρή > Καθώς η μπάλα περιστρέφεται και ασκεί πίεση στο δέρμα, παράγει ένα φαινόμενο «συμπίεσης παλμών», το οποίο πραγματοποιεί την παλινδρομική κίνηση συνεχούς ώθησης, τραβήγματος και ζυμώματος και ο ιστός θα υποστεί κάποια πίεση. Και η ανυψωτική δράση δεν θα συμπιέσει ή να βλάψει το δέρμα, η αρχή του είναι να απελευθερώνει υπέρυθρες ακτίνες ενώ ασκείται πίεση στους ιστούς για να τεντώσει τα κύτταρα για να διεγείρει φυσικά και βαθιά τη δραστηριότητα των κυττάρων, τη ροή του αίματος και την οξυγόνωση, και οι εναποθέσεις λίπους συμπιέζονται και έτσι χαλαρώνουν για τελική αποσύνθεση",
     bml: "Μοντελοποίηση σώματος",
     bml_i: "Η δόνηση των μπάλων δημιουργεί μια δράση ώθησης-έλξης που μεταμορφώνει τον ιστό. Το σχήμα και η σφριγηλότητα του σώματος βελτιώνονται μετά από λίγες μόνο θεραπείες, ενώ μειώνεται η αντιαισθητική επίδραση φλοιού πορτοκαλιού που είναι ορατή στο δέρμα.",
     mscf: "Μυϊκή σύσφιξη",
     mscf_p: "Η τεχνολογία μικροδονήσεων συμπίεσης συσφίγγει τους μύες αντιστέκοντας ενεργά στη συμπίεση. Αυτές οι δονήσεις διεγείρουν τους μύες και βελτιώνουν τον τόνο στις περιοχές που έχουν υποστεί θεραπεία.",
     lpd: "Lymhatic drainage",
     lpd_p: "Οι μικροδονήσεις συμπίεσης χρησιμοποιούν την περιστροφική κίνηση των σφαιρών και την κατεύθυνση της κίνησης του κυλίνδρου πάνω από το δέρμα για να ενεργοποιήσουν τη σωστή λειτουργία του λεμφικού συστήματος. Αυτό βοηθά στην απομάκρυνση της περίσσειας υγρού από τον ιστό που έχει συσσωρευτεί λόγω κακής κυκλοφορίας.",
     vce: "αγγειακό αποτέλεσμα",
     vce_p: "Η διάταξη των μπάλες σε σχήμα κυψέλης διεγείρει το κυκλοφορικό σύστημα, βελτιώνοντας τη ροή του αίματος στους ιστούς. Αυτή η 'εκπαίδευση αγγειακού ιστού' βελτιώνει τη μικροκυκλοφορία.",
     anef: "Αναλγητικό αποτέλεσμα",
     anef_p: "Οι μικροδονήσεις συμπίεσης δρουν στους μηχανοϋποδοχείς για να μειώσουν τον πόνο και τη φλεγμονή των ιστών. Βελτιώνουν την οξυγόνωση των ιστών και μειώνουν το επώδυνο πρήξιμο",
     rrcl: "Μειώνει και αφαιρεί την κυτταρίτιδα",
     rrcl_p: "Πίεσε τις βαθιές μυϊκές ομάδες για να μαλακώσουν και να τεντωθούν πλήρως, μειώνοντας έτσι τη μυϊκή δυσκαμψία και τον πόνο, επιταχύνοντας τον μεταβολισμό, εξαλείφοντας τη στασιμότητα και τη συσσώρευση υγρών, ρυθμίζοντας τους ιστούς και συσφίγγοντας εκ νέου τους ιστούς του δέρματος, αναδιαμορφώνοντας το σώμα σου.",
     sclg: "Διεγείρει την παραγωγή κολλαγόνου",
     sclg_p: "Μπορεί επίσης να διεγείρει τους ινοβλάστες, να αυξήσει την παραγωγή κολλαγόνου και ελαστίνης, να αυξήσει τη ροή του αίματος και να αυξήσει το οξυγόνο. Ως αποτέλεσμα, οι ρυτίδεςλειαίνεται ξανά, το πρήξιμο και οι σακούλες κάτω από τα μάτια μειώνονται και το δέρμα αναζωογονείται και συσφίγγεται.",
     tmsb: "Τονώστε τους μυς και σμιλέψτε το σώμα",
     tmsb_p: "Η τεχνολογία έχει αποδειχθεί κλινικά ότι βοηθά στον τόνωση των μυών και στη διαμόρφωση του σώματος και του προσώπου για αναζωογόνηση. Μπορεί επίσης να βοηθήσει στον επανασχεδιασμό και τη σύσφιξη του στήθους.",
     wtb: "Όταν<br /> εφαρμόζεται στο σώμα",
     wtb_p: "<li> Βελτίωση της λεμφικής παροχέτευσης και της κυκλοφορίας </li> <li>Βαθιά αποτοξίνωση</li> <li> Ανακουφίζει από τη μυϊκή δυσκαμψία και τον πόνο, </li> <li> Αποσύνθεση υποδόριου λίπους </li> <li >Εξάλειψη της κυτταρίτιδας</li> <li> Μειώστε την κυτταρίτιδα και διαμορφώστε τα περιγράμματα </li> <li> Μετά από μερικές διαδικασίες, το σώμα σας θα μειώσει αμέσως τον όγκο του κατά 1-2 μεγέθη </li>",
     rclt: "Μειώνει την κυτταρίτιδα",
     swk: "Λειές ρυτίδες",
     waf: "Όταν<br /> εφαρμόζεται στο πρόσωπο",
     waf_i: "<li> Βελτίωση του σχηματισμού αιμοφόρων αγγείων </li> <li> Βελτίωση παραγωγής κολλαγόνου και ελαστίνης </li> <li> Αύξηση παροχής οξυγόνου </li> <li> Χαλαρώστε και ρυθμίστε τους μύες </li> <li> Μείωση των ρυτίδων έκφρασης που εμφανίζονται </li> <li>Μειώνει το πρήξιμο</li> <li>Καταπολεμά τη χαλάρωση των ιστών</li>",
     grt: "Δώστε αξιόλογα αποτελέσματα",
     grt_p: "Η μέθοδος συμπιεστικής μικροδόνησης λειτουργεί απαλά στον ιστό για να τονώνει και να σφίγγει.",
     nsr: "Μη χειρουργική αντιμετώπιση των επιθέσεων λίπους",
     nsr_p: "Η θεραπεία μας μπορεί να προσαρμοστεί για να καταπολεμήσει τις λιπώδεις εναποθέσεις σε οποιαδήποτε από αυτές τις περιοχές (χέρια, πλάτη, μέση, κοιλιά, μηροί και γλουτοί). Αφήνοντας το σώμα σας λείο, καλλίγραμμο και σμιλεμένο από πάνω προς τα κάτω.",
     fsk: "Πέντε συνεργιστικές δράσεις, λειτουργεί με ακρίβεια στην κυτταρίτιδα",
     fsk_p: "Μειώνει το περιβόητο αποτέλεσμα φλοιού πορτοκαλιού βελτιώνοντας την κυκλοφορία και καταπραΰνοντας τους ιστούς των προβληματικών περιοχών.",
     fae: "Γρήγορη και αποτελεσματική",
     fae_p: "Συμπιεστική μικροθεραπεία κραδασμών, χάρη στην επανενεργοποίηση της κυκλοφορίας και τονώνει το λεμφικό σύστημα.",
     imv: "Καινοτόμος συμπιεστική θεραπεία με μικροδόνηση",
     imv_p: "Η τελευταία θεραπεία για ολόκληρο το σώμα στην αγορά που σας επιτρέπει να στοχεύσετε τις βασικές περιοχές του σώματός σας που σας κάνουν να καλύπτεστε! Οι θεραπείες μας είναι αποτελεσματικές σε ολόκληρο το σώμα και αντιμετωπίζουν τα πάντα, από την κυτταρίτιδα μέχρι τη γλυπτική.",
     fct: "Για περιποίηση προσώπου",
     edc: "Εξαλείφει το διπλό πηγούνι",
     vbf: "Το VA Endoactiv είναι εξοπλισμένο με δύο άκρες για το σώμα και το πρόσωπο",
     slcb: "μπάλες σιλικόνης",
     slc_i: "για ανύψωση",
     slc_ii: "Honeycomb sphere<br /> διάταξη",
     slc_iii: "Περιστροφή δεξιόστροφα",
     rcw: "Περιστροφή αριστερόστροφα",
     glr: "Gallery",
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
  