"use client"

import React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { rooms } from "@/lib/rooms-data"
import { format, differenceInDays } from "date-fns"
import { CalendarIcon, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function BookingForm() {
  const searchParams = useSearchParams()
  const preselectedRoom = searchParams.get("room") || ""

  const [checkIn, setCheckIn] = useState<Date | undefined>()
  const [checkOut, setCheckOut] = useState<Date | undefined>()
  const [guests, setGuests] = useState("1")
  const [selectedRoom, setSelectedRoom] = useState(preselectedRoom)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const room = rooms.find((r) => r.id === selectedRoom)
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0
  const subtotal = room ? room.price * nights : 0
  const serviceFee = 25
  const total = subtotal + serviceFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowConfirmation(true)
  }

  const isFormValid =
    checkIn &&
    checkOut &&
    selectedRoom &&
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    nights > 0

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Room Selection */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="font-serif text-xl text-foreground mb-6">Select Your Room</h2>
          <Select value={selectedRoom} onValueChange={setSelectedRoom}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a room" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((r) => (
                <SelectItem key={r.id} value={r.id}>
                  {r.name} - ${r.price}/night
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Selection */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="font-serif text-xl text-foreground mb-6">Select Dates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">Check-in</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">Check-out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date <= (checkIn || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Guest Count */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="font-serif text-xl text-foreground mb-6">Number of Guests</h2>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Guest Information */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="font-serif text-xl text-foreground mb-6">Guest Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-sm text-muted-foreground mb-2 block">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm text-muted-foreground mb-2 block">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
          </div>
          <div className="mt-6">
            <Label htmlFor="specialRequests" className="text-sm text-muted-foreground mb-2 block">
              Special Requests
            </Label>
            <textarea
              id="specialRequests"
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Any special requirements or requests..."
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            />
          </div>
        </div>

        {/* Price Summary */}
        {room && nights > 0 && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="font-serif text-xl text-foreground mb-6">Price Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  ${room.price} x {nights} {nights === 1 ? "night" : "nights"}
                </span>
                <span className="text-foreground">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service fee</span>
                <span className="text-foreground">${serviceFee}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border font-medium">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">${total}</span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </Button>
      </form>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-accent" />
            </div>
            <DialogTitle className="text-center font-serif text-2xl">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you, {formData.firstName}! Your reservation has been confirmed. A confirmation email has been sent to {formData.email}.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-secondary rounded-lg p-4 mt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Room</p>
                <p className="font-medium text-foreground">{room?.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Guests</p>
                <p className="font-medium text-foreground">{guests}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Check-in</p>
                <p className="font-medium text-foreground">{checkIn && format(checkIn, "PP")}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Check-out</p>
                <p className="font-medium text-foreground">{checkOut && format(checkOut, "PP")}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setShowConfirmation(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
