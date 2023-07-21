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
    mt_p: "Passive exercise<br> rehabilitation on toning beds",
    mt_i: "We offer 6 isokinetic tables, each capable of moving isolated muscle groups through a range of motions and requires as  much effort as wanted by the user. ",
    mt_s: "Situp table bed",
    mt_si: "Stretch table bed",
    mt_w: "Waist Tummy table bed",
    mt_l: "Leg table bed",
    mt_r: "Relax table bed",
    mt_s_i: "Sandbag table bed",
    mt_wi: "While you relax, the tables take all the strain whilist exercising your major muscle groups. The regulated action of each table stimulates, stretches, tones and firms sagging muscle, while reducing cellulite and inches at the same time. There are six tables in our toning bed system, each one addresses specific muscle groups in a particular region of the body. A session on all six will tone and revitalise the entire body. ",
    mt_wii: " Anyone can use this system. The gentle movement makes the tables particularly suitable for people with mobility and regular exercise problems. Exercise programs are available to maximize the benefit that regular use of the tables can bring. ",
    mx_l: "Maximum load",
    mx_li: "145<sup>kg</sup>",
    mx_n: "Number of beds",
    mx_ni: "6",
    mx_a: "A new way to stretch body",
    mx_ai: "<strong>Toning tables are manufactured to do the regular day to day stretching exercise which we are not doing in natural course. While</strong> the Toning table goes through its motion, you perform isometric exercises to gain the most benefit of toning table. Isometric exercises are performed by tightening a specific muscle and holding it, or moving very slightly. Toning table assist you by providing a little more intensity to the isometric move. Toning table is also very effective in weight loss and fat reduction. ",
    mx_s: "Slimming the entire<br> body figure",
    mx_si: "<strong>The beds are designed to make mainly impact on the areas of the body, where fatty tissue is accumulate.</strong> Their structure and movements lead to a slimming of the entire figure, especially the abdomen, thighs, hips, buttocks and arms. ",
    ps_t: "One session can be compared to 7 hours of exercise in a gym",
    msx: "Strengthen muscles, improve<br> mobility and joint flexibility",
    msx_i: "<strong>Exercises on Activ Motion toning beds strengthen these muscles and improve the mobility and flexibility of joints.</strong> They are also offered to people suffering from osteoporosis, postpartum women, asthmatics, and people with cardiovascular problems. Activ Motion beds do not accelerate the work of the heart muscle, do not cause shortness of breath or increase pressure. They help people with impaired water management. Additionally, they have therapeutic importance as they stimulate blood circulation. Patients feel relaxed and refreshed after each exercise cycle. Joint and spine pains disappear. ",
    msb: "Benefits of exercising on<br> beds:",
    msb_i:"<li><sup>1</sup> regulation of muscle tone</li> <li><sup>2</sup> strengthening muscle strength</li> <li><sup>3</sup> improvement of joint mobility</li> <li><sup>4</sup> improvement of circulation and blood supply to the whole body</li> <li><sup>5</sup> reduction of adipose tissue, weight loss</li> <li><sup>6</sup> improvement of metabolism</li> <li><sup>7</sup> reduction of celullite</li> ",
    msd: "Disease entities for which the bed system may be treated:",
    msd_i: "<li><sup>1</sup> degenerative disease of the spine</li> <li><sup>2</sup>  discopathies</li> <li><sup>3</sup> overload units, traffic systems</li> <li><sup>4</sup>  osteoporosis</li> <li><sup>5</sup> osteoarthritis of the hip and knee</li> <li><sup>6</sup>  consequences of lower limb injuries</li> <li><sup>7</sup>consequences of injuries of the spine and spinal cord</li> <li><sup>8</sup> rheumatoid arthritis</li> ",
    msd_ii: "<li><sup>9</sup> regulation of muscle tone</li> <li><sup>10</sup> strengthening muscle strength</li> <li><sup>11</sup> improvement of joint mobility</li> <li><sup>12</sup> improvement of circulation and blood supply to the whole body</li> <li><sup>13</sup> reduction of adipose tissue, weight loss</li> <li><sup>14</sup> improvement of metabolism</li> <li><sup>15</sup> reduction of celullite</li> ",
    msd_iii: "<li><sup>16</sup> degenerative disease of the spine</li> <li><sup>17</sup> discopathies</li> <li><sup>18</sup> overload units, traffic systems</li> <li><sup>19</sup> osteoporosis</li> <li><sup>20</sup> osteoarthritis of the hip and knee</li> <li><sup>21</sup> consequences of lower limb injuries</li> <li><sup>22</sup> consequences of injuries of the spine and spinal <li><sup>23</sup> rheumatoid arthritis</li> ",
    mst: "The Activ Motion Bed<br> set consits of:",
    mst_c: "01",
    mt_st: "Sandbag Table",
    mst_ci: "Shapping the silhouette of the hips and buttocks",
    mst_m: "10",
    mst_mi: "Minutes",
    mst_n: "1000",
    mst_ni: "movements",


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
  