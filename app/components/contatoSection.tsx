import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua das Flores, 234 — Centro, São Paulo",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 99999-0000",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex: 6h — 21h | Sáb: 8h — 14h",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@equilibriopilates.com.br",
  },
];


export default function Contato(){
  return(
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-25 pt-25 pb-25 pl-5 pr-5 xl:ml-80 xl:mr-80">
          <div>
            <h3 className="font_mod text_green text-3xl mb-3 uppercase">Contato</h3>
            <h1 className="font_heading text-6xl mb-3">Venha nos <em>conhecer</em></h1>
            <p className="font_mod text-gray-600">Agende sua aula experimental gratuita e descubra como o Pilates pode transformar sua rotina. Estamos prontos para te receber!</p>

              <div>
            {contactInfo.map((item)=>(
              <div className="mt-5">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-2 icons_background">
                    <item.icon className="w-4 h-4 text-primary" />

                   
                    
                  </div>
                    <div className=" ml-13 -mt-10">
                   <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-0.5 social_icon">{item.label}</p>

                    <p className="font-body text-md text-foreground">
                      {item.value}
                    </p>
                 </div>

                 
                
              </div>
            ))}
             
             <div className="flex gap-4 mt-10 ">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors social_icon"
              >
                   <FaInstagram className="w-4 h-4 " />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors social_icon"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
             </div>

          </div>

          <div className=" p-10 border border-none rounded-3xl contato_back">
            <h2 className="text-6xl color_white">Sua primeira aula é por nossa conta</h2>
            <p className="color_white mt-5 mb-5">Experimente uma aula gratuita e sinta na prática os benefícios do Pilates. Sem compromisso — apenas movimento e bem-estar.</p>
            <a   href="https://wa.me/5588999541010"
              target="_blank"
              rel="noopener noreferrer" className="mt-10 bg-amber-50 rounded-full hover:bg-white w-90 h-20">Agendar pelo WhatsApp</a>
          </div>
      </section>
    </div>
  )
}