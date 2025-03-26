import { StudentDashboardLayout } from "@/components/student-dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock } from "lucide-react"

export default function StudentCoursesPage() {
  return (
    <StudentDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <Button>Browse New Courses</Button>
      </div>

      <Tabs defaultValue="in-progress" className="space-y-6">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course, index) => (
              <CourseCard key={index} course={course} status="in-progress" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course, index) => (
              <CourseCard key={index} course={course} status="completed" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookmarked">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookmarkedCourses.map((course, index) => (
              <CourseCard key={index} course={course} status="bookmarked" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </StudentDashboardLayout>
  )
}

interface CourseCardProps {
  course: {
    title: string
    description: string
    image: string
    instructor: string
    duration: string
    progress?: number
    lessons?: number
    level: string
  }
  status: "in-progress" | "completed" | "bookmarked"
}

function CourseCard({ course, status }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant={status === "in-progress" ? "default" : status === "completed" ? "success" : "secondary"}>
            {status === "in-progress" ? "In Progress" : status === "completed" ? "Completed" : "Bookmarked"}
          </Badge>
          <span className="text-sm text-muted-foreground">{course.level}</span>
        </div>
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <span>Instructor: {course.instructor}</span>
        </div>
        {status === "in-progress" && course.progress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          <span>{course.duration}</span>
        </div>
        <Button size="sm">
          {status === "in-progress" ? "Continue" : status === "completed" ? "Review" : "Start Learning"}
        </Button>
      </CardFooter>
    </Card>
  )
}

const inProgressCourses = [
  {
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript basics to build responsive websites from scratch.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Sarah Johnson",
    duration: "12 hours",
    progress: 65,
    lessons: 24,
    level: "Beginner",
  },
  {
    title: "Introduction to React",
    description: "Master React.js and build modern, interactive web applications with this popular JavaScript library.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Michael Chen",
    duration: "15 hours",
    progress: 30,
    lessons: 32,
    level: "Intermediate",
  },
  {
    title: "Advanced JavaScript Concepts",
    description:
      "Dive deep into JavaScript with advanced topics like closures, prototypes, and asynchronous programming.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "David Wilson",
    duration: "10 hours",
    progress: 15,
    lessons: 20,
    level: "Advanced",
  },
]

const completedCourses = [
  {
    title: "CSS Flexbox and Grid Mastery",
    description: "Master modern CSS layout techniques with Flexbox and Grid to create responsive designs.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Emily Rodriguez",
    duration: "8 hours",
    lessons: 16,
    level: "Intermediate",
  },
  {
    title: "Git and GitHub Essentials",
    description: "Learn version control with Git and collaborate effectively using GitHub for your projects.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "James Wilson",
    duration: "6 hours",
    lessons: 12,
    level: "Beginner",
  },
]

const bookmarkedCourses = [
  {
    title: "Node.js Backend Development",
    description: "Build scalable server-side applications with Node.js, Express, and MongoDB.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Alex Johnson",
    duration: "18 hours",
    lessons: 36,
    level: "Intermediate",
  },
  {
    title: "UI/UX Design Principles",
    description:
      "Learn the fundamentals of user interface and user experience design to create intuitive applications.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Sophia Lee",
    duration: "10 hours",
    lessons: 20,
    level: "Beginner",
  },
]

