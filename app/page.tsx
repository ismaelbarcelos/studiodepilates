'use client'
import React from "react";
import Image from "next/image";
import BenefitsSection from "@/app/components/aboutSection";
import HeroSection from "@/app/components/horeSection";
import Navbar from "@/app/components/navbar";
import Sobre from "@/app/components/sobre";
import Modalidade from "@/app/components/modalidadeSection";

export default function AppPilates() {
  return (
  <div className="min-h-screen bg-background dark">
  <Navbar/>
  <HeroSection/>
  <Sobre/>
  <Modalidade/>
    <BenefitsSection/>
  </div>  
    
  );
}
