import React from "react";
import logoFooter from "../../assets/imgs/logo.png";
import director from "../../assets/svg/director.svg";
import mapPin from "../../assets/svg/map.svg";
import mess from "../../assets/svg/message.svg";
import phone from "../../assets/svg/phone.svg";
import web from "../../assets/svg/web.svg";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="name">
        <img src={logoFooter} alt="" />
        <span >
          TRUNG TÂM BẢO TỒN VÀ PHÁT HUY <br />
          GIÁ TRỊ LỊCH SỬ VĂN HOÁ TPHCM
        </span>
      </div>
      <div className="phone" >
        <img src={phone} alt="" />
        <a href="tel:02838411799" target="_blank" rel="noreferrer">(028) 38 411 799</a>
      </div>
      <div className="address" >
        <img src={mapPin} alt="" />
        <a href="https://goo.gl/maps/oHfGBjHXphCaScuBA" target="_blank" rel="noreferrer">32 Huỳnh Đình Hai, Phường 24, Quận Bình Thạnh, TP Hồ Chí Minh</a>

      </div>
      <div className="contact" >
        <div className="contact__item" >
          <img src={director} alt="" />
          <span>Giám đốc: Mr Lâm Thiếu Kỳ</span>
        </div>
        <div className="contact__item " >
          <img src={mess} alt="" />
          <a href="mailto:bt.lsvh.svhtt@tphcm.gov.vn" target="_blank" rel="noreferrer">bt.lsvh.svhtt@tphcm.gov.vn</a>
        </div>
        <div className="contact__item" >
          <img src={web} alt="" />
          <a href="https://www.trungtambaotonditichtphcm.com/" target="_blank" rel="noreferrer">www.trungtambaotonditich.vn</a>
        </div>
      </div>
    </div>
  );
}
