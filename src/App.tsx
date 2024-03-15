import React, { useState } from "react";
import "./App.css";

function App() {
   const [weight, setWeight] = useState<number>(0);
   const [weightText, setWeightText] = useState<string>("x มล.");

   const weightCal = () => {
      console.log(weight);
      if (weight == 0) return "x มล.";
      else return (weight / 2) * 2.2 * 30 + " มล.";
   };

   const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(parseInt(event.target.value));
      console.log(weight);
   };

   const changeTheme = (): void => {
      document.body.classList.toggle("dark-theme");
   };

   return (
      <>
         <div className="card">
            <h1 className="title">ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <br />
            <h1 className="weightCal">{weightText}</h1>
            <br />
            <input
               className="weightField"
               type="number"
               placeholder="น้ำหนักของคุณ (กิโลกรัม)"
               onChange={onChangeWeight}
            />
            <br />
            <button
               onClick={() => {
                  setWeightText(weightCal());
               }}
            >
               คำนวณ
            </button>
            <div className="theme">
               <select name="theme" id="themeDropdown" onChange={changeTheme}>
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
               </select>
            </div>
         </div>
      </>
   );
}

export default App;
