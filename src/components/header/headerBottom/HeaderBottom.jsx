import { Button } from "@mui/material";
import Language from "../../language/Language";
import HeaderMenu from "../menu/HeaderMenu";
import { HeaderBottomWrapper } from "./HeaderBottomWrapper";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderSearch from "../search/HeaderSearch";
import {
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
} from "../../../const/Menu";
import PropTypes from "prop-types"; // ✅ qo'shildi

const HeaderBottom = ({ color, menuChange, setmenuChange }) => {
    return (
        <>
            <HeaderBottomWrapper color={color} menuChange={menuChange}>
                <div className="container">
                    {/* Mobile menyu */}
                    <div className="mobile__lang">
                        <Language color={color} />
                        <div className="menu">
                            <Button
                                variant="text"
                                onClick={() => setmenuChange((item) => !item)}
                            >
                                <MenuIcon />
                            </Button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="search">
                        <HeaderSearch />
                    </div>

                    {/* Menu ro'yxati */}
                    <ul className="footer__menu">
                        <li>
                            <HeaderMenu color={color} menu={menu1} />
                        </li>
                        <li>
                            <HeaderMenu color={color} menu={menu2} />
                        </li>
                        <li>
                            <HeaderMenu color={color} menu={menu3} />
                        </li>
                        <li>
                            <HeaderMenu color={color} menu={menu4} />
                        </li>
                        <li>
                            <HeaderMenu color={color} menu={menu6} />
                        </li>
                        <li>
                            <HeaderMenu color={color} menu={menu7} />
                        </li>
                        <li>
                            <HeaderMenu color={color} menu={menu5} />
                        </li>
                    </ul>
                </div>
            </HeaderBottomWrapper>
        </>
    );
};

// ✅ ESLint uchun PropTypes qo'shildi
HeaderBottom.propTypes = {
    color: PropTypes.string.isRequired,
    menuChange: PropTypes.bool.isRequired,
    setmenuChange: PropTypes.func.isRequired,
};

export default HeaderBottom;
