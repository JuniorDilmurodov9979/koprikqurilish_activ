import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Header from "../../../containers/header/Header";
import Footer from "../../../containers/footer/Footer";
import { UzbWrapper } from "../UzbWrapper";
import { MADHIYA } from "../../../assets/imags";
import { useTranslation } from "react-i18next";

const Music = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <BackGroundColor>
        <div className="container">
          <LargeText color={true}>{t("madhiya")}</LargeText>
          <UzbWrapper>
            <audio src={MADHIYA} className="w-3/4 mx-auto" controls />
            {localStorage.getItem("i18nextLng") === "UZ" ? (
              <p>
                “O’zbekiston Respublikasining davlat madhiyasi to’g’risida”gi
                Qonun 1992-yil 10-dekabrda O’zbekiston Respublikasi Oliy
                Kengashining o’n birinchi sessiyasida qabul qilingan.
                <br /> <br />
                Mutal Burhonov musiqasi
                <br />
                Abdulla Oripov so’zi
                <br /> <br />
                <div className=" text-center">
                  Serquyosh hur o’lkam, elga baxt, najot, <br />
                  Sen o’zing do’stlarga yo’ldosh, mehribon! <br />
                  Yashnagay to abad ilmu fan, ijod, <br />
                  Shuhrating porlasin toki bor jahon! <br />
                  <br />
                  Oltin bu vodiylar – jon O’zbekiston, <br />
                  Ajdodlar mardona ruhi senga yor! <br />
                  Ulug’ xalq qudrati jo’sh urgan zamon, <br />
                  Olamni mahliyo aylagan diyor! <br />
                  <br />
                  Bag’ri keng o’zbekning o’chmas iymoni, <br />
                  Erkin, yosh avlodlar senga zo’r qanot! <br />
                  Istiqlol mash’ali tinchlik posboni, <br />
                  Xaqsevar, ona yurt, mangu bo’l obod! <br />
                  <br />
                  Oltin bu vodiylar – jon O’zbekiston, <br />
                  Ajdodlar mardona ruhi senga yor! <br />
                  Ulug’ xalq qudrati jo’sh urgan zamon, <br />
                  Olamni mahliyo aylagan diyor! <br />
                  <br />
                </div>
              </p>
            ) : localStorage.getItem("i18nextLng") !== "RU" ? (
              <p>
                The law “On national anthem of the Republic of Uzbekistan” was
                adopted on the December 10, 1992 at the 11th session of the
                Supreme Council of Uzbekistan.
                <br /> <br />
                Poem by A. Aripov
                <br />
                Music by M. Burkhanov
                <br /> <br />
                <div className=" text-center">
                  My country, sunny and free, salvation to your people, <br />
                  You are a warmhearted companion to the friends <br />
                  Flourish eternally with knowledge and invention, <br />
                  May your fame shine as long as the world exists! <br />
                  <br />
                  These golden valleys-dear Uzbekistan, <br />
                  Manly spirit of ancestors is companion to you! <br />
                  When the great power of people became exuberant <br />
                  You are the country that amazes the world! <br />
                  <br />
                  Belief of generous Uzbek does not die out, <br />
                  Free, young children are a strong wing for you! <br />
                  The torch of independence, guardian of peace, <br />
                  Just motherland be eternally prosperous! <br />
                  <br />
                  These golden valleys-dear Uzbekistan, <br />
                  Manly spirit of ancestors is companion to you! <br />
                  When the great power of people became exuberant <br />
                  You are the country that amazes the world! <br />
                  <br />
                </div>
              </p>
            ) : (
              <p>
                Закон “О Государственном гимне Республики Узбекистан” принят 10
                декабря 1992 года на одиннадцатой сессии Верховного Совета
                Республики Узбекистан.
                <br /> <br />
                Музыка – Мутала Бурханова
                <br />
                Слова – Абдуллы Орипова
                <br /> <br />
                <div className=" text-center">
                  Сeрқуёш ҳур ўлкам, элга баxт, нажoт, <br />
                  Сeн ўзинг дўстларга йўлдoш, мeҳрибoн! <br />
                  Яшнагай тo абад илму фан, ижoд, <br />
                  Шуҳратинг пoрласин тoки бoр жаҳoн! <br />
                  <br />
                  Oлтин бу вoдийлар – жoн Ўзбeкистoн, <br />
                  Аждoдлар мардoна руҳи сeнга ёр! <br />
                  Улуғ xалқ қудрати жўш урган замoн, <br />
                  Oламни маҳлиё айлаган диёр! <br />
                  <br />
                  Бағри кeнг ўзбeкнинг ўчмас иймoни, <br />
                  Эркин, ёш авлoдлар сeнга зўр қанoт! <br />
                  Истиқлoл машъали тинчлик пoсбoни, <br />
                  Xақсeвар, oна юрт, мангу бўл oбoд! <br />
                  <br />
                  Oлтин бу вoдийлар – жoн Ўзбeкистoн, <br />
                  Аждoдлар мардoна руҳи сeнга ёр! <br />
                  Улуғ xалқ қудрати жўш урган замoн, <br />
                  Oламни маҳлиё айлаган диёр! <br />
                  <br />
                </div>
              </p>
            )}
          </UzbWrapper>
        </div>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Music;
