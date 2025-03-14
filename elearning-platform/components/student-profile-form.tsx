"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

export function StudentProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "I'm a student passionate about web development and design.",
    location: "",
    website: "",
  });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call to Strapi
    setTimeout(() => {
      setIsLoading(false);
      // Show success message

      alert("Profile updated successfully!");
    }, 1000);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="/placeholder.svg?height=96&width=96"
              alt="Student"
            />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Change Avatar
          </Button>
        </div>
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                defaultValue={userData.firstName}
                onChange={(event) =>
                  setUserData((prev) => {
                    return { ...prev, firstName: event.target.value };
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                defaultValue={userData.lastName}
                onChange={(event) =>
                  setUserData((prev) => {
                    return { ...prev, lastName: event.target.value };
                  })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={userData.email}
              onChange={(event) =>
                setUserData((prev) => {
                  return { ...prev, email: event.target.value };
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell us about yourself"
          defaultValue={userData.bio}
          className="min-h-[120px]"
          onChange={(event) =>
            setUserData((prev) => {
              return { ...prev, bio: event.target.value };
            })
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            defaultValue={userData.location}
            onChange={(event) =>
              setUserData((prev) => {
                return { ...prev, location: event.target.value };
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            placeholder="http:abcd.com"
            defaultValue={userData.website}
            onChange={(event) =>
              setUserData((prev) => {
                return { ...prev, website: event.target.value };
              })
            }
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
}
