import { useTranslation } from "react-i18next";
import { FLAG } from "../../../assets/imags";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { UzbWrapper } from "../UzbWrapper";

const Bayrog = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <BackGroundColor>
        <div className="container">
          <LargeText color={true}>{t("bayrog")}</LargeText>
          <UzbWrapper>
            <img src={FLAG} alt="" />
            {localStorage.getItem("i18nextLng") === "UZ" ? (
              <p>
                “O’zbekiston Respublikasi Davlat bayrog’i to’g’risida”gi qonun
                1991-yil 18-noyabrda O’zbekiston Respublikasi Oliy Kengashining
                navbatdan tashqari o’tkazilgan VII sessiyasida qabul qilingan.{" "}
                <br /> <br />
                Davlat bayrog’i va uning ramzi bugungi O’zbekiston sarhadida
                qadimda mavjud bo’lgan davlatlar bilan tarixan bog’liqligini
                anglatadi hamda respublikaning milliy-madaniy an’analarini
                o’zida mujassamlashtiradi. <br /> <br />
                Bayroqdagi moviy rang tiriklik mazmuni aks etgan mangu osmon va
                obihayot ramzi. Timsollar tilida bu – yaxshilikni,
                donishmandlikni, halollikni, shon-shuhrat va sadoqatni
                bildiradi. Binobarin, Amir Temur davlati bayrog’ining rangi ham
                moviy rangda edi. <br /> <br />
                Bayroqdagi oq rang – muqaddas tinchlik ramzi bo’lib, u kun
                charog’onligi va koinot yoritkichlari bilan uyg’unlashib ketadi.
                Oq rang – poklik, beg’uborlik, soflikni, orzu va hayollar
                tozaligi, ichki go’zallikka intilishning timsoli. <br /> <br />
                <b className="text-green-900">Yashil rang</b> – tabiatning
                yangilanish ramzi. U ko’pgina xalqlarda navqironlik, umid va
                shodumonlik timsoli hisoblanadi. <br /> <br />
                <b className="text-red-900">Qizil chiziqlar</b> – vujudimizda
                jo’shib oqayotgan hayotiy qudrat irmoqlarini anglatadi. <br />{" "}
                <br />
                Navqiron yarim oy tasviri bizning tarixiy an’analarimiz bilan
                bog’liq. Ayni paytda u qo’lga kiritilgan mustaqilligimiz ramzi
                ham. <br /> <br />
                Yulduzlar barcha uchun ruhoniy, ilohiy timsol sanalgan.
                O’zbekiston Respublikasi Davlat bayrog’idagi 12 yulduz tasviri
                ham tarixiy an’analarimiz, qadimgi yilnomamizga bevosita
                aloqador. Bizning o’n ikki yulduzga bo’lgan e’tiborimiz
                O’zbekiston sarhadidagi qadimgi davlatlar ilmiy tafakkurida
                nujum ilmi taraqqiy etganligi bilan ham izohlanadi. <br />{" "}
                <br />
                Davlat bayrog’imizdagi 12 yulduz tasvirini o’zbek xalqi
                madaniyatining qadimiyligi, uning komillikka, o’z tuprog’ida
                saodatga intilishi ramzi sifatida tushunish lozim.
              </p>
            ) : localStorage.getItem("i18nextLng") !== "RU" ? (
              <p>
                The law about “The State Flag of the Republic of Uzbekistan” was
                adopted on November 18 in 1991 in the 8th session of the Supreme
                Council of Uzbekistan. <br />
                <br />
                The flag of our country is a symbol of the sovereignty of the
                Republic. The national flag of the Republic represents the
                country internationally when official delegations from
                Uzbekistan visit foreign countries, as well as at conferences,
                world exhibition, and sports competitions. <br />
                <br />
                The national flag of the Republic is a right-angled colored
                cloth of three horizontal stripes: blue, white and green. <br />
                <br />
                Blue is the symbol of the sky and water, which are the main
                source of life. Mainly, blue was the color of the state flag of
                Temur. <br />
                <br />
                White is the traditional symbol of peace and good luck, as Uzbek
                people say “Ok yul”. <br />
                <br />
                <b className="text-green-900">Green</b> is the color of nature
                and new life and good harvest. <br />
                <br />
                Two thin <b className="text-red-900">red</b> stripes symbolize
                the power of life. <br />
                <br />
                There is a new moon, which symbolizes the newly independent
                Republic.
                <br />
                <br />
                There are twelve stars, which stand for spiritual sign. The
                stars also signify the historical traditions of the Uzbek
                people, as well as ancient solar calendar. A particular
                attention to twelve stars in the flag is explained yet by
                another suggestion, that in the states previously existed in the
                territory of modern Uzbekistan the scientific thought as
                “Astrology” had seen its rise. The stars in the Uzbek flag also
                point to the ancient roots of local culture, the aspirations of
                Uzbek people towards perfection and loyalty.
              </p>
            ) : (
              <p>
                Закон “О Государственном флаге Республики Узбекистан” принят 18
                ноября 1991 года на восьмой сессии Верховного Совета Республики
                Узбекистан. <br />
                <br />
                Символика Государственного флага Республики Узбекистан
                продолжает лучшие традиции, свойственные флагам могущественных
                держав, существовавших на территории нашей страны, одновременно
                отражает природные особенности республики, национальную и
                культурную самобытность народа. <br />
                <br />
                Небесно-голубой цвет на флаге – символ голубого неба и чистой
                воды. Лазурный цвет почитаем на Востоке, его избрал когда-то для
                своего флага и великий Амир Тимур. <br />
                <br />
                Белый цвет – символ мира и чистоты. Молодое независимое
                государство должно преодолеть на своем пути высокие перевалы.
                Белый цвет на флаге означает доброе пожелание, чтобы путь был
                чист и светел. <br />
                <br />
                <b className="text-green-900">Зеленый цвет</b> – олицетворение
                благодатной природы. В настоящее время во всем мире ширится
                движение по охране окружающей среды, символом которого тоже
                является зеленый цвет. <br />
                <br />
                <b className="text-red-900">Красные полосы </b> – это жизненные
                силы, пульсирующие в каждом живом существе, символ жизни. <br />
                <br />
                Полумесяц соответствует многовековой традиции народа
                Узбекистана. Полумесяц и звезды – символ безоблачного неба мира.
                На нашем флаге 12 звезд. Число 12 считается знаком совершенства.
              </p>
            )}
          </UzbWrapper>
        </div>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Bayrog;
