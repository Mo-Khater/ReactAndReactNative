import { Link } from "react-router-dom";
const Section = ({id, title, description, link, text, alt,img }) => {
    return (
      <section id={id} className="flex-container-section">
      <article >
          <h2>
              {title}, Made <span >Easy</span>
          </h2>
          <p>
            {description}
          </p>
          <Link to={`/${link}`}>{text}</Link>
        </article>
        <figure>
          <img src= {require('../../assets/cover-letter-made-easy.avif')} alt={alt} />
        </figure>
      </section>
    );
}
export default Section;