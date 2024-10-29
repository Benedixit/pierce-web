// pages/Home.tsx
import { useEffect } from 'react';
import lottie from 'lottie-web';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById('fashion-container') as HTMLElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/fashion.json', // Adjust the path accordingly
        });

        lottie.loadAnimation({
            container: document.getElementById('martial-container') as HTMLElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/karate.json',
        });

        lottie.loadAnimation({
            container: document.getElementById('film-container') as HTMLElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/movie.json',
        });

        lottie.loadAnimation({
            container: document.getElementById('therapy-container') as HTMLElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/therapy.json',
        });
    }, []);

    return (
        <>
            <Navbar />
            <Header />

            <section className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-16 xl:px-32 py-16">
                <div id="fashion-container" className="w-full h-64 md:h-auto"></div>
                <div className="gap-y-6">
                    <div className="space-y-6">
                        <h1 className="font-[Outfit] font-bold leading-loose text-2xl text-[#0A1F44]">
                            Boost Your Brand With Our Professional Models
                        </h1>
                        <p className="font-[Manrope] leading-loose">
                            Step into the world of style and elegance with our professional modeling services. From high fashion runway shows to commercial campaigns, we bring creativity and confidence to every project. Let us represent your brand with poise, versatility, and unmatched professionalism.
                        </p>
                    </div>
                    <div className="space-y-6 pt-6">
                        <h1 className="font-[Outfit] font-bold leading-loose text-2xl text-[#0A1F44]">
                            Improve Your Style With Perezzi Classic Couture
                        </h1>
                        <p className="font-[Manrope] leading-loose">
                            Our classic couture is designed to refine your wardrobe, 
                            combining luxury fabrics with tailored perfection. Whether it&apos;s for a formal event or everyday elegance, Perezzi Classic Couture offers the essential pieces every man needs to stand out with confidence and class.
                        </p>
                    </div>
                </div>
            </section>

            {/* Martial Arts Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-16 xl:px-32 pt-16">
                <div className="gap-y-6 content-center">
                    <div className="space-y-6">
                        <h1 className="font-[Outfit] font-bold leading-loose text-2xl text-[#0A1F44]">
                            We Teach Karate Fitness And Self-Defense Awareness
                        </h1>
                        <p className="font-[Manrope] leading-loose">
                        We offer specialized training programs tailored for schools, security companies, and community organizations. 
                        Our training focuses on both physical fitness and self-defense techniques, ensuring participants not only learn 
                        effective self-defense skills but also improve their overall health and fitness levels.
                        </p>
                    </div>

                    <div className="space-y-6 pt-6">
                        <h1 className="font-[Outfit] font-bold leading-loose text-2xl text-[#0A1F44]">
                            We Provide Personalized Security For Your Event
                        </h1>
                        <p className="font-[Manrope] leading-loose">
                        Samurai Security Service specializes in providing tailored security solutions for weddings, birthdays, anniversaries, corporate events, and more. Our experienced team ensures a safe environment, managing crowds and access. We also offer close protection and escorts for high-profile personalities, delivering discreet and professional services.
                         Trust us to make your event secure, allowing you to focus on celebration.
                        </p>
                    </div>

                 
                </div>

                <div id="martial-container" className="w-full h-64 md:h-auto md:max-w-md max-w-full mx-auto"></div>
            </section>


            <section className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-16 xl:px-32 py-16">
                <div id="film-container" className="w-full h-64 md:h-auto"></div>
                <div className="gap-y-6 content-center">
                    <div className="space-y-6">
                        <h1 className="font-[Outfit] font-bold leading-loose text-2xl text-[#0A1F44]">
                        Enhance your filming experience with epic stunts, trained actors, and authentic props.
                        </h1>
                        <p className="font-[Manrope] leading-loose">
                        We specialize in directing action sequences and stunts for films, ensuring safety and excitement. 
                        Our training programs prepare actors for performing their own stunts, focusing on skills and choreography. 
                        Additionally, we provide prop guns, weapons, and costumes, enhancing the authenticity of productions. 
                        Trust us to elevate your film&apos;s action and performance quality.
                        </p>
                    </div>
                   
                </div>
            </section>

            

            {/* Call to Action Section */}
            <section className="bg-cover bg-bottom bg-no-repeat bg-[url('/img/cta.jpg')] 
                bg-blend-multiply bg-[#0A1F44]/90 px-4 lg:px-32 py-24 grid grid-cols-1 lg:grid-cols-2 mt-16">
                <div className="space-y-6">
                    <h1 className="xl:text-5xl text-3xl leading-relaxed xl:leading-relaxed bg-gradient-to-r from-[#5DBEDE] to-[#ffffff] inline-block 
                        text-transparent bg-clip-text font-bold tracking-tight font-[Outfit]">
                        Are You Looking To Boost Your Style And Confidence?
                    </h1>
                </div>

                <div className="mt-6 lg:content-center lg:justify-self-center content-start justify-self-start">
                    <a className="btn relative inline-flex items-center justify-start overflow-hidden font-bold 
                        transition-all bg-indigo-100 hover:bg-white group py-3 px-7 font-[Manrope]">
                        <span className="w-56 h-48 bg-[#0A1F44] absolute bottom-0 left-0 translate-x-full 
                            ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 
                            group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-[#0A1F44] transition-colors 
                            duration-300 ease-in-out group-hover:text-white">
                            Contact Us Today
                        </span>
                    </a>
                </div>
            </section>

                <section className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-32 py-16 content-center">
                    <div id="therapy-container" className="w-full h-64 md:h-auto max-w-md mx-auto"></div>
                        <div className="space-y-6 self-center">
                            <h1 className="font-[Outfit] font-bold leading-relaxed text-2xl text-[#0A1F44]">
                                We Offer Rejuvenative Therapy To Get Your Health Back On Track
                            </h1>
                            <p className="font-[Manrope] leading-loose">
                                We help patients with early stages of bone diseases, arthritis/ osteoporosis, premature aging, stroke, diabetes, obesity, weakness, hypertension, etc. 
                                We also help with excess fat burning, bodybuilding, underweight issues, and internal organ re-activation (i.e., liver and kidney).
                            </p>
                            <div className="mt-6 content-center">
                                <a className="btn relative inline-flex items-center justify-start overflow-hidden font-bold transition-all bg-[#0A1F44] hover:bg-white group py-3 px-7 font-[Manrope]">
                                    <span className="w-56 h-48 bg-indigo-100 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-[#0A1F44]">Learn More</span>
                                </a>
                            </div>
                    </div>
                </section>




            <Footer />
        </>
    );
};

export default Home;
