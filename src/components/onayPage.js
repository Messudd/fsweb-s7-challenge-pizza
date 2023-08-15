import React from "react";
import "./../style/onay_page.css";

function OnayPage({ postRes,arrayy}) {

  return (
    <div className="bigBody">
      <div className="body">
        <div className="onay-box">
          <div className="onay_top">
            <h1>Teknolojik Yemekler</h1>
            <div className="onay-head">
              <p className="other-p">lezzetin yolda</p>
              <p className="ok">SİPARİŞ ALINDI</p>
            </div>
          </div>
          <hr className="hrr" />
          <div className="onay_main">
            <h2>{postRes.orderName}</h2>
            <div className="main-div">
              <p>
                <span className="same-p">Boyut: </span>
                <span className="main-div-span">{postRes.boyutInfo}</span>
              </p>
              <p>
                <span className="same-p">Hamur: </span>
                <span className="main-div-span">{postRes.hamurTipi}</span>
              </p>
              <p>
                <span className="same-p">Ek Malzemeler: </span>
                <span className="main-div-span">{postRes.ekMalzemeler}</span>
              </p>
            </div>
          </div>
          <div className="onay_bottom">
            <div>
              <h3>Sipariş Toplamı</h3>
              <div className="sonuc">
                <p>
                  <span>Seçimler</span>
                  <span>{`${((arrayy.length)*5)*(postRes.order_Count)}`}₺</span>
                </p>
                <p>
                  <span>Toplam</span>
                  <span>{`${((arrayy.length)*5+(postRes.default_price))*postRes.order_Count}`}₺</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnayPage;
