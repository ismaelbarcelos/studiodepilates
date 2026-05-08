import { div } from "framer-motion/m";
import { Content } from "next/font/google";

const STUDIO_IMAGE = "https://media.base44.com/images/public/69fc8d9366c2521d149e38d2/bd2d1a553_generated_4f4c993e.png";


export default function Sobre(){
return(

 <div id="sobre">
  <section className=" grid grid-cols-1 md:grid-cols-2 gap-25 pt-25 pb-25 pl-5 pr-5 xl:ml-80 xl:mr-80">

   <div className="aspect-[5/4] rounded-2xl overflow-hidden mt-25"> 
   
   <img src={STUDIO_IMAGE} alt="" className="w-full h-full object-cover " />
    </div>



    <div className="">
      <h2 className="font-body text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4 text_green">SOBRE NÓS</h2>

      <h1 className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-6 leading-tight">Um espaço criado para o seu <em>equilíbrio</em> </h1>

      <div className="space-y-4  text-muted-foreground leading-relaxed texto_sobre">
        <p>
        O Estúdio Equilíbrio nasceu da paixão pelo movimento consciente e pela busca do bem-estar integral. Nosso espaço foi pensado para proporcionar uma experiência única, com ambiente acolhedor e equipamentos de última geração.
      </p>
      <p>
        Com uma equipe de instrutores especializados e certificados, oferecemos atendimento personalizado para cada aluno, respeitando limites e potencializando resultados.
      </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10 font_heading">
      <p className="text-4xl font-medium">500+</p>
       <p className="text-4xl font-medium">8</p>
      <p className="text-4xl font-medium">15</p>
      <p className="-mt-7  text_green ">Alunos</p>
      <p className="-mt-7  text_green ">Instrutores</p>
       <p className="-mt-7  text_green ">Modalidades</p>
      </div>
      
    </div>

  </section>

   
  </div>
);
}