import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 max-md:text-center">
            <h3 className="text-lg font-semibold">Contato</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Rua Example, 123
              <br />
              João Pessoa - PB
              <br />
              Tel: (83) 1234-5678
              <br />
              Email: contato@gourmet.com
            </p>
          </div>
          <div className="p-6 max-md:text-center">
            <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Segunda a Sexta: 12h - 23h
              <br />
              Sábado e Domingo: 12h - 00h
            </p>
          </div>
          <div className="p-6 max-md:text-center">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="mt-2 flex space-x-4 max-md:justify-center">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}