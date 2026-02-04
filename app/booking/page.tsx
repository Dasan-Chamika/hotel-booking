import Image from "next/image"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Shield, Clock, CreditCard } from "lucide-react"

export const metadata = {
  title: "Book Your Stay | Haven Hotel",
  description: "Reserve your perfect room at Haven Hotel. Easy booking, best rates guaranteed, and flexible cancellation.",
}

const features = [
  {
    icon: Shield,
    title: "Best Rate Guarantee",
    description: "Book directly for the lowest price",
  },
  {
    icon: Clock,
    title: "Free Cancellation",
    description: "Cancel up to 24 hours before",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "256-bit encrypted checkout",
  },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=600&fit=crop"
            alt="Hotel reception"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-background/80 mb-4">
            Reservations
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background">
            Book Your Stay
          </h1>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3 text-primary-foreground">
                <feature.icon className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{feature.title}</p>
                  <p className="text-xs text-primary-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </div>
  )
}
