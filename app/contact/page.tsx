"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Luxury Avenue", "City Center, State 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@havenhotel.com", "reservations@havenhotel.com"],
  },
  {
    icon: Clock,
    title: "Reception Hours",
    details: ["24/7 Front Desk", "Concierge: 7 AM - 11 PM"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=600&fit=crop"
            alt="Hotel exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-background/80 mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Contact Information
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                {"We'd Love to Hear From You"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Whether you have a question about our rooms, amenities, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-[16/9] bg-secondary rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                  alt="Map location"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card px-6 py-3 rounded-full shadow-lg">
                    <span className="text-sm font-medium text-foreground">View on Google Maps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg border border-border p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                    }}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-foreground mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                        Message *
                      </Label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
