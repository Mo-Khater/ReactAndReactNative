import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="home">
            <Header />
            <Section
                id ={'resume'}
                title={"Your Cover Letter"}
                description={`My Perfect Cover Letter takes the hassle out of writing a cover letter.
            Easy prompts help you create the perfect
            job-worthy cover letter effortlessly!`}
                img={'../assets/cover-letter-made-easy.avif'}
                text={'Create my letter'}
                alt={'cover letter'}
                link={'coverletter'}
                />
            <Section
                id ={'letter'}
                title={"Your Cover Letter"}
                description={`My Perfect Cover Letter takes the hassle out of writing a cover letter.
            Easy prompts help you create the perfect
            job-worthy cover letter effortlessly!`}
                img={'cover-letter-made-easy.avif'}
                text={'Create my letter'}
                alt={'cover letter'}
                link={'coverletter'}
                />
            <Section
                id ={'portfolio'}
                title={"Your Cover Letter"}
                description={`My Perfect Cover Letter takes the hassle out of writing a cover letter.
            Easy prompts help you create the perfect
            job-worthy cover letter effortlessly!`}
                img={'cover-letter-made-easy.avif'}
                text={'Create my letter'}
                alt={'cover letter'}
                link={'coverletter'}
                />
            <Section
                id ={'about'}
                title={"Your Cover Letter"}
                description={`My Perfect Cover Letter takes the hassle out of writing a cover letter.
            Easy prompts help you create the perfect
            job-worthy cover letter effortlessly!`}
                img={'cover-letter-made-easy.avif'}
                text={'Create my letter'}
                alt={'cover letter'}
                link={'coverletter'}
                />       
            <Footer/>
        </div>
    )
}
export default Home