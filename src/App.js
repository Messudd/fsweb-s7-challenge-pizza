import React,{useState,useEffect} from "react";
import MainHeader from "./components/main_header";
import MiddleBanner from './components/middle_banner';
import MainLinks from "./components/mainLinks";
import card_data from './card_data';
import Footer from './components/footer';
import CardContainer from "./components/cardContainer";
import './App.css';



const App = () => {
  const [cards, setCards] = useState(null);

  
  const UpdateCards = (num) => {
    setCards(card_data[num]);
  }



useEffect(() => {
  console.log('Linklenen Container : ',cards);
},[cards])


  return (
    <>
      <MainHeader></MainHeader>
      <main className = 'home_main_section'>
        <MiddleBanner></MiddleBanner>
        <div className="slogan">
            <h2 className = 'info'>en çok paketlenen menüler</h2>
            <p>Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
        <div className="main_links">
          <MainLinks UpdateCards = {UpdateCards}></MainLinks>
        </div>
        <CardContainer cards = {cards}></CardContainer>
      </main>
      <Footer></Footer>

  
    </>
  );
};
export default App;
