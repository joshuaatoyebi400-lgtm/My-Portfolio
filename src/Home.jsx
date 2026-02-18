import Theemtoggle from "./Theemtoggle";
import StarBackground from "./StarBackground";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
 
 function Home(){
     
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle*/ }
        <Theemtoggle />

        {/*Star Background */}
        <StarBackground />

        {/** Navbar */}
         <Navbar />

        <main>
            <HeroSection />
            <AboutMe/>
            < Skills />
            < Contact />
            <Footer />
        </main>

        </div>
    );

 }

export default Home;