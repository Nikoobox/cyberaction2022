import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    color: COLORS.WHITE_MAIN,
  },
}));

const LEGAL_DATA = [
  {
    title:
      "Общие Правила Оказания Услуг Оганизации Игры Виртуальной Реальности",
    rules: [
      {
        subTitle:
          "Понятия, использующиеся в настоящих Общих правилах оказания услуг организации игры виртуальной реальности:",
        paragraphs: [
          "«Игра» — развлекательное игровое мероприятие, начинающееся в указанное в расписании Организатора время суток и проходящее в течение определенного промежутка времени в соответствии с определенным Организатором сценарием и условиями, которые включают в себя в том числе соблюдение Правил.",
          "«Место оказания услуг» — локация виртуальной реальности, находящаяся по адресу: Самара, ул.Фрунзе, 96.",
          "«Организатор» — юридическое лицо, являющееся исполнителем, организующим оказание Услуг Пользователю.",
          "«Персональные данные» — любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту персональных данных).",
          "«Пользователь» — физическое лицо, осуществившее регистрацию на Сайте в соответствии с условиями настоящих Правил.",
          "«Правила» — обязательные для соблюдения при получении Услуг каждым Участником настоящих общих правил оказания услуг организации игры виртуальной реальности, включая, но не ограничиваясь: ограничения по возрасту, составу и количеству Участников для участия в Игре, ограничения по состоянию здоровья Участника и его физическому состоянию и т. п. в зависимости от условий оказания Услуги определенного вида.",
          "«Профиль» — комбинация из электронной почты/мобильного телефонного номера и пароля для доступа к персональной странице Пользователя в рамках Сайта, позволяющая получать доступ к сервисам Сайта.",
          "«Сайт» — ресурс, размещенный в сети Интернет по адресу cyberactionsamara.ru, посредством которого обеспечивается предоставление информации об Услугах. Сайт дополнительно предоставляет Пользователю возможность через Интернет взаимодействовать с системой бронирования Игры на желаемое время (Сеанс), включая возможность получить имеющиеся описания, изображения, наличие и условия, а также стоимость бронирования Сеанса.",
          "«Услуга», «Услуги» — комплекс мероприятий, осуществляемых Организатором при проведении Игры, а также иных сопутствующих мероприятий в соответствии с поручением Пользователя, Участника (его законного представителя) или иного лица, желающего принять участие в Игре лично или обеспечить участие в Игре иного лица (лиц).",
          "«Участник» — физическое лицо, являющееся получателем Услуги (Услуг) по участию в Игре.",
          "«Участник-организатор»-физическое лицо, забронировавшее игру, предоставив организатору все необходимые данные и частичную или полную оплату услуги, а также, на период игры, являющийся законным представителем всех участников, не достигших возраста 18 лет, прибывших на игру без родителей или иных законных представителей, несущий полную ответственность за их участие в игре. Участник-организатор оставляет одну свою подпись в бумажном варианте согласия на безоговорочное принятие правил и ответственности всеми участниками команды на забронированный сеанс игры.",
        ],
      },
      {
        subTitle: "1. Общие положения:",
        paragraphs: [
          "1.1. Настоящие Правила не являются публичной офертой в соответствии с п.2 ст. 437 ГК РФ, а определяют общие условия оказания и получения Услуг, положения о бронировании Услуг, а также условия пользования Сайтом. Публичная оферта на оказание услуг, предоставляемая Организатором, не может противоречить настоящим Правилам.",
          "1.2. Настоящие Правила вступают в силу с момента их опубликования на Сайте и действуют бессрочно, до их отмены или изменения.",
          "1.3. Пройдя процедуру регистрации, Пользователь считается подробно ознакомившимся и безоговорочно принявшим условия настоящих Правил и Публичной оферты в полном объеме без ограничений путем проставления отметки о согласии (галочки) в специальном поле рядом со ссылкой на текст данных Правил напротив фразы «Я принимаю условия настоящих Правил». В случае если Пользователь не согласен полностью или в части с положениями настоящих Правил, он не имеет права использовать материалы и сервисы Сайта, а также получать Услуги.",
          "1.4. Перед началом Игры, при условии бронирования сеанса на сайте cyberactionsamara.ru, через директ инстаграм VK, либо по телефону +79278989945, участник считается подробно ознакомившимся и безоговорочно принявшим условия настоящих Правил в полном объеме без ограничений и оговорок, а также получившим все необходимые разъяснения и дополнения, не изложенные на Сайте, путем ознакомления с общими правилами непосредственно на месте проведения игры, и подписания в бумажном варианте соответствующего согласия непосредственно перед получением Услуг.",
          "1.5. Организатор вправе в любой момент в одностороннем порядке и без какого-либо специального уведомления внести изменения и/или дополнения в настоящие Правила путем опубликования обновленной версии на Сайте. Обновленная версия настоящих Правил вступает в силу с момента ее публикации на Сайте. В случае если Пользователь не согласен полностью или в части с положениями обновлённой версии Правил, он не имеет права использовать материалы и сервисы Сайта.",
          "1.6. Условия использования материалов и сервисов Сайта регулируются настоящими Правилами и иными соглашениями, размещенными на Сайте.",
          "1.7. Действующая редакция настоящих Правил располагается в сети Интернет по адресу cyberactionsamara.ru. И в печатном виде, непосредственно, в месте оказания услуг.",
        ],
      },
      {
        subTitle: "2. Условия предоставления Услуг",
        paragraphs: [
          "2.1. Для того чтобы получить Услуги, Участник должен приобрести статус Пользователя в порядке, указанном в разделе 4 настоящих Правил, и забронировать Сеанс. Лицо, желающее получить Услуги, также вправе обратиться непосредственно к Организатору в Месте оказания услуг, чтобы принять участие в Сеансе на ближайшее время при наличии свободных мест.",
          "2.2. К участию в Игре допускаются Участник-организатор и его команда, соответствующие Правилам в соответствии с разделом 3 настоящих Правил, забронировавшие и в оговоренном объеме оплатившие Сеанс.",
          "2.3. Необходимым условием допуска к игре является подписание в бумажном варианте Участником-организатором соответствующего согласия непосредственно перед получением Услуг.",
          "2.4. Общий количественный состав Участников в Игре одновременно (в течение одного Сеанса) — не менее 2 и не более 10человек. Продолжительность одного Сеанса — до 60 минут, включая подготовительный этап.",
          "2.5. Осуществлением оплаты Сеанса Пользователь автоматически подтверждает, что он готов обеспечить присутствие на Игре Участников согласно с п.2.4 настоящих Правил, соответствующих требованиям Правил и иным положениям настоящих Правил.",
          "2.6. Во время Игры запрещается курить, принимать пищу или напитки. Участники, нарушающие данные требования, до участия в Игре не допускаются.",
          "2.7. До начала Игры Участники обязаны соблюсти необходимые организационные и гигиенические требования Организатора, а также требования по обеспечению личной безопасности.",
          "2.8. В целях проведения надлежащей организации Игры Организатор вправе оказывать иные сопутствующие Услуги. Условия, порядок и стоимость оказания таких Услуг согласовывается Сторонами дополнительно.",
          "2.9. Организатор вправе организовывать различные стимулирующие мероприятия с целью привлечения внимания потенциальных Участников к Игре (акции, подарочные карты на участие и т.п.). Порядок и участия их проведения сообщаются Пользователям на Сайте, а также иными способами, определяемыми Организатором.",
        ],
      },
      {
        subTitle: "3. Правила допуска и участия в Игре",
        paragraphs: [
          "3.1. К участию в Игре допускаются лица от 10 лет для самостоятельного участия в Игре, либо от 8 лет-в команде с родителями, при условии присутствия родителей, законного представителя, или Участника-организатора, становящимся на период игры их законным представителем, несущим полную физическую и материальную ответственность за участие в игре детей, в возрасте до 18 лет.",
          "3.2. Физическое, а также психологическое состояние Участников должно соответствовать условиям и порядку проведения Игры и участия в ней. В частности, Игра не предполагает возможность участия в ней следующих категорий лиц: лиц с ограниченными возможностями здоровья, лиц с психическими расстройствами любого рода в любом проявлении, лиц в состоянии алкогольного и/или наркотического опьянения, лиц в пачкающей или грязной одежде, без обуви, агрессивно настроенных лиц, лиц, не соблюдающих какие-либо иные условия настоящих Правил или не соответствующих указанным в настоящих Правилах требованиям, любых иных лиц, в отношении которых существует вероятность того, что участие в Игре может спровоцировать риск возникновения какого-либо рода негативных последствий как для самого Участника, так и для Организатора (в том числе негативных последствий имущественного характера).",
          "3.3. Организатор вправе запросить у Участника (его законного представителя) документальное подтверждение того, что он соответствует критериям участия согласно пп.3.1 и 3.2 настоящих Правил.",
          "3.4. Непосредственно перед проведением Игры Организатор проводит инструктаж с Участниками и их законными представителями (в случае если участник не достиг возраста 18 лет и законный представитель также присутствует в Месте оказания услуг) с целью более подробного описания правил проведения и участия в Игре, а также определения риска возникновения для Участников каких-либо негативных последствий по факту участия в Игре в соответствии с п.3.2 настоящих Правил.",
          "3.5. Организатор сохраняет за собой безусловное право отказать в оказании Услуг, в случае если у него возникают подозрения в отношении достоверности сообщаемых Участником (его законным представителем) данных по пунктам 3.1 и 3.2 настоящих Правил, а также в случае если по итогам проводимого согласно п.3.4 инструктажа Организатор выявил риск возникновения для Участников каких-либо негативных последствий по факту участия в Игре.",
          "3.6. Участник и/или его законный представитель вправе самостоятельно принять решение об отказе в участии в Игре в любой момент времени без объяснения причин с применением последствий согласно п.3.8 настоящих Правил.",
          "3.7. В случае если Организатор отказывает в оказании Услуг до момента начала Сеанса Игры, за исключением случая отказа согласно п.3.8 настоящих Правил, Организатор осуществляет возврат денежных средств, уплаченных за Услуги, в соответствии с пп.4.8 и 4.9 настоящего Договора.",
          "3.8. В случае если - Нарушены условия или Участником или его законным представителем была предоставлена недостоверная информация в соответствии с пп.3.1 и 3.2 настоящих Правил, которая опровергнута на основании представленных согласно п.3.3 документов или иных доказательств, или - Участник или его законный представитель добровольно отказался от участия в Игре в срок позднее чем за 24 часа до Сеанса Организатор взимает с Пользователя неустойку за отказ от оказания Услуг в размере полной стоимости оплаченных Услуг, которые должны были быть оказаны, в соответствии с пп. 4.9 и 4.10 настоящих Правил, в размере 50% стоимости Сеанса.",
          "3.9. Участник обязан прибыть в место оказания Услуг не позднее чем за 10 минут до начала забронированного Сеанса. При опоздании свыше 10 минут после начала забронированного Сеанса Сеанс отменяется.",
          "3.10. Участник обязан иметь с собой паспорт или иной документ, удостоверяющий личность, а также карточку брони, в случае если бронирование Сеанса осуществлялось через сайт или директ VK.",
          "3.11. В случае если Участник не достиг возраста 18 лет, он обязан прибыть в Место оказания услуг совместно со своим законным представителем или с уполномоченным лицом, являющимся Участником-организатором(см. понятие «Участник-организатор»), становящимся на период игры представителем, несущим полную ответственность за Участие в Игре детей, в возрасте до 18 лет.",
          "3.12 Дети до 10 лет должны находиться в Месте оказания услуг вместе со своими родителями, законным представителем или Участником-организатором(см. Понятие «Участник-организатор»), становящимся на период игры представителем, несущим полную ответственность за Участие в Игре детей, в возрасте до 18 лет. В противном случае, Организатор имеет право отказать в оказании Услуг без возмещения стоимости Услуг.",
        ],
      },
      {
        subTitle: "4. Бронирование и оплата Услуг",
        paragraphs: [
          "4.1. Оказание Услуг по организации Игры возможно только при условии их полной предоплаты в установленном объеме в порядке, определяемом настоящими Правилами.",
          "4.2. При бронировании Сеанса Пользователь оплачивает полную или частичную стоимость участия в Игре для всех Участников. Пользователь несёт полную ответственность за достоверность данных, указываемых при бронировании через Сайт, по телефону, или профиль инстаграм, необходимых для идентификации Пользователя перед началом Сеанса.",
          "4.3 При частичной оплате Сеанса Участник доплачивает недостающую сумму в размере Стоимости сеанса за вычетом предварительно оплаченной суммы в Месте оказания услуг.",
          "4.4. Бронирование Сеанса может быть отменено не позднее чем за 24 часа до времени его проведения с полным возвратом стоимости участия в Игре, за вычетом стоимости расходов Организатора. В случае если отмена бронирования Сеанса осуществляется в более поздний срок Организатор взимает с Пользователя неустойку в размере 100% оплаченной стоимости бронирования.",
          "4.5. Пользователь вправе уступить свое право на участие в Игре, которое было полностью или частично оплачено, иному лицу, соответствующему критериям Участника согласно настоящим Правилам. Для этого Пользователь должен связаться с Организатором способами, указанными на Сайте или по указанным на Сайте контактным данным Организатора, и получить подтверждение от Организатора о том, что для участия в Сеансе предполагается иной Участник.",
          "4.6. Стоимость участия в Игре на доступный для бронирования Сеанс указывается на Сайте и включает в себя стоимость участия для всех Участников в количестве согласно п.2.4 настоящих Правил.",
          "4.7. Оплата стоимости Услуг может осуществляться Пользователем или иным лицом по поручению Пользователя. При этом Сеанс бронируется на Пользователя, данные которого были указаны при регистрации на Сайте.",
          "4.8. Возврат стоимости Услуг согласно положениям настоящих Правил осуществляется по ставкам стоимости Услуг, действовавшим на момент их фактической оплаты. Возврат стоимости осуществляется лицу, фактически оплатившему Услуги, способом, которым была произведена оплата в течение 10 (десяти) дней с даты подачи уполномоченным лицом соответствующего заявления в письменной форме в адрес Организатора.",
          "4.9. Для осуществления возврата стоимости Пользователь и/или Участник предъявляет паспорт, а также сообщает реквизиты электронного билета(карточки брони)",
          "4.10. Бронирование Сеанса может быть перенесено на другую свободную дату, включая более раннюю, не позднее чем за 24 часа до времени первоначально забронированного времени проведения Сеанса. При переносе сеанса менее чем за 24 часа с Участника взимается плата в размере 2000 рублей. Перенос Сеанса осуществляется только после полной оплаты выставленного счёта.",
        ],
      },
      {
        subTitle: "5. Условия использования материалов и сервисов Сайта",
        paragraphs: [
          "5.1. Пользователь обязан внимательно ознакомиться с настоящими Правилами.",
          "5.2. Организатор вправе посылать Пользователям на указанные в Профиле электронный почтовый адрес (e-mail) и телефонный номер сообщения информационного и рекламного характера (рассылки). Пользователь дает свое согласие на получение рассылок путем проставления в своем Профиле отметки о согласии (галочки) в специальном поле напротив фразы «Я согласен получать информационные сообщения от Организатора». Пользователь вправе отказаться от получения рассылок путем снятия галочки с вышеуказанного специального поля.",
          "5.3. Организатор в одностороннем порядке вправе устанавливать ограничения в использовании материалов и сервисов Сайта как для всех Пользователей, так и для отдельных категорий Пользователей.",
          "5.4. Пользователь не имеет права использовать любые устройства, программы, процедуры, алгоритмы и методы, автоматические устройства или эквивалентные ручные процессы для доступа, приобретения, копирования или отслеживания содержания Сайта.",
          "5.5. Пользователь не имеет права нарушать систему безопасности или аутентификации на Сайте или в любой сети, относящейся к Сайту или Организатору.",
          "5.6. Пользователь не имеет права использовать Сайт и его содержание в любых целях, запрещенных законодательством Российской Федерации, а также подстрекать к любой незаконной деятельности или другой деятельности, нарушающей права Организатора и/или других лиц.",
          "5.7. Все объекты, доступные при использовании Сайта, в том числе элементы дизайна, текст, графические изображения, иллюстрации, видео, программы для ЭВМ, базы данных, музыка, звуки и другие объекты, размещенные на Сайте (далее совместно — «Контент»), являются объектами исключительных прав Организатора и других правообладателей. Любое использование Контента без согласия его правообладателей строго запрещено.",
          "5.8. Для того чтобы воспользоваться функциональными сервисами Сайта Пользователь обязан пройти процедуру регистрации (создания Профиля) на Сайте.",
          "5.9. При регистрации (создании Профиля) Пользователь вводит в специальную форму регистрации свое имя, адрес электронной почты (e-mail), номер мобильного телефона, а также самостоятельно придумывает пароль для доступа к учетной записи.",
          "5.10. Пользователь самостоятельно следит за сохранностью данных доступа к своему Профилю, а также несет ответственность за безопасность выбранных им средств для доступа к своему Профилю. Пользователь самостоятельно несет ответственность за все действия и бездействия в рамках или с использованием сервисов Сайта под своим Профилем, в том числе при добровольной передаче Пользователем данных для доступа к Профилю третьим лицам на любых условиях (включая договоры и/или соглашения). Любое действие, произведенное под Профилем Пользователя, считается произведенным самим Пользователем, за исключением случаев, когда Пользователь уведомил Организатора о несанкционированном доступе к своему Профилю и/или о любом нарушении (подозрениях о нарушении) конфиденциальности своих средств доступа к Профилю.",
          "5.11. Персональная информация, предоставляемая Пользователем, содержащаяся в Профиле, хранится и обрабатывается Организатором в соответствии с положениями раздела 6 настоящих Правил. 6. Персональные данные и политика конфиденциальности: См. соответствующий раздел Сайта.",
        ],
      },
    ],
  },
  ///

  {
    title: "Политика Конфиденциальности",
    rules: [
      {
        subTitle: "Понятия, использующиеся в настоящем документе:",
        paragraphs: [
          "«Игра» — развлекательное игровое мероприятие, начинающееся в указанное в расписании Организатора время суток и проходящее в течение определенного непрерывного промежутка времени в соответствии с определенным Организатором сценарием и условиями, которые включают в себя в том числе соблюдение Правил.",
          "«Место оказания услуг» — локация виртуальной реальности, выбранная Пользователем.",
          "«Организатор» — юридическое лицо, являющееся исполнителем, организующим оказание Услуг Пользователю.",
          "«Персональные данные» — любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту персональных данных).",
          "«Пользователь» — физическое лицо, осуществившее регистрацию на Игру в соответствии с условиями настоящего Соглашения.",
          "«Профиль» — комбинация из электронной почты/мобильного телефонного номера и пароля для доступа к персональной странице Пользователя в рамках Сайта, позволяющая получать доступ к сервисам Сайта.",
          "«Сайт» — ресурс, размещенный в сети Интернет по адресу anvio.com, посредством которого обеспечивается предоставление информации об Услугах. Сайт дополнительно предоставляет Пользователю возможность через Интернет взаимодействовать с системой бронирования Игры на желаемое время (Сеанс), включая возможность получить имеющиеся описания, изображения, наличие и условия, а также стоимость бронирования Сеанса.",
          "«Услуга», «Услуги» — комплекс мероприятий, осуществляемых Организатором при проведении Игры, а также иных сопутствующих мероприятий в соответствии с поручением Пользователя, Участника (его законного представителя) или иного лица, желающего принять участие в Игре лично или обеспечить участие в Игре иного лица (лиц).",
          "«Участник» — физическое лицо, являющееся получателем Услуги (Услуг) по участию в Игре.",
          "1. Внося данные для регистрации (создавая Профиль и/или указывая данные для бронирования Услуги) на Сайте, Пользователь предоставляет Организатору информацию, составляющую персональные данные Пользователя, и дает свое согласие на обработку Организатором такой персональной информации, в том числе ее передачу третьим лицам. В случае если Пользователь не желает, чтобы Организатор продолжал обработку его персональных данных, он должен удалить свой Профиль или обратиться к Организатору с письменным заявлением в свободной форме.",
          "2. Участник полностью соглашается и разрешает Организатору обнародование и дальнейшее использование в рекламных целях изображений Пользователя (в том числе фотографий и видеосъемки с его участием), в том числе, если его изображение получено при съемке, которая проводилась в Месте оказания услуг, местах, открытых для свободного посещения, или на публичных мероприятиях.",
          "3. Организатор вправе обрабатывать персональные данные следующим образом, если не указано иное: собирать, накапливать, хранить, систематизировать, уточнять, использовать, обезличивать, передавать данную информацию третьим лицам.",
          "4. Организатор вправе использовать персональные данные Пользователей и Участников для связи с Пользователем и/или Участником.",
          "5. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.",
          "6. Организатор вправе раскрыть любую собранную о Пользователе или Участнике информацию, если раскрытие необходимо в связи с расследованием или жалобой в отношении неправомерного использования Сайта либо для установления (идентификации) Пользователя или Участника соответственно, которые могут нарушать или вмешиваться в права Организатора или в права других Пользователей.",
          "7. Персональные данные Пользователя и Участника могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.",
          "8. Организатор совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.",
        ],
      },
      {
        subTitle: "7. Ответственность. Ограничение ответственности",
        paragraphs: [
          "7.1. Пользователь, Участник и его законный представитель самостоятельно оценивают свои способности и возможность участия в Игре. Ответственность за принятое Участником или его законным представителем решения касательно получения Услуг, в том числе по вопросу бронирования Сеанса и/или участия (права на участие) в Игре (включая предоставление подложных документов, подписей или иной недостоверной информации) в любом случае несет Участник и/или его законный представитель.",
          "7.2. До момента бронирования Сеанса или до оплаты стоимости участия в Игре непосредственно в Месте оказания услуг Пользователь, Участник и/или его законные представитель вправе запрашивать у Организатора необходимую информацию, разъяснения и комментарии по любым вопросам, связанным с порядком оказания Услуг, особенностями участия в Игре определенными лицами, иными существенными условия предоставления и получения Услуг.",
          "7.3. Организатор вправе отказать в предоставлении ответов на какие-либо вопросы в соответствии с п.7.2 настоящих Правил, в случае если они не связаны с получением информации Пользователем, Участником или его законным представителем как потребителями, а преследуют цель сбора информации о деятельности Организатора как предпринимателя и такая информации не подлежит в обязательном порядке раскрытию на основании положений применимого законодательства.",
          "7.4. Все действия, предпринимаемые Участниками в Игре, осуществляются ими самостоятельно под полную ответственность самих Участников или уполномоченных лиц.",
          "7.5. В случае причинения вреда имуществу Организатора или иных лиц, используемого при проведении Игры, «Участник-организатор» принимает на себя ответственность по организации незамедлительной компенсации стоимости такого имущества.",
          "7.6. Все материалы и сервисы Сайта предоставляются в исходном виде, без гарантий полноты или своевременности и без иных явно выраженных или подразумеваемых гарантий. Доступ к Сайту, а также использование его материалов и сервисов осуществляются исключительно по усмотрению Пользователя и на его риск.",
          "7.7. Организатор не несет никакой ответственности за любые ошибки, опечатки и неточности, которые могут быть обнаружены в материалах, содержащихся на Сайте.",
          "7.8. Некоторые ссылки на Сайте ведут к ресурсам, расположенным на сторонних сайтах. Данные ссылки размещены для удобства Пользователей и не означают, что Организатор одобряет содержание других сайтов или каким-либо образом поощряет действия их владельцев. Кроме этого, Организатор не несет никакой ответственности за доступность этих ресурсов и за их контент. Это заявление относится ко всем ссылкам, представленным на Сайте, и материалам всех веб-сайтов, доступных через баннеры и ссылки на Сайте.",
          "7.9. Организатор не несет ответственности за возможные противоправные действия Пользователя или Участника относительно третьих лиц, либо третьих лиц относительно Пользователя или Участника при оказании Услуг, а также в результате их оказания.",
          "7.10. Сайт может использовать идентификационные файлы cookies для хранения личной и общей информации о Пользователях. «Cookies» представляют собой небольшие текстовые файлы, которые могут использоваться интернет-сайтом для опознавания повторных посетителей, упрощения доступа и использования посетителем сайта, а также отслеживания сайтом обращений посетителей и сбора общей информации для улучшения содержания. Пройдя процедуру регистрации, Пользователь выражаете свое согласие на использование Сайтом cookies.",
          "7.11. Организатор не несет ответственности за ущерб, убытки или расходы (реальные либо возможные), возникшие в связи с Сайтом, его использованием или невозможностью использования, а также за неполное, неточное, некорректное указание Пользователем своих данных при создании Профиля.",
          "7.12. Организатор не несет ответственности за задержки или сбои в процессе оказания Услуг или любой их части, возникшие вследствие непреодолимой силы, а также любого случая неполадок в телекоммуникационных, компьютерных, электрических и иных смежных системах.",
          "7.13. Организатор не несет ответственности за действия систем переводов, банков, платежных систем и за задержки, связанные с их работой, в случае если оплата Услуг осуществляется при участии указанных систем и структур.",
          "7.14. При возникновении любых сомнений в отношении того, кто является надлежащим получателем Услуг, окончательное решение принимает Организатор.",
          "7.15. Организатор не участвует во взаимоотношениях Пользователя и/или Участника и/или его законного представителя и/или любого иного лица, которое осуществило оплату, однако по причинам, не зависящим от Организатора, не приняло в Игре и/или не получило иные Услуги, уступило свои права на участие в Игре или иным способом выразило волю отказа от участия в Игре или уступке своих прав на участие в Игре иному лицу. При возникновении сомнений в отношении лица, управомоченного на участие в Игре, Организатор вправе руководствоваться тем, что управомоченным лицом является лицо, предъявившее электронный билет(карточку брони), и при необходимости возврата стоимости Услуг в оговоренных настоящими Правилами случаях Организатор вправе возвратить соответствующую стоимость именно данному лицу (его законному представителю).",
        ],
      },
    ],
  },
];

const Legal = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {LEGAL_DATA.map((data, idx) => {
        const { title, rules } = data;
        return (
          <div key={idx}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <div>
              {rules.map((rule, ruleId) => {
                const { subTitle, paragraphs } = rule;
                return (
                  <div key={ruleId}>
                    <Typography variant="h5" gutterBottom>
                      {subTitle}
                    </Typography>
                    <div>
                      {paragraphs.map((paragraph, paragraphId) => {
                        return (
                          <div key={paragraphId}>
                            <Typography gutterBottom>{paragraph}</Typography>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Legal;
