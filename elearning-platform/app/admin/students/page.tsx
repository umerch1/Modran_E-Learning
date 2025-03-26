import { AdminDashboardLayout } from "@/components/admin-dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Download, Filter } from "lucide-react"

export default function AdminStudentsPage() {
  return (
    <AdminDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button>Add New Student</Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Student Management</CardTitle>
          <div className="flex items-center gap-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-8" />
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Enrolled Courses</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <img
                        src={student.avatar || "/placeholder.svg"}
                        alt={student.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      {student.name}
                    </div>
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.enrolledCourses}</TableCell>
                  <TableCell>{student.progress}%</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        student.status === "Active"
                          ? "success"
                          : student.status === "Inactive"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.joined}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Courses</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>100</strong> students
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
    </AdminDashboardLayout>
  )
}

const students = [
  {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 3,
    progress: 68,
    status: "Active",
    joined: "Feb 15, 2025",
  },
  {
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 2,
    progress: 45,
    status: "Active",
    joined: "Feb 20, 2025",
  },
  {
    name: "James Wilson",
    email: "james.wilson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 4,
    progress: 92,
    status: "Active",
    joined: "Jan 10, 2025",
  },
  {
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 1,
    progress: 23,
    status: "Active",
    joined: "Mar 1, 2025",
  },
  {
    name: "Robert Chen",
    email: "robert.chen@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 2,
    progress: 51,
    status: "Inactive",
    joined: "Jan 5, 2025",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 3,
    progress: 78,
    status: "Active",
    joined: "Feb 12, 2025",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 5,
    progress: 85,
    status: "Active",
    joined: "Dec 20, 2024",
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 2,
    progress: 32,
    status: "Suspended",
    joined: "Jan 25, 2025",
  },
  {
    name: "David Thompson",
    email: "david.thompson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 1,
    progress: 15,
    status: "Active",
    joined: "Feb 28, 2025",
  },
  {
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    enrolledCourses: 4,
    progress: 67,
    status: "Active",
    joined: "Jan 15, 2025",
  },
]

