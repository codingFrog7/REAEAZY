"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EditUser() {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Profile Card */}
        <Card className="bg-zinc-900 border border-zinc-700 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">My Profile</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24">
                <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-700 overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-0 right-0 p-1 bg-zinc-700 rounded-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Input Fields */}
            {[
              { id: "name", placeholder: "Your name", label: "Name" },
              { id: "username", placeholder: "Your username", label: "Username" },
              { id: "email", placeholder: "you@example.com", label: "Email", type: "email" },
              { id: "phone", placeholder: "+1234567890", label: "Phone Number", type: "tel" },
              { id: "bio", placeholder: "A short bio about you", label: "Bio" },
              { id: "website", placeholder: "https://yourwebsite.com", label: "Website" },
              { id: "location", placeholder: "City, Country", label: "Location" }
            ].map(({ id, placeholder, label, type = "text" }) => (
              <div className="space-y-2" key={id}>
                <Label htmlFor={id} className="text-white">{label}</Label>
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-400"
                />
              </div>
            ))}

            {/* Save Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <Button className="w-full bg-white text-black hover:bg-zinc-300 font-semibold">
                Save Changes
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
