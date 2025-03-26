import { AdminDashboardLayout } from "@/components/admin-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download } from "lucide-react"

export default function AdminReportsPage() {
  return (
    <AdminDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Total Students" value="1,248" change="+12%" trend="up" />
            <MetricCard title="Course Enrollments" value="3,642" change="+8%" trend="up" />
            <MetricCard title="Completion Rate" value="68%" change="+5%" trend="up" />
            <MetricCard title="Total Revenue" value="$24,320" change="+18%" trend="up" />
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Student Growth</CardTitle>
                <CardDescription>New student registrations over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Student Growth Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Course Popularity</CardTitle>
                <CardDescription>Most popular courses by enrollment</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Course Popularity Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Student Demographics</CardTitle>
                <CardDescription>Breakdown by age and location</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Demographics Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>Activity and participation rates</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Engagement Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Retention Rate</CardTitle>
                <CardDescription>Student retention over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Retention Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Course Completion</CardTitle>
                <CardDescription>Completion rates by course</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Completion Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Course Ratings</CardTitle>
                <CardDescription>Average ratings by course</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Ratings Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Engagement</CardTitle>
                <CardDescription>Most engaged course content</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Content Engagement Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Growth</CardTitle>
                <CardDescription>Monthly revenue trends</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Revenue Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Course</CardTitle>
                <CardDescription>Top performing courses</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Course Revenue Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Breakdown by payment type</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Payment Methods Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AdminDashboardLayout>
  )
}

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
}

function MetricCard({ title, value, change, trend }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs mt-1 ${
            trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          {change} from last period
        </p>
      </CardContent>
    </Card>
  )
}

