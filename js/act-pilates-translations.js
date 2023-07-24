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
    mt_p: "Unique pilates, capsule for hot yoga exercise",
    mt_i: "This is a hot pilates capsule blends the elements of traditional mat pilates and our much more contemporary hot pilates. The Activshape Pilates capsule offers a method of exercise and physical movement designed to stretch, strengthen, and sculpt the body as well as challenge and strengthen the cardiovascular and lymphatic systems.",
    mt_ii: "Pilates capsule is heated inside to the body temperature of 36,6oC/100oF which enhance body shape and rehabilitation benefits.",
    rps: "Resistance<br />ropes",
    rps_i: "<strong >You could find resistance ropes inside Activshape Pilates hot capsule. Each rope has resistance of 1.5 kg for the wrists and ankles.</strong > Using a ropes as dumbbells you will move through a series of poses. This new style of yoga will help you build strength, flexibility and balance, plus it’s a great way to firm up and tighten your body and enhance your body shape.",
    rpp: "Ropes resistance<br />",
    rpp_i: "1,5<sup>kg</sup>",
    enb: "Energie mind and body",
    enb_i: "<strong >You could get yoga class in hot capsule will challenge and energize mind and body.</strong > Also elevate a heart rate, tone of muscles and strengthen your core. Set to energizing pilates music in a heated capsule, this hot yoga class incorporates the hottest moves for a truly unique and exciting pilates or yoga workout. The capsule <strong >temperature is set around 100°F or 36.6°C</strong > degrees with special humidity. Informative touch screen display show positions for pilates exercises. A bottom pilates table goes out before workout for convenient position to come inside pilates machine.",
    dsp: "Display size<br />",
    dsp_i: "10,1<sup>inch</sup>",
    tmp: "Temperature",
    tmp_i: "36.6<sup>°C</sup>",
    ird: "Infrared IR<br /> radiation",
    ird_i: "1400<sup>nm</sup>",
    plm: "Pull-out mat",
    plm_i: "yes",
    fir: "Infrared IR",
    fir_i: " The infrared heaters used in the device generate the full spectrum of IR-A, IR-B and IR-C radiation. It reaches the muscles and warms them up, thus generating a greater demand for energy, which is derived from fat burning. In addition, infrared accelerates the treatment of injuries and rheumatism and the removal of toxins from the body, relieves stress, improves well-being, and improves the condition and aesthetics of the skin.",
    rdt: "Radiator<br /> power",
    rdt_i: "350<sup>W</sup>",
    rdi: "Radiator<br /> range",
    mdn: "Modern pilates",
    mdn_i: "<strong >Be ready to sweat, move, burn calories and improve muscle tonus!</strong >",
    mdn_ii: "This is a very unique and innovative pilates equipment on current world market which brings amazing rehabilitation, weight loss, and improve body shape benefits. Our manufacturing team created unique and modern designed pilates equipment with convinient entrance<br /> to capsule. The bottom table could drive ahead. For create this hot yoga capsule we used only luxury materials made in European union.",
    vgh: "Virtual guide through 40 static hot yoga poses",
    vgh_i: "<strong >More than 40 positions for exercise inside heated pilates capsule. This static hot yoga poses are showing on color display with an energizing and challenging flow.</strong > Workout in infrared heated pilates capsule is more meditative, restorative and effective than traditional yoga or pilates. Taught in a pilates heated to 36.6oC/100oF degrees with special humidity, this hot yoga class offers all the benefits of held postures while adding a modified vinyasa flow to increase the heart rate and build internal heat. Practitioners of all levels are welcome to our unique pilates capsule for hot yoga workout!",
    hsy: "Heating system",
    hsy_i: "<strong >The capsule is equipped with a system that maintains a constant temperature inside the cabin at 36.6°C.</strong > When the body is heated, more blood vessels dilate, which promotes blood flow. Increased blood flow can aid in pain relief. Toxins can be flushed out of injured areas of the body allowing for better range of movement. It’s especially beneficial for lower back pain, muscle aches and pains.",
    hsy_ii: "Hot pilates warms your muscles up from the get go, it increases your flexibility and also reduces the risk of injury as the muscle is already well warmed up.",
    clr: "Color therapy",
    clr_i: "<strong >Based on the use of properly selected colors that affect the functioning of the body.</strong > A specific color of light stimulates the brain to specific hormonal reactions, and the hormones produced in the glands are transmitted through the bloodstream to internal organs, activating them and regulating their work. Chromotherapy increases immunity, gives additional energy, restores the body’s balance, calms down and increases the overall level of satisfaction.",
    plm_t: "Retractable mat makes it easier for the patient to get inside the capsule and to take a convenient position to start hot pilates exercises.",
    mdn_s: "Modern solution for <br /> yoga studio",
    mdn_si: "<strong >This hot pilates class is designed to detoxify, recharge and restore the body, mind and soul. Activshape Pilates capsule is a best solution as an innovative equipment for any hot yoga studio or hot pilates center.</strong > Activshape Pilates hot capsule is designed to balance the active and passive energies of the body. This will facilitate in opening the physical body in a more-more dynamic and energetic way.",
    mdn_sii: "Using our unique equpment for pilates or hot yoga you could create a class is designed to burn fat tissue and blast calories as well as provide a rehabilitation benefits during a pilates class. It’s a total body workout that is carried out barefoot on a mat. With InfraRed Pilates hot capsule you could provide a fun, high- energy classes that consists of a warm up, high intensity cardio with tabadas and hand weights are incorporated to strength and tighten muscles, followed by some abs and a light cool down.",
    spc: "Specifications",
    spf_s: "Size",
    spf_h: "<div>Height</div> <div>185 cm (72,83 inches)</div>",
    spf_w: "<div>Width</div> <div>150 cm (59,06 inches)</div>",
    spf_l: "<div>Length</div> <div>264 cm (103,94 inches)</div>",
    spf_t: "<div>Temperature inside</div> <div>36,6°C</div>",
    spf_r: "<div>Ropes resistance</div> <div>1,5 kg</div>",
    spf_d: "<div>Display size</div> <div>10,1-inch</div>",
    spf_i: "<div>Infrared IR radiation</div> <div>450nm</div>",
    spf_p: "<div>Infrared power</div> <div>350W</div>",
    spf_c: "<div>Color therapy</div> <div>yes</div>",
    spf_m: "<div>Pull-out mat</div> <div>yes</div>",



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
    mt_p: "Уникальная капсула для пилатеса и горячей йоги",
mt_i: "Эта горячая капсула для пилатеса сочетает элементы традиционного пилатеса на коврике и современного горячего пилатеса. Капсула Activshape Pilates предлагает метод упражнений и физического движения, разработанных для растяжки, укрепления и формирования тела, а также для вызова и укрепления сердечно-сосудистой и лимфатической систем.",
mt_ii: "Капсула для пилатеса подогревается до температуры тела 36,6°C / 100°F, что усиливает эффекты формирования тела и реабилитации.",
rps: "Сопротивление<br />веревкам",
rps_i: "<strong>Внутри капсулы Activshape Pilates вы найдете веревки сопротивления. Каждая веревка имеет сопротивление 1,5 кг для запястьев и голеней.</strong> Используя веревки как гантели, вы будете выполнять серию поз. Этот новый стиль йоги поможет вам развить силу, гибкость и равновесие, а также приведет в тонус и укрепит ваше тело, улучшит его форму.",
rpp: "Сопротивление веревкам<br />",
rpp_i: "1,5 кг",
enb: "Energie mind and body",
enb_i: "<strong>В капсуле для горячей йоги вы можете посетить занятие йогой, которое вызовет движение и энергию у вашего разума и тела.</strong> Также повысится частота сердечных сокращений, укрепятся мышцы и корсет. На фоне энергичной музыки пилатеса в нагретой капсуле, это занятие горячей йогой сочетает самые актуальные движения для по-настоящему уникальных и захватывающих занятий пилатесом или йогой. Температура капсулы установлена около 36,6°C или 100°F с определенной влажностью. Информативный дисплей сенсорного экрана показывает позиции для пилатес упражнений. Нижний стол пилатес выезжает перед тренировкой для удобного положения при входе в пилатес-машину.",
dsp: "Размер дисплея<br />",
dsp_i: "10,1 дюйм",
tmp: "Температура",
tmp_i: "36,6°C",
ird: "Инфракрасное излучение IR<br />",
ird_i: "1400 нм",
plm: "Выдвижной коврик",
plm_i: "да",
fir: "Инфракрасное излучение IR",
fir_i: "Инфракрасные обогреватели, используемые в устройстве, генерируют полный спектр излучения IR-A, IR-B и IR-C. Оно проникает в мышцы и разогревает их, что вызывает больший спрос на энергию, получаемую из сжигания жира. Кроме того, инфракрасное излучение ускоряет лечение травм и ревматизма, выводит токсины из организма, снимает стресс, улучшает благополучие и состояние кожи.",
rdt: "Мощность радиатора<br />",
rdt_i: "350 Вт",
rdi: "Диапазон радиатора<br />",
mdn: "Современный пилатес",
mdn_i: "<strong>Будьте готовы попотеть, двигаться, сжигать калории и улучшать тонус мышц!</strong>",
mdn_ii: "Это очень уникальное и инновационное оборудование для пилатеса на текущем мировом рынке, которое приносит удивительные результаты в реабилитации, похудении и улучшении формы тела. Наша команда разработчиков создала уникальное и современное оборудование для пилатеса с удобным входом в капсулу. Нижний стол может выезжать. Для создания этой капсулы для горячей йоги мы использовали только роскошные материалы, произведенные в Европейском союзе.",
vgh: "Виртуальное руководство по 40 статичным позам горячей йоги",
vgh_i: "<strong>Более 40 поз для упражнений в нагретой капсуле для пилатеса. Эти статичные позы горячей йоги показываются на цветном дисплее с энергичным и сложным потоком движений.</strong> Тренировка в инфракрасно нагретой капсуле для пилатеса более медитативная, восстанавливающая и эффективная, чем традиционная йога или пилатес. Преподаватели всех уровней приветствуются на нашей уникальной капсуле для пилатеса для занятий горячей йогой!",
hsy: "Система обогрева",
hsy_i: "<strong>Капсула оборудована системой, поддерживающей постоянную температуру внутри кабины на уровне 36,6°C.</strong> При нагреве тела расширяются кровеносные сосуды, что способствует кровообращению. Увеличенный кровоток может способствовать облегчению боли. Токсины могут выводиться из поврежденных участков тела, что позволяет улучшить подвижность. Это особенно полезно при болях в пояснице, мышечных болях и болях. Участвуйте в горячем пилатесе, чтобы разогреть ваши мышцы, повысить гибкость и снизить риск травмы, так как мышцы уже будут хорошо разогреты.",
hsy_ii: "Горячий пилатес разогревает ваши мышцы с самого начала, повышает гибкость и снижает риск травмы, так как мышцы уже будут хорошо разогреты.",
clr: "Цветотерапия",
clr_i: "<strong>Основана на использовании правильно подобранных цветов, которые влияют на функционирование тела.</strong> Определенный цвет света стимулирует мозг на определенные гормональные реакции, и гормоны, вырабатываемые в железах, передаются через кровоток во внутренние органы, активируя и регулируя их работу. Цветотерапия повышает иммунитет, дает дополнительную энергию, восстанавливает баланс организма, успокаивает и повышает общий уровень удовлетворения.",
plm_t: "Выдвижное матрацев облегчает пациентам вход в капсулу и занятие удобной позиции для начала упражнений горячего пилатеса.",
mdn_s: "Современное решение для<br /> йога-студии",
mdn_si: "<strong>Этот урок горячего пилатеса разработан для детоксикации, перезарядки и восстановления тела, разума и души. Капсула Activshape Pilates - это лучшее решение в качестве инновационного оборудования для любой йога-студии или центра горячего пилатеса.</strong> Капсула Activshape Pilates предназначена для балансировки активных и пассивных энергий тела. Это облегчит открытие физического тела более динамичным и энергичным способом.",
mdn_sii: "Используя наше уникальное оборудование для пилатеса или горячей йоги, вы можете создать занятия, направленные на сжигание жировой ткани и сжигание калорий, а также предоставить реабилитационные преимущества во время занятий пилатесом. Это полноценная тренировка всего тела, выполняемая без обуви на мате. С помощью инфракрасной капсулы для пилатеса вы можете предоставить веселые и энергичные занятия, включающие разминку, высокоинтенсивную кардиотренировку с табатами, а также упражнения со штангами для укрепления и напряжения мышц, а также некоторые упражнения на пресс и легкую растяжку.",
spc: "Технические характеристики",
spf_s: "Размер",
spf_h: "<div>Высота</div> <div>185 см (72,83 дюйма)</div>",
spf_w: "<div>Ширина</div> <div>150 см (59,06 дюйма)</div>",
spf_l: "<div>Длина</div> <div>264 см (103,94 дюйма)</div>",
spf_t: "<div>Температура внутри</div> <div>36,6°C</div>",
spf_r: "<div>Сопротивление веревок</div> <div>1,5 кг</div>",
spf_d: "<div>Размер дисплея</div> <div>10,1 дюйма</div>",
spf_i: "<div>Инфракрасное ИК излучение</div> <div>450 нм</div>",
spf_p: "<div>Инфракрасная мощность</div> <div>350 Вт</div>",
spf_c: "<div>Цветотерапия</div> <div>да</div>",
spf_m: "<div>Выдвижной матрац</div> <div>да</div>",


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
    mt_p: "Μοναδική κάψουλα πιλάτες και άσκησης γιόγκα σε θερμοκρασία",
mt_i: "Αυτή είναι μια κάψουλα ζεστού πιλάτες που συνδυάζει τα στοιχεία του παραδοσιακού πιλάτες στο χαλί και του πιο σύγχρονου ζεστού πιλάτες μας. Η κάψουλα Activshape Pilates προσφέρει μια μέθοδο άσκησης και φυσικής κίνησης που σχεδιάστηκε για να τεντώνει, να ενισχύει και να διαμορφώνει το σώμα, καθώς και να προκαλεί και να ενισχύει τα καρδιοαγγειακά και λεμφατικά συστήματα.",
mt_ii: "Η κάψουλα πιλάτες θερμαίνεται εσωτερικά στη θερμοκρασία του σώματος 36,6°C / 100°F, πράγμα που βελτιώνει τα οφέλη για τη διαμόρφωση του σώματος και την αποκατάσταση.",
rps: "Σχοινιά<br />αντίστασης",
rps_i: "<strong>Μέσα στην κάψουλα ζεστού πιλάτες Activshape θα βρείτε σχοινιά αντίστασης. Κάθε σχοινί έχει αντίσταση 1,5 κιλών για τους καρπούς και τους αστραγάλους.</strong> Χρησιμοποιώντας τα σχοινιά ως βαράκια, θα κινηθείτε μέσα από μια σειρά ασκήσεων. Αυτό το νέο στυλ γιόγκα θα σας βοηθήσει να χτίσετε δύναμη, ευελιξία και ισορροπία, καθώς και να σφίξετε και να διαμορφώσετε το σώμα σας.",
rpp: "Σχοινιά αντίστασης<br />",
rpp_i: "1,5 κιλά",
enb: "Energie mind and body",
enb_i: "<strong>Μπορείτε να παρακολουθήσετε μάθημα γιόγκα στη ζεστή κάψουλα που θα προκαλέσει και θα ενεργοποιήσει το μυαλό και το σώμα σας.</strong> Θα αυξηθεί επίσης η συχνότητα των καρδιακών συστολών, θα δυναμώσει ο κορσές σας. Με μουσική πιλάτες που δίνει ενέργεια στην κάψουλα, αυτό το μάθημα ζεστής γιόγκα συνδυάζει τις πιο δροσερές κινήσεις για μια πραγματικά μοναδική και συναρπαστική προπόνηση πιλάτες ή γιόγκα. Η θερμοκρασία της κάψουλας έχει ρυθμιστεί στους 36,6°C ή 100°F με ειδική υγρασία. Η ενημερωτική οθόνη αφής εμφανίζει τις θέσεις για ασκήσεις πιλάτες. Ένα κάτω πτυσσόμενο τραπέζι πιλάτες βγαίνει πριν από την προπόνηση για εύκολη είσοδο στη μηχανή πιλάτες.",
dsp: "Μέγεθος οθόνης<br />",
dsp_i: "10,1 ιντσών",
tmp: "Θερμοκρασία",
tmp_i: "36,6°C",
ird: "Υπέρυθρη IR<br /> ακτινοβολία",
ird_i: "1400 νμ",
plm: "Συρόμενο χαλί",
plm_i: "ναι",
fir: "Υπέρυθρη IR",
fir_i: "Οι υπέρυθροι θερμαντές που χρησιμοποιούνται στη συσκευή δημιουργούν το πλήρες φάσμα της υπέρυθρης ακτινοβολίας IR-A, IR-B και IR-C. Αυτό φτάνει στους μύες και τους ζεσταίνει, προκαλώντας έτσι μεγαλύτερη ζήτηση ενέργειας, η οποία προέρχεται από την καύση λίπους. Επιπλέον, η υπέρυθρη ακτινοβολία επιταχύνει την αντιμετώπιση τραυματισμών και ρευματισμών και την απομάκρυνση τοξινών από το σώμα, ανακουφίζει από το άγχος, βελτιώνει την ευεξία και την αισθητική του δέρματος.",
rdt: "Ισχύς θερμαντήρα<br />",
rdt_i: "350 W",
rdi: "Εύρος θερμαντήρα<br />",
mdn: "Σύγχρονο πιλάτες",
mdn_i: "<strong>Ετοιμαστείτε να ιδρώσετε, να κινηθείτε, να κάψετε θερμίδες και να βελτιώσετε τον τόνο των μυών σας!</strong>",
mdn_ii: "Αυτός είναι ένας πολύ μοναδικός και καινοτόμος εξοπλισμός πιλάτες στην τρέχουσα παγκόσμια αγορά που προσφέρει εκπληκτικά οφέλη στην αποκατάσταση, απώλεια βάρους και βελτίωση του σχήματος του σώματος. Η ομάδα μας κατασκεύασε μοναδικό και μοντέρνο σχεδιασμό εξοπλισμού πιλάτες με βολική είσοδο στην κάψουλα. Το κάτω τραπέζι μπορεί να μετακινηθεί προς τα εμπρός. Για να δημιουργήσουμε αυτήν την κάψουλα για τη ζεστή γιόγκα, χρησιμοποιήσαμε μόνο πολυτελή υλικά που παράγονται στην Ευρωπαϊκή Ένωση.",
    vgh: "Εικονικός οδηγός με 40 στατικές θέσεις ζεστής γιόγκα",
    vgh_i: "<strong>Πάνω από 40 θέσεις για άσκηση μέσα στη θερμαινόμενη κάψουλα πιλάτες. Αυτές οι στατικές θέσεις ζεστής γιόγκα εμφανίζονται σε μια έγχρωμη οθόνη με έναν δυναμικό και προκλητικό ρυθμό.</strong> Η προπόνηση στη θερμαινόμενη κάψουλα πιλάτες με υπέρυθρη θέρμανση είναι πιο μελαγχολική, αποκαταστατική και αποτελεσματική από την παραδοσιακή γιόγκα ή πιλάτες. Διδάσκεται σε πιλάτες με θέρμανση στους 36,6°C με ειδική υγρασία, αυτό το μάθημα ζεστής γιόγκα προσφέρει όλα τα οφέλη των κρατημένων στάσεων, προσθέτοντας μια τροποποιημένη ροή βινιάσα για να αυξήσει το ρυθμό καρδιακών παλμών και να δημιουργήσει εσωτερική θερμότητα. Οι ασκούμενοι όλων των επιπέδων είναι ευπρόσδεκτοι στη μοναδική κάψουλα πιλάτες μας για την ζεστή γιόγκα!",
    hsy: "Σύστημα θέρμανσης",
    hsy_i: "<strong>Η κάψουλα είναι εξοπλισμένη με σύστημα που διατηρεί σταθερή θερμοκρασία μέσα στην καμπίνα στους 36,6°C.</strong> Όταν το σώμα θερμαίνεται, διαστέλλονται περισσότεροι αιμοφόροι αγγείοι, προάγοντας την κυκλοφορία του αίματος. Η αυξημένη κυκλοφορία αίματος μπορεί να βοηθήσει στην ανακούφιση από τον πόνο. Οι τοξίνες μπορούν να εξαχθούν από περιοχές του τραυματισμένου σώματος, επιτρέποντας καλύτερη κινητικότητα. Είναι ιδιαί τερα ωφέλιμο για πόνο στη μέση, μυϊκούς πόνους και αλγίες.",
    hsy_ii: "Η ζεστή γιόγκα ζεσταίνει τους μύες σας από την αρχή, αυξάνει την ευελιξία σας και μειώνει τον κίνδυνο τραυματισμού, καθώς ο μυς είναι ήδη καλά ζεσταμένος.",
    clr: "Θεραπεία με χρώμα",
    clr_i: "<strong>Βασισμένη στη χρήση κατάλληλων επιλεγμένων χρωμάτων που επηρεάζουν τη λειτουργία του σώματος.</strong> Ένα συγκεκριμένο χρώμα φωτός διεγείρει τον εγκέφαλο να αντιδράσει με συγκεκριμένες ορμονικές αντιδράσεις και οι ορμόνες που παράγονται στους αδένες διαβιβάζονται μέσω της κυκλοφορίας του αίματος στα εσωτερικά όργανα, ενεργοποιώντας τα και ρυθμίζοντας τη λειτουργία τους. Η χρωμοθεραπεία αυξάνει την ανοσία, παρέχει πρόσθετη ενέργεια, αποκαθιστά την ισορροπία του σώματος, καταπραΰνει και αυξάνει τον συνολικό βαθμό ικανοποίησης.",
    plm_t: "Αναδιπλούμενο χαλί κάνει την είσοδο του ασθενούς πιο εύκολη στην κάψουλα και παρέχει μια βολική θέση για να ξεκινήσετε τις ασκήσεις πιλάτες ζεστής γιόγκα.",
    mdn_s: "Σύγχρονη λύση για το<br /> γυμναστήριο γιόγκα",
    mdn_si: "<strong>Αυτή η τάξη ζεστού πιλάτες σχεδιάστηκε για αποτοξίνωση, επαναφόρτιση και αποκατάσταση του σώματος, του μυαλού και της ψυχής. Η κάψουλα Pilates της Activshape αποτελεί την καλύτερη λύση ως καινοτόμος εξοπλισμός για οποιοδήποτε γυμναστήριο γιόγκα ή κέντρο ζεστού πιλάτες.</strong> Η κάψουλα Pilates της Activshape σχεδιάστηκε για να ισορροπεί τις ενεργές και παθητικές ενέργειες του σώματος. Αυτό θα διευκολύνει το άνοιγμα του φυσικού σώματος με πιο δυναμικό και ενεργητικό τρόπο.",
    mdn_sii: "Χρησιμοποιώντας τον μοναδικό μας εξοπλισμό για πιλάτες ή ζεστή γιόγκα, μπορείτε να δημιουργήσετε μια τάξη που σχεδιάστηκε για την καύση των λιπών και των θερμίδων καθώς και για την παροχή οφελών αποκατάστασης κατά τη διάρκεια μιας τάξης πιλάτες. Είναι μια ολοκληρωμένη προπόνη ση για ολόκληρο το σώμα που πραγματοποιείται ξυπόλητος πάνω σε ένα χαλί. Με την θερμαινόμενη κάψουλα Pilates με υπέρυθρη ακτινοβολία μπορείτε να προσφέρετε διασκεδαστικές, υψηλής ενέργειας τάξεις που περιλαμβάνουν ένα ζέσταμα, υψηλής έντασης καρδιοπροπόνηση με ταμπάτες και ενσωμάτωση βαρών στο χέρι για ενίσχυση και σφίξιμο των μυών, ακολουθούμενη από μερικές ασκήσεις κοιλιακών και ελαφρύ κατακόρυφο.",
    spc: "Προδιαγραφές",
    spf_s: "Μέγεθος",
    spf_h: "<div>Ύψος</div> <div>185 εκατοστά (72,83 ίντσες)</div>",
    spf_w: "<div>Πλάτος</div> <div>150 εκατοστά (59,06 ίντσες)</div>",
    spf_l: "<div>Μήκος</div> <div>264 εκατοστά (103,94 ίντσες)</div>",
    spf_t: "<div>Θερμοκρασία εσωτερικά</div> <div>36,6°C</div>",
    spf_r: "<div>Αντίσταση των κρίκων</div> <div>1,5 κιλά</div>",
    spf_d: "<div>Μέγεθος οθόνης</div> <div>10,1 ίντσες</div>",
    spf_i: "<div>Υπέρυθρη υπερύθρων</div> <div>450nm</div>",
    spf_p: "<div>Ισχύς υπέρυθρων</div> <div>350W</div>",
    spf_c: "<div>Θεραπεία χρώματος</div> <div>ναι</div>",
    spf_m: "<div>Αναδιπλούμενο χαλί</div> <div>ναι</div>",
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
  