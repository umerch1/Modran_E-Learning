"use client";

import React, { useState, useEffect } from "react";
//@ts-ignore
import Cookies from "js-cookie"; // Importing Cookies library
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import axios from "axios";

export function StudentProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    
    firstName: "",
    lastName: "",
    email: "",
    bio: "I'm a student passionate about web development and design.",
    location: "",
    website: "",
    profileImage: "",
  });

  // Fetch user profile data from the API
  useEffect(() => {
    async function fetchUserData() {
      try {
        setIsLoading(true);
        const token = await Cookies.get("authToken"); // Get JWT from cookies
        if (!token) throw new Error("No token found");
        console.log("token", token);
        const response = await axios.get(
          "http://localhost:1337/api/users/me?populate=ProfileImage",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response_________", response.data);

        const data = response.data;
        setUserData({
          firstName: data.username || "",
          lastName: data.lastName || "",
          email: data.email || "",
          bio: data.bio || "",
          location: data.location || "",
          website: data.website || "",
          profileImage:
            data.ProfileImage.url || "/placeholder.svg?height=96&width=96",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserData();
  }, []);

  // Handle form submission
  async function onSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const token = Cookies.get("authToken"); // Get JWT from cookies
      if (!token) throw new Error("No token found");

      const response = await axios.put("http://localhost:1337/api/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: userData.firstName,
          email: userData.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();

      // Store updated token in cookies (if received)
      const newToken = data.jwt;
      if (newToken) {
        Cookies.set("authToken", newToken, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          expires: 7, // 7 days expiration
        });
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src={"http://localhost:1337" + userData.profileImage}
              alt={`${userData.firstName} ${userData.lastName}`}
            />
            <AvatarFallback>{userData.firstName}</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Change Avatar
          </Button>
        </div>
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">User name</Label>
              <Input
                id="first-name"
                value={userData.firstName}
                onChange={(event) =>
                  setUserData((prev) => ({
                    ...prev,
                    firstName: event.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userData.email}
              onChange={(event) =>
                setUserData((prev) => ({ ...prev, email: event.target.value }))
              }
            />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
}
