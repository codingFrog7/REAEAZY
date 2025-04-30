"Use client";

import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Tabs from "./MiniCOP/Tabs";
import ActionSearchBar from "./MiniCOP/searchbar";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-20 px-6 bg-black border-b-4 flex items-center justify-evenly rounded-b-2xl z-50">
      {/* Logo */}
      <div className="text-white font-['Fliege_Mono'] bg- font-extrabold text-xl border-8 leading-4 p-1 border-white">
        RENT<br />EAZY
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-auto md:w-2/3 ">
        <ActionSearchBar />

        <Tabs />

        {/* User Profile Button */}
        <div className="relative">
          <Button 
            variant="ghost" 
            className="bg-gradient-to-r from-amber-600 to-amber-400"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <User />
          </Button>

          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-2 z-50">
              <UserProfile />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black px-6 py-4 flex flex-col gap-4 md:hidden border-t border-white">
          <Tabs />
          <ActionSearchBar />
        </div>
      )}
    </div>
  );
}
