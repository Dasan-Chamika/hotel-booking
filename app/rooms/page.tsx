import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RoomCard } from "@/components/room-card"
import { rooms } from "@/lib/rooms-data"

export const metadata = {
  title: "Rooms & Suites | Haven Hotel",
  description: "Explore our collection of thoughtfully designed rooms and suites, each offering exceptional comfort and modern amenities.",
}

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&h=800&fit=crop"
            alt="Luxury hotel room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-background/80 mb-4">
            Accommodations
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background">
            Rooms & Suites
          </h1>
        </div>
      </section>

      {/* Room Filters Info */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{rooms.length}</span> available rooms
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">Sort by:</span>
              <button type="button" className="text-foreground font-medium hover:text-accent transition-colors">
                Price: Low to High
              </button>
              <span className="text-border">|</span>
              <button type="button" className="text-muted-foreground hover:text-foreground transition-colors">
                Price: High to Low
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Every Room Includes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our accommodations come with premium amenities to ensure your comfort.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Free WiFi", description: "High-speed internet access" },
              { title: "Daily Housekeeping", description: "Fresh linens and towels" },
              { title: "24/7 Concierge", description: "At your service always" },
              { title: "Room Service", description: "Dining in your room" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
