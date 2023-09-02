import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const CoverSelect = () => {
    return (
        <>
            <Header/>
            <div className="upper-select">
                <section className="flex-container-select">
                    <figure>
                        <img src={require('../assets/letter2.png')} alt="letter img" />
                    </figure>
                    <article >
                        <Link to="/FirstStep">Get Started</Link>
                    </article>
                </section>
                <section  className="flex-container-select">
                    <figure>
                        <img src={require('../assets/coverletter.jpg')} alt="letter img"/>
                    </figure>
                    <article >
                        <Link to="/CompleteLetter">Ready Template</Link>
                    </article>
                </section>
            </div>
            <Footer/>
        </>
    );
}
export default CoverSelect;