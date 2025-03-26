import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Target, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About EduLearn</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We're on a mission to transform online education and make quality learning accessible to everyone.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Join Our Community</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px]">
                  <img
                    src="/placeholder.svg?height=450&width=600"
                    alt="Team working together"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2020, EduLearn started with a simple idea: education should be accessible, engaging, and
                  effective for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">How We Started</h3>
                <p className="text-muted-foreground">
                  Our founders, a group of educators and technologists, recognized the limitations of traditional
                  education systems. They envisioned a platform that could break down barriers to learning and provide
                  high-quality education to anyone with an internet connection.
                </p>
                <p className="text-muted-foreground">
                  What began as a small collection of courses has grown into a comprehensive learning platform with
                  thousands of students worldwide.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  We believe that education is a fundamental right and that technology can democratize access to
                  knowledge. Our vision is to create a world where anyone, regardless of their background or
                  circumstances, can learn new skills, advance their career, and achieve their full potential.
                </p>
                <p className="text-muted-foreground">
                  We're committed to continuous innovation and improvement, always striving to provide the best learning
                  experience possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These core principles guide everything we do at EduLearn.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Accessibility</h3>
                  <p className="text-center text-muted-foreground">
                    Making quality education available to everyone, everywhere.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-center text-muted-foreground">
                    Striving for the highest quality in all our courses and content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-center text-muted-foreground">
                    Continuously improving our platform and teaching methods.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-center text-muted-foreground">
                    Fostering a supportive environment for learners and instructors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate people behind EduLearn.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <p className="text-center text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Impact</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The numbers that drive our mission forward.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="text-4xl font-bold">50K+</div>
                <p className="text-center text-muted-foreground">Students Worldwide</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="text-4xl font-bold">200+</div>
                <p className="text-center text-muted-foreground">Expert Instructors</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="text-4xl font-bold">500+</div>
                <p className="text-center text-muted-foreground">Courses Available</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="text-4xl font-bold">120+</div>
                <p className="text-center text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    avatar: "/placeholder.svg?height=96&width=96",
    bio: "Former professor with a passion for making education accessible to all. Sarah leads our vision and strategy.",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    avatar: "/placeholder.svg?height=96&width=96",
    bio: "Tech innovator with 15+ years of experience. Michael oversees our platform development and technology.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Content",
    avatar: "/placeholder.svg?height=96&width=96",
    bio: "Curriculum expert who ensures our courses meet the highest standards of quality and effectiveness.",
  },
  {
    name: "David Wilson",
    role: "Head of Instructor Relations",
    avatar: "/placeholder.svg?height=96&width=96",
    bio: "Works closely with our instructors to help them create engaging and impactful courses.",
  },
  {
    name: "Sophia Lee",
    role: "Head of Student Success",
    avatar: "/placeholder.svg?height=96&width=96",
    bio: "Dedicated to ensuring students have the support they need to achieve their learning goals.",
  },
  {
    name: "James Taylor",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=96&width=96",
    bio: "Creative strategist who helps spread our mission and connect students with the right courses.",
  },
]

