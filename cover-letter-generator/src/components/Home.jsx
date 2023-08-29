import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Section
                title={"The Cover Letter that gets the job"}
                description={"Build a cover letter in minutes"}
                link={'coverletter'}
                />
            <Section
                title={"The Cover Letter that gets the job"}
                description={"Build a cover letter in minutes"}
                link={'coverletter'}
                />
            <Section
                title={"The Cover Letter that gets the job"}
                description={"Build a cover letter in minutes"}
                link={'coverletter'}
                />
            <Section
                title={"The Cover Letter that gets the job"}
                description={"Build a cover letter in minutes"}
                link={'coverletter'}
            />
            <Footer/>
        </div>
    )
}
export default Home