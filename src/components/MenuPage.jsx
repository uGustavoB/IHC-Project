"use client"

import { Button } from "@/components/ui/button"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { toast } from 'react-toastify';

const menuItems = {
  entradas: {
    imagemDestaque: "src/assets/churras.jpg", // Caminho da imagem de destaque
    items: [
      {
        name: "Caipirinha",
        description: "Bebida tradicional Brasileira à base de cachaça, limão e açúcar.",
        price: 99,
        image: "src/assets/caipirinha.jpg",
      },
      {
        name: "Acarajé",
        description: "Bolinho de feijão frito, recheado com vatapá, camarão e caruru.",
        price: 99,
        image: "src/assets/acaraje.jpg",
      },
      {
        name: "Canapé",
        description: "Fatias finas de peixe ao urucum sobre pequenos canapés.",
        price: 99,
        image: "src/assets/canape.jpg",
      },
    ]
  },
  principal: {
    imagemDestaque: "src/assets/torta.avif", // Caminho da imagem de destaque vazio (não será renderizado)
    items: [
      {
        name: "Carbonara",
        description: "Massa com ovos, queijo, guanciale e pimenta preta.",
        price: 99,
        image: "src/assets/carbonara.jpg",
      },
      {
        name: "Tacacá",
        description: "Sopa amazônica com tucupi, goma de tapioca, camarão e jambu.",
        price: 99,
        image: "src/assets/tacaca.jpg",
      },
      {
        name: "Parmegiana",
        description: "Carne empanada, molho de tomate e queijo derretido.",
        price: 99,
        image: "src/assets/parmegiana.webp",
      },
    ]
  },
  sobremesas: {
    imagemDestaque: "", // Caminho da imagem de destaque
    items: [
      {
        name: "Petite Gateau",
        description: "Bolinho de chocolate com centro cremoso.",
        price: 99,
        image: "src/assets/petit-gateau.webp",
      },
      {
        name: "Brownie",
        description: "Bolo denso e macio, rico em chocolate.",
        price: 99,
        image: "src/assets/brownie.jpg",
      },
      {
        name: "Banoffee",
        description: "Torta com base de banana, toffee e chocolate.",
        price: 99,
        image: "src/assets/banoffee.jpg",
      },
    ]
  },
}

const toastLoading = async () => {
  const id = toast.loading(`Carregando mais pratos`);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  toast.update(id, { render: "Erro ao carregar mais items.", type: "error", isLoading: false });

  await new Promise((resolve) => setTimeout(resolve, 4000));

  toast.dismiss(id);
}

export default function MenuPage() {
  return (
    <section className="container mx-auto px-4 py-8" id="menu">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 underline decoration-2">Nosso Menu</h1>

        {Object.entries(menuItems).map(([category, data], index) => {
          // Alterna a ordem das colunas com base no índice
          const isReversed = index % 2 !== 0;

          return (
            <div key={category}>
              <div className={`grid md:grid-cols-2 gap-8 mb-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                {/* Left side - Featured Image */}
                <div className="relative aspect-square">
                  <LazyLoadImage
                    src={`src/assets/${category}.jpg`}
                    alt={`${category} em destaque`}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>

                {/* Right side - Menu Items */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {category === 'entradas' ? 'Entradas' : category === 'principal' ? 'Menu Principal' : 'Sobremesas'}
                  </h2>

                  <div className="space-y-6">
                    {data.items.slice(0, 3).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <LazyLoadImage
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                            <div className="flex items-center">
                              <div className="border-b border-dotted border-gray-300 flex-1 mx-2"></div>
                              <span className="text-lg">R${item.price}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => toastLoading(category)}
                  >
                    Mais {category === 'entradas' ? 'entradas' : category === 'principal' ? 'pratos principais' : 'sobremesas'}
                  </Button>
                </div>
              </div>

              {data.imagemDestaque && (
                <div
                  className="bg-center bg-cover bg-no-repeat w-full h-[300px] max-lg:hidden mb-12 aspect-square rounded-lg"
                  style={{ backgroundImage: `url(${data.imagemDestaque})` }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}