import React from "react";
import Card from "./card";
const CardContainer = ({cards}) => {


  return (
    <div className="card_container">
      {cards ? cards.map((data, index) => {
        return (
          <Card key={index} data={data} value={index}></Card>
        );
      }) : <span role="img" aria-label="endise" style={{fontSize:'25px',fontWeight:'500'}}>Veri Yoq 😕</span>}
    </div>
  );
};
export default CardContainer;
