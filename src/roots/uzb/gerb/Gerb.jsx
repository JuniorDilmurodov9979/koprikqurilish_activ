import { useTranslation } from "react-i18next";
import { GERB } from "../../../assets/imags";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { UzbWrapper } from "../UzbWrapper";

const Gerb = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <BackGroundColor>
        <div className="container ">
          <LargeText color={true}>{t("gerb")}</LargeText>
          <UzbWrapper>
            <img src={GERB} alt="" />
            {localStorage.getItem("i18nextLng") === "UZ" ? (
              <p>
                “O’zbekiston Respublikasi Davlat gerbi to’g’risida”gi Qonun
                1992-yil 2-iyulda O’zbekiston Respublikasi Oliy Kengashining
                X-sessiyasida qabul qilingan.
                <br /> <br />
                O’zbekiston Respublikasining Davlat gerbi gullagan vodiy uzra
                charaqlab turgan quyosh tasviridan hamda so’l tomonida bug’doy
                boshoqlari, o’ng tomonida ochilgan paxta chanoqlari suvrati
                tushirilgan chambardan iborat.
                <br /> <br />
                Gerbning yuqori qismida respublika jipsligining ramzi sifatida
                sakkiz qirrali yulduz tasvirlangan: sakkiz qirra ichida
                joylashgan yarim oy va yulduz musulmonlarning qutlug’ ramzidir.{" "}
                <br /> <br />
                Gerbning markazida himmat, olijanoblik va fidoyilik timsoli
                bo’lgan afsonaviy Xumo qushi qanotlarini yozib turibdi. Ushbu
                ramz va timsollar xalqimizning tinchlik, yaxshilik, baxt-saodat,
                farovonlik yo’lidagi orzu-umidlarini ifodalaydi.
                <br /> <br />
                Gerbning pastki qismida respublika Davlat bayrog’ini ifoda
                etuvchi chambar lentasining bandiga “O’zbekiston” deb yozib
                qo’yilgan. <br /> <br />
              </p>
            ) : localStorage.getItem("i18nextLng") !== "RU" ? (
              <p>
                The law about “The State Emblem” was approved by the 10-th
                session of the Supreme Council of the Republic of Uzbekistan on
                July 2, 1992. <br />
                <br />
                The new state emblem of the Republic of Uzbekistan was created
                to reflect the many centuries of experience of the Uzbek people.{" "}
                <br />
                <br />
                The state emblem of the Republic presents the image of the
                rising sun over a flourishing valley. Two rivers run through the
                valley, representing the Syrdarya and Amudarya. The emblem is
                bordered by wheat on the right side and branches of cotton with
                opened cotton bolls on the left side. <br />
                <br />
                The eight-angle star is at the top of the emblem, symbolizing
                the unity and confirmation of the republic. The crescent and
                star inside the eight-pointed star are the sacred symbols of
                Islam. The mythical bird Semurg with outstretched wings is
                placed in the center of the emblem as the symbol of the national
                Renaissance. The entire composition aims to express to desire of
                the Uzbek people for peace, happiness and prosperity. At the
                bottom of the emblem inscribed the word “Uzbekistan” written in
                Uzbek on a ribbon in the national colors of the flag.
              </p>
            ) : (
              <p>
                Закон “О Государственном гербе Республики Узбекистан” принят 2
                июля 1992 года на десятой сессии Верховного Совета Республики
                Узбекистан. <br />
                <br />В центре герба изображена птица Хумо с раскрытыми крыльями
                – символ счастья и свободолюбия. Наш великий предок Алишер Навои
                характеризовал птицу Хумо как самое доброе из всех живых
                существ. <br />
                <br />В верхней части герба находится восьмигранник,
                символизирующий знак утверждения республики, внутри -полумесяц
                со звездой. <br />
                <br />
                Изображение солнца – пожелание, чтобы путь нашего государства
                был озарен ярким светом. Одновременно оно указывает на
                уникальные природно-климатические условия республики.
                <br />
                <br />
                Колосья – символ хлеба насущного, стебли с раскрывающимися
                коробочками хлопка – главное богатство нашей солнечной Земли,
                прославившее ее во всем мире. Колосья и коробочки хлопка,
                перевитые лентой Государственного флага, означают консолидацию
                народов, проживающих в республике.
              </p>
            )}
          </UzbWrapper>
        </div>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Gerb;
