import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <p className="text-sm text-gray-400">Manage your account and view recent activity.</p>
        </div>
        <Avatar>
          <AvatarImage src="" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </header>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-white text-black flex flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Here’s a summary of your latest actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Logged in from a new device.</li>
                  <li>Updated profile picture.</li>
                  <li>Viewed product: Wireless Headphones.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle>Account Stats</CardTitle>
                <CardDescription>Quick glance at your data.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Orders:</strong> 3</p>
                  <p><strong>Wishlist Items:</strong> 5</p>
                  <p><strong>Member Since:</strong> Jan 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Card className="bg-white text-black mt-4">
            <CardHeader>
              <CardTitle>Your Orders</CardTitle>
              <CardDescription>Track and review your past purchases.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">You have no recent orders.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-white text-black mt-4">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your personal information and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input id="name" type="text" className="w-full p-2 rounded bg-gray-100 text-black" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input id="email" type="email" className="w-full p-2 rounded bg-gray-100 text-black" placeholder="john@example.com" />
                </div>
                <Button className="mt-2">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
