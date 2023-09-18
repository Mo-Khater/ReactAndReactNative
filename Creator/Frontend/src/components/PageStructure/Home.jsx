import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import IsTokenExpired from "../../registration/token";
const Home = () => {
    const token = localStorage.getItem('token');
    return (
        <div className="home">
            <Header />
            <Section
                id={'resume'}
                title={"Your Resume"}
                description={`There is a simple test for you to get your information for your resume which help you to arrange resume structure`}
                img={'Combination_resume.avif'}
                text={'Create my resume'}
                alt={'Resume'}
                link={token ? 'Contact' : 'login'}
            />
            <Section
                id={'letter'}
                title={"Your Cover Letter"}
                description={`My Perfect Cover Letter takes the hassle out of writing a cover letter.
            Easy prompts help you create the perfect
            job-worthy cover letter effortlessly!`}
                img={'cover-letter-made-easy.avif'}
                text={'Create my letter'}
                alt={'cover letter'}
                link={token ? 'CoverSelect' : 'login'}
            />
            <Section
                id={'portfolio'}
                title={"Your portofolio website"}
                description={`My Perfect portofolio takes the hassle out of making a portofolio website.
            Easy prompts help you create the perfect
            job-worthy cover letter effortlessly!`}
                img={'cover-letter-made-easy.avif'}
                text={'Create my portofolio'}
                alt={'portofolio'}
                link={token ? 'portofolio' : 'login'}
            />
            <Footer />
        </div>
    )
}
export default Home