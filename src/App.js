import React,{useState,useEffect} from "react";
import { Switch,Route} from "react-router-dom/cjs/react-router-dom.min";
import MainHeader from "./components/main_header";
import MiddleBanner from './components/middle_banner';
import MainLinks from "./components/mainLinks";
import card_data from './card_data';
import Footer from './components/footer';
import CardContainer from "./components/cardContainer";
import Order from "./components/order";
import './App.css';


const App = () => {
  const [cards, setCards] = useState(null);
  const [cardData , setCardData] = useState([]);

  
  const UpdateCards = (num) => {
    setCards(card_data[num]);
  }
  
const getData = (veri) => {
  setCardData(veri);
}


useEffect(() => {
  console.log('Linklenen Container : ',cards);
},[cards])


  return (
    <>
     <Switch>
      <Route path = '/' exact >
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
              <CardContainer cards = {cards} getData={getData}></CardContainer>
            </main>
            <Footer></Footer>
      </Route>
      <Route path = '/order/onay' >
        <h1>Siparişiniz Alındı ....</h1>
      </Route>
      <Route path = '/order' >
        <Order data = {cardData}></Order>
        <Footer></Footer>
      </Route>
     </Switch>
 
    </>
  );
};
export default App;
