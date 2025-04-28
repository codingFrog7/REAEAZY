import React from "react";
import { LogOut, MoveUpRight, Settings, FileText, User } from "lucide-react";
import { Link } from "react-router-dom"; // Correct import for SPA

function UserProfile({
  name = "John Doe",
  role = "Prompt Engineer",
  avatar = "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
} = {}) {
  const menuItems = [
    {
      label: "Profile",
      icon: <User className="w-4 h-4" />,
      to: "/EditProfile",
    },
    {
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
      to: "/Settings",
    },
    {
      label: "Terms & Policies",
      icon: <FileText className="w-4 h-4" />,
      to: "/terms-policies",
    },
  ];

  return (
    <div className="w-64 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full ring-2 ring-zinc-800 object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-zinc-800" />
          </div>

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-white">{name}</h2>
            <p className="text-xs text-zinc-400">{role}</p>
          </div>
        </div>

        <div className="h-px bg-zinc-700 my-3" />

        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-xs font-medium text-white">{item.label}</span>
              </div>
              <MoveUpRight className="w-3 h-3 text-zinc-400" />
            </Link>
          ))}

          <button
            type="button"
            className="w-full flex items-center justify-between p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span className="text-xs font-medium text-white">Logout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

