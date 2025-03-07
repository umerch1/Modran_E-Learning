import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentRegisterForm } from "@/components/student-register-form"
import { SiteHeader } from "@/components/site-header"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-muted-foreground">Sign up to start your learning journey</p>
            </div>
            <Tabs defaultValue="student" className="space-y-4">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="student">Student</TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <StudentRegisterForm />
              </TabsContent>
            </Tabs>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

