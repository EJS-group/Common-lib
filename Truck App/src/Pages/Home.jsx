import Tata from "../components/Tata";
import BookTruck from "../components/BookTruck";
import PlanTrip from "../components/PlanTrip";
import PickTruck from "../components/PickTruck";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Tata />
      <BookTruck />
      <PickTruck />
      <PlanTrip />  
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
