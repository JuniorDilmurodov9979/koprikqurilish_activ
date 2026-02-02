// HeaderMenu.jsx
import { Link } from "react-router-dom";
import { HeaderMenuWrapper } from "./HeaderMenuWrapper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useState } from "react";

const HeaderMenu = ({ menu, color }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <HeaderMenuWrapper color={color}>
      {menu?.menus?.length > 0 ? (
        <div
          className="menu-item"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="menu-btn">
            <span>{t(menu?.title)}</span>
            <KeyboardArrowDownIcon
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s ease",
              }}
            />
          </button>
          <div className={`links ${open ? "open" : ""}`}>
            {menu.menus.map((e) => (
              <Link key={e.id} to={e.path}>
                {t(e.title)}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link className="link" to={menu?.path}>
          {t(menu?.title)}
        </Link>
      )}
    </HeaderMenuWrapper>
  );
};

HeaderMenu.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string.isRequired,
        path: PropTypes.string,
      }),
    ),
  }).isRequired,
  color: PropTypes.any,
};

export default HeaderMenu;
