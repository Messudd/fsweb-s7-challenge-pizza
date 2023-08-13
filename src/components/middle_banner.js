import React from "react";
import Box from './box';
import Btn from "./btn";
import "./../style/middle_banner.css";


const MiddleBanner = () => {

const liste = ['Hackathlon','Burger Menü','Çoooook','hızlı','npm gibi kurye'];

  return (
    <div className="middle_banner">
      <div className="left_side">
        <Box></Box>
      </div>
      <div className="right_side">
        <div className="article_one">
          <div className="box_2">
            <div className="kutu">
              <p>{liste[0]}<span></span></p>
              <p>{liste[1]}</p>
            </div>
            <Btn></Btn>
          </div>
        </div>
        <div className="article_two">
        <div className="box_2">
          <div className="kutu">
          <p style = {{color:'#292929'}}><span>{liste[2]}</span>{liste[3]}</p>
            <p style = {{color:'#292929'}}>{liste[4]}</p>
          </div>
            <Btn></Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
