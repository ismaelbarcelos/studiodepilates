import { div, img } from "framer-motion/m";


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
      <section id="modalidades" className="pt-50">
        <div className=" flex-col mx-auto font_heading">
          <h2 className="text_green font-medium">Modalidades</h2>
          <h1>Encontre a aula <em>perfeita</em> para você</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

           {modalities.map((mod,indice)=>
           <div>
            <img src={mod.image} alt="" />
            <p className="mt-10">{mod.description}</p> 
            </div>)}
        
        </div>
        
      </section>
    </div>
  )
}