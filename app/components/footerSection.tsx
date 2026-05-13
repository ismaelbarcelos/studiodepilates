

export default function Footer(){
  return (
    <div>
     <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#hero" className="font-heading text-xl font-semibold text-foreground">
          Equilíbrio<span className="text-primary">.</span>
        </a>
        <p className="font-body text-md text-muted-foreground">
          © {new Date().getFullYear()} Estúdio Equilíbrio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
    </div>
  )
}