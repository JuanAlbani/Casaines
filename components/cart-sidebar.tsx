"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ShoppingCart, Trash2 } from "lucide-react"

// Mock cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: "Torta de frutos rojos",
    price: "$6.500",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Box Merienda",
    price: "$8.500",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState(initialCartItems)

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = Number.parseFloat(item.price.replace("$", "").replace(".", ""))
        return total + price
      }, 0)
      .toLocaleString("es-AR")
  }

  // For demo purposes, toggle with a button
  // In a real app, this would be controlled by the header cart button
  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Demo toggle button - in real app this would be hidden */}
      <button
        onClick={toggleCart}
        className="fixed bottom-24 right-6 z-40 bg-navy-700 text-white p-3 rounded-full shadow-lg md:hidden"
        aria-label="Toggle cart"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-medium text-navy-900">Carrito de compras</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-navy-500 hover:text-navy-700"
              aria-label="Close cart"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-navy-300 mb-4" />
                <p className="text-navy-600">Tu carrito está vacío</p>
                <Button onClick={() => setIsOpen(false)} className="mt-4 bg-navy-700 hover:bg-navy-800 text-white">
                  Seguir comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-gray-100 pb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div className="ml-4 flex-grow">
                      <h4 className="text-navy-800 font-medium">{item.name}</h4>
                      <p className="text-navy-900 font-bold">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-navy-400 hover:text-navy-700"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="text-navy-700 font-medium">Total</span>
                <span className="text-navy-900 font-bold">${calculateTotal()}</span>
              </div>
              <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">Realizar pedido por WhatsApp</Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
