"use client"

import { useState } from "react" // Importar useState para controlar o menu
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils.js"
import { ThemeToggle } from "./theme-toggle"
import { LazyLoadImage } from "react-lazy-load-image-component"

const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Menu", href: "#menu" },
  { name: "Reservas", href: "#reservas" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Estado para controlar a visibilidade do menu

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = document.querySelector("header").offsetHeight // Altura do header
      const offset = element.offsetTop - headerHeight // Ajusta o scroll para considerar o header
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
      setIsMenuOpen(false) // Fecha o menu após o clique
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        {/* Logo e nome */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <LazyLoadImage 
              src="src/assets/logo3.png"
              width={90}
              onMouseOver={e => {
                e.currentTarget.style.transform = "scale(1.1)"
                e.currentTarget.style.transition = "transform 0.2s"
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.transition = "transform 0.2s"
              }}
              className="mr-2"
            />
            <span className="font-bold sm:inline-block ml-6 hover:text-foreground/80">Gourmet Restaurant</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll(item.href.substring(1))
                }}
                className={cn(
                  "transition-colors hover:text-foreground/80 cursor-pointer"
                )}
              >
                {item.name}
            </a>
          ))}
        </nav>
        </div>

        {/* Links de navegação (visíveis apenas em telas maiores) */}
        

        {/* Botão de alternar tema (sempre visível) */}

        {/* Botão do menu hambúrguer (visível apenas em telas pequenas) */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu móvel (visível apenas em telas pequenas e quando o menu está aberto) */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col space-y-2 p-4 text-sm font-medium border-t">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll(item.href.substring(1))
                }}
                className={cn(
                  "transition-colors hover:text-foreground/80 cursor-pointer"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}