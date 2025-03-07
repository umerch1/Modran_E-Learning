"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Icons } from "@/components/icons"

export function AdminSecurityForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call to Strapi
    setTimeout(() => {
      setIsLoading(false)
      // Show success message
      alert("Security settings updated successfully!")
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current password</Label>
          <Input id="current-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New password</Label>
          <Input id="new-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input id="confirm-password" type="password" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <div className="font-medium">Authenticator App</div>
            <div className="text-sm text-muted-foreground">Use an authenticator app to generate one-time codes.</div>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <div className="font-medium">Text Message</div>
            <div className="text-sm text-muted-foreground">Use your phone number to receive verification codes.</div>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Admin Privileges</h3>
        <div className="rounded-lg border p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="manage-users" className="flex-1">
                Manage Users
              </Label>
              <Switch id="manage-users" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="manage-courses" className="flex-1">
                Manage Courses
              </Label>
              <Switch id="manage-courses" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="manage-billing" className="flex-1">
                Manage Billing
              </Label>
              <Switch id="manage-billing" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="system-settings" className="flex-1">
                System Settings
              </Label>
              <Switch id="system-settings" defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  )
}

