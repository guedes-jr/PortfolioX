"use client"

import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel"
import { cn } from "@/src/lib/utils"

const backgrounds = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Invista no seu futuro",
    description: "Acompanhe seus investimentos de forma simples e intuitiva",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Tome decisões informadas",
    description: "Análises detalhadas para melhorar seus investimentos",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Controle total",
    description: "Gerencie sua carteira de investimentos em um só lugar",
  },
]

export function BackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-[1]" />
      <Carousel
        className="absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {backgrounds.map((bg, index) => (
            <CarouselItem key={index} className="relative h-screen w-screen p-0">
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  isLoaded ? "opacity-100" : "opacity-0",
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${bg.image})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="max-w-2xl text-center">
                    <h2
                      className={cn(
                        "mb-4 text-4xl font-bold tracking-tight transition-all duration-700",
                        currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                      )}
                    >
                      {bg.title}
                    </h2>
                    <p
                      className={cn(
                        "text-lg transition-all duration-700 delay-200",
                        currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                      )}
                    >
                      {bg.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

