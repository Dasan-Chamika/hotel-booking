import { type Room } from "@/components/room-card";

export const rooms: Room[] = [
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    description:
      "Spacious suite featuring a king-size bed, elegant sitting area, and stunning city views. Perfect for those seeking refined comfort.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    capacity: 2,
    size: 45,
    amenities: [
      "King Bed",
      "City View",
      "Mini Bar",
      "Room Service",
      "Free WiFi",
      "Smart TV",
    ],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    description:
      "Modern room with premium amenities, workspace, and luxurious bathroom. Ideal for business travelers seeking comfort and productivity.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    capacity: 2,
    size: 35,
    amenities: [
      "Queen Bed",
      "Work Desk",
      "Coffee Maker",
      "Free WiFi",
      "Smart TV",
      "Safe",
    ],
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    description:
      "Our finest accommodation with separate living area, private balcony, and premium butler service. The ultimate in luxury.",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    capacity: 4,
    size: 75,
    amenities: [
      "King Bed",
      "Balcony",
      "Butler Service",
      "Jacuzzi",
      "Lounge Access",
      "Breakfast",
    ],
  },
  {
    id: "standard-room",
    name: "Standard Room",
    description:
      "Comfortable and well-appointed room with all essential amenities. A perfect choice for a pleasant stay.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    capacity: 2,
    size: 25,
    amenities: ["Double Bed", "Free WiFi", "Smart TV", "Air Conditioning"],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description:
      "Generously sized suite with connecting rooms, perfect for families. Features kid-friendly amenities and extra space.",
    price: 359,
    image:
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=1171&fit=crop",
    capacity: 4,
    size: 60,
    amenities: [
      "Two Beds",
      "Sofa Bed",
      "Kitchenette",
      "Free WiFi",
      "Game Console",
      "Kids Menu",
    ],
  },
  {
    id: "ocean-view",
    name: "Ocean View Room",
    description:
      "Wake up to breathtaking ocean views in this elegantly designed room with floor-to-ceiling windows.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?q=80&w=1170&fit=crop",
    capacity: 2,
    size: 40,
    amenities: [
      "King Bed",
      "Ocean View",
      "Balcony",
      "Mini Bar",
      "Free WiFi",
      "Spa Access",
    ],
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}
