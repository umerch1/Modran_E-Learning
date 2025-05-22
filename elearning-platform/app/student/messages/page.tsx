import { StudentDashboardLayout } from "@/components/student-dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Send, Paperclip } from "lucide-react"

export default function StudentMessagesPage() {
  return (
    <StudentDashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <Button>New Message</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card className="h-[calc(100vh-12rem)]">
            <CardHeader className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-8" />
              </div>
            </CardHeader>
            <Tabs defaultValue="all">
              <div className="px-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="m-0">
                <div className="h-[calc(100vh-16rem)] overflow-auto">
                  {conversations.map((conversation, index) => (
                    <ConversationItem key={index} conversation={conversation} isActive={index === 0} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <div className="h-[calc(100vh-16rem)] overflow-auto">
                  {conversations
                    .filter((c) => c.unread)
                    .map((conversation, index) => (
                      <ConversationItem key={index} conversation={conversation} isActive={false} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="archived" className="m-0">
                <div className="h-[calc(100vh-16rem)] overflow-auto">
                  <div className="p-4 text-center text-muted-foreground">No archived messages</div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-[calc(100vh-12rem)] flex flex-col">
            <CardHeader className="px-6 py-4 border-b">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Sarah Johnson</CardTitle>
                  <p className="text-sm text-muted-foreground">Web Development Instructor</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-6">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <MessageBubble key={index} message={message} />
                ))}
              </div>
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input placeholder="Type your message..." className="flex-1" />
                <Button size="icon" className="rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </StudentDashboardLayout>
  )
}

interface Conversation {
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: boolean
}

function ConversationItem({ conversation, isActive }: { conversation: Conversation; isActive: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${isActive ? "bg-muted" : ""}`}>
      <div className="relative">
        <Avatar>
          <AvatarImage src={conversation.avatar} alt={conversation.name} />
          <AvatarFallback>
            {conversation.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        {conversation.unread && <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary"></span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium truncate">{conversation.name}</h4>
          <span className="text-xs text-muted-foreground">{conversation.time}</span>
        </div>
        <p className={`text-sm truncate ${conversation.unread ? "font-medium" : "text-muted-foreground"}`}>
          {conversation.lastMessage}
        </p>
      </div>
    </div>
  )
}

interface Message {
  content: string
  time: string
  sender: "user" | "other"
  read: boolean
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.sender === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-lg p-3 ${isUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
        <p>{message.content}</p>
        <div className={`text-xs mt-1 ${isUser ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {message.time} {isUser && (message.read ? "• Read" : "• Delivered")}
        </div>
      </div>
    </div>
  )
}

const conversations: Conversation[] = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Great job on your latest assignment!",
    time: "10:15 AM",
    unread: true,
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "When is the next live session?",
    time: "Yesterday",
    unread: true,
  },
  {
    name: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I've shared some additional resources for the JavaScript module.",
    time: "Mar 5",
    unread: false,
  },
  {
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for your help with the CSS layout challenge!",
    time: "Mar 4",
    unread: false,
  },
  {
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The study group is meeting tomorrow at 5 PM.",
    time: "Mar 3",
    unread: false,
  },
]

const messages: Message[] = [
  {
    content: "Hi John, how are you progressing with the JavaScript assignment?",
    time: "10:00 AM",
    sender: "other",
    read: true,
  },
  {
    content: "I'm doing well! I've completed most of the functions but I'm stuck on the async part.",
    time: "10:05 AM",
    sender: "user",
    read: true,
  },
  {
    content: "That's a common challenge. Would you like to schedule a quick call to go through it together?",
    time: "10:08 AM",
    sender: "other",
    read: true,
  },
  {
    content: "That would be great! Are you available tomorrow afternoon?",
    time: "10:10 AM",
    sender: "user",
    read: true,
  },
  {
    content: "Great job on your latest assignment! I was impressed with your solution to the DOM manipulation problem.",
    time: "10:15 AM",
    sender: "other",
    read: false,
  },
]

