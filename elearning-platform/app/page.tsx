"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
//@ts-ignore
import Cookies from "js-cookie";

import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check for the token in cookies
    const token = Cookies.get("authToken");
    if (token) {
      // Redirect to the dashboard if the token exists
      router.push("/student/dashboard");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
