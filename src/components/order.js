import React, { useState } from "react";
import "./../style/order.css";
import {Link,useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Order = (props) => {
  // const [siparisFormData , setSiparisFormData] = useState('');
  const { name, price, info, puan, numb } = props.data;
  const [siparisBtn, setSiparisBtn] = useState(false);
  const [secenekBtn, setSecenekBtn] = useState(false);
  const [mainPageBtn, setMainPgeBtn] = useState(false);
  const [orderCount, setOrderCount] = useState(1);

  const mainPage = useHistory("/");

  const checkValues = [
    'Pepperoni','Domates','Biber','Sosis','Mısır','Sucuk','Kanada Jambonu','Acı Sos','Ananas','Tavuk Izgara','Jalepeno','Kabak','Soğan','Sarımsak'];

  const handleLinkChange = (e) => {
    setSecenekBtn(false);
    setSiparisBtn(false);
    setMainPgeBtn(true);
    mainPage.push("/");
  };
  const secenekBtnState = () => {
    setSecenekBtn(true);
    setSiparisBtn(false);
  };
  const siparisBtnState = () => {
    setSiparisBtn(true);
    setSecenekBtn(false);
  };

  const orderCountArttir = (e) => {
    e.preventDefault();
    setOrderCount(orderCount+1);
  }
  const orderCountAzalt = (e) => {
    e.preventDefault();
    setOrderCount(orderCount-1);
  }

  return (
    <>
      <div className="navTech">
        <h1>Teknolojik Yemekler</h1>
      </div>
      <div className="main-order">
        <div className="head_box">
          <div className="pizza">
            <img
              src={require("./../Assets/adv-aseets/adv-form-banner.png")}
              alt="banner-form"
              width={520}
              height={260}
            />
          </div>
          <div className="linkler">
            <span
              className="order_link"
              style={{ color: mainPageBtn && "#d23b3b" }}
              onClick={handleLinkChange}
            >
              Anasayfa
            </span>{" "}
            -{" "}
            <span
              className="order_link"
              style={{ color: secenekBtn && "#d23b3b" }}
              onClick={secenekBtnState}
            >
              Seçenekler
            </span>{" "}
            -{" "}
            <span
              style={{ color: siparisBtn && "#d23b3b" }}
              className="order_link"
              onClick={siparisBtnState}
            >
              Sipariş Oluştur
            </span>
          </div>
            <div className="pizza_content">
              <p className="order-name">{name}</p>
              <p className="span-group">
                <span className="first-span">{numb + "₺"}</span>
                <div
                  className="span-div"
                  style={{ display: "inline-block", paddingRight: "20px" }}
                >
                  <span>{puan}</span>
                  <span>({price})</span>
                </div>
              </p>
              <p className="order-info">{info}</p>
            </div>
        </div>
      </div>
      {
      siparisBtn && (
        <div className="pizza_main">
        <form>
            <div className="form-head">
                <div className="form-boyut">
                    <h3>Boyut Seç <span style={{color:'#ce2829',paddingLeft:'5px'}}>*</span></h3>
                    <div className="radio-div">
                        <span type="radio">S</span>
                        <span type="radio">M</span>
                        <span type="radio">L</span>
                    </div>
                </div>
                <div className="form-hamur">
                    <h3>Hamur Seç <span style={{color:'#ce2829',paddingLeft:'5px'}}>*</span></h3>
                    <select className="select" name="cars" id="cars">
                        <option value="ince-hamur">İnce Hamur</option>
                        <option value="normal-hamur">Normal Hamur</option>
                        <option value="incecik-hamur">İncecik Hamur</option>
                        <option value="kalın-hamur">Kalın Hamur</option>
                    </select>
                </div>
            </div>
            <div className="choise">
                <h3>Ek Malzemeler</h3>
                <p>En Fazla 10 malzeme secçebilirsiniz.5₺</p>
                <div className="checkbox-section">
                    {
                        checkValues.map((item,index) => {
                            return(
                                <>
                                    <input key={index} className="check" id={index} type="checkbox"/><label htmlFor= {index}>{item}</label>
                                </>   
                            )
                        })
                    }
                </div>
            </div>
            <div className="form-bottom">
                <h3 className="not">Sipariş Notu</h3>
                <input className="not-input" type="text"  placeholder="Siparişine eklemek istediğin bir not var mı?"/>
                <hr style={{color:'#1a1a1a' ,opacity:'0.6'}} />
                <div className="total-div">
                    <div className="counter-div">
                        <button onClick={orderCountAzalt}>-</button>
                        <span>{orderCount}</span>
                        <button onClick={orderCountArttir}>+</button>
                    </div>
                    <div className="form-calculate">
                        <div className="calculate-top">
                            <h3>Sipariş Toplamı</h3>
                            <div className="secim">
                                <span className="secim-span">Seçimler</span>
                                <span className="secim-span"></span>
                            </div>
                            <div className="total">
                                <span className="total-spam">Toplam</span>
                                <span className="total-spam"></span>
                            </div> 
                        </div>
                       <Link to ='/order/onay'><button type="submit">SİPARİŞ VER</button></Link> 
                    </div>
                </div>
            </div>
        </form>
      </div>
      )
      }
     
    </>
  );
};

export default Order;
