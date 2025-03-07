import { BookOpen, Users, Award, Clock } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Everything you need to succeed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools and resources you need to enhance your learning experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Expert-Led Courses</h3>
            <p className="text-center text-muted-foreground">
              Learn from industry professionals with real-world experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Community Support</h3>
            <p className="text-center text-muted-foreground">
              Connect with fellow learners and instructors for guidance.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Certificates</h3>
            <p className="text-center text-muted-foreground">Earn recognized certificates upon course completion.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Flexible Learning</h3>
            <p className="text-center text-muted-foreground">Study at your own pace, anytime and anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

