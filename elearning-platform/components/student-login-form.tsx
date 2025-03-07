"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export function StudentLoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call to Strapi
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to student dashboard on successful login
      router.push("/student/dashboard")
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="student-email">Email</Label>
          <Input id="student-email" type="email" placeholder="student@example.com" required />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="student-password">Password</Label>
            <Button variant="link" className="h-auto p-0 text-sm" asChild>
              <a href="/forgot-password">Forgot password?</a>
            </Button>
          </div>
          <Input id="student-password" type="password" required />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign In as Student
        </Button>
      </form>
    </div>
  )
}

