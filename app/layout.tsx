import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import CartProvider from "@/components/cart-provider"
import FloatingCart from "@/components/floating-cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Casa Inés - Catering Dulce",
  description: "Especialistas en servicios de catering dulce para hacer de cada evento un momento único y riquísimo.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
            <WhatsAppButton phoneNumber="+5491112345678" />
            <FloatingCart />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
