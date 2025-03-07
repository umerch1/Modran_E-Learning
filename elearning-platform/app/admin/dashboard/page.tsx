import { AdminDashboardLayout } from "@/components/admin-dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, DollarSign, TrendingUp } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <AdminDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>Add New Course</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">1,248</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">36</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+3 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">$24,320</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">68%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Recent Enrollments</h2>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentEnrollments.map((enrollment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{enrollment.student}</TableCell>
                  <TableCell>{enrollment.course}</TableCell>
                  <TableCell>{enrollment.date}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        enrollment.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {enrollment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminDashboardLayout>
  )
}

const recentEnrollments = [
  {
    student: "Alex Johnson",
    course: "Web Development Fundamentals",
    date: "Mar 6, 2025",
    status: "Active",
  },
  {
    student: "Maria Garcia",
    course: "Introduction to React",
    date: "Mar 5, 2025",
    status: "Pending",
  },
  {
    student: "James Wilson",
    course: "UX/UI Design Essentials",
    date: "Mar 4, 2025",
    status: "Active",
  },
  {
    student: "Sarah Lee",
    course: "Data Science Fundamentals",
    date: "Mar 3, 2025",
    status: "Active",
  },
  {
    student: "Robert Chen",
    course: "Mobile App Development",
    date: "Mar 2, 2025",
    status: "Pending",
  },
]

