"use client";
import { StudentDashboardLayout } from "@/components/student-dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CalendarIcon, Video, BookOpen } from "lucide-react";

export default function StudentCalendarPage() {
  const today = new Date();

  return (
    <StudentDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <Button>Add Event</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
              <CardDescription>
                Manage your classes and deadlines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={today}
                className="rounded-md border"
                components={{
                  DayContent: (props: any) => {
                    const date = props.date.getDate();
                    const hasEvent = calendarEvents.some((event) => {
                      const eventDate = new Date(event.date);
                      return (
                        eventDate.getDate() === date &&
                        eventDate.getMonth() === props.date.getMonth() &&
                        eventDate.getFullYear() === props.date.getFullYear()
                      );
                    });
                    return (
                      <div className="relative h-9 w-9 p-0 flex items-center justify-center">
                        {props.children}
                        {hasEvent && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></div>
                        )}
                      </div>
                    );
                  },
                }}
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="today">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <TabsContent value="today" className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Today's Schedule</h2>
              {todayEvents.length > 0 ? (
                todayEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))
              ) : (
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    No events scheduled for today
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="upcoming" className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </TabsContent>
            <TabsContent value="past" className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Past Events</h2>
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

interface Event {
  title: string;
  date: string;
  time: string;
  type: "class" | "assignment" | "exam" | "meeting";
  course: string;
}

function EventCard({ event }: { event: Event }) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "class":
        return <Video className="h-5 w-5" />;
      case "assignment":
        return <BookOpen className="h-5 w-5" />;
      case "exam":
        return <CalendarIcon className="h-5 w-5" />;
      case "meeting":
        return <Clock className="h-5 w-5" />;
      default:
        return <CalendarIcon className="h-5 w-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "class":
        return "default";
      case "assignment":
        return "secondary";
      case "exam":
        return "destructive";
      case "meeting":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div
            className={`rounded-full p-2 bg-${getEventColor(
              event.type
            )}/10 text-${getEventColor(event.type)}`}
          >
            {getEventIcon(event.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{event.title}</h3>
              <Badge variant={getEventColor(event.type) as any}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{event.course}</p>
            <div className="flex items-center mt-2 text-sm">
              <CalendarIcon className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{event.date}</span>
              <Clock className="ml-3 mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{event.time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const todayEvents: Event[] = [
  {
    title: "Web Development Live Session",
    date: "March 7, 2025",
    time: "10:00 AM - 11:30 AM",
    type: "class",
    course: "Web Development Fundamentals",
  },
  {
    title: "JavaScript Assignment Due",
    date: "March 7, 2025",
    time: "11:59 PM",
    type: "assignment",
    course: "Advanced JavaScript Concepts",
  },
];

const upcomingEvents: Event[] = [
  {
    title: "React Components Workshop",
    date: "March 10, 2025",
    time: "2:00 PM - 4:00 PM",
    type: "class",
    course: "Introduction to React",
  },
  {
    title: "Midterm Examination",
    date: "March 15, 2025",
    time: "9:00 AM - 11:00 AM",
    type: "exam",
    course: "Web Development Fundamentals",
  },
  {
    title: "Study Group Meeting",
    date: "March 12, 2025",
    time: "5:00 PM - 6:30 PM",
    type: "meeting",
    course: "Introduction to React",
  },
];

const pastEvents: Event[] = [
  {
    title: "CSS Layout Techniques",
    date: "March 3, 2025",
    time: "10:00 AM - 11:30 AM",
    type: "class",
    course: "Web Development Fundamentals",
  },
  {
    title: "HTML Structure Assignment",
    date: "March 1, 2025",
    time: "11:59 PM",
    type: "assignment",
    course: "Web Development Fundamentals",
  },
];

const calendarEvents = [...todayEvents, ...upcomingEvents, ...pastEvents];
