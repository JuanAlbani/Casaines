"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Contáctanos</h1>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-navy-800 mb-6">Envíanos un mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>

              <Button type="submit" className="w-full bg-navy-700 hover:bg-navy-800 text-white">
                <Send className="h-4 w-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Información de contacto */}
          <div>
            <div className="bg-navy-50 p-8 rounded-lg mb-8">
              <h2 className="text-xl font-medium text-navy-800 mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-navy-600">contacto@casaines.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-navy-600">+54 9 11 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Zona de entrega</p>
                    <p className="text-navy-600">Ciudad de Buenos Aires y alrededores</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-navy-600">Lunes a viernes de 10 a 18 h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-medium text-navy-800 mb-6">Síguenos en redes sociales</h2>

              <div className="flex space-x-4">
                <a href="#" className="bg-navy-700 text-white p-3 rounded-full hover:bg-navy-800 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a href="#" className="bg-navy-700 text-white p-3 rounded-full hover:bg-navy-800 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a href="#" className="bg-navy-700 text-white p-3 rounded-full hover:bg-navy-800 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
