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
    mt: "A beautiful shape for your interior",
    mt_p: "The San Diego table is part of the California Line furniture series, which we designed mainly to complement the modern interiors of gyms, spas, hotels, clinics or physiotherapy offices.",
    rfd: "Reference to Vacu Activ devices",
    rfd_p: "<strong >The table’s shape and line refer to the fitness or cryotherapy devices designed by Vacu Activ,</strong > which is why it is a perfect addition to the interior design. San Diego gives and highlights the futuristic look of your studio or office at the same time.",
    myb: "Match your brand",
    myb_p: "<strong>The San Diego table</strong> can be ordered in any RAL color to match the appearance of the room or your brand.",
    drg: "Drag to rotate",
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
    mt: "Прекрасная форма для вашего интерьера",
mt_p: "Стол San Diego является частью серии мебели California Line, которую мы разработали, в первую очередь, чтобы дополнить современные интерьеры спортзалов, спа-центров, отелей, клиник или офисов физиотерапии.",
rfd: "Ссылка на устройства Vacu Activ",
rfd_p: "<strong>Форма и линия стола напоминают о фитнес- или криотерапевтических устройствах, разработанных компанией Vacu Activ,</strong> и поэтому он идеально впишется в дизайн интерьера. San Diego придает и подчеркивает футуристический вид вашей студии или офиса одновременно.",
myb: "Подходит под ваш бренд",
myb_p: "<strong>Стол San Diego</strong> может быть изготовлен в любом цвете по RAL, чтобы соответствовать облику помещения или вашего бренда.",
drg: "Перетащите для поворота",
dms: "Размеры",
cta: "Стойка A",
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
    mt: "Ένα όμορφο σχήμα για το εσωτερικό σας",
mt_p: "Το τραπέζι San Diego ανήκει στη σειρά επίπλων California Line, την οποία σχεδιάσαμε κυρίως για να συμπληρώσει τα μοντέρνα εσωτερικά των γυμναστηρίων, των spa, των ξενοδοχείων, των κλινικών ή των ιατρείων φυσιοθεραπείας.",
rfd: "Αναφορά στις συσκευές Vacu Activ",
rfd_p: "<strong>Το σχήμα και η γραμμή του τραπεζιού αναφέρονται στις συσκευές fitness ή κρυοθεραπείας που σχεδιάστηκαν από την Vacu Activ,</strong> για αυτό και είναι μια τέλεια προσθήκη στον εσωτερικό σχεδιασμό. Το San Diego προσδίδει και τονίζει την φουτουριστική εμφάνιση του στούντιο ή του γραφείου σας ταυτόχρονα.",
myb: "Ταιριάξτε το με το brand σας",
myb_p: "Το τραπέζι San Diego μπορεί να παραγγελθεί σε οποιοδήποτε χρώμα RAL για να ταιριάξει με την εμφάνιση του δωματίου ή του brand σας.",
drg: "Σύρετε για περιστροφή",
dms: "Διαστάσεις",
cta: "Πάγκος Α",
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
  


    const images = ["https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0000.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0001.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0002.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0003.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0004.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0005.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0006.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0007.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0008.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0009.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0010.png.png", "https://vacuactiv.com/wp-content/uploads/2022/07/reception_II_0011.png.png"]; // Add more image URLs here
    const image = document.getElementById('_rj221k4mh0');
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