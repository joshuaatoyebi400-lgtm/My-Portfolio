import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "./lib/utils";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
function Contact(){

    const form = useRef();
    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm("service_7rqhswb", "template_vn8jqyb", form.current, "Mf3OQIWKNJPjwQzyA")
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again later.");
        });
    }

    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                   z Have a project in mind to collaborate feel free to reach out. I'm always open to discussing new opportunities
                </p>

                <div className="grid  grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>


                            <div>
                                <h4>Email</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"
                                href="mailto:joshuaatoyebi400@gmail.com">
                                    joshuaatoyebi400@gmail.com
                                </a>
                            </div>
                            </div>

                             <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>


                            <div>
                                <h4>Phone</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"
                                href="tel:+2347063578189">
                                    +234 7063578189
                                </a>
                            </div>
                            </div>


                     <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>


                            <div>
                                <h4>Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Abeokuta, Ogun State, Nigeria
                                </a>
                            </div>
                            </div>


                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a className="hover:text-primary" href="https://twitter.com/atoyebi89345" target="_blank">
                                    <Twitter />
                                </a>
                                <a className="hover:text-primary" href="https://www.instagram.com/joshua.atoyebi.005" target="_blank">
                                    <Instagram />
                                </a>
                                <a className="hover:text-primary" href="https://www.facebook.com/joshua.joshua" target="_blank">
                                    <Facebook />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

                        <form className="space-y-6" ref={form} onSubmit={handleSubmit} >
                            <div>
                                 
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input type="text" id="name"  name="name" className="w-full px-4 py-3 rounded-md border border-input bg-backgroun focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="A. Joshua"/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input type="Email" id="email"  name="email" className="w-full px-4 py-3 rounded-md border border-input bg-backgroun focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="josh400@gmail.com"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea type="text" id="message"  name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Give your commemnts"/>
                            </div>

                            <button type="submit" className={cn("cosmic-button w-full  flex items-center justify-center gap-2")}>
                                Send Message
                                <Send  size={16}/>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
