"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// @ts-ignore
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

interface StudentDashboardLayoutProps {
  children: ReactNode;
}

export function StudentDashboardLayout({
  children,
}: StudentDashboardLayoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the auth token from cookies
    Cookies.remove("authToken");
    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex  items-center space-x-2">
            <img
              src="/images/icon.png"
              width={200}
              height={100}
              alt="EduLearn"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Calendar className="h-5 w-5" />
            </Button>
            <Link href="/student/profile">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="Student"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-background hidden md:block">
          <div className="flex flex-col gap-2 p-4">
            <Link href="/student/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/student/courses">
              <Button variant="ghost" className="w-full justify-start">
                <BookOpen className="mr-2 h-5 w-5" />
                My Courses
              </Button>
            </Link>
            <Link href="/student/calendar">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-5 w-5" />
                Calendar
              </Button>
            </Link>
            <Link href="/student/messages">
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-5 w-5" />
                Messages
              </Button>
            </Link>
            <Link href="/student/profile">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </Link>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
