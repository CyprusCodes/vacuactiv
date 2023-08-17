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
    mt: "A beautiful,subtle line that gives an amazing shape",
    mt_p: "When designing the Ventura armchair, we focused on the shape and form, which are created by carefully selected lines, giving it lightness and modernity. Thanks to the creative work of our designers, we combined the character of Vacu Activ devices, blending it delicately into the line of furniture, thanks to which we obtained an amazing visual effect.",
    fdt: "Fine details",
    fdt_p: "<strong >For us, even the smallest detail is important in the design process, which is why we also focused on elements such as stitching on the upholstery.</strong > Embossing and stitching are inspired and refer to luxury sports cars. Thanks to these small details, we have obtained a great result, which also affects the comfort of using the chair.",
    eys: "Enrich your space",
    eys_p: "<strong >The Ventura armchair is a completely new look at design.</strong > Fresh and original form, perfectly fits into minimalist, modern spaces. Thanks to the Ventura armchair, each interior will acquire a modern character.",
    drg: "Drag to rotate",
    wdm: "Where design meets comfort",
    wdm_p: "<strong >The Ventura armchair, designed by Vacu Activ, is not only a beautiful shape, it is also amazing comfort.</strong > In addition to the appearance, we adjusted the ergonomics of the chair to the body, maintaining the right angles for supporting the spine and the lumbar part to ensure the correct sitting position.",
    dms: "Dimensions",
    cta: "Counter A",





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
    mt: "Прекрасная, изысканная линия, которая создает удивительную форму",
mt_p: "При создании кресла Ventura мы сосредоточились на его форме, которая создается тщательно подобранными линиями, делая его легким и современным. Благодаря креативной работе наших дизайнеров, мы сочетаем характер устройств Vacu Activ, изящно вливая его в линию мебели, что создает удивительный визуальный эффект.",
fdt: "Точные детали",
fdt_p: "<strong>Для нас важны даже мельчайшие детали в процессе дизайна, поэтому мы также обратили внимание на элементы, такие как строчка на обивке.</strong> Тиснение и строчка вдохновлены роскошными спортивными автомобилями. Благодаря этим маленьким деталям, мы получили отличный результат, который также влияет на комфорт использования стула.",
eys: "Обогатите свое пространство",
eys_p: "<strong>Кресло Ventura представляет собой совершенно новый взгляд на дизайн.</strong> Свежая и оригинальная форма отлично впишется в минималистские, современные пространства. Благодаря креслу Ventura, каждый интерьер приобретет современный характер.",
drg: "Перетащите для вращения",
wdm: "Когда дизайн встречается с комфортом",
wdm_p: "<strong>Кресло Ventura, разработанное Vacu Activ, представляет не только прекрасную форму, но и потрясающий комфорт.</strong> Помимо внешнего вида, мы адаптировали эргономику кресла под контуры тела, сохраняя правильные углы для поддержки позвоночника и поясничной части, чтобы обеспечить правильное положение при сидении.",
dms: "Размеры",
cta: "Контр А",
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
    mt: "Μια όμορφη, λεπτή γραμμή που δίνει μια εκπληκτική μορφή",
mt_p: "Κατά τον σχεδιασμό της πολυθρόνας Ventura, επικεντρωθήκαμε στο σχήμα και τη μορφή, τα οποία δημιουργούνται από προσεκτικά επιλεγμένες γραμμές, προσδίδοντάς της ελαφρότητα και νεοτερισμό. Χάρη στο δημιουργικό έργο των σχεδιαστών μας, συνδυάσαμε το χαρακτήρα των συσκευών Vacu Activ, αναμειγνύοντάς τον διακριτά στη γραμμή του επίπλου, με το αποτέλεσμα της εξασφάλισης ενός εκπληκτικού οπτικού αποτελέσματος.",
fdt: "Λεπτομέρειες",
fdt_p: "<strong>Για εμάς, ακόμη και η παραμικρή λεπτομέρεια είναι σημαντική στη διαδικασία σχεδίασης, γι' αυτό επικεντρωθήκαμε επίσης στα στοιχεία όπως οι ραφές στην επένδυση.</strong> Οι χαρακτηριστικές χαράξεις και ραφές είναι εμπνευσμένες και αναφέρονται σε πολυτελή αυτοκίνητα αγωνιστικού τύπου. Χάρη σε αυτές τις μικρές λεπτομέρειες, πετύχαμε ένα εξαιρετικό αποτέλεσμα, το οποίο επηρεάζει επίσης την άνεση κατά τη χρήση της πολυθρόνας.",
eys: "Εμπλουτίστε τον χώρο σας",
eys_p: "<strong>Η πολυθρόνα Ventura είναι μια εντελώς νέα ματιά στον σχεδιασμό.</strong> Φρέσκο και πρωτότυπο σχήμα, ταιριάζει απόλυτα σε μινιμαλιστικούς, μοντέρνους χώρους. Χάρη στην πολυθρόνα Ventura, κάθε εσωτερικό θα αποκτήσει μια μοντέρνα χαρακτήρα.",
drg: "Σύρετε για περιστροφή",
wdm: "Εκεί όπου ο σχεδιασμός συναντά την άνεση",
wdm_p: "<strong>Η πολυθρόνα Ventura, σχεδιασμένη από τη Vacu Activ, δεν είναι μόνο ένα όμορφο σχήμα, αλλά και εξαιρετική άνεση.</strong> Εκτός από την εμφάνιση, προσαρμόσαμε την εργονομία της πολυθρόνας στο σώμα, διατηρώντας τις σωστές γωνίες για την υποστήριξη της σπονδυλικής στήλης και του οσφυϊκού μέρους για να εξασφαλίσουμε τη σωστή καθιστική θέση.",
dms: "Διαστάσεις",
cta: "Αντίστροφη A",
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
  

    const images = ["https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0000.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0001.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0002.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0003.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0004.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0005.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0006.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0007.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0008.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0009.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0010.png.png", "https://vacuactiv.com/wp-content/uploads/2022/08/armChair_obrot30_0011.png.png"]; // Add more image URLs here
    const image = document.getElementById('ddd-image');
    let isDragging = false;
    let startX;
    let currentIndex = 0;
    
    image.addEventListener('mousedown', handleDragStart);
    image.addEventListener('mousemove', handleDragMove);
    image.addEventListener('mouseup', handleDragEnd);
    
    function handleDragStart(e) {
      isDragging = true;
      startX = e.clientX;
    }
    
    function handleDragMove(e) {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const sensitivity = 15; // Adjust the sensitivity to change the image
      if (deltaX > sensitivity) {
        changeImage(1); // Dragging right
      } else if (deltaX < -sensitivity) {
        changeImage(-1); // Dragging left
      }
    }
    
    function handleDragEnd() {
      isDragging = false;
    }
    
    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      } else if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      image.src = images[currentIndex];
    }