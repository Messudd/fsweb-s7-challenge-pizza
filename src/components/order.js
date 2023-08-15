import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import RadioBtn from "./radioBtn";
import axios from "axios";
import "./../style/order.css";

const Order = (props) => {
  const { propsdata, setPostResData, setArray } = props;
  const { name, price, info, puan, numb } = propsdata;
  const [orderFormData, setOrderFormData] = useState({
    // id: '',
    orderName: `${name}`,
    default_price: numb,
    personName: "",
    boyutInfo: "",
    hamurTipi: "",
    ekMalzemeler: [],
    order_Note: "",
    order_Count: "",
  });

  const [siparisBtn, setSiparisBtn] = useState(false);
  const [secenekBtn, setSecenekBtn] = useState(false);
  const [mainPageBtn, setMainPgeBtn] = useState(false);
  const [orderCount, setOrderCount] = useState(1);
  const [radioState, setRadioState] = useState("");

  const [orderNote, setOrderNote] = useState("");
  const [pername, setPerName] = useState("");

  const [check, setCheck] = useState([]);
  const [select, setSelect] = useState("- Hamur Kalınlığı Seç -");

  const mainPage = useHistory("/");

  const checkValues = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Acı Sos",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

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

  const handleUpdateForm = () => {
    // (Math.random()*1000+500).toString(); || Date.now() ile form id verilebilir ancak post responce zaten id döndürüyorr !!!
    orderFormData.hamurTipi = select;
    orderFormData.boyutInfo = radioState;
    orderFormData.personName = pername;
    orderFormData.order_Count = orderCount;
    orderFormData.order_Note = orderNote;
    orderFormData.ekMalzemeler = check;
    // orderFormData.id = Date.now().toString();
    return orderFormData;
  };

  const handleCheckControl = () => {
    let checkControl;
    const notAgain = [];
    if ([...orderFormData.ekMalzemeler].length > 0) {
      checkControl = [...orderFormData.ekMalzemeler].reduce((acc, content) => {
        if (!(content in acc)) {
          acc[content] = 1;
        } else {
          acc[content]++;
        }
        return acc;
      }, {});
    } else {
      return null;
    }
    for (let item in checkControl) {
      !(checkControl[item] % 2 === 0) && notAgain.push(item);
    }
    setCheck(notAgain);
  };

  const orderCountArttir = (e) => {
    setOrderCount(orderCount + 1);
  };
  const orderCountAzalt = (e) => {
    orderCount > 1 && setOrderCount(orderCount - 1);
  };

  const calculatePrice = () => {
    let price = numb;
    if (check.length > 0) {
      price += check.length * 5;
      price *= orderCount;
      return price;
    } else return price * orderCount;
  };

  const handleSubmitForm = (e) => {
    axios
      .post("https://reqres.in/api/users", orderFormData)
      .then((res) => {
        console.log("post res-data: ", res.data);
        setPostResData(res.data);
      })
      .catch((error) => {
        const docBody = document.querySelector("body");
        docBody.style.cssText = "text-align:center;padding:10px";
        document.body.textContent = "Sunucu Hatası - 404";
      });
  };

  //#################################### FETCH İLE BASKA BİR MOCK APİ POST DENEMESİ ##########################################//
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({...orderFormData}),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json)
  //     setPostResData(json);
  //   });
  //############################################################################################################################//

  const submitStatus = () => {
    return (
      !(select === "- Hamur Kalınlığı Seç -") &&
      radioState.length > 0 &&
      pername.length > 4 &&
      orderCount < 11 &&
      orderNote.length < 50 &&
      orderNote.length > 0 &&
      !(name === undefined) &&
      check.length > 0
    );
  };

  useEffect(() => {
    handleCheckControl();
  }, [orderFormData]);

  useEffect(() => {
    console.log("Boyut : ", radioState);
  }, [radioState]);

  useEffect(() => {
    console.log("Form_Data : ", handleUpdateForm());
    setArray(orderFormData.ekMalzemeler);
  }, [orderCount, orderNote, radioState, select, check]);

  useEffect(() => {
    console.log("order-count : ", orderCount);
  }, [orderCount]);

  useEffect(() => {
    calculatePrice();
  }, [orderCount, check, orderFormData]);

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
          <div id="line_link" className="linkler">
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
            <a style={{ textDecoration: "none" }} href="#line_link">
              <span
                style={{ color: siparisBtn && "#d23b3b" }}
                className="order_link"
                onClick={siparisBtnState}
              >
                Sipariş Oluştur
              </span>
            </a>
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
      {siparisBtn && (
        <div className="pizza_main">
          <form>
            <div className="form-head">
              <div className="form-boyut">
                <RadioBtn
                  setRadioState={setRadioState}
                  radioState={radioState}
                />
              </div>
              <div className="form-hamur">
                <h3
                  style={{
                    color: select === "- Hamur Kalınlığı Seç -" && "#ce2829",
                  }}
                >
                  Hamur Seç{" "}
                  <span style={{ color: "#ce2829", paddingLeft: "5px" }}>
                    *
                  </span>
                </h3>
                <select
                  className="select"
                  value={select}
                  id="hamur-type"
                  name="hamurTipi"
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                >
                  <option value="- Hamur Kalınlığı Seç -" disabled>
                    - Hamur Kalınlığı Seç -
                  </option>
                  <option value="ince-Hamur">İnce Hamur</option>
                  <option value="Normal-Hamur">Normal Hamur</option>
                  <option value="incecik-Hamur">İncecik Hamur</option>
                  <option value="Kalın-Hamur">Kalın Hamur</option>
                </select>
              </div>
            </div>
            <div className="choise">
              <h3>Ek Malzemeler</h3>
              {check.length > 10 ? (
                <p style={{ color: "#ce2829" }}>
                  Daha az malzeme seciniz ( Max 10 ) !
                </p>
              ) : (
                <p>En Fazla 10 malzeme secçebilirsiniz.5₺</p>
              )}
              <div className="checkbox-section">
                {checkValues.map((item, index) => {
                  return (
                    <>
                      <input
                        key={index}
                        className="check"
                        id={index}
                        type="checkbox"
                        onChange={(e) => {
                          setOrderFormData({
                            ...orderFormData,
                            ekMalzemeler: [...orderFormData.ekMalzemeler, item],
                          });
                        }}
                      />
                      <label key={Date.now()} htmlFor={index}>
                        {item}
                      </label>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="form-bottom">
              <input
                className="not-input"
                placeholder="Adınız ..."
                style={{ marginTop: "10px" }}
                onChange={(e) => {
                  setPerName(e.target.value);
                }}
              ></input>
              {pername.length < 5 && (
                <span style={{ color: "#ce2829" }}>
                  İsim en az 5 karakter olmalı !
                </span>
              )}
              <h3 className="not">Sipariş Notu</h3>
              <input
                className="not-input"
                name="order_Note"
                type="text"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                onChange={(e) => {
                  setOrderNote(e.target.value);
                }}
              />
              {orderNote.length >= 50 && (
                <h3 style={{ color: "#ce2829" }}>Max 50 Karakter Giriniz !</h3>
              )}
              <hr style={{ color: "#1a1a1a", opacity: "0.6" }} />
              <div className="total-div">
                <div className="counter-div">
                  <span style={{ cursor: "default" }} onClick={orderCountAzalt}>
                    -
                  </span>
                  <span>{orderCount}</span>
                  <span
                    style={{ cursor: "default" }}
                    onClick={orderCountArttir}
                  >
                    +
                  </span>
                </div>
                <div className="form-calculate">
                  <div className="calculate-top">
                    <h3>Sipariş Toplamı</h3>
                    <div className="secim">
                      <span className="secim-span">Seçimler</span>
                      <span className="secim-span">
                        {(check.length * 5 * orderCount).toString() + "₺"}
                      </span>
                    </div>
                    <div className="total">
                      <span className="total-spam">Toplam</span>
                      <span className="total-spam">
                        {calculatePrice().toString() + "₺"}
                      </span>
                    </div>
                  </div>
                  <Link to="/order/onay">
                    <button
                      disabled={submitStatus() ? false : true}
                      type="submit"
                      onClick={handleSubmitForm}
                    >
                      SİPARİŞ VER
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Order;
