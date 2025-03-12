"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import axios from "axios";

export function StudentRegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const { username, email, password, confirmPassword } = user;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setIsLoading(false);
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      // Make API call to Strapi
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username,
          email,
          password,
        }
      );

      console.log("Registration successful:", response.data);
      // Redirect to student dashboard on successful registration
      router.push("/student/dashboard");
    } catch (error: any) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.error?.message ||
          "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="user-name">User name</Label>
          <Input
            id="user-name"
            required
            placeholder="User Name"
            value={user.username}
            onChange={(event) =>
              setUser((prev) => {
                return { ...prev, username: event.target.value };
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="student@example.com"
            required
            value={user.email}
            onChange={(event) =>
              setUser((prev) => {
                return { ...prev, email: event.target.value };
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="Password"
            value={user.password}
            onChange={(event) =>
              setUser((prev) => {
                return { ...prev, password: event.target.value };
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            type="password"
            required
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={(event) =>
              setUser((prev) => {
                return { ...prev, confirmPassword: event.target.value };
              })
            }
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Create Account
        </Button>
      </form>
    </div>
  );
}
