export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Students Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community of learners about their experiences with
              our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 rounded-lg border p-6"
            >
              <div className="space-y-2">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Ahsan Ali mansoor",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Web Development Bootcamp",
    rating: 5,
    text: "This platform completely transformed my career. The courses are well-structured and the instructors are incredibly knowledgeable.",
  },
  {
    name: "Hassan Junaid",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Data Science Fundamentals",
    rating: 5,
    text: "I've tried many online learning platforms, but this one stands out. The community support is amazing and the content is top-notch.",
  },
  {
    name: "Noor Fatima",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "UX/UI Design Essentials",
    rating: 4,
    text: "The flexibility of learning at my own pace while still having access to expert guidance has been invaluable for my professional growth.",
  },
];
