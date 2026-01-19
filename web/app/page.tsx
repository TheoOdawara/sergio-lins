"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center bg-bg-black text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-black via-bg-dark to-bg-black opacity-90" />
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Ginecologia & Obstetrícia
            </p>
            
            <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Cuidado especializado e humanizado para a saúde da mulher
            </h1>
            
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              Atendimento técnico, acolhedor e focado em você. 
              Saia da consulta com um plano claro e a segurança de um cuidado profissional.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5521973907869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-semibold text-bg-black transition-all hover:bg-gold-light hover:shadow-gold-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Agendar Consulta Agora
                <ArrowRight className="h-5 w-5" />
              </a>
              
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 border-2 border-gold px-8 py-4 font-semibold text-gold transition-all hover:bg-gold-light hover:text-bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Conheça o Dr. Sérgio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Próximas seções serão adicionadas aqui */}
    </main>
  );
}
