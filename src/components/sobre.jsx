import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    title: "Tradição",
    description: "Preservamos técnicas culinárias tradicionais enquanto inovamos com criatividade.",
    icon: "🏺",
  },
  {
    title: "Qualidade",
    description: "Selecionamos cuidadosamente ingredientes frescos e de alta qualidade.",
    icon: "⭐",
  },
  {
    title: "Sustentabilidade",
    description: "Comprometidos com práticas sustentáveis e ingredientes locais.",
    icon: "🌱",
  },
  {
    title: "Experiência",
    description: "Criamos momentos memoráveis através da gastronomia e do ambiente.",
    icon: "✨",
  },
]

export default function Sobre() {
  return (
    <main className="container mx-auto px-4 py-8" id="sobre">
      <div className="max-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 underline decoration-2">Sobre Nós</h1>

        <section className="mb-16">
          <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-center text-lg text-muted-foreground">
                Bem-vindo ao Sabor de Brasil, um espaço onde a tradição encontra a inovação. Nossa história começou em
                1985, quando a família Silva decidiu transformar sua paixão pela culinária em um restaurante que
                celebrasse os sabores autênticos da gastronomia brasileira.
              </p>
          </div>
        </section>

        <section className="">
          <h2 className="text-3xl font-bold text-center mb-8">Conheça Nossos Valores</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}