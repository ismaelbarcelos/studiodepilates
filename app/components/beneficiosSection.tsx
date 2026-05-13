
"use client"
import React from "react";

import { motion } from "framer-motion";
import { Heart, Zap, Brain, Smile, Shield, Sparkles } from "lucide-react";
import { div } from "framer-motion/m";

const benefits = [
  {
    icon: Heart,
    title: "Saúde Postural",
    description: "Corrija desvios posturais e alivie dores crônicas com exercícios direcionados.",
  },
  {
    icon: Zap,
    title: "Força e Tonificação",
    description: "Fortaleça e tonifique sua musculatura de forma equilibrada e funcional.",
  },
  {
    icon: Brain,
    title: "Concentração",
    description: "Desenvolva a conexão mente-corpo e melhore sua capacidade de foco.",
  },
  {
    icon: Smile,
    title: "Bem-estar",
    description: "Reduza o estresse e a ansiedade enquanto cuida do seu corpo.",
  },
  {
    icon: Shield,
    title: "Prevenção de Lesões",
    description: "Fortaleça articulações e melhore a estabilidade para prevenir lesões.",
  },
  {
    icon: Sparkles,
    title: "Flexibilidade",
    description: "Ganhe amplitude de movimento e melhore a elasticidade muscular.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text_green font_mod text-3xl mb-5 uppercase">
            Benefícios
          </p>
          <h2 className="text-5xl font_heading md:text-6xl">
            Por que escolher o <em className="italic">Pilates</em>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 card_backG_bene">
          {benefits.map((b, i) => (
            
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className=" p-8 rounded-2xl duration-500  card_border "
            >
              
              <div className="p-4 w-7 h-5 ">
               <b.icon className="w-10 h-10 -mt-8 -ml-4 p-2 text-primary border rounded-full icons_background" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2 text-black">
                {b.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed texto_modP">
                {b.description}
              </p>
            
            </motion.div>
           
          ))}
        </div>
      </div>
    </section>
  );
}