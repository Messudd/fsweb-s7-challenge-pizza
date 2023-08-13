import React from "react";
import Btn from "./../components/btn";
import "./../style/box.css";

const Box = () => {

  return (
    <div className="box">
      <div className="parag">
        <p className="same">Özel</p>
        <p className="same">Lezzetus</p>
      </div>
      <p style={{ color: "#fff", opacity: "0.9", marginBottom: "5px" }}>
        Poisition: Absolute Acı Burger
      </p>
      <Btn></Btn>
    </div>
  );
};
export default Box;
