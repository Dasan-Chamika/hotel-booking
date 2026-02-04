import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RoomCard } from "@/components/room-card"
import { rooms } from "@/lib/rooms-data"
import { Star, Wifi, Coffee, Car, Sparkles } from "lucide-react"

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Coffee, label: "Restaurant & Bar" },
  { icon: Car, label: "Free Parking" },
  { icon: Sparkles, label: "Spa & Wellness" },
]

export default function HomePage() {
  const featuredRooms = rooms.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
            alt="Haven Hotel exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-background/80 mb-4">
            Welcome to Haven
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background mb-6 text-balance">
            Experience Refined Elegance
          </h1>
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover a sanctuary of comfort and sophistication. Where every detail is crafted for your perfect stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rooms">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8">
                Explore Rooms
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground px-8 bg-transparent">
                Book Your Stay
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {amenities.map((amenity) => (
              <div key={amenity.label} className="flex items-center gap-2 text-primary-foreground">
                <amenity.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=1000&fit=crop"
                  alt="Hotel lobby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Rated excellent by 2,500+ guests
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                A Tradition of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 1985, Haven Hotel has been a beacon of hospitality, offering guests an unparalleled experience of comfort and elegance. Our commitment to exceptional service has made us a cherished destination for travelers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From our thoughtfully designed rooms to our world-class amenities, every aspect of your stay is crafted with care and attention to detail.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Accommodations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Our Signature Rooms
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each room is a sanctuary of comfort, designed with meticulous attention to detail and equipped with premium amenities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/rooms">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=800&fit=crop"
            alt="Hotel pool"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background mb-6">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="text-background/90 max-w-2xl mx-auto mb-8 text-lg">
            Book directly for the best rates and exclusive perks including complimentary breakfast and late checkout.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-12">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
