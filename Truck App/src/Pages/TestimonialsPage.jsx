import Footer from "../components/Footer";
import TataPages from "../components/TataPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <TataPages name="Testimonials" />
        <Testimonials /> 
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
