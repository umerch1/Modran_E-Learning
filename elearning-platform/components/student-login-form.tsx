"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
//@ts-ignore
import Cookies from "js-cookie";
import axios from "axios";

export function StudentLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: user.email, // Strapi uses `identifier` for email/username
          password: user.password,
        }
      );

      const { jwt, user: loggedInUser } = response.data;

      // Store JWT in cookiesp
      Cookies.set("authToken", jwt, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: 7, // 7 days expiration
      });

      console.log("User logged in successfully:", loggedInUser);

      // Redirect to student dashboard on successful login
      router.push("/student/dashboard");
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="space-y-2">
          <Label htmlFor="student-email">Email</Label>
          <Input
            id="student-email"
            type="email"
            placeholder="student@example.com"
            required
            value={user.email}
            onChange={(event) =>
              setUser((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="student-password">Password</Label>
            <Button variant="link" className="h-auto p-0 text-sm" asChild>
              <a href="/forgot-password">Forgot password?</a>
            </Button>
          </div>
          <Input
            id="student-password"
            type="password"
            required
            value={user.password}
            onChange={(event) =>
              setUser((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign In as Student
        </Button>
      </form>
    </div>
  );
}
