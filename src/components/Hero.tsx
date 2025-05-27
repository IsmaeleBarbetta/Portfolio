import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

import portrait from "../assets/images/portrait.jpg";
import cv from "../assets/CV_Ismaele_Barbetta.pdf";

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image Placeholder */}
                    <div className="flex justify-center md:justify-end order-2 md:order-1">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <img
                                            src={portrait}
                                            alt='portrait photo'
                                            className="w-full h-full object-cover rounded-xl scale-115"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur-lg opacity-30 -z-10"></div>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="order-1 md:order-2">
                        <div className="mb-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                                Ismaele
                                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Barbetta
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-6">
                                Studente e appassionato di informatica
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Sviluppatore in formazione con passione per l'innovazione tecnologica,
                                la programmazione e la creazione di soluzioni digitali moderne.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-slate-300">
                                <MapPin size={18} className="text-cyan-400" />
                                <span>Bologna, Italia</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <Mail size={18} className="text-cyan-400" />
                                <span>barbettaismaele@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <Phone size={18} className="text-cyan-400" />
                                <span>(+39) 348 937 5625</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href='#contact'>
                                <button className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105">
                                    Contattami
                                </button>
                            </a>
                            <a href={cv} target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer border border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all">
                                    Scarica CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-slate-400" size={24} />
            </div>
        </section>
    );
};

export default Hero;