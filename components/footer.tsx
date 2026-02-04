import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Haven</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Experience refined elegance and exceptional comfort at our boutique hotel. Your perfect escape awaits.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                123 Luxury Avenue, City
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                hello@havenhotel.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Hours</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Check-in: 3:00 PM</li>
              <li>Check-out: 11:00 AM</li>
              <li>Reception: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Haven Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
