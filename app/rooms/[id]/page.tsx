import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getRoomById, rooms } from "@/lib/rooms-data"
import { Users, Maximize, Check, ArrowLeft } from "lucide-react"

interface RoomPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }))
}

export async function generateMetadata({ params }: RoomPageProps) {
  const { id } = await params
  const room = getRoomById(id)
  if (!room) return { title: "Room Not Found" }
  return {
    title: `${room.name} | Haven Hotel`,
    description: room.description,
  }
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params
  const room = getRoomById(id)

  if (!room) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rooms
          </Link>
        </div>

        {/* Room Images */}
        <section className="container mx-auto px-4 lg:px-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=450&fit=crop"
                  alt="Room bathroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=450&fit=crop"
                  alt="Room view"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=600&h=450&fit=crop"
                  alt="Room amenities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=450&fit=crop"
                  alt="Room details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Room Details */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Room Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {room.capacity} Guests
                </span>
                <span className="flex items-center gap-1">
                  <Maximize className="h-4 w-4" />
                  {room.size} m²
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                {room.name}
              </h1>

              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {room.description}
              </p>

              <div className="border-t border-border pt-8 mb-8">
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Room Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="h-4 w-4 text-foreground" />
                      </div>
                      <span className="text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Room Policies
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Check-in</h3>
                    <p className="text-muted-foreground">From 3:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Check-out</h3>
                    <p className="text-muted-foreground">Until 11:00 AM</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Cancellation</h3>
                    <p className="text-muted-foreground">Free cancellation up to 24 hours before check-in</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Children</h3>
                    <p className="text-muted-foreground">Children of all ages welcome</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6 shadow-sm">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-3xl text-foreground">${room.price}</span>
                  <span className="text-muted-foreground">/ night</span>
                </div>

                <div className="border border-border rounded-lg mb-6">
                  <div className="grid grid-cols-2 border-b border-border">
                    <div className="p-3 border-r border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Check-in</p>
                      <p className="text-sm font-medium text-foreground">Select date</p>
                    </div>
                    <div className="p-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Check-out</p>
                      <p className="text-sm font-medium text-foreground">Select date</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Guests</p>
                    <p className="text-sm font-medium text-foreground">1 guest</p>
                  </div>
                </div>

                <Link href={`/booking?room=${room.id}`}>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-4">
                    Reserve Now
                  </Button>
                </Link>

                <p className="text-center text-sm text-muted-foreground">
                  {"You won't be charged yet"}
                </p>

                <div className="border-t border-border mt-6 pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">${room.price} x 1 night</span>
                    <span className="text-foreground">${room.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="text-foreground">$25</span>
                  </div>
                  <div className="flex justify-between font-medium pt-4 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">${room.price + 25}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
