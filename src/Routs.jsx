import { useSelector } from "react-redux";
import { BgColor, CSSVariables } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
import AssistantButton from "./components/AI/AssistantButton.jsx";

// Home sahifasini darhol yuklaymiz (birinchi ko'rinadigan sahifa)
import Home from "./roots/home/Home";

// Qolgan barcha sahifalarni lazy qilib yuklaymiz
const News = lazy(() => import("./roots/news/news/News"));
const NewsId = lazy(() => import("./roots/news/newsId/NewsId"));
const Search = lazy(() => import("./roots/search/Search"));
const Bayrog = lazy(() => import("./roots/uzb/bayroq/Bayrog"));
const Gerb = lazy(() => import("./roots/uzb/gerb/Gerb"));
const Music = lazy(() => import("./roots/uzb/madhiya/Music"));
const Qabulxona = lazy(() => import("./roots/qabulxona/Qabulxona"));
const PageNotFound = lazy(() => import("./roots/404/404"));
const Contacts = lazy(() => import("./roots/contacts/Contacts"));
const AboutManagement = lazy(
  () => import("./roots/management/aboutManagement/AboutManagement"),
);
const StatuteManagement = lazy(
  () => import("./roots/management/statuteManagement/StatuteManagement"),
);
const StructureManagment = lazy(
  () => import("./roots/management/structureManagment/StructureManagment"),
);
const LeadershipManagment = lazy(
  () => import("./roots/management/leadershipManagment/LeadershipManagment"),
);
const InspectionManagment = lazy(
  () => import("./roots/management/inspectionManagment/InspectionManagment"),
);
const RequirementsManagement = lazy(
  () =>
    import("./roots/management/requirementsManagement/RequirementsManagement"),
);
const BranchesManagement = lazy(
  () => import("./roots/management/branchesManagement/BranchesManagement"),
);
const Laws = lazy(() => import("./roots/normativeDocuments/laws/Laws"));
const Decisions = lazy(
  () => import("./roots/normativeDocuments/decisions/Decisions"),
);
const Ministers = lazy(
  () => import("./roots/normativeDocuments/ministers/Ministers"),
);
const Departmental = lazy(
  () => import("./roots/normativeDocuments/departmental/Departmental"),
);
const Technical = lazy(
  () => import("./roots/normativeDocuments/technical/Technical"),
);
const Projects = lazy(
  () => import("./roots/normativeDocuments/projects/Projects"),
);
const Manuals = lazy(
  () => import("./roots/normativeDocuments/manuals/Manuals"),
);
const Comments = lazy(
  () => import("./roots/normativeDocuments/comments/Comments"),
);
const Power = lazy(() => import("./roots/normativeDocuments/power/Power"));
const Demonstrative = lazy(
  () => import("./roots/normativeDocuments/demonstrative/Demonstrative"),
);
const PhotoGallery = lazy(
  () => import("./roots/pressCenter/photoGallery/PhotoGallery"),
);
const VedioGalery = lazy(() => import("./roots/pressCenter/vedio/VedioGalery"));
const AskedGalery = lazy(() => import("./roots/pressCenter/asked/AskedGalery"));
const StateGalery = lazy(() => import("./roots/pressCenter/state/StateGalery"));
const Newspapers = lazy(
  () => import("./roots/pressCenter/newspapers/Newspapers"),
);
const Magazines = lazy(() => import("./roots/pressCenter/magazines/Magazines"));
const SiteMap = lazy(() => import("./roots/siteMap/SiteMap"));
const PhotoGalleryId = lazy(
  () => import("./roots/pressCenter/photoGallery/PhotoGalleryId"),
);
const ProjectId = lazy(() => import("./roots/projectId/ProjectId"));

const CorruptionAppeals = lazy(
  () => import("./roots/Corruption/CorruptionAppeals/CorruptionAppeals"),
);
const CorruptionDocs = lazy(
  () => import("./roots/Corruption/CorruptionDocs/CorruptionDocs"),
);
const CorruptionMonitoring = lazy(
  () => import("./roots/Corruption/CorruptionMonitoring/CorruptionMonitoring"),
);
const CorruptionDetails = lazy(
  () => import("./roots/Corruption/CorruptionDetails/CorruptionDetails"),
);
const CorruptionHisobot = lazy(
  () => import("./roots/Corruption/CorruptionHisobot.jsx"),
);

const JamiyatHaqida = lazy(
  () => import("./roots/korporative/JamiyatHaqida/JamiyatHaqida.jsx"),
);
const BoshqaruvNazorat = lazy(
  () => import("./roots/korporative/BoshqaruvNazorat/BoshqaruvNazorat.jsx"),
);
const Ichkihujjatlar = lazy(
  () => import("./roots/korporative/Ichkihujjatlar/Ichkihujjatlar.jsx"),
);
const Aksiyadorlarga = lazy(
  () => import("./roots/korporative/Aksiyadorlarga/Aksiyadorlarga.jsx"),
);
const TashkiliyTuzulma = lazy(
  () =>
    import("./roots/korporative/OchiqMalumotlar/Tuzulma/TashkiliyTuzulma.jsx"),
);
const JamiyatUstavi = lazy(
  () =>
    import("./roots/korporative/OchiqMalumotlar/JamiyatUstavi/JamiyatUstavi.jsx"),
);
const AuditXulosasi = lazy(
  () =>
    import("./roots/korporative/OchiqMalumotlar/AudiyXulosasi/AuditXulosasi.jsx"),
);
const OchiqMalumotlar = lazy(
  () => import("./roots/korporative/OchiqMalumotlar/OchiqMalumotlar.jsx"),
);
const BiznesReja = lazy(
  () => import("./roots/korporative/OchiqMalumotlar/BiznesReja/BiznesReja.jsx"),
);
const IchkiAudit = lazy(
  () =>
    import("./roots/korporative/BoshqaruvNazorat/IchkiAudit/IchkiAudit.jsx"),
);
const IjroiyaOrgani = lazy(
  () =>
    import("./roots/korporative/BoshqaruvNazorat/IjroiyaOrgani/IjroiyaOrgani.jsx"),
);
const KuzatuvKengashi = lazy(
  () =>
    import("./roots/korporative/BoshqaruvNazorat/KuzatuvKengashi/KuzatuvKengashi.jsx"),
);
const Qomitalar = lazy(
  () => import("./roots/korporative/BoshqaruvNazorat/Qomitalar/Qomitalar.jsx"),
);
const BoshqaruvKodeksi = lazy(
  () =>
    import("./roots/korporative/Ichkihujjatlar/BoshqaruvKodeksi/BoshqaruvKodeksi.jsx"),
);
const IchkiNizomlar = lazy(
  () =>
    import("./roots/korporative/Ichkihujjatlar/IchkiNizomlar/IchkiNizomlar.jsx"),
);
const UstavFondi = lazy(
  () => import("./roots/korporative/Aksiyadorlarga/UstavFondi/UstavFondi.jsx"),
);
const Afillangan = lazy(
  () => import("./roots/korporative/Aksiyadorlarga/Afillangan/Afillangan.jsx"),
);
const AksiyadorlarRoyhati = lazy(
  () =>
    import("./roots/korporative/Aksiyadorlarga/AksiyadorlarRoyhati/AksiyadorlarRoyhati.jsx"),
);
const AksiyadorlarYigilishi = lazy(
  () =>
    import("./roots/korporative/Aksiyadorlarga/AksiyadorlarYigilishi/AksiyadorlarYigilishi.jsx"),
);
const Komplaens = lazy(
  () => import("./roots/korporative/Komplaens/Komplaens.jsx"),
);

const VacancyManagement = lazy(
  () => import("./components/Vacancy/VacancyManagement.jsx"),
);
const VacancyDetails = lazy(
  () => import("./components/Vacancy/VacancyDetails.jsx"),
);
const Texnika = lazy(() => import("./components/Texnika/Texnika.jsx"));
const TexnikaSinglePage = lazy(
  () => import("./components/Texnika/TexnikaSinglePage.jsx"),
);
const InProgressPage = lazy(
  () => import("./components/InProgressPage/InProgressPage.jsx"),
);
const Laboratoriya = lazy(
  () => import("./roots/laboratoriya/Laboratoriya.jsx"),
);

const Routs = () => {
  const color = useSelector((store) => store.darkmode);
  const [isloader, setisloader] = useState(true);
  useEffect(() => {
    setTimeout(() => setisloader(false), 2500);
  }, []);
  if (isloader) return <Loader />;
  return (
    <CSSVariables color={color.color}>
      <BgColor faceColor={color.faceColor} zoom={color.zoom}>
        <Suspense fallback={<Loader />}>
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
              <Route
                path="/corruption/appeals"
                element={<CorruptionAppeals />}
              />
              <Route
                path="/corruption/documents"
                element={<CorruptionDocs />}
              />
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
              <Route
                path="/corruption/hisobot"
                element={<CorruptionHisobot />}
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
              <Route
                path="/corporativ/documents"
                element={<OchiqMalumotlar />}
              />
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
              <Route
                path="/Normative-documents/manuals"
                element={<Manuals />}
              />
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

            {/* xizmatlar */}
            <>
              <Route path="/xizmatlar/texnika" element={<Texnika />} />
              <Route
                path="/xizmatlar/texnika/:id"
                element={<TexnikaSinglePage />}
              />
              <Route
                path="/xizmatlar/laboratoriya"
                element={<Laboratoriya />}
              />
              <Route path="/xizmatlar/loyiha" element={<InProgressPage />} />
            </>

            {/* virtual page */}
            <>
              <Route path="/virtual" element={<Qabulxona />} />
            </>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BgColor>
      <AssistantButton />
    </CSSVariables>
  );
};

export default Routs;
