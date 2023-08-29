import { Link } from "react-router-dom";
const Section = ({ title, description, link }) => {
    return (
        <section>
          <div className="left">
                <h2>{title}</h2>
                <p>{description}</p>
          <Link to={`/${link}`} className="fancy-button">Get Started</Link>
          </div>
          <div className="right">
            <figure>
                    <img src={require('./bg.png')} alt="Description" />
            </figure>
          </div>
        </section>
      );
}
export default Section;