"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { StudentDashboardLayout } from "@/components/student-dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  image: object;
  instructor: string;
  duration: string;
  progress?: number;
  lessons?: number;
  level: string;
  status: "in-progress" | "completed" | "bookmarked";
}

export default function StudentCoursesPage() {
  const [inProgressCourses, setInProgressCourses] = useState<Course[]>([]);
  const [completedCourses, setCompletedCourses] = useState<Course[]>([]);
  const [bookmarkedCourses, setBookmarkedCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/courses?populate=image`
        );
        console.log("response________,", response.data.data);
        const courses = response.data.data.map((course: any) => ({
          id: course.id,
          title: course?.title,
          description: course.description,
          image: course?.image?.url || "/placeholder.svg",
          instructor: course.instructor,
          duration: course.duration,
          progress: course.progress,
          lessons: course.lessons,
          level: course.level,
          status: course.courseStatus,
        }));
        setCompletedCourses(
          courses.filter((c: Course) => c.status === "completed")
        );
        setInProgressCourses(
          courses.filter((c: Course) => c.status === "in-progress")
        );
        setBookmarkedCourses(
          courses.filter((c: Course) => c.status === "bookmarked")
        );
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <StudentDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <Button variant="outline" className="hidden md:inline-flex">
          Add New Course
        </Button>
      </div>

      <Tabs defaultValue="in-progress" className="space-y-6">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                status={course.status}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                status={course.status}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookmarked">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookmarkedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                status={course.status}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </StudentDashboardLayout>
  );
}

interface CourseCardProps {
  course: Course;
  status: "in-progress" | "completed" | "bookmarked";
}

function CourseCard({ course, status }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={`http://localhost:1337${course?.image}` || "/placeholder.svg"}
          alt={course.title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge
            variant={
              course.status == "in-progress"
                ? "outline"
                : course.status == "completed"
                ? "default"
                : "secondary"
            }
          >
            {course.status}
          </Badge>
          <span className="text-sm text-muted-foreground">{course.level}</span>
        </div>
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
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
          {status === "in-progress"
            ? "Continue"
            : status === "completed"
            ? "Review"
            : "Start Learning"}
        </Button>
      </CardFooter>
    </Card>
  );
}
