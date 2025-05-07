import { Link } from "react-router-dom";
import BgShape from "../images/tata/tata-bg.png";
import TataTruck from "../images/tata/main-tata.png";
import { useEffect, useState } from "react";
function Tata() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="tata-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="tata-content">
            <div className="tata-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                 Local Suppliers. <span>24/7</span> Support.
              </h1>
              <p>
                Rent the truck of your dreams. Unbeatable prices, unlimited services,
                flexible pick-up options and much more.
              </p>
              <div className="tata-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="tata-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="tata-content__text__btns__learn-more" to="/About">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={TataTruck}
              alt="car-img"
              className="tata-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Tata;
