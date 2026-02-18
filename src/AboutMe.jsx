import { Briefcase, Code, User } from "lucide-react";
function Aboutme(){
    return(
        <section id="about" className="py-24 px-4 reative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3>Passionate Web-developer & Tech creator</h3>

                    <p className="text-muted-foreground">
                        A. Joshua is a programmer Who mainly focuses on Web Dev. A passionate Web devloper who builds responsive websites, user-friendly, and scalable web applications that bring ideas into life. My aims and objective is on creating clean, efficient codes using modern web technologies.
                    </p>

                        <p className="text-muted-foreground">
                            Turning ideas into interactive Experiences. I'm a web Devloper who loves beautiful and functional webstes with clean codes, smart design, and seamless user experience.
                            My utmostt priority remains making the client satisfied with whatever service I render.
                             
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 border-primary hover:bg-primary/10 transition-colors duration-300 rounded-full border">
                        Download CV
                        </a>
                    </div>
                </div>
             <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text" />
                        </div>

                        <div className="text-left">
                            <h4 className="font-bold text-muted-foreground text-lg">Web developmment</h4>
                            <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                        </div>

                    </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text" />
                        
                        </div>

                        <div className="text-left">
                            <h4 className="font-bold text-muted-foreground text-lg">UI/UX Designs</h4>
                            <p className="text-muted-foreground">Deisigning intuitive user interfaces and seamless user experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text" />
                        </div>

                        <div className="text-left">
                            <h4 className="font-bold text-muted-foreground text-lg">Project Management</h4>
                            <p className="text-muted-foreground">  Leading projects from conception to completion with advanced technologies.</p>
                        </div>
                    </div>
                </div>
            </div>   
            </div>
            </div>
        </section>
    );
}

export default Aboutme;