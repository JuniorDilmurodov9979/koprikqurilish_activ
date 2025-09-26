import HeaderTop from "../../components/header/headerTop/HeaderTop";
import HeaderMidle from "../../components/header/headerMidle/HeaderMidle";
import HeaderBottom from "../../components/header/headerBottom/HeaderBottom";
import { useState } from "react";

const Header = ({ color }) => {
  const [menuChange, setmenuChange] = useState(true);

  return (
    <header>
      <HeaderTop setmenuChange={setmenuChange} color={color} />
      <HeaderMidle color={color} />
      <HeaderBottom
        menuChange={menuChange}
        setmenuChange={setmenuChange}
        color={color}
      />
    </header>
  );
};

export default Header;
