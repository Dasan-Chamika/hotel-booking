import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Maximize } from "lucide-react"

export interface Room {
  id: string
  name: string
  description: string
  price: number
  image: string
  capacity: number
  size: number
  amenities: string[]
}

interface RoomCardProps {
  room: Room
  featured?: boolean
}

export function RoomCard({ room, featured = false }: RoomCardProps) {
  return (
    <Card className={`overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card ${featured ? 'lg:flex' : ''}`}>
      <div className={`relative ${featured ? 'lg:w-1/2' : 'aspect-[4/3]'}`}>
        <div className={featured ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : ''}>
          <Image
            src={room.image || "/placeholder.svg"}
            alt={room.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <CardContent className={`p-6 ${featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:p-10' : ''}`}>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {room.capacity} Guests
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            {room.size} m²
          </span>
        </div>
        <h3 className={`font-serif text-foreground mb-2 ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
          {room.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {room.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.slice(0, 4).map((amenity) => (
            <span
              key={amenity}
              className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-serif text-foreground">${room.price}</span>
            <span className="text-sm text-muted-foreground"> / night</span>
          </div>
          <Link href={`/rooms/${room.id}`}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
