'use client'
import React from "react";
import Image from "next/image";
import BenefitsSection from "@/app/components/beneficiosSection";
import HeroSection from "@/app/components/horeSection";
import Navbar from "@/app/components/navbar";
import Sobre from "@/app/components/sobre";
import Modalidade from "@/app/components/modalidadeSection";
import Depoimentos from "./components/depoimentosSequetion";
import Contato from "./components/contatoSection";
import Footer from "./components/footerSection";

export default function AppPilates() {
  return (
  <div className="min-h-screen bg-background dark">
  <Navbar/>
  <HeroSection/>
  <Sobre/>
  <Modalidade/>
    <BenefitsSection/>
    <Depoimentos/>
    <Contato/>
    <Footer/>
  </div>  
    
  );
}
