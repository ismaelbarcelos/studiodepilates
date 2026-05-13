import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { div } from "framer-motion/m";

const depoimentos = [
 {
    name: "Mariana Costa",
    role: "Aluna há 2 anos",
    text: "O Pilates transformou minha qualidade de vida. As dores nas costas desapareceram e hoje tenho muito mais disposição no dia a dia.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Aluno há 1 ano",
    text: "Depois de uma lesão no joelho, o Pilates foi fundamental na minha reabilitação. Equipe incrível e muito atenciosa.",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    role: "Aluna há 3 anos",
    text: "O ambiente é maravilhoso e os instrutores são extremamente qualificados. Não consigo mais viver sem as minhas aulas!",
    rating: 5,
  },
]

export default function Depoimentos(){
  return (
   <div  >
         <section id="depoimentos" className="pt-30 ">
   
              <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.7 }}
             className="text-center mb-16"
           >
   
   
           <div className=" flex-col mx-auto ">
             <h2 className="text_green font_mod text-3xl mb-5 uppercase">Depoimentos</h2>
             <h1 className="text-5xl font_heading">O que nossos alunos <em>dizem</em></h1>
           </div>
            </motion.div>
   
   
           <div className="grid md:grid-cols-3 gap-8 xl:ml-80 xl:mr-80 m-5">
   
              {depoimentos.map((depo,indice)=>( 
   
                <motion.div
                 key={depo.name}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: indice * 0.25 }}
                 className="group card_border_depo rounded-2xl  mb-6 card_depo"
               >
   
              <div className="">
              
  
                     <div className="m-5 mt-15">
                    <div className="flex mb-2 primary"> 
                   {Array.from({length:depo.rating}).map((star,i)=>( 
                  <Star
                    key={i}
                    
                    className="w-4 h-4  fill-green-800"
                  />
                  ))}   
                       </div>
                    
                    <p className="mb-5 text-olive-700 font-medium italic">{depo.text}</p>
                     <h3 className="font_heading text-2xl font-medium text-black ">
                       {depo.name}
                     </h3>
                      <p className=" text-md mb-15 font_mod">{depo.role}</p>
                   
                </div>
             
                
               </div> 
               
               </motion.div>))}
          
           </div>
           
         </section>
       </div>
  )
}