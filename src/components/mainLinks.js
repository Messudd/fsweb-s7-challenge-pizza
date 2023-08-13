import React from "react";
import iconData from "./../icon_data";
import "./../style/mainLinks.css";

const MainLinks = (props) => {
  const {UpdateCards} = props;

  return (
    <>
      {iconData.map((content,index) => {
        return (
          <button onClick = {() => {UpdateCards(index)}} className="svgs" key ={index} >
            <img src={content.icon} alt="icoonn" width="32" height="32" />
            <li>{content.description}</li>
          </button>
        );
      })}
    </>
  );
};

export default MainLinks;
