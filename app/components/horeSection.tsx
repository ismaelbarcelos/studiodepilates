"use client";
import React from "react";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/69fc8d9366c2521d149e38d2/af441dc00_generated_305acc04.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Interior elegante do estúdio de pilates com luz natural"
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6"
          >
            Estúdio de Pilates
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font_heading text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] text-foreground mb-6"
          >
            Mova-se
            <br />
            com <em className="italic text-primary text_green">propósito</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg "
          >
            Descubra o poder do Pilates para transformar seu corpo e mente.
            Aulas personalizadas em um espaço pensado para o seu bem-estar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="font-body text-sm font-medium bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity color_green"
            >
              Agende sua Aula Experimental
            </a>
            <a
              href="#sobre"
              className="font-body text-sm font-medium border border-foreground/20 text-foreground px-8 py-4 rounded-full hover:bg-foreground/5 transition-colors cor_clara"
            >
              Conheça o Estúdio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}