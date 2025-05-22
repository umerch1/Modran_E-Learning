import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal, Plus, Filter } from "lucide-react";

export default function AdminCoursesPage() {
  return (
    <AdminDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Course
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-8 w-[250px]"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="h-10 w-16 rounded object-cover"
                          />
                          <div>
                            <div className="font-medium">{course.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {course.category}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{course.instructor}</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell>${course.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <svg
                            className="h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1">{course.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            course.status === "Published"
                              ? "default"
                              : course.status === "Draft"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {course.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit Course</DropdownMenuItem>
                            <DropdownMenuItem>View Analytics</DropdownMenuItem>
                            <DropdownMenuItem>Manage Content</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Delete Course
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between p-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>24</strong> courses
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardHeader>
              <CardTitle>Published Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Showing all published courses that are available to students.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardHeader>
              <CardTitle>Draft Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Showing all draft courses that are still in development.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle>Archived Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Showing all archived courses that are no longer available to
                students.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminDashboardLayout>
  );
}

const courses = [
  {
    title: "Web Development Fundamentals",
    category: "Development",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Sarah Johnson",
    students: 248,
    price: 49.99,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "Introduction to React",
    category: "Development",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Michael Chen",
    students: 186,
    price: 59.99,
    rating: 4.7,
    status: "Published",
  },
  {
    title: "Advanced JavaScript Concepts",
    category: "Development",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "David Wilson",
    students: 124,
    price: 69.99,
    rating: 4.9,
    status: "Published",
  },
  {
    title: "CSS Flexbox and Grid Mastery",
    category: "Design",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Emily Rodriguez",
    students: 156,
    price: 39.99,
    rating: 4.6,
    status: "Published",
  },
  {
    title: "Git and GitHub Essentials",
    category: "Development",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "James Wilson",
    students: 98,
    price: 29.99,
    rating: 4.5,
    status: "Published",
  },
  {
    title: "Node.js Backend Development",
    category: "Development",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Alex Johnson",
    students: 112,
    price: 64.99,
    rating: 4.7,
    status: "Draft",
  },
  {
    title: "UI/UX Design Principles",
    category: "Design",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Sophia Lee",
    students: 178,
    price: 54.99,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "Mobile App Development with React Native",
    category: "Development",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Robert Chen",
    students: 86,
    price: 74.99,
    rating: 4.6,
    status: "Draft",
  },
  {
    title: "Python for Data Science",
    category: "Data Science",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Maria Garcia",
    students: 210,
    price: 59.99,
    rating: 4.9,
    status: "Published",
  },
  {
    title: "Responsive Web Design",
    category: "Design",
    image: "/placeholder.svg?height=40&width=64",
    instructor: "Thomas Brown",
    students: 142,
    price: 44.99,
    rating: 4.7,
    status: "Archived",
  },
];
