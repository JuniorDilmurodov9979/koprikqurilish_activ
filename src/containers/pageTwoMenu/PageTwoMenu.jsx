import { NavLink } from "react-router-dom";
import { PageTwoMenuWrapper } from "./PageTwoMenuWrapper";
import { LargeText } from "../../const/Wrapper";
import { useTranslation } from "react-i18next";

const PageTwoMenu = ({ children, menu }) => {
  const { t } = useTranslation();
  return (
    <>
      <PageTwoMenuWrapper>
        <div className="left__page">{children}</div>
        <div className="rigth__page">
          <LargeText color="true">{t(menu?.title)}</LargeText>
          <ul>
            {menu?.menus?.map((e) => (
              <li key={e.id}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={e.path}
                >
                  {t(e.title)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </PageTwoMenuWrapper>
    </>
  );
};

export default PageTwoMenu;
