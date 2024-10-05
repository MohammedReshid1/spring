import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My experience here has been transformative. The faculty and resources have prepared me for a successful career.",
      author: "Jane Doe",
      role: "Computer Science Graduate",
      avatar: "/placeholder.svg"
    },
    {
      quote: "The diverse community and innovative programs have broadened my perspective and opened up new opportunities.",
      author: "John Smith",
      role: "Business Administration Student",
      avatar: "/placeholder.svg"
    }
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow">
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.author} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}