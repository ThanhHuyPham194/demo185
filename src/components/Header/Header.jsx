import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoHeader from "../../assets/imgs/logo.png";
import "./Header.scss";

export default function Header() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [relicsText, setRelicsText] = useState(
    pathname.includes("relics") ? true : false
  );

  const handleActiveRelicsNavLink = (e) => {
    if (e.target.classList.contains("navLink-relics")) {
      setRelicsText(true);
    } else {
      setRelicsText(false);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
    setRelicsText(false);
  };
  return (
    <div className="header">
      <div className="container">
        <img
          src={logoHeader}
          alt=""
          className="header__img"
          onClick={handleBackToHome}
        />

        <div className="menu" onClick={handleActiveRelicsNavLink}>
          <NavLink to="/">
            <span>Trang chủ</span>
          </NavLink>
          <NavLink to="/introduce">
            <span>Giới thiệu</span>
          </NavLink>
          <NavLink to="/relics" className={"navLink-relics"}>
            <span>
              {relicsText
                ? "Bảo vệ và phát huy giá trị di tích lịch sử- văn hoá"
                : "Di tích"}
            </span>
          </NavLink>
          <NavLink to="/news">
            <span>Tin tức</span>
          </NavLink>
          <NavLink to="/contact">
            <span>Liên hệ</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
