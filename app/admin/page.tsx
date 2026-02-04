"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Home,
  Calendar,
  Users,
  DollarSign,
  Search,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  LogOut,
} from "lucide-react"

// Mock booking data
const mockBookings = [
  {
    id: "BK001",
    guest: "John Smith",
    email: "john@example.com",
    room: "Deluxe Suite",
    checkIn: "2026-02-10",
    checkOut: "2026-02-13",
    guests: 2,
    total: 922,
    status: "confirmed",
  },
  {
    id: "BK002",
    guest: "Sarah Johnson",
    email: "sarah@example.com",
    room: "Executive Room",
    checkIn: "2026-02-12",
    checkOut: "2026-02-14",
    guests: 1,
    total: 423,
    status: "pending",
  },
  {
    id: "BK003",
    guest: "Michael Brown",
    email: "michael@example.com",
    room: "Premium Suite",
    checkIn: "2026-02-15",
    checkOut: "2026-02-20",
    guests: 4,
    total: 2520,
    status: "confirmed",
  },
  {
    id: "BK004",
    guest: "Emily Davis",
    email: "emily@example.com",
    room: "Standard Room",
    checkIn: "2026-02-11",
    checkOut: "2026-02-12",
    guests: 2,
    total: 154,
    status: "cancelled",
  },
  {
    id: "BK005",
    guest: "David Wilson",
    email: "david@example.com",
    room: "Ocean View Room",
    checkIn: "2026-02-14",
    checkOut: "2026-02-17",
    guests: 2,
    total: 772,
    status: "confirmed",
  },
  {
    id: "BK006",
    guest: "Lisa Martinez",
    email: "lisa@example.com",
    room: "Family Suite",
    checkIn: "2026-02-18",
    checkOut: "2026-02-22",
    guests: 4,
    total: 1461,
    status: "pending",
  },
]

const stats = [
  {
    label: "Total Bookings",
    value: "156",
    change: "+12%",
    icon: Calendar,
  },
  {
    label: "Active Guests",
    value: "24",
    change: "+5%",
    icon: Users,
  },
  {
    label: "Revenue (MTD)",
    value: "$45,890",
    change: "+18%",
    icon: DollarSign,
  },
  {
    label: "Occupancy Rate",
    value: "78%",
    change: "+8%",
    icon: Home,
  },
]

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBooking, setSelectedBooking] = useState<typeof mockBookings[0] | null>(null)

  const filteredBookings = mockBookings.filter(
    (booking) =>
      booking.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.room.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="font-serif text-xl">
                Haven
              </Link>
              <span className="text-primary-foreground/60 text-sm">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm hidden md:inline">admin@havenhotel.com</span>
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                  <LogOut className="h-4 w-4 mr-2" />
                  Exit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage bookings and monitor hotel performance.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <p className="text-2xl font-serif text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="bg-card rounded-lg border border-border">
          <div className="p-6 border-b border-border">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <h2 className="font-serif text-xl text-foreground">Recent Bookings</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-full sm:w-64"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Guest</TableHead>
                  <TableHead className="hidden md:table-cell">Room</TableHead>
                  <TableHead className="hidden lg:table-cell">Check-in</TableHead>
                  <TableHead className="hidden lg:table-cell">Check-out</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{booking.guest}</p>
                        <p className="text-sm text-muted-foreground hidden sm:block">{booking.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{booking.room}</TableCell>
                    <TableCell className="hidden lg:table-cell">{booking.checkIn}</TableCell>
                    <TableCell className="hidden lg:table-cell">{booking.checkOut}</TableCell>
                    <TableCell>${booking.total}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setSelectedBooking(booking)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          {booking.status === "pending" && (
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Confirm
                            </DropdownMenuItem>
                          )}
                          {booking.status !== "cancelled" && (
                            <DropdownMenuItem className="text-destructive">
                              <XCircle className="mr-2 h-4 w-4" />
                              Cancel
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">No bookings found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      {/* Booking Detail Modal */}
      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Booking Details</DialogTitle>
            <DialogDescription>
              Booking ID: {selectedBooking?.id}
            </DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Guest Name</p>
                  <p className="font-medium text-foreground">{selectedBooking.guest}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{selectedBooking.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Room</p>
                  <p className="font-medium text-foreground">{selectedBooking.room}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Guests</p>
                  <p className="font-medium text-foreground">{selectedBooking.guests}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Check-in</p>
                  <p className="font-medium text-foreground">{selectedBooking.checkIn}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Check-out</p>
                  <p className="font-medium text-foreground">{selectedBooking.checkOut}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="font-medium text-foreground">${selectedBooking.total}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  {getStatusBadge(selectedBooking.status)}
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border">
                {selectedBooking.status === "pending" && (
                  <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                    Confirm Booking
                  </Button>
                )}
                {selectedBooking.status !== "cancelled" && (
                  <Button variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent">
                    Cancel Booking
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
