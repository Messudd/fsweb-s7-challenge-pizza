import React,{ useState } from "react";


function RadioBtn({setRadioState,radioState}) {

    const [radioThemeS , setRadioThemeS] = useState(false);
    const [radioThemeM , setRadioThemeM] = useState(false);
    const [radioThemeL , setRadioThemeL] = useState(false);

      const radioThemeSmall = (e) => {
        setRadioThemeS(!radioThemeS);
        setRadioState(e.target.textContent);
        setRadioThemeL(false);
        setRadioThemeM(false);
      }
      const radioThemeMedium = (e) => {
        setRadioThemeM(!radioThemeM);
        setRadioState(e.target.textContent);
        setRadioThemeS(false);
        setRadioThemeL(false);
      }

      const radioThemeLarge = (e) => {
        setRadioThemeL(!radioThemeL);
        setRadioState(e.target.textContent);
        setRadioThemeM(false);
        setRadioThemeS(false);
      }


  return (
    <>
        <h3 style={{color: !(radioState) && '#ce2829' }}>Boyut Seç <span style={{color:'#ce2829',paddingLeft:'5px'}}>*</span></h3>
        <div className="radio-div">
            <span onClick = {radioThemeSmall} style = {{backgroundColor: radioThemeS && '#fdc913',color: radioThemeS && '#ce2829'}} type="radio">S</span>
            <span onClick = {radioThemeMedium} style = {{backgroundColor: radioThemeM && '#fdc913',color: radioThemeM && '#ce2829'}} type="radio">M</span>
            <span onClick = {radioThemeLarge} style = {{backgroundColor: radioThemeL && '#fdc913',color: radioThemeL && '#ce2829'}} type="radio">L</span>
        </div>
    </>
  )
}
export default  RadioBtn;