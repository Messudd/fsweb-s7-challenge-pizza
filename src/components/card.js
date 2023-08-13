import React from "react";
import "./../style/card.css";


const Card = (props) => {
  const { data, value } = props;

  const CreateCard = () => {
    return (
      <div className="card">
        <div className="image">
          <img
            src={require(`./../Assets/adv-aseets/food-${value + 1}.png`)}
            alt="card_picture"
            width={250}
            height={250}
          />
        </div>
        <div className="info_card">
          <p>{data.name}</p>
          <div className="li">
            <li className="list">{data.puan}</li>
            <li className="list">({data.price})</li>
            <li className="last-child">
              {data.numb}
              <span></span>
            </li>
          </div>
        </div>
      </div>
    );
  };

  return (<CreateCard />);
};
export default Card;


