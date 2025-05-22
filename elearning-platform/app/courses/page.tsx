import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Clock, Users, Star } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Courses
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover a wide range of courses taught by industry experts to
                  help you advance your career.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search courses..."
                    className="w-full appearance-none bg-background pl-8 shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Course Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Available Courses</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-center">
                  <Button variant="outline" className="mx-2">
                    Previous
                  </Button>
                  <Button variant="outline" className="mx-2">
                    1
                  </Button>
                  <Button className="mx-2">2</Button>
                  <Button variant="outline" className="mx-2">
                    3
                  </Button>
                  <Button variant="outline" className="mx-2">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

interface Course {
  title: string;
  description: string;
  image: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-background">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
        />
      </div>
      {course.isBestseller && (
        <Badge className="absolute left-2 top-2">Bestseller</Badge>
      )}
      {course.isNew && (
        <Badge variant="secondary" className="absolute left-2 top-2">
          New
        </Badge>
      )}
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{course.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center pt-2 text-sm">
          <span className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
            {course.students} students
          </span>
        </div>
        <div className="flex items-center pt-2 text-sm">
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
            {course.duration}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
            {course.level}
          </span>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center">
            {course.originalPrice ? (
              <div className="flex items-center">
                <span className="text-lg font-bold">${course.price}</span>
                <span className="ml-2 text-sm line-through text-muted-foreground">
                  ${course.originalPrice}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold">${course.price}</span>
            )}
          </div>
          <Button size="sm">Enroll Now</Button>
        </div>
      </div>
    </div>
  );
}

const courses: Course[] = [
  {
    title: "Web Development Fundamentals",
    description:
      "Learn HTML, CSS, and JavaScript basics to build responsive websites from scratch.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Sarah Johnson",
    price: 49.99,
    originalPrice: 99.99,
    rating: 4.8,
    students: 12548,
    duration: "12 hours",
    level: "Beginner",
    category: "Development",
    isBestseller: true,
  },
  {
    title: "Introduction to React",
    description:
      "Master React.js and build modern, interactive web applications with this popular JavaScript library.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Michael Chen",
    price: 59.99,
    rating: 4.7,
    students: 8654,
    duration: "15 hours",
    level: "Intermediate",
    category: "Development",
  },
  {
    title: "Advanced JavaScript Concepts",
    description:
      "Dive deep into JavaScript with advanced topics like closures, prototypes, and asynchronous programming.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "David Wilson",
    price: 69.99,
    rating: 4.9,
    students: 5421,
    duration: "10 hours",
    level: "Advanced",
    category: "Development",
  },
  {
    title: "UI/UX Design Principles",
    description:
      "Learn the fundamentals of user interface and user experience design to create intuitive applications.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Sophia Lee",
    price: 54.99,
    originalPrice: 89.99,
    rating: 4.8,
    students: 7823,
    duration: "8 hours",
    level: "Beginner",
    category: "Design",
  },
  {
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile applications for iOS and Android using React Native.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Robert Chen",
    price: 74.99,
    rating: 4.6,
    students: 3254,
    duration: "20 hours",
    level: "Intermediate",
    category: "Development",
    isNew: true,
  },
  {
    title: "Python for Data Science",
    description:
      "Learn Python programming and essential libraries for data analysis and visualization.",
    image: "/placeholder.svg?height=180&width=320",
    instructor: "Maria Garcia",
    price: 59.99,
    rating: 4.9,
    students: 9876,
    duration: "18 hours",
    level: "Beginner",
    category: "Data Science",
    isBestseller: true,
  },
];
