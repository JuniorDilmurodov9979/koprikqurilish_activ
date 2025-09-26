import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import Pagenation from "../../../components/pagenation/Pagenation";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import NewspaperCard from "../../../components/newspaperCard/NewspaperCard";
import { NewspapersWrapper } from "./NewspapersWrapper";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";

const Newspapers = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [newspaper, setNewsPaper] = useState([])
  const getNewsPaper =()=> {
    http.get(`find/all/newspapers?page=${count}&limit=9&language=${langLocal()}`).then(res=>{
      setNewsPaper(res?.data?.items)
      setNumber(res?.data?.meta?.totalPages)
    })
  }
  useEffect(()=>{
    getNewsPaper()
  },[count])
  return (
    <>
      <Header />
      <BackGroundColor>
        <>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu3.title") },
                { link: t("menus.menu3.title5") },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <LargeText color="true">{t("menus.menu3.title5")}</LargeText>
              <NewspapersWrapper>
                {
                  newspaper.map((item,index)=>{
                    return <NewspaperCard item={item} key={index}/>
                  })
                }
              </NewspapersWrapper>
            </PageTwoMenu>
          </div>
          <Pagenation number={number} setcount={setcount} />
        </>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Newspapers;
