import { useSelector } from "react-redux";
import { BgColor, CSSVariables } from "./GlobalStyle";
import Home from "./roots/home/Home";
import { Route, Routes } from "react-router-dom";
import News from "./roots/news/news/News";
import NewsId from "./roots/news/newsId/NewsId";
import Search from "./roots/search/Search";
import Bayrog from "./roots/uzb/bayroq/Bayrog";
import Gerb from "./roots/uzb/gerb/Gerb";
import Music from "./roots/uzb/madhiya/Music";
import Qabulxona from "./roots/qabulxona/Qabulxona";
import PageNotFound from "./roots/404/404";
import Contacts from "./roots/contacts/Contacts";
import AboutManagement from "./roots/management/aboutManagement/AboutManagement";
import StatuteManagement from "./roots/management/statuteManagement/StatuteManagement";
import StructureManagment from "./roots/management/structureManagment/StructureManagment";
import LeadershipManagment from "./roots/management/leadershipManagment/LeadershipManagment";
import InspectionManagment from "./roots/management/inspectionManagment/InspectionManagment";
import RequirementsManagement from "./roots/management/requirementsManagement/RequirementsManagement";
import BranchesManagement from "./roots/management/branchesManagement/BranchesManagement";
import Laws from "./roots/normativeDocuments/laws/Laws";
import Decisions from "./roots/normativeDocuments/decisions/Decisions";
import Ministers from "./roots/normativeDocuments/ministers/Ministers";
import Departmental from "./roots/normativeDocuments/departmental/Departmental";
import Technical from "./roots/normativeDocuments/technical/Technical";
import Projects from "./roots/normativeDocuments/projects/Projects";
import Manuals from "./roots/normativeDocuments/manuals/Manuals";
import Comments from "./roots/normativeDocuments/comments/Comments";
import Power from "./roots/normativeDocuments/power/Power";
import Demonstrative from "./roots/normativeDocuments/demonstrative/Demonstrative";
import PhotoGallery from "./roots/pressCenter/photoGallery/PhotoGallery";
import VedioGalery from "./roots/pressCenter/vedio/VedioGalery";
import AskedGalery from "./roots/pressCenter/asked/AskedGalery";
import StateGalery from "./roots/pressCenter/state/StateGalery";
import Newspapers from "./roots/pressCenter/newspapers/Newspapers";
import Magazines from "./roots/pressCenter/magazines/Magazines";
import SiteMap from "./roots/siteMap/SiteMap";
import PhotoGalleryId from "./roots/pressCenter/photoGallery/PhotoGalleryId";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import ProjectId from "./roots/projectId/ProjectId";

import CorruptionAppeals from "./roots/Corruption/CorruptionAppeals/CorruptionAppeals";
import CorruptionDocs from "./roots/Corruption/CorruptionDocs/CorruptionDocs";
import CorruptionMonitoring from "./roots/Corruption/CorruptionMonitoring/CorruptionMonitoring";
import CorruptionDetails from "./roots/Corruption/CorruptionDetails/CorruptionDetails";
import JamiyatHaqida from "./roots/korporative/JamiyatHaqida/JamiyatHaqida.jsx";
import BoshqaruvNazorat from "./roots/korporative/BoshqaruvNazorat/BoshqaruvNazorat.jsx";
import Ichkihujjatlar from "./roots/korporative/Ichkihujjatlar/Ichkihujjatlar.jsx";
import Aksiyadorlarga from "./roots/korporative/Aksiyadorlarga/Aksiyadorlarga.jsx";
import TashkiliyTuzulma from "./roots/korporative/OchiqMalumotlar/Tuzulma/TashkiliyTuzulma.jsx";
import JamiyatUstavi from "./roots/korporative/OchiqMalumotlar/JamiyatUstavi/JamiyatUstavi.jsx";
import AuditXulosasi from "./roots/korporative/OchiqMalumotlar/AudiyXulosasi/AuditXulosasi.jsx";
import OchiqMalumotlar from "./roots/korporative/OchiqMalumotlar/OchiqMalumotlar.jsx";
import BiznesReja from "./roots/korporative/OchiqMalumotlar/BiznesReja/BiznesReja.jsx";
import IchkiAudit from "./roots/korporative/BoshqaruvNazorat/IchkiAudit/IchkiAudit.jsx";
import IjroiyaOrgani from "./roots/korporative/BoshqaruvNazorat/IjroiyaOrgani/IjroiyaOrgani.jsx";
import KuzatuvKengashi from "./roots/korporative/BoshqaruvNazorat/KuzatuvKengashi/KuzatuvKengashi.jsx";
import Qomitalar from "./roots/korporative/BoshqaruvNazorat/Qomitalar/Qomitalar.jsx";
import BoshqaruvKodeksi from "./roots/korporative/Ichkihujjatlar/BoshqaruvKodeksi/BoshqaruvKodeksi.jsx";
import IchkiNizomlar from "./roots/korporative/Ichkihujjatlar/IchkiNizomlar/IchkiNizomlar.jsx";
import UstavFondi from "./roots/korporative/Aksiyadorlarga/UstavFondi/UstavFondi.jsx";
import Afillangan from "./roots/korporative/Aksiyadorlarga/Afillangan/Afillangan.jsx";
import AksiyadorlarRoyhati from "./roots/korporative/Aksiyadorlarga/AksiyadorlarRoyhati/AksiyadorlarRoyhati.jsx";
import AksiyadorlarYigilishi from "./roots/korporative/Aksiyadorlarga/AksiyadorlarYigilishi/AksiyadorlarYigilishi.jsx";
import Komplaens from "./roots/korporative/Komplaens/Komplaens.jsx";
import AssistantButton from "./components/AI/AssistantButton.jsx";
import VacancyManagement from "./components/Vacancy/VacancyManagement.jsx";
import VacancyDetails from "./components/Vacancy/VacancyDetails.jsx";

const Routs = () => {
  const color = useSelector((store) => store.darkmode);
  const [isloader, setisloader] = useState(true);
  useEffect(() => {
    setTimeout(() => setisloader(false), 3000);
  }, []);
  if (isloader) return <Loader />;
  return (
    <CSSVariables color={color.color}>
      <BgColor faceColor={color.faceColor} zoom={color.zoom}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* uzb  */}
          <>
            <Route path="/flag" element={<Bayrog />} />
            <Route path="/gerb" element={<Gerb />} />
            <Route path="/madhiya" element={<Music />} />
            {/* news */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsId />} />
            {/* bizning loyhalar */}
            <Route path="/projects/:id" element={<ProjectId />} />
            {/* search */}
            <Route path="/search/:id" element={<Search />} />
            {/* qabulxona */}
            <Route path="/qabulxona" element={<Qabulxona />} />
            {/* aloqa */}
            <Route path="/contacts" element={<Contacts />} />
            {/* sayt kartasi */}
            <Route path="/site-map" element={<SiteMap />} />
          </>

          {/* korrupsiya bulimi */}
          <>
            <Route path="/corruption/appeals" element={<CorruptionAppeals />} />
            <Route path="/corruption/documents" element={<CorruptionDocs />} />
            <Route
              path="/corruption/monitoring"
              element={<CorruptionMonitoring />}
            />
            <Route
              path="/corruption/monitoring/:id"
              element={<CorruptionDetails />}
            />
            <Route
              path="/corruption/monopoliyaga-qarshi-komplaens"
              element={<Komplaens />}
            />
          </>
          {/*Korporation*/}
          <>
            <Route path="/corporativ/docs" element={<JamiyatHaqida />} />
            <Route
              path="/corporativ/monitoring"
              element={<BoshqaruvNazorat />}
            />
            <Route
              path="/corporativ/monitoring/IchkiAudit"
              element={<IchkiAudit />}
            />
            <Route
              path="/corporativ/monitoring/IjroiyaOrgani"
              element={<IjroiyaOrgani />}
            />
            <Route
              path="/corporativ/monitoring/KuzatuvKengashi"
              element={<KuzatuvKengashi />}
            />
            <Route
              path="/corporativ/monitoring/Qomitalar"
              element={<Qomitalar />}
            />
            <Route path="/corporativ/documents" element={<OchiqMalumotlar />} />
            <Route
              path="/corporativ/documents/TashkiliyTuzulma"
              element={<TashkiliyTuzulma />}
            />
            <Route
              path="/corporativ/documents/jamiyatUstavi"
              element={<JamiyatUstavi />}
            />
            <Route
              path="/corporativ/documents/auditXulosasi"
              element={<AuditXulosasi />}
            />
            <Route
              path="/corporativ/documents/biznesReja"
              element={<BiznesReja />}
            />
            <Route
              path="/corporativ/ichkihujjatlari"
              element={<Ichkihujjatlar />}
            />
            <Route
              path="/corporativ/ichkihujjatlari/boshqaruvKodeksi"
              element={<BoshqaruvKodeksi />}
            />
            <Route
              path="/corporativ/ichkihujjatlari/ichkiNizomlar"
              element={<IchkiNizomlar />}
            />
            <Route
              path="/corporativ/Aksiyadorlarga"
              element={<Aksiyadorlarga />}
            />
            <Route
              path="/corporativ/Aksiyadorlarga/ustavFondi"
              element={<UstavFondi />}
            />
            <Route
              path="/corporativ/Aksiyadorlarga/aliflangan"
              element={<Afillangan />}
            />
            <Route
              path="/corporativ/Aksiyadorlarga/royhat"
              element={<AksiyadorlarRoyhati />}
            />
            <Route
              path="/corporativ/Aksiyadorlarga/umumiyYigilish"
              element={<AksiyadorlarYigilishi />}
            />
          </>

          {/* management-boshqarma */}
          <>
            <Route
              path="/management/about-management"
              element={<AboutManagement />}
            />
            <Route
              path="/management/staute-management"
              element={<StatuteManagement />}
            />
            <Route
              path="/management/structure-management"
              element={<StructureManagment />}
            />
            <Route
              path="/management/leadership-management"
              element={<LeadershipManagment />}
            />
            <Route
              path="/management/inspection-management"
              element={<InspectionManagment />}
            />
            <Route
              path="/management/requirments-management"
              element={<RequirementsManagement />}
            />
            <Route
              path="/management/branch-management"
              element={<BranchesManagement />}
            />
            <Route
              path="/management/vacancy-management"
              element={<VacancyManagement />}
            />
            <Route
              path="/management/vacancy-management/:id"
              element={<VacancyDetails />}
            />
          </>
          {/* Normativ hujjatlar */}
          <>
            <Route path="/Normative-documents/laws" element={<Laws />} />
            <Route
              path="/Normative-documents/decisions"
              element={<Decisions />}
            />
            <Route
              path="/Normative-documents/ministers"
              element={<Ministers />}
            />
            <Route
              path="/Normative-documents/departmental"
              element={<Departmental />}
            />
            <Route
              path="/Normative-documents/technical"
              element={<Technical />}
            />
            <Route
              path="/Normative-documents/projects"
              element={<Projects />}
            />
            <Route path="/Normative-documents/manuals" element={<Manuals />} />
            <Route
              path="/Normative-documents/comments"
              element={<Comments />}
            />
            <Route path="/Normative-documents/power" element={<Power />} />
            <Route
              path="/Normative-documents/demonstrative"
              element={<Demonstrative />}
            />
          </>
          {/* Press-markaz  */}
          <>
            <Route path="/press-center/gallery" element={<PhotoGallery />} />
            <Route
              path="/press-center/gallery/:id"
              element={<PhotoGalleryId />}
            />
            <Route path="/press-center/vedio" element={<VedioGalery />} />
            <Route path="/press-center/asked" element={<AskedGalery />} />
            <Route path="/press-center/state" element={<StateGalery />} />
            <Route path="/press-center/newspapers" element={<Newspapers />} />
            <Route path="/press-center/magazines" element={<Magazines />} />
          </>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BgColor>
      <AssistantButton />
    </CSSVariables>
  );
};

export default Routs;
