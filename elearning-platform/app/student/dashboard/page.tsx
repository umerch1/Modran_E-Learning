"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { StudentDashboardLayout } from "@/components/student-dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function StudentDashboardPage() {
  const [inProgressCourses, setInProgressCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/courses?populate=image`
        );
        const courses = response.data.data.map((course: any) => ({
          id: course.id,
          title: course?.title,
          description: course.description,
          image: course?.image?.url || "/placeholder.svg",
          duration: course.duration,
          progress: course.progress,
          status: course.courseStatus,
        }));
        setInProgressCourses(
          courses.filter((c: any) => c.status === "in-progress")
        );
        setCompletedCourses(
          courses.filter((c: any) => c.status === "completed")
        );
        setBookmarkedCourses(
          courses.filter((c: any) => c.status === "bookmarked")
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
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>Browse Courses</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Enrolled Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inProgressCourses.length +
                completedCourses.length +
                bookmarkedCourses.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCourses.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Certificates Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCourses.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Hours Spent Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">In Progress</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {inProgressCourses.map((course: any) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardContent>{course.description}</CardContent>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <Button size="sm">Continue</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </StudentDashboardLayout>
  );
}
