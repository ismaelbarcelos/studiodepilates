import { div, img } from "framer-motion/m";
import { motion } from "framer-motion";


const modalities = [
  {
    title: "Pilates Solo",
    description:
      "Aulas no solo utilizando acessórios como bola, faixa elástica e magic circle para fortalecimento e flexibilidade.",
    image: "https://media.base44.com/images/public/69fc8d9366c2521d149e38d2/7d0eaf9ff_generated_e3f05d0f.png",
  },
  {
    title: "Pilates Reformer",
    description:
      "Exercícios no Reformer que desafiam o corpo com resistência de molas, promovendo força e alongamento profundo.",
    image: "https://media.base44.com/images/public/69fc8d9366c2521d149e38d2/46ff2117f_generated_5b758a5c.png",
  },
  {
    title: "Pilates em Grupo",
    description:
      "Aulas em pequenos grupos de até 4 alunos com atenção individualizada e energia coletiva motivadora.",
    image: "https://media.base44.com/images/public/69fc8d9366c2521d149e38d2/ea40c7368_generated_2c20dd83.png",
  },
];

export default function Modalidade(){
  return(
    <div  >
      <section id="modalidades" className="pt-50 ">

           <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >


        <div className=" flex-col mx-auto ">
          <h2 className="text_green font_mod text-3xl mb-5 uppercase">Modalidades</h2>
          <h1 className="text-5xl font_heading">Encontre a aula <em>perfeita</em> para você</h1>
        </div>
         </motion.div>


        <div className="grid md:grid-cols-3 gap-8 xl:ml-80 xl:mr-80 m-5">

           {modalities.map((mod,indice)=>( 

             <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: indice * 0.25 }}
              className="group"
            >

           <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
            <img className="object-cover group-hover:scale-105 transition-transform duration-700" src={mod.image} alt={mod.title} />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-medium text-white">
                    {mod.title}
                  </h3>
                </div>
             </div>
          
             
            </div> 
             <p className="font-body text-md text-muted-foreground leading-relaxed mb-25 texto_modP font_mod">{mod.description}</p>
            </motion.div>))}
       
        </div>
        
      </section>
    </div>
  )
}