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
  mt_wi:
    "While you relax, the tables take all the strain whilist exercising your major muscle groups. The regulated action of each table stimulates, stretches, tones and firms sagging muscle, while reducing cellulite and inches at the same time. There are six tables in our toning bed system, each one addresses specific muscle groups in a particular region of the body. A session on all six will tone and revitalise the entire body. ",
  mt_wii:
    " Anyone can use this system. The gentle movement makes the tables particularly suitable for people with mobility and regular exercise problems. Exercise programs are available to maximize the benefit that regular use of the tables can bring. ",
  mx_l: "Maximum load",
  mx_li: "145<sup>kg</sup>",
  mx_n: "Number of beds",
  mx_ni: "6",
  mx_a: "A new way to stretch body",
  mx_ai:
    "<strong>Toning tables are manufactured to do the regular day to day stretching exercise which we are not doing in natural course. While</strong> the Toning table goes through its motion, you perform isometric exercises to gain the most benefit of toning table. Isometric exercises are performed by tightening a specific muscle and holding it, or moving very slightly. Toning table assist you by providing a little more intensity to the isometric move. Toning table is also very effective in weight loss and fat reduction. ",
  mx_s: "Slimming the entire<br> body figure",
  mx_si:
    "<strong>The beds are designed to make mainly impact on the areas of the body, where fatty tissue is accumulate.</strong> Their structure and movements lead to a slimming of the entire figure, especially the abdomen, thighs, hips, buttocks and arms. ",
  ps_t: "One session can be compared to 7 hours of exercise in a gym",
  msx: "Strengthen muscles, improve<br> mobility and joint flexibility",
  msx_i:
    "<strong>Exercises on Activ Motion toning beds strengthen these muscles and improve the mobility and flexibility of joints.</strong> They are also offered to people suffering from osteoporosis, postpartum women, asthmatics, and people with cardiovascular problems. Activ Motion beds do not accelerate the work of the heart muscle, do not cause shortness of breath or increase pressure. They help people with impaired water management. Additionally, they have therapeutic importance as they stimulate blood circulation. Patients feel relaxed and refreshed after each exercise cycle. Joint and spine pains disappear. ",
  msb: "Benefits of exercising on<br> beds:",
  msb_i:
    "<li><sup>1</sup> regulation of muscle tone</li> <li><sup>2</sup> strengthening muscle strength</li> <li><sup>3</sup> improvement of joint mobility</li> <li><sup>4</sup> improvement of circulation and blood supply to the whole body</li> <li><sup>5</sup> reduction of adipose tissue, weight loss</li> <li><sup>6</sup> improvement of metabolism</li> <li><sup>7</sup> reduction of celullite</li> ",
  msd: "Disease entities for which the bed system may be treated:",
  msd_i:
    "<li><sup>1</sup> degenerative disease of the spine</li> <li><sup>2</sup>  discopathies</li> <li><sup>3</sup> overload units, traffic systems</li> <li><sup>4</sup>  osteoporosis</li> <li><sup>5</sup> osteoarthritis of the hip and knee</li> <li><sup>6</sup>  consequences of lower limb injuries</li> <li><sup>7</sup>consequences of injuries of the spine and spinal cord</li> <li><sup>8</sup> rheumatoid arthritis</li> ",
  msd_ii:
    "<li><sup>9</sup> regulation of muscle tone</li> <li><sup>10</sup> strengthening muscle strength</li> <li><sup>11</sup> improvement of joint mobility</li> <li><sup>12</sup> improvement of circulation and blood supply to the whole body</li> <li><sup>13</sup> reduction of adipose tissue, weight loss</li> <li><sup>14</sup> improvement of metabolism</li> <li><sup>15</sup> reduction of celullite</li> ",
  msd_iii:
    "<li><sup>16</sup> degenerative disease of the spine</li> <li><sup>17</sup> discopathies</li> <li><sup>18</sup> overload units, traffic systems</li> <li><sup>19</sup> osteoporosis</li> <li><sup>20</sup> osteoarthritis of the hip and knee</li> <li><sup>21</sup> consequences of lower limb injuries</li> <li><sup>22</sup> consequences of injuries of the spine and spinal <li><sup>23</sup> rheumatoid arthritis</li> ",
  mst: "The Activ Motion Bed<br> set consits of:",
  mst_c: "01",
  mt_st: "Sandbag Table",
  mst_ci: "Shapping the silhouette of the hips and buttocks",
  mst_m: "10",
  mst_mi: "Minutes",
  mst_n: "1000",
  mst_ni: "movements",
  ss_h: "Height",
  ss_hi: "69<sup>cm</sup>",
  ss_w: "Width",
  ss_wi: "85,1<sup>cm</sup>",
  ss_l: "Lenght",
  ss_li: "201,2<sup>cm</sup>",
  ssw: "Weight",
  ssw_i: "145<sup>kg</sup>",
  ss_i: "<strong>The Sandbag Machine utilizes two pads that move back and forth across the buttocks to firm and tone, and at the same time strengthen the abdominal muscles.</strong> As the buttocks is exercised, the cellulite is broken down and dissolved. (Cellulite is fat and water trapped under the skin resulting in a bumpy, dimply skin texture.) The gentle rhythmic action of the machine breaks down the cellulite giving a firm, smooth tone to the skin. The sandbag applies weight to the abdomen, helping the machine to work more effectively on the hips. ",
  ss_ii:
    " By resisting tension, we work on the buttock muscles and the straight abdominals. Light, rhythmic massage movements help to relax and strengthen the muscles around the sacral spine, burning fat in the hips, buttocks and thighs. ",
  lgt_i: "02",
  lgt: "Leg Table",
  shl: "Shaping the silhouette of the legs",
  sw_i: "3<sup>km</sup>",
  sw_ii: "of walking",
  sh_ii: "100,4<sup>cm</sup>",
  se_ii: "85,1<sup>cm</sup>",
  sl_ii: "202,7<sup>cm</sup>",
  sp_i: " <strong >The Leg Machine allows concentration on particular areas of the legs. There are three separate but contiguous pulling movements involved.</strong",
  sp_ii:
    " – The legs are moved inward using the Inner thigh muscles.<br /> – The legs are moved toward the body using all the thigh muscles.<br /> – The legs are moved out and away using the outer thigh muscles.",
  sp_iii:
    "The knees are kept slightly bent. No pushing or resistive movement is involved. This machine reduces inches, firms and tones the entire leg area while concentrating on reducing the inner thigh, the knee area, and “saddlebag” area on the outer thigh.",
  sp_iiii:
    "Exercises to imitate walking. By performing circular movements, the thigh adductors and abduction muscles, as well as the triceps and quadriceps muscles of the thigh are exercised. The hip and knee joints are also unlocked and strengthened. Exercises on this bed slim down the legs, especially the inner and outer sides of the thighs, regulate blood circulation in the lower limbs, stimulate circulation in the lower abdomen, which has a positive effect on the menstrual cycle and the urinary system. These types of movements are used in fitness.",
  stt_n: "03",
  stt_t: "Sit up Table",
  stt_p: "Shaping the silhouette of he abdomen, thighs amd calves",
  stt_s: "90",
  stt_si: "sit-ups",
  stt_li: "191,2<sup>cm</sup>",
  stt_i:
    "<strong >The exercises are performed on the “sit and lie down” principle.</strong > The muscles of the waist and abdomen are tense and relaxed in this exercise. The muscles that work primarily include the external oblique abdomen, the internal oblique abdomen and the transverse abdominal oblique. Thanks to this, fatty tissue is burned mainly in their vicinity. The lower back is also strengthened.",
  swh: "04",
  swh_t: "Waist, Tummy,<br> Hip Table",
  swh_p: "Shaping the silhouette of the lower back, buttocks and thighs.",
  swh_l: "900",
  swh_li: "leg movements",
  swh_i:
    "<strong >The Waist-Tummy-Hip Machine alternately raises and lowers the legs 650 times during a normal 10-minute treatment.</strong > As this occurs, the waist is gently twisted. The simultaneous action firms, tones and reduces the waist, tummy and hips. This machine combines the waist-twisting movement with the leg lifting movement. This exercise movement rapidly sheds inches from the waist, tummy and hips while it strengthens the muscles in the lower back. The result is a tight butt, stronger legs, and more flexibility.",
  swh_ii:
    "The person exercising lightly and rhythmically raises and lowers the legs. It burns fat tissue around the waist, reduces the circumference of the waist and hips, reduces cellulite and firms the buttocks. The lower back is strengthened.",
  sbl: "05",
  sblli: "Stretch Table",
  sbl_i:
    "<strong >The Stretch Machine has an upper body pad which moves in a superior and inferior direction. The patient lies supine with scapulas on a single moving pad.</strong > Upper extremities are extended with hands tapping the bar located at the bead of the machine, as the pad moves. Upper back extension is increased. An additional benefit is an increase of abdominal, trunk and cervical mobility.e lower back. The result is a tight butt, stronger legs, and more flexibility.",
  sbl_ii:
    "The bed massages the upper part of the body, including the cervical spine, hip spine and shoulder blades, causing, among other things, their loosening. It has a very positive effect on the curvature of the hips and loins. It strengthens and shapes the chest, improves the firmness of the breasts, strengthens the abdominal muscles as well as firms and slims the arms. Exercises using this bed prevent ugly dropping of the shoulders by strengthening the muscles of the shoulder girdle, back and chest. Backaches caused by one-sided load are also effectively eliminated.",
  sbr: "06",
  sbri: "Relax Table",
  sbrp: "Pleasan relaxation, improves blood circulation",
  sbr_i:
    "<strong >The Vibrator Machine creates a vibrating action that gently massages the entire body.</strong > The prime functions are to help increase blood circulation, rid the body of excess water and help dissolve cellulite. The movement of the machine is soothing and relaxing and creates an energetic and refreshed feeling.",
  sbr_ii:
    "Exercises on it are recommended, among others in rheumatoid arthritis, diabetes, hypertension or hypotension, overweight, degenerative diseases of the spine, osteoporosis, complications after diseases of the urinary tract, injuries of the spine and spinal cord, discopathy, degenerative diseases of the hips and knees,<br /> multiple sclerosis and other musculoskeletal disorders. They also have a prophylactic and preventive effect.",

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
  mt_p: "Пассивная реабилитация упражнений на тонизирующих кроватях",
  mt_i: "Мы предлагаем 6 изокинетических столов, каждый из которых способен перемещать изолированные группы мышц в диапазоне движений и требует столько усилий, сколько захочет пользователь.",
  mt_s: "Стол для подъема туловища",
  mt_si: "Стол для растяжения",
  mt_w: "Стол для талии и живота",
  mt_l: "Стол для ног",
  mt_r: "Стол для релаксации",
  mt_s_i: "Стол для мешков с песком",
  mt_wi:
    "Во время отдыха столы берут на себя все нагрузки, одновременно тренируя основные мышечные группы. Регулируемое действие каждого стола стимулирует, растягивает, тонизирует и укрепляет ослабленные мышцы, одновременно уменьшая целлюлит и объемы тела. В нашей системе тонизирующих кроватей шесть столов, каждый из которых направлен на определенные мышечные группы в определенном регионе тела. Занятие на всех шести столах помогает укрепить и оживить весь организм.",
  mt_wii:
    "Эту систему может использовать любой. Мягкие движения делают столы особенно подходящими для людей с ограниченной подвижностью и проблемами с регулярными упражнениями. Доступны упражнения, которые максимизируют пользу от регулярного использования столов.",
  mx_l: "Максимальная нагрузка",
  mx_li: "145 кг",
  mx_n: "Количество столов",
  mx_ni: "6",
  mx_a: "Новый способ растяжения тела",
  mx_ai:
    "Тонизирующие столы предназначены для регулярных растяжек, которые мы не выполняем в обычной жизни. Во время движения на тонизирующем столе вы выполняете изометрические упражнения для получения наибольшей пользы от тренировки. Изометрические упражнения выполняются путем напряжения определенной мышцы и удержания ее в этом состоянии или слегка двигаясь. Тонизирующий стол помогает немного усилить изометрическое движение. Тонизирующий стол также очень эффективен для похудения и уменьшения жировых отложений.",
  mx_s: "Омолаживает весь облик тела",
  mx_si:
    "Столы предназначены главным образом для воздействия на области тела, где скапливается жировая ткань. Их структура и движения способствуют похудению всего тела, особенно живота, бедер, ягодиц и рук.",
  ps_t: "Одна сессия может быть сравнена с 7 часами тренировок в тренажерном зале",
  msx: "Укрепление мышц, улучшение подвижности и гибкости суставов",
  msx_i:
    "Упражнения на тонизирующих столах укрепляют эти мышцы и улучшают подвижность и гибкость суставов. Они также предлагаются людям, страдающим остеопорозом, женщинам после родов, астматикам и людям с сердечно-сосудистыми проблемами. Тонизирующие столы не увеличивают нагрузку на сердечную мышцу, не вызывают одышку и не повышают давление. Они помогают людям с нарушенным водно-солевым обменом. Кроме того, они имеют терапевтическое значение, так как стимулируют кровообращение. После каждого упражнения пациенты чувствуют себя расслабленными и свежими. Боли в суставах и позвоночнике исчезают.",
  msb: "Преимущества тренировок на столах:",
  msb_i:
    "<li>регулирование мышечного тонуса</li> <li>укрепление мышечной силы</li> <li>улучшение подвижности суставов</li> <li>улучшение кровообращения и кровоснабжения всего организма</li> <li>снижение жировой ткани, потеря веса</li> <li>улучшение обмена веществ</li> <li>снижение целлюлита</li>",
  msd: "Заболевания, которые могут быть лечены системой столов:",
  msd_i:
    "<li>дегенеративные заболевания позвоночника</li> <li>дискоаптозы</li> <li>перегрузка суставов, система транспорта</li> <li>остеопороз</li> <li>артроз тазобедренного и коленного суставов</li> <li>последствия травм нижних конечностей</li> <li>последствия травм позвоночника и спинного мозга</li> <li>ревматоидный артрит</li>",
  msd_ii:
    "<li>регулирование мышечного тонуса</li> <li>укрепление мышечной силы</li> <li>улучшение подвижности суставов</li> <li>улучшение кровообращения и кровоснабжения всего организма</li> <li>снижение жировой ткани, потеря веса</li> <li>улучшение обмена веществ</li> <li>снижение целлюлита</li>",
  msd_iii:
    "<li>дегенеративные заболевания позвоночника</li> <li>дискоаптозы</li> <li>перегрузка суставов, система транспорта</li> <li>остеопороз</li> <li>артроз тазобедренного и коленного суставов</li> <li>последствия травм нижних конечностей</li> <li>последствия травм позвоночника и спинного мозга</li> <li>ревматоидный артрит</li>",
  mst: "Набор тонизирующих кроватей Activ Motion включает в себя:",
  mst_c: "01",
  mt_st: "Стол для мешков с песком",
  mst_ci: "Формирование силуэта бедер и ягодиц",
  mst_m: "10",
  mst_mi: "минут",
  mst_n: "1000",
  mst_ni: "движений",
  ss_h: "Высота",
  ss_hi: "69 см",
  ss_w: "Ширина",
  ss_wi: "85,1 см",
  ss_l: "Длина",
  ss_li: "201,2 см",
  ssw: "Вес",
  ssw_i: "145 кг",
  ss_i: "Тонизирующая машина с использованием двух подушек, которые перемещаются вперед и назад по ягодицам для уплотнения и тонизации, а также укрепления мышц живота. В ходе упражнения целлюлит разрушается и растворяется. (Целлюлит - это жир и вода, запертые под кожей, что приводит к неровной и димельной текстуре кожи.) Мягкое ритмичное движение машины разламывает целлюлит, придавая коже упругость и гладкость. Мешок с песком наносит вес на живот, помогая машине более эффективно работать на бедрах.",
  ss_ii:
    "Сопротивляясь напряжению, мы работаем на мышцы ягодиц и прямых мышц живота. Легкие, ритмичные массажные движения помогают расслабить и укрепить мышцы вокруг крестцового позвоночника, сжигая жир в бедрах, ягодицах и бедрах.",
  lgt_i: "02",
  lgt: "Стол для ног",
  shl: "Формирование силуэта ног",
  sw_i: "3 км",
  sw_ii: "походки",
  sh_ii: "100,4 см",
  se_ii: "85,1 см",
  sl_ii: "202,7 см",
  sp_i: " <strong >Машина для ног позволяет сосредотачиваться на отдельных частях ног. Вовлечены три отдельных, но непрерывных движения потягивания.</strong",
  sp_ii:
    " - Ноги двигаются внутрь с использованием внутренних мышц бедра.<br /> - Ноги перемещаются к телу, используя все мышцы бедра.<br /> - Ноги двигаются в сторону и наружу с использованием наружных мышц бедра.",
  sp_iii:
    "Колени немного согнуты. Нет толчков или сопротивительных движений. Эта машина уменьшает объемы, укрепляет и тонизирует всю область ног, сосредотачиваясь на уменьшении внутренней части бедра, области колена и боках на наружной стороне бедра.",
  sp_iiii:
    "Упражнения для имитации ходьбы. Выполняя круговые движения, мы упражняемся с аддукторами и абдукторами бедра, а также с трицепсами и квадрицепсами бедра. Также разблокируются и укрепляются тазобедренные и коленные суставы. Упражнения на этом столе делают ноги стройнее, особенно внутреннюю и наружную стороны бедра, регулируют кровообращение в нижних конечностях, стимулируют кровообращение в нижнем животе, что положительно сказывается на менструальном цикле и мочевой системе. Такие виды движений применяются в фитнесе.",
  stt_n: "03",
  stt_t: "Стол для подъема туловища",
  stt_p: "Формирование силуэта живота, бедер и икр",
  stt_s: "90",
  stt_si: "подъемов туловища",
  stt_li: "191,2 см",
  stt_i:
    "Упражнения выполняются по принципу «сидеть и лежать». В ходе упражнения напрягаются и расслабляются мышцы талии и живота. Основные мышцы, которые работают, включают наружные и внутренние косые мышцы живота и поперечные мышцы живота. Благодаря этому жировая ткань сжигается в основном в их окрестностях. Также укрепляется нижняя часть спины.",
  swh: "04",
  swh_t: "Стол для талии, живота и бедер",
  swh_p: "Формирование силуэта нижней части спины, ягодиц и бедер.",
  swh_l: "900",
  swh_li: "движений ног",
  swh_i:
    "Стол для талии, живота и бедер чередует поднятие и опускание ног 650 раз за обычную 10-минутную процедуру. Во время этого движения талия мягко вращается. Одновременное действие укрепляет, тонизирует и снижает объемы в талии, животе и бедрах. Этот стол сочетает вращательное движение талии с поднятием ног. Это упражнение быстро уменьшает объемы в талии, животе и бедрах и в то же время укрепляет мышцы нижней части спины. В результате получаем упругую ягодицы, сильные ноги и большую гибкость.",
  swh_ii:
    "Человек легко и ритмично поднимает и опускает ноги. Это сжигает жировую ткань вокруг талии, уменьшает окружность талии и бедер, снижает целлюлит и укрепляет ягодицы. Также укрепляется нижняя часть спины.",
  sbl: "05",
  sblli: "Стол для растяжения",
  sbl_i:
    "Тонизирующая машина имеет верхнюю подушку, которая движется вверх и вниз. Пациент лежит на спине с лопатками на одной движущейся подушке. Верхние конечности выпрямлены с руками, касающимися стойки, расположенной у головы машины, по мере движения подушки. Увеличивается расширение верхней части спины. Дополнительным преимуществом является увеличение подвижности брюшной, туловищной и шейной области. Упражнения на этом столе помогают укрепить и оживить всю верхнюю часть тела.",
  sbl_ii:
    "Стол массирует верхнюю часть тела, включая шейный позвоночник, тазобедренный позвоночник и лопаточные кости, вызывая их размягчение, а также положительно влияет на изгибы таза и поясницы. Укрепляет и формирует грудь, улучшает упругость груди, укрепляет мышцы живота и укрепляет и формирует руки. Упражнения на этом столе предотвращают неприятное спадение плечей, укрепляя мышцы плечевого пояса, спины и груди. Также успешно устраняются боли в спине, вызванные односторонней нагрузкой.",
  sbr: "06",
  sbri: "Стол для релаксации",
  sbrp: "Приятное расслабление, улучшение кровообращения",
  sbr_i:
    "Вибраторная машина создает вибрационное действие, которое мягко массирует всё тело. Основные функции - помочь увеличить кровообращение, избавить организм от избыточной воды и разрушить целлюлит. Движение машины успокаивающее и расслабляющее, создает чувство энергии и освеженности.",
  sbr_ii:
    "Упражнения на этом столе рекомендуются, в частности, при ревматоидном артрите, диабете, гипертонии или гипотонии, избыточном весе, дегенеративных заболеваниях позвоночника, остеопорозе, осложнениях после заболеваний мочевой системы, повреждениях позвоночника и спинного мозга, дискоаптизах, дегенеративных заболеваниях тазобедренных и коленных суставов, рассеянном склерозе и других заболеваниях опорно-двигательного аппарата. Они также имеют профилактический и предотвратительный эффект.",

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
  mt_p: "Παθητική αποκατάσταση με ασκήσεις σε τονωτικά κρεβάτια",
  mt_i: "Προσφέρουμε 6 ισοκινητικά τραπέζια, καθένα από τα οποία μπορεί να κινήσει απομονωμένες μυϊκές ομάδες σε ένα εύρος κινήσεων και απαιτεί τόση δύναμη όση επιθυμεί ο χρήστης.",
  mt_s: "Τραπέζι υπερέκτασης σώματος",
  mt_si: "Τραπέζι διάτασης",
  mt_w: "Τραπέζι μέσης και κοιλιάς",
  mt_l: "Τραπέζι ποδιών",
  mt_r: "Τραπέζι χαλάρωσης",
  mt_s_i: "Τραπέζι για σάκους άμμου",
  mt_wi:
    "Κατά τη διάρκεια της ανάπαυσης, τα τραπέζια αναλαμβάνουν όλο το φορτίο, ενώ ταυτόχρονα εκπαιδεύουν τις βασικές μυϊκές ομάδες. Η ρυθμιζόμενη κίνηση κάθε τραπεζιού διεγείρει, επεκτείνει, τονώνει και ενισχύει αδύναμους μύες, μειώνοντας ταυτόχρονα τον κυτταρίτιδα και τον όγκο του σώματος. Στο σύστημα των τονωτικών κρεβατιών μας υπάρχουν έξι τραπέζια, καθένα από τα οποία απευθύνεται σε συγκεκριμένες μυϊκές ομάδες σε συγκεκριμένη περιοχή του σώματος. Η άσκηση σε όλα τα έξι τραπέζια βοηθά στην ενδυνάμωση και αναζωογόνηση όλου του οργανισμού.",
  mt_wii:
    "Αυτό το σύστημα μπορεί να χρησιμοποιηθεί από οποιονδήποτε. Οι απαλές κινήσεις κάνουν τα τραπέζια ιδιαίτερα κατάλληλα για άτομα με περιορισμένη κινητικότητα και προβλήματα στην τακτική άσκηση. Διατίθενται ασκήσεις που μεγιστοποιούν τα οφέλη από την τακτική χρήση των τραπεζιών.",
  mx_l: "Μέγιστο φορτίο",
  mx_li: "145 κιλά",
  mx_n: "Αριθμός τραπεζιών",
  mx_ni: "6",
  mx_a: "Νέος τρόπος διατάσεων του σώματος",
  mx_ai:
    "Τα τονωτικά τραπέζια προορίζονται για τακτικές διατάσεις που δεν πραγματοποιούμε στην καθημερινή ζωή. Κατά την κίνηση στο τονωτικό τραπέζι, πραγματοποιείτε ισομετρικές ασκήσεις για να αποκομίσετε τα μέγιστα οφέλη από την προπόνηση. Οι ισομετρικές ασκήσεις πραγματοποιούνται τάση του συγκεκριμένου μυ και κρατώντας το σε αυτήν την κατάσταση ή κάνοντας ελαφρές κινήσεις. Το τονωτικό τραπέζι βοηθά να ενισχυθεί ελαφρώς η ισομετρική κίνηση. Είναι επίσης πολύ αποτελεσματικό για απώλεια βάρους και μείωση λιπαρών καταθέσεων.",
  mx_s: "Αναζωογονεί ολόκληρο το σώμα",
  mx_si:
    "Τα τραπέζια προορίζονται κυρίως για την επίδραση σε περιοχές του σώματος όπου συσσωρεύεται λιπώδης ιστός. Η δομή και οι κινήσεις τους βοηθούν στην απώλεια βάρους σε ολόκληρο το σώμα, ειδικά στην κοιλιά, τους μηρούς, τους γλουτούς και τα χέρια.",
  ps_t: "Μια συνεδρία μπορεί να συγκριθεί με 7 ώρες προπόνησης σε γυμναστήριο",

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
