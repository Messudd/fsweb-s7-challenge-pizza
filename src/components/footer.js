import React from "react";
import { footerMenu, instagram_svg } from "./../menu";
import { FaTwitter } from "react-icons/fa";
import "./../style/footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        width: "100%",
        minHeight: "max-content",
        padding: "15px",
      }}
    >
      <div className="top_side">
        <div className="cont_near">
          <div className="links_container">
            <h2>Teknolojik</h2>
            <h2 style={{ marginBottom: "15px" }}>Yemekler</h2>
            <div className="flex">
              <img
                src={require("./../Assets/adv-aseets/icons/icon-1.png")}
                alt="icon"
                width={20}
                height={20}
              />
              <span className="parag">
                <p>341 Londonderry Road,</p>
                <p>Istanbul Türkiye</p>
              </span>
            </div>
            <div className="flex">
              <img
                src={require("./../Assets/adv-aseets/icons/icon-2.png")}
                alt="icon"
                width={20}
                height={20}
              />
              <span className="parag">aciktim@teknolojikyemekler.com</span>
            </div>
            <div className="flex">
              <img
                src={require("./../Assets/adv-aseets/icons/icon-3.png")}
                alt="icon"
                width={20}
                height={20}
              />
              <span className="parag">+90 216 123 45 67</span>
            </div>
          </div>
          <div className="footer_menu_container ">
            <h2 className="same_h2">Sıccacık Menuler</h2>
            {footerMenu.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </div>
        </div>
        <div className="instagram_container">
          <h2 className="same_h2">Instagram</h2>
          <div className="ins_image">
            {instagram_svg.map((item, index) => {
              return (
                <img
                  key={index}
                  src={require(`./../Assets/adv-aseets/insta/${item}`)}
                  alt="instagram_post"
                  width={80}
                  height={80}
                ></img>
              );
            })}
          </div>
        </div>
      </div>
      <hr style={{ opacity: "0.3", marginBottom: "15px" }} />
      <div className="bottom_side">
        <div
          style={{ color: "white", opacity: "0.6" }}
          className="bottom_slogan"
        >
          @2023 Teknolojik Yemekler.
        </div>
        <div className="bottom_icon">
          <FaTwitter className="tw-icon"></FaTwitter>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
