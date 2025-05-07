import { useState } from "react";
import TruckBox from "./TruckBox";
import { TRUCK_DATA } from "./TruckData";

function PickTruck() {
  const [active, setActive] = useState("SecondTruck");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your next delivery</p>
            </div>
            <div className="pick-container__car-content">
              {/* Pick Truck */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondTruck");
                    btnID("btn1");
                  }}
                >
                 Tata Ace gold
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstTruck");
                    btnID("btn2");
                  }}
                >
                 Tata Ace EV
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdTruck");
                    btnID("btn3");
                  }}
                >
                  Tata 407 Gold SFC
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthTruck");
                    btnID("btn4");
                  }}
                >
                  Tata 1109g LPT
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthTruck");
                    btnID("btn5");
                  }}
                >
                 Ashok AVTR  Haulage
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthTruck");
                    btnID("btn6");
                  }}
                >
                  Ashok  Ecomet 1015
                </button>
              </div>

              {active === "FirstTruck" && <TruckBox data={TRUCK_DATA} carID={0} />}
              {active === "SecondTruck" && <TruckBox data={TRUCK_DATA} carID={1} />}
              {active === "ThirdTruck" && <TruckBox data={TRUCK_DATA} carID={2} />}
              {active === "FourthTruck" && <TruckBox data={TRUCK_DATA} carID={3} />}
              {active === "FifthTruck" && <TruckBox data={TRUCK_DATA} carID={4} />}
              {active === "SixthTruck" && <TruckBox data={TRUCK_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickTruck;
