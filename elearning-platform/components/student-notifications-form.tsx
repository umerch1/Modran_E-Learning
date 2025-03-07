"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Icons } from "@/components/icons"

export function StudentNotificationsForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call to Strapi
    setTimeout(() => {
      setIsLoading(false)
      // Show success message
      alert("Notification preferences updated successfully!")
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Email Notifications</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-course-updates" className="flex-1">
              Course updates and announcements
            </Label>
            <Switch id="email-course-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-assignment-reminders" className="flex-1">
              Assignment reminders
            </Label>
            <Switch id="email-assignment-reminders" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-discussion-replies" className="flex-1">
              Discussion replies
            </Label>
            <Switch id="email-discussion-replies" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-promotions" className="flex-1">
              Promotions and new courses
            </Label>
            <Switch id="email-promotions" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">In-App Notifications</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="app-course-updates" className="flex-1">
              Course updates and announcements
            </Label>
            <Switch id="app-course-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="app-assignment-reminders" className="flex-1">
              Assignment reminders
            </Label>
            <Switch id="app-assignment-reminders" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="app-discussion-replies" className="flex-1">
              Discussion replies
            </Label>
            <Switch id="app-discussion-replies" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="app-messages" className="flex-1">
              Direct messages
            </Label>
            <Switch id="app-messages" defaultChecked />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Save Preferences
      </Button>
    </form>
  )
}

