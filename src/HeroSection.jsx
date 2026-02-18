import { ArrowDown } from "lucide-react";   
function HeroSection(){
    return(
        <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center px-4 min-h-4xl">
        <div className="container max-w-4xl mx-auto text-center z-10">

        <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in ">Hi, It's </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">Atoyebi</span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Joshua</span>
            </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">A. Joshua is a programmer Who mainly focuses on Web Dev. A passionate Web developer who builds responsive websites, user-friendly, and scalable web applications that bring ideas into life. My aim and objective is on creating clean, efficient codes using modern web technologies.</p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#skills" className="cosmic-button">
                view my skils
            </a>

        </div>
        </div>

        </div>

            <div className="absolute bottom-0 left-1/2 traansform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <a href="#about">
            <span className="text-sm text-muted-foreground mb-2"> Scroll</span></a>
            <a href="#about">
            <ArrowDown className="h-5 w-5 text-primary"/>
            </a>
            </div>

        </section>
    );
}

export default HeroSection;