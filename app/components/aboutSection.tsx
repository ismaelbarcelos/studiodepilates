
"use client"
import React from "react";

import { motion } from "framer-motion";
import { Heart, Zap, Brain, Smile, Shield, Sparkles } from "lucide";

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
          <p className="font-body text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Benefícios
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground leading-tight max-w-2xl mx-auto">
            Por que escolher o <em className="italic">Pilates</em>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border hover:border-primary/30 hover:bg-accent/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
             
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {b.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}