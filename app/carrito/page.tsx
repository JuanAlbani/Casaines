"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"

// Datos de ejemplo para el carrito
const initialCartItems = [
  {
    id: 1,
    name: "Torta de frutos rojos",
    price: 6500,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Box Merienda",
    price: 8500,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CarritoPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const calculateTotal = () => {
    return calculateSubtotal()
  }

  const handleCheckout = () => {
    // Implementar lógica de checkout
    alert("Redirigiendo a WhatsApp para finalizar tu pedido...")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-navy-900 mb-8">Tu Carrito</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-6">
            <ShoppingBag className="h-24 w-24 text-navy-300" />
          </div>
          <h2 className="text-2xl font-medium text-navy-800 mb-4">Tu carrito está vacío</h2>
          <p className="text-navy-600 mb-8">Parece que aún no has agregado productos a tu carrito.</p>
          <Link href="/tortas">
            <Button className="bg-navy-700 hover:bg-navy-800 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continuar comprando
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-medium text-navy-800">Productos ({cartItems.length})</h2>
              </div>

              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex-grow">
                      <h3 className="text-lg font-medium text-navy-800">{item.name}</h3>
                      <p className="text-navy-900 font-bold">${item.price.toLocaleString("es-AR")}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-navy-200 text-navy-600"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-navy-200 text-navy-600"
                      >
                        +
                      </button>
                    </div>

                    <div className="ml-6 text-right">
                      <p className="text-navy-900 font-bold">${(item.price * item.quantity).toLocaleString("es-AR")}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 mt-2 flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        <span className="text-sm">Eliminar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t">
                <Link href="/tortas">
                  <Button variant="outline" className="text-navy-700">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continuar comprando
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b">
                <h2 className="text-xl font-medium text-navy-800">Resumen del pedido</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-navy-600">Subtotal</span>
                  <span className="text-navy-900 font-medium">${calculateSubtotal().toLocaleString("es-AR")}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-navy-800 font-medium">Total</span>
                    <span className="text-navy-900 font-bold">${calculateTotal().toLocaleString("es-AR")}</span>
                  </div>
                </div>

                <Button onClick={handleCheckout} className="w-full bg-navy-700 hover:bg-navy-800 text-white">
                  Realizar pedido por WhatsApp
                </Button>

                <p className="text-xs text-navy-500 text-center mt-4">
                  Al finalizar tu compra, serás redirigido a WhatsApp para coordinar los detalles de entrega y pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
