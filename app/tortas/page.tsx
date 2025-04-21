"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Info, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos de ejemplo para las tortas
const tortas = [
  {
    id: 1,
    name: "Brownie",
    price: 6500,
    popularity: 9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Delicioso brownie con nueces y chocolate belga",
    ingredients: ["Chocolate belga", "Nueces", "Manteca", "Azúcar", "Huevos"],
    servings: "8-10 personas",
  },
  {
    id: 2,
    name: "Rogel",
    price: 7800,
    popularity: 10,
    image: "/placeholder.svg?height=300&width=300",
    description: "Clásico rogel con capas de masa y dulce de leche",
    ingredients: ["Masa hojaldrada", "Dulce de leche", "Merengue italiano"],
    servings: "10-12 personas",
  },
  {
    id: 3,
    name: "Marquise",
    price: 7200,
    popularity: 8,
    image: "/placeholder.svg?height=300&width=300",
    description: "Exquisita marquise de chocolate con crema y frutos rojos",
    ingredients: ["Chocolate semi amargo", "Crema", "Frutos rojos", "Manteca", "Azúcar"],
    servings: "8-10 personas",
  },
  {
    id: 4,
    name: "Havannet",
    price: 7500,
    popularity: 7,
    image: "/placeholder.svg?height=300&width=300",
    description: "Delicada torta con base de chocolate y mousse de dulce de leche",
    ingredients: ["Chocolate", "Mousse de dulce de leche", "Crema", "Azúcar"],
    servings: "10-12 personas",
  },
  {
    id: 5,
    name: "Cheesecake",
    price: 7200,
    popularity: 9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Suave cheesecake con base de galletas y cobertura de frutos rojos",
    ingredients: ["Queso crema", "Galletas", "Manteca", "Azúcar", "Frutos rojos"],
    servings: "8-10 personas",
  },
  {
    id: 6,
    name: "Soufflé de nuez",
    price: 8000,
    popularity: 6,
    image: "/placeholder.svg?height=300&width=300",
    description: "Esponjoso soufflé de nuez con dulce de leche",
    ingredients: ["Nueces", "Dulce de leche", "Huevos", "Azúcar", "Harina"],
    servings: "8-10 personas",
  },
  {
    id: 7,
    name: "Doble Oreo",
    price: 7500,
    popularity: 8,
    image: "/placeholder.svg?height=300&width=300",
    description: "Irresistible torta con galletas Oreo y crema chantilly",
    ingredients: ["Galletas Oreo", "Crema chantilly", "Chocolate", "Azúcar"],
    servings: "10-12 personas",
  },
  {
    id: 8,
    name: "Key Lime Pie",
    price: 6800,
    popularity: 7,
    image: "/placeholder.svg?height=300&width=300",
    description: "Refrescante pie de lima con base de galletas",
    ingredients: ["Lima", "Leche condensada", "Galletas", "Manteca", "Azúcar"],
    servings: "8-10 personas",
  },
  {
    id: 9,
    name: "Chocotorta",
    price: 6500,
    popularity: 10,
    image: "/placeholder.svg?height=300&width=300",
    description: "Clásica chocotorta con galletas de chocolate y dulce de leche",
    ingredients: ["Galletas de chocolate", "Dulce de leche", "Queso crema", "Café"],
    servings: "10-12 personas",
  },
]

export default function TortasPage() {
  const [sortBy, setSortBy] = useState("popularity")
  const [selectedTorta, setSelectedTorta] = useState<(typeof tortas)[0] | null>(null)
  const [showPopup, setShowPopup] = useState(false)

  // Ordenar las tortas según el criterio seleccionado
  const sortedTortas = [...tortas].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price
    } else if (sortBy === "price-desc") {
      return b.price - a.price
    } else if (sortBy === "popularity") {
      return b.popularity - a.popularity
    }
    return 0
  })

  const openPopup = (torta: (typeof tortas)[0]) => {
    setSelectedTorta(torta)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">NUESTRAS TORTAS</h1>

      {/* Filtro - más pequeño y alineado a la derecha */}
      <div className="mb-8 flex justify-end">
        <div className="w-48">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full text-sm">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Más vendidas</SelectItem>
              <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
              <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grilla de tortas - 3 por fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedTortas.map((torta) => (
          <div
            key={torta.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative">
              <Image
                src={torta.image || "/placeholder.svg"}
                alt={torta.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-navy-800">{torta.name}</h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text-navy-900 font-bold">${torta.price.toLocaleString("es-AR")}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="w-full text-navy-700 hover:bg-navy-50"
                  onClick={() => openPopup(torta)}
                >
                  <Info className="h-4 w-4 mr-2" />
                  Ver más info
                </Button>
                <Button className="w-full bg-navy-700 text-white hover:bg-navy-800">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Agregar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup de información del producto */}
      {showPopup && selectedTorta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
            <div className="relative">
              {/* Botón de cerrar */}
              <button onClick={closePopup} className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md z-10">
                <X className="h-6 w-6 text-navy-700" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Imagen */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={selectedTorta.image || "/placeholder.svg"}
                    alt={selectedTorta.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Información */}
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">{selectedTorta.name}</h2>
                  <p className="text-navy-700 mb-4">{selectedTorta.description}</p>

                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-navy-800 mb-2">Ingredientes:</h3>
                    <ul className="list-disc pl-5 text-navy-600">
                      {selectedTorta.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-navy-800 mb-1">Rinde para:</h3>
                    <p className="text-navy-600">{selectedTorta.servings}</p>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-navy-900 font-bold text-2xl">
                      ${selectedTorta.price.toLocaleString("es-AR")}
                    </span>
                    <Button className="bg-navy-700 text-white hover:bg-navy-800">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Botón Ver más */}
      <div className="mt-12 text-center">
        <Button className="bg-navy-700 text-white hover:bg-navy-800">Ver más</Button>
      </div>
    </div>
  )
}
