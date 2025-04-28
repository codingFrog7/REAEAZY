import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { SparklesCore } from "@/components/ui/sparkles"
import HeroSlider from "./MiniCOP/HeroSlider"
import GetInTouch from "./GetInTouch"

export default function Landing() {
  const [date, setDate] = useState(new Date())
  const [activeCategory, setActiveCategory] = useState("All")

  const listings = [
    {
      id: 1,
      title: "Affordable Boys PG in Sector 62",
      location: "Noida, Uttar Pradesh",
      price: "₹6,000/month",
      rating: 4.2,
      image: "https://media.istockphoto.com/id/474474056/photo/interior-of-a-children-bedroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=DsJbZndsLUbnlOU_wGm9570Ntj0D1kt_0pYyOJsiC3g=",
      type: "Boys PG"
    },
    {
      id: 2,
      title: "Girls PG near Viman Nagar",
      location: "Pune, Maharashtra",
      price: "₹7,500/month",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Girls PG",
    },
    {
      id: 3,
      title: "Shared Rental in Koramangala",
      location: "Bangalore, Karnataka",
      price: "₹8,000/month",
      rating: 4.0,
      image: "https://media.istockphoto.com/id/665182294/photo/construction-materials-furniture-and-phone-are-on-the-floor-of-apartment-in-the-hotel-during.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q0vpDXZTZ3Dubk8uCsJVVnztW8VAcrDG4_1Zj2F5ZP0=",
      type: "Rental Room",
    },
    {
      id: 4,
      title: "Budget PG for Students in Kothrud",
      location: "Pune, Maharashtra",
      price: "₹5,500/month",
      rating: 3.8,
      image: "https://media.istockphoto.com/id/466227744/photo/interior-of-a-children-bedroom.jpg?s=612x612&w=0&k=20&c=gOtUcREyY_VL8BBA2rtuIFdFr1kR5xIKw81J7NxvVzs=",
      type: "Student PG",
    },
    {
      id: 5,
      title: "Girls Hostel near North Campus",
      location: "New Delhi, Delhi",
      price: "₹7,000/month",
      rating: 4.7,
      image: "https://media.istockphoto.com/id/1375892095/photo/organized-bedroom-at-home-or-hotel-conept-of-hygiene-service-and-well-maintained-hospitality.jpg?s=612x612&w=0&k=20&c=rqfokjPpaI2Sa-XFHufeStxWfks6HxYK4OKjX7DyD_A=",
      type: "Girls Hostel"
    },
    {
      id: 6,
      title: "Working Men's PG in Ameerpet",
      location: "Hyderabad, Telangana",
      price: "₹6,200/month",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1708616178113-f687b1113414?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Mens PG",
    },
    {
      id: 7,
      title: "Student PG near LPU Campus",
      location: "Phagwara, Punjab",
      price: "₹4,800/month",
      rating: 3.9,
      image: "https://media.istockphoto.com/id/2198113175/photo/interior-of-vintage-style-bedroom-with-with-window-curtains.jpg?s=612x612&w=0&k=20&c=94lLPf67kJsR2Csa0J5eiZyvsos4Urx4D_OibXq9lh8=",
      type: "Student PG",
    },
    {
      id: 8,
      title: "Girls PG in Salt Lake Sector V",
      location: "Kolkata, West Bengal",
      price: "₹6,800/month",
      rating: 4.3,
      image: "https://media.istockphoto.com/id/1395224980/photo/a-holy-city-north-india-filled-with-temples-and-religious-places.jpg?s=612x612&w=0&k=20&c=0mLTGDaGiuifFJko9sC0Xo-bWSNoFXQxgrtK5N4NMco=",
      type: "Girls PG",
    },
  ];

  const categories = [
    "All",
    "Girls PG",
    "Boys PG",
    "Shared Rooms",
    "Private Rooms",
    "Hostels",
    "For Working Professionals",
    "Near Colleges",
  ];

  const filteredListings = activeCategory === "All" 
    ? listings 
    : listings.filter(listing => listing.type.includes(activeCategory.replace("s PG", " PG")));

  return (
    <div className="min-h-screen text-white font-sans relative">
      <div className="fixed inset-0 z-0 bg-black">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <HeroSlider />
        
        {/* Improved Category Navigation */}
        <nav className="sticky top-0 z-20 px-4 py-2 border-b border-white bg-black/80 backdrop-blur-sm overflow-x-auto">
          <div className="flex gap-2 w-max">
            {categories.map((cat) => (
              <Button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                variant="ghost"
                className={`whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full transition-all ${
                  activeCategory === cat 
                    ? "bg-white text-black hover:bg-white/90" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </nav>

      
        <section className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredListings.map((listing) => (
              <Card
                key={listing.id}
                className="group bg-neutral-900/80 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:border-white hover:shadow-white/10"
              >
                <CardHeader className="p-0 relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {listing.type}
                  </span>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base text-white sm:text-lg font-semibold line-clamp-2 mb-1">
                    {listing.title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-white/70 mb-2 line-clamp-1">
                    {listing.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-medium text-white">
                      {listing.price}
                    </span>
                    <span className="flex items-center gap-1 text-sm bg-white/10 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      {listing.rating}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">No listings found for this category</p>
            </div>
          )}
        </section>

        <footer className="p-6 border-t border-white/20 text-center text-sm text-white bg-black/50 backdrop-blur-sm">
          <div className="flex justify-center items-center gap-4">
            <GetInTouch />
          </div>
          <p className="mt-4 text-white/50">
            © {new Date().getFullYear()} PG Finder. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}