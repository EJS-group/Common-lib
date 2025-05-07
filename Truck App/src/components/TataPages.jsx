import { Link } from "react-router-dom";

function TataPages({ name }) {
  return (
    <>
      <section className="tata-pages">
        <div className="tata-pages__overlay"></div>
        <div className="container">
          <div className="tata-pages__text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TataPages;
